const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const getSecondsToHome = () => {
  const currentDate = new Date();
  const endDate = new Date("Sun Jan 28 2025 10:00:00 GMT+0700 (Giờ Đông Dương)");

  return ((endDate.getTime() - currentDate.getTime()) / 1000).toFixed(0);
}

const seconds = document.querySelector("#seconds");
setInterval(() => {
  seconds.innerHTML = formatNumber(getSecondsToHome()) + " s";
}, 1000);
