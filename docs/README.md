
# Introduction

### [NeatQueue Website](https://www.neatqueue.com)

All NeatQueue commands are slash commands, which means they are invoked using a `/` \
Any Admin command requires the user to have Manage Channels permissions, or have one of the configured NeatQueue staff roles. \
In this documentation, anytime an argument is surrounded by [square brackets], it is a required argument. If it is surrounded by (parenthesis), it is optional. \
The term MMR stands for Match Making Rating, which corresponds to the hidden rating system used by most competitive games.  \
All commands are queue specific unless otherwise stated.

**All stats are tied to the queue name. This means if you create multiple queues with the same queue name, they will share stats.**

Want to Donate? Simply use /donate or visit https://donatebot.io/checkout/505102060119916545


<hr style="border:3px solid gray">

# Quick Start

## Starting a Queue
Starting a queue is super simple with NeatQueue, just run one of the following commands:
#### `/setup` for an interactive walk through
#### `/startqueue` for a simple default configuration
#### `/load [config_id]` for a specific queue configuration
#### `/globalqueue join [global_queue]` for loading a global configuration and joining the shared leaderboard

<hr style="border:3px solid gray">

# User Commands
## Balance By
### `/balancebyroles`
#### Description
"ADMIN ONLY: The order of role to skill from lowest to highest rated.
#### Usage: `/balancebyroles (role1) (role2) (role3) (role4) (role5) (role6) (role7) (role8) (role9) (role10)`
#### Arguments:
`role1`: *(Optional)* The role to use in balancing.\
`role2`: *(Optional)* The role to use in balancing.\
`role3`: *(Optional)* The role to use in balancing.\
`role4`: *(Optional)* The role to use in balancing.\
`role5`: *(Optional)* The role to use in balancing.\
`role6`: *(Optional)* The role to use in balancing.\
`role7`: *(Optional)* The role to use in balancing.\
`role8`: *(Optional)* The role to use in balancing.\
`role9`: *(Optional)* The role to use in balancing.\
`role10`: *(Optional)* The role to use in balancing.

<hr style="border:3px solid gray">

## Cancel
### `/cancel`
#### Description
Start a vote to cancel the current match.
#### Usage: `/cancel`


<hr style="border:3px solid gray">

## Compare
### `/compare`
#### Description
Compare your stats to the given player.
#### Usage: `/compare [player2] (player1) (hidden)`
#### Arguments:
`player2`: *(Required)* Enter the second user you want to compare to.\
`player1`: *(Optional)* Enter the first user you want to compare to, or omit for yourself.\
`hidden`: *(Optional)* If you want the stats to be hidden.

<hr style="border:3px solid gray">

## Decay
### `/mmrdecay`
#### Description
Enable/disable MMR decay and configure the values.
#### Usage: `/mmrdecay [toggle] (amount) (duration)`
#### Arguments:
`toggle`: *(Required)* Enable/disable MMR decay.\
`amount`: *(Optional)* Amount of MMR to decay.\
`duration`: *(Optional)* After how long should a player decay.

<hr style="border:3px solid gray">

## Donate
### `/donate`
#### Description
Donate to help NeatQueue development.
#### Usage: `/donate`


<hr style="border:3px solid gray">

## Force Start
### `/forcestart`
#### Description
Start a vote to forcestart the game.
#### Usage: `/forcestart`


<hr style="border:3px solid gray">

## Game Integrations
### `/register`
#### Description
Initialize your MMR using your account.
#### Usage: `/register [account]`
#### Arguments:
`account`: *(Required)* Account details.

<hr style="border:3px solid gray">

## Help
### `/help`
#### Description
View locations where to find help for setup.
#### Usage: `/help`


<hr style="border:3px solid gray">

## Info
### `/info`
#### Description
View information about the queue configuration.
#### Usage: `/info`


<hr style="border:3px solid gray">

## Leaderboard
### `/leaderboard`
#### Description
Shows the leaderboard for the current queue's game.
#### Usage: `/leaderboard (page) (type) (queuename)`
#### Arguments:
`page`: *(Optional)* Enter the desired page number.\
`type`: *(Optional)* The type of leaderboard to display.\
`queuename`: *(Optional)* Queue name for the leaderboard.

<hr style="border:3px solid gray">

## Manage Players
### `/substitute`
#### Description
Substitute yourself for the given player.
#### Usage: `/substitute [player]`
#### Arguments:
`player`: *(Required)* Enter the player to replace you.

<hr style="border:3px solid gray">

## Parties/ Teams/ Clans/ Groups
### `/party cancelinvites`
#### Description
CAPTAIN ONLY: Cancel all pending invites.
#### Usage: `/party cancelinvites [party_name]`
#### Arguments:
`party_name`: *(Required)* The party name.

---

### `/party captain`
#### Description
CAPTAIN ONLY: Designate a new captain if you are the current one.
#### Usage: `/party captain [player] [party_name]`
#### Arguments:
`player`: *(Required)* The new captain.\
`party_name`: *(Required)* The team name.

---

### `/party create`
#### Description
Create a new party.
#### Usage: `/party create [party_name]`
#### Arguments:
`party_name`: *(Required)* The party name.

---

### `/party disband`
#### Description
CAPTAIN ONLY: Disband a party.
#### Usage: `/party disband [party_name]`
#### Arguments:
`party_name`: *(Required)* The party name.

---

### `/party invite`
#### Description
CAPTAIN ONLY: Invite a new player to the team.
#### Usage: `/party invite [player] [party_name]`
#### Arguments:
`player`: *(Required)* Player to invite.\
`party_name`: *(Required)* The party name.

---

### `/party join`
#### Description
Join a team.
#### Usage: `/party join [party_name]`
#### Arguments:
`party_name`: *(Required)* The party name.

---

### `/party kick`
#### Description
CAPTAIN ONLY: Kick a player from the party.
#### Usage: `/party kick [player] [party_name]`
#### Arguments:
`player`: *(Required)* The player to kick.\
`party_name`: *(Required)* The team name.

