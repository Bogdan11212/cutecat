module.exports = {
  Admins: ["603517547572363285", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "+", //Default prefix, Server Admins can change the prefix
  Port: 443, //Which port website gonna be hosted
  SupportServer: "https://discord.com/invite/8QcWnqtu2N", //Support Server Link
  Token: process.env.Token || "MTE3NjYxMTI5ODMwNjQyNDg0Mg.GPdrZw.03dngok6Q2FPxMoWJ4YN5X3bkKP8BOgSVvvuqU", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "1176611298306424842", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "HvaVfTUmPnuzxt6s2_w6pDOgDFKPbZny", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "wonderfullmusickbot", //A Secret like a password
  IconURL:
    "https://cdn.discordapp.com/attachments/1150139902692970602/1178756673322627082/IMG_20231105_202012.jpg?ex=65774db3&is=6564d8b3&hm=d1c24ba3ad876628a1f30311cdc54864b6c99329eeb1635d26f698e9d0333099&", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "https://dsmisick--chilleam.repl.co", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "main",
    host: "server.nexcord.com",
    port: 11566,
    pass: "frostout", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "9a7529bbc1fe49fb99fb909a799cf464", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "90ed0dd5b1104a2798864bd477465a82", //Spotify Client Secret
  },
};
