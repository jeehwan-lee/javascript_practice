window.onload = () => {
  const popup_btns = document.querySelectorAll(".popup-button");

  popup_btns.forEach((button) => {
    button.addEventListener("click", (e) => {
      const target = e.target.dataset.target;

      const el = document.querySelector(target);
      if (el != null) {
        el.classList.toggle("is-active");
      }
    });
  });
};
