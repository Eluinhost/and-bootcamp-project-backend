const getUsers = async (ctx) => {
  const { rows } = await ctx.db.getUsers();
  ctx.body = rows;
};

module.exports = getUsers;
