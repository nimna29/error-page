document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("preloader").style.display = 'none';
        window.location.href = "error.html";
    }, 2000); // 2000ms = 2s
});