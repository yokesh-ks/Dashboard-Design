var canvas = document.getElementById("barChart");
var ctx = canvas.getContext('2d');

// Global Options:
 Chart.defaults.global.defaultFontColor = '#6A707E';
 Chart.defaults.global.defaultFontSize = 18;

// Data with datasets options
var data = {
    labels: ["S", "M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S" ],
      datasets: [
        {
            
            fill: true,
            backgroundColor: "#D78AFD",
            data: [150, 256, 400, 320, 125, 390, 350, 75, 450, 250, 290, 300, 260, 400, 75]
        }
    ]
};

var options = {
    legend: {
        display: false
    },
tooltips: {
        callbacks: {
            label: function(tooltipItem) {
                return Number(tooltipItem.yLabel) + " Applicants";
            }
        }
    },
        title: {
                  display: false,
                  text: 'Applicants/Day',
                  position: 'bottom'
              },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
};

// Chart declaration:
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});



