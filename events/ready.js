module.exports = async (client) => {
  client.Ready = true, 
  client.user.setPresence({
    status: "idle",  // You can show online, idle, and dnd
    activity: {
        name: "cutecat | /help",  // The message shown
        type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING,
    }
});
    client.Manager.init(client.user.id);
    client.log("дискорд дал отклик от именни" + client.user.tag); // You can change the text if you want, but DO NOT REMOVE "client.user.tag"
client.RegisterSlashCommands();
};

