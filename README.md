# Discord Raid Bot

## Overview
This is a Discord bot built using `discord.js` that provides various administrative actions, including mass banning members, deleting channels, roles, and more. It features a `Raid` class that executes these actions upon command.

## Features
- Deletes all emojis, stickers, scheduled events, channels, roles, and invites.
- Bans all members except the bot itself.
- Disables community settings.
- Removes guild icons, banners, and discovery splashes.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/dk6m/server-nuker.git
   cd server-nuker
   ```
2. Install dependencies:
   ```sh
   npm install discord.js discord-api-types
   ```

## Usage
1. Open `index.js` and replace `YOUR_BOT_TOKEN_HERE` with your actual bot token.
2. Run the bot:
   ```sh
   node index.js
   ```
3. In Discord, type:
   ```sh
   -start
   ```
   The bot will execute all raid actions on the server.

## Disclaimer
This bot is intended for educational and testing purposes only. Using it maliciously violates Discord’s Terms of Service and can result in bans.

## License
This project is licensed under the MIT License.

