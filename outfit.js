const topLayer = document.getElementById("topLayer");
const bottomLayer = document.getElementById("bottomLayer");
const shoeLayer = document.getElementById("shoeLayer");
const bagLayer = document.getElementById("bagLayer");
const styleName = document.getElementById("styleName");

// เสื้อ
function changeTop(color,name){
    topLayer.style.background = color;
    styleName.innerText = name;
}

// กางเกง/กระโปรง
function changeBottom(color,name){
    bottomLayer.style.background = color;
    styleName.innerText = name;
}

// รองเท้า
function changeShoes(color){
    shoeLayer.querySelectorAll("div").forEach(shoe=>{
        shoe.style.background = color;
    });
}

// กระเป๋า
function toggleBag(){
    bagLayer.classList.toggle("hidden");
}

// เปลี่ยนชื่อสไตล์
function setMood(name){
    styleName.innerText = name;
}

// สุ่มชุด
function randomOutfit(){

    const tops = [
        ["#F9A8D4","🌸 Soft Girl"],
        ["#C4F1D5","🍀 Casual Hoodie"],
        ["#FDE68A","🌼 Cozy Knit"],
        ["#BFDBFE","☁️ Blue Cardigan"]
    ];

    const bottoms = [
        ["#93C5FD","👖 Jeans"],
        ["#FBCFE8","🎀 Tennis Skirt"],
        ["#DDD6FE","💜 Purple Skirt"],
        ["#BEF264","🧸 Cargo Pants"]
    ];

    const shoes = ["black","white","#FCA5A5","#C4B5FD"];

    const top = tops[Math.floor(Math.random()*tops.length)];
    const bottom = bottoms[Math.floor(Math.random()*bottoms.length)];
    const shoe = shoes[Math.floor(Math.random()*shoes.length)];

    changeTop(top[0],top[1]);
    changeBottom(bottom[0],bottom[1]);
    changeShoes(shoe);

    if(Math.random()>0.5){
        bagLayer.classList.remove("hidden");
    }else{
        bagLayer.classList.add("hidden");
    }

    styleName.innerText = `${top[1]} + ${bottom[1]}`;
}