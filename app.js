const Discord = require('discord.js');
const superagent = require("superagent");
const Client = new Discord.Client();
const OwnerID = "340126407294189569";

const prefix = "!"



Client.on("ready", () => {
	console.log("online");
	Client.user.setPresence({ game: { name: `LumpTopia`, type: 0} });
});

// welcome message

Client.on("guildMemberAdd", member => {
   member.guild.defaultChannel.send("Welcome to: " + member.guild.name + " Hope you enjoy it here")
});

Client.on("guildMemberRemove", member => {
   member.guild.defaultChannel.send("Goodbye: " + member.user.username + " from " + member.guild.name)
});

Client.on("guildCreate", guild => {
	console.log("Some one added the test bot to a server created by: " + guild.owner.user.username)
});

Client.on("message", async (message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
	
	let args = message.content.split(" ").slice(1);
	
	if (command === "ping") {
		message.channel.send(`Pong! Time took: ${Date.now() - message.createdTimestamp} ms`);
	} else

	if (command === "mededeling") {
		message.delete()
        const embed = new Discord.RichEmbed()
		.setColor(0x00d9ff)
		.setDescription(args.join(" "));
		message.channel.send({embed})
	} else

	if (command == "help") {
		const embed = new Discord.RichEmbed()
		.setColor(0x00d9ff)
		.setTitle("Command List:")
		.addField("!help", "Will give the current command list")
		.addField("!ping", "WIll show the ping time for the bot")
        .addField("!mededeling ", "maak een Mededeling")
        .addField("Gemaakt door @JustDylan_NL#7468", "Stuur me een DM voor een Bot")
		message.channel.send({embed})
	}

});

Client.login("NTA5Mzg1MTQ1NzMyODI1MDk5.Dt6nXw.Vhe5ZJ8_EcBuhClCDISmMaNn6Ko");
