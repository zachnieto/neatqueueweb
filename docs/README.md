### [NeatQueue Website](https://www.neatqueue.com)

# Introduction

All NeatQueue commands are slash commands, which means they are invoked using a `/` \
Any Admin command requires the user to have Manage Channels permissions, or have one of the configured NeatQueue staff roles. \
In this documentation, anytime an argument is surrounded by [square brackets], it is a required argument. If it is surrounded by (parenthesis), it is optional. \
The term MMR stands for Match Making Rating, which corresponds to the hidden rating system used by most competitive games. \
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

# Premium Commands

## Language

### `/language overrides set`

#### Description

Toggle on/off using the custom overrides.

#### Usage: `/language overrides set [original_phrase] (overriden_phrase)`

#### Arguments:

`original_phrase`: _(Required)_ Existing phrase to override.\
`overriden_phrase`: _(Optional)_ Replacement phrase, omit to go back to default.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/language overrides toggle`

#### Description

Toggle on/off using the custom overrides.

#### Usage: `/language overrides toggle [toggle]`

#### Arguments:

`toggle`: _(Required)_ Toggle custom overrides.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/language overrides upload`

#### Description

Upload a custom overrides file.

#### Usage: `/language overrides upload [custom_overrides]`

#### Arguments:

`custom_overrides`: _(Required)_ Custom translation overrides, omit to remove.

> The overrides file is JSON format, and can be found here: https://www.neatqueue.com/default_overrides.json
> The keys (left side) signify the already existing English phrase the bot uses. The value (right side) is the
> value that replaces the key.
>
> Sometimes an entry will include special charcters similar to {}. The total number of these signifiers in each
> entry must remain constant. If an override does not match the count of signifiers, it will not be used.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Leaderboard Config

> Leaderboard titles are hyperlinks to the website version of the leaderboard.

### `/leaderboardconfig url`

#### Description

Create a custom website url for leaderboards.

#### Usage: `/leaderboardconfig url [url]`

#### Arguments:

`url`: _(Required)_ Custom url for this channel's leaderboard.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Messages + Styling

### `/message color`

#### Description

Sets the color for all embeds in messages.

#### Usage: `/message color [color]`

#### Arguments:

`color`: _(Required)_ Either a color by name, or by HEX value (Ex: 00FF55).

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/message queuemessage footer`

#### Description

(Default: None) Set a footer for the queue message.

#### Usage: `/message queuemessage footer (text) (icon_url)`

#### Arguments:

`text`: _(Optional)_ Footer contents, or omit to remove.\
`icon_url`: _(Optional)_ -.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/message queuemessage image`

#### Description

(Default: None) Set an image for the queue message.

#### Usage: `/message queuemessage image (image_url)`

#### Arguments:

`image_url`: _(Optional)_ Direct URL of image, or omit to remove.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/message queuemessage thumbnail`

#### Description

(Default: None) Set a thumbnail for the queue message.

#### Usage: `/message queuemessage thumbnail (image_url)`

#### Arguments:

`image_url`: _(Optional)_ Direct URL of image, or omit to remove.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

# User Commands

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

`player2`: _(Required)_ Enter the second user you want to compare to.\
`player1`: _(Optional)_ Enter the first user you want to compare to, or omit for yourself.\
`hidden`: _(Optional)_ If you want the stats to be hidden.

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

Start a vote to forcestart the game, skips vote if used by staff.

#### Usage: `/forcestart`

<hr style="border:3px solid gray">

## Help

### `/help`

#### Description

View locations where to find help for setup.

#### Usage: `/help`

<hr style="border:3px solid gray">

## Leaderboard

### `/leaderboard`

#### Description

Shows the leaderboard for the current queue's game.

#### Usage: `/leaderboard (page) (type) (queue_name)`

#### Arguments:

`page`: _(Optional)_ The desired page number.\
`type`: _(Optional)_ The type of leaderboard to display.\
&emsp;&emsp;&emsp; Options: `MMR, Peak MMR, Points, MVPs, Games, Wins, Losses, Winrate, Streak, Peak Streak`\
`queue_name`: _(Optional)_ The queue name to view.

<hr style="border:3px solid gray">

## Need

### `/need`

#### Description

Shows how many players are needed for the queue.

#### Usage: `/need (channel)`

#### Arguments:

`channel`: _(Optional)_ Channel of queue to show need for.

<hr style="border:3px solid gray">

## Parties/Teams/Clans/Groups

### `/party cancelinvites`

#### Description

CAPTAIN ONLY: Cancel all pending invites.

#### Usage: `/party cancelinvites [party_name]`

#### Arguments:

`party_name`: _(Required)_ The party name.

---

### `/party captain`

#### Description

CAPTAIN ONLY: Designate a new captain if you are the current one.

#### Usage: `/party captain [player] [party_name]`

#### Arguments:

`player`: _(Required)_ The new captain.\
`party_name`: _(Required)_ The team name.

---

### `/party create`

#### Description

Create a new party.

#### Usage: `/party create [party_name]`

#### Arguments:

`party_name`: _(Required)_ The party name.

---

### `/party disband`

#### Description

CAPTAIN ONLY: Disband a party.

#### Usage: `/party disband [party_name]`

#### Arguments:

`party_name`: _(Required)_ The party name.

---

### `/party invite`

#### Description

CAPTAIN ONLY: Invite a new player to the party.

#### Usage: `/party invite [player] [party_name]`

#### Arguments:

`player`: _(Required)_ Player to invite.\
`party_name`: _(Required)_ The party name.

---

### `/party join`

#### Description

Join a party.

#### Usage: `/party join [party_name]`

#### Arguments:

`party_name`: _(Required)_ The party name.

---

### `/party kick`

#### Description

CAPTAIN ONLY: Kick a player from the party.

#### Usage: `/party kick [player] [party_name]`

#### Arguments:

`player`: _(Required)_ The player to kick.\
`party_name`: _(Required)_ The team name.

---

### `/party leave`

#### Description

Leave a party.

#### Usage: `/party leave [party_name]`

#### Arguments:

`party_name`: _(Required)_ The party name.

---

### `/party list`

#### Description

List your parties.

#### Usage: `/party list`

---

### `/party selectrole`

#### Description

Specify your role in the party.

#### Usage: `/party selectrole [party_name] [role]`

#### Arguments:

`party_name`: _(Required)_ The party name.\
`role`: _(Required)_ Your role.

---

### `/party view`

#### Description

View the specified party.

#### Usage: `/party view [party_name]`

#### Arguments:

`party_name`: _(Required)_ The party name.

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

`gamenumber`: _(Required)_ Game number of bet on.\
`team`: _(Required)_ Team to place the bet on.\
`amount`: _(Required)_ Amount of points you want to bet.

<hr style="border:3px solid gray">

## Register

### `/register`

#### Description

Initialize your MMR using your account.

#### Usage: `/register [account]`

#### Arguments:

`account`: _(Required)_ Account details.

<hr style="border:3px solid gray">

## Require IGN

### `/ign`

#### Description

Sets your IGN for this queue to help with easy lobby setup.

#### Usage: `/ign [ign]`

#### Arguments:

`ign`: _(Required)_ Your IGN for this queue's platform.

<hr style="border:3px solid gray">

## Roles

### `/role`

#### Description

Set your role.

#### Usage: `/role (role)`

#### Arguments:

`role`: _(Optional)_ Preferred role to use, or omit to remove.

<hr style="border:3px solid gray">

## Stats

### `/stats`

#### Description

Shows your stats.

#### Usage: `/stats (hidden) (user) (all_time)`

#### Arguments:

`hidden`: _(Optional)_ If you want the stats to be hidden.\
`user`: _(Optional)_ The user you want to check stats of.\
`all_time`: _(Optional)_ If you want to view all time stats, only applies to monthly queues.

<hr style="border:3px solid gray">

## Substitute

### `/substitute`

#### Description

Substitute yourself for the given player.

#### Usage: `/substitute [player]`

#### Arguments:

`player`: _(Required)_ Enter the player to replace you.

<hr style="border:3px solid gray">

# Admin Commands

## AnonymousQueue / Hiding Names

### `/anonymousqueue`

#### Description

Sets whether to hide the names of players in queue.

#### Usage: `/anonymousqueue [mode]`

#### Arguments:

`mode`: _(Required)_ Hide players names in queue.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Anti Cheat

### `/anticheat channel`

#### Description

Sets the anticheat channel to show flagged users.

#### Usage: `/anticheat channel [channel]`

#### Arguments:

`channel`: _(Required)_ The desired anticheat channel.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/anticheat enable`

#### Description

Enable/disable the anticheat system.

#### Usage: `/anticheat enable [toggle]`

#### Arguments:

`toggle`: _(Required)_ Toggle for anticheat.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/anticheat flag incorrectvoting`

#### Description

Set an anticheat trigger for players who vote for the wrong team.

#### Usage: `/anticheat flag incorrectvoting [toggle]`

#### Arguments:

`toggle`: _(Required)_ Flag users who vote wrong.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/anticheat flag newaccount`

#### Description

Set an anticheat trigger for new accounts.

#### Usage: `/anticheat flag newaccount [age]`

#### Arguments:

`age`: _(Required)_ Account age in days.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/anticheat flag rejoins`

#### Description

Set an anticheat trigger for if a player rejoins a server.

#### Usage: `/anticheat flag rejoins [toggle]`

#### Arguments:

`toggle`: _(Required)_ Flag users who rejoin the server if they already have stats.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/anticheat flag streak`

#### Description

Set an anticheat trigger for a players streak.

#### Usage: `/anticheat flag streak [streak]`

#### Arguments:

`streak`: _(Required)_ Streak to trigger a flag.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/anticheat role`

#### Description

Set a role to assign to flagged players.

#### Usage: `/anticheat role [role]`

#### Arguments:

`role`: _(Required)_ Role to assign.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Auto Ping

### `/autoping remove`

#### Description

Remove the set auto ping rule.

#### Usage: `/autoping remove`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/autoping set`

#### Description

Automatically ping the given role when the queue hits the given size.

#### Usage: `/autoping set [role] [size]`

#### Arguments:

`role`: _(Required)_ Role to ping.\
`size`: _(Required)_ Ping when the queue hits this size.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Balance By

### `/balanceby roles`

#### Description

Order of role to skill from lowest to highest rated, used if balance by ROLES, not MMR.

#### Usage: `/balanceby roles (role1) (role2) (role3) (role4) (role5) (role6) (role7) (role8) (role9) (role10)`

#### Arguments:

