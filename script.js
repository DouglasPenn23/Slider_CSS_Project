document.getElementById('colorSlider').addEventListener('input', function() {
    const sliderValue = this.value;
    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue(`--color-scheme-${sliderValue}`);
});
