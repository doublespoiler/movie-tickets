//Business Logic
function Ticket(movie, movieAge, age, time) {
  this.movie = movie;
  this.movieAge = movieAge;
  this.age = age;
  this.time = time;
}

Ticket.prototype.calcPrice = function(){
  price = 20000; //formula here
  let ageMod = 1;
  let movieMod = 1;
  let timeMod = 1;

  if (this.movieAge === "old") {
    movieMod = 0.75;
  }
  if (this.age <= 13) {
    ageMod = 0.5;
  }
  if (this.age >= 60) {
    ageMod = 0.75;
  }
  if (this.time >= "08:00:00" && this.time <= "17:00:00") {
    timeMod = 0.75;
  }

  price = price * ageMod * movieMod * timeMod;
  return price;
};