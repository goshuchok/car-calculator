const initialState = {
  formValues: '',
  formPassword: '',
  formTrustPhone: '',
  formTrustPerson: '',
  message: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FORMVALUES':
      return {
        ...state,
        formValues: action.payload,
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        formPassword: action.payload,
      };
    case 'SET_TRUST_PHONE':
      return {
        ...state,
        formTrustPhone: action.payload,
      };
    case 'SET_TRUST_PERSON':
      return {
        ...state,
        formTrustPerson: action.payload,
      };
    case 'SUBMIT_FORM':
      console.log('--- Triggered Form submission ---');
      console.log('Form Email - ', state.formValues);
      console.log('Form Password - ', state.formPassword);
      console.log('Form Trust Person - ', state.formTrustPerson);
      console.log('Form Trust Phone - ', state.formTrustPhone);
      return {
        ...state,
        message: 'Form submitted!!',
      };
    default:
      return state;
  }
};

export default reducer;
