
$(document).ready(function(){
    $('.sidenav').sidenav();  
});


window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0 )
  })
  
  const toTop = document.querySelector(".to-top");
  
  window.addEventListener("scroll", () =>{
      if(window.pageYOffset > 400){
          toTop.classList.add("active");
      }else{
          toTop.classList.remove("active");
      }
  })
  Chart.types.Doughnut.extend({
    name: "DoughnutTextBig",
    showTooltip: function() {
        this.chart.ctx.save();
        Chart.types.Doughnut.prototype.showTooltip.apply(this, arguments);
        this.chart.ctx.restore();
    },
    draw: function() {
        Chart.types.Doughnut.prototype.draw.apply(this, arguments);

        var width = this.chart.width,
        height = this.chart.height;

        var fontSize = (height / 114).toFixed(2);
        this.chart.ctx.font = fontSize + "em Verdana";
        this.chart.ctx.textBaseline = "middle";

        var text = "31%",
        textX = Math.round((width - this.chart.ctx.measureText(text).width) / 2),
        textY = height / 2;

        this.chart.ctx.fillText(text, textX, textY);
    }
});

var dataBig = [{
    value: 248,
    color: "#fff"
}, {
    value: 112,
    color: "#00796b"
}, {
    value: 0,
    color: "#00796b"
}, {
    value: 0,
    color: "#00796b"
}, 
{
    value: 0,
    color: "#00796b"
},{
    value: 0,
    color: "#00796b"
}];

        Chart.types.Doughnut.extend({
        name: "DoughnutTextInside",
        showTooltip: function() {
            this.chart.ctx.save();
            Chart.types.Doughnut.prototype.showTooltip.apply(this, arguments);
            this.chart.ctx.restore();
        },
        draw: function() {
            Chart.types.Doughnut.prototype.draw.apply(this, arguments);

            var width = this.chart.width,
            height = this.chart.height;

            var fontSize = (height / 114).toFixed(2);
            this.chart.ctx.font = fontSize + "em Verdana";
            this.chart.ctx.textBaseline = "middle";

            var text = "31%",
            textX = Math.round((width - this.chart.ctx.measureText(text).width) / 2),
            textY = height / 2;

            this.chart.ctx.fillText(text, textX, textY);
        }
    });
    var data = [{
        value: 248,
        color: "#fff"
    }, {
        value: 112,
        color: "#00796b"
    }, {
        value: 0,
        color: "#00796b"
    }, {
        value: 0,
        color: "#00796b"
    }, 
    {
        value: 0,
        color: "#00796b"
    },{
        value: 0,
        color: "#00796b"
    }];

    Chart.types.Doughnut.extend({
        name: "DoughnutText",
        showTooltip: function() {
            this.chart.ctx.save();
            Chart.types.Doughnut.prototype.showTooltip.apply(this, arguments);
            this.chart.ctx.restore();
        },
        draw: function() {
            Chart.types.Doughnut.prototype.draw.apply(this, arguments);

            var width = this.chart.width,
            height = this.chart.height;

            var fontSize = (height / 114).toFixed(2);
            this.chart.ctx.font = fontSize + "em Verdana";
            this.chart.ctx.textBaseline = "middle";

            var text = "85%",
            textX = Math.round((width - this.chart.ctx.measureText(text).width) / 2),
            textY = height / 2;

            this.chart.ctx.fillText(text, textX, textY);
        }
    });
    var dataPoint = [{
        value: 54,
        color: "#fff"
    }, {
        value: 306,
        color: "#00796b"
    }, {
        value: 0,
        color: "#00796b"
    }, {
        value: 0,
        color: "#00796b"
    }, 
    {
        value: 0,
        color: "#00796b"
    },{
        value: 0,
        color: "#00796b"
    }];

    
    var DoughnutTextInsideChart = new Chart($('#myChart')[0].getContext('2d')).DoughnutTextInside(data, {
        responsive: true
    });

    var DoughnutTextInside = new Chart($('#hisChart')[0].getContext('2d')).DoughnutText(dataPoint, {
        responsive: true
    });

   
