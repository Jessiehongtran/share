const bcrypt = require('bcryptjs')
exports.seed = function(knex) {
  return knex('user').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          username: "user",
          password: bcrypt.hashSync("pass", 12)
        },{
          username: "hong",
          password: bcrypt.hashSync("pass", 12)
        }
      ]);
    });
};