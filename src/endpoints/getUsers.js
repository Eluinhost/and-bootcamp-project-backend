const getUsers = async (ctx) => {
  try {
    const { rows } = await ctx.db.getUsers();
    ctx.body = rows;
    ctx.response.status = 200;
  }
  catch (err) {
    ctx.body = err.message;
    ctx.response.status = 503;
  }
};

module.exports = getUsers;
