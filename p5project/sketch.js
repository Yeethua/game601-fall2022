let bullets = []
let enemies = []
let score = 0
function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i =0; i < 10; i++){	//making the enemy, loop 10 times
		let enemy = {
		x:  random(0, width),
		y:	random(-800, 0),
		}
		enemies.push(enemy)//add enemy to the enemies list
	}
}

function draw() {
	//draw the player
	background(0);
	rectMode(CENTER)
	fill(0, 234, 255);
	strokeWeight(0);
	circle(mouseX,height-100, 40);
	//update & showing bullet on the screen
	for (let bullet of bullets){
		fill(242, 255, 0)
		strokeWeight(0);
		bullet.y -= 15 //bullet goes up & this is bullet speed
		circle(bullet.x, bullet.y, 20)
	}
	
	//update and draw enemy, same logic as the bullets
	for (let enemy of enemies){
		fill(255, 0, 255)
		strokeWeight(0);
		enemy.y += 1.5 //enemy fall speed
		rect(enemy.x, enemy.y, 20)
		//game lose condition
		if (enemy.y > height){
			text('Game Over, Get Gud',width/2, height/2)
			noLoop()
		}
	}
		//get rid of enemies when they get shot
		for (let enemy of enemies){
			for (let bullet of bullets){
				if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 10){
					enemies.splice(enemies.indexOf(enemy), 1)//get rid of enemies
					bullets.splice(bullets.indexOf(bullet), 1)//get rid of bullets
					//spwan more enemies
					let new_enemy = {
					x:  random(0, width),
					y:	random(-800, 0),
					}
					enemies.push(new_enemy);
					score += 1 //kill an enemy get 1 point
				}
			}
		}
		text(score, 50, 50)
	}

function mousePressed(){
	//put the bullet on the play's location, and spawn 1 every click
	let bullet = {
		x: mouseX,
		y: height-130
	}
	bullets.push(bullet) //add the bullet to the list
	
}