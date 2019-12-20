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
	lights: 0,
	changeLight: false,
	timer: 0,
	timerId: 0,
	name: '',
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
			// console.log(this.timer);
			this.updateTamagotchi()
			// console.log(this.newTama);
			if (this.changeLight === true){
				this.lights++
				if (this.lights > 4) {
					this.turnLightsOn()
					this.lights = 0
				}
			}

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
			$('.duck').addClass('dead')
	    	$('body').append('<p>').css({
	    	'color' : 'white',
			'margin': '0 auto',
			'font-size': '50px',
			'background-image': "url('https://rlv.zcache.co.nz/xx_funny_dead_duck_cartoon_iphone_5_5s_case-r78cc401bf6fc4385893419b3e5952460_vx34w_8byvr_307.jpg?rvtype=content')",
			'padding': '40px',
			'text-align': 'center'
			}).text(`${this.name} died of starvation! At ${this.age} years old`)
	    	this.stopGame()
	    } else if (this.sleepiness == 10) {
	    	$('.duck').addClass('dead')
	    	 $('body').append('<p>').css({
	    	'color' : 'white',
			'margin': '0 auto',
			'font-size': '50px',
			'border': '1px solid black',
			'background-image': "url('https://rlv.zcache.co.nz/xx_funny_dead_duck_cartoon_iphone_5_5s_case-r78cc401bf6fc4385893419b3e5952460_vx34w_8byvr_307.jpg?rvtype=content')",
			'padding': '40px',
			'text-align': 'center'
			}).text(`${this.name} got too tired and died!`)
	    	this.stopGame()
	    } else if (this.boredom == 10) {
	    	$('.duck').addClass('dead')
	    	$('body').append('<p>').css({
	    	'color' : 'white',
			'margin': '0 auto',
			'font-size': '50px',
			'background-image': "url('https://rlv.zcache.co.nz/xx_funny_dead_duck_cartoon_iphone_5_5s_case-r78cc401bf6fc4385893419b3e5952460_vx34w_8byvr_307.jpg?rvtype=content')",
			'padding': '40px',
			'text-align': 'center'
			}).text(`${this.name} died of boredom!`)
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

	},
	playWithTama() {
		if (this.boredom >= 1)
			this.boredom -= 1
			$('.duck').addClass('duck2')
			$('.beak').removeClass('beak2')


	},
	putTamaToSleep(){
		if (this.sleepiness >= 5) {
			this.sleepiness -= 5
		$('.beak').removeClass('beak2')
		$('.duck').removeClass('duck2')
		$('.duck').addClass('duck3')
		this.turnLightsOff()
		} else {
			$('.notSleepy').show()
			$('.notSleepy').text(`${this.name} is not tired right now.`)
		}
	},
	showStatus() {
		$('#age').text(this.age)
		$('#hunger').text(this.hunger)
		$('#boredom').text(this.boredom)
		$('#sleepiness').text(this.sleepiness)
	},
	turnLightsOff() {
		this.changeLight = true
		$('.notSleepy').hide()
		$('body').removeClass('lightson')
		$('body').addClass('lightsoff')

	},
	turnLightsOn() {
		$('body').addClass('lightson')
		$('.duck').removeClass('duck3')
		$('body').removeClass('lightsoff')
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


$('form').on('submit', (e) => {
	e.preventDefault()
	const $name = $('#name').val()
	game.name = $('#name').val()
	$('#pickName').text($name)
	console.log($name);
	game.startTimer()
	$('#name').hide()
})










































