import Validator from "../../services/validator/Validator";
test('should behave...', () => {
    expect(true).toBe(true);
});

test('validate proper names - life examples', () => {
    const properNamesList = ["Adam", "Łukasz", "John", "Maria", "Michał", "Kuba", "jontek", "abraham"];

    properNamesList.forEach(element => {
        let output = Validator.validateProperName(element);
        expect(output).toBe(true);
    });
});



test('validateName() - there must be at least one vowel in expression', () => {
    const incorectNames = ["Dsmm", "Łksz", "MrKLLR", "Mchłzz", "CBK", "ZSRR", "McKfW"];

    incorectNames.forEach(element => {
        let output = Validator.validateProperName(element);
        expect(output).toBe(false);
    });

});


