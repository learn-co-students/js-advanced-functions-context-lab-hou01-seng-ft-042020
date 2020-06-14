/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = (arr) => {
    return arr.map(a => createEmployeeRecord(a))
}

let createTimeInEvent = function(timein) {
    let [date, hour] = timein.split(' ')
    this.timeInEvents.push({type: "TimeIn", hour: parseInt(hour, 10), date})
    return this
}

let createTimeOutEvent = function(timeout) {
    let [date, hour] = timeout.split(' ')
    this.timeOutEvents.push({type: "TimeOut", hour: parseInt(hour, 10), date})
    return this
}

function hoursWorkedOnDate(inputDate) {
    let inTime = this.timeInEvents.find(r => r.date === inputDate)
    let outTime = this.timeOutEvents.find(r => r.date === inputDate)
    let hours = (outTime.hour - inTime.hour) / 100
    return hours
}

function wagesEarnedOnDate(inputDate) {
    let hours = hoursWorkedOnDate.call(this, inputDate)
    return hours * (this.payPerHour)
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(arr, first) {
    return arr.find(rec => rec.firstName === first)
}

let calculatePayroll = function(arr) {
    return arr.reduce(function(acc, rec) {
        return acc + allWagesFor.call(rec)
    },0)
}