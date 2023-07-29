import React from 'react';
import Bot from './Bot';

const YourBotArmy = ({ enlistedBots, onDischarge }) => {
  return (
    <div>
      {enlistedBots.map((bot) => (
        <Bot key={bot.id} bot={bot} enlisted onDischarge={onDischarge} />
      ))}
    </div>
  );
};

export default YourBotArmy;
