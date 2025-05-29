function uncheckRadios() {
    document.querySelectorAll('input[name="Gioi_tinh"]').forEach(function(radio) {
        radio.checked = false;
    });
}
function toggleRadio(radio) {
    if (radio.checked && radio.wasChecked) {
        radio.checked = false;
    }
    radio.wasChecked = radio.checked;
}
document.querySelectorAll('input[type="radio"][name="Gioi_tinh"]').forEach(function(radio) {
    radio.wasChecked = false;
    radio.addEventListener('click', function() {
        toggleRadio(radio);
    });
});