
exports.seed = function(knex) {
  return knex('category').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {category_name: "book"},
        
      ]);
    });
};
