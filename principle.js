document.getElementById("readMore").addEventListener("click", function() {
    var moreText = document.getElementById("moreText");
    if (moreText.classList.contains("hidden")) {
        moreText.classList.remove("hidden");
        this.textContent = "Read Less";
    } else {
        moreText.classList.add("hidden");
        this.textContent = "Read More";
    }
});
