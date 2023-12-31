import React from 'react';
import Bot from './Bot';

const BotCollection = ({ bots, enlistedBots, onEnlist, onDischarge, onDelete }) => {
  return (
    <div>
      {bots.map((bot) => (
        <Bot
          key={bot.id}
          bot={bot}
          enlisted={enlistedBots.includes(bot)}
          onEnlist={onEnlist}
          onDischarge={onDischarge}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default BotCollection;
