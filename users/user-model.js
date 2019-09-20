const db = require('../data/dbConfig')

module.exports = {
    getUsers,
    addUser,
    findUser,
    createProfile,
    // updateProfile, 
    getShares,
    addShare
    
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
            .join('item_details', 'item.id', 'item_details.item_id')
            .select('item_name', 'item_details.pickup', 'item_details.deadline', 'item_details.target' )
            .join('user_item', 'item.id', 'user_item.item_id')
            .join('user', 'user.id', 'user_item.user_id')
            .select('user.username')
            .join('category', 'category.id', 'item.category_id')
            .select('category.category_name')
}

function addShare(share){
    const item_name = share.item_name;
    const item_details = {
        description: share.description,
        target: share.target,
        pickup: share.pickup,
        deadline: share.deadline,
        rules: share.rules
    }
    return db('item')
           .insert(item_name)
           .then(ids => {
               ({id: ids[0]})
               db('item_details')
               .insert(item_details)
               .then(ids => ({id: ids[0]}))
            })
}