`role1`: _(Optional)_ The role to use in balancing.\
`role2`: _(Optional)_ The role to use in balancing.\
`role3`: _(Optional)_ The role to use in balancing.\
`role4`: _(Optional)_ The role to use in balancing.\
`role5`: _(Optional)_ The role to use in balancing.\
`role6`: _(Optional)_ The role to use in balancing.\
`role7`: _(Optional)_ The role to use in balancing.\
`role8`: _(Optional)_ The role to use in balancing.\
`role9`: _(Optional)_ The role to use in balancing.\
`role10`: _(Optional)_ The role to use in balancing.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/balanceby type`

#### Description

(Default: mmr) Sets how teams are balanced.

#### Usage: `/balanceby type [mode]`

#### Arguments:

`mode`: _(Required)_ How teams are balanced.\
&emsp;&emsp;&emsp; Options: `Roles, MMR`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Best Of

### `/bestof`

#### Description

Sets whether the queue is a best of 3, 5, 7, etc.

#### Usage: `/bestof [number] (vote) (voteselection) (eligible_voters)`

#### Arguments:

`number`: _(Required)_ Best of number.\
`vote`: _(Optional)_ Whether players can vote on the number of matches to play.\
`voteselection`: _(Optional)_ Whether to pick the majority vote, or the lowest voted number.\
&emsp;&emsp;&emsp; Options: `Majority, Lowest`\
`eligible_voters`: _(Optional)_ Who on the team can vote. Defaults to All if no captain selected.\
&emsp;&emsp;&emsp; Options: `All, Captains`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Captain Selection

### `/captains automute`

#### Description

Automatically mute all non-captains during selection to remove bias.

#### Usage: `/captains automute [toggle]`

#### Arguments:

`toggle`: _(Required)_ If players are muted.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/captains drafttype`

#### Description

Sets the type of draft to either Snake or Straight.

#### Usage: `/captains drafttype [type]`

#### Arguments:

`type`: _(Required)_ The type of draft to use.\
&emsp;&emsp;&emsp; Options: `Snake (1-2-2-2), Straight (1-1-1-1), Hybrid (1-1/2-1-1), Hybrid 2 (1-2-1-1), Vote`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/captains firstpick`

#### Description

Specify who gets the first pick in captain selection.

#### Usage: `/captains firstpick [mode]`

#### Arguments:

`mode`: _(Required)_ Who gets the first pick.\
&emsp;&emsp;&emsp; Options: `Highest Rated, Lowest Rated, Random`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/captains reshuffle`

#### Description

Sets whether players can reshuffle captains in random captain selection.

#### Usage: `/captains reshuffle [toggle]`

#### Arguments:

`toggle`: _(Required)_ Whether reshuffling is enabled or disabled.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/captains role`

#### Description

Sets a role which gets priority for being captain.

#### Usage: `/captains role (role)`

#### Arguments:

`role`: _(Optional)_ The captain role.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/captains selection`

#### Description

Choose how captains will be picked.

#### Usage: `/captains selection`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Channel Config

> Due to Discord API limitations, NeatQueue can only update the channel name twice per a 10 minute period.

### `/channel category`

#### Description

(Default: Parent) Sets whether created channels go in a separate or the parent category.

#### Usage: `/channel category [category_mode] (category)`

#### Arguments:

`category_mode`: _(Required)_ The category setting. If mode is Specified, you must provide the category.\
&emsp;&emsp;&emsp; Options: `Parent, New, Specified`\
`category`: _(Optional)_ The specific category if category_mode is Specified.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/channel name queueempty`

#### Description

Set the channel name when a queue is empty. Can only be updated twice per 10 minutes!.

#### Usage: `/channel name queueempty [channel_name]`

#### Arguments:

`channel_name`: _(Required)_ The channel name.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/channel name queuelocked`

#### Description

Set the channel name when a queue is locked. Can only be updated twice per 10 minutes!.

#### Usage: `/channel name queuelocked [channel_name]`

#### Arguments:

`channel_name`: _(Required)_ The channel name.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/channel name queuenotempty`

#### Description

Set the channel name when a queue isn't empty. Can only be updated twice per 10 minutes!.

#### Usage: `/channel name queuenotempty [channel_name]`

#### Arguments:

`channel_name`: _(Required)_ The channel name.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/channel restrictions`

#### Description

(Default: enabled) Sets whether created channels have restrictions.

#### Usage: `/channel restrictions [mode]`

#### Arguments:

`mode`: _(Required)_ If channels are restricted.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Clear Queue

### `/clearqueue`

#### Description

Clears the running queue.

#### Usage: `/clearqueue`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Config Loading/Saving

### `/config list`

#### Description

List the 15 most recently created configs.

#### Usage: `/config list`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/config load`

#### Description

Loads the queue configuration based on the given name.

#### Usage: `/config load [config]`

#### Arguments:

`config`: _(Required)_ Config name.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/config save`

#### Description

Save the current queue configuration to a name.

#### Usage: `/config save (name)`

#### Arguments:

`name`: _(Optional)_ Name of new config code, or omit for a random code.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Cross Chat

### `/crosschat join`

#### Description

Join/create a crosschat room, to share a text channel between servers.

#### Usage: `/crosschat join (room_name) (censored)`

#### Arguments:

`room_name`: _(Optional)_ Name of the room.\
`censored`: _(Optional)_ If crosschat text should be censored.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/crosschat leave`

#### Description

Leave the crosschat.

#### Usage: `/crosschat leave`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Dodge

### `/dodge autoban`

#### Description

Auto ban players who cause a match to cancel by not joining the voice channel.

#### Usage: `/dodge autoban (duration)`

#### Arguments:

`duration`: _(Optional)_ Duration of time in seconds for the ban to last, or 0 to reset.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/dodge mmrpenalty`

#### Description

Deduct MMR from players who dodge the match.

#### Usage: `/dodge mmrpenalty [amount]`

#### Arguments:

`amount`: _(Required)_ Amount of MMR to deduct.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/dodge pointspenalty`

#### Description

Deduct points from players who dodge the match.

#### Usage: `/dodge pointspenalty [amount]`

#### Arguments:

`amount`: _(Required)_ Amount of points to deduct.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## End Queue

### `/endqueue`

#### Description

Ends the running queue.

#### Usage: `/endqueue`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Force Start

### `/forcestartconfig conditions`

#### Description

Sets the requirements for forcestarting.

#### Usage: `/forcestartconfig conditions [min_size] (max_size) (only_fair) (auto_start)`

#### Arguments:

`min_size`: _(Required)_ Enter the minimum number of players required. Set to -1 to disable.\
`max_size`: _(Optional)_ Enter the maximum number of players required. Set to -1 to ignore.\
`only_fair`: _(Optional)_ Should the forcestart happen if teams are not the same size?.\
`auto_start`: _(Optional)_ Should the forcestart vote automatically happen when possible?.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/forcestartconfig cooldown`

#### Description

(Default: 300) Sets the forcestart cooldown.

#### Usage: `/forcestartconfig cooldown [seconds]`

#### Arguments:

`seconds`: _(Required)_ Cooldown duration in seconds.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Game Integrations

### `/requireregister`

#### Description

Specify whether players must register their account before playing.

#### Usage: `/requireregister [mode]`

#### Arguments:

`mode`: _(Required)_ Game to register with, or None to disable.\
&emsp;&emsp;&emsp; Options: `None, Valorant, Rainbow 6, Overwatch, RocketLeague, Custom API, Manually`

> With register mode being Custom API, please check out `https://docs.neatqueue.com/#/?id=webhooks` With register mode Manually, players must have their MMR manually set, either through an admin command
> or via an API request `https://docs.neatqueue.com/#/?id=endpoints`.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Gamemodes

### `/gamemode reshuffle`

#### Description

Sets whether players can reshuffle gamemodes in random gamemode selection.

#### Usage: `/gamemode reshuffle [toggle]`

#### Arguments:

`toggle`: _(Required)_ Whether reshuffling is enabled or disabled.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/gamemode selection`

#### Description

Choose how gamemodes are selected.

#### Usage: `/gamemode selection [gamemode_choice]`

#### Arguments:

`gamemode_choice`: _(Required)_ Voting, always random, ordered, or least common.\
&emsp;&emsp;&emsp; Options: `Vote, Random, Least Frequent, Ordered`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Heroes

### `/hero add`

#### Description

Adds the given hero.

#### Usage: `/hero add [hero_name]`

#### Arguments:

`hero_name`: _(Required)_ New hero name.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/hero bans`

#### Description

Specify the number of hero bans or 0 to disable.

#### Usage: `/hero bans [bans] (per_team)`

#### Arguments:

`bans`: _(Required)_ Number of bans (per team if applicable).\
`per_team`: _(Optional)_ If the hero bans are team by team.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/hero remove`

#### Description

Removes the given hero.

#### Usage: `/hero remove [hero_name]`

#### Arguments:

`hero_name`: _(Required)_ The hero to remove, or ALL to remove all.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/hero voting`

#### Description

Specify who can vote for hero bans. Defaults to All if no captains.

#### Usage: `/hero voting [per_team] [mode]`

#### Arguments:

`per_team`: _(Required)_ If the map vote goes team by team. Team 1 picks first ban, Team 2 picks next, ...\
`mode`: _(Required)_ Who can vote.\
&emsp;&emsp;&emsp; Options: `All, Captains`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Info

### `/info`

#### Description

View information about the queue configuration.

#### Usage: `/info`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Language

### `/language set`

#### Description

Set the language for the server.

#### Usage: `/language set [language]`

#### Arguments:

`language`: _(Required)_ Server language.\
&emsp;&emsp;&emsp; Options: `English, Spanish, French, Portuguese, Japanese, Russian, German, Italian, Ukrainian, Polish, Hebrew, Arabic, Bengali, Hindi, Turkish, Vietnamese, Uwu, Owo`

> If there is an issue with a normal language translation, please fix here: https://crowdin.com/project/neatqueue

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Leaderboard Config

> Leaderboard titles are hyperlinks to the website version of the leaderboard.

### `/leaderboardconfig edits`

#### Description

Specify who can edit a leaderboard.

#### Usage: `/leaderboardconfig edits [edits]`

#### Arguments:

`edits`: _(Required)_ Who can edit the leaderboard buttons.\
&emsp;&emsp;&emsp; Options: `Staff, Anyone, Creator`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/leaderboardconfig ignoreroles add`

#### Description

Will not show players on leaderboard with this role.

#### Usage: `/leaderboardconfig ignoreroles add [role]`

#### Arguments:

`role`: _(Required)_ Required role to show on leaderboard.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/leaderboardconfig ignoreroles remove`

