class ValidatorClass{
    validate(text, dataType){
        switch (dataType) {
            case "NAME":
                this.validateName(text);
                
                break;
        
            default:
                break;
        }
    }

    validateName(text){
        
    }
}

const Validator = new ValidatorClass();
export default Validator;