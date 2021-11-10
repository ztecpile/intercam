export default {
  password_instructions: {
    Name: 'password_instructions',
    Title: 'Title',
    NumberSteps: '5',
    Height : "270px",
    Width : "410px",
    MarginLeft: "-50px",
    Steps: {
      Step1: {
        Strong: '0',
        Validation: '^[\\s\\S]{8,40}$',
        isRegex: true,
      },
      Step2: {
        Strong: '0',
        Validation: '(?=(?:.*\\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})',
        isRegex: true,
      },
      Step3: {
        Strong: '1',
        Validation: 'letraConsecutivas',
        isRegex: false,
      },
      Step4: {
        Strong: '1',
        Validation: '[@#$%!]',
        isRegex: true,
      },
      Step5: {
        Strong: '1',
        Validation: 'tecladoConsecutivo',
        isRegex: false,
      },
    },
  },
  user_instructions : {
    Name: 'user_instructions',
    Title: 'Title',
    NumberSteps : '3',
    Height : "120px",
    Width : "300px",
    MarginLeft: "0px",
    Steps: {
      Step1: {
        Strong: '0',
        Validation: '^[\\s\\S]{6,15}$',
        isRegex: true,
      },
      Step2: {
        Strong: '0',
        Validation: '^[^\\s]+$',
        isRegex: true,
      },
      Step3: {
        Strong: '0',
        Validation: '^[A-Z0-9]+$',
        isRegex: true,
      },
    }
  },
};
