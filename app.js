const bell = document.getElementById("notifications");
const alertBanner = document.getElementById("alertBanner");
const initialAlert = document.getElementById("initial-alert");
const notificationOne = document.getElementById("notificationOne");
const notificationTwo = document.getElementById("notificationTwo");
const filterButtons = document
  .getElementById("traffic-nav-btn-group")
  .getElementsByClassName("traffic-nav-link");
const hourlyFilterButton = document.getElementById("hourlyFilterButton");
const dailyFilterButton = document.getElementById("dailyFilterButton");
const weeklyFilterButton = document.getElementById("weeklyFilterButton");
const monthlyFilterButton = document.getElementById("monthlyFilterButton");

initialAlert.innerHTML = `
    <p><strong>Alert:</strong> You have new notifications! </p>
    <p class="initial-alert-banner-close">X</p>
  `;

bell.addEventListener("click", (e) => {
  const element = e.target;
  console.log("test", notificationOne);
  notificationOne.innerHTML = `
      <p>
        <strong>Alert:</strong> You have <strong>6</strong> overdue tasks to
        complete
      </p>
      <p class="closeNotificationOne">X</p>`;
  notificationTwo.innerHTML = `
      <p>
        <strong>Alert:</strong> You have <strong>2</strong> unread emails
      </p>
      <p class="closeNotificationTwo">X</p>
  `;
  console.log("e", notificationOne);
  initialAlert.style.display = "none";
  notificationOne.style.display = "flex";
  notificationTwo.style.display = "flex";
});

//create the html for the banner

alertBanner.addEventListener("click", (e) => {
  const element = e.target;
  if (element.classList.contains("closeNotificationOne")) {
    notificationOne.style.display = "none";
  }
  if (element.classList.contains("closeNotificationTwo")) {
    notificationTwo.style.display = "none";
  }
  if (element.classList.contains("initial-alert-banner-close")) {
    const initialAlert = document.getElementById("initial-alert");

    initialAlert.style.display = "none";
  }
});

//line graph
const trafficHourlyCanvas = document.getElementById("traffic-hourly-chart");
const trafficDailyCanvas = document.getElementById("traffic-daily-chart");
const trafficWeeklyCanvas = document.getElementById("traffic-weekly-chart");
const trafficMonthlyCanvas = document.getElementById("traffic-monthly-chart");

const hourlyLineData = {
  dataPoints: [750, 1250, 1000, 2000, 1500, 1750],
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26"],
};

const dailyLineData = {
  dataPoints: [2000, 1250, 500, 1000, 1200, 1100, 10],
  labels: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const weeklyLineData = {
  dataPoints: [300, 600, 250, 400, 500, 1000, 900, 1900, 2100, 1500, 1800],
  labels: [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
};

const monthlyLineData = {
  dataPoints: [2500, 1250, 500, 500, 500, 1100, 900, 1000, 2000, 1700, 1500],
  labels: [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ],
};

const defaultLineData = {
  datasets: [
    {
      data: [...hourlyLineData.dataPoints],
      borderWidth: 1,
    },
  ],
  labels: [...hourlyLineData.labels],
};

let trafficOptions = {
  backgroundColor: "rgba(112, 104, 201, .5)",
  fill: true,
  aspectRatio: 2.5,
  animations: {
    tension: {
      duration: 1500,
      easing: "ease-in",
      from: 0.8,
      to: 0,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const toggleButtonStyle = (buttonId) => {
  for (let i = 0; i < filterButtons.length; i++) {
    if (filterButtons[i].id === buttonId) {
      filterButtons[i].classList.add("activeButton");
    } else {
      filterButtons[i].classList.remove("activeButton");
    }
  }
};

let trafficChart;
const defaultLineChart = () => {
  trafficChart = new Chart(trafficHourlyCanvas, {
    type: "line",
    data: defaultLineData,
    options: trafficOptions,
  });
  toggleButtonStyle("hourlyFilterButton");
  return trafficChart;
};

// Load default chart on page load
(() => {
  defaultLineChart();
})();

function updateChart(labels, data) {
  // Clear existing data
  trafficChart.data.labels.splice(0, labels.length + 1);
  trafficChart.data.datasets[0].data.splice(0, data.length + 1);
  trafficChart.update();

  // add new data
  labels.forEach((label) => {
    trafficChart.data.labels.push(label);
  });
  data.forEach((dataPoint) => {
    trafficChart.data.datasets[0].data.push(dataPoint);
  });
  trafficChart.update();
}

hourlyFilterButton.addEventListener("click", (e) => {
  toggleButtonStyle("hourlyFilterButton");
  updateChart(hourlyLineData.labels, hourlyLineData.dataPoints);
});

dailyFilterButton.addEventListener("click", (e) => {
  toggleButtonStyle("dailyFilterButton");
  updateChart(dailyLineData.labels, dailyLineData.dataPoints);
});

weeklyFilterButton.addEventListener("click", (e) => {
  toggleButtonStyle("weeklyFilterButton");
  updateChart(weeklyLineData.labels, weeklyLineData.dataPoints);
});

monthlyFilterButton.addEventListener("click", (e) => {
  toggleButtonStyle("monthlyFilterButton");
  updateChart(monthlyLineData.labels, monthlyLineData.dataPoints);
});

//bar chart
const dailyCanvas = document.getElementById("daily-chart");

// data for daily traffic bar chart
const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      label: "# of Hits",
      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: "#7477BF",
      borderWidth: 1,
    },
  ],
};
const dailyOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

let dailyChart = new Chart(dailyCanvas, {
  type: "bar",
  data: dailyData,
  options: dailyOptions,
});

// doughnut chart
const mobileCanvas = document.getElementById("mobile-users-chart");

const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [
    {
      label: "# of Users",
      data: [2000, 550, 500],
      borderWidth: 0,
      backgroundColor: ["#7477BF", "#78CF82", "#51B6C8"],
    },
  ],
};

const mobileOptions = {
  aspectRatio: 1.9,
  plugins: {
    legend: {
      position: "right",
      labels: {
        boxWidth: 20,
        fontStyle: "bold",
      },
    },
  },
};

let mobileChart = new Chart(mobileCanvas, {
  type: "doughnut",
  data: mobileData,
  options: mobileOptions,
});

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener("click", () => {
  // ensure user and message fields are filled out
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
  } else if (user.value === "") {
    alert("Please fill out user field before sending");
  } else if (message.value === "") {
    alert("Please fill out message field before sending");
  } else {
    alert(`Message successfully sent to: ${user.value}`);
  }
});
