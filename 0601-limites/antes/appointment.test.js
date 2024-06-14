const AppointmentScheduler = require('./index');

describe('AppointmentScheduler', function () {
    const juneIndex = 5;

    it('no appointment', function() {
        const scheduler = new AppointmentScheduler([]);
        const appointments = scheduler.getAppointments();
        expect(appointments.length).toBe(0);
    })

    it('one appointment', function() {
        const scheduler = new AppointmentScheduler([
            { date: new Date(2024, juneIndex, 9), slot: { start: 10, end: 11 } }
        ]);

        const appointments = scheduler.getAppointments();

        expect(appointments.length).toBe(1);
        expect(appointments[0].date).toEqual('2024-06-09');
        expect(appointments[0].slot).toEqual({start: 10, end: 11});
    })

    it('appointments by date', function() {
        const scheduler = new AppointmentScheduler([
            { date: new Date(2024, juneIndex, 9), slot: {start: 10, end: 11} },
            { date: new Date(2024, juneIndex, 9), slot: {start: 12, end: 13} },
            { date: new Date(2024, juneIndex, 10), slot: {start: 15, end: 16} },
        ]);

        const appointmentsByDate = scheduler.groupAppointmentsByDate();

        expect(appointmentsByDate).toEqual({
            "2024-06-09": [
                { start: 10, end: 11 },
                { start: 12, end: 13 }
            ],
            "2024-06-10": [
                { start: 15, end: 16 }
            ]
        });
    });

    it('busy schedule days', function() {
        const date = new Date(2024, juneIndex, 9);
        const scheduler = new AppointmentScheduler([
            { date, slot: {start: 8, end: 9} },
            { date, slot: {start: 9, end: 10} },
            { date, slot: {start: 10, end: 11} },
            { date, slot: {start: 11, end: 12} },
            { date, slot: {start: 13, end: 14} },
            { date, slot: {start: 14, end: 15} },
            { date, slot: {start: 15, end: 16} },
            { date, slot: {start: 16, end: 17} },
        ]);
        
        const busyDates = scheduler.getBusyScheduleDates();

        expect(busyDates.length).toBe(1);
        expect(busyDates).toEqual(["2024-06-09"]);
    })

    it('date availability', function() {
        const date = new Date(2024, juneIndex, 30);
        const scheduler = new AppointmentScheduler([
            { date, slot: {start: 8, end: 9} },
            { date, slot: {start: 9, end: 10} },
            { date, slot: {start: 10, end: 11} },
            { date, slot: {start: 11, end: 12} },
            { date, slot: {start: 13, end: 14} },
            { date, slot: {start: 14, end: 15} },
            { date, slot: {start: 15, end: 16} },
            { date, slot: {start: 16, end: 17} },
        ]);
        
        const isDateAvailable = scheduler.checkDateAvailability(date);

        expect(isDateAvailable).toBe(false);
    });

    it('next appointment cannot be at the current time', function() {
        mockTodayDate(new Date(2024, juneIndex, 9, 11));
        const scheduler = new AppointmentScheduler([
            { 
                date: new Date(2024, juneIndex, 9), 
                slot: { start: 11, end: 12 }
            },
        ]);
        
        const nextAppoinment = scheduler.getNextAppointment();

        expect(nextAppoinment).toBe(null);
    });

    it('next appointment tommorow', function() {
        mockTodayDate(new Date(2024, juneIndex, 9));
        const scheduler = new AppointmentScheduler([
            { 
                date: new Date(2024, juneIndex, 10), 
                slot: { start: 11, end: 12 } 
            },
        ]);
        
        const nextAppoinment = scheduler.getNextAppointment();

        expect(nextAppoinment).toEqual({ 
            date: '2024-06-10', 
            slot: { start: 11, end: 12 }
        });
    });

    it('next appointment in the same day', function() {
        mockTodayDate(new Date(2024, juneIndex, 9, 11));
        const scheduler = new AppointmentScheduler([
            { 
                date: new Date(2024, juneIndex, 9), 
                slot: { start: 12, end: 13 } 
            },
        ]);
        
        const nextAppoinment = scheduler.getNextAppointment();

        expect(nextAppoinment).toEqual({ 
            date: '2024-06-09', 
            slot: { start: 12, end: 13 }
        });
    });

    it('next appointment cannot be in a past day', function() {
        mockTodayDate(new Date(2024, juneIndex, 9));
        const scheduler = new AppointmentScheduler([
            { 
                date: new Date(2024, juneIndex, 8), 
                slot: { start: 12, end: 13 } 
            },
        ]);
        
        const nextAppoinment = scheduler.getNextAppointment();

        expect(nextAppoinment).toBe(null);
    });

    it('next appointment cannot be in a past hour', function() {
        mockTodayDate(new Date(2024, juneIndex, 9, 11));
        const scheduler = new AppointmentScheduler([
            { 
                date: new Date(2024, juneIndex, 9), 
                slot: { start: 10, end: 11 } 
            },
        ]);
        
        const nextAppoinment = scheduler.getNextAppointment();

        expect(nextAppoinment).toBe(null);
    });

    it('get the correct next appointment', function() {
        mockTodayDate(new Date(2024, juneIndex, 9));
        const scheduler = new AppointmentScheduler([
            { 
                date: new Date(2024, juneIndex, 9), 
                slot: { start: 12, end: 13 } 
            },
            { 
                date: new Date(2024, juneIndex, 9), 
                slot: { start: 14, end: 15 } 
            },
            { 
                date: new Date(2024, juneIndex, 9), 
                slot: { start: 11, end: 12 } 
            },
        ]);
        
        const nextAppoinment = scheduler.getNextAppointment();

        expect(nextAppoinment).toEqual({ 
            date: "2024-06-09", 
            slot: { start: 11, end: 12 } 
        });
    });

    function mockTodayDate(aDate) {
        jest.useFakeTimers()
            .setSystemTime(aDate);
    }
})