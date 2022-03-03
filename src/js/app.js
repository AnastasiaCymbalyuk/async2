// TODO: write your code here
import GameSavingLoader from './loader';

(async () => {
  try {
    const save = await GameSavingLoader.load();
    return save;
  } catch (err) {
    return err;
  }
})();
