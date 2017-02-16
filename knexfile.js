module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: 'db/users.db'
    },
    useNullAsDefault: true
  }
};