---

### `/party leave`
#### Description
Leave a team.
#### Usage: `/party leave [party_name]`
#### Arguments:
`party_name`: *(Required)* The party name.

---

### `/party list`
#### Description
List your parties.
#### Usage: `/party list`


---

### `/party selectrole`
#### Description
Specify your role in the team.
#### Usage: `/party selectrole [party_name] [role]`
#### Arguments:
`party_name`: *(Required)* The party name.\
`role`: *(Required)* Your role.

---

### `/party view`
#### Description
View the specified party.
#### Usage: `/party view [party_name]`
#### Arguments:
`party_name`: *(Required)* The party name.

<hr style="border:3px solid gray">

## Ping
### `/ping`
#### Description
Pings all members in the queue.
#### Usage: `/ping`


<hr style="border:3px solid gray">

## Predictions
### `/predict`
#### Description
Place a bet on the given team for the specified match number.
#### Usage: `/predict [gamenumber] [team] [amount]`
#### Arguments:
`gamenumber`: *(Required)* Game number of bet on.\
`team`: *(Required)* Team to place the bet on.\
`amount`: *(Required)* Amount of points you want to bet.

<hr style="border:3px solid gray">

## Report Bug
### `/reportbug`
#### Description
Report a bug.
#### Usage: `/reportbug [message]`
#### Arguments:
`message`: *(Required)* The message to send in the report.

<hr style="border:3px solid gray">

## Require IGN
### `/ign`
#### Description
Sets your IGN for this queue to help with easy lobby setup.
#### Usage: `/ign [ign]`
#### Arguments:
`ign`: *(Required)* Your IGN for this queue's platform.

<hr style="border:3px solid gray">

## Stats
### `/stats`
#### Description
Shows your stats.
#### Usage: `/stats (hidden) (user)`
#### Arguments:
`hidden`: *(Optional)* If you want the stats to be hidden.\
`user`: *(Optional)* Enter the user you want to check stats of.

<hr style="border:3px solid gray">

## Webhooks
### `/webhooks generatetoken`
#### Description
Generate an API token for your account.
#### Usage: `/webhooks generatetoken`


<hr style="border:3px solid gray">

# Admin Commands
## Anti Cheat
### `/anticheat channel`
#### Description
 Sets the anticheat channel to show flagged users.
#### Usage: `/anticheat channel [channel]`
#### Arguments:
`channel`: *(Required)* The desired anticheat channel.

---

### `/anticheat enable`
#### Description
 Enable/disable the anticheat system.
#### Usage: `/anticheat enable [toggle]`
#### Arguments:
`toggle`: *(Required)* Toggle for anticheat.

---

### `/anticheat flagnewaccount`
#### Description
 Set an anticheat trigger for new accounts.
#### Usage: `/anticheat flagnewaccount [age]`
#### Arguments:
`age`: *(Required)* Account age in days.

---

### `/anticheat flagrejoins`
#### Description
 Set an anticheat trigger for if a player rejoins a server.
#### Usage: `/anticheat flagrejoins [toggle]`
#### Arguments:
`toggle`: *(Required)* Flag users who rejoin the server if they already have stats.

---

### `/anticheat flagstreak`
#### Description
 Set an anticheat trigger for a players streak.
#### Usage: `/anticheat flagstreak [streak]`
#### Arguments:
`streak`: *(Required)* Streak to trigger a flag.

---

### `/anticheat role`
#### Description
 Set a role to assign to flagged players.
#### Usage: `/anticheat role [role]`
#### Arguments:
`role`: *(Required)* Role to assign.

<hr style="border:3px solid gray">

## Auto Ping
### `/autoping remove`
#### Description
 Remove the set auto ping rule.
#### Usage: `/autoping remove`


---

### `/autoping set`
#### Description
 Automatically ping the given role when the queue hits the given size.
#### Usage: `/autoping set [role] [size]`
#### Arguments:
`role`: *(Required)* Role to ping.\
`size`: *(Required)* Ping when the queue hits this size.

<hr style="border:3px solid gray">

## Balance By
### `/balanceby`
#### Description
 (default: mmr) Sets how teams are balanced.
#### Usage: `/balanceby [mode]`
#### Arguments:
`mode`: *(Required)* How teams are balanced.

<hr style="border:3px solid gray">

## Channel Name
> Due to Discord API limitations, NeatQueue can only update the channel name twice per a 10 minute period.
Therefore, this command is not very helpful for servers with large amounts of queueing.
### `/channelname queueempty`
#### Description
 Set the channel name when a queue is empty. Can only be updated twice per 10 minutes!.
#### Usage: `/channelname queueempty [channel_name]`
#### Arguments:
`channel_name`: *(Required)* The channel name.

---

### `/channelname queuelocked`
#### Description
 Set the channel name when a queue is locked. Can only be updated twice per 10 minutes!.
#### Usage: `/channelname queuelocked [channel_name]`
#### Arguments:
`channel_name`: *(Required)* The channel name.

---

### `/channelname queuenotempty`
#### Description
 Set the channel name when a queue isn't empty. Can only be updated twice per 10 minutes!.
#### Usage: `/channelname queuenotempty [channel_name]`
#### Arguments:
`channel_name`: *(Required)* The channel name.

<hr style="border:3px solid gray">

## Clear Queue
### `/clearqueue`
#### Description
 Clears the running queue.
#### Usage: `/clearqueue`


<hr style="border:3px solid gray">

## Config Loading/Saving
### `/load`
#### Description
 Loads the queue configuration based on the given name.
#### Usage: `/load [config]`
#### Arguments:
`config`: *(Required)* Config name.

---

### `/save`
#### Description
 Save the current queue configuration to a name.
#### Usage: `/save`


<hr style="border:3px solid gray">

## Display Names
### `/anonymousqueue`
#### Description
 Sets whether to hide the names of players in queue.
#### Usage: `/anonymousqueue [mode]`
#### Arguments:
`mode`: *(Required)* Hide player names in queue.

