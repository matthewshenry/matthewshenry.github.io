// Keep existing fade-in scroll effects and add contact form handler + horizontal scroll helper
document.addEventListener("DOMContentLoaded",()=>{console.log("Website loaded successfully!");});

document.addEventListener("DOMContentLoaded",()=>{
  const items=document.querySelectorAll(".interest-item");
  const sections=document.querySelectorAll("section");
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach((e)=>{ if(e.isIntersecting){ e.target.style.opacity="1"; e.target.style.transform="translateY(0)"; } });
  },{threshold:.1});
  items.forEach((el)=>obs.observe(el));
  sections.forEach((s)=>{ s.style.opacity="0"; s.style.transform="translateY(50px)"; s.style.transition="opacity 1s ease, transform 1s ease"; obs.observe(s); });
});

document.addEventListener("DOMContentLoaded",()=>{
  const rails=document.querySelectorAll(".projects-rail");
  rails.forEach((rail)=>{
    rail.addEventListener("wheel",(e)=>{
      if(e.shiftKey){ rail.scrollLeft += e.deltaY; e.preventDefault(); }
    },{passive:false});
  });
});

document.addEventListener("DOMContentLoaded",()=>{
  const form=document.getElementById("contact-form");
  if(!form) return;
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name=(document.getElementById("name")||{}).value||"";
    const email=(document.getElementById("email")||{}).value||"";
    const message=(document.getElementById("message")||{}).value||"";
    const to="matthews.h@ufl.edu";
    const subject=encodeURIComponent(`Portfolio contact from ${name}`);
    const body=encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href=`mailto:${to}?subject=${subject}&body=${body}`;
  });
});
