import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

const App = () => {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const enlistBot = (botId) => {
    const botToEnlist = bots.find((bot) => bot.id === botId);
    if (!enlistedBots.includes(botToEnlist)) {
      setEnlistedBots([...enlistedBots, botToEnlist]);
    }
  };

  const dischargeBot = (botId) => {
    setEnlistedBots(enlistedBots.filter((bot) => bot.id !== botId));
  };

  const deleteBot = (botId) => {
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setBots(bots.filter((bot) => bot.id !== botId));
        setEnlistedBots(enlistedBots.filter((bot) => bot.id !== botId));
      })
      .catch((error) => console.error('Error deleting bot:', error));
  };

  return (
    <div>
      <h1>Welcome to Bot Battlr</h1>
      <h2>Bot Collection</h2>
      <BotCollection
        bots={bots}
        enlistedBots={enlistedBots}
        onEnlist={enlistBot}
        onDelete={deleteBot}
      />
      <h2>Your Bot Army</h2>
      <YourBotArmy enlistedBots={enlistedBots} onDischarge={dischargeBot} />
    </div>
  );
};

export default App;
