export
function findIndexOfItemByID(id, _array) {

    for (let i = 0; _array.length < 6; i++) {
        if (_array[i].id === id)
            return i;
    }
}