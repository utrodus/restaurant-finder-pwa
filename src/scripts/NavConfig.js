const navConfig = () => {
    let mainNav = document.getElementById("nav-list");
    let navBarToggle = document.getElementById("navbar-toggle");

    navBarToggle.addEventListener("click", function () {
        console.log(mainNav);
        mainNav.classList.toggle("active");
    });
};

export default navConfig;