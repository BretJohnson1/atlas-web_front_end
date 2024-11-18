let user = {
    hobby: "Calligraphy",
    favoriteSport: "Hockey",
    astrologicalSign: "Aries",
    firstName: "Guillaume",
    lastName: "Johns",
    location: "Netherlands",
    occupation: "Engineer",

    logWelcomeUser: function(welcomeString) {
        console.log(welcomeString + ", " + user.firstName + ". Your occupation is: " + user.occupation);
    }
}

const bindLogWelcomeUser = user.logWelcomeUser.bind("Welcome");
bindLogWelcomeUser('Hello');