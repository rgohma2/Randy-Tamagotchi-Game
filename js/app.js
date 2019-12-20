console.log('tamagotchi');

class Tamagotchi {
	constructor(name, hunger, sleepiness, boredom, age) {
		this.name = name
		this.hunger = hunger
		this.sleepiness = sleepiness
		this.boredom = boredom
		this.age = age
	}
}



const game = {

	timer: 0,
	timerId: 0,
	name: 'jim',
	hunger: 0,
	sleepiness: 0,
	boredom: 0,
	age: 0,
	newTama: 0, 	
	updateTamagotchi() {
	const newTamagotchi = new Tamagotchi(this.name, this.hunger, this.sleepiness, this.boredom, this.age)
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
	      		this.boredom++
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
	    	alert(`${this.name} died of starvation!`)
	    	this.stopGame()
	    } else if (this.sleepiness == 10) {
	    	alert(`${this.name} got too tired and died!`)
	    	this.stopGame()
	    } else if (this.boredom == 10) {
	    	alert(`${this.name} died of bordom!`)
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
			$('.beak').addClass('beak2')
			$('.duck').removeClass('duck2')
			$('.duck').removeClass('duck3')

	},
	playWithTama() {
		if (this.boredom >= 1)
			this.boredom -= 1
			$('.duck').addClass('duck2')
			$('.beak').removeClass('beak2')
			$('.duck').removeClass('duck3')


	},
	putTamaToSleep(){
		if (this.sleepiness >= 5)
			this.sleepiness -= 5
		$('.beak').removeClass('beak2')
		$('.duck').removeClass('duck2')
		$('.duck').addClass('duck3')

	},
	showStatus() {
		$('#age').text(this.age)
		$('#hunger').text(this.hunger)
		$('#boredom').text(this.boredom)
		$('#sleepiness').text(this.sleepiness)
	},
}


$('#feed').on('click', () => {
	game.feedTama()
})

$('#play').on('click', () => {
	game.playWithTama()
})

$('#sleep').on('click', () => {
	game.putTamaToSleep()
	// $('body').append($('div').css({
	// 		'background-color': 'black',
	// 		'width': '10px',
	// 		'height': '10px'
	// 	})).fadeIn('slow')
})










// game.startTimer()


































