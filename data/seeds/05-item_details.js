
exports.seed = function(knex) {
  return knex('item_details').del()
    .then(function () {
      // Inserts seed entries
      return knex('item_details').insert([
        {
          description: "Newly bought",
          pickup: "1000 Blossom River Way",
          deadline: 2019-10-01,
          rules: "contact via phone please"
        }
      ]);
    });
};
