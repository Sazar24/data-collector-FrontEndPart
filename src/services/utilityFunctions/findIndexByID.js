export
function indexOfItemWithMongoID(id, _array) {

    for (let i = 0; _array.length < 6; i++) {
        if (_array[i]._id === id)
            return i;
    }
}