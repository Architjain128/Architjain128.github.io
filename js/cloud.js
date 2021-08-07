
am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
chart.legend = new am4charts.Legend();

var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

networkSeries.data = [
    {
        name: 'Python',
        children: [
            {
                name: 'PyGame', value: 8
            },
            {
                name: 'PyMySql', value: 8
            },
            {
                name: 'FASTApi', value: 8
            },
            {
                name: 'FLASK', value: 4
            },
            {
                name: 'Django', value: 12
            },
            {
                name: 'Dash', value: 6
            },{
                name:'SQLAlchemy', value:4
            }
        ]
    }, 
    {
        name: 'JavaScript',
        children: [
            {
                name: 'NodeJS', value: 16
            },{
                name: 'Express', value: 16
            },{
                name: 'Mongoose', value: 12
            },
            {
                name: 'React', value: 20
            },
            {
                name: 'WebGL', value: 6
            },
            {
                name: 'ThreeJS', value: 6
            }
        ]
    },
    {
        name: 'Database',
        children: [
            {
                name: 'MongoDB', value: 16
            }, {
                name: 'MySQL', value: 12
            }, {
                name: 'Firebase', value: 12
            }
        ]
    },
    {
        name: 'Other',
        children: [
            {
                name: 'C++', value: 10
            },{
                name: 'C', value: 10
            },{
                name: 'Flutter', value: 8
            },
            {
                name: 'Git', value: 16
            },
            {
                name: 'Bash', value: 6
            } 
        ]
    }
    // {
    //     name: 'Web Development',
    //     children: [
    //         {
    //             name: 'HTML', value: 13
    //         }, {
    //             name: 'CSS', value: 10
    //         }, {
    //             name: 'Jquery', value: 8
    //         }, {
    //             name: 'Bootstrap', value: 8
    //         }, {
    //             name: 'Material-UI', value: 12
    //         }
    //     ]
    // },
    // {
    //     name: 'Machine Learning',
    //     children: [
    //         {
    //             name: 'Bias-Variance tradeoff', value: 1
    //         }, {
    //             name: 'Genetic Algorithm', value: 1
    //         }, {
    //             name: 'MDP', value: 1
    //         }, {
    //             name: 'Linear Programing', value: 1
    //         }, {
    //             name: 'POMDP', value: 1
    //         }
    //     ]
    // },
];

networkSeries.dataFields.linkWith = "linkWith";
networkSeries.dataFields.name = "name";
networkSeries.dataFields.id = "name";
networkSeries.dataFields.value = "value";
networkSeries.dataFields.children = "children";

networkSeries.nodes.template.tooltipText = "{name}";
networkSeries.nodes.template.fillOpacity = 1;

networkSeries.nodes.template.label.text = "{name}"
networkSeries.fontSize = 12;
networkSeries.maxLevels = 2;
networkSeries.maxRadius = am4core.percent(6);
networkSeries.manyBodyStrength = -16;
networkSeries.nodes.template.label.hideOversized = true;
networkSeries.nodes.template.label.truncate = true;

}); // end am4core.ready()
