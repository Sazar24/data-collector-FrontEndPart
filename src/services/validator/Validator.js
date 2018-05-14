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
        const hasSpecialMark = /[^a-z-ęóąłżźćńś]/i.test(text);
        const hasProperLengthRange = /^[a-z-ęóąłżźćńś]{2,20}$/i.test(text);

        // console.log(`1:${atLeastOneVowel} 2:${hasSpecialMark} 3:${hasProperLengthRange} <-- ${text}`);
        
        if (!atLeastOneVowel || hasSpecialMark || !hasProperLengthRange) return false;
        else return true;
    }

    validateEmail(text) {
        const suitsGeneralPattern = isEmail(text);
        const atLeastOneDot = /.+/.test(text);
        const onlyOneAtMark = /@{1}/.test(text);    // AtMark == @  
        const forbiddenMarksOccurs = /^[\? \! \# \$ \% \^ \& \* \\ \[] \] \( \) \{ \} \; \: \/ \< \>]/.test(text);
        //TODO: forbiddenMarksOccurs stopped working. Find out why o.O

        if (!suitsGeneralPattern || !atLeastOneDot || !onlyOneAtMark || forbiddenMarksOccurs)
            return false;
        else return true;
    }
}

const Validator = new ValidatorClass();
export default Validator;