const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const client = new Discord.Client();
const embed = new Discord.RichEmbed();
var ownerid = '396003871434211339';

// - Startup - \\
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} on ${client.guilds.size} servers!`);
    client.user.setStatus("dnd");
    client.user.setActivity(`out for my brother`,{type : "WATCHING"});
});

client.on('message', async msg =>{
  // - * Prefix * - \\
if(new RegExp(`^<@.?${client.user.id}>`).test(msg.content))
// - * Defines the tagged user * - \\
  var mentions = msg.mentions.users.filter(user=>{if(user !== client.user) return user;}).first();
  
  var tagged = msg.guild.member(mentions)||msg.member;
// - * Defines the tagged users avatar * - \\
  let avataruser= tagged.user.displayAvatarURL;
// - * Defines the message content * - \\
  let messageArray = msg.content.split(" ");
  
  let args = messageArray.slice(1);
  
  let comamnd = messageArray[0];
  
  
  
  if(msg.author.bot) return; 

  {
  
    if(msg.channel.type==="text"&&!msg.channel.permissionsFor(msg.guild.me).has('SEND_MESSAGES'))
    
    {
    
      msg.author.send("It appears that I don't have permission to talk in the server/channel you tried to talk to me, please change it or notify an admin.");
      
      return;
    
    }
  
  };
// - * Array Lists * - \\
  
/* Who is output list */
var WhoIss=[`The user <@!${tagged.user.id}> is a discord user, who uses discord, he might also be dumb.`, 
            `Your asking me who people are? Huh, proudest day of my life.`,
            `I'm sure <@!${tagged.user.id}> has something to do with the illuminati.`,
            `OMG, I am <@!${tagged.user.id}> biggest fan!`,
            `<@!${tagged.user.id}> is some kind of loser who eats junk food all day and looks at discord.`,
            `Oh no, do you know what you just did!?! *calls 911*`,
            `Nobody will ever forgive you because you just mentioned <@!${tagged.user.id}>`,
            `Don't you dare ping the mightly lord <@!${tagged.user.id}>.`
               ]
var Whosans = WhoIss[Math.floor(Math.random()*WhoIss.length)]; 
var whooutput = Whosans.toString();
/* What is life output list */
var WhatsLife=[`Wait, why are you asking me?`,
               `Life is the condition that distinguishes animals and plants from inorganic matter, including the capacity for growth, reproduction, functional activity, and continual change preceding death.`,
               `Something magical, yknow?`,
               `Eh, life, *sigh*`,
               `Life is a secret, I guess you will never find the secret because you are talking to me.`
              ]
var Whatsans = WhatsLife[Math.floor(Math.random()*WhatsLife.length)];
var whatslifeoutput = Whatsans.toString();
  
  
var WhatsXbox=[`Xbox, it is a X and a box.`,
               `Xbox is a video gaming brand created and owned by Microsoft. It represents a series of video game consoles developed by Microsoft, with three consoles released in the sixth, seventh and eighth generations respectively.`,
               `It is a gaming console like playstation, can do less stuff than a computer can.`,
               `Eh, xbox, *sigh*`,
               `Xbox is a legendary gaming console that you can play games on.`
              ]
var WhatsXboxSans = WhatsXbox[Math.floor(Math.random()*WhatsXbox.length)];
var whatsxboxout = WhatsXboxSans.toString();
  
  
var whatisps4=[`PS4, the thing we like to game on, you don't know what it is? SHAME!`,
              `PlayStation 4 (PS4) is a line of eighth-generation home video game consoles developed by Sony Interactive Entertainment.`,
              `A playstation, you play games on it. *duh*`,
              `https://media.playstation.com/is/image/SCEA/playstation-4-slim-vertical-product-shot-01-us-07sep16?$native$`,
              `It is a **play station** like the name says...`]
var whatisps4sans = whatisps4[Math.floor(Math.random()*whatisps4.length)];
var whatisps4output = whatisps4sans.toString();
  

