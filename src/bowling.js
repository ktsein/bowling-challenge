function Bowling(){
  this.firstRollScore = 0;
  this.secondRollScore = 0;
  this.frameScore = 0;
  this.totalScore = 0;
  this.strike = false;
}

Bowling.prototype.rollOne = function(){
  this.firstRollScore = this.randomOne();
  this.checkStrike();
}

Bowling.prototype.rollTwo = function(){
  if (this.firstRollScore === 10){
    throw new Error("Can't 2nd roll when 1st roll is striked");
  } else {
    this.secondRollScore = this.randomTwo();
    this.checkStrike();
    this.frameScore = this.firstRollScore + this.secondRollScore;
    if (this.strike === true){
      this.totalScore = this.totalScore + this.frameScore + this.frameScore;
    } else {
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

Bowling.prototype.checkStrike = function(){
  if (this.firstRollScore === 10){
    this.strike = true;
  } else if (this.secondRollScore === 10){
    this.strike = true;
  } else {
    this.strike = false;
  }
}
