import fromUnixTime from 'date-fns/fromUnixTime'

const timeStamp2Date = (time_stamp) => fromUnixTime(time_stamp).toDateString();
const timeStamp2Time = (time_stamp) => fromUnixTime(time_stamp).toLocaleTimeString();

export { timeStamp2Date, timeStamp2Time };