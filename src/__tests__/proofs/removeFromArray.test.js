function findIndexOfSpecifiedObjectInArray(text, _array) {
    // _array.forEach((element, index) => {
    //     console.log(`element: ${element}, index: ${index}`);
    //     if (element === text){
    //         console.log('found it!' + `  - element: ${element}, index: ${index}`);

    //         return index;}
    // });
    for (let i = 0; i < _array.length; i++) {
        if (_array[i] === text)
            return i;
    }
}

test('proof: finding and removing element from array - testing mechanism', () => {
    const mockArray = ["foo_0", "bar_1", "hakuna_2", "matata_3", "oregano_4"];
    let index = findIndexOfSpecifiedObjectInArray("hakuna_2", mockArray);
    // index == 2;
    mockArray.splice(index, 1);

    const expectedOutput = ["foo_0", "bar_1", "matata_3", "oregano_4"];

    expect(mockArray).toEqual(expectedOutput);

});