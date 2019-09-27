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
    return db('user')
            .where(filter)
            .then(users => (users[0]))
}

function createProfile(profile){
    return db('user_profile')
            .insert(profile)
            .then(ids => ({id: ids[0]}))
}

function getShares(){
    return db('item')
            .join('user_item', 'item.id', 'user_item.item_id')
            .join('user', 'user.id', 'user_item.user_id')
            .select('item_name', 'pickup', 'deadline', 'target', 'user.username')
}

function addShare(item, user_id){
    return db('item')
           .insert(item)
           .then(ids => 
            //    ({id: ids[0]})
            {
                const idToAdd = {
                    user_id: user_id,
                    item_id: ids[0]
                }
                console.log(idToAdd)
                return db('user_item')
                        .insert(idToAdd)
            }
            )
}

function getCategory(){
    return db('category')

}

function addCategory(cate){
    return db('category')
            .insert(cate)
            .then(ids => ({id: ids[0]}))
}
