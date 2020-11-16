$(document).ready(function(){
  $.ajax({
      url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-F68A98D0-A885-44C5-ADC6-8B7C0F16D7E5&format=JSON&elementName=TEMP,Weather',
      data: 'json',
      type: 'GET',
      success(data){
          let i=0;              
          let location = data.records.location;
          let today = new Date();
          // document.getElementById('tour_date').append(today); 
          for(i=0; i<location.length; i++){   
            //抓取中壢地區的氣象資料          
              if(location[i].stationId=="467050"){  
                  let weatherElement =location[i].weatherElement
                  for(j=0; j<weatherElement.length; j++){
                    //抓取中壢地區的氣象資料中的溫度
                      if(weatherElement[j].elementName=="TEMP"){
                          let temp = weatherElement[j].elementValue;
                          console.log(temp);
                          document.getElementById('tour_temp').append(temp);                         
                      }
                    //抓取中壢地區的氣象資料中的溫度說明
                      if(weatherElement[j].elementName=="Weather"){
                          let weather = weatherElement[j].elementValue;
                          console.log(weather);
                          // weather = '晴'; //測試: 強制印出 "晴"
                          // document.getElementById('tour_weather').innerText = weather;  //測試: 印出weather 變數的值
                          // document.getElementById('tour_weather').append(weather); 也可以 
                          
                          //==顯示照片
                          //條件1: 設變數nowa 為new Date(); 當"時" 大於等於18或小於等於5，顯示月亮照片
                          let nowa = new Date();
                          if((nowa.getHours() >=18)||(nowa.getHours() <=5)){
                            document.querySelector("#tour_weather_img4").style.display = 'block';
                          }else{
                          //==條件1底下有三個條件
                          //條件1-1: 當搜尋weather 裡有晴字不為-1 (找不到) 時，印出照片img1
                          if(weather.search('晴') != -1){
                            document.querySelector("#tour_weather_img1").style.display = 'block';
                          //條件1-2: 當搜尋weather 裡有雨字不為-1 (找不到) 時，印出照片img2
                          }else if(weather.search('雨') != -1){
                            document.querySelector("#tour_weather_img2").style.display = 'block';
                          //條件1-3: 以上皆非，則印出照片img3
                          }else{
                            document.querySelector("#tour_weather_img3").style.display = 'block';
                          }
                        }
                      }                     
                }
              }
          }
      },
});          
});

//顯示現在日氣及幾點幾分
window.addEventListener('load',function(){
  let now = new Date();
  let message = `${now.toLocaleDateString()} ${now.getHours()} : ${now.getMinutes()}`;
  document.getElementById('tour_date').innerText = message;
});