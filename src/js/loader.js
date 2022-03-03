import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static async load() {
    const result = await read();
    const save = await json(result);
    return JSON.parse(save);
  }
}
