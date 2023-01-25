import fromUnixTime from 'date-fns/fromUnixTime'

const timeStamp2Date = (time_stamp) => fromUnixTime(time_stamp).toDateString();
const timeStamp2Time = (time_stamp) => fromUnixTime(time_stamp).toLocaleTimeString();

// ==============================================

function getDateXDaysAgo(numOfDays, date = new Date()) {
  const daysAgo = new Date(date.getTime());
  daysAgo.setDate(date.getDate() - numOfDays);
  return daysAgo;
}

// ==============================================

export { timeStamp2Date, timeStamp2Time, getDateXDaysAgo };