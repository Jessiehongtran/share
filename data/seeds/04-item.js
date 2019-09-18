
exports.seed = function(knex) {
  return knex('item').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('item').insert([
        {
          item_name: 'Leader eats last',
          category_id: 1
        }
      ]);
    });
};
