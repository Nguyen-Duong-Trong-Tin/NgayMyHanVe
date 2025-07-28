const formatNumber = (number) => {
  return number.toString().padStart(2, "0"); // luôn có 2 chữ số
};

const getTimeToHome = () => {
  const currentDate = new Date();
  const endDate = new Date("2025-08-11T00:00:00+07:00");

  let diff = Math.max(0, endDate.getTime() - currentDate.getTime()); // tránh âm

  const totalSeconds = Math.floor(diff / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    hours: formatNumber(hours),
    minutes: formatNumber(minutes),
    seconds: formatNumber(seconds),
    milliseconds: diff, // còn lại theo ms
  };
};

const countdownElement = document.querySelector("#seconds");
const millisecondsElement = document.createElement("div");
countdownElement.appendChild(millisecondsElement);

// Cập nhật theo giây
setInterval(() => {
  const { hours, minutes, seconds } = getTimeToHome();
  countdownElement.firstChild.textContent = `${hours} h : ${minutes} m : ${seconds} s`;
}, 1000);

// Cập nhật từng mili giây
setInterval(() => {
  const { milliseconds } = getTimeToHome();
  millisecondsElement.textContent = `${milliseconds} mls`;
}, 1);
