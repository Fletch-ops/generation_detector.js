function start() {
    /* The program asks the user in a pop up to enter a four digit integer between 
    *the dates 1928 and 2019, then runs the function 'generationDetector'.*/
    var birthdate = readInt("What year were you born? Please enter a four digit integer between 1928 and 2019: ");
    generationDetector(birthdate);
}

function generationDetector(birthdate) {
    if(birthdate > 0 && birthdate < 1928) {
        /*This if statement responds to an invalid input greater than 0 but less than 1928,
        *which is outside of the program's parameters. It prompts the user to enter 
        *another integer and retsarts the program. */
        println("Either you're joking or you're way too old to be needing this kind of thing.");
        println("Please enter a valid birthdate, or type '0' to stop: ");
        start();
    }
    if (birthdate > 2019) {
        /*This if statement responds to an invalid input greater than 2019, which 
        *is outside of the program's parameters. It prompts the user to enter 
        *another integer and retsarts the program. */
        println("It's possible that you might be an actual timetraveler, but you don't seem to exist yet.");
        println("Please enter a valid birthdate, or type '0' to stop: ");
        start();
    }
    if (birthdate >= 1928 && birthdate <= 1945) {
        /*This if statement responds to a user input between 1928 and 1945,
        *determining that the user is from the Silent Generation, before 
        *prompting the user to enter another input.*/
        println("You are from the Silent Generation, between the ages of 74-91.");
        println("If you'd like, enter another year, or type '0' to stop.");
        start();
    }
    if (birthdate >= 1946 && birthdate <= 1964) {
        /*This if statement responds to a user input between 1946 and 1964,
        *determining that the user is a Baby Boomer, before prompting the user 
        *to enter another input.*/
        println("You are a Baby Boomer, between the ages of 55-73.");
        println("Enter another year, or type '0' to stop.");
        start();
    }
    if (birthdate >= 1965 && birthdate <= 1980) {
        /*This if statement responds to a user input between 1965 and 1980,
        *determining that the user is from Generation X, before prompting the 
        *user to enter another input.*/
        println("You are from Generation X, between the ages of 39-54.");
        println("Enter another year, or type '0' to stop.");
        start();
    }
    if (birthdate >= 1981 && birthdate <= 1996) {
        /*This if statement responds to a user input between 1981 and 1996,
        *determining that the user is a Millenial, before prompting the user to 
        *enter another input.*/
        println("You are a Millenial, between the ages of 23-38.");
        println("Enter another year, or type '0' to stop.");
        start();
    }
    if (birthdate >= 1997 && birthdate <= 2019) {
        /*This if statement responds to a user input between 1997 and 2019,
        *determining that the user is from Generation Z, before prompting the 
        *user to enter another input.*/
        println("You are from Generation Z, ranging from 22 and under.");
        println("Enter another year, or type '0' to stop.");
        start();
    }
    if (birthdate <= 0) {
        /*This if statement responds to a user input of "0", in which it thanks
        *the user for playing and stops the program from looping.*/
        println("Thank you for playing!");
    }
    
    
}