#### Description

Remove an ignored leaderboard role.

#### Usage: `/leaderboardconfig ignoreroles remove [role]`

#### Arguments:

`role`: _(Required)_ Role to no longer ignore.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/leaderboardconfig monthly`

#### Description

Toggle monthly leaderboards, either resets monthly or rolls over.

#### Usage: `/leaderboardconfig monthly [toggle] (mode)`

#### Arguments:

`toggle`: _(Required)_ If monthly leaderboards are enabled.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`\
`mode`: _(Optional)_ If stats reset for the month, or keep rolling.\
&emsp;&emsp;&emsp; Options: `Reset, Rolling`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/leaderboardconfig requiredgames`

#### Description

(Default: 1) The required number of games played to be displayed on the leaderboard.

#### Usage: `/leaderboardconfig requiredgames [games]`

#### Arguments:

`games`: _(Required)_ Required number of games.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/leaderboardconfig sharedstats serverwide`

#### Description

Toggle having player stats be shared among all queues.

#### Usage: `/leaderboardconfig sharedstats serverwide [toggle] (name)`

#### Arguments:

`toggle`: _(Required)_ If player stats are server wide.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`\
`name`: _(Optional)_ Shared stats name, or omit to automatically determine.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/leaderboardconfig sharedstats set`

#### Description

Sets the name to use for stats storaged. Queues with the same name share stats.

#### Usage: `/leaderboardconfig sharedstats set [name]`

#### Arguments:

`name`: _(Required)_ Shared stats configuration name.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/leaderboardconfig type`

#### Description

Toggle using the image or text leaderboard.

#### Usage: `/leaderboardconfig type [type]`

#### Arguments:

`type`: _(Required)_ Leaderboard format.\
&emsp;&emsp;&emsp; Options: `Images, Text`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Link Queue

### `/link`

#### Description

Links the current channel to another channel's queue.

#### Usage: `/link [channel]`

#### Arguments:

`channel`: _(Required)_ Enter the channel to link to.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/unlink`

#### Description

Unlinks the current channel.

#### Usage: `/unlink`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Lobby Channel

### `/lobbychannel automute`

#### Description

If the lobby channel should mute all players.

#### Usage: `/lobbychannel automute [toggle]`

#### Arguments:

`toggle`: _(Required)_ If players are muted in the lobby channel.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/lobbychannel pause`

#### Description

Pause the current lobby channel countdown timer.

#### Usage: `/lobbychannel pause`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/lobbychannel pullall`

#### Description

Specify pulling players from all channels when their match starts.

#### Usage: `/lobbychannel pullall [toggle]`

#### Arguments:

`toggle`: _(Required)_ Pull players from all channels.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/lobbychannel returnall`

#### Description

Specify returning players to their original voice channel from before the match.

#### Usage: `/lobbychannel returnall [toggle]`

#### Arguments:

`toggle`: _(Required)_ Return players to their original voice channel.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/lobbychannel set`

#### Description

Specify the channel to move players to/from before/after a game.

#### Usage: `/lobbychannel set [channel]`

#### Arguments:

`channel`: _(Required)_ Channel to drag/drop players from/to.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/lobbychannel timer`

#### Description

Specify how long players have to join the voice channel before the match is cancelled.

#### Usage: `/lobbychannel timer [timer]`

#### Arguments:

`timer`: _(Required)_ (Default: 300) Timeout length in seconds.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/lobbychannel toggle`

#### Description

Toggle creating a voice channel when a match is created for lobby setup.

#### Usage: `/lobbychannel toggle [toggle]`

#### Arguments:

`toggle`: _(Required)_ If a new voice channel is made for each lobby setup.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/lobbychannel unpause`

#### Description

Unpause the current lobby channel countdown timer.

#### Usage: `/lobbychannel unpause`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Lobby Details

### `/lobbydetails location`

#### Description

Sets the lobby details message.

#### Usage: `/lobbydetails location [location]`

#### Arguments:

`location`: _(Required)_ Where to show lobby details.\
&emsp;&emsp;&emsp; Options: `DMs, Teams Message`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/lobbydetails remove`

#### Description

Removed the lobby details message.

#### Usage: `/lobbydetails remove`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/lobbydetails set`

#### Description

Sets the lobby details message.

#### Usage: `/lobbydetails set [message]`

#### Arguments:

`message`: _(Required)_ Enter the message to send.

> Currently supports five substitutions:
>
> `HOST`: Randomly select a player name \
> `QUEUENUM`: Substitute the queue number \
> `RANDOMTEAM`: Substitute a random team name \
> `RANDOM[Option1,Option2,...]`: Randomly select one of the given options and substitute. Ex: `RANDOM[Heads,Tails]` \
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
> "Host: @NeatZ, Lobby Name: 12345, Lobby Password: D83mA76x"
>
> You can further enhance the visuals using Markdown formatting.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Lock

### `/lock`

#### Description

Lock the queue channel to prevent players from joining.

#### Usage: `/lock (all)`

#### Arguments:

`all`: _(Optional)_ Lock all queues?.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/unlock`

#### Description

Unlock the queue channel to allow players to join.

#### Usage: `/unlock (all)`

#### Arguments:

`all`: _(Optional)_ Unlock all queues?.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Logs

### `/logs`

#### Description

View a log of used NeatQueue commands.

#### Usage: `/logs (filter)`

#### Arguments:

`filter`: _(Optional)_ Filter for logs containing this word.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## MMR Change

### `/mmr change allow_disable`

#### Description

Sets if the vote to disable MMR appears.

#### Usage: `/mmr change allow_disable [allow_disable]`

#### Arguments:

`allow_disable`: _(Required)_ If MMR changes should be toggleable.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/mmr change hidden`

#### Description

Sets if MMR changes are hidden from players.

#### Usage: `/mmr change hidden [hidden]`

#### Arguments:

`hidden`: _(Required)_ If MMR changes are hidden.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/mmr change mode`

#### Description

(Default: Per Player) Sets if MMR changes are calculated per player, or per team.

#### Usage: `/mmr change mode [mode]`

#### Arguments:

`mode`: _(Required)_ How MMR changes are calculated.\
&emsp;&emsp;&emsp; Options: `Per Player, Per Team`

> MMR multipliers will still be applied on a per-player basis. Disable multipliers to make everyone on the team
> get the same MMR change.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/mmr change set`

#### Description

(Default: 50) Sets the MMR change per game.

#### Usage: `/mmr change set [amount] (loser_mmr) (static)`

#### Arguments:

`amount`: _(Required)_ The average MMR change for wins and losses.\
`loser_mmr`: _(Optional)_ Override the MMR change for losses.\
`static`: _(Optional)_ If the MMR change should ALWAYS be this value.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/mmr change variance`

#### Description

Sets the variance value. Lower value = higher ranges of MMR changes.

#### Usage: `/mmr change variance [amount]`

#### Arguments:

`amount`: _(Required)_ (Default: 1600) Variance value. See docs for a calculator.

> Calculator: https://www.desmos.com/calculator/3qtwvlrw8q
> Using the calculator, you can see that as the variance value goes up, the actually outputted MMR change has lower variance.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/mmr decay`

#### Description

Enable/disable MMR decay and configure the values.

#### Usage: `/mmr decay [toggle] (amount) (duration)`

#### Arguments:

`toggle`: _(Required)_ Enable/disable MMR decay.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`\
`amount`: _(Optional)_ Amount of MMR to decay.\
`duration`: _(Optional)_ After how long should a player decay in seconds.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/mmr maximum`

#### Description

Sets the highest mmr a player can reach in this queue.

#### Usage: `/mmr maximum (mmr)`

#### Arguments:

`mmr`: _(Optional)_ Enter the peak rating, or omit to reset.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/mmr minimum`

#### Description

Sets the lowest mmr a player can reach in this queue.

#### Usage: `/mmr minimum (mmr)`

#### Arguments:

`mmr`: _(Optional)_ Enter the lowest rating, or omit to reset.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/mmr multipliers placements`

#### Description

Toggle the placement matches multiplier.

#### Usage: `/mmr multipliers placements [toggle]`

#### Arguments:

`toggle`: _(Required)_ If there exists a multiplier for the first 10 matches.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/mmr multipliers remove`

#### Description

Remove the MMR multiplier for the given role.

#### Usage: `/mmr multipliers remove [role]`

#### Arguments:

`role`: _(Required)_ Role to remove multiplier for.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/mmr multipliers set`

#### Description

Sets the MMR multiplier for the given role for wins.

#### Usage: `/mmr multipliers set [role] [multiplier]`

#### Arguments:

`role`: _(Required)_ -.\
`multiplier`: _(Required)_ Multiplier value. (Ex: 1.2 for a 20% boost).

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/mmr multipliers streaks`

#### Description

Toggle the streak multiplier.

#### Usage: `/mmr multipliers streaks [toggle]`

#### Arguments:

`toggle`: _(Required)_ If there exists a multiplier for win/loss streaks.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/mmr requirement`

#### Description

Sets the required mmr to enter this queue.

#### Usage: `/mmr requirement (mmr)`

#### Arguments:

`mmr`: _(Optional)_ Enter the required mmr, or omit to disable.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## MVPs

### `/mvp reward`

#### Description

(Default: 5) MMR reward for MVPs.

#### Usage: `/mvp reward [amount]`

#### Arguments:

`amount`: _(Required)_ Amount of MMR to give as a reward.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/mvp toggle`

#### Description

Enable/disable MVP votes for matches.

#### Usage: `/mvp toggle [toggle]`

#### Arguments:

`toggle`: _(Required)_ Enable/disable MVPs.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/mvp voterequired`

#### Description

(Default: Disabled) Require players to vote for MVP before voting for winner.

#### Usage: `/mvp voterequired [toggle]`

#### Arguments:

`toggle`: _(Required)_ If voting for MVP is required.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Manage Players

### `/player add`

#### Description

Adds the given player to the queue.

#### Usage: `/player add [user] (role) (team)`

#### Arguments:

`user`: _(Required)_ -.\
`role`: _(Optional)_ Enter the role for the player.\
`team`: _(Optional)_ Enter the team for the player if desired.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/player ban`

#### Description

Bans a player from queuing for the given duration of time.

#### Usage: `/player ban [player] (days) (hours) (minutes) (seconds) (reason)`

#### Arguments:

`player`: _(Required)_ The player to ban.\
`days`: _(Optional)_ Days to ban for.\
`hours`: _(Optional)_ Hours to ban for.\
`minutes`: _(Optional)_ Minutes to ban for.\
`seconds`: _(Optional)_ Seconds to ban for.\
`reason`: _(Optional)_ -.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/player banlist`

