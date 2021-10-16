module.exports = {
    name: "help",
    cooldown: 5,
    aliases: ["Open Ticket"],

    run: async function(client, message, args) {
        try {
          message.channel.send({
            embed: {
              title: 'Ticket Panel:',
              color: 'RED',
              description: `
                            help -> (t!help) You See All Bot Commands
                            setup -> (t!setup) Setup Your Discord Ticket
                            rename -> (t!rename) Rename Your Ticket Channel (https://prnt.sc/1w90rqh)
                            prefix -> (t!prefix) Make Your Prefix (https://prnt.sc/1w90zfu) | (SOS If Bot Restarted Prefix delete)
                            ping -> (t!ping) You See The bot Ping
                           `
            }
          })
        } catch (err) {
            return;
        }
    }
}
