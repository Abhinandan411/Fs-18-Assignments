var data = [45];

const myChart = new Chart("myChart", {
    type: "line",
    data: {
      labels: ["1", "2", "3", "4", "5"],
      datasets: [{
        label: 'My first Dataset',
        data: data,
        fill: false,
        // lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        borderWidth: 2, // Set the border width for the dataset's line  
        
      }]
    }
  });
  
function addData() {
  const newData = Math.floor(Math.random() * 100);

  myChart.data.labels.push(myChart.data.labels.length);
  myChart.data.datasets[0].data.push(newData);
  myChart.update();
}

setInterval(() => {
  addData();
}, 1000);
