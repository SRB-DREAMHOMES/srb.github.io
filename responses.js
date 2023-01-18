function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello sir How can i help you ??";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if(input == "plots") {
        return "Sure! sir you can see  plots and residential, villas on SRB DREAMHOMES Agent SUNIL SAINI Contact on gmail, facebook, and contact no :-7220001222  ";
    }
    else{
        return "I can't understand Ask Again..?";
    }
}