import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    const reader = await read();
    const parser = await json(reader);
    return parser;
  }
}
