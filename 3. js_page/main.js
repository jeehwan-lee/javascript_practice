window.onload = () => {
  const tab_swtichers = document.querySelectorAll("[data-switcher]");

  for (let i = 0; i < tab_swtichers.length; i++) {
    const tab_swticher = tab_swtichers[i];
    const page_id = tab_swticher.dataset.tab;

    tab_swticher.addEventListener("click", () => {
      document
        .querySelector(".tabs .tab.is-active")
        .classList.remove("is-active");

      tab_swticher.parentNode.classList.add("is-active");
      console.log(page_id);

      SwitchPage(page_id);
    });
  }
};

function SwitchPage(page_id) {
  console.log(page_id);

  const current_page = document.querySelector(".pages .page.is-active");
  current_page.classList.remove("is-active");

  const next_page = document.querySelector(
    `.pages .page[data-page="${page_id}"]`
  );
  next_page.classList.add("is-active");
}
