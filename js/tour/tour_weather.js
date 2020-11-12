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
                          document.getElementById('tour_weather').append(weather);
                      }
                      // if(weatherElement[j].elementValue=="tour_img1"){
                      //     let 
                      //     let tour_img1 = 晴;
                      //     let tour_img2 = 多雲;
                      //     let tour_img3 = 雨;
                      //     console.log(tour_img1);
                          // tour_weather_img.src = ""

                      //     // document.getElementById('tour_weather_img').append(weather);                          
                      // }
                }
              }
          }
      },
});          
});




window.addEventListener('load',function(){
  let now = new Date();
  let message = `${now.toLocaleDateString()} at ${now.getHours()} : ${now.getMinutes()}`;
  document.getElementById('tour_date').innerText = message;
});