document.querySelectorAll(".factBtn").forEach(btn => {
  btn.addEventListener("click", () => {                         
    const list = btn.nextElementSibling;                        
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !isOpen);                 
    list.hidden = isOpen;                                       
  });
});

document.querySelectorAll(".sidePageH2").forEach(h => {
  h.style.setProperty("--chars", h.textContent.trim().length);
});

const form = document.getElementById("weightForm");
if (from) {
  form.addEventListener("submit", e => {
    e.preventDefault();                                       
    const kg = Number(document.getElementById("weight").value);
    const select = document.getElementById("place");
    const factor = Number(select.value);                      
    const place = select.selectedOptions[0].text;             
    document.getElementById("result").textContent =
      `On ${place}, a scale would show about ${(kg * factor).toFixed(1)} kg.`;
  });
}