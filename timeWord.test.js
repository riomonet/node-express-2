const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

    test('noon' , () => {
	expect(timeWord('12:00')).toEqual('noon')
    });
    test('midnight' , () => {
	expect(timeWord('00:00')).toEqual('midnight')
    });
    test('before noon 0 minutes' , () => {
	expect(timeWord('09:00')).toEqual(`nine o'clock am`)
    });
    test('before noon mins % 10 === 0 ' , () => {
	expect(timeWord('10:20')).toEqual(`ten twenty am`)
    });
    test('before noon any ' , () => {
	expect(timeWord('10:23')).toEqual(`ten twenty three am`)
    });
    test('before noon mins % 10 ' , () => {
	expect(timeWord('10:09')).toEqual(`ten oh nine am`)
    });
    test('before noon mins % 10 === 0 ' , () => {
	expect(timeWord('7:20')).toEqual(`seven twenty am`)
    });
    test('before noon any ' , () => {
	expect(timeWord('7:23')).toEqual(`seven twenty three am`)
    });
    test('before noon mins % 10 ' , () => {
	expect(timeWord('7:09')).toEqual(`seven oh nine am`)
    });
        test('after noon 0 minutes' , () => {
	expect(timeWord('16:00')).toEqual(`four o'clock pm`)
    });
    test('after noon mins % 10 === 0 ' , () => {
	expect(timeWord('18:20')).toEqual(`six twenty pm`)
    });
    test('after noon any ' , () => {
	expect(timeWord('22:23')).toEqual(`ten twenty three pm`)
    });
    test('afte noon mins % 10 ' , () => {
	expect(timeWord('19:09')).toEqual(`seven oh nine pm`)
    });
    test('after noon mins % 10 === 0 ' , () => {
	expect(timeWord('12:20')).toEqual(`twelve twenty pm`)
    });
    test('after noon any ' , () => {
	expect(timeWord('15:23')).toEqual(`three twenty three pm`)
    });

});


