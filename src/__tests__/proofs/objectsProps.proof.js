test('should get object2 with propertyName of object1.b value (and new Value for object2`s new property)', () => {

    const object = { a: "ziemniak", b: "mech" };
    let object2 = { c: "zupaZBobra" }

    let newPropertyWithValue = {};
    newPropertyWithValue[object.b] = "kura";
    object2 = { ...object2, ...newPropertyWithValue }

    // console.log("object2: ", object2); 

    const expectedOutput = { c: 'zupaZBobra', mech: 'kura' }

    expect(object2).toMatchObject(expectedOutput);
});