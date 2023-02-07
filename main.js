
var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}




var barChartOptions = {
  series: [{
    data: [10, 8, 6, 4, 2],
    name: "Products",
  }],
  chart: {
    type: "bar",
    background: "transparent",
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: [
    "#d910aa",
    "#892071",
    "#4e1140",
    "#bf69ab",

  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: "40%",
    }
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: "#f5f7ff",
    },
    show: true,
    position: "top",
  },
  stroke: {
    colors: ["transparent"],
    show: true,
    width: 2
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark",
  },
  xaxis: {
    categories: ["Laptop", "Phone", "Monitor", "Headphones", "Camera"],
    title: {
      style: {
        color: "#f5f7ff",
      },
    },
    axisBorder: {
      show: true,
      color: "#55596e",
    },
    axisTicks: {
      show: true,
      color: "#55596e",
    },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  },
  yaxis: {
    title: {
      text: "Count",
      style: {
        color:  "#f5f7ff",
      },
    },
    axisBorder: {
      color: "#55596e",
      show: true,
    },
    axisTicks: {
      color: "#55596e",
      show: true,
    },
    labels: {
      style: {
        colors: "#f5f7ff",
      },
    },
  }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();

var areaChartOptions = {
  series: [{
    name: "Purchase Orders",
    data: [31, 40, 28, 51, 42, 109, 100],
  }, {
    name: "Sales Orders",
    data: [11, 32, 45, 32, 34, 52, 41],
  }],
  chart: {
    type: "area",
    background: "transparent",
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },

  colors: [ "#4e1140",  "#bf69ab"],
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
      shadeIntensity: 1,
      stops: [0, 100],
      type: "vertical",
    },
    type: "gradient",
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: "#f5f7ff",
    },
    show: true,
    position: "top",
  },
  markers: {
    size: 6,
    strokeColors: "#1b2635",
    strokeWidth: 3,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    axisBorder: {
      color: "#55596e",
      show: true,
    },
    axisTicks: {
      color: "#55596e",
      show: true,
    },
    labels: {
      offsetY: 5,
      style: {
        colors: "#f5f7ff",
      },
    },
  },
  yaxis: 
  [
    {
      title: {
        text: "Purchase Orders",
        style: {
          color: "#f5f7ff",
        },
      },
      labels: {
        style: {
          colors: ["#f5f7ff"],
        },
      },
    },
    {
      opposite: true,
      title: {
        text: "Sales Orders",
        style: {
          color:  "#f5f7ff",
        },
      },
      labels: {
        style: {
          colors: ["#f5f7ff"],
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: "dark",
  }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();

  var radialChartOptions = {
    series: [20],
    chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '17%',
      }
    },
  },
  labels: ['inventario'],
  };

  var radialChart = new ApexCharts(document.querySelector("#radial-chart"), radialChartOptions);
  radialChart.render();






  var radialChartOptions = {
    series: [70],
    chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '17%',
      }
    },
  },
  labels: ['corte'],
  };

  var radialChart = new ApexCharts(document.querySelector("#radial-chart1"), radialChartOptions);
  radialChart.render();

  var radialChartOptions = {
    series: [90],
    chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '17%',
      }
    },
  },
  labels: ['armado'],
  };

  var radialChart = new ApexCharts(document.querySelector("#radial-chart2"), radialChartOptions);
  radialChart.render();

  var radialChartOptions = {
    series: [17],
    chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '17%',
      }
    },
  },
  labels: ['software'],
  };

  var radialChart = new ApexCharts(document.querySelector("#radial-chart3"), radialChartOptions);
  radialChart.render();



  var imageBarOptions = {
    series: [{
    name: 'coins',
    data: [2, 4, 3, 4, 3, 5, 5, 6.5, 6, 5, 4, 5, 8, 7, 7, 8, 8, 10, 9, 9, 12, 12,
      11, 12, 13, 14, 16, 14, 15, 17, 19, 21
    ]
  }],
    chart: {
    type: 'bar',
    height: 410,
    animations: {
      enabled: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '100%',
  
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    colors: [ "#eee"],
    width: 0.2
  },
  labels: Array.apply(null, {length: 39}).map(function(el, index){
    return index + 1;
  }),
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false
    },
    title: {
      text: 'Weight',
    },
  },
  grid: {
    position: 'back'
  },
  title: {
    text: 'Paths filled by clipped image',
    align: 'right',
    offsetY: 30
  },
  fill: {
    type: 'image',
    opacity: 0.87,
    image: {
      src: ['./img/abstract.jpg'],
      width: 466,
      height: 406
    }
  },
  };

  var imageBar = new ApexCharts(document.querySelector("#image-bar"), imageBarOptions);
  imageBar.render();

