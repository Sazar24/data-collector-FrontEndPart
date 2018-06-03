import isEmail from 'validator/lib/isEmail';

class ValidatorClass {

    validate(inputtedText, dataType) {
        const text = inputtedText.trim(inputtedText);
        let output;

        switch (dataType) {
            case "NAME":
                output = this.validateProperName(text);
                return output;

            case "SURNAME":
                output = this.validateProperName(text);
                return output;

            case "EMAIL":
                output = this.validateEmail(text);
                return output;

            default:
                return true;
        }
    }


    validateProperName(text) {  // <ang. "nazwa własna">

        const atLeastOneVowel = /[aeiouyąę]+/i.test(text);
        const hasSpecialMarkOrNumber = /[^a-z-ęóąłżźćńś]/i.test(text);
        const hasProperLengthRange = /^[a-z-ęóąłżźćńś]{2,20}$/i.test(text);
        // const hasProperLength = (text.length <= 20)


        if (!atLeastOneVowel || hasSpecialMarkOrNumber || !hasProperLengthRange) return false;
        else return true;
    }

    validateEmail(text) {
        const suitsGeneralPattern = isEmail(text);
        const atLeastOneDot = /.+/.test(text);
        const onlyOneAtMark = /@{1}/.test(text);    // AtMark == @  
        const hasForbiddenMarks = /[^a-zęóąłżźćńś\@\.\_0-9]/i.test(text);

        if (!suitsGeneralPattern || !atLeastOneDot || !onlyOneAtMark || hasForbiddenMarks)
            return false;
        else return true;
    }

    isFormComplete(formData) {

        for (let property in formData) {
            if (formData[property] === null || formData[property] === false || formData[property] === undefined || formData[property] === '')
                return false;
        }
        return true;
    }
}
const Validator = new ValidatorClass();
export default Validator;