console.log('gauge.js starts')

function gauge() {

    console.log('gauge() starts')

    window.feed = function (callback) {

        let blockchain_endpoint = new Promise(async function (resolve, reject) {
            let response = await fetch('https://api.blockchair.com/bitcoin/stats') //обработать ошибку
            if (response.ok) { // если HTTP-статус в диапазоне 200-299
                let data = await response.json()
                resolve(data)
            } else {
                console.log('ошибка запроса на сервер')
            }
        })
        blockchain_endpoint.then(data => {
            let mempool_transactions = data.data.mempool_transactions
            var tick = {};
            tick.plot0 = mempool_transactions
            callback(JSON.stringify(tick))
        })
    };

    var myConfig = {
        type: "gauge",
        globals: {
            fontSize: 14 //шрифт значений на спидометре
        },
        plotarea: {
            marginTop: 0 //отступ сверху
        },
        plot: {
            size: '100%', //длина стрелки
            valueBox: {
                placement: 'center',
                text: '%v\ntransactions queue', //подпись
                fontSize: 14, //шрифт значения снизу
                // rules: [{
                //     rule: '%v >= 700',
                //     text: '%v<br>EXCELLENT'
                // },
                // {
                //     rule: '%v < 700 && %v > 640',
                //     text: '%v<br>Good'
                // },
                // {
                //     rule: '%v < 640 && %v > 580',
                //     text: '%v<br>Fair'
                // },
                // {
                //     rule: '%v <  580',
                //     text: '%v<br>small mempool queue'
                // }
                // ]
            }
        },
        tooltip: {
            borderRadius: 5
        },
        scaleR: {
            aperture: 180, //180 градусов
            minValue: 100,
            maxValue: 100000,
            step: 50,
            center: {
                visible: false
            },
            tick: {
                visible: false
            },
            item: {
                offsetR: 0, //отступ цифр на спидометре
                rules: [{
                    rule: '%i == 9',
                    offsetX: 15
                }]
            },
            labels: ['100', '', '', '', '', '', '', '', '', '', '', ''],
            ring: {
                size: 10, //толщина окружности
                rules: [{
                    rule: '%v <= 200000',
                    backgroundColor: '#E53935' //красный #E53935
                },
                {
                    rule: '%v > 30000 && %v < 100000',
                    backgroundColor: '#EF5350' //светло-красный #EF5350
                },
                {
                    rule: '%v >= 15000 && %v < 30000',
                    backgroundColor: '#FFA726' //желтый #FFA726
                },
                {
                    rule: '%v <= 15000',
                    backgroundColor: '#29B6F6' //бирюзовый #29B6F6
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
            indicator: [1, 1, 1, 1, 0.3], //длина и толщина стрелки
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