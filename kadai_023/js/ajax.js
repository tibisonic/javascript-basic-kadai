// 東京都の天気予報データを取得するためのURL
const url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";
// イベント処理の対象となるボタン
const button = document.getElementById("ajax-btn");

// ボタンのクリック時にイベント処理を実行する
button.addEventListener("click", () => {
  // 気象庁のWebサイトにリクエストを送信し、天気予報データを取得する
  fetch(url)
    // サーバーからAjaxレスポンスを受け取ったときの処理
    .then((response) => {
      // JSON形式のデータに変換
      return response.json();
    })
    .then((data) => {
      // JSONデータから「東京の明日の天気」を抽出して表示
      const weather = data[0].timeSeries[0].areas[0].weathers[1];
      console.log("東京の明日の天気：" + weather);
    });
});

// ダミーデータを送信するためのURL
const url2 = "https://jsonplaceholder.typicode.com/posts";

// イベント処理の対象となるボタン
const button2 = document.getElementById("ajax-btn2");

// ボタンのクリック時にイベント処理を実行する
button2.addEventListener("click", () => {
  // 送信するダミーデータ
  const dummyData = { name: "侍太郎", age: 30 };
  // ダミーサーバーにAjaxリクエストを送信する
  fetch(url2, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dummyData), // JSON形式に変換
  })
    // サーバーからAjaxレスポンスを受け取ったときの処理
    .then((response) => {
      // JSON形式のデータに変換
      return response.json();
    })
    .then((data) => {
      // サーバーから受け取ったダミーデータを見やすい形にして表示
      console.log("サーバーからの応答：\n" + JSON.stringify(data, null, 2));
    });
});
