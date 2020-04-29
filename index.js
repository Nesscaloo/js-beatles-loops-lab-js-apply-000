function theBeatlesPlay(musicians, instruments) {
  var string = [];
  for (var i = 0; i < musicians.length; i++) {
    string.push(musicians[i] + " plays " + instruments[i]);
  } 
  return string;
}

function johnLennonFacts() {
  var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice",
];
  var array = [];
  var i = 0;
  while (array.length < facts.length) {
    array.push(facts[i] + "!!!");
    i++;
  }
  return array;
}

function iLoveTheBeatles(num) {
  var array = [];
  do { array.push("I love the Beatles!");
  num++;
} while (num < 15);
return array;
}