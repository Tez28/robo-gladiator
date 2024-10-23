// this creates a function named "fight"
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// log multiple values at once
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    // Alert you are starting the game
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to Fight or SKip this round?");
    // if player chooses to fight, the fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

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
        // If player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        // if no (false), ask question again by running fight() again
    } else {
        fight();
    }
};

fight();