#### Description

View the player ban list.

#### Usage: `/player banlist`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/player remove`

#### Description

Removes the given player from the queue.

#### Usage: `/player remove [user]`

#### Arguments:

`user`: _(Required)_ The player.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/player sub`

#### Description

Substitute the first player for the second player.

#### Usage: `/player sub [player1] [player2] (gamenum)`

#### Arguments:

`player1`: _(Required)_ Enter the player to replace.\
`player2`: _(Required)_ Enter the player that will be inserted.\
`gamenum`: _(Optional)_ Game to modify. Can be omitted to use this channels game.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/player unban`

#### Description

Unban the given player from queuing.

#### Usage: `/player unban [player]`

#### Arguments:

`player`: _(Required)_ The player to unban.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Manage Stats

### `/managestats copy`

#### Description

Copies the player stats from the old queue name to the new one.

#### Usage: `/managestats copy [old_name] [new_name]`

#### Arguments:

`old_name`: _(Required)_ Old queue name with stats.\
`new_name`: _(Required)_ New name to copy the stats to. Will overwrite any stats stored there.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/managestats merge`

#### Description

Merges stats from the first queue name into the second queue name.

#### Usage: `/managestats merge [from_queue_name] [to_queue_name] (mmr_merge_strategy)`

#### Arguments:

`from_queue_name`: _(Required)_ Queue to merge stats from.\
`to_queue_name`: _(Required)_ Queue to merge stats into.\
`mmr_merge_strategy`: _(Optional)_ How individual MMRs should be merged together.\
&emsp;&emsp;&emsp; Options: `Maximum, Add Together, Average, Ignore`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/managestats move`

#### Description

Moves the player stats from the old queue name to the new one.

#### Usage: `/managestats move [old_name] [new_name]`

#### Arguments:

`old_name`: _(Required)_ Old queue name with stats.\
`new_name`: _(Required)_ New name to move the stats to. Will overwrite any stats stored there.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/managestats reset all`

#### Description

Resets all stats for all queues, or for the inputted queue name.

#### Usage: `/managestats reset all (queue_name)`

#### Arguments:

`queue_name`: _(Optional)_ The queue name to reset stats for.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/managestats reset mmr`

#### Description

Resets all MMR for all queues, or for the inputted queue name.

#### Usage: `/managestats reset mmr [queue_name]`

#### Arguments:

`queue_name`: _(Required)_ The queue name to reset stats for.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/managestats reset player`

#### Description

Reset the user's data for all queues or a certain queue.

#### Usage: `/managestats reset player [user] (queue_name)`

#### Arguments:

`user`: _(Required)_ Enter the desired user.\
`queue_name`: _(Optional)_ Enter the queue data to remove from. Ignore to delete all data from all queues.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Maps

### `/map add`

#### Description

Adds the given map.

#### Usage: `/map add [map_name] (game_modes) (image_url)`

#### Arguments:

`map_name`: _(Required)_ New map name.\
`game_modes`: _(Optional)_ Comma separated list of game modes for map, if applicable.\
`image_url`: _(Optional)_ Image to show when map selected.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/map bans`

#### Description

Specify the number of map bans per team, or 0 to disable.

#### Usage: `/map bans [bans] (per_team)`

#### Arguments:

`bans`: _(Required)_ Number of bans per team.\
`per_team`: _(Optional)_ If the map bans are team by team.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/map remove`

#### Description

Removes the given map.

#### Usage: `/map remove [map_name]`

#### Arguments:

`map_name`: _(Required)_ The map to remove, or ALL to remove all.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/map reshuffle`

#### Description

Sets whether players can reshuffle maps in random map selection.

#### Usage: `/map reshuffle [toggle]`

#### Arguments:

`toggle`: _(Required)_ Whether reshuffling is enabled or disabled.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/map selection`

#### Description

Choose how maps are selected.

#### Usage: `/map selection [map_choice]`

#### Arguments:

`map_choice`: _(Required)_ Voting, always random, or least common.\
&emsp;&emsp;&emsp; Options: `Vote, Random, Least Frequent`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/map voting`

#### Description

Specify who can vote for map picks and map bans. Defaults to All if no captains.

#### Usage: `/map voting [per_team] [mode]`

#### Arguments:

`per_team`: _(Required)_ If the map vote goes team by team. Team 1 picks first map, Team 2 picks next, ...\
`mode`: _(Required)_ Who can vote.\
&emsp;&emsp;&emsp; Options: `All, Captains`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Match Start

### `/matchstart dmplayers`

#### Description

(Default: Enabled) Send a notification DM to all players when a match starts.

#### Usage: `/matchstart dmplayers [toggle]`

#### Arguments:

`toggle`: _(Required)_ If players are DMed on start.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/matchstart shuffleonstart`

#### Description

(Default: Disabled) Shuffle the player pool on start.

#### Usage: `/matchstart shuffleonstart [mode]`

#### Arguments:

`mode`: _(Required)_ -.\
&emsp;&emsp;&emsp; Options: `Disabled, Lottery, Priority`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/matchstart when`

#### Description

(Default: Either) Start the match when the queue fills, or only when forcestarted.

#### Usage: `/matchstart when [mode]`

#### Arguments:

`mode`: _(Required)_ Condition for starting the match.\
&emsp;&emsp;&emsp; Options: `Queue Filled, Forcestart, Either`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Matchmaking

> The matchmaker works by checking the current queue if there are
> enough players to create a match. A match will only be created if the total range of player MMRs
> is less than the specified matchmaking range. Every 15 seconds, the range will be increased by the
> matchmaking leniency, and the match conditions will be rechecked with this new extended matchmaking range.

### `/matchmaking leniency`

#### Description

Every 15 seconds, how much the range will increase for a better chance at a match.

#### Usage: `/matchmaking leniency [value]`

#### Arguments:

`value`: _(Required)_ How much to increase the range by.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/matchmaking range`

#### Description

The range of MMRs for matches. Tighter range = more waiting and players required.

#### Usage: `/matchmaking range [range]`

#### Arguments:

`range`: _(Required)_ Range of player MMRs.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Messages + Styling

### `/message queuemessage delay`

#### Description

(Default: 3) Sets the delay for when a new queue message comes up.

#### Usage: `/message queuemessage delay [seconds]`

#### Arguments:

`seconds`: _(Required)_ New message delay.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/message queuemessage deletions`

#### Description

(Default: Enabled) Sets whether old queue updates should be deleted.

#### Usage: `/message queuemessage deletions [toggle]`

#### Arguments:

`toggle`: _(Required)_ Toggle between editing queue updates, or sending new messages.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/message queuemessage edits`

#### Description

(Default: Enabled) Set whether queue updates should edit the previous message.

#### Usage: `/message queuemessage edits [toggle]`

#### Arguments:

`toggle`: _(Required)_ Toggle between editing queue updates, or sending new messages.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/message queuemessage history`

#### Description

(Default: Disable) Sets whether to send a new message for every queue interaction.

#### Usage: `/message queuemessage history [toggle]`

#### Arguments:

`toggle`: _(Required)_ Toggle between sending queue join/leaves in the channel.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/message queuemessage sticky`

#### Description

(Default: Enabled) Sets whether the queue message sticks to the bottom of the channel.

#### Usage: `/message queuemessage sticky [toggle]`

#### Arguments:

`toggle`: _(Required)_ Toggle the message being sticky.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/message winnermessage format`

#### Description

Sets the format for the winner message.

#### Usage: `/message winnermessage format [mode]`

#### Arguments:

`mode`: _(Required)_ Formatting type.\
&emsp;&emsp;&emsp; Options: `Detailed, Simple`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/message winnermessage pin`

#### Description

Sets whether the message gets pinned.

#### Usage: `/message winnermessage pin [mode]`

#### Arguments:

`mode`: _(Required)_ Pin mode.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/message winnermessage results`

#### Description

Set who can vote for the result, or if results are fully disabled.

#### Usage: `/message winnermessage results [value]`

#### Arguments:

`value`: _(Required)_ Who can vote, or if the match has no outcome.\
&emsp;&emsp;&emsp; Options: `Default, Staff Only, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/message winnermessage sticky`

#### Description

Sets whether the message sticks to the bottom of chat.

#### Usage: `/message winnermessage sticky [mode]`

#### Arguments:

`mode`: _(Required)_ Sticky mode.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Miscellaneous/Utility

### `/misc mention teamscreated`

#### Description

(Default: Disabled) Mention the players after teams are created.

#### Usage: `/misc mention teamscreated [toggle]`

#### Arguments:

`toggle`: _(Required)_ If the players are mentioned after teams are created.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/misc nametype`

#### Description

Sets whether to use nicknames or discord names (Default: nick).

#### Usage: `/misc nametype [type]`

#### Arguments:

`type`: _(Required)_ The type of names to be used.\
&emsp;&emsp;&emsp; Options: `Discord, Nicknames`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/misc purge`

#### Description

Delete ALL messages in the channel except the queue message if it exists.

#### Usage: `/misc purge`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Mod Channel

### `/staffchannel remove`

#### Description

Remove the set results channel.

#### Usage: `/staffchannel remove`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/staffchannel set`

#### Description

Sets the results channel to send queue history.

#### Usage: `/staffchannel set [channel] (serverwide)`

#### Arguments:

`channel`: _(Required)_ The text channel to send queue history to.\
`serverwide`: _(Optional)_ Should the channel be global for all queues or just this one?.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Modify Player Data

### `/add decaygraceperiod`

#### Description

Add a grace period for a user so they won't be affected by MMR decay.

#### Usage: `/add decaygraceperiod [time] (user) (role)`

#### Arguments:

`time`: _(Required)_ Enter the desired grace period time in seconds.\
`user`: _(Optional)_ The user to modify.\
`role`: _(Optional)_ The role to modify.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/add game`

#### Description

Increment the players games, use a negative number to decrement.

#### Usage: `/add game (games) (user) (role)`

#### Arguments:

`games`: _(Optional)_ Enter the desired games to add.\
`user`: _(Optional)_ The user to modify.\
`role`: _(Optional)_ The role to modify.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/add loss`

#### Description

Increment the players losses, use a negative number to decrement.

#### Usage: `/add loss (losses) (user) (role)`

#### Arguments:

