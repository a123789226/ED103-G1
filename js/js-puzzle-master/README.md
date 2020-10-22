# JavaScript 題目篇 - 新手 JS 地下城
 ![image]( https://github.com/HuiyuLiz/js-puzzle/blob/master/img/screenshot.jpg)  
 
12F - 拼圖 <a href="https://huiyuliz.github.io/js-puzzle/" target="_blank">Demo</a>，原生 JS 破關，可拖曳畫面上的拼圖進行遊戲；當拼圖拼到正確位置時，將不再允許觸發拖曳事件，直到重新洗牌或再玩一次，才會重新執行。  

  ## HTML5 拖放 API
  這次挑戰著重在 draggable 的屬性，HTML5中的<a href="https://developer.mozilla.org/zh-TW/docs/Web/API/HTML_Drag_and_Drop_API" target="_blank">拖放 API </a>可以做到拖曳和放置的功能。  
  ```html
<!--在拖曳的節點加上 draggable="true"-->
<li class="puzzles-random">
     <img class="puzzle-img" src="./img/Puzzle-1.png" draggable="true" id="Puzzle-1">
</li>  
 
```   
  ## 預先練習 - 了解沒用過的功能  
  
在對文件還一知半解的情況下，除了上網查詢資訊外，在 Youtube 搜尋相關教學也是一種方式。以我自己的情況來說，看完影片後跟著實作一次，可以加速自己的學習狀況。  
    
  ## Traversy Media 單張拖曳介紹影片 ⇒ <a href="https://www.youtube.com/watch?v=C22hQKE_32c" target="_blank">Drag & Drop With Vanilla JS
</a>    
 
  ![image]( https://github.com/HuiyuLiz/js-puzzle/blob/master/img/screenshot3.jpg)

  特別推薦這位開發者的 Youtube 影片，雖說內容是用英文講解，但在搭配 CC 字幕後，是我還可以跟上的程度。此外程式碼會用最基礎的寫法呈現，對新手來說是相當友善的，藉這次機會把之前看過的影片再跟著練習一次。  
  
  
  
## 鼻孔哥JS案例  ⇒ <a href="https://www.bilibili.com/video/av43463663/?p=1" target="_blank">拼圖遊戲</a>   
  ![image]( https://github.com/HuiyuLiz/js-puzzle/blob/master/img/screenshot2.jpg)  
  另外分享這位開發者的教學，內容幾乎可以運用在這次的挑戰上。使用DataTransfer.setData()，可以在拖曳時夾帶資訊到放置的節點上，之後用來比對參數是否一致。  
  
 ```js

   let dragStart = function (e) {
    // 傳送 img id 到 drop
    let id = e.target.id
    e.dataTransfer.setData('id', id)
  }
  
    let dragDrop = function (e) {
   // 拖曳過來的 img
    let dragId = e.dataTransfer.getData('id')
    let dragPuzzle = document.getElementById(dragId)
    if (dragPuzzle === null) return

    // 準備放下的 li 區塊 
    let dropId = e.target.id
    let dropParent = document.getElementById(dropId)
    
    //將拖曳過來的 img 新增到 li 的子節點
    if (dropParent.nodeName === 'LI') {
      dropParent.append(dragPuzzle)
    }
  }
  
  imgs.forEach(img => {
    img.addEventListener('dragstart', dragStart)
  })
  
  items.forEach(item => {
    item.addEventListener('drop', checkId)
  })  

 ```  
 目前的實作是將圖片的 id 參數 #Puzzle-1 與放置的 id 參數 #item-1 尾數進行比對，拼圖放置到正確位置時，若尾數一致，拼圖將會散發光芒，以顯示正確。  
 
 ##  參考資料  
   <a href="https://pjchender.blogspot.com/2017/08/html5-drag-and-drop-api.html" target="_blank">[筆記] 製作可拖曳的元素（HTML5 Drag and Drop API）</a>  

 
