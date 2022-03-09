// eslint-disable-next-line max-classes-per-file
import read from './reader';
import json from './parser';
import GameSaving from './save';

export default class GameSavingLoader {
  static async load() {
    const result = await read();
    const save = await json(result);
    return new GameSaving(JSON.parse(save));
  }
}