// - * Prefix * - \\
if(new RegExp(`^<@.?${client.user.id}>`).test(msg.content)) {
// - * Commands * - \\
var MyIDKeywords = ["my","id"]
if(MyIDKeywords.every(key => {return msg.content.includes(key)})) {
  if(msg.author.id === ownerid) {
    msg.channel.send(`Hey my owner dude, your ID is ${ownerid}`) } else {
    msg.channel.send(msg.author.id)
    }
}
var plssay = ["say"]
if(plssay.every(key => {return msg.content.includes(key)})) {
  msg.reply(args.slice(1).join(" "))
  msg.delete()
}
var purge = ["purge"]
if(purge.every(key => {return msg.content.includes(key)})) {
  msg.channel.bulkDelete(args.slice(1).join(" "))
  .then(messages => msg.channel.send(`Done, removed **${messages.size}** messages fromt this channel.`))
  .catch(console.error);
}
var exec = ["execute"]
if(exec.every(key => {return msg.content.includes(key)})) {
if(msg.author.id === ownerid) {
const { exec } = require('child_process');
exec(args.slice(1).join(" "), (error, stdout, stderr) => {
  if (error) {
    msg.channel.send(
      new Discord.RichEmbed()
      .setTitle("Execute Error")
      .setColor('RANDOM')
      .setDescription(`Error: \`\`\`${error}\`\`\``)
      )
    return;
  }
      msg.channel.send(
  
    new Discord.RichEmbed()
                        .setTitle("Execute")
                        .setColor('RANDOM')
                        .setDescription(`**Input**:\n${args.slice(1).join(" ")}\n\n**Output**:\n\`\`\`${stdout}\`\`\`\n${stderr}`)
        )
});
} else {
  msg.channel.send("I'm afraid I cannot do so, I do not have permissions to create an invite.") 
}
}
var shorturl = ["shorten","url"]
if(shorturl.every(key => {return msg.content.includes(key)})) {
snekfetch.post('http://kpop4.us/api/shortener')
        .send({ url: args[2], domain: "is-no.fun" })
        .then(r => {
            const shortURL = JSON.parse(r.body).url;
            return msg.channel.send(shortURL);
        })
        .catch(e => {
            return msg.channel.send(e);
        });
}
  
var findchannel = ["channel-info"]
if(findchannel.every(key => {return msg.content.includes(key)})) {
  if(msg.guild.channels.find("name",args[1])) {
    msg.channel.send(
  
    new Discord.RichEmbed()
                        .setTitle("Channel found")
                        .setColor('RANDOM')
                        .setDescription(`The channel is a **${msg.guild.channels.find("name",args[1]).type}** type.\nThe channel was created on the **${msg.guild.channels.find("name",args[1]).createdAt}**\nThe channels ID is **${msg.guild.channels.find("name",args[1]).id}**`)) } else {
    msg.channel.send(`Channel **${args[1]}** not found.`)
    }
}
var leave = ["leave"]
if(leave.every(key => {return msg.content.includes(key)})) {
if(msg.author.id === ownerid) {
  msg.guild.leave()
  .then(g => console.log(`Left the guild ${g}`))
  .catch(console.error);
} else {
  msg.channel.send("I'm afraid I cannot do so, you do not have permissions.") 
}
}
var createinvite = ["invite","server"]
if(createinvite.every(key => {return msg.content.includes(key)})) {
  if(msg.member.hasPermission("CREATE_INSTANT_INVITE")) {
  msg.guild.channels.get(msg.channel.id).createInvite().then(invite =>  
msg.channel.send("https://discord.gg/" + invite.code))
} else {
  msg.channel.send("I'm afraid I cannot do so, I do not have permissions to create an invite.") 
}
}
var findrole = ["role"]
if(findrole.every(key => {return msg.content.includes(key)})) {
  if(msg.guild.roles.find("name",args.slice(1).join(" "))) {
              msg.channel.send(
  
    new Discord.RichEmbed()
                        .setTitle("Role found")
                        .setColor(msg.guild.roles.find("name",args.slice(1).join(" ")).hexColor)
                        .setDescription(`Role **${args.slice(1).join(" ")}** found.\nThe role color is in this embed, the hex code of the color is **${msg.guild.roles.find("name",args.slice(1).join(" ")).hexColor}**\nThere are **${msg.guild.roles.find("name",args.slice(1).join(" ")).members.size}** users in this role.\nThe role ID is **${msg.guild.roles.find("name",args.slice(1).join(" ")).id}**\nRole was created on the **${msg.guild.roles.find("name",args.slice(1).join(" ")).createdAt}**`)
                       ); } else {
    msg.channel.send(`Role ${args.slice(1).join(" ")} not found.`)
    }
}
var crechannel = ["create-channel"]
if(crechannel.every(key => {return msg.content.includes(key)})) {
  if(msg.member.hasPermission("MANAGE_CHANNELS")) {
msg.guild.createChannel(args[1], 'text')
  .then(channel => msg.channel.send(`Done! ${channel}`))
} else {
  msg.channel.send("I'm afraid I cannot do so, you do not have permissions.") 
}
}
var delchannel = ["delete-channel"]
if(delchannel.every(key => {return msg.content.includes(key)})) {
  if(msg.member.hasPermission("MANAGE_CHANNELS")) {
  if(msg.guild.channels.find("name",args.slice(1).join(" "))) {
msg.guild.channels.find("name",args.slice(1).join(" ")).delete();//change the name
  msg.channel.send("done")
}
} else {
  msg.channel.send("I'm afraid I cannot do so, you do not have permissions.") 
}
}
var whatIsPS4 = ["what","ps4"]
if(whatIsPS4.every(key => {return msg.content.includes(key)})) {
  msg.channel.send(whatisps4output)
}
var UserKeywords = ["user"]
if(UserKeywords.every(key => {return msg.content.includes(key)})) {
          msg.channel.send(
  
    new Discord.RichEmbed()
                        .setTitle(tagged.user!==msg.author?`Tagged user info`:`Your user info`)
                        .setColor('#FF0000')
                        .setDescription(tagged.user!==msg.author?`Here is the tagged users information:\n**Username**: ${tagged.user.tag}\n**ID**: ${tagged.user.id}\n**Created At**: ${tagged.user.createdAt}`:`Here is your users information:\n**Username**: ${msg.author.tag}\n**ID**: ${msg.author.id}.\n**Created At**: ${msg.author.createdAt}\n`)
                        .setColor('RANDOM')
                        .setImage(avataruser)
                       );
}
  var WhoIsKeywords = ["who","is"]
if(WhoIsKeywords.every(key => {return msg.content.includes(key)})) {
    msg.channel.send(whooutput)
}
var whatisexbox = ["what","xbox"]
if(whatisexbox.every(key => {return msg.content.includes(key)})) {
  msg.channel.send(whatsxboxout)
}
var unban = ["unban"]
if(unban.every(key => {return msg.content.includes(key)})) {
if(msg.member.hasPermission("ADMINISTRATOR")) {
    msg.guild.unban(args[1])
  .then(user => msg.channel.send(`Unbanned ${user.username}`))
  } else
    msg.channel.send("I'm afraid I cannot do so.")
}
var setregion = ["setregion"]
if(setregion.every(key => {return msg.content.includes(key)})) {
  if(msg.member.hasPermission("ADMINISTRATOR")) {
    msg.guild.setRegion(args[1])
 .then(updated => msg.channel.send(`Updated guild region to ${msg.guild.region}`))
 .catch(console.error);
  } else {
   msg.channel.send("I'm afraid I cannot do so, you do not have permissions.") 
  }
}
var ban = ["ban"]
if(ban.every(key => {return msg.content.includes(key)})) {
  if(msg.mentions.members.array().slice(1).shift().bannable) {
  if(msg.member.hasPermission("ADMINISTRATOR")) {
    msg.guild.ban(tagged.user.id)
  .then(user => console.log(`Banned ${user.username || user.id || user} from ${msg.guild.name}`))
  .catch(console.error);
   msg.channel.send(`The user **${tagged.user.tag}** has been banned!`) 
  }} 
  else msg.channel.send("I'm afraid I cannot do so.")
}
var kick = ["kick"]
if(kick.every(key => {return msg.content.includes(key)})) {
  if(msg.mentions.members.array().slice(1).shift().kickable) {
  if(msg.member.hasPermission("KICK_MEMBERS")) {
    msg.guild.members.find("id",tagged.user.id).kick()
   msg.channel.send(`The user **${tagged.user.tag}** has been kicked!`) 
  }} 
  else msg.channel.send("I'm afraid I cannot do so.")
}
  var WhatIsPCKeywords = ["avatar"]
if(WhatIsPCKeywords.every(key => {return msg.content.includes(key)})) {
      msg.channel.send(
  
    new Discord.RichEmbed()
                        .setTitle(tagged.user!==msg.author?`Tagged users avatar`:`Your user avatar`)
                        .setDescription(tagged.user!==msg.author?`*Here is <@!${tagged.user.id}>'s avatar.`:`Here is your avatar, <@!${msg.author.id}>.`)
                        .setColor('RANDOM')
                        .setImage(avataruser)
                       );
}
  
var lifeKeywords = ["what","life"]
if(lifeKeywords.every(key => {return msg.content.includes(key)})) {
    msg.channel.send(whatslifeoutput)
}
  
}
})
// - Bot Token - \\
client.login(process.env.BOT_TOKEN);