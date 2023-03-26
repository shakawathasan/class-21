document.getElementById("sidebar_toggler").addEventListener("click",function(){
    document.getElementById("sidebar").classList.toggle("show");
})
document.getElementById("src-btn").addEventListener("click",function(){
    document.getElementById("search-box").classList.add("show");
})
document.getElementById("search-close").addEventListener("click",function(){
    document.getElementById("search-box").classList.remove("show")
})
document.getElementById("colorflipper").addEventListener("click",function(){
    let hexCode ="#"
    hexCode += (Math.random()*100).toString(16).substring(3,9)
    document.body.style.background = hexCode;
})
for(let i= 0; i<1000; i+=2){
    console.log(i);
}


for (var i=0; i<=100; i++) {
    if (i === 0) {
           document.write(i +  " is even");
    }
    else if (i % 2 === 0) {
      document.write(i + " is even");   
    }
    else {
      document.write(i + " is odd");
    }
  }
  
setInterval(function() {
    let hexCode ="#"
    hexCode += (Math.random()*100).toString(16).substring(3,9)
    document.body.style.background = hexCode;
},500)