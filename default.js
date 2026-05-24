function spinLogo(x) {
    x.classList.remove("spin");
    void x.offsetWidth; // force a reflow so the animation can restart
    x.classList.add("spin");
}