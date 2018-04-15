import { sendSomeData, DataSender } from "../../__exampleForTestOnly/func1";

test("it shall not crash", ()=>{
    expect(true).toBe(true);
})

test('imported function should return "foo" ', () => {
    const expectedData = "foo";
    const incomingData = sendSomeData();

    expect(expectedData).toBe(incomingData);
    });

test('imported class (its method) should return "bar" ', () => {
    const expectedData = "bar";
    
    const importedClass = new DataSender();
    const incomingData = importedClass.sender();
    expect(expectedData).toBe(incomingData);
});