---

### `/nametype`
#### Description
 Sets whether to use nicknames or discord names (default: nick).
#### Usage: `/nametype [type]`
#### Arguments:
`type`: *(Required)* The type of names to be used.

<hr style="border:3px solid gray">

## Draft Type
### `/drafttype`
#### Description
 Sets the type of draft to either Snake or Straight.
#### Usage: `/drafttype [type]`
#### Arguments:
`type`: *(Required)* The type of draft to use.

<hr style="border:3px solid gray">

## Emojis
### `/emojis`
#### Description
 Sets whether to display emojis.
#### Usage: `/emojis [mode]`
#### Arguments:
`mode`: *(Required)* If emojis are used.

<hr style="border:3px solid gray">

## End Queue
### `/endqueue`
#### Description
 Ends the running queue.
#### Usage: `/endqueue`


<hr style="border:3px solid gray">

## Force Start
### `/forcestartsize`
#### Description
 Sets the requirements for forcestarting.
#### Usage: `/forcestartsize [min_size] (max_size) (only_fair) (auto_start)`
#### Arguments:
`min_size`: *(Required)* Enter the minimum number of players required. Set to -1 to disable.\
`max_size`: *(Optional)* Enter the maximum number of players required. Set to -1 to ignore.\
`only_fair`: *(Optional)* Should the forcestart happen if teams are not the same size?.\
`auto_start`: *(Optional)* Should the forcestart vote automatically happen when possible?.

<hr style="border:3px solid gray">

## Game Integrations
### `/requireregister`
#### Description
 Specify whether players must register their account before playing.
#### Usage: `/requireregister [mode]`
#### Arguments:
`mode`: *(Required)* Game to register with, or None to disable.

<hr style="border:3px solid gray">

## Global Queue
### `/globalqueue create`
#### Description
 Create a global queue. You will not be able to modify certain queue configs after.
#### Usage: `/globalqueue create`


---

### `/globalqueue join`
#### Description
 Join a global queue. You will not be able to modify certain queue configs after.
#### Usage: `/globalqueue join [name]`
#### Arguments:
`name`: *(Required)* The unique ID of the global queue.

---

### `/globalqueue leave`
#### Description
 Unlink from the global queue.
#### Usage: `/globalqueue leave`


<hr style="border:3px solid gray">

## Leaderboard Config
> Large servers may benefit from using Text leaderboards since uploading images multiple times a second leads to rate limits for your channel/server.
Leaderboard titles are also hyperlinks to the website version of the leaderboard.
### `/leaderboardtype`
#### Description
 Toggle using the new image leaderboard.
#### Usage: `/leaderboardtype [type]`
#### Arguments:
`type`: *(Required)* Leaderboard format.

<hr style="border:3px solid gray">

## Link Queue
### `/link`
#### Description
 Links the current channel to another channel's queue.
#### Usage: `/link [channel]`
#### Arguments:
`channel`: *(Required)* Enter the channel to link to.

---

### `/unlink`
#### Description
 Unlinks the current channel.
#### Usage: `/unlink`


<hr style="border:3px solid gray">

## Lobby Channel
### `/lobbychannel pullall`
#### Description
 Specify pulling players from all channels when their match starts.
#### Usage: `/lobbychannel pullall [toggle]`
#### Arguments:
`toggle`: *(Required)* Pull players from all channels.

---

### `/lobbychannel returnall`
#### Description
 Specify returning players to their original voice channel from before the match.
#### Usage: `/lobbychannel returnall [toggle]`
#### Arguments:
`toggle`: *(Required)* Return players to their original voice channel.

---

### `/lobbychannel set`
#### Description
 Specify the channel to move players to/from before/after a game.
#### Usage: `/lobbychannel set [channel]`
#### Arguments:
`channel`: *(Required)* Channel to drag/drop players from/to.

---

### `/lobbychannel timer`
#### Description
 Specify how long players have to join the voice channel before the match is cancelled.
#### Usage: `/lobbychannel timer [timer]`
#### Arguments:
`timer`: *(Required)* (Default: 300) Timeout length in seconds.

<hr style="border:3px solid gray">

## Lobby Details
### `/lobbydetails location`
#### Description
 Sets the lobby details message.
#### Usage: `/lobbydetails location [location]`
#### Arguments:
`location`: *(Required)* The type of names to be used.

---

### `/lobbydetails remove`
#### Description
 Removed the lobby details message.
#### Usage: `/lobbydetails remove`


---

### `/lobbydetails set`
#### Description
 Sets the lobby details message.
#### Usage: `/lobbydetails set [message]`
#### Arguments:
`message`: *(Required)* Enter the message to send. See /help for keywords for generating messages.> Currently supports three substitutions:
> 
> `HOST`: Randomly select a player name
> `QUEUENUM`: Substitute the queue number
> `PASSWORD#T`: Generate a random string of characters, where # is the length of the password, and T is the type of
> characters to be in the password. There are currently 5 supported password types:
> 
> 1. L: Lowercase Letters only
> 2. U: Uppercase Letters only
> 3. N: Numbers only
> 4. C: Lowercase and Uppercase Letters
> 5. A: Lowercase Letters, Uppercase Letters, and Numbers
> 
> Example:
> `/lobbydetails set "Host: HOST, Lobby Name: QUEUENUM, Lobby Password: PASSWORD8A`
> could substitute to
> 
> "Host: @NeatZ, Lobby Name: 12345, Lobby Password: D83mA76x
> 
> You can further enhance the visuals using Markdown formatting.

<hr style="border:3px solid gray">

## Lock
### `/lock`
#### Description
 Lock the queue channel to prevent players from joining.
#### Usage: `/lock (all) (auto_lock) (time) (timezone) (repeat)`
#### Arguments:
`all`: *(Optional)* Lock all queues?.\
`auto_lock`: *(Optional)* Automatically lock at the specified time.\
`time`: *(Optional)* Time to lock at in 24 hour format. Ex: 14:00.\
`timezone`: *(Optional)* Timezone for the specified time. Defaults to UTC.\
`repeat`: *(Optional)* Repeat daily or just once.

