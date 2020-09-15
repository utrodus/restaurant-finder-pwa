import Render from "./render";

const App = () => {
    let appMenu = document.getElementById("app__menu");
    let navBarToggle = document.getElementById("menu__button");

    navBarToggle.addEventListener("click", function () {
        appMenu.classList.toggle("open");
        event.stopPropagation();
    });
    
    Render();
};

export default App;