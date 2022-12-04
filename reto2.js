//const year = 2022
//const holidays = ['01/06', '04/01', '12/25']

const year = 2000
const holidays = ['01/01']

function countHours(year, holidays) {
  let hours = 0
  holidays.forEach(el => {
    const dateStr = year + "-" + el.replace("/", "-")
    const date = new Date(dateStr)
    console.log(date)
    if (date.getDay() !== 0 && date.getDay() !== 6) {
      hours = hours + 2;
    }
  })
  console.log(hours)
  return hours
}

countHours(year, holidays)