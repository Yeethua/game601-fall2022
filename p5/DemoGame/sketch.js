function setup() {
	createCanvas(650, 900);
	
}

function draw() {
	background(255);
	for (var i = 0; i<width; i++){
	var y = i%500;
		line(100, 0, i, y*2);
		line(0, 100, y*2, i);
		
		for(var i = 0; i < height; i++){
		var y = i%500;
		line(1080, 0, i, y*2.5);
		line(0, 1080, i, y*2.5);
		}
	}
}