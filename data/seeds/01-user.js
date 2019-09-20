const bcrypt = require('bcryptjs')
exports.seed = function(knex) {
  return knex('user').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          username: "user",
          password: "aaa"
        },{
          username: "hong",
          password: "bbb"
        }
      ]);
    });
};