`losses`: _(Optional)_ Enter the desired losses to add.\
`user`: _(Optional)_ The user to modify.\
`role`: _(Optional)_ The role to modify.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/add mmr`

#### Description

Increment the players mmr, use a negative number to decrement.

#### Usage: `/add mmr (mmr) (user) (role)`

#### Arguments:

`mmr`: _(Optional)_ Enter the desired mmr to add.\
`user`: _(Optional)_ The user to modify.\
`role`: _(Optional)_ The role to modify.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/add mvps`

#### Description

Increment the players MVPs, use a negative number to decrement.

#### Usage: `/add mvps [mvps] (user) (role)`

#### Arguments:

`mvps`: _(Required)_ Enter the desired MVPs to add.\
`user`: _(Optional)_ The user to modify.\
`role`: _(Optional)_ The role to modify.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/add peakmmr`

#### Description

Increment the players peak mmr, use a negative number to decrement.

#### Usage: `/add peakmmr [mmr] (user) (role)`

#### Arguments:

`mmr`: _(Required)_ Enter the desired mmr to add.\
`user`: _(Optional)_ The user to modify.\
`role`: _(Optional)_ The role to modify.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/add peakstreak`

#### Description

Increment the players peak streak, use a negative number to decrement.

#### Usage: `/add peakstreak [streak] (user) (role)`

#### Arguments:

`streak`: _(Required)_ Enter the desired streak to add.\
`user`: _(Optional)_ The user to modify.\
`role`: _(Optional)_ The role to modify.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/add points`

#### Description

Increment the players points (not MMR), use a negative number to decrement.

#### Usage: `/add points [points] (user) (role)`

#### Arguments:

`points`: _(Required)_ Enter the desired points to add.\
`user`: _(Optional)_ The user to modify.\
`role`: _(Optional)_ The role to modify.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/add streak`

#### Description

Increment the players streak, use a negative number to decrement.

#### Usage: `/add streak (streak) (user) (role)`

#### Arguments:

`streak`: _(Optional)_ Enter the desired streak to add.\
`user`: _(Optional)_ The user to modify.\
`role`: _(Optional)_ The role to modify.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/add win`

#### Description

Increment the players wins, use a negative number to decrement.

#### Usage: `/add win (wins) (user) (role)`

#### Arguments:

`wins`: _(Optional)_ Enter the desired wins to add.\
`user`: _(Optional)_ The user to modify.\
`role`: _(Optional)_ The role to modify.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/set games`

#### Description

Sets the players games.

#### Usage: `/set games [games] (user) (role)`

#### Arguments:

`games`: _(Required)_ Enter the desired games.\
`user`: _(Optional)_ The user to modify.\
`role`: _(Optional)_ The role to modify.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/set ign`

#### Description

Sets the players IGN (used in `/register` or `/ign`).

#### Usage: `/set ign [account] (user) (role)`

#### Arguments:

`account`: _(Required)_ Enter the desired IGN, or 'none' to remove.\
`user`: _(Optional)_ The user to modify.\
`role`: _(Optional)_ The role to modify.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/set losses`

#### Description

Sets the players losses.

#### Usage: `/set losses [losses] (user) (role)`

#### Arguments:

`losses`: _(Required)_ Enter the desired losses.\
`user`: _(Optional)_ The user to modify.\
`role`: _(Optional)_ The role to modify.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/set mmr`

#### Description

Sets the players mmr.

#### Usage: `/set mmr [mmr] (user) (role)`

#### Arguments:

`mmr`: _(Required)_ Enter the desired mmr.\
`user`: _(Optional)_ The user to modify.\
`role`: _(Optional)_ The role to modify.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/set mvps`

#### Description

Sets the players MVPs.

#### Usage: `/set mvps [mvps] (user) (role)`

#### Arguments:

`mvps`: _(Required)_ The new MVPs amount.\
`user`: _(Optional)_ The user to modify.\
`role`: _(Optional)_ The role to modify.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/set peakmmr`

#### Description

Sets the players peak mmr.

#### Usage: `/set peakmmr [mmr] (user) (role)`

#### Arguments:

`mmr`: _(Required)_ Enter the desired mmr.\
`user`: _(Optional)_ The user to modify.\
`role`: _(Optional)_ The role to modify.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/set peakstreak`

#### Description

Sets the players peak streak.

#### Usage: `/set peakstreak [streak] (user) (role)`

#### Arguments:

`streak`: _(Required)_ Enter the desired streak.\
`user`: _(Optional)_ The user to modify.\
`role`: _(Optional)_ The role to modify.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/set points`

#### Description

Sets the players points (not MMR).

#### Usage: `/set points [points] (user) (role)`

#### Arguments:

`points`: _(Required)_ The new points amount.\
`user`: _(Optional)_ The user to modify.\
`role`: _(Optional)_ The role to modify.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/set streak`

#### Description

Sets the players streak.

#### Usage: `/set streak [streak] (user) (role)`

#### Arguments:

`streak`: _(Required)_ Enter the desired streak.\
`user`: _(Optional)_ The user to modify.\
`role`: _(Optional)_ The role to modify.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/set wins`

#### Description

Sets the players wins.

#### Usage: `/set wins [wins] (user) (role)`

#### Arguments:

`wins`: _(Required)_ Enter the desired wins.\
`user`: _(Optional)_ The user to modify.\
`role`: _(Optional)_ The role to modify.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Number Of Lobbies

### `/numberoflobbies`

#### Description

(Default: 1) Sets the number of lobbies to create.

#### Usage: `/numberoflobbies [lobbies]`

#### Arguments:

`lobbies`: _(Required)_ The number of lobbies.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Number Of Teams

### `/numberofteams`

#### Description

(Default: 2) Sets the number of teams.

#### Usage: `/numberofteams [number]`

#### Arguments:

`number`: _(Required)_ The number of teams.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Party Queue

### `/partyqueue maxsize`

#### Description

Set the max party size that can enter the queue.

#### Usage: `/partyqueue maxsize (max_size)`

#### Arguments:

`max_size`: _(Optional)_ The max party size, or omit to remove.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/partyqueue preventoverfill`

#### Description

(Default: Enabled) Prevent a party from joining queue if it over-fills the queue.

#### Usage: `/partyqueue preventoverfill [toggle]`

#### Arguments:

`toggle`: _(Required)_ If parties can overfill a queue.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/partyqueue toggle`

#### Description

Enable party queue, allowing players to create parties with `/party` before joining.

#### Usage: `/partyqueue toggle [toggle]`

#### Arguments:

`toggle`: _(Required)_ Enable or disable party queue.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Predictions

### `/points change loss`

#### Description

(Default: 100) Set how many points players gain for a loss (not MMR).

#### Usage: `/points change loss [value]`

#### Arguments:

`value`: _(Required)_ Points for a loss.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/points change win`

#### Description

(Default: 100) Set how many points players gain for a win (not MMR).

#### Usage: `/points change win [value]`

#### Arguments:

`value`: _(Required)_ Points for a win.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/points maximum`

#### Description

Sets the highest number of points a player can reach.

#### Usage: `/points maximum (points)`

#### Arguments:

`points`: _(Optional)_ Enter the peak points, or omit to reset.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/points minimum`

#### Description

Sets the lowest number of points a player can reach.

#### Usage: `/points minimum (points)`

#### Arguments:

`points`: _(Optional)_ Enter the lowest points value, or omit to reset.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/points multipliers remove`

#### Description

Remove the points multiplier for the given role.

#### Usage: `/points multipliers remove [role]`

#### Arguments:

`role`: _(Required)_ Role to remove multiplier for.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/points multipliers set`

#### Description

Sets the points multiplier for the given role.

#### Usage: `/points multipliers set [role] [multiplier]`

#### Arguments:

`role`: _(Required)_ -.\
`multiplier`: _(Required)_ Multiplier value. (Ex: 1.2 for a 20% boost).

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/points startingvalue`

#### Description

(Default: 0) Set how many points players start with (not MMR).

#### Usage: `/points startingvalue [value]`

#### Arguments:

`value`: _(Required)_ Starting points value.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/predictions channel`

#### Description

Specify the channel to show predictions.

#### Usage: `/predictions channel [channel]`

#### Arguments:

`channel`: _(Required)_ The predictions channel.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/predictions role`

#### Description

Role to ping when a prediction opens.

#### Usage: `/predictions role [role]`

#### Arguments:

`role`: _(Required)_ Role to ping.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/predictions timer`

#### Description

Specify the duration the prediction lasts before closing.

#### Usage: `/predictions timer [timer]`

#### Arguments:

`timer`: _(Required)_ (Default: 180) Prediction length in seconds.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/predictions toggle`

#### Description

Specify the channel to show predictions.

#### Usage: `/predictions toggle [toggle]`

#### Arguments:

`toggle`: _(Required)_ If predictions are enabled or disabled.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Queue Entry Methods

### `/queueentry channel set`

#### Description

(BETA) Add players to the queue when they join the voice channel.

#### Usage: `/queueentry channel set (channel)`

#### Arguments:

`channel`: _(Optional)_ Queue entry voice channel, or omit to remove.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/queueentry methods`

#### Description

(BETA) Specify how players can join the queue.

#### Usage: `/queueentry methods [modes]`

#### Arguments:

`modes`: _(Required)_ The methods players can use to join the queue.\
&emsp;&emsp;&emsp; Options: `Buttons, Voice Channel, Either`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Queue Name

### `/queuename`

#### Description

Sets the name for this queue. All stats are tied to the queue name.

#### Usage: `/queuename [name]`

#### Arguments:

`name`: _(Required)_ New queue name.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Queue Type

### `/queuetype`

#### Description

Select the type of queue to run. See docs for detailed explanations.

#### Usage: `/queuetype [type]`

#### Arguments:

`type`: _(Required)_ The type of queue.\
&emsp;&emsp;&emsp; Options: `PUGs/Normal Individual Queue, Matchmaking, Full Team vs Full Team, Select Team On Join`

> PUGs/Normal Individual Queue: The default queue setup, players join individually to get put into a match when the queue is filled.
> Matchmaking: Players join the queue, and once there are enough players within their MMR range, a match is created.
> Full Team vs Full Team: Captains join the queue and pull in the entire team. No team setup is required.
> Select Team On Join: The queue has join buttons for each team, no team setup is required.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Ranks/Automatically Assign Discord Roles

### `/autoroles copy`

#### Description

Copies the auto roles config to the desired channel.

#### Usage: `/autoroles copy [channel]`

#### Arguments:

`channel`: _(Required)_ Channel with queue to copy autoroles config to.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/autoroles games remove`

#### Description

Removes a condition where player roles are changed based on losses.

#### Usage: `/autoroles games remove [role]`

#### Arguments:

`role`: _(Required)_ Enter the role.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/autoroles games set`

