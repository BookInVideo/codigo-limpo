const moment = require('moment');

class AppointmentScheduler {
    _appointments = [];
    _maxAppointmentsPerDay = 8;

    constructor(appointments) {
        this.appointments = appointments;
    }

    getAppointments() {
        const result = this.appointments.map((appointment) => {
            return { 
                date: moment(appointment.date).format('YYYY-MM-DD'), 
                slot: { ...appointment.slot }
            }
        });
        return result;
    }

    groupAppointmentsByDate() {
        const result = {};
        let dates = this._getAppointmentDates();
        dates.forEach((date) => {
            result[date] = this._getAppointmentSlotsByDate(date);
        })
        return result;
    }

    _getAppointmentDates() {
        const result = [];
        this.appointments.forEach((appointment) => {
            const dateString = moment(appointment.date).format('YYYY-MM-DD');
            if (!result.includes(dateString)) {
                result.push(dateString);
            }
        })
        return result;
    }

    _getAppointmentSlotsByDate(date) {
        const result = [];
        this.appointments.forEach((appointment) => {
            const dateString = moment(appointment.date).format('YYYY-MM-DD');
            if (dateString === date) {
                result.push({ ...appointment.slot });
            }
        })
        return result;
    }

    getBusyScheduleDates() {
        const result = [];
        const appointmentsByDate = this.groupAppointmentsByDate(); 
        Object.entries(appointmentsByDate).map(([date, appointments]) => {
            if (appointments.length >= this._maxAppointmentsPerDay)
                result.push(date);
        })
        return result;
    }

    checkDateAvailability(date) {
        const dateString = moment(date).format('YYYY-MM-DD');
        const busyDates = this.getBusyScheduleDates();
        return !busyDates.includes(dateString);
    }

    getNextAppointment() {
        const upcommingAppointments = this._getUpcommingAppointments();
        if (upcommingAppointments.length) {
            let nearest = this._findNearestAppointment(upcommingAppointments);
            return { 
                date: moment(nearest.date).format('YYYY-MM-DD'), 
                slot: { ...nearest.slot } 
            };
        }
        return null;
    }

    _getUpcommingAppointments() {
        const result = this.appointments.filter((appointment) => {
            return this._isUpcomming(appointment);
        })
        return result;
    }

    _isUpcomming(appointment) {
        return (
            this._isAfterToday(appointment.date) ||
            this._isInTodaysNextAppointments(appointment) 
        );
    }

    _isAfterToday(date) {
        const today = moment();
        return moment(date).isAfter(today, 'day');
    }

    _isInTodaysNextAppointments(appointment) {
        const today = moment();
        const appointmentDate = moment(appointment.date);
        return (
            today.isSame(appointmentDate, 'day') && 
            appointment.slot.start > today.hour()
        );
    }

    _findNearestAppointment(appointments) {
        const sortedAppointments = appointments.toSorted((a, b) => {
            return a.slot.start - b.slot.start;
        });
        return sortedAppointments[0];
    }
}

module.exports = AppointmentScheduler;