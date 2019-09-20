
exports.seed = function(knex) {
  return knex('category').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {category_name: 'A book'},
        {category_name:'A ride'},
        {category_name:'An idea'},
        {category_name:'A knowledge'},
        {category_name:'A meal'},
        {category_name:'An activity'},
        {category_name:'A tool'},
        {category_name:'A penny'},
        {category_name:'An experience'},
        {category_name:'A thought'},
        {category_name:'A space'},
        {category_name:'A business'},
        {category_name:'Others'} 
      ]);
    });
};
