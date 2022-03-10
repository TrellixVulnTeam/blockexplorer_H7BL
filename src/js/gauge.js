console.log('gauge.js starts')

function gauge() {

    console.log('gauge() starts')

    window.feed = function (callback) {
        var tick = {};
        tick.plot0 = Math.ceil(350 + (Math.random() * 500)); //загрузить собранные данные сюда
        console.log(tick.plot0)
        callback(JSON.stringify(tick));
    };

    var myConfig = {
        type: "gauge",
        globals: {
            fontSize: 14 //шрифт значений на спидометре
        },
        plotarea: {
            marginTop: 40
        },
        plot: {
            size: '100%',
            valueBox: {
                placement: 'center',
                text: '%v', //default
                fontSize: 14, //шрифт значения снизу
                rules: [{
                    rule: '%v >= 700',
                    text: '%v<br>EXCELLENT'
                },
                {
                    rule: '%v < 700 && %v > 640',
                    text: '%v<br>Good'
                },
                {
                    rule: '%v < 640 && %v > 580',
                    text: '%v<br>Fair'
                },
                {
                    rule: '%v <  580',
                    text: '%v<br>Bad'
                }
                ]
            }
        },
        tooltip: {
            borderRadius: 5
        },
        scaleR: {
            aperture: 180,
            minValue: 1,
            maxValue: 850,
            step: 50,
            center: {
                visible: false
            },
            tick: {
                visible: false
            },
            item: {
                offsetR: 0,
                rules: [{
                    rule: '%i == 9',
                    offsetX: 15
                }]
            },
            labels: ['1', '', '', '', '', '', '580', '640', '700', '750', '', '850'],
            ring: {
                size: 50,
                rules: [{
                    rule: '%v <= 580',
                    backgroundColor: '#29B6F6' //красный #E53935
                },
                {
                    rule: '%v > 580 && %v < 640',
                    backgroundColor: '#FFA726' //светно-красный #EF5350
                },
                {
                    rule: '%v >= 640 && %v < 700',
                    backgroundColor: '#EF5350' //желтый #FFA726
                },
                {
                    rule: '%v >= 700',
                    backgroundColor: '#E53935' //бирюзовый #29B6F6
                }
                ]
            }
        },
        refresh: {
            type: "feed",
            transport: "js",
            url: "feed()",
            interval: 10000,
            resetTimeout: 1000
        },
        series: [{
            values: [1], // starting value
            backgroundColor: 'black',
            indicator: [10, 10, 10, 10, 0.75],
            animation: {
                effect: 2,
                method: 1,
                sequence: 4,
                speed: 900
            },
        }]
    };

    zingchart.render({
        id: 'myChart',
        data: myConfig,
        height: 800,
        width: '100%'
    });

}

export { gauge }