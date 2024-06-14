const DateUtil = require('./DateUtil');

describe('DateUtil', function() {
    it('format date', function() {
        const dateUtil = new DateUtil();
        const juneIndex = 5;
        const formattedDate = dateUtil.formatDate(new Date(2024, juneIndex, 10), 'YYYY-MM-DD');
        expect(formattedDate).toBe('2024-06-10');
    })

    it('is after today', function() {
        const juneIndex = 5;
        mockTodayDate(new Date(2024, juneIndex, 10));
        const dateUtil = new DateUtil();
        const isAfterToday = dateUtil.isAfterToday(new Date(2024, juneIndex, 11));
        expect(isAfterToday).toBe(true);
    })

    it('is today', function() {
        const juneIndex = 5;
        mockTodayDate(new Date(2024, juneIndex, 10));
        const dateUtil = new DateUtil();
        const isToday = dateUtil.isToday(new Date(2024, juneIndex, 10));
        expect(isToday).toBe(true);
    })

    it('current hour', function() {
        const juneIndex = 5;
        mockTodayDate(new Date(2024, juneIndex, 10, 12));
        const dateUtil = new DateUtil();
        const currentHour = dateUtil.currentHour();
        expect(currentHour).toBe(12);
    })

    function mockTodayDate(aDate) {
        jest.useFakeTimers()
            .setSystemTime(aDate);
    }
})