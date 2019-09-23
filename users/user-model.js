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
            .join('item_details', 'item.id', 'item_details.item_id')
            .select('item_name', 'item_details.pickup', 'item_details.deadline', 'item_details.target' )
            .join('user_item', 'item.id', 'user_item.item_id')
            .join('user', 'user.id', 'user_item.user_id')
            .select('user.username')
            .join('category', 'category.id', 'item.category_id')
            .select('category.category_name')
}

function addShare(item){
    // const item = {
    //     item_name: share.item_name,
    //     category_id: share.category_id
    // };
    // console.log('item', item)
    // const item_details = {
    //     description: share.description,
    //     pickup: share.pickup,
    //     target: share.target,
    //     deadline: share.deadline,
    //     rules: share.rules,
    //     item_id: item.id
    // }
    // console.log('item_details', item_details)
    return db('item')
           .insert(item)
           .then(ids => {
               ({id: ids[0]})
            //    db('item_details')
            //    .insert(item_details)
            //    .then(ids => ({id: ids[0]}))
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