const myChart = new Chart("myChart", {
    type: "bar",
    data : {
        labels: ["Jan" , "Feb" , "March" , "April" , "May"],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
    options: {}
});