#### Description

(Ranks) Adds a condition in which player roles are changed based on games.

#### Usage: `/autoroles games set [role] [lower_value] [upper_value] (only_one_allowed)`

#### Arguments:

`role`: _(Required)_ Enter the role to give/remove.\
`lower_value`: _(Required)_ The lowest number of games required to gain the role.\
`upper_value`: _(Required)_ The upper number of games to lose the role.\
`only_one_allowed`: _(Optional)_ (Default: True) If this role is assigned, no other games autoroles will be allowed.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/autoroles ingame`

#### Description

Assign a role to players who are in a match that is removed after.

#### Usage: `/autoroles ingame (role)`

#### Arguments:

`role`: _(Optional)_ Enter the role, or omit to remove.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/autoroles inqueue`

#### Description

Assign a role to players who are in the queue.

#### Usage: `/autoroles inqueue (role)`

#### Arguments:

`role`: _(Optional)_ Enter the role, or omit to remove.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/autoroles losses remove`

#### Description

Removes a condition where player roles are changed based on losses.

#### Usage: `/autoroles losses remove [role]`

#### Arguments:

`role`: _(Required)_ Enter the role.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/autoroles losses set`

#### Description

(Ranks) Adds a condition in which player roles are changed based on losses.

#### Usage: `/autoroles losses set [role] [lower_value] [upper_value] (only_one_allowed)`

#### Arguments:

`role`: _(Required)_ Enter the role to give/remove.\
`lower_value`: _(Required)_ The lowest number of losses required to gain the role.\
`upper_value`: _(Required)_ The upper number of losses to lose the role.\
`only_one_allowed`: _(Optional)_ (Default: True) If this role is assigned, no other loss autoroles will be allowed.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/autoroles mmr remove`

#### Description

Removes a condition where player roles are changed based on MMR.

#### Usage: `/autoroles mmr remove [role]`

#### Arguments:

`role`: _(Required)_ Enter the role.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/autoroles mmr set`

#### Description

(Ranks) Adds a condition in which player roles are changed based on MMR.

#### Usage: `/autoroles mmr set [role] [lower_rating] [upper_rating] (lower_lose_rating) (only_one_allowed)`

#### Arguments:

`role`: _(Required)_ Enter the role to give/remove.\
`lower_rating`: _(Required)_ The lowest MMR required to gain the role.\
`upper_rating`: _(Required)_ The upper MMR rating to lose the role.\
`lower_lose_rating`: _(Optional)_ (Default: lower_rating) The MMR the player must fall below to lose the role.\
`only_one_allowed`: _(Optional)_ (Default: True) If this role is assigned, no other MMR autoroles will be allowed.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/autoroles notify`

#### Description

Toggle sending a DM to players when their rank autorole changes.

#### Usage: `/autoroles notify [toggle]`

#### Arguments:

`toggle`: _(Required)_ If players get a DM for role/rank changes.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/autoroles points remove`

#### Description

Removes a condition where player roles are changed based on Points.

#### Usage: `/autoroles points remove [role]`

#### Arguments:

`role`: _(Required)_ Enter the role.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/autoroles points set`

#### Description

(Ranks) Adds a condition in which player roles are changed based on points.

#### Usage: `/autoroles points set [role] [lower_value] [upper_value] (only_one_allowed)`

#### Arguments:

`role`: _(Required)_ Enter the role to give/remove.\
`lower_value`: _(Required)_ The lowest number of points required to gain the role.\
`upper_value`: _(Required)_ The upper number of points to lose the role.\
`only_one_allowed`: _(Optional)_ (Default: True) If this role is assigned, no other Point autoroles will be allowed.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/autoroles refresh`

#### Description

Recalculates all autoroles for players.

#### Usage: `/autoroles refresh`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/autoroles reset`

#### Description

Delete all auto role settings.

#### Usage: `/autoroles reset`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/autoroles topplayers remove`

#### Description

Removes a top player role.

#### Usage: `/autoroles topplayers remove [role]`

#### Arguments:

`role`: _(Required)_ Enter the role.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/autoroles topplayers set`

#### Description

Conditionally add/remove a role based on leaderboard position.

#### Usage: `/autoroles topplayers set [role] [number]`

#### Arguments:

`role`: _(Required)_ Enter the role for the top players.\
`number`: _(Required)_ Enter the number of players who can have this role.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/autoroles wins remove`

#### Description

Removes a condition where player roles are changed based on wins.

#### Usage: `/autoroles wins remove [role]`

#### Arguments:

`role`: _(Required)_ Enter the role.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/autoroles wins set`

#### Description

(Ranks) Adds a condition in which player roles are changed based on wins.

#### Usage: `/autoroles wins set [role] [lower_value] [upper_value] (only_one_allowed)`

#### Arguments:

`role`: _(Required)_ Enter the role to give/remove.\
`lower_value`: _(Required)_ The lowest number of wins required to gain the role.\
`upper_value`: _(Required)_ The upper number of wins to lose the role.\
`only_one_allowed`: _(Optional)_ (Default: True) If this role is assigned, no other wins autoroles will be allowed.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Reaction Roles

### `/reactionroles add`

#### Description

Specify roles to assign when users react to the message.

#### Usage: `/reactionroles add [channel] [message_id] [role] [reaction] (remove_others) (queue_role)`

#### Arguments:

`channel`: _(Required)_ Channel where message is.\
`message_id`: _(Required)_ Message to add reaction to.\
`role`: _(Required)_ Role to assign/remove.\
`reaction`: _(Required)_ Reaction that corresponds to this role.\
`remove_others`: _(Optional)_ If the user has this role, remove all other reactionroles in the message they have.\
`queue_role`: _(Optional)_ Option role for `/roles` that the user will default to.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Ready Up

### `/readyup mode`

#### Description

How players indicate they are ready to play a match.

#### Usage: `/readyup mode [mode]`

#### Arguments:

`mode`: _(Required)_ How players show they are ready.\
&emsp;&emsp;&emsp; Options: `Ready Up Button, Join Lobby Voice Channel, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Rematch

### `/rematches`

#### Description

(Default: true) Toggle the ability to rematch.

#### Usage: `/rematches [toggle]`

#### Arguments:

`toggle`: _(Required)_ If you want rematches to be enabled or disabled.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Requeue

> For queue types that always start when reaching the queue size,
> requeue priority won't appear to make any changes.
> However, there are two specific queue starting modes where it will matter:
>
> 1. `/queuetype Matchmaking`: When the matchmaker is running, it will use the overall sum of all player priorities,
>    and use this value to increase the matchmaking range. For example, if the matchmaking range is 300 MMR, but there are
>    two players with 100 priority each, the matchmaking range for that attempted match creation will be 500 MMR,
>    making it more likely for that match to be created. If you want players with priority to ALWAYS be in the match, you
>    can give them a very large priority (like 100,000), which ensures the matchmaker always considers their match as valid.
> 2. `/misc startwhen Forcestarted`: When matches can only be forcestarted, the number of players can exceed the maximum
>    queue size. Players who join the queue with priority will take precedence in the queue over lower priority players.

### `/requeue condition`

#### Description

Sets the condition for letting a player requeue.

#### Usage: `/requeue condition [condition]`

#### Arguments:

`condition`: _(Required)_ Condition that must be met to requeue.\
&emsp;&emsp;&emsp; Options: `Must Vote, Winner Selected, None`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/requeue delay`

#### Description

Delay people from queuing for the given duration after the condition is met.

#### Usage: `/requeue delay [seconds]`

#### Arguments:

`seconds`: _(Required)_ Seconds to delay from queuing.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/requeue matchcancelled`

#### Description

Specify if players get automatically requeued if a match is cancelled.

#### Usage: `/requeue matchcancelled [mode]`

#### Arguments:

`mode`: _(Required)_ If requeue is automatic.\
&emsp;&emsp;&emsp; Options: `Disabled, Automatic`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/requeue priority`

#### Description

Give priority to players who requeue after a match.

#### Usage: `/requeue priority (value) (seconds)`

#### Arguments:

`value`: _(Optional)_ (Default: 0) How much priority value to give.\
`seconds`: _(Optional)_ (Default: 300) How many seconds to give this temporary priority value for.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/requeue priorityrole add`

#### Description

Allow players with the given role to gain priority for requeue.

#### Usage: `/requeue priorityrole add [role] (value)`

#### Arguments:

`role`: _(Required)_ Priority role.\
`value`: _(Optional)_ (Default: 100) Priority value to assign.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/requeue priorityrole remove`

#### Description

Allow players with the given role to gain priority for requeue.

#### Usage: `/requeue priorityrole remove [role]`

#### Arguments:

`role`: _(Required)_ Priority role.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Require IGN

### `/requireign`

#### Description

(Default: false) Require if players must set their IGN before they can queue.

#### Usage: `/requireign [toggle]`

#### Arguments:

`toggle`: _(Required)_ If you want to require that users set their IGN.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Required Votes

### `/requiredvotes cancel`

#### Description

Sets the number of votes required for cancelling a game.

#### Usage: `/requiredvotes cancel [type]`

#### Arguments:

`type`: _(Required)_ The type of voting requirement to be used.\
&emsp;&emsp;&emsp; Options: `Half, Majority, One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/requiredvotes default`

#### Description

Sets the default number of votes required.

#### Usage: `/requiredvotes default [type]`

#### Arguments:

`type`: _(Required)_ The type of voting requirement to be used.\
&emsp;&emsp;&emsp; Options: `Half, Majority, One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/requiredvotes forcestart`

#### Description

Sets the number of votes required for forcestarting a game.

#### Usage: `/requiredvotes forcestart [type]`

#### Arguments:

`type`: _(Required)_ The type of voting requirement to be used.\
&emsp;&emsp;&emsp; Options: `Half, Majority, One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/requiredvotes mvp`

#### Description

Sets the number of votes required for getting MVP.

#### Usage: `/requiredvotes mvp [type]`

#### Arguments:

`type`: _(Required)_ The type of voting requirement to be used.\
&emsp;&emsp;&emsp; Options: `Half, Majority, One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/requiredvotes winner`

#### Description

Sets the number of votes required for picking a winner.

#### Usage: `/requiredvotes winner [type]`

#### Arguments:

`type`: _(Required)_ The type of voting requirement to be used.\
&emsp;&emsp;&emsp; Options: `Half, Majority, One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Requirements

### `/bannedroles add`

#### Description

Add a banned role which can't join the queue.

#### Usage: `/bannedroles add [role]`

#### Arguments:

