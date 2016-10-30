describe('Bowling', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  it('starts at 0 score', function(){
    expect(bowling.frameScore).toEqual(0);
  });

  it('changes score after rolling 1st time in Frame 1', function(){
    spyOn(bowling, 'randomOne').and.returnValue(8);
    bowling.rollOne();
    expect(bowling.firstRollScore).toEqual(8);
  });

  it('changes score after rolling 2nd time in Frame 1', function(){
    spyOn(bowling, 'randomTwo').and.returnValue(1);
    bowling.rollTwo();
    expect(bowling.secondRollScore).toEqual(1);
  });

  it('scores correctly after rolling two times in Frame 1', function(){
    spyOn(bowling, 'randomOne').and.returnValue(3);
    bowling.rollOne();
    spyOn(bowling, 'randomTwo').and.returnValue(4);
    bowling.rollTwo();
    expect(bowling.frameScore).toEqual(7);
  });

  it('scores correctly in total after two complete Frames', function(){
    bowling.totalScore = 8;
    spyOn(bowling, 'randomOne').and.returnValue(3);
    bowling.rollOne();
    spyOn(bowling, 'randomTwo').and.returnValue(4);
    bowling.rollTwo();
    expect(bowling.frameScore).toEqual(7);
    expect(bowling.totalScore).toEqual(15);
  });

  it('strikes when 10 pins are hit in 1st roll', function(){
    spyOn(bowling, 'randomOne').and.returnValue(10);
    bowling.rollOne();
    expect(bowling.strike).toEqual(true);
  });

  it('strikes when 10 pins are hit in 2nd roll', function(){
    bowling.firstRollScore = 0;
    spyOn(bowling, 'randomTwo').and.returnValue(10);
    bowling.rollTwo();
    expect(bowling.strike).toEqual(true);
  });

  it('prevents 2nd roll if 1st roll is striked', function(){
    spyOn(bowling, 'randomOne').and.returnValue(10);
    bowling.rollOne();
    expect(function(){bowling.rollTwo();}).toThrow(new Error("Can't 2nd roll when 1st roll is striked"))
  });

  // it('scores bonus for the strike in the next Frame', function(){
  //   bowling.totalScore = 10;
  //   bowling.strike = true;
  //   spyOn(bowling, 'randomOne').and.returnValue(3);
  //   bowling.rollOne();
  //   spyOn(bowling, 'randomTwo').and.returnValue(4);
  //   bowling.rollTwo();
  //   expect(bowling.totalScore).toEqual(24);
  // });


});
