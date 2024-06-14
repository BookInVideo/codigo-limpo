const moment = require('moment');

class DateUtil {
    formatDate(date, dateFormat) {
        return moment(date).format(dateFormat);
    }

    isAfterToday(date) {
        const today = moment();
        return moment(date).isAfter(today, 'day');
    }
    
    isToday(date) {
        const today = moment();
        return today.isSame(moment(date), 'day');
    }

    currentHour() {
        return moment().hour();
    }
}

module.exports = DateUtil;