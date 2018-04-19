import Validator from "./Validator";

test('validate proper names - life examples', () => {
    const properNamesList = ["Adam", "Łukasz", "John", "Maria", "Michał", "Kuba", "jontek", "abraham"];

    properNamesList.forEach(element => {
        let output = Validator.validateProperName(element);
        expect(output).toBe(true);
    });
});

test('validateName() only letters (no special marks) are expected in expession', () => {
    const incorrectNames = ["Adam1", "Łukasz!", "&Maria", "Mi*hał", "Kuba_", "Jozin z Bazin", "x_abraham", "Grzegorz Rafał", "Henryk IV"];

    incorrectNames.forEach(element => {
        let output = Validator.validateProperName(element);
        expect(output).toBe(false);
    });
});

test('validateName() - there must be at least one vowel in expression', () => {
    const incorectNames = ["Dsmm", "Łksz", "MrKLLR", "Mchłzz", "CBK", "ZSRR", "McKfW"];

    incorectNames.forEach(element => {
        let output = Validator.validateProperName(element);
        expect(output).toBe(false);
    });

});

test('validEmail cheacks whether e-mail is valid', () => {
    let exampleEmail = "somebody@com.pl"
    let output = Validator.validate(exampleEmail, "EMAIL");

    expect(output).toBe(true);

    let properEmails = ["someone@ff.cc", "noon_e@m.pl", "a_1z__Stranger_172@bigks.xd"];

    properEmails.forEach((element) => {
        output = Validator.validateEmail(element);
        expect(output).toBe(true);
    })



});

test('Validator.validateEmail() - for incorrect expression should return false', () => {

    let incorrectEmails = [
        "someone@ff.123",
        "a:)_1z__Stranger_172@bigks.xd",
        "a@z__Stranger_172@bigksxd",
        "!@#someone@s.pl", "with!@Forbid!!den.Marks!",
        "a!#$%^&*()''\/?><[]@com.pl",
        "human@someNameAgain@domena.pl"
    ];

    incorrectEmails.forEach((element) => {
        let output = Validator.validateEmail(element);
        expect(output).toBe(false);
    })

});