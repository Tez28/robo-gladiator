// this creates a function named "fight"
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// log multiple values at once
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    // Alert you are starting the game
    window.alert("Welcome to Robot Gladiators!");

    // Subtract 'playerAttack' points from 'enemyHealth' points
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console to know it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has" + enemyHealth + " health remaining."
    );

    // check enemys health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.")
    }
    // Subtract enemyAttack from playerHealth
    playerHealth = playerHealth - enemyAttack;
    
    // Log a resulting message to the console to know it worked 
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.")
    }
};

fight();
