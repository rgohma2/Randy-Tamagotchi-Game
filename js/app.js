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
			this.showStatus()
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
		if (this.hunger >= 1)
			this.hunger--
			console.log(this.hunger);
	},
	playWithTama() {
		if (this.bordom >= 2)
			this.bordom -= 2
	},
	putTamaToSleep(){
		if (this.sleepiness >= 5)
			this.sleepiness -= 5
	},
	showStatus() {
		$('#age').text(this.age)
		$('#hunger').text(this.hunger)
		$('#bordom').text(this.bordom)
		$('#sleepiness').text(this.sleepiness)
	}
}


$('#feed').on('click', () => {
	game.feedTama()
})

$('#play').on('click', () => {
	game.playWithTama()
})

$('#sleep').on('click', () => {
	game.putTamaToSleep()
})









game.updateTamagotchi()
game.startTimer()


































