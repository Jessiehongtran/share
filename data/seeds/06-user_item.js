
exports.seed = function(knex) {
  return knex('user_item').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user_item').insert([
        {
          user_id: 1,
          item_id: 1
        }
      ]);
    });
};
