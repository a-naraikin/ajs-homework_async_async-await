import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    try {
      const reader = await read();
      const parser = await json(reader);
      return parser;
    } catch (error) {
      throw error;
    }
  }
}
