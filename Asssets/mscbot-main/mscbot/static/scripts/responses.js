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
        return "Hello there!";
    } else if (input == "goodbye")

    //Payment
     {
        return "Talk to you later!";
    } else if (input == "How does your payment work"){
        return "Our Payment system works by Going to the Ordering Page fill out your Info after that press Submit after Submiting Press The Pay now."
    } else if (input == "Pay"){
        return "Our Payment system works by Going to the Ordering Page fill out your Info after that press Submit after Submiting Press The Pay now."
    } else if (input == "How to pay"){
        return "Our Payment system works by Going to the Ordering Page fill out your Info after that press Submit after Submiting Press The Pay now."
    }  else if (input == "Payment"){
        return "Our Payment system works by Going to the Ordering Page fill out your Info after that press Submit after Submiting Press The Pay now."
    } else if (input == "Order"){
        return "Our Payment system works by Going to the Ordering Page fill out your Info after that press Submit after Submiting Press The Pay now."
    } 

    //Greatings
    else if (input == "sup"){
        return "hi"
    }

    //

    
    
    else {
        return "Try asking something else!";
    }
}