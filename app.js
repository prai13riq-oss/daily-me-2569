const greeting=document.getElementById("greeting");
const today=document.getElementById("today");
const hour=new Date().getHours();

if(hour<12){
greeting.innerHTML="☀️ Good Morning";
}else if(hour<18){
greeting.innerHTML="🌤️ Good Afternoon";
}else{
greeting.innerHTML="🌙 Good Evening";
}

today.innerHTML=new Date().toLocaleDateString("th-TH",{
day:"numeric",
month:"long",
year:"numeric"
});

document.getElementById("startBtn").onclick=()=>{
window.location.href="outfit.html";
};