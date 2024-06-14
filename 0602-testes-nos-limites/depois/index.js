
class AppointmentScheduler {
    _appointments = [];
    _maxAppointmentsPerDay = 8;

    _dateUtil;

    constructor(appointments, dateUtil) {
        this.appointments = appointments;
        this._dateUtil = dateUtil;
    }

    getAppointments() {
        const result = this.appointments.map((appointment) => {
            return { 
                date: this._dateUtil.formatDate(appointment.date, 'YYYY-MM-DD'), 
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
            const dateString = this._dateUtil.formatDate(appointment.date, 'YYYY-MM-DD');
            if (!result.includes(dateString)) {
                result.push(dateString);
            }
        })
        return result;
    }

    _getAppointmentSlotsByDate(date) {
        const result = [];
        this.appointments.forEach((appointment) => {
            const dateString = this._dateUtil.formatDate(appointment.date, 'YYYY-MM-DD');
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
        const dateString = this._dateUtil.formatDate(date, 'YYYY-MM-DD');
        const busyDates = this.getBusyScheduleDates();
        return !busyDates.includes(dateString);
    }

    getNextAppointment() {
        const upcommingAppointments = this._getUpcommingAppointments();
        if (upcommingAppointments.length) {
            let nearest = this._findNearestAppointment(upcommingAppointments);
            return { 
                date: this._dateUtil.formatDate(nearest.date, 'YYYY-MM-DD'), 
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
        return this._dateUtil.isAfterToday(date);
    }

    _isInTodaysNextAppointments(appointment) {
        return (
            this._dateUtil.isToday(appointment.date) && 
            appointment.slot.start > this._dateUtil.currentHour()
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