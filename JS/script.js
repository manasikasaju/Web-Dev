// Smooth Scroll
document.querySelectorAll("nav a[href^='#']").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// POPUP
const popup = document.getElementById("popup");
document.getElementById("contactBtn").onclick = () => popup.style.display = "flex";
document.getElementById("contactBtn2").onclick = () => popup.style.display = "flex";
document.getElementById("closePopup").onclick = () => popup.style.display = "none";
