// Create a function that takes two dates 
// And returns the number of days between the first and second date.

// https://edabit.com/challenge/3hdXjfJozQySRC3gE

const getDateInfo = (date) => {
    const dateInfo = date.toString().split(' ')
    
    return {
        day: parseInt(dateInfo[2]),
        month: dateInfo[1],
        year: parseInt(dateInfo[3])
    }
}


const getDays = (date1, date2) => {
    const firstDate = getDateInfo(date1);
    const secondDate = getDateInfo(date2);

    if( firstDate.year !== secondDate.year || firstDate.month !== secondDate.month ) {
        return 'Dates may not all be in the same month/year.'
    } else {
        const res = Math.abs(firstDate.day - secondDate.day)
        return res
    }
}

console.log(
    getDays(
        new Date("June 14, 2019"),
        new Date("June 20, 2019")
    )
)

console.log(
    getDays(
        new Date("December 29, 2018"),
        new Date("January 1, 2019")
    )
)

console.log(
    getDays(
        new Date("July 20, 2019"),
        new Date("July 30, 2019")
    )
)