import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      resolve(read().then((data) => json(data)));
    });
  }
}
