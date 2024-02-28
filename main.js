var inp1=document.querySelector('.inp1'); 
var inp2=document.querySelector('.inp2'); 
var inp3=document.querySelector('.inp3'); 
var inp4=document.querySelector('.inp4'); 
var inp5=document.querySelector('.inp5'); 
var inp6=document.querySelector('.inp6'); 
var inp7=document.querySelector('.inp7'); 
var inp8=document.querySelector('.inp8'); 
var inp9=document.querySelector('.inp9'); 
var inp10=document.querySelector('.inp10'); 
var inp11=document.querySelector('.inp11'); 
var card=document.querySelector('.card');
var BgCard=document.querySelector('.airSun')
const updateViloyat=(malumot)=>{
    let str=(malumot.weather[0].main).toLowerCase();
    if(str=="clouds"){
       BgCard.className="airCloud";
        card.innerHTML=`
    <img src="./img/cloud.svg" alt="">
   <ul>
       <li>
           <h3 class="cityName">${malumot.name} ,${malumot.sys.country}</h3>
       </li>
       <li>
           <h4 class="qandayHavo">${malumot.weather[0].main}</h4>
       </li>
       <li><h1>🌡 ${Math.round(malumot.main.temp)} C'</h1></li>
   </ul>
   `
    }else if(str=="snow"){
        BgCard.className="airSnow";
        card.innerHTML=`
        <img src="./img/snow.png" alt="">
       <ul>
           <li>
               <h3 class="cityName">${malumot.name} ,${malumot.sys.country}</h3>
           </li>
           <li>
               <h4 class="qandayHavo">${malumot.weather[0].main}</h4>
           </li>
           <li><h1>🌡 ${Math.round(malumot.main.temp)} C'</h1></li>
       </ul>
       `
    }
    else if(str=="mist"){
        BgCard.className="airCloud";
        card.innerHTML=`
        <img src="./img/mist.svg" alt="">
       <ul>
           <li>
               <h3 class="cityName">${malumot.name} ,${malumot.sys.country}</h3>
           </li>
           <li>
               <h4 class="qandayHavo">${malumot.weather[0].main}</h4>
           </li>
           <li><h1>🌡 ${Math.round(malumot.main.temp)} C'</h1></li>
       </ul>
       `
    }else if(str=="rain"){
        BgCard.className="airRain";
        card.innerHTML=`
        <img src="./img/rain.svg" alt="">
       <ul>
           <li>
               <h3 class="cityName">${malumot.name} ,${malumot.sys.country}</h3>
           </li>
           <li>
               <h4 class="qandayHavo">${malumot.weather[0].main}</h4>
           </li>
           <li><h1>🌡 ${Math.round(malumot.main.temp)} C'</h1></li>
       </ul>
       `
    }else if(str=="clear"){
        BgCard.className="airSun";
        card.innerHTML=`
        <img src="./img/sun.svg" alt="">
       <ul>
           <li>
               <h3 class="cityName">${malumot.name} ,${malumot.sys.country}</h3>
           </li>
           <li>
               <h4 class="qandayHavo">${malumot.weather[0].main}</h4>
           </li>
           <li><h1>🌡 ${Math.round(malumot.main.temp)} C'</h1></li>
       </ul>
       `
    }
    else{
        BgCard.className="airSun";
        card.innerHTML=`
        <img src="./img/cloud.svg" alt="">
       <ul>
           <li>
               <h3 class="cityName">${malumot.name} ,${malumot.sys.country}</h3>
           </li>
           <li>
               <h4 class="qandayHavo">${malumot.weather[0].main}</h4>
           </li>
           <li><h1>🌡 ${Math.round(malumot.main.temp)} C'</h1></li>
       </ul>
       ` 
    }
 
}
const getWeather= async(viloyatNomi)=>{
 const data= await getData(viloyatNomi)
 return data;
}
inp1.addEventListener('click',(e)=>{
  e.preventDefault();
   getWeather(e.target.value).then((data)=>updateViloyat(data))
})
inp2.addEventListener('click',(e)=>{
    e.preventDefault();
    getWeather(e.target.value).then((data)=>updateViloyat(data))
  })
  inp3.addEventListener('click',(e)=>{
    e.preventDefault();
    getWeather(e.target.value).then((data)=>updateViloyat(data))
  })
  inp4.addEventListener('click',(e)=>{
    e.preventDefault();
    getWeather(e.target.value).then((data)=>updateViloyat(data))
  })
  inp5.addEventListener('click',(e)=>{
    e.preventDefault();
    getWeather(e.target.value).then((data)=>updateViloyat(data))
    })
    inp6.addEventListener('click',(e)=>{
        e.preventDefault();
        getWeather(e.target.value).then((data)=>updateViloyat(data))
    })
    inp7.addEventListener('click',(e)=>{
        e.preventDefault();
        getWeather(e.target.value).then((data)=>updateViloyat(data))
      })
      inp8.addEventListener('click',(e)=>{
        e.preventDefault();
    getWeather(e.target.value).then((data)=>updateViloyat(data))
        })
        inp9.addEventListener('click',(e)=>{
            e.preventDefault();
            getWeather(e.target.value).then((data)=>updateViloyat(data))
        })
        inp10.addEventListener('click',(e)=>{
            e.preventDefault();
            getWeather(e.target.value).then((data)=>updateViloyat(data))
          })
          inp11.addEventListener('click',(e)=>{
            e.preventDefault();
            getWeather(e.target.value).then((data)=>updateViloyat(data))
            })
           