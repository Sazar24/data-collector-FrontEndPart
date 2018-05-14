import Validator from "../../services/validator/Validator";

test('returns false when there is no vovels', () => { // "vovel" == "samogłoska"
    let mockName;
    let validationResult;

    mockName = "Jhn";
    validationResult = Validator.validate(mockName, "NAME");
    expect(validationResult).toBe(false);

    mockName = "Alexander";
    validationResult = Validator.validate(mockName, "NAME");
    expect(validationResult).toBe(true);

    /////////////////////
    // many at once:

    const manyProperNames = ['Ania', 'Adam', 'Lucek', 'Johny', 'Maurycy', 'Max', 'Barbara', 'Żaneta']

    manyProperNames.forEach(element => {
        expect(Validator.validate(element, "NAME")).toBe(true);
    })


    const manyIncorectNames = ['Dsmm', 'Łksz', 'MrKLLR', 'Mchłzz', 'CBK', 'ZSRR', 'McKfW', 'someveryveryveryverylongname'];

    manyIncorectNames.forEach(element => {
        let output = Validator.validateProperName(element);
        expect(output).toBe(false);
    });
});