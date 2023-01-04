<template>

  <div class="container text-center">
    <div class="row row-margin-bt">
      <div class="col-3">
        <div class="card">
          <div class="card-body">
            <JSCharting :options="chartOptions5" class="columnChart"></JSCharting>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <div class="card-body">
            <JSCharting :options="chartOptions1" class="columnChart"></JSCharting>

          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <div class="card-body">
            <JSCharting :options="chartOptions2" class="columnChart"></JSCharting>

          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <div class="card-body">
            <JSCharting :options="chartOptions3" class="columnChart"></JSCharting>
          </div>
        </div>
      </div>
    </div>
    <div class="row row-margin-bt">
      <div class="col-3">
        <div class="card">
          <div class="card-body">
            <JSCharting :options="chartOptions7" class="columnChart"></JSCharting>

          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <div class="card-body">
            <JSCharting :options="chartOptions4" class="columnChart"></JSCharting>

          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <JSCharting :options="chartOptions6" class="columnChart"></JSCharting>

          </div>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
// import JSCharting from 'jscharting-vue';
import JSCharting, { JSC } from 'jscharting-vue';
export default {
  name: 'DashboardAdmin',
  props: {
    msg: String
  },
  components: {
    JSCharting
  },

  data() {
    return {
      series: [],
      data: '',
      chart: '',
      weekN: 0,
      palette : [
        '#FF8360',
        '#E2D965',
        '#7DCE82',
        '#3CDBD3'
      ],
      series2: [],
      data2: '',
      chart2: '',
      chartOptions1: {
        type: 'horizontal column',
        series: [
          {
            points: [
              { x: 'A', y: 50 },
              { x: 'B', y: 30 },
              { x: 'C', y: 50 },
              { x: 'D', y: 80 },
              { x: 'E', y: 30 },
              { x: 'F', y: 99 },
              { x: 'G', y: 50 },
              { x: 'H', y: 80 },
              { x: 'I', y: 30 },
              { x: 'J', y: 99 }
            ]
          }
        ]
      },

      chartOptions7: {
        type: 'gauge linear horizontal ',
        defaultSeries_type: 'column roundCaps',
        legend_visible: false,
        palette: this.palette,
        box: {
          radius: 10,
          fill: '#ECEFF1',
          padding: [-30, -70]
        },
        yAxis: {
          defaultTick: { enabled: false },
          scale: { type: 'time', range_padding: 0 },
          line_visible: false,
          orientation: 'top',
          customTicks: [
            {
              value_pattern: 'week',
              label: {
                text: function () {
                  this.weekN++;
                  return (
                    '<span style="color:' +
                    this.palette[this.weekN - 1] +
                    '">WEEK ' +
                    this.weekN +
                    '</span>'
                  );
                },
                style_fontWeight: 'bold'
              }
            }
          ]
        },
        xAxis: {
          spacingPercentage: 0.3,
          defaultTick: {
            gridLine: { color: 'white' },
            padding: 20,
            label: {}
          }
        },
        defaultSeries: {
          defaultPoint: {
            tooltip: function (p) {
              var days = p.replaceTokens(
                '{days(%high-%low)+1}'
              );
              return (
                '<b>%name</b> <br/>%low - %high<br/>Duration: ' +
                days +
                ' working ' +
                (days > 1 ? 'days' : 'day')
              );
            }
          }
        },
        series: this.series2
      },

      chartOptions6: {
        debug: true,
        type: 'line spline',
        legend_visible: false,
        title_label: {
          text:
            'Click the chart to add points, click points to remove them.<hr/>Sum: <b>%sum</b> | Average: <b>%average</b>  | Y Range:  (<b>%min - %max</b>) '
        },
        events: {
          click: function () {
            this.chart
              .series(0)
              .points.add({
                // x: e.xAxis[0].value,
                // y: e.yAxis[0].value
              });
          }
        },
        series: [
          {
            id: 's1',
            name: 'Downloads',
            points: [
              { x: 2, y: 32165 },
              { x: 5, y: 28651 },
              { x: 8, y: 18563 },
              { x: 10, y: 35698 },
              { x: 15, y: 27659 },
              { x: 18, y: 28684 },
              { x: 22, y: 25684 },
              { x: 23, y: 38654 }
            ]
          }
        ],
        defaultAxis_formatString: 'n0',
        defaultPoint_events_click: function () {
          if (this.series.points().items.length > 1)
            this.remove();
        },
        toolbar_defaultItem: {
          margin: 10,
          icon: {
            width: 30,
            height: 30,
            fill: ['#ffffff', 0.5],
            outline_color: '#123214'
          }
        },
        toolbar_items: {
          'Move Up': {
            type: 'option',
            position: 'inside top',
            label_text: '',
            icon_name: 'system/default/zoom/arrow-up',
            events_change: function () {
              this.makeRoom('up');
            }
          },
          'Move Right': {
            type: 'option',
            position: 'inside right',
            label_text: '',
            icon_name:
              'system/default/zoom/arrow-right',
            events_change: function () {
              this.makeRoom('right');
            }
          },
          'Move Down': {
            type: 'option',
            position: 'inside bottom',
            icon_name: 'system/default/zoom/arrow-down',
            events_change: function () {
              this.makeRoom('down');
            }
          },
          'Move Left': {
            type: 'option',
            position: 'inside left',
            label_text: '',
            icon_name: 'system/default/zoom/arrow-left',
            events_change: function () {
              this.makeRoom('left');
            }
          }
        }
      },
      chartOptions4: {
        debug: true,
        legend_visible: false,
        axisToZoom: 'x',

        /*X Axis Time Zoom limit*/
        xAxis: {
          scale_zoomLimit: {
            unit: 'hour',
            multiplier: 5
          }
        },
        annotations: [
          {
            position: 'inside top',
            margin: 5,
            label_text:
              'Click-Drag the chart area to zoom.'
          }
        ],
        xAxis_scale_type: 'time',
        series: [
          {
            name: 'Purchases',
            points: [
              [new Date(2020, 0, 1), 29.9],
              [new Date(2020, 0, 2), 71.5],
              [new Date(2020, 0, 3), 106.4],
              [new Date(2020, 0, 6), 129.2],
              [new Date(2020, 0, 7), 144.0],
              [new Date(2020, 0, 8), 176.0],
              [new Date(2020, 0, 9), 123],
              [new Date(2020, 0, 10), 112],
              [new Date(2020, 0, 11), 89],
              [new Date(2020, 0, 12), 72],
              [new Date(2020, 0, 13), 95],
              [new Date(2020, 0, 14), 110],
              [new Date(2020, 0, 15), 85],
              [new Date(2020, 0, 16), 68],
              [new Date(2020, 0, 17), 56],
              [new Date(2020, 0, 18), 64],
              [new Date(2020, 0, 19), 85],
              [new Date(2020, 0, 20), 102],
              [new Date(2020, 0, 21), 128],
              [new Date(2020, 0, 22), 120],
              [new Date(2020, 0, 23), 125],
              [new Date(2020, 0, 24), 113],
              [new Date(2020, 0, 25), 105],
              [new Date(2020, 0, 26), 85],
              [new Date(2020, 0, 27), 56],
              [new Date(2020, 0, 28), 43],
              [new Date(2020, 0, 29), 56],
              [new Date(2020, 0, 30), 78]
            ]
          }
        ]
      },


      chartOptions5: {
        debug: true,
        type: 'line spline',
        legend_visible: false,
        xAxis: {
          crosshair_enabled: true,
          scale: { type: 'time' }
        },
        yAxis: {
          orientation: 'opposite',
          formatString: 'c'
        },
        defaultSeries: {
          firstPoint_label_text: '<b>%seriesName</b>',
          defaultPoint_marker: {
            type: 'circle',
            size: 8,
            fill: 'white',
            outline: { width: 2, color: 'currentColor' }
          }
        },
        title_label_text: 'Costs (Last 6 Months)',
        series: [
          {
            name: 'Purchases',
            points: [
              ['1/1/2020', 29.9],
              ['2/1/2020', 97.5],
              ['3/1/2020', 110.4],
              ['4/1/2020', 129.2],
              ['5/1/2020', 144.0],
              ['6/1/2020', 176.0]
            ]
          },
          {
            name: 'Taxes',
            points: [
              ['1/1/2020', 86.9],
              ['2/1/2020', 79.5],
              ['3/1/2020', 95.4],
              ['4/1/2020', 97.2],
              ['5/1/2020', 123.0],
              ['6/1/2020', 111.0]
            ]
          },
          {
            name: 'Supplies',
            points: [
              ['1/1/2020', 129.9],
              ['2/1/2020', 111.5],
              ['3/1/2020', 66.4],
              ['4/1/2020', 29.2],
              ['5/1/2020', 88.0],
              ['6/1/2020', 102.0]
            ]
          },
          {
            name: 'Rent',
            points: [
              ['1/1/2020', 56.9],
              ['2/1/2020', 56.5],
              ['3/1/2020', 56.4],
              ['4/1/2020', 56.2],
              ['5/1/2020', 75.0],
              ['6/1/2020', 56.0]
            ]
          }
        ]
      },

      chartOptions3: {
        type: 'calendar month solid',
        defaultCultureName: 'en',
        title: {
          label_text: 'JULY 2019',
          position: 'right',
          label_style: { fontSize: 20 }
        },
        legend: {
          visible: true,
          position: 'bottom',
          template: '%icon %name',
          customEntries: [
            {
              name: 'Sport',
              icon: {
                color: '#e082ff',
                name:
                  'material/toggle/radio-button-unchecked',
                size: 14,
                outerShape: 'circle',
                outline_width: 0
              }
            },
            {
              name: 'Study',
              icon: {
                color: '#91e775',
                name:
                  'material/toggle/radio-button-unchecked',
                size: 14,
                outerShape: 'circle',
                outline_width: 0
              }
            },
            {
              name: 'Birthdays',
              icon: {
                color: '#ffe082',
                name:
                  'material/toggle/radio-button-unchecked',
                size: 14,
                outerShape: 'circle',
                outline_width: 0
              }
            },
            {
              name: 'Parties',
              icon: {
                color: '#82a1ff',
                name:
                  'material/toggle/radio-button-unchecked',
                size: 14,
                outerShape: 'circle',
                outline_width: 0
              }
            },
            {
              name: 'Entertainment',
              icon: {
                color: '#75e7ca',
                name:
                  'material/toggle/radio-button-unchecked',
                size: 14,
                outerShape: 'circle',
                outline_width: 0
              }
            }
          ]
        },

        calendar: {
          range: ['7/1/2019', '8/1/2019'],
          defaultEdgePoint: {
            mouseTracking: false,
            label_visible: false,
            fill: 'none'
          },
          defaultEmptyPoint: {
            label_color: 'gray',
            hatch: 'none',
            mouseTracking_enabled: false
          }
        },
        defaultSeries: {
          legendEntry_visible: false,
          shape_innerPadding: 0
        },
        defaultTooltip: {
          fill: '#495057',
          label_style_color: 'white',
          padding: 8,
          radius: 5
        },
        defaultPoint: {
          tooltip:
            "<b>{%date:date m}:</b><br><span style='listPadding: 0;'><ul>%events</ul></span>",
          states_hover: { color: '#cfd8dc' },
          outline_width: 0,
          label: {
            text:
              '%icons<br><span style="align:center;"><b>%name</b></span>',
            style_fontSize: 12,
            align: 'right',
            verticalAlign: 'top',
            padding: 5,
            color: 'gray'
          },
          attributes_events: '',
          attributes_icons:
            '<icon name=material/toggle/radio-button-unchecked color=transparent outerShape=circle size=6 >'
        },
        toolbar_visible: false,
        yAxis_visible: false
      },

      chartOptions2: {
        debug: true,
        type: 'gauge ',
        legend_visible: false,
        title: { label_text: 'Population ages 0-14', position: 'center' },
        // The radial axis
        xAxis: {
          spacingPercentage: 0.8,
          orientation: 'opposite',
          line: { width: 2, color: '#d8d8d8' },
          markers: [{ value: [3.6, 4.4], color: ['#d81c36', 0.3] }],
          defaultTick: {
            padding: 6,
            gridLine: { width: 1 },
            line: { length: 6 },
            label: { text: '%value' }
          },
          // China tick.
          customTicks: [{ value: 4, label_color: '#d81c36', line_color: '#d81c36' }]
        },
        // The circular axis
        yAxis: {
          line: { width: 2, color: '#d8d8d8' },
          markers: [{ value: [0, 100000000], color: ['#2ea8ff', 0.3] }],
          defaultTick: { gridLine: { width: 1, dashStyle: 'dash' } },
          scale: { invert: true, range: [0, 400000000] }
        },
        series: [
          {
            type: 'column',
            angle: { start: 45, sweep: 270 },
            shape_innerSize: '30%',
            palette: 'default',
            name: 'Population ages 0-14',
            defaultPoint: {
              marker: {
                outline: { width: 2, color: 'white' },
                type: 'circle',
                visible: true,
                size: 10
              }
            },
            points: [
              ['Pakistan', 67409321],
              ['Indonesia', 72205147],
              ['USA', 61485451],
              ['India', 373356040],
              ['China', 244031214]
            ]
          }
        ]
      },
    }
  },
  created: function () {
    var self = this;
    this.msd()
    JSC.fetch('../assets/csv/USIndustries.csv')
      .then(function (response) {
        console.log('csv text :', response.text());

        return response.text();
      })
      .then(function (text) {

        self.series = self.makeSeries2(JSC.csv2Json(text));
        console.log('csv data :', self.series);
        console.log('csv2Json :', JSC.csv2Json(text));

      });
  },
  methods: {
    msd: function () {
    
      var data = [
        {
          week: 1,
          task: 'Initial Research on Protocols',
          date: ['01/30/2022', '02/01/2022']
        },
        {
          week: 1,
          task:
            'Investigate Suitable Communication Protocol',
          date: ['02/01/2022', '02/02/2022']
        },
        {
          week: 1,
          task: 'GUI Design',
          date: ['02/02/2022', '02/04/2022']
        },
        {
          week: 1,
          task: 'Coding Phase 1',
          date: ['02/04/2022', '02/05/2022']
        },
        {
          week: 1,
          task: 'Debug & Testing 1',
          date: ['02/05/2022', '02/06/2022']
        },

        {
          week: 2,
          task: 'Study Java Socket API',
          date: ['02/06/2022', '02/07/2022']
        },
        {
          week: 2,
          task: 'Design Client GUI - Register',
          date: ['02/07/2022', '02/09/2022']
        },
        {
          week: 2,
          task: 'Coding Phase 2',
          date: ['02/09/2022', '02/12/2022']
        },
        {
          week: 2,
          task: 'Debug & Testing 2',
          date: ['02/12/2022', '02/13/2022']
        },

        {
          week: 3,
          task: 'Design GUI',
          date: ['02/13/2022', '02/16/2022']
        },
        {
          week: 3,
          task: 'Design Custom Shapes',
          date: ['02/16/2022', '02/17/2022']
        },
        {
          week: 3,
          task: 'Coding Phase 3',
          date: ['02/17/2022', '02/19/2022']
        },
        {
          week: 3,
          task: 'Debug & Testing 3',
          date: ['02/19/2022', '02/20/2022']
        },

        {
          week: 4,
          task: 'Design Client & Server',
          date: ['02/20/2022', '02/22/2022']
        },
        {
          week: 4,
          task: 'Design Synchronisation Mechanisms',
          date: ['02/22/2022', '02/23/2022']
        },
        {
          week: 4,
          task: 'Coding Phase 4',
          date: ['02/23/2022', '02/26/2022']
        },
        {
          week: 4,
          task: 'Debug & Testing 4',
          date: ['02/26/2022', '02/27/2022']
        }
      ];

      this.series2 = JSC.nest()
        .key('week')
        .key('task')
        .pointRollup(function (key, vals) {
          var lastDate = new Date(vals[0].date[1]);
          return {
            y: [
              vals[0].date[0],
              lastDate.setDate(lastDate.getDate() - 1)
            ],
            x: key
          };
        })
        .series(data);
    },
    makeRoom: function (side) {
      var xAxis = this.chart.axes({ prefix: 'x' })
        .items[0],
        yAxis = this.chart.axes({ prefix: 'y' }).items[0],
        yInf = yAxis.getRange(),
        xInf = xAxis.getRange(),
        yR = yInf.max - yInf.min,
        xR = xInf.max - xInf.min;

      var activeAxis = side.match('left|right')
        ? xAxis
        : yAxis;

      var range = {
        left: [xInf.min - xR / 5, xInf.max],
        right: [xInf.min, xInf.max + xR / 5],
        up: [yInf.min, yInf.max + yR / 5],
        down: [yInf.min - yR / 5, yInf.max]
      }[side];

      activeAxis.options({ scale_range: range });
    },

    // #############################

    makeSeries2: function (data) {
      var series = [
        {
          points: data.map(function (item) {
            var yVal = item.avg_wage;
            return {
              x: item.industry,
              y: yVal,
              color:
                yVal < 55390 ? '#f44336' : '#2196f3',
              attributes_industry: item.industry
            };
          })
        }
      ];
      series[0].points.splice(0, 1);
      return series;
    }

  }

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  background-color: #e0eef4 !important;
}

.card {
  border-color: transparent !important;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;
  border-radius: 15px !important;
}

.row-margin-bt {
  margin-bottom: 15px !important;
}
</style>