---

### `/unlock`
#### Description
 Unlock the queue channel to allow players to join.
#### Usage: `/unlock (all) (auto_lock) (time) (timezone) (repeat)`
#### Arguments:
`all`: *(Optional)* Unlock all queues?.\
`auto_lock`: *(Optional)* Automatically unlock at the specified time.\
`time`: *(Optional)* Time to unlock at in 24 hour format. Ex: 14:00.\
`timezone`: *(Optional)* Timezone for the specified time. Defaults to UTC.\
`repeat`: *(Optional)* Repeat daily or just once.

<hr style="border:3px solid gray">

## Logs
### `/logs`
#### Description
 View a log of used NeatQueue commands.
#### Usage: `/logs`


<hr style="border:3px solid gray">

## MMR Change
### `/mmrchange`
#### Description
 Sets the MMR change per game.
#### Usage: `/mmrchange (mmr) (loser_mmr) (static) (variance) (hidden) (allow_disable)`
#### Arguments:
`mmr`: *(Optional)* Enter the MMR change for winners and losers.\
`loser_mmr`: *(Optional)* Override the lower MMR change to be different from the winners.\
`static`: *(Optional)* Do you want the MMR change to ALWAYS be this value? (Default: False).\
`variance`: *(Optional)* Sets the MMR variance. See the MMR equation in the documentation! (Default: 800).\
`hidden`: *(Optional)* If you want all MMR and MMR changes to be hidden from players.\
`allow_disable`: *(Optional)* If you want the enable/disable MMR vote to pop up.

<hr style="border:3px solid gray">

## Manage Players
### `/player add`
#### Description
 Adds the given player to the queue.
#### Usage: `/player add [user] (role) (team)`
#### Arguments:
`user`: *(Required)* -.\
`role`: *(Optional)* Enter the role for the player.\
`team`: *(Optional)* Enter the team for the player if desired.

---

### `/player ban`
#### Description
 Bans a player from queueing for the given duration of time.
#### Usage: `/player ban [player] (duration)`
#### Arguments:
`player`: *(Required)* The player to ban.\
`duration`: *(Optional)* Duration of time in seconds for the ban to last.

---

### `/player remove`
#### Description
 Removes the given player from the queue.
#### Usage: `/player remove [user]`
#### Arguments:
`user`: *(Required)* The player.

---

### `/player sub`
#### Description
 Substitute the first player for the second player.
#### Usage: `/player sub [player1] [player2] (gamenum)`
#### Arguments:
`player1`: *(Required)* Enter the player to replace.\
`player2`: *(Required)* Enter the player that will be inserted.\
`gamenum`: *(Optional)* Game to modify. Can be omitted to use this channels game.

---

### `/player unban`
#### Description
 Unban the given player from queueing.
#### Usage: `/player unban [player]`
#### Arguments:
`player`: *(Required)* The player to unban.

<hr style="border:3px solid gray">

## Maps
### `/bestof`
#### Description
 Sets whether the queue is a best of 3, 5, 7, etc.
#### Usage: `/bestof [number] (vote) (voteselection)`
#### Arguments:
`number`: *(Required)* Best of #.\
`vote`: *(Optional)* Whether players can vote on the number of matches to play.\
`voteselection`: *(Optional)* Whether to pick the majority vote, or the lowest voted number.

---

### `/map add`
#### Description
 Adds the given map.
#### Usage: `/map add [map_name] (game_mode)`
#### Arguments:
`map_name`: *(Required)* Enter the map name.\
`game_mode`: *(Optional)* Enter the corresponding game mode.

---

### `/map remove`
#### Description
 Removes the given map.
#### Usage: `/map remove [map_name]`
#### Arguments:
`map_name`: *(Required)* The map to remove, or ALL to remove all.

---

### `/map selection`
#### Description
 Choose between map votes or always random.
#### Usage: `/map selection [type]`
#### Arguments:
`type`: *(Required)* Voting or always random.

<hr style="border:3px solid gray">

## Mod Channel
### `/staffchannel remove`
#### Description
 Remove the set results channel.
#### Usage: `/staffchannel remove`


---

### `/staffchannel set`
#### Description
 Sets the results channel to send queue history.".
#### Usage: `/staffchannel set [channel] (serverwide)`
#### Arguments:
`channel`: *(Required)* The text channel to send queue history to.\
`serverwide`: *(Optional)* Should the channel be global for all queues or just this one?.

<hr style="border:3px solid gray">

## Modify Player Data
### `/add decaygraceperiod`
#### Description
 Add a grace period for a user so they won't be affected by MMR decay.
#### Usage: `/add decaygraceperiod [user] [time]`
#### Arguments:
`user`: *(Required)* Enter the desired user.\
`time`: *(Required)* Enter the desired grace period time in seconds.

---

### `/add game`
#### Description
 Increment the players games.
#### Usage: `/add game [user] (games)`
#### Arguments:
`user`: *(Required)* Enter the desired user.\
`games`: *(Optional)* Enter the desired games to add.

---

### `/add loss`
#### Description
 Increment the players losses.
#### Usage: `/add loss [user] (losses)`
#### Arguments:
`user`: *(Required)* Enter the desired user.\
`losses`: *(Optional)* Enter the desired losses to add.

---

### `/add mmr`
#### Description
 Increment the players mmr.
#### Usage: `/add mmr [user] (mmr)`
#### Arguments:
`user`: *(Required)* Enter the desired user.\
`mmr`: *(Optional)* Enter the desired mmr to add.

---

### `/add points`
#### Description
 Increment the players points (not MMR).
#### Usage: `/add points [user] [points]`
#### Arguments:
`user`: *(Required)* The desired user.\
`points`: *(Required)* The new points amount.

---

### `/add streak`
#### Description
 Increment the players streak.
#### Usage: `/add streak [user] [streak]`
#### Arguments:
`user`: *(Required)* Enter the desired user.\
`streak`: *(Required)* Enter the desired streak to add.

