var randomLoc = Math.floor(Math.random()*5);
var location1 = randomLoc;
var location2 = location1+1;
var location3 = location2+1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false){
    guess = prompt("Готуйся, цільсь, ВОГОНЬ! (Введіть число 0-6:)");
    if(guess < 0 || guess > 6){
        alert("Будь ласка введіть число 0-6:");
    } else{
        guesses = guesses + 1;
        
        if(guess == location1 || guess == location2 || guess == location3){
            alert("Є попадання!");
            hits = hits +1;
            if(hits == 3){
                isSunk = true;
                alert("Ви втопили мій корабель!")
            }        
        }
        else{
            alert("В молоко!");
        }
    }
}
var stats = "Ви змогли за " + guesses + " постріл(и/ів) потопити корабель,"
"це говорить про те, що точність вашої стрелянини: " + (3/guesses);
alert(stats); 