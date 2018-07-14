import * as utils from './calendarUtils';

describe('calendarUtils', () => {

    it('should return correct # of days for january', () => {
        expect(utils.daysInMonth(0,2018)).toBe(31);
    });

    it('should return correct # of days for non-leap february', () => {
        expect(utils.daysInMonth(1, 2019)).toBe(28);
    });


    it('should return correct # of days for leap february', () => {
        expect(utils.daysInMonth(1, 2020)).toBe(29);
    });

    it('should return correct name for month number january', () => {
        expect(utils.nameForMonth(0)).toBe('January');
    });

    it('should return correct name for month number July', () => {
        expect(utils.nameForMonth(6)).toBe('July');
    });

    it('should return weekday offset 0 for 1st monday', () => {
        expect(utils.getWeekdayOffsetForMonth(6, 2019)).toBe(0);
    });

    it('should return weekday offset 3 for 1st thursday', () => {
        expect(utils.getWeekdayOffsetForMonth(10, 2018)).toBe(3);
    });

});