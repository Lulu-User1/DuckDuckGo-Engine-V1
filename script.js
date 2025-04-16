document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("searchBar");
    const onionSwitch = document.getElementById("onionSwitch");

    // Default state OFF
    onionSwitch.checked = false;

    // Redirect to DuckDuckGo on Enter key press
    searchBar.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            window.location.href = "https://duckduckgo.com/";
        }
    });
});
