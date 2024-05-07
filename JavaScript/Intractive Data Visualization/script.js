const myChart = new Chart("myChart", {
  type: "bar",
  data: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(158, 194, 194)',
          backgroundColor: 'rgba(117, 216, 216, 0.5)', // Change the color of the bars here
          tension: 0.1
      }]
  },
  options: {}
});
