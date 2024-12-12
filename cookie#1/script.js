document.addEventListener("DOMContentLoaded", function () {
    const cookieNotice = document.querySelector(".cookie-notice");
    if (!sessionStorage.getItem("cookieAccepted")) {
        setTimeout(() => {
            cookieNotice.classList.add("show");
        }, 300); 
    }
    document.querySelector(".cookie-btn").addEventListener("click", function () {
        sessionStorage.setItem("cookieAccepted", "true");

        cookieNotice.classList.remove("show");
        setTimeout(() => {
            cookieNotice.style.display = "none";
        }, 500); 
    });
});
