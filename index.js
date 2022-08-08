const cuerpo=document.querySelector("body");
cuerpo.addEventListener("mousemove",(event)=>{
    const xPos=event.offsetX;
    const yPos=event.offsetY;
    const span_nuevo=document.createElement("span");
    span_nuevo.style.left=xPos+"px";
    span_nuevo.style.top=yPos+"px";
    const size=Math.random()*100;
    span_nuevo.style.width=size+"px";
    span_nuevo.style.height=size+"px";

    cuerpo.appendChild(span_nuevo);
    
    setTimeout(()=>{
        span_nuevo.remove();
    },3000)


});