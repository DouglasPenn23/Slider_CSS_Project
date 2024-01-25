document.getElementById('colorSlider').addEventListener('input', function() {
    const sliderValue = this.value;
    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue(`--color-scheme-${sliderValue}`);
});


// Get a document element ID'd as color slider and add an event listener to the input then write a function
