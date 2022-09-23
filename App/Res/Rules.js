import Strings from "./String";
import validation from "./Validation";

const rules = {
    email: {
      required: {
        value: true,
        message: Strings.errors.Required,
      },
      pattern: {
        value: validation.email(),
        message: Strings.errors.email_invalid,
      },
    },
    password: {
      required: {
        value: true,
        message: Strings.errors.Required,
      },
      pattern: {
        value: validation.password(),
        message: Strings.errors.password_invalid,
      },
    },
    required: {
        required: {
          value: true,
          message: 'Required!',
        },
        pattern: {
            value: validation.text(),
            message: Strings.errors.text_invalid,
          },
      },
}

export default rules;
   