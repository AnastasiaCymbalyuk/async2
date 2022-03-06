// eslint-disable-next-line max-classes-per-file
import read from './reader';
import json from './parser';

export class GameSaving {
  constructor(obj) {
    this.obj = obj;
  }
}

export default class GameSavingLoader {
  static async load() {
    const result = await read();
    const save = await json(result);
    // eslint-disable-next-line no-useless-escape
    return new GameSaving(save.replace(',n', ',\"n'));
  }
}