`role`: _(Required)_ Enter the banned role.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/bannedroles remove`

#### Description

Removed a banned role.

#### Usage: `/bannedroles remove [role]`

#### Arguments:

`role`: _(Required)_ Enter the banned role.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/rolerequirement add`

#### Description

Add a required role to enter this queue. Players can join if they have any of the roles.

#### Usage: `/rolerequirement add [role]`

#### Arguments:

`role`: _(Required)_ Enter the required role.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/rolerequirement remove`

#### Description

Removed a required role to enter this queue.

#### Usage: `/rolerequirement remove [role]`

#### Arguments:

`role`: _(Required)_ Enter the required role.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Results Channel

### `/resultschannel`

#### Description

Sets the channel to post match results.

#### Usage: `/resultschannel [channel]`

#### Arguments:

`channel`: _(Required)_ Enter the desired channel.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Roles

### `/roles`

#### Description

(Default: None) Sets the roles for this queue, or omit to remove all.

#### Usage: `/roles (roles) (required)`

#### Arguments:

`roles`: _(Optional)_ Enter the roles in the form Role,Role,Role,etc.\
`required`: _(Optional)_ If roles are required to be chosen and enforced.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Schedule

### `/schedule cancelsetup`

#### Description

(BETA) Cancels your currently active schedule setup.

#### Usage: `/schedule cancelsetup`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/schedule delete`

#### Description

(BETA) Delete a previously scheduled command.

#### Usage: `/schedule delete [scheduled_command]`

#### Arguments:

`scheduled_command`: _(Required)_ The scheduled command to remove.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/schedule repeat`

#### Description

(BETA) Toggle if the scheduled command should repeat each time daily.

#### Usage: `/schedule repeat [scheduled_command] (repeat)`

#### Arguments:

`scheduled_command`: _(Required)_ -.\
`repeat`: _(Optional)_ If times should repeat after execution.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/schedule setup`

#### Description

(BETA) Start scheduling the execution of any NeatQueue command.

#### Usage: `/schedule setup`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/schedule time add`

#### Description

(BETA) Specify an execution time for the scheduled command.

#### Usage: `/schedule time add [scheduled_command] [time] (timezone)`

#### Arguments:

`scheduled_command`: _(Required)_ The scheduled command to add an execution time for.\
`time`: _(Required)_ Time for the command to be executed.\
`timezone`: _(Optional)_ (Default: /timezone) Respective timezone for the inputted time.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/schedule time list`

#### Description

(BETA) List the scheduled times for the command.

#### Usage: `/schedule time list [scheduled_command]`

#### Arguments:

`scheduled_command`: _(Required)_ The scheduled command to list execution times.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/schedule time remove`

#### Description

(BETA) Remove an execution time for the scheduled command.

#### Usage: `/schedule time remove [scheduled_command] [time]`

#### Arguments:

`scheduled_command`: _(Required)_ The scheduled command to remove an execution time for.\
`time`: _(Required)_ Time for the command to be executed.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Select Winner

### `/outcome cancel`

#### Description

Cancel the given game.

#### Usage: `/outcome cancel [match_number]`

#### Arguments:

`match_number`: _(Required)_ The match number.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/outcome selectwinner`

#### Description

Sets the winner for the given game.

#### Usage: `/outcome selectwinner [match_number] [team_num]`

#### Arguments:

`match_number`: _(Required)_ The match number.\
`team_num`: _(Required)_ The team that won.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/outcome tie`

#### Description

Mark the given game as a tie.

#### Usage: `/outcome tie [match_number]`

#### Arguments:

`match_number`: _(Required)_ The match number.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Server Stats

### `/serverstats channelnames games`

#### Description

Show how many games have been played by renaming the specified channel.

#### Usage: `/serverstats channelnames games (channel) (format)`

#### Arguments:

`channel`: _(Optional)_ Channel to rename, or omit to remove.\
`format`: _(Optional)_ Format for channel name. Indicate a $ for the replacement. Ex: "Games: $".

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/serverstats channelnames ingame`

#### Description

Show how many players are in game by renaming the specified channel.

#### Usage: `/serverstats channelnames ingame (channel) (format)`

#### Arguments:

`channel`: _(Optional)_ Channel to rename, or omit to remove.\
`format`: _(Optional)_ Format for channel name. Indicate a $ for the replacement. Ex: "In Game: $".

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/serverstats channelnames inqueue`

#### Description

Show how many players are in queue by renaming the specified channel.

#### Usage: `/serverstats channelnames inqueue (channel) (format)`

#### Arguments:

`channel`: _(Optional)_ Channel to rename, or omit to remove.\
`format`: _(Optional)_ Format for channel name. Indicate a $ for the replacement. Ex: "In Queue: $".

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/serverstats channelnames players`

#### Description

Show the total number of players by renaming the specified channel.

#### Usage: `/serverstats channelnames players (channel) (format)`

#### Arguments:

`channel`: _(Optional)_ Channel to rename, or omit to remove.\
`format`: _(Optional)_ Format for channel name. Indicate a $ for the replacement. Ex: "Players: $".

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/serverstats channelnames users`

#### Description

Show how many users are in the server by renaming the specified channel.

#### Usage: `/serverstats channelnames users (channel) (format)`

#### Arguments:

`channel`: _(Optional)_ Channel to rename, or omit to remove.\
`format`: _(Optional)_ Format for channel name. Indicate a $ for the replacement. Ex: "Users: $".

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/serverstats info`

#### Description

View all queue names in the server.

#### Usage: `/serverstats info (hidden)`

#### Arguments:

`hidden`: _(Optional)_ If you want the stats to be hidden.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Setup

### `/setup`

#### Description

Starts the interactive setup.

#### Usage: `/setup`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Show MMR in Name

### `/ratinginname format`

#### Description

(Default: '- ($)') Sets the format for ratings in nicknames.

#### Usage: `/ratinginname format [format] [location]`

#### Arguments:

`format`: _(Required)_ How the rating should be formatted. A '$' indicates the player's rating.\
`location`: _(Required)_ -.\
&emsp;&emsp;&emsp; Options: `Prefix, Suffix`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/ratinginname queuenames`

#### Description

Sets the queue names to use in retrieving player stats, or omit to reset.

#### Usage: `/ratinginname queuenames (names)`

#### Arguments:

`names`: _(Optional)_ The queue names separated by ',' to use for inserting ratings into '$' indicators in the format.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/ratinginname removeallnicknames`

#### Description

Removes all nicknames from all members.

#### Usage: `/ratinginname removeallnicknames`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/ratinginname toggle`

#### Description

Enable or disable showing player MMR in their nickname.

#### Usage: `/ratinginname toggle [toggle]`

#### Arguments:

`toggle`: _(Required)_ If ratings should be shown in name.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Simulate

### `/simulate`

#### Description

Simulate the MMR distribution for the current configuration.

#### Usage: `/simulate (players) (matches)`

#### Arguments:

`players`: _(Optional)_ The number of players to simulate.\
`matches`: _(Optional)_ The number of matches to simulate.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Spectator Role

### `/spectatorrole add`

#### Description

Specify a spectator role which can join any voice channel.

#### Usage: `/spectatorrole add [role] (can_speak)`

#### Arguments:

`role`: _(Required)_ Spectator role.\
`can_speak`: _(Optional)_ Can this role speak in the channel?.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/spectatorrole remove`

#### Description

Remove's a spectator role.

#### Usage: `/spectatorrole remove [role]`

#### Arguments:

`role`: _(Required)_ Spectator role.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Staff

### `/staffrole add`

#### Description

Add a staff role that grants access to commands.

#### Usage: `/staffrole add [role] [template]`

#### Arguments:

`role`: _(Required)_ Staff role.\
`template`: _(Required)_ If the role gets access to all commands or not.\
&emsp;&emsp;&emsp; Options: `User Commands Only, All Commands`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/staffrole command allow`

#### Description

Grants the staff role access to the given command.

#### Usage: `/staffrole command allow [role] [command]`

#### Arguments:

`role`: _(Required)_ Staff role.\
`command`: _(Required)_ The command to grant access to.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/staffrole command deny`

#### Description

Removes the staff role's access to the given command.

#### Usage: `/staffrole command deny [role] [command]`

#### Arguments:

`role`: _(Required)_ Staff role.\
`command`: _(Required)_ The command to remove access from.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/staffrole list`

#### Description

List all configured staff roles.

#### Usage: `/staffrole list`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/staffrole remove`

#### Description

Remove a staff role.

#### Usage: `/staffrole remove [role]`

#### Arguments:

`role`: _(Required)_ Staff role.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/staffrole reset`

#### Description

Resets the staff role to starting permissions.

#### Usage: `/staffrole reset [role]`

#### Arguments:

`role`: _(Required)_ Staff role.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Start From Voice Channel

### `/startfromvc`

#### Description

Creates a queue using all players in the given channel.

#### Usage: `/startfromvc [voice_channel]`

#### Arguments:

`voice_channel`: _(Required)_ The voice channel to start a queue from.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Start Queue

### `/startqueue`

#### Description

Starts a queue for the current channel.

#### Usage: `/startqueue [queuename] [teamsize] (numberofteams)`

#### Arguments:

`queuename`: _(Required)_ Name for the queue.\
`teamsize`: _(Required)_ Team size.\
`numberofteams`: _(Optional)_ Number of teams in a match.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Starting MMR

### `/startingmmr remove`

#### Description

Removes the starting mmr for the given role.

#### Usage: `/startingmmr remove [role]`

#### Arguments:

`role`: _(Required)_ The role to remove starting MMR from.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/startingmmr set`

#### Description

Sets the starting mmr for the given role.

#### Usage: `/startingmmr set [mmr] (role)`

#### Arguments:

`mmr`: _(Required)_ The starting mmr value.\
`role`: _(Optional)_ The role.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Stats

### `/hidestats`

#### Description

Sets whether stats are forced to be hidden (only shown to the user).

#### Usage: `/hidestats [toggle]`

#### Arguments:

`toggle`: _(Required)_ If you want the stats to be always hidden.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/statsbutton`

#### Description

Send a button that allows players to show their stats.

#### Usage: `/statsbutton`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Team Creation

### `/teamselection reshuffle`

#### Description

Sets whether players can reshuffle teams in random team selection.

#### Usage: `/teamselection reshuffle [toggle]`

#### Arguments:

`toggle`: _(Required)_ Whether reshuffling is enabled or disabled.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/teamselection set`

#### Description

Choose how teams will be picked.

#### Usage: `/teamselection set`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Team Names

### `/teamnames captains`

#### Description

