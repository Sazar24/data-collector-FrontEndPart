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
                throw "no such data type specified";
                // return false;
        }
    }


    validateProperName(text) {  // <ang. "nazwa własna">
        const atLeastOneVowel = /[aeiouyąę]+/i.test(text);
        const noSpecialMarkIncluded = /[^a-z-ęóąłżźćń]/i.test(text);

        if (noSpecialMarkIncluded || !atLeastOneVowel) return false;
        else return true;
    }

    validateEmail(text) {
        const suitsGeneralPattern = isEmail(text);
        const atLeastOneDot = /.+/.test(text);
        const onlyOneAtMark = /@{1}/.test(text);    // AtMark == @  
        const forbiddenMarksOccurs = /^[\? \! \# \$ \% \^ \& \* \\ ]()\{ \} \; \: \/<>/.test(text);
        
        if (!suitsGeneralPattern || !atLeastOneDot || !onlyOneAtMark || forbiddenMarksOccurs) 
        return false;
        else return true;

        i
    }
}

const Validator = new ValidatorClass();
export default Validator;