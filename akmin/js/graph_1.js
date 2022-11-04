var ctx = document.getElementById("graph_1");

var myRadarChart = new Chart(ctx, {
    //グラフの種類
    type: 'radar',
    //データの設定
    data: {
        labels: ['HTML/CSS','Javascript', 'jquery', 'React', 'WordPress'],
        datasets: [{
            label: 'Front-end',
            //グラフのデータ
            data: [4, 4, 5, 1, 3],
            backgroundColor: "rgba(255,0,0,0.2)", // 線の下の塗りつぶしの色
            borderColor: "red",                   // 線の色
            borderWidth: 2,                       // 線の幅
            pointStyle: "circle",                 // 点の形状
            pointBorderColor: "red",              // 点の境界線の色
            pointBackgroundColor: "rgba(255,0,0,0.2)"    // 点の塗りつぶし色
        }],
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    },
    //オプションの設定
    options: {
        scales: {
            r: {
                ticks: {             // 目盛り
                    min: 0,              // 最小値
                    max: 6,            // 最大値
                    stepSize: 0.5,        // 目盛の間隔
                    fontSize: 12,        // 目盛り数字の大きさ
                    fontColor: "gray"  // 目盛り数字の色
                },
            },
        },
    },
});
