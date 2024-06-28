const nimbusSlider = document.getElementById('nimbusSlider');
const nimbusPrevBtn = document.getElementById('nimbusPrevBtn');
const nimbusNextBtn = document.getElementById('nimbusNextBtn');

let nimbusIndex = 0;

nimbusNextBtn.addEventListener('click', () => {
    nimbusIndex = (nimbusIndex + 1) % nimbusSlider.children.length;
    updateNimbusSlider();
});

nimbusPrevBtn.addEventListener('click', () => {
    nimbusIndex = (nimbusIndex - 1 + nimbusSlider.children.length) % nimbusSlider.children.length;
    updateNimbusSlider();
});

function updateNimbusSlider() {
    const nimbusOffset = -nimbusIndex * 100;
    nimbusSlider.style.transform = `translateX(${nimbusOffset}%)`;
}
