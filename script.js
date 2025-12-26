// 1. 設定照片陣列 (改用通用圖片，不使用 PPT 原圖) 
let photoIndex = 0;
let myPhotos = [
  "https://picsum.photos/id/10/400/300", 
  "https://picsum.photos/id/20/400/300",
  "https://picsum.photos/id/30/400/300"
];

// 2. 隨機歡迎語邏輯 [cite: 9]
function getRandomGreeting() {
  let greetings = ["你好！很高興見到你。", "今天天氣不錯喔！", "歡迎來到我的小天地。"];
  let r = Math.floor(Math.random() * 3); // 產生 0~2 的亂數 [cite: 9]
  document.getElementById("welcome-msg").innerText = greetings[r];
}

// 3. 照片輪播函式 
function rotatePhotos() {
  document.getElementById('my-photo').src = myPhotos[photoIndex];
  photoIndex = (photoIndex + 1) % 3; // 使用餘數讓索引在 0,1,2 循環 
}

// 4. 留言板功能 (使用模板字串) [cite: 14, 22]
function addMessage() {
  let title = document.getElementById("user-title");
  let content = document.getElementById("user-content");
  let list = document.getElementById("message-list");

  // 使用反引號 ` 包住 HTML，並嵌入變數 ${...} 
  list.innerHTML = `
    <div style="border-bottom: 1px dashed #ccc; padding: 10px;">
      <h4>${title.value}</h4>
      <p>${content.value}</p>
    </div>
  ` + list.innerHTML; // 新留言放在最上面

  // 清空輸入框
  title.value = "";
  content.value = "";
}

// 5. 初始化網頁
function initWebsite() {
  getRandomGreeting();
  rotatePhotos();
  setInterval(rotatePhotos, 3000); // 每隔 3 秒換一張照片 
  
  // 監聽按鈕點擊事件 [cite: 22]
  document.getElementById("post-btn").addEventListener("click", addMessage);
}