function launchGame(url){

const frame = document.getElementById("game-frame");

frame.src = url;

document.getElementById("game-container").scrollIntoView({
behavior: "smooth"
});

}
