/* eslint-disable no-console */
import GameSavingLoader from './GameSavingLoader';
import GameSaving from './GameSaving';

GameSavingLoader.load().then((saving) => {
  const gameSaving = new GameSaving(JSON.parse(saving));
  console.log(gameSaving);
}, (error) => {
  console.log(error);
});
