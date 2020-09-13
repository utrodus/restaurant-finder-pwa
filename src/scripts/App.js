const App = () => {
    let mainNav = document.getElementById("app__menu");
    let navBarToggle = document.getElementById("menu__button");

    navBarToggle.addEventListener("click", function () {
        mainNav.classList.toggle("open");
    });
};

export default App;