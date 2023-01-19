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
    if (input == "Hello") {
        return "Hii! How can i help you?";
    }else if (input == "Hii") {
        return "Hey! Good morning/Afternoon/Evening";
    }
     else if (input == "Goodbye") {
        return "I hope to like it SRB DREAMHOMES";
    } else if(input == "Plots") {
        return "Sure! sir you can see  plots and residential, villas on SRB DREAMHOMES Agent SUNIL SAINI Contact on gmail, facebook, and contact no :-7220001222  ";
    }else if( input == "Purchase plots" ){
        return "Don't worry you consult from Sunil saini on contact no :- 7220001222";
    }else if( input == "Bye bye"){
        return "See you next time...!";
    }else if( input == "New plots"){
        return " जयपुर, अजमेर, कोटा, इंदौर, भिवाड़ी, निमराना, मुंबई मैं सबसे शानदार लोकेशन पर पाए प्लॉट्स ,सबसे शानदार गेटेड टाउनशिप जहां आप पाए हर साइज के प्लॉट्स, 80% तक लोन सुविधा , सभी तरह की सुविधाए भी उपलब्ध ,फुल्ली गेटेड प्रॉपर्टी, बैंक द्वारा लोन सुविधा और सबसे शानदार एमेनिटीज,गेटेड टाउनशिप,किड्स प्ले एरिया,ओपन जिम,टेंपल,इंटरलॉकिंग टाइल्स,स्ट्रीट लाइट,ओवरहेड वाटर टैंक और भी बहुत कुछ तो सोचना क्या आये और साइट विजिट करे अधिक जानकारी के लिए संपर्क करें +91 72200 01222";
    }
    else if(input == "Founder of srb"){
        return "MR.SUNIL SAINI";
    }
    else{
        return "I can't understand Ask Again..?";
    }
};