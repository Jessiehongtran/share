const db = require('../data/dbConfig')

module.exports = {
    getUsers,
    addUser,
    findUser,
    createProfile,
    // updateProfile, 
    getCategory,
    addCategory,
    getShares,
    addShare,
    //updateShare
    
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

function findUser(filter){
    return db('user').where(filter)
}

function createProfile(profile){
    return db('user_profile')
            .insert(profile)
            .then(ids => ({id: ids[0]}))
}

function getShares(){
    return db('item')
}

function addShare(share){
    return db('item')
           .insert(share)
           .then(ids => {
               ({id: ids[0]})
               console.log(ids)
               console.log('id inside user model', id)
            })
}

function getCategory(){
    return db('category')

}

function addCategory(cate){
    return db('category')
            .insert(cate)
            .then(ids => ({id: ids[0]}))
}