
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
      //foreign key
      tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('user')
  })

  //share table
  .createTable('share', tbl => {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.string('why');
      tbl.string('pick_up').notNullable();
      tbl.date('deadline').notNullable();
      tbl.string('rules');

  })

  //foreign key
  .createTable('user_share', tbl => {
      tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('user')

      tbl
        .integer('share_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('share')

      tbl.primary(['user_id', 'share_id'])
  })
};

exports.down = function(knex) {
  return knex.schema
                .dropTableIfExists('user_share')
                .dropTableIfExists('share')
                .dropTableIfExists('user_profile')
                .dropTableIfExists('user')
};