---

### `/add win`
#### Description
 Increment the players wins.
#### Usage: `/add win [user] (wins)`
#### Arguments:
`user`: *(Required)* Enter the desired user.\
`wins`: *(Optional)* Enter the desired wins to add.

---

### `/set account`
#### Description
 Sets the players account (used in /register).
#### Usage: `/set account [user] [account]`
#### Arguments:
`user`: *(Required)* Enter the desired user.\
`account`: *(Required)* Enter the desired account, or 'none' to remove.

---

### `/set games`
#### Description
 Sets the players games.
#### Usage: `/set games [user] [games]`
#### Arguments:
`user`: *(Required)* Enter the desired user.\
`games`: *(Required)* Enter the desired games.

---

### `/set losses`
#### Description
 Sets the players losses.
#### Usage: `/set losses [user] [losses]`
#### Arguments:
`user`: *(Required)* Enter the desired user.\
`losses`: *(Required)* Enter the desired losses.

---

### `/set wins`
#### Description
 Sets the players wins.
#### Usage: `/set wins [user] [wins]`
#### Arguments:
`user`: *(Required)* Enter the desired user.\
`wins`: *(Required)* Enter the desired wins.

<hr style="border:3px solid gray">

## Multi Queue
### `/multiqueue`
#### Description
 Sets whether players can be in multiple queues at once.
#### Usage: `/multiqueue [toggle]`
#### Arguments:
`toggle`: *(Required)* If players can be in multiple queues at once.

<hr style="border:3px solid gray">

## Number Of Lobbies
### `/numberoflobbies`
#### Description
 (default: 1) Sets the number of lobbies to create.
#### Usage: `/numberoflobbies [lobbies]`
#### Arguments:
`lobbies`: *(Required)* The number of lobbies.

<hr style="border:3px solid gray">

## Number Of Teams
### `/numberofteams`
#### Description
 (default: 2) Sets the number of teams.
#### Usage: `/numberofteams [number]`
#### Arguments:
`number`: *(Required)* The number of teams.

<hr style="border:3px solid gray">

## Predictions
### `/predictions channel`
#### Description
 Specify the channel to show predictions.
#### Usage: `/predictions channel [channel]`
#### Arguments:
`channel`: *(Required)* The predictions channel.

---

### `/predictions toggle`
#### Description
 Specify the channel to show predictions.
#### Usage: `/predictions toggle [toggle]`
#### Arguments:
`toggle`: *(Required)* If predictions are enabled or disabled.

<hr style="border:3px solid gray">

## Purge
### `/purge`
#### Description
 Delete ALL messages in the channel except the queue message if it exists.
#### Usage: `/purge`


<hr style="border:3px solid gray">

## Queue As Team
### `/queueintoteam`
#### Description
 Sets whether players queue into teams or not.
#### Usage: `/queueintoteam [value]`
#### Arguments:
`value`: *(Required)* Whether players queue into teams.

<hr style="border:3px solid gray">

## Queue Message
### `/queuemessage delay`
#### Description
 (Default: 3) Sets the delay for when a new queue message comes up.
#### Usage: `/queuemessage delay [seconds]`
#### Arguments:
`seconds`: *(Required)* New message delay.

---

### `/queuemessage deletions`
#### Description
 (Default: 3) Sets whether old queue updates should be deleted.
#### Usage: `/queuemessage deletions [toggle]`
#### Arguments:
`toggle`: *(Required)* Toggle between editing queue updates, or sending new messages.

---

### `/queuemessage edits`
#### Description
 (Default: Enabled) Set whether queue updates should edit the previous message.
#### Usage: `/queuemessage edits [toggle]`
#### Arguments:
`toggle`: *(Required)* Toggle between editing queue updates, or sending new messages.

<hr style="border:3px solid gray">

## Queue Name
### `/queuename`
#### Description
 Sets the name for this queue.
#### Usage: `/queuename [name]`
#### Arguments:
`name`: *(Required)* Enter the queue name.

---

### `/rename`
#### Description
 Renames the queue, but keeps all stats. This will merge all stats with desired name.
#### Usage: `/rename [name]`
#### Arguments:
`name`: *(Required)* Enter the queue name.

<hr style="border:3px solid gray">

## Queue Size
### `/queuesizeoverride`
#### Description
 Manually specify the queue size instead of letting the bot decide based on queue setup.
#### Usage: `/queuesizeoverride [size]`
#### Arguments:
`size`: *(Required)* Enter the queue size, or 0 to reset to default behavior.

<hr style="border:3px solid gray">

## Ranks/Automatically Assign Discord Roles
### `/autoroles copy`
#### Description
 Copies the auto roles config to the desired channel.
#### Usage: `/autoroles copy [channel]`
#### Arguments:
`channel`: *(Required)* Channel with queue to copy autoroles config to.

---

### `/autoroles remove`
#### Description
 Removes a condition where player roles are changed.
#### Usage: `/autoroles remove [role]`
#### Arguments:
`role`: *(Required)* Enter the role.

---

### `/autoroles set`
#### Description
 Adds a condition in which player roles are changed.
#### Usage: `/autoroles set [role] [lower_rating] [upper_rating]`
#### Arguments:
`role`: *(Required)* Enter the role to give/remove.\
`lower_rating`: *(Required)* Enter the minimum rating threshold for this role.\
`upper_rating`: *(Required)* Enter the maximum rating threshold for this role.

---

### `/autoroles topplayers`
#### Description
 Adds a condition in which player roles are changed.
#### Usage: `/autoroles topplayers [role] [number]`
#### Arguments:
`role`: *(Required)* Enter the role for the top players.\
`number`: *(Required)* Enter the number of players who can have this role.

<hr style="border:3px solid gray">

## Reaction Roles
### `/reactionroles add`
#### Description
 Specify a spectator role which can join any voice channel.
