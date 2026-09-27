
// ===== Fun fact button: opens and closes the list =====
document.querySelectorAll(".factBtn").forEach(btn => {            // finds every fun fact button on the page
  btn.addEventListener("click", () => {                           // runs when the button is clicked              
    const list = btn.nextElementSibling;                          // the list right after the button
    const isOpen = btn.getAttribute("aria-expanded") === "true";  // checks if the list is open right now
    btn.setAttribute("aria-expanded", !isOpen);                   // switches the button between open and closed.
    list.hidden = isOpen;                                         // hides the list if it was open, shows it if closed
  });
});

// ===== Typewriter heading: counts the letters =====
document.querySelectorAll(".sidePageH2").forEach(h => {           // finds every side page heading
  h.style.setProperty("--chars", h.textContent.trim().length);    // counts the letters and gives the number to CSS
});

// ===== Weight calculator (only on earth.html) =====
const form = document.getElementById("weightForm");               // finds the form
if (form) {                                                       // only runs if the form exists on this page
  form.addEventListener("submit", e => {                          // runs when the user clicks Calculate
    e.preventDefault();                                           // stops the page from reloading                            
    const kg = Number(document.getElementById("weight").value);   // the weight the user typed, as a number
    const select = document.getElementById("place");              // the dropdown menu
    const factor = Number(select.value);                          // gravity compared to Earth                      
    const place = select.selectedOptions[0].text;                 // the name of the chosen place           
    document.getElementById("result").textContent =               // writes the answer on the page
      `On ${place}, a scale would show about ${(kg * factor).toFixed(1)} kg.`;  // writes the answer on the page
  });
}