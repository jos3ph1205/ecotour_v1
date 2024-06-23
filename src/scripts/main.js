/* --------------------------------------------------
BTN CLICK ANIMATION
-------------------------------------------------- */
let buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
   let btnRipple = btn.appendChild(document.createElement("div"));
   btnRipple.classList.add("btn-ripple");

   btn.addEventListener("mousedown", (e) => {
      let x = (e.offsetX / btn.offsetWidth) * 100,
         y = (e.offsetY / btn.offsetHeight) * 100;

      let ripple = btnRipple.appendChild(document.createElement("span"));
      ripple.classList.add("ripple");

      ripple.style.left = `${x}%`;
      ripple.style.top = `${y}%`;

      ripple.addEventListener("animationend", () => {
         btnRipple.removeChild(ripple);
      });
   });
});

