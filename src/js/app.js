/* eslint-disable no-console */
import GameSavingLoader from './GameSavingLoader';
import GameSaving from './GameSaving';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    const gameSaving = new GameSaving(JSON.parse(saving));
    console.log(gameSaving);
  } catch (error) {
    console.log(error);
  }
})();