#### Usage: `/reactionroles add [channel] [message_id] [role] [reaction]`
#### Arguments:
`channel`: *(Required)* Channel where message is.\
`message_id`: *(Required)* Message to add reaction to.\
`role`: *(Required)* Role to assign/remove.\
`reaction`: *(Required)* Reaction that corresponds to this role.

<hr style="border:3px solid gray">

## Rematch
### `/rematches`
#### Description
 (Default: true) Toggle the ability to rematch.
#### Usage: `/rematches [toggle]`
#### Arguments:
`toggle`: *(Required)* If you want rematches to be enabled or disabled.

<hr style="border:3px solid gray">

## Require IGN
### `/requireign`
#### Description
 (Default: false) Require if players must set their IGN before they can queue.
#### Usage: `/requireign [toggle]`
#### Arguments:
`toggle`: *(Required)* If you want to require that users set their IGN.

<hr style="border:3px solid gray">

## Required Votes
### `/requiredvotes`
#### Description
 Sets the required votes to pick a winner.
#### Usage: `/requiredvotes [type]`
#### Arguments:
`type`: *(Required)* The type of voting requirement to be used.

---

### `/voteforresult`
#### Description
 Sets whether to vote for queue outcome.
#### Usage: `/voteforresult [value]`
#### Arguments:
`value`: *(Required)* Whether voting for outcomes is enabled or not.

<hr style="border:3px solid gray">

## Requirements
### `/mmrrequirement`
#### Description
 Sets the required mmr to enter this queue.
#### Usage: `/mmrrequirement [mmr]`
#### Arguments:
`mmr`: *(Required)* Enter the required mmr, or 0 to disable.

---

### `/rolerequirement add`
#### Description
 Add a required role to enter this queue. Players can join if they have any of the roles.
#### Usage: `/rolerequirement add [role]`
#### Arguments:
`role`: *(Required)* Enter the required role.

---

### `/rolerequirement remove`
#### Description
 Removed a required role to enter this queue.
#### Usage: `/rolerequirement remove [role]`
#### Arguments:
`role`: *(Required)* Enter the required role.

<hr style="border:3px solid gray">

## Reset Data
### `/resetstats all`
#### Description
 Resets all stats for all queues, or for the inputted queue name.
#### Usage: `/resetstats all (queue_name)`
#### Arguments:
`queue_name`: *(Optional)* The queue name to reset stats for.

---

### `/resetstats player`
#### Description
 Reset the user's data for all queues or a certain queue.
#### Usage: `/resetstats player [user] (queue_name)`
#### Arguments:
`user`: *(Required)* Enter the desired user.\
`queue_name`: *(Optional)* Enter the queue data to remove from. Ignore to delete all data from all queues.

<hr style="border:3px solid gray">

## Results Channel
### `/resultschannel`
#### Description
 Sets the channel to post match results.
#### Usage: `/resultschannel [channel]`
#### Arguments:
`channel`: *(Required)* Enter the desired channel.

<hr style="border:3px solid gray">

## Roles
### `/roles`
#### Description
 (default: 'None') Sets the roles for this queue.
#### Usage: `/roles (roles)`
#### Arguments:
`roles`: *(Optional)* Enter the roles in the form Role,Role,Role,etc.

<hr style="border:3px solid gray">

## Select Winner
### `/outcome cancel`
#### Description
 Cancel the given game.
#### Usage: `/outcome cancel (queue_num)`
#### Arguments:
`queue_num`: *(Optional)* The queue number.

---

### `/outcome selectwinner`
#### Description
 Sets the winner for the given game.
#### Usage: `/outcome selectwinner [queue_num] [team_num]`
#### Arguments:
`queue_num`: *(Required)* The queue number.\
`team_num`: *(Required)* The team that won.

---

### `/outcome tie`
#### Description
 Mark the given game as a tie.
#### Usage: `/outcome tie [queue_num]`
#### Arguments:
`queue_num`: *(Required)* The queue number.

<hr style="border:3px solid gray">

## Server Stats
### `/serverstats`
#### Description
 View all queue names in the server.
#### Usage: `/serverstats (hidden)`
#### Arguments:
`hidden`: *(Optional)* If you want the stats to be hidden.

<hr style="border:3px solid gray">

## Setup
### `/setup`
#### Description
 Starts the interactive setup.
#### Usage: `/setup`


<hr style="border:3px solid gray">

## Show MMR in Name
### `/ratinginname format`
#### Description
 (Default: '- ($)') Sets the format for ratings in nicknames.
#### Usage: `/ratinginname format [format]`
#### Arguments:
`format`: *(Required)* How the rating should be formatted. A '$' indicates the player's rating.

---

### `/ratinginname queuenames`
#### Description
 Sets the queue names to use in retrieving player stats, or omit to reset.
#### Usage: `/ratinginname queuenames (names)`
#### Arguments:
`names`: *(Optional)* The queue names seperated by ',' to use for inserting ratings into '$' indicators in the format.

---

### `/ratinginname removeall`
#### Description
 Removes all nicknames from all members.
#### Usage: `/ratinginname removeall`


---

### `/ratinginname toggle`
#### Description
 Enable or disable showing player MMR in their nickname.
#### Usage: `/ratinginname toggle [toggle]`
#### Arguments:
`toggle`: *(Required)* If ratings should be shown in name.

<hr style="border:3px solid gray">

## Staff
### `/spectatorrole`
#### Description
 Specify a spectator role which can join any voice channel.
#### Usage: `/spectatorrole [role]`
#### Arguments:
`role`: *(Required)* Spectator role.

---

### `/staffrole add`
#### Description
 Add a staff role that grants full access to all commands.
#### Usage: `/staffrole add [role]`
#### Arguments:
`role`: *(Required)* Staff role.

---

### `/staffrole remove`
#### Description
 Remove a staff role that grants full access to all commands.
#### Usage: `/staffrole remove [role]`
#### Arguments:
`role`: *(Required)* Staff role.

<hr style="border:3px solid gray">

## Start From Voice Channel
### `/startfromvc`
#### Description
 Creates a queue using all players in the given channel.
