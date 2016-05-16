$(function () {
    var chart;
    $('#habilidades').highcharts({
        chart: {
            type: 'bar',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 25,
                depth: 53
            }
        },
        title: {
            text: 'Gráfico Técnico'
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percentual',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: false
                }
            },
            series: {
                animation: {
                    duration: 2000,
                    borderRadius: 10
                }
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        exporting: {
            enabled: false
        },

        credits: {
            enabled: false
        },


        series: [{
            name: 'Front End',
            data: [80],
            color: '#50A315'
        },
        //{
        //    name: 'C#',
        //    data: [90]
        //},
        {
            name: 'MVC ASP.Net',
            data: [90]
        },
        //{
        //    name: 'VB6',
        //    data: [75]
        //},
         {
             name: 'SQL Server',
             data: [90],
             color: '#4E6CD8'
         },
         {
             name: 'Oracle',
             data: [80]
         },
         {
             name: 'ORM (Nhibernate e Entity FrameWork)',
             data: [85],
             color: '#CE9823'
         },
         {
             name: 'Serviços (Web API e WCF)',
             data: [75],
             color: '#D82F2F'
         },
         //{
         //    name: 'Entity Frmaework',
         //    data: [80],
         //    color: '#8BCC5D'
         //},
         //{
         //    name: 'Active Record',
         //    data: [75],
         //    color: '#F7F13B'
         //},
         {
             name: 'Java EE',
             data: [75],
             color: '#DB7246'
         },
        ]
    });

    chart = $('#habilidades').highcharts();

});