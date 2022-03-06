import GameSavingLoader, { GameSaving } from '../loader';

it('test', async () => {
  const obj = JSON.stringify({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  });
  const objNew = new GameSaving(obj);
  const save = await GameSavingLoader.load();
  expect(save).toEqual(objNew);
});
