// Functions
function updatePoints() {

    document.getElementById("points").textContent = "Points: " + points;

}

/* Hardcode Starting Points */
localStorage.setItem("points", 0);

// Save and Update Points From Cache
var points = localStorage.getItem("points");

if (points == null) {

    localStorage.setItem("points", 0);

}

updatePoints();

/* Shutdown */
localStorage.setItem("points", points);

