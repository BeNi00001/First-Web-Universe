document.querySelectorAll(".factBtn").forEach(btn => {
  btn.addEventListener("click", () => {                         
    const list = btn.nextElementSibling;                        
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !isOpen);                 
    list.hidden = isOpen;                                       
  });
});