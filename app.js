const bell = document.getElementById("notifications");
const alertBanner = document.getElementById("alert");
const notificationOne = document.getElementById("notificationOne");
const notificationTwo = document.getElementById("notificationTwo");
const hourlyFilterButton = document.getElementById("hourlyFilterButton");
const dailyFilterButton = document.getElementById("dailyFilterButton");
const weeklyFilterButton = document.getElementById("weeklyFilterButton");
const monthlyFilterButton = document.getElementById("monthlyFilterButton");

bell.addEventListener("click", (e) => {
  const element = e.target;
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
  alertBanner.style.display = "flex";
  notificationOne.style.display = "flex";
  notificationTwo.style.display = "flex";
  console.log("test", element);
  console.log("alert banner", alertBanner);
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
});

//line graph
const trafficHourlyCanvas = document.getElementById("traffic-hourly-chart");
/*
const trafficDailyCanvas = document.getElementById("traffic-daily-chart");
const trafficWeeklyCanvas = document.getElementById("traffic-weekly-chart");
const trafficMonthlyCanvas = document.getElementById("traffic-monthly-chart");
*/

const hourlyLineData = {
  datasets: [
    {
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
      backgroundColor: "rgba(116, 119, 191, .3)",
      borderWidth: 1,
    },
  ],
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

/*
const dailyLineData = {
  datasets: [
    {
      data: [2000, 1250, 500, 1000, 1200, 1100, 10],
      backgroundColor: "rgba(116, 119, 191, .3)",
      borderWidth: 1,
    },
  ],
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

/*
let weeklyLineData = {
  datasets: [
    {
      data: [300, 600, 250, 400, 500, 1000, 900, 1900, 2100, 1500, 1800],
      backgroundColor: "rgba(116, 119, 191, .3)",
      borderWidth: 1,
    },
  ],
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
let monthlyLineData = {
  datasets: [
    {
      data: [2500, 1250, 500, 500, 500, 1100, 900, 1000, 2000, 1700, 1500],
      backgroundColor: "rgba(116, 119, 191, .3)",
      borderWidth: 1,
    },
  ],
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
*/
let trafficOptions = {
  backgroundColor: "rgba(112, 104, 201, .5)",
  fill: true,
  aspectRatio: 2,
  animation: {
    duration: 0,
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

console.log("hourlyFilterButton", trafficHourlyCanvas);

let trafficChart;
//console.log("test", trafficChart);

let defaultLineChart = () => {
  console.log("test");
  trafficChart = new Chart(trafficHourlyCanvas, {
    type: "line",
    data: hourlyLineData,
    options: trafficOptions,
  });
  return trafficChart;
};

// Load default chart on page load
(() => {
  defaultLineChart();
})();

/*
FIGURE THIS OUT
function addData(chart, label, data) {
  console.log("test", { label, data });
  chart.data.labels.push(label);
  chart.data.datasets[0].data.push(data);
  chart.update();
}

function removeData(chart) {
  chart.data.labels = [];
  chart.data.datasets[0].data = [];
  chart.update();
}

hourlyFilterButton.addEventListener("click", (e) => {
  console.log(
    "hourlyLineData",
    hourlyLineData.labels,
    hourlyLineData.datasets[0].data
  );
  removeData(trafficChart);
  addData(trafficChart, hourlyLineData.labels, hourlyLineData.datasets[0].data);
});

dailyFilterButton.addEventListener("click", (e) => {
  console.log(
    "dailyLineData",
    dailyLineData.labels,
    dailyLineData.datasets[0].data
  );
  removeData(trafficChart);

  addData(trafficChart, dailyLineData.labels, dailyLineData.datasets[0].data);
});
*/

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
