const config = require("../config.json");

module.exports = (client) => {
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setActivity(`DeDogmaDao Bot | ${config.version}`, {
        type: "PLAYING"
    });
};