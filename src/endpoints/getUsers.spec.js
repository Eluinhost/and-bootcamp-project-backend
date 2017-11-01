 const getUsers = require('./getUsers');

test('Returns empty list with no data', async () => {
  const rows = [];

  const ctx = {
    db: {
      getUsers: async () => ({ rows }),
    },
    response: {}
  };

  await getUsers(ctx);

  expect(ctx.body.length).toEqual(0);
  expect(ctx.response.status).toEqual(200);
});

test('getUsers should return an array of users', async () => {
  const rows = ['item1', 'item2'];

  const ctx = {
    db: {
      getUsers: async () => ({ rows }),
    },
    response: {}
  };

  await getUsers(ctx);

  expect(ctx.body.length).toEqual(2);
  expect(ctx.body).
  expect(ctx.response.status).toEqual(200);
});

test('Returns error if database unavailable', async () => {
  const ctx = {
    db: {
      getUsers: async () => Promise.reject(new Error("Error connecting to database")),
    },
    response: {}
  };

  await getUsers(ctx);

  expect(ctx.body).toEqual("Error connecting to database");
  expect(ctx.response.status).toEqual(503);
});
