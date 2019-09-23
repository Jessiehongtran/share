
exports.seed = function(knex) {
  return knex('item').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('item').insert([
        {
          item_name: 'Leader eats last',
          description: "Newly bought",
          pickup: "1000 Blossom River Way",
          target: "Mom",
          deadline: 2019-10-01,
          rules: "contact via phone please",
          category_id: 1
        }
      ]);
    });
};
