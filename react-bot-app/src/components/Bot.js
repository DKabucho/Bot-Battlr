import React from 'react';

const Bot = ({ bot, enlisted, onEnlist, onDischarge, onDelete }) => {
  const handleEnlistClick = () => {
    onEnlist(bot.id);
  };

  const handleDischargeClick = () => {
    onDischarge(bot.id);
  };

  const handleDeleteClick = () => {
    onDelete(bot.id);
  };

  return (
    <div>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      {enlisted ? (
        <button onClick={handleDischargeClick}>Discharge</button>
      ) : (
        <button onClick={handleEnlistClick}>Enlist</button>
      )}
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default Bot;
