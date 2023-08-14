/* input is a string in the format ab:cd
 */

function timeWord(numTime) {
    const splitTime = numTime.split(':');

    const h = +splitTime[0];
    const m = +splitTime[1];

    if (h + m === 0)
	return 'midnight'

    if (h === 12 && m  === 0) 
	return 'noon'
    
    const hours = getHours(h)

    if (m === 0) {
	return hours.hours + " o'clock" + hours.meridiem;
    }

    else if (m < 10) {
	return hours.hours + ' oh ' + lookup(splitTime[1][1]) + hours.meridiem
    }

    else if (m < 14) {
	return hours.hours + lookup(splitTime[1]) + hours.meridiem;
    }

    else if (m >= 20 && (m % 10) === 0) {
	return hours.hours
	    + " "
	    + lookup(splitTime[1][0] + '0')
	    + hours.meridiem;
    }
	
    else {
	return hours.hours
	    + " "
	    + lookup(splitTime[1][0] +'0')
	    + " "
	    + lookup(splitTime[1][1])
	    + hours.meridiem;
    }
}

    function getHours (h) {
	const standardHours = (h === 12) ? h : h % 12;
	const hours = lookup(String(standardHours))
	const meridiem = (h >= 12) ? ' pm' : ' am';
	return {hours, meridiem}
}

function lookup (timeSegment) {

    let convChart = {

	'1': 'one',
	'2': 'two',
	'3': 'three',
	'4': 'four',
	'5': 'five',
	'6': 'six',
	'7': 'seven',
	'8': 'eight',
	'9': 'nine',
	'10': 'ten',
	'11': 'eleven',
	'12': 'twelve',
	'13': 'thirteen',
	'20': 'twenty',
	'30': 'thirty',
	'40': 'fourty',
	'50': 'fifty',
    }

    return convChart[timeSegment]
};



module.exports = timeWord