If team names should be the captains names, if applicable.

#### Usage: `/teamnames captains [toggle]`

#### Arguments:

`toggle`: _(Required)_ Toggle team names being the captain's names.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/teamnames set`

#### Description

Specify the names of each team, or omit for the default behavior..

#### Usage: `/teamnames set (team_names)`

#### Arguments:

`team_names`: _(Optional)_ Comma separated list of team names. Ex: Team 1,Team 2,...

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Team Size

### `/teamsize`

#### Description

Sets the size for each team.

#### Usage: `/teamsize [size]`

#### Arguments:

`size`: _(Required)_ The team size.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Temporary Setup Channels

### `/tempchannels name`

#### Description

(Default: queue-$) Naming format for temporary setup channels.

#### Usage: `/tempchannels name [name_format]`

#### Arguments:

`name_format`: _(Required)_ Channel format, where $ will be replaced with the match number.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/tempchannels permissions set`

#### Description

Specify a permission to set for a role when creating the temporary channel.

#### Usage: `/tempchannels permissions set [role] [permission] [value]`

#### Arguments:

`role`: _(Required)_ Role to modify permissions for.\
`permission`: _(Required)_ Permission name.\
`value`: _(Required)_ Permission value.\
&emsp;&emsp;&emsp; Options: `Deny, Allow, Default`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/tempchannels toggle`

#### Description

(Default: Enabled) Sets whether to create a temporary text channel for setup.

#### Usage: `/tempchannels toggle [mode]`

#### Arguments:

`mode`: _(Required)_ If the temporary setup channels are enabled.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/tempchannels type`

#### Description

(Default: Text Channels) Specify if the temp channels are threads or normal channels.

#### Usage: `/tempchannels type [type]`

#### Arguments:

`type`: _(Required)_ If the new channels should be text channels, or threads of this channel.\
&emsp;&emsp;&emsp; Options: `Text Channels, Threads`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Test

### `/test`

#### Description

Enables testing mode which allows for duplicate queue joining.

#### Usage: `/test`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Ties

### `/ties`

#### Description

Sets whether tieing is an option for game outcomes.

#### Usage: `/ties [toggle]`

#### Arguments:

`toggle`: _(Required)_ Whether to show the tie option.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Timers

### `/timer afk`

#### Description

Toggle kicking players for inactivity.

#### Usage: `/timer afk [toggle] (timer)`

#### Arguments:

`toggle`: _(Required)_ Toggle.\
`timer`: _(Optional)_ Enter the AFK timer in seconds (Default: 3600).

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/timer matchcleanup`

#### Description

(Default: 5400) Sets the timeout before a running game is finished.

#### Usage: `/timer matchcleanup [seconds]`

#### Arguments:

`seconds`: _(Required)_ Enter the time in SECONDS.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/timer queuemessage`

#### Description

(Default: 3) Sets the delay for when a new queue message comes up.

#### Usage: `/timer queuemessage [seconds]`

#### Arguments:

`seconds`: _(Required)_ New message delay.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/timer queuereset`

#### Description

(Default: 3600) Sets the time before the queue is reset.

#### Usage: `/timer queuereset [seconds]`

#### Arguments:

`seconds`: _(Required)_ Enter the time in SECONDS.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/timer votes`

#### Description

(Default: 60) Sets the timeout for voting menus.

#### Usage: `/timer votes [seconds]`

#### Arguments:

`seconds`: _(Required)_ -.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/timer winnervotemessage`

#### Description

(Default: 0) Sets the delay before enabling the winner voting message.

#### Usage: `/timer winnervotemessage [seconds]`

#### Arguments:

`seconds`: _(Required)_ Enter the time in SECONDS.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Timezone

### `/timezone`

#### Description

(Default: 'US/Eastern') Sets the server's timezone.

#### Usage: `/timezone [timezone]`

#### Arguments:

`timezone`: _(Required)_ Server's timezone.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Tournaments

### `/tournament account`

#### Description

Link your server to challonge using your username and api key.

#### Usage: `/tournament account [challonge_username] [challonge_api_key]`

#### Arguments:

`challonge_username`: _(Required)_ Challonge username.\
`challonge_api_key`: _(Required)_ Challonge API Key from https://challonge.com/settings/developer.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/tournament config autocreatematches`

#### Description

(BETA) Toggle automatically creating new matches when ready.

#### Usage: `/tournament config autocreatematches [mode]`

#### Arguments:

`mode`: _(Required)_ Toggle automatically creating matches.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/tournament config autostartonfill`

#### Description

(BETA) Toggle automatically starting the tournament when filled.

#### Usage: `/tournament config autostartonfill [mode]`

#### Arguments:

`mode`: _(Required)_ Toggle automatically starting on fill.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/tournament config details`

#### Description

(BETA) Change the tournament details shown in the queue message.

#### Usage: `/tournament config details (details)`

#### Arguments:

`details`: _(Optional)_ Tournament details, or omit to remove.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/tournament create`

#### Description

(BETA) Create a new tournament and shows signup buttons.

#### Usage: `/tournament create [maximum_participants] (tournament_type) (auto_start_on_fill) (auto_create_matches) (team_size) (name) (url) (details) (forfeit_timer_sec) (hold_third_place_match)`

#### Arguments:

`maximum_participants`: _(Required)_ Maximum number of teams that can register.\
`tournament_type`: _(Optional)_ Tournament type.\
&emsp;&emsp;&emsp; Options: `single_elimination, double_elimination, round_robin, swiss`\
`auto_start_on_fill`: _(Optional)_ Automatically start the tournament when the participant capacity is hit.\
`auto_create_matches`: _(Optional)_ If the bot should automatically create matches when ready.\
`team_size`: _(Optional)_ Number of players on each team.\
`name`: _(Optional)_ The tournament name, also the name of the queue/stats storage for determining seeding.\
`url`: _(Optional)_ Challonge tournament URL, or omit to auto generate.\
`details`: _(Optional)_ Any extra details to show in the queue message.\
`forfeit_timer_sec`: _(Optional)_ How longer players have to join the match (in seconds) before forfeiting.\
`hold_third_place_match`: _(Optional)_ If a third place match should be played for single elimination tournaments.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/tournament delete`

#### Description

(BETA) Deletes the tournament.

#### Usage: `/tournament delete`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/tournament refresh`

#### Description

(BETA) Refresh necessary data from challonge and start any required matches.

#### Usage: `/tournament refresh`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/tournament start`

#### Description

(BETA) Start the tournament.

#### Usage: `/tournament start`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/tournament startmatches`

#### Description

(BETA) Starts the next set of ready matches.

#### Usage: `/tournament startmatches`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Voice Channel Mode

### `/voicechannels moveteam`

#### Description

(Default: After All Setup) Sets when to move players to team voice channels.

#### Usage: `/voicechannels moveteam [when]`

#### Arguments:

`when`: _(Required)_ When to move players to team channels.\
&emsp;&emsp;&emsp; Options: `After All Setup, After Teams Created`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/voicechannels permissions set`

#### Description

Specify a permission to set for a role when creating voice channels.

#### Usage: `/voicechannels permissions set [role] [permission] [value]`

#### Arguments:

`role`: _(Required)_ Role to modify permissions for.\
`permission`: _(Required)_ Permission name.\
`value`: _(Required)_ Permission value.\
&emsp;&emsp;&emsp; Options: `Deny, Allow, Default`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/voicechannels teamchannels`

#### Description

(Default: Enabled) Toggle creating separate voice channels for each team.

#### Usage: `/voicechannels teamchannels [toggle]`

#### Arguments:

`toggle`: _(Required)_ If channels are created per team.\
&emsp;&emsp;&emsp; Options: `Enabled, Disabled`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Voting Menu

### `/votingmenu add`

#### Description

Add a new voting menu.

#### Usage: `/votingmenu add [title] [options] [key] [team_voting] (order) (button_colors) (show_numbers) (allow_random) (force_random) (number_of_votes)`

#### Arguments:

`title`: _(Required)_ (Ex: Vote for the Region) The title for the vote.\
`options`: _(Required)_ (Ex: NA,EU) Comma separated list of options. Ignored if options_variable exists with values.\
`key`: _(Required)_ (Ex: Region Name) The key for this vote for displaying the result after.\
`team_voting`: _(Required)_ Is the vote once per team, once for all teams, or for a specific team?.\
`order`: _(Optional)_ (Ex: 1) The order for this vote in regard to other votes. Votes will occur in ascending order.\
`button_colors`: _(Optional)_ (Ex: blurple,red) Comma separated list of button colors. Valid options: blurple, gray, green, red.\
`show_numbers`: _(Optional)_ If each option should have a number associated with it when displayed.\
`allow_random`: _(Optional)_ If a 'random' option is included in the vote.\
`force_random`: _(Optional)_ If you want to skip the vote altogether and just pick a random option.\
`number_of_votes`: _(Optional)_ Number of votes per player.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/votingmenu remove`

#### Description

Remove the given voting menu.

#### Usage: `/votingmenu remove [title_and_order]`

#### Arguments:

`title_and_order`: _(Required)_ Title and corresponding order of voting menu to delete.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

## Webhooks

> Webhooks receive information about a match as it is being setup.
> Currently supported actions are:
>
> - MATCH_STARTED
> - TEAMS_CREATED
> - MATCH_COMPLETED
>
> Additionally, if you have `/requireregister mode: Custom API`, you will receive a webhook with action
>
> - REGISTER_PLAYER
>
> containing various information about the user, as well as the account they are attempting to register.
> You must either reply with a json object containing at least a "rating" key (ex: {"rating": 1000}), to specify the
> rating that the player should be registered with, or any non 200 status response to display to the user.
>
> Examples:
> https://webhook.site/#!/695c599b-fc6d-4a23-aaee-ce170e355fb3/7051d907-b47b-4b05-acc8-96464fa6c565/1

### `/webhooks add`

#### Description

Add a new webhook to receive queue information.

#### Usage: `/webhooks add [url]`

#### Arguments:

`url`: _(Required)_ Your webhook url.

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/webhooks delete`

#### Description

Delete this queue's webhook.

#### Usage: `/webhooks delete`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

---

### `/webhooks generatetoken`

#### Description

Generate an API token for your account.

#### Usage: `/webhooks generatetoken`

#### Usage Permissions: `Staff Role or Manage Channels Permission`

<hr style="border:3px solid gray">

# API

### Base URL: `https://api.neatqueue.com/`

### [Generate an API token](/#/?id=webhooks-generatetoken)

### [View Endpoints](https://api.neatqueue.com/docs)
