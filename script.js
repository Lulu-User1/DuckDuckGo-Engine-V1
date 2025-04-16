document.addEventListener("DOMContentLoaded", function () {
    const onionSwitch = document.getElementById("onionSwitch");
    const switchStatus = document.getElementById("switchStatus");

    onionSwitch.checked = false; // Default state is OFF

    onionSwitch.addEventListener("change", function () {
        if (onionSwitch.checked) {
            switchStatus.textContent = "Onionize: ON";
        } else {
            switchStatus.textContent = "Onionize: OFF";
        }
    });
});
