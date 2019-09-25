
exports.up = function(knex) {
  return knex.schema
  //user login table
  .createTable('user', tbl => {
      tbl.increments();
      tbl.string('username', 128).notNullable();
      tbl.string('password').notNullable();
  })

  //user profile table
  .createTable('user_profile', tbl => {
      tbl.increments();
      tbl.string('about');
      tbl.string('purpose');
      tbl.integer('zipcode').unsigned();
      tbl.float('age');
      tbl.string('email').unique();
      tbl.integer('phoneNumber').unique();
      //foreign key
      tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('user')
  })

  //category table
  .createTable('category', tbl => {
      tbl.increments();
      tbl.string('category_name').notNullable();
  })

  //item table
  .createTable('item', tbl => {
      tbl.increments();
      tbl.string('item_name').notNullable();
      tbl.string('description');
      tbl.string('pickup').notNullable();
      tbl.string('target')
      tbl.date('deadline').notNullable();
      tbl.string('rules');
      //foreign key
      tbl
        .integer('category_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('category')
  })
    
  // //item details table
  // .createTable('item_details', tbl => {
  //     tbl.string('description');
  //     tbl.string('pickup').notNullable();
  //     tbl.string('target')
  //     tbl.date('deadline').notNullable();
  //     tbl.string('rules');
  //     //foreign key
  //     tbl
  //       .integer('item_id')
  //       .unsigned()
  //       .notNullable()
  //       .references('id')
  //       .inTable('item')

  // })

  //foreign key
  .createTable('user_item', tbl => {
      tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('user')

      tbl
        .integer('item_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('item')

      tbl.primary(['user_id', 'item_id'])
  })
};

exports.down = function(knex) {
  return knex.schema
                .dropTableIfExists('user_item')
                // .dropTableIfExists('item_details')
                .dropTableIfExists('item')
                .dropTableIfExists('category')
                .dropTableIfExists('user_profile')
                .dropTableIfExists('user')
};
