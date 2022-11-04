var ctx = document.getElementById("graph_2");

var myRadarChart = new Chart(ctx, {
    //グラフの種類
    type: 'radar',
    //データの設定
    data: {
        labels: ['PHP','Java', 'Laravel', 'Springboot', 'MySql'],
        datasets: [{
            label: 'Back-end',
            //グラフのデータ
            data: [4, 3, 3, 2, 5],
            backgroundColor: "rgba(233,164,38,0.2)", // 線の下の塗りつぶしの色
            borderColor: "orange",                   // 線の色
            borderWidth: 2,                       // 線の幅
            pointStyle: "circle",                 // 点の形状
            pointBorderColor: "orange",              // 点の境界線の色
            pointBackgroundColor: "rgba(233,164,38,0.2)"    // 点の塗りつぶし色
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
                    stepSize: 1,        // 目盛の間隔
                    fontSize: 12,        // 目盛り数字の大きさ
                    fontColor: "gray"  // 目盛り数字の色
                },
            },
        },
    },
});


