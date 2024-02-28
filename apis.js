const KEY='1ff9cc2d5a7707c48214c97cf6252d1f';
const getData=async(viloyat)=>{
const base='https://api.openweathermap.org/data/2.5/weather'
const query=`?q=${viloyat}&units=metric&appid=${KEY}`
const req= await fetch(base+query)
const data= await req.json()
return data;
}
/*getData('namangan').then((data)=>{
    console.log(data);
})*/