#### Usage: `/startfromvc [voice_channel]`
#### Arguments:
`voice_channel`: *(Required)* The voice channel to start a queue from.

<hr style="border:3px solid gray">

## Start Queue
### `/startqueue`
#### Description
 Starts a queue for the current channel.
#### Usage: `/startqueue [queuename] [teamsize] (numberofteams)`
#### Arguments:
`queuename`: *(Required)* Enter the queue name.\
`teamsize`: *(Required)* Enter the team size.\
`numberofteams`: *(Optional)* Enter the number of teams.

<hr style="border:3px solid gray">

## Starting MMR
### `/mmrceiling`
#### Description
 Sets the highest mmr a player can reach in this queue.
#### Usage: `/mmrceiling (mmr)`
#### Arguments:
`mmr`: *(Optional)* Enter the peak rating, or omit to reset.

---

### `/mmrfloor`
#### Description
 Sets the lowest mmr a player can reach in this queue.
#### Usage: `/mmrfloor (mmr)`
#### Arguments:
`mmr`: *(Optional)* Enter the lowest rating, or omit to reset.

---

### `/startingmmr remove`
#### Description
 Removes the starting mmr for the given role.
#### Usage: `/startingmmr remove [role]`
#### Arguments:
`role`: *(Required)* The role to remove starting MMR from.

---

### `/startingmmr set`
#### Description
 Sets the starting mmr for the given role.
#### Usage: `/startingmmr set [role] [mmr]`
#### Arguments:
`role`: *(Required)* The role.\
`mmr`: *(Required)* The starting mmr value.

<hr style="border:3px solid gray">

## Stats
### `/hidestats`
#### Description
 Sets whether stats are forced to be hidden (only shown to the user).
#### Usage: `/hidestats [toggle]`
#### Arguments:
`toggle`: *(Required)* If you want the stats to be always hidden.

---

### `/statsbutton`
#### Description
 Send a button that allows players to show their stats.
#### Usage: `/statsbutton`


<hr style="border:3px solid gray">

## Team Creation
### `/captainselection`
#### Description
 Choose how captains will be picked.
#### Usage: `/captainselection [type]`
#### Arguments:
`type`: *(Required)* The default captain selection option to use.

---

### `/randomselection`
#### Description
 Specify whether players have the option to reshuffle teams in the random selection.
#### Usage: `/randomselection [allow_reshuffle]`
#### Arguments:
`allow_reshuffle`: *(Required)* If players will be allowed to reshuffle teams.

---

### `/teamselection`
#### Description
 Choose how teams will be picked.
#### Usage: `/teamselection [type]`
#### Arguments:
`type`: *(Required)* The default team selection option to use.

<hr style="border:3px solid gray">

## Team Names
### `/teamnames`
#### Description
 Speicfy the names of each team, or omit for the default behavior..
#### Usage: `/teamnames (team_names)`
#### Arguments:
`team_names`: *(Optional)* Comma seperated list of team names. Ex: Team 1,Team 2,...

<hr style="border:3px solid gray">

## Team Queue
### `/partyqueue`
#### Description
 Enable party queue, allowing players to create parties with `/party` before joining.
#### Usage: `/partyqueue (toggle) (max_size)`
#### Arguments:
`toggle`: *(Optional)* Enable or disable party queue.\
`max_size`: *(Optional)* The max party size.

---

### `/teamqueue`
#### Description
 Enable teamqueue, requiring players to create parties with `/party` before joining.
#### Usage: `/teamqueue [toggle]`
#### Arguments:
`toggle`: *(Required)* If team queue should be enabled.

<hr style="border:3px solid gray">

## Team Size
### `/teamsize`
#### Description
 Sets the size for each team.
#### Usage: `/teamsize [size]`
#### Arguments:
`size`: *(Required)* The team size.

<hr style="border:3px solid gray">

## Temporary Setup Channels
### `/tempchannels`
#### Description
 (default: disabled) Sets whether to create a temporary text channel for setup.
#### Usage: `/tempchannels [mode]`
#### Arguments:
`mode`: *(Required)* If the setupchannel is enabled.

<hr style="border:3px solid gray">

## Test
### `/test`
#### Description
 Enables testing mode which allows for duplicate queue joining.
#### Usage: `/test`


<hr style="border:3px solid gray">

## Ties
### `/ties`
#### Description
 Sets whether tieing is an option for game outcomes.
#### Usage: `/ties [toggle]`
#### Arguments:
`toggle`: *(Required)* Whether to show the tie option.

<hr style="border:3px solid gray">

## Timers
### `/timer afk`
#### Description
 Toggle kicking players for inactivity.
#### Usage: `/timer afk [toggle] (timer)`
#### Arguments:
`toggle`: *(Required)* Toggle.\
`timer`: *(Optional)* Enter the AFK timer in seconds (Default: 3600).

---

### `/timer matchcleanup`
#### Description
 (Default: 5400) Sets the timeout before a running game is finished.
#### Usage: `/timer matchcleanup [seconds]`
#### Arguments:
`seconds`: *(Required)* Enter the time in SECONDS.

---

### `/timer queuemessage`
#### Description
 (Default: 3) Sets the delay for when a new queue message comes up.
#### Usage: `/timer queuemessage [seconds]`
#### Arguments:
`seconds`: *(Required)* New message delay.

---

### `/timer queuereset`
#### Description
 (Default: 3600) Sets the time before the queue is reset.
#### Usage: `/timer queuereset [seconds]`
#### Arguments:
`seconds`: *(Required)* Enter the time in SECONDS.

---

### `/timer votes`
#### Description
 (Default: 60) Sets the timeout for voting menus.
#### Usage: `/timer votes [seconds]`
#### Arguments:
`seconds`: *(Required)* Enter the time in SECONDS.

---

### `/timer winnervotemessage`
#### Description
 (Default: 0) Sets the delay before showing the winner voting message.
