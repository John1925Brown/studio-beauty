const toggleBurgerMenu = () => {
  const header = document.querySelector(".header");
  const menuBtnMobile = document.querySelector(".container__menu--mobile");
  const menuBtnHeader = document.querySelector(".btn__menu--header");
  header.addEventListener("click", (e) => {
    if (e.target === menuBtnMobile) {
      menuBtnMobile.classList.toggle("btn__menu-active");
    }
    if (e.target === menuBtnHeader) {
      menuBtnHeader.classList.toggle("btn__menu-active");
    }
  });
};

toggleBurgerMenu();

export default toggleBurgerMenu;
