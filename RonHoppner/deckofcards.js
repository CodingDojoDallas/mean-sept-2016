// The Deck should contain the 52 standard cards - GOOD
// The Deck should be able to shuffle - GOOD
// The Deck should be able to reset - GODD
// The Deck should be able to deal a random card - GOOD

function Deck(){
	var spades = ['Ace Spades', 'King Spades', 'Queen Spades', 'Jack Spades', '10 Spades', '9 Spades', '8 Spades', '7 Spades', '6 Spades', '5 Spades', '4 Spades', '3 Spades', '2 Spades']
	var clubs = ['Ace Clubs', 'King Clubs', 'Queen Clubs', 'Jack Clubs', '10 Clubs', '9 Clubs', '8 Clubs', '7 Clubs', '6 Clubs', '5 Clubs', '4 Clubs', '3 Clubs', '2 Clubs']
	var hearts = ['Ace Hearts', 'King Hearts', 'Queen Hearts', 'Jack Hearts', '10 Hearts', '9 Hearts', '8 Hearts', '7 Hearts', '6 Hearts', '5 Hearts', '4 Hearts', '3 Hearts', '2 Hearts']
	var diamonds = ['Ace Diamonds', 'King Diamonds', 'Queen Diamonds', 'Jack Diamonds', '10 Diamonds', '9 Diamonds', '8 Diamonds', '7 Diamonds', '6 Diamonds', '5 Diamonds', '4 Diamonds', '3 Diamonds', '2 Diamonds']
	this.deck = spades.concat(clubs).concat(hearts).concat(diamonds);
	this.reset = function(){
		this.deck = spades.concat(clubs).concat(hearts).concat(diamonds);
	}
}

// The Player should have a name - GOOD
// The Player should have a hand - GOOD
// The Player should be able to take a card (use the deck.deal method) - GOOD
// The Player should be able to discard a  - GOOD

function Player(name){
	this.name = name;
	this.hand = [];
	this.draw = function(deck_in_use){
		var new_card = deck_in_use.deal();
		this.hand.push(new_card);
		console.log(this.hand);
	}
	this.discard = function(){
		this.hand.pop();
		console.log(this.hand);
	}
	return this;
}

Deck.prototype.shuffle = function(){
	var currentIndex = this.deck.length, temporaryValue, randomIndex;
  	// While there remain elements to shuffle...
  	while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = this.deck[currentIndex];
    this.deck[currentIndex] = this.deck[randomIndex];
    this.deck[randomIndex] = temporaryValue;
  }
  return this;
}

Deck.prototype.deal = function(){
	var card = this.deck[0];
	this.deck.shift();
	console.log(card, this.deck.length); //this.deck.length used to confirm deck is being reduced
	return card;
}

deck = new Deck();
player = new Player('player');
deck.shuffle();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
deck.deal();
player.draw(deck);
player.draw(deck);
player.draw(deck);
player.draw(deck);
player.draw(deck);
player.draw(deck);
player.draw(deck);
player.discard();
player.discard();






