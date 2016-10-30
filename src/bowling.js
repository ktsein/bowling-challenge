function Bowling(){
  this.firstRollScore = 0;
  this.secondRollScore = 0;
  this.frameScore = 0;
  this.totalScore = 0;
  this.bonusScore = 0;
  this.strike = false;
}

Bowling.prototype.rollOne = function(){
  this.firstRollScore = this.randomOne();
  if (this.strike === true) {
    this.frameScore = this.firstRollScore * 2;
  } else {
    this.checkStrike(this.firstRollScore);
    this.frameScore = this.firstRollScore;
  }
}

Bowling.prototype.rollTwo = function(){
  if (this.firstRollScore === 10){
    throw new Error("Can't 2nd roll when 1st roll is striked");
  } else {
    this.secondRollScore = this.randomTwo();
    if (this.strike === true) {
      this.frameScore = this.frameScore + this.secondRollScore * 2;
      this.totalScore = this.totalScore + this.frameScore ;
    } else {
      this.checkStrike(this.secondRollScore);
      this.frameScore = this.frameScore + this.secondRollScore;
      this.totalScore = this.totalScore + this.frameScore;
    }
  }
}

Bowling.prototype.randomOne = function(){
  return (Math.floor(Math.random() * 11));
}

Bowling.prototype.randomTwo = function(){
  return (Math.floor(Math.random() * (11 - this.firstRollScore)));
}

Bowling.prototype.checkStrike = function(score){
  if (score === 10){
    this.strike = true;
  } else {
    this.strike = false;
  }
}

Bowling.prototype.reset = function(){
  this.firstRollScore = 0;
  this.secondRollScore = 0;
  this.frameScore = 0;
}
