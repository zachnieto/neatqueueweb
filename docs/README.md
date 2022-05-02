# Introduction
[NeatQueue Website](https://www.neatqueue.com) \
All NeatQueue commands are slash commands, which means they are invoked using a `/` \
Any command that is marked as Admin Only requires the user to have `Manage Channels` permissions, or have one of the
configured NeatQueue staff roles.
In this documentation, anytime an argument is surrounded by `[square brackets]`, it is a required argument. If
it is surrounded by `(parenthesis)`, it is optional.
Also, the term MMR stands for Match Making Rating, which corresponds to the hidden rating system used by most competitive games.

> All stats are tied to the queue name. This means if you create multiple queues with the same queue name, they
> will share stats.

<hr style="border:3px solid gray">

# Getting Started
## Starting a Queue
Starting a queue is super simple with NeatQueue, just run one of the two following commands:\
`/setup` if you want an interactive walk through
or \
`/startqueue` if you just want the default configuration

<hr style="border:3px solid gray">

# User Commands
## Stats
#### Description
View your player stats
#### Usage: `/stats (hidden) (user)`
#### Arguments
`hidden`: If you want the stats to be only visible to you. \
`user`: The user who you want to see stats of. Omit to see your own stats.
> 5 minute cooldown per player

___

## Leaderboard
#### Description
View the queue's leaderboard
#### Usage: `/leaderboard (page) (type) (queue_name)`
#### Arguments
`page`: The specific page number you want to view. \
`type`: The type of stats that the leaderboard sorts by. \
`queue_name`: The specific queue name to view the leaderboard of. Omit to see the current queue's leaderboard.
> 30 second cooldown per channel

___

## Forcestart
#### Description
Forcestart the queue if it is not full
#### Usage: `/forcestart`
> Requires /forcestartsize to be configured

___

## Cancel
#### Description
Call a vote to cancel the current match
#### Usage: `/cancel`
> Teams must be created and the winner message must be visible to use this command.

___

## Info
#### Description
View the queue's configuration
#### Usage: `/info`

___

## IGN
#### Description
Set your IGN which is shown next your name if `/requireign` is enabled.
#### Usage: `/info`
#### Arguments
`page`: The specific page number you want to view. \

<hr style="border:3px solid gray">

# Admin Commands

## Start Queue
#### Description
Start a new queue
#### Usage: `/startqueue [queuename] [team_size] (number_of_teams)`
#### Arguments
`queuename`: The queue name. \
`team_size`: The team size. \
`number_of_teams`: The number of teams.

---

## Setup
#### Description
Start the interactive queue setup
#### Usage: `/setup`

---

## End Queue
#### Description
End the current queue
#### Usage: `/endqueue`

---

## Queue Name
#### Description
Change the name of the queue
#### Usage: `/queuename [name]`
> Since stats are tied to the queue name, changing the name will make it seem like all stats are lost.\
> If you want to change a queue name but move all stats to the new name, use `/rename [name]`.
#### Arguments
`name`: The queue name.

---

## Team Size
#### Description
Specifies the number of players for each team
#### Usage: `/teamsize [size]`
#### Arguments
`size`: The team size.

---

## Number of Teams
#### Description
Specifies the number of teams for the queue
#### Usage: `/numberofteams [number]`
#### Arguments
`number`: The number of teams.

---

## Number of Lobbies
#### Description
Specifies the number of lobbies for the queue
#### Usage: `/numberofteams [number]`
#### Arguments
`number`: The number of lobbies.
> Example: Teamsize set to 2, numberofteams set to 2, numberoflobbies set to 2. \
> The queue size would be 8, but when the queue fills up, two lobbies of size 4 will be created. \
> From each lobby a 2v2 would start.  \
> Overall, we get one 2v2 and another 2v2, both independent of each other.

---

## Queue Into Team
#### Description
Require players to select a team when they enter the queue. This skips any team selection since teams are already chosen. 
Will show separate queue buttons for each team.
#### Usage: `/queueintoteam [toggle]`
#### Arguments
`toggle`: If you want players to queue into teams.

---

## Team Queue
#### Description
Require players to create/join a team before being able to queue. The team captain selects the team upon queueing, and all team members
are automatically queued as well.
#### Usage: `/teamqueue [toggle]`
#### Arguments
`toggle`: If you want players to create teams.
> Team Queue is different than Queue Into Team, since it requires players to create/join teams with `/team`. These teams
> last forever until disbanded.

---

## Clear Queue
#### Description
Clears the queue of all players
#### Usage: `/clearqueue`

---

## Test
#### Description
Toggle queue testing mode
#### Usage: `/test`
> Test mode behaves differently than normal to allow for testing of all features.

---

## Locks
#### Description
Lock the queue to prevent players from queueing, or unlock to allow queueing again.
#### Usage: `/lock`
#### Usage: `/unlock`

---

## Starting MMR
#### Description
Modify the starting MMR for the given role.
#### Usage: `/startingmmr set [role] [mmr]`
#### Arguments
`role`: The Discord role.  \
`mmr`: The starting MMR for this role.
#### Usage: `/startingmmr remove [role]`
#### Arguments
`role`: The Discord role.  

---

## MMR Change
#### Description
Sets the average or specific MMR change per match. 
#### Usage: `/mmrchange [mmr] (static)`
#### Arguments
`mmr`: The average MMR change.  \
`static`: If you want the MMR change to ALWAYS be this value.

---

## MMR Floor
#### Description
Sets the lowest MMR a player can reach in this queue. 
#### Usage: `/mmrfloor [mmr]`
#### Arguments
`mmr`: The lowest assignable MMR.

---

## MMR Ceiling
#### Description
Sets the highest MMR a player can reach in this queue. 
#### Usage: `/mmrceiling [mmr]`
#### Arguments
`mmr`: The highest assignable MMR.

---

## MMR Requirement
#### Description
Sets the required MMR a player must have to enter this queue.
#### Usage: `/mmrrequirement [mmr]`
#### Arguments
`mmr`: The required MMR.

---

## Role Requirement
#### Description
Sets the required Discord role a player must have to enter this queue.
#### Usage: `/mmrrequirement [role]`
#### Arguments
`role`: The required role.

---

## Lobby Details
#### Description
Specify additional lobby details to show all players.
#### Usage: `/lobbydetails set [message]`
#### Arguments
`message`: The message to show. Can include substitutions to dynamically generate details.
> Currently supports three substitutions:
> 1. `HOST`: Randomly select a player name
> 2. `QUEUENUM`: Substitute the queue number 
> 3. `PASSWORD#`: Generate a random string of characters, where # is the length of the password. 
>Example:  \
> `/lobbydetails set "Host: HOST, Lobby Name: QUEUENUM, Lobby Password: PASSWORD4"`  \
> would substitute to  \
> `"Host: @NeatZ, Lobby Name: 12345, Lobby Password: DjmO`  \
> You can further enhance the visuals using Markdown formatting.
#### Usage: `/lobbydetails location [location]`
 #### Arguments
 `location`: Where to show the lobby details, either in DMS or the Queue Channel.
 
 ---
 
## Maps
#### Description
Specify Maps/Gamemodes for matches
#### Usage: `/map add [map_name] (gamemode)`
#### Arguments
`map_name`: The name of the map.  \
`gamemode`: The map's gamemode.
#### Usage: `/map remove [map_name]`
#### Arguments
`map_name`: The name of the map to remove, or ALL to remove all maps. 
#### Usage: `/map selection [type]`
#### Arguments
`type`: How the map is selected, either randomly or via a player vote. 

---

## Temporary Setup Channels
#### Description
Toggle creating a new text channel for every queue that pops.
#### Usage: `/tempchannels [toggle]`
#### Arguments
`toggle`: Whether to create new channels.

---

## Roles
#### Description
Specify game roles per team if required for your game
#### Usage: `/roles [roles]`
#### Arguments
`roles`: Comma separated list of your roles.
> Example:  \
>Overwatch - `/roles Tank,Tank,DPS,DPS,Support,Support` \
>This will automatically resize your teams to match the number of roles, so 6 in this example.

---

## Waiting Room
#### Description
Toggle a waiting room which allows for roles to be overqueued. When roles are overqueued, each extra player will show as 
a +1 next to the role. When the match starts, players will automatically be queued from the waiting room.
#### Usage: `/waitingroom [toggle]`
#### Arguments
`toggle`: Toggle the waiting room.
> Only applies to when Roles are enabled, since otherwise queues instantly start.

---

## Team Selection
#### Description
Specify how teams are selected
#### Usage: `/teamselection [type]`
#### Arguments
`type`: Either via the default selection menu, balanced, captains, random, players choose, or unfairly.

---

## Captain Selection
#### Description
Specify how captains are selected
#### Usage: `/captainselection [type]`
#### Arguments
`type`: Either via the default selection menu, random, two highest rated, two lowest rated, or a vote.

---

## Voice Channels
#### Description
Specify whether voice channels are required to be joined, optional, or fully disabled.
#### Usage: `/voicechannels [mode]`
#### Arguments
`mode`: Either required, optional, or disabled.

---

## Channel Links
#### Description
Link a channel without a queue to a channel with a queue. This allows you to check stats/leaderboards for channels without queues.
#### Usage: `/link [channel]`
#### Arguments
`channel`: The channel to link to that has a queue running.
#### Usage: `/unlink`

---

## Default Channel
#### Description
Specify a default channel to pull players from when their queue starts. If the player is not in this voice channel,
or is not connected to any voice channel, they will not be automatically dragged. After a queue completes, the players
will be dragged from their team channels back to this default channel.
#### Usage: `/defaultchannel [channel]`
#### Arguments
`channel`: The channel to act as the default channel.

---

## Results Channel
#### Description
Specify a channel to post the outcomes for matches. By default, this is the queue channel.
#### Usage: `/resultschannel [channel]`
#### Arguments
`channel`: The channel to post match results to.

---

## Staff Channel
#### Description
Specify the staff channel where admin match results are posted. These message have buttons that allow you to modify match results.
#### Usage: `/staffchannel set [channel] (serverwide)`
#### Arguments
`channel`: The channel to post admin results to. \
`serverwide`: If you want all queues to post their admin results to this channel. Defaults to True.

---

## Staff Role
#### Description
Add/remove NeatQueue staff roles. Staff roles have all access to Admin commands as well as match outcome modifications.
#### Usage: `/staffrole add/remove [role]`
#### Arguments
`role`: Role to add/remove as staff.

---

## AntiCheat
#### Description
Toggle all AntiCheat checks.
#### Usage: `/anticheat enable [toggle]`
#### Arguments
`toggle`: If you want AntiCheat enabled.
#### Description
Specify an AntiCheat channel to post suspicious activity. Without this set, AntiCheat will not function.
#### Usage: `/anticheat channel [channel]`
#### Arguments
`channel`: The channel to post suspicious activity to. 
#### Description
Flag players who have new Discord accounts.
#### Usage: `/anticheat flagnewaccount [age]`
#### Arguments
`age`: The account age in days. 
#### Description
Flag players who go on long winning/losing streaks.
#### Usage: `/anticheat flagstreak [streak]`
#### Arguments
`streak`: The number of wins/losses in a row.

---

## Vote For Results
#### Description
Toggle voting for match results. If this is disabled, most stats will not be collected!
#### Usage: `/voteforresult [toggle]`
#### Arguments
`toggle`: If you want players to vote for results.

---

## Modify Player Stats
#### Description
Manually set the given players stats
#### Usage: `/set wins|losses|games|mmr [user] [value]`
#### Arguments
`user`: The user to modify stats of.  \
`value`: The value to set.

---

## Reset Stats
#### Description
Reset stats for the given queue or the entire server
#### Usage: `/resetstats all (queue_name)`
#### Arguments
`queue_name`: The queue name to reset stats of. Omit to reset all queue stats.
#### Description
Reset stats for the given player for the given queue or the entire server
#### Usage: `/resetstats player [user] (queue_name)`
#### Arguments
`user`: The user to reset stats of. \
`queue_name`: The queue name to reset stats of. Omit to reset all queue stats.

---

## Add/Remove/Substitute Players
#### Description
Add/remove the given player to/from the queue
#### Usage: `/player add|remove [user]`
#### Arguments
`user`: The user to add/remove.
#### Description
Substitute the first player for the second player
#### Usage: `/player sub [player1] [player2]`
#### Arguments
`player1`: The user to remove.  \
`player2`: The user to add in place of player1. 
> This is an Admin command, but players can create a substitution themselves after teams are created using `/substitute`

---

## Team Balance
#### Description
Balanced teams using either MMR (default) or Discord role ordering.
#### Usage: `/balanceby [type]`
#### Arguments
`type`: The type of balancing, either MMR or Role.
#### Description
For `/balanceby roles`, specify the ordering of roles to utilize from lowest to highest ranking. 
Omit to use the default Discord role hierarchy.
#### Usage: `/balancebyroles [role1] (role2) (role3) (role4) ...`
#### Arguments
`role1`: The discord role.
> As of 05/02/2022, Discord does not support variable length Role inputs, so we get around this using a bunch of optional arguments!

---

## Automatically Assign/Remove Roles
#### Description
Create conditions to automatically assign/remove Discord roles.
#### Usage: `/autoroles set [role] [lower_threshold] [upper_threshold]`
#### Arguments
`role`: The role to assign.  \
`lower_threshold`: (Inclusive) The minimum MMR a player must have to be assigned this role.  \
`upper_threshold`: (Exclusive) The maximum MMR a player may have to be assigned this role.  \
#### Description
Remove conditions to automatically assign/remove Discord roles.
#### Usage: `/autoroles remove [role]`
#### Arguments
`role`: The role to remove auto assignment for.
#### Description
Copy the autoroles configuration from this queue to another queue since it can be tedious.
#### Usage: `/autoroles copy [channel]`
#### Arguments
`channel`: The queue channel to copy to.

---

## Required Votes
#### Description
Specify the requirements for a vote to finish.
#### Usage: `/requiredvotes [type]`
#### Arguments
`type`: The voting requirement, either one, half, or majority.

---

## Leaderboard Config
#### Description
Either use images for the leaderboards, or just a basic textual leaderboard.
#### Usage: `/leaderboardtype [type]`
#### Arguments
`type`: The leaderboard type, either Images or Text.
> Large servers may benefit from using Text leaderboards since uploading images multiple times a second leads to rate limits for your channel/server.

---

## Hide Stats
#### Description
Toggle always hiding stats to avoid channel spam.
#### Usage: `/hidestats [toggle]`
#### Arguments
`toggle`: Toggle stats always being hidden.

---

## Name Type
#### Description
Specify using Discord Names or nicknames.
#### Usage: `/nametype [type]`
#### Arguments
`type`: The name type, either Discord Names or Nicknames.

---

## Draft Type
#### Description
The type of draft to use. See https://www.rookieroad.com/football/fantasy/draft-types/ for a more in-depth draft description.
#### Usage: `/nametype [type]`
#### Arguments
`type`: The draft type, either Straight or Snake.

---

## Forcestart Size
#### Description
The configuration for when a player can call a forcestart vote for a queue.
#### Usage: `/forcestartsize [min_size] (max_size) (only_fair)`
#### Arguments
`min_size`: The minimum required players to be able to forcestart.  \
`max_size`: The maximum required players to be able to forcestart.  \
`only_fair`: Only allow force starting if teams will have the same number of players. 

---

## Outcome
#### Description
Manually specify an outcome for a match. For ease of use, it is better to specify a `/staffchannel` to allow for match modification via button clicks.
#### Usage: `/outcome selectwinner [queue_num] [team_num]`
#### Arguments
`queue_num`: The queue number for the match. \
`team_num`: The winning team. 
#### Description
Manually revert/mark the given match as a tie.
#### Usage: `/outcome tie|cancel [queue_num]`
#### Arguments
`queue_num`: The queue number for the match.

---

## Server Stats
#### Description
View specific stats to your server, including total/daily queues/players.
#### Usage: `/serverstats`

---

## Start From Voice Chat
#### Description
Start a match using players from the given voice chat. The created match will use the same config as the queue channel the command was typed from.
#### Usage: `/startfromvc [channel]`
#### Arguments
`channel`: The voice channel to start a match from.

---

## Cleanup Timer
#### Description
Automatically close a match after this timer has elapsed.
#### Usage: `/cleanuptimer [duration]`
#### Arguments
`duration`: The maximum match length in seconds.

---

## Reset Timer
#### Description
Automatically reset a queue if this timer elapses without any queue activity.
#### Usage: `/resettimer [duration]`
#### Arguments
`duration`: The length of time in seconds a queue can be inactive before resetting.

---

## Menu Timer
#### Description
The amount of time each menu vote lasts.
#### Usage: `/menutimer [duration]`
#### Arguments
`duration`: The duration for votes in seconds.

---

## Delay Winner Vote
#### Description
The amount of time to delay the winner message showing up to prevent players from accidentally clicking.
#### Usage: `/delaywinnervote [duration]`
#### Arguments
`duration`: The length of time in seconds to wait before sending the winner message.

---

## AFK Timer
#### Description
The amount of time a player can sit AFK in a queue. This timer is reset basically any time the player interacts with the server.
#### Usage: `/afktimer [toggle] (duration)`
#### Arguments
`toggle`: Enable autokicking of players who are detected as AFK.  \
`duration`: The length of time in seconds to wait before kicking an AFK player. 

---

## Channel Names
#### Description
Automatically rename the channel when a queue is empty/not empty.
#### Usage: `/channelname queueempty|queuenotempty [name]`
#### Arguments
`name`: What to set the channel name as for the given condition.
> Due to Discord API limitations, NeatQueue can only update the channel name twice per a 10 minute period. Therefore, this command
> is not very helpful for servers with large amounts of queueing.

---

## Configuration Saving/Loading
#### Description
Save the queue configuration to be able to load in other channels/servers
#### Usage: `/save`
#### Description
Load the given configuration
#### Usage: `/load [config]`
#### Arguments
`config`: The configuration ID to load from.

---

## Emojis
#### Description
Toggle showing emojis or being lame.
#### Usage: `/emojis [toggle]`
#### Arguments
`toggle`: Enable/Disable emojis in bot messages.

---

## MultiQueue
#### Description
Toggle allowing players to be in multiple queues at once.
#### Usage: `/multiqueue [toggle]`
#### Arguments
`toggle`: If players can join multiple queues at once.
> If disabled, players will be prevented by queueing if: \
> 1. They are in queue in another channel
> 2. Have yet to vote for a winner in an active match

---

## Show Rating In Name
#### Description
Show a players MMR in their nickname.
#### Usage: `/ratinginname toggle [toggle]`
#### Arguments
`toggle`: Enable/disable showing rating in names.
#### Description
The format for how the rating appears.
#### Usage: `/ratinginname format [format]`
#### Arguments
`format`: Rating format to use, where $ is the rating.
> For example, if your name was `NeatZ` and you wanted your rating of `1337` 
>to appear in your name as `NeatZ [1337]`, the rating format would be 
> `[$]` \
>The bot automatically inserts a space between your name and the rating format
#### Description
Remove all nicknames from all users.
#### Usage: `/ratinginname removeall`
#### Description
Specify the queuenames to show in player nicknames. By default, the most recent queue shows in your nickname, but using this
command allows you to explicitly specify what queues to show rating from.
#### Usage: `/ratinginname queuenames [queues]`
#### Arguments
`queues`: Comma seperated list of queue names to pull rating from.
> For example, if your name was `NeatZ` and you wanted both your RocketLeague and Overwatch ratings to appear \
>in your nickname as `NeatZ - [1337] [1234]`, you would specify `/ratinginname queuenames RocketLeague,Overwatch`  \
>Also, the rating format must reflect the correct number of `$`s to match the number of queue names specified. \
>`/ratinginname format "- [$] [$]"` \
> Super simple, right?

---

## Rematches
#### Description
Toggle allowing rematches.
#### Usage: `/rematches [toggle]`
#### Arguments
`toggle`: If rematches are enabled.

---

## Ties
#### Description
Toggle allowing ties.
#### Usage: `/ties [toggle]`
#### Arguments
`toggle`: If ties are enabled.

---

## Require IGN (In Game Name)
#### Description
Require if players must set their IGN before they can join the queue. Their IGN will appear next to their name when teams are selected.
#### Usage: `/requireign [toggle]`
#### Arguments
`toggle`: If IGNs are required.
> Players will be prompted to specify their IGNs with `/ign`

---

## Teams
#### Description
Create a new team.
#### Usage: `/team create [team_name]`
#### Arguments
`team_name`: The team name.
#### Description
Invite a new team member
#### Usage: `/team invite [player] [team_name]`
#### Arguments
`player`: Player to invite. \
`team_name`: The team name.
#### Description
Leave the given team.
#### Usage: `/team leave [team_name]`
#### Arguments
`team_name`: The team name.
#### Description
Kick the given player from the team.
#### Usage: `/team kick [player] [team_name]`
#### Arguments
`player`: Player to kick. \
`team_name`: The team name.
#### Description
Join the given team.
#### Usage: `/team join [team_name]`
#### Arguments
`team_name`: The team name.
#### Description
Specify the new team captain.
#### Usage: `/team captain [player] [team_name]`
#### Arguments
`player`: Player to make the captain. \
`team_name`: The team name.
#### Description
Cancel all pending team invited.
#### Usage: `/team cancelinvites [team_name]`
#### Arguments
`team_name`: The team name.

---

## Channel Restrictions
#### Description
Enable/disable channel restrictions for created channels.
#### Usage: `/channelrestrictions [toggle]`
#### Arguments
`toggle`: If channel restrictions are applied.