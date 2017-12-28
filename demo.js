var game = 0;

var games = [
	{ url: "https://www.nickjr.tv/gsp.scenic/international/games/nella-connect-the-shots/build/index.html", w: 450, h: 265, instruction: "" },
	{ url: "https://kidmons.com/game/paint-online", w: 450, h: 300, instruction: "נא לשרבל חופשי" },
];
 
 
function gameplace(n){
	if (n !== undefined) {
		game = n;
	}

	if (game == games.length){
		game = 0;
	}
	
	return games[game++];
 }
 
 function setUrl() {
	var game = gameplace();
	 $('iframe').attr('src', game.url).attr('width', game.w).attr('height', game.h);
	 $('#instruct').text(game.instruction);
 }
 function finish(){
	 setUrl();
 }
 function init() {
	 $('#next').click(finish);
	 setUrl();
 }
