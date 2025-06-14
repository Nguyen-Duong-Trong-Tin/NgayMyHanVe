const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const getHoursToHome = () => {
  const currentDate = new Date();
  const endDate = new Date("2025-08-10T00:00:00+07:00");

  const hours = (endDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60);
  return Math.max(0, Math.floor(hours)); // làm tròn xuống và tránh âm
}

const hoursElement = document.querySelector("#seconds");
setInterval(() => {
  hoursElement.innerHTML = formatNumber(getHoursToHome()) + " giờ";
}, 1000);
