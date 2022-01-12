// Super Hero Page

// Add Event Listener
$("#search").click(loadSuperhero);

// Event Functions
function loadSuperhero() {
    // Get user input
    let superhero = $("#superhero").val();
    superhero = superhero.toLowerCase();

    // Set output based on input
    if (superhero == "download file") {
        $("h2").html("");
        $("img").attr("src", "images/spiderman.gif");
        $("a").attr("href", "https://en.wikipedia.org/wiki/Spider-Man");
        $("div").css("background-color", "red");
    } else if (superhero == "shrek") {
        $("h2").html("The Amazing Shrek");
        $("img").attr("src", "images/shrek.jpg");
        $("a").attr("href", "https://en.wikipedia.org/wiki/Shrek");
        $("div").css("background-color", "green");
    } else if (superhero == "superman") {
        $("h2").html("The Last Son of Krypton");
        $("img").attr("src", "images/superman.jpg");
        $("a").attr("href", "https://en.wikipedia.org/wiki/Superman");
        $("div").css("background-color", "blue");
    } else if (superhero == "batman") {
        $("h2").html("The Dark Knight");
        $("img").attr("src", "images/batman.jpg");
        $("a").attr("href", "https://en.wikipedia.org/wiki/Batman");
        $("div").css("background-color", "Navy");
    }
}
