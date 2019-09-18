
exports.seed = function(knex) {
  return knex('user_profile').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user_profile').insert([
        {
          about: "I am",
          purpose: "I am here to",
          zipcode: "95123",
          age: 34,
          email: "abc@gmail.com",
          phoneNumber: 774-290-3801,
          user_id: 1
        }
      ]);
    });
};