#### Usage: `/timer winnervotemessage [seconds]`
#### Arguments:
`seconds`: *(Required)* Enter the time in SECONDS, or 0 to disable.

<hr style="border:3px solid gray">

## Voice Channel Mode
### `/channelrestrictions`
#### Description
 (default: enabled) Sets whether created channels have restrictions.
#### Usage: `/channelrestrictions [mode]`
#### Arguments:
`mode`: *(Required)* If channels are restricted.

---

### `/voicechannels`
#### Description
 (default: required) Sets whether voice channels are required, optional, or disabled.
#### Usage: `/voicechannels [mode]`
#### Arguments:
`mode`: *(Required)* The type of voice channel setting.

<hr style="border:3px solid gray">

## Voting Menu
### `/votingmenu add`
#### Description
 Add a new voting menu.
#### Usage: `/votingmenu add [title] [options] [key] (order) (button_colors) (show_numbers) (allow_random) (force_random)`
#### Arguments:
`title`: *(Required)* (Ex: Vote for the Region) The title for the vote.\
`options`: *(Required)* (Ex: NA,EU) Comma separated list of options.\
`key`: *(Required)* (Ex: Region Name) The key for this vote for displaying the result after.\
`order`: *(Optional)* (Ex: 1) The order for this vote in regard to other votes. Votes will occur in ascending order.\
`button_colors`: *(Optional)* (Ex: blurple,red) Comma separated list of button colors. Valid options: blurple, gray, green, red.\
`show_numbers`: *(Optional)* If each option should have a number associated with it when displayed.\
`allow_random`: *(Optional)* If a 'random' option is included in the vote.\
`force_random`: *(Optional)* If you want to skip the vote altogether and just pick a random option.

---

### `/votingmenu remove`
#### Description
 Remove the given voting menu.
#### Usage: `/votingmenu remove [title_and_order]`
#### Arguments:
`title_and_order`: *(Required)* Title and corresponding order of voting menu to delete.

<hr style="border:3px solid gray">

## Waiting Room
### `/waitingroom`
#### Description
 Enable a waiting room allowing a queue to be overfilled (Only useful with /roles).
#### Usage: `/waitingroom [toggle]`
#### Arguments:
`toggle`: *(Required)* If waiting room should be enabled.

<hr style="border:3px solid gray">

## Webhooks
### `/webhooks add`
#### Description
 Add a new webhook to receive queue information.
#### Usage: `/webhooks add [url]`
#### Arguments:
`url`: *(Required)* Your webhook url.

---

### `/webhooks delete`
#### Description
 Delete this queue's webhook.
#### Usage: `/webhooks delete`


<hr style="border:3px solid gray">

## Winner Message
### `/winnermessage format`
#### Description
 (Default: 0) Sets the format for the winner message.
#### Usage: `/winnermessage format [mode]`
#### Arguments:
`mode`: *(Required)* Formatting type.

<hr style="border:3px solid gray">

# API

## [Generate an API token](/#webhooks-1)

___


## Endpoints
### `POST https://host.neatqueue.com:2000/api/outcome`
#### Headers:
- `Authorization: API Token`
#### Body:
- `match_number: #` 
- `winning_team_number: # `

#### Usage: 
```
POST /api/outcome HTTP/1.1
Host: https://host.neatqueue.com:2000
Authorization: YOURAPITOKENHERE
Content-Type: text/plain
Content-Length: 61

{
    "match_number": 1224,
    "winning_team_number": 1
}
```

___

### `POST https://host.neatqueue.com:2000/api/queue/clear`
#### Headers:
- `Authorization: API Token`
#### Body:
- `channel_id: #`

#### Usage: 
```
POST /api/queue/clear HTTP/1.1
Host: https://host.neatqueue.com:2000
Authorization: YOURAPITOKENHERE
Content-Type: text/plain
Content-Length: 42

{
    "channel_id": 960292287437471804
}
```

___


### `POST https://host.neatqueue.com:2000/api/queue/lock`
#### Headers:
- `Authorization: API Token`
#### Body:
- `channel_id: #`

#### Usage: 
```
POST /api/queue/lock HTTP/1.1
Host: https://host.neatqueue.com:2000
Authorization: YOURAPITOKENHERE
Content-Type: text/plain
Content-Length: 42

{
    "channel_id": 960292287437471804
}
```

___


### `POST https://host.neatqueue.com:2000/api/queue/unlock`
#### Headers:
- `Authorization: API Token`
#### Body:
- `channel_id: #`

#### Usage: 
```
POST /api/queue/unlock HTTP/1.1
Host: https://host.neatqueue.com:2000
Authorization: YOURAPITOKENHERE
Content-Type: text/plain
Content-Length: 42

{
    "channel_id": 960292287437471804
}
```

___


### `GET https://host.neatqueue.com:2000/api/queue/{channel_id}/players`
#### Headers:
- `Authorization: API Token`

#### Usage: 
```
GET /api/queue/{channel_id}/players HTTP/1.1
Host: https://host.neatqueue.com:2000
Authorization: YOURAPITOKENHERE
```

___


### `POST https://host.neatqueue.com:2000/api/queue/player/add`
#### Headers:
- `Authorization: API Token`
#### Body:
- `channel_id: #`
- `player_id: #`

#### Usage: 
```
POST /api/queue/player/add HTTP/1.1
Host: https://host.neatqueue.com:2000
Authorization: YOURAPITOKENHERE
Content-Type: text/plain
Content-Length: 80

{
    "channel_id": 960292213751943178,
    "player_id": 145305657237700608
}
```

___


### `POST https://host.neatqueue.com:2000/api/queue/player/remove`
#### Headers:
- `Authorization: API Token`
#### Body:
- `channel_id: #`
- `player_id: #`

#### Usage: 
```
POST /api/queue/player/remove HTTP/1.1
Host: https://host.neatqueue.com:2000
Authorization: YOURAPITOKENHERE
Content-Type: text/plain
Content-Length: 80

{
    "channel_id": 960292213751943178,
    "player_id": 145305657237700608
}
```
