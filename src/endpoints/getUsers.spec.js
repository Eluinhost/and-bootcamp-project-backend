 const getUsers = require('./getUsers');

test('getUsers should return an array of users', async () => {
  const rows = ['item1', 'item2'];

  const ctx = {
    db: {
      getUsers: async () => ({ rows }),
    },
  };

  await getUsers(ctx);

  expect(ctx.body.length).toEqual(2);
});
