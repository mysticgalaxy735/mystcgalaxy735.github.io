// year
document.getElementById("year").textContent = new Date().getFullYear();

// Sample Articles
const articles = [
  { title:"พลังแห่งความเชื่อ: เริ่มต้นที่ใจ", img:"https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=800", excerpt:"การตั้งเจตนาเปรียบเหมือนการยิงดาวตก" },
  { title:"วิธีรับพลังจักรวาลด้วยการหายใจ 3 จังหวะ", img:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800", excerpt:"ฝึกง่าย ๆ ทุกเช้า เติมพลังให้วันใหม่" },
  { title:"เสียงสั่นของชามทิเบต", img:"https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?w=800", excerpt:"ปล่อยความคิดให้ลอยเหมือนฝุ่นกลางอากาศ" }
];
const artBox = document.getElementById("articles-container");
articles.forEach(a=>{
  artBox.innerHTML += `<div class="card"><img src="${a.img}"><h3>${a.title}</h3><p>${a.excerpt}</p></div>`;
});

// Chat
const messages = document.getElementById("messages");
const sendBtn = document.getElementById("send-btn");
sendBtn.onclick = ()=>{
  const text = document.getElementById("chat-text").value;
  if(!text) return;
  const div = document.createElement("div");
  div.textContent = text;
  messages.appendChild(div);
  document.getElementById("chat-text").value="";
};

// Fortune (simple random)
const fortunes = ["โอกาสใหม่กำลังเข้ามา","ระวังงานล้น","คนโสดมีคนแอบมอง","โชคดีมาเมื่อช่วยคนอื่น"];
document.getElementById("shake-btn").onclick=()=>{
  const res = fortunes[Math.floor(Math.random()*fortunes.length)];
  document.getElementById("fortune-result").textContent=res;
};

// AI demo
document.getElementById("ai-btn").onclick=()=>{
  const q = document.getElementById("question").value;
  const ans = q.includes("งาน") ? "การงานกำลังดีขึ้น" : q.includes("รัก") ? "มีคนสนใจคุณ" : "โชคลาภจะมา";
  document.getElementById("ai-answer").textContent=ans;
};
