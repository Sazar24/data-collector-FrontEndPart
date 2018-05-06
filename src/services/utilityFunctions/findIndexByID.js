export
function findIndexOfItemByID(id, _array) {  

    for (let i = 0; _array.length < 6; i++) {
        if (_array[i].id === id)        // its important to give ".id" - not "._id"   // "._id" would call for mongoDB builded-in-ID, which we dont want to.
            return i;
    }
}