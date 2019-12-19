console.log('tamagotchi');

class Tamagotchi {
	constructor(name, hunger, sleepiness, bordom, age) {
		this.name = name
		this.hunger = hunger
		this.sleepiness = sleepiness
		this.bordom = bordom
		this.age = age
	}
}



const game = {

	timer: 0,
	timerId: 0,
	name: 'jim',
	hunger: 0,
	sleepiness: 0,
	bordom: 0,
	age: 0,
	newTama: 0, 	
	updateTamagotchi() {
	const newTamagotchi = new Tamagotchi(this.name, this.hunger, this.sleepiness, this.bordom, this.age)
	this.newTama = newTamagotchi
	},
	startTimer() {
			const mainTimerId = setInterval(() => {
			this.timer++
			console.log(this.timer);
			this.updateTamagotchi()
			console.log(this.newTama);
	      	if (this.timer % 2 === 0) {
	      		this.hunger++
	      		this.showDead()
	      	} 
	      	if (this.timer % 3 === 0){
	      		this.sleepiness++
	      		this.showDead()
	      	} 
	      	if (this.timer % 2 === 0){
	      		this.bordom++
	      		this.showDead()
	      	}
	      	if (this.timer % 5 === 0){
	      		this.age++
	      	}
	      	}, 1000) 
	      	this.timerId = mainTimerId

	},	
	showDead() {
		if (this.hunger == 10){
	    	alert(`${this.name} died!`)
	    	this.stopGame()
	    } else if (this.sleepiness == 10) {
	    	alert(`${this.name} died!`)
	    	this.stopGame()
	    } else if (this.bordom == 10) {
	    	alert(`${this.name} died!`)
	    	this.stopGame()
	    }
	},
	stopGame() {
		clearInterval(this.timerId)
	},
	feedTama() {
		this.hunger--
		console.log(this.hunger);
	},
	playWithTama() {
		this.bordom -= 2
	},
	putTamaToSleep(){
		this.sleepiness = 0
	}
}


$('#feed').on('click', () => {
	game.feedTama()
})

$('#play').on('click', () => {
	game.playWithTama()
})

$('#sleep').on('click', () => {
	game.playWithTama()
})









game.updateTamagotchi()
game.startTimer()


































