import Chart from 'chart.js';

/// generateBarChart (ctx, dataset, col, xlabel, ylabel)
/// Generates a Chart JS bar chart on the canvas given
/// by ctx. Uses the column in given dataset (passed) as
/// a 2D array. Uses axislabels to determine X and Y labels.
function generateBarChart (ctx, dataset, col, axislabels) {
  const colours = [
    "rgba(2, 117, 216, 1)",
    "rgba(92, 184, 92, 1)",
    "rgba(91, 192, 222, 1)",
    "rgba(240, 173, 78, 1)",
    "rgba(217, 83, 79, 1)",
    "rgba(41, 43, 44, 1)"
  ];

  // Process Dataset
  let labels = [];
  let data = [];

  dataset.map(row => {
    labels.push(row[0]);
    data.push(row[col]);
  });

  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
          data: data,
          backgroundColor: colours,
          borderColor: colours,
          borderWidth: 1
      }]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: axislabels[0]
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: axislabels[col]
          },
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

export default generateBarChart;
