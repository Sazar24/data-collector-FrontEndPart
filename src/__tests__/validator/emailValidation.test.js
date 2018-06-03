import Validator from "../../services/validator/Validator";

test('Validator.validEmail() returns true for proper email adresses ', () => {
    let exampleEmail = "somebody@com.pl"
    let output = Validator.validate(exampleEmail, "EMAIL");

    expect(output).toBe(true);

    let properEmails = ["someone@ff.cc", "noon_e@m.pl", "a_1z__Stranger_172@bigks.xd","foooo.baaa.aaar@o.pl"];

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
        "human@someNameAgain@domena.pl",
        "foo.baa,rrr@o.pl",
        "foo!bar@bar.pl",
    ];

    incorrectEmails.forEach((element) => {
        let output = Validator.validateEmail(element);
        expect(output).toBe(false);
    })

});

