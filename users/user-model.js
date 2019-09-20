const db = require('../data/dbConfig')

module.exports = {
    getUsers,
    addUser,
    createProfile,
    // updateProfile, 
    
}

function getUsers(){
    return db('user')
            .join('user_profile', 'user.id', 'user_profile.user_id')
            .select('user.username', 'user_profile.zipcode', 'user_profile.age', 'user_profile.email', 'user_profile.phoneNumber')
            
}

function addUser(user){
    console.log(user)
    return db('user')
            .insert(user)
            .then(ids => ({id: ids[0]}))
}

function createProfile(profile){
    return db('user_profile')
            .insert(profile)
            .then(ids => ({id: ids[0]}))
}