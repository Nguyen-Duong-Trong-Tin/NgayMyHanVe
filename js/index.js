const formatNumber = (number) => {
  return number.toString().padStart(2, "0"); // luôn có 2 chữ số
};

const getTimeToHome = () => {
  const currentDate = new Date();
  const endDate = new Date("2025-08-10T00:00:00+07:00");

  let diff = Math.max(0, endDate.getTime() - currentDate.getTime()); // tránh âm

  const totalMilliseconds = diff;
  const totalSeconds = Math.floor(diff / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    hours: formatNumber(hours),
    minutes: formatNumber(minutes),
    seconds: formatNumber(seconds),
    milliseconds: totalMilliseconds, // thêm số mili giây
  };
};

const countdownElement = document.querySelector("#seconds");

setInterval(() => {
  const { hours, minutes, seconds, milliseconds } = getTimeToHome();
  countdownElement.innerHTML = `
    ${hours} giờ : ${minutes} phút : ${seconds} giây<br/>
    ${milliseconds}
  `;
}, 1000);
