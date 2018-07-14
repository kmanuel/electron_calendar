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

});