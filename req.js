const rp = require("request-promise")
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


function getRandom(func){
var array=[{url:"https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm",type:"film"},{url:"https://www.imdb.com/chart/toptv/?ref_=nv_tvv_250",type:"dizi"}]
var item=array[Math.floor(Math.random() * array.length)]
var n
if(item.type=="dizi")
   n=Math.floor(Math.random() * 250);
else
   n=Math.floor(Math.random() * 100);
rp(item.url).then(data=>{
   const dom = new JSDOM(data);
   var t= dom.window.document.getElementsByClassName("titleColumn").item(n).textContent.trim()
   var i= dom.window.document.getElementsByClassName("ratingColumn imdbRating").item(n).textContent.trim()
   if(item.type=="dizi")
     func({title:t.split("\n")[1].trim(),date:t.split("\n")[2].trim(),imdb:i,type:item.type})
   else
     func({title:t.split("\n")[0].trim(),date:t.split("\n")[1].trim(),imdb:i,type:item.type})
})
.catch(err=>{if(err)throw err;})
}


module.exports=getRandom