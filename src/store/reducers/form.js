const initialState = {
  formName: '',
  formMobilePhone: '',
  formWorkPhone: '',
  formAddress: '',
  formTrustPhone: '',
  formTrustPerson: '',
  message: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        formName: action.payload,
      };
    case 'SET_MOBILE_PHONE':
      return {
        ...state,
        formMobilePhone: action.payload,
      };
    case 'SET_WORK_PHONE':
      return {
        ...state,
        formWorkPhone: action.payload,
      };
    case 'SET_ADDRESS':
      return {
        ...state,
        formAddress: action.payload,
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
      console.log('Form Name - ', state.formName);
      console.log('Form Mobile Phone - ', state.formMobilePhone);
      console.log('Form Work Phone - ', state.formWorkPhone);
      console.log('Form Address - ', state.formAddress);
      console.log('Form Trust Person - ', state.formTrustPerson);
      console.log('Form Trust Phone - ', state.formTrustPhone);
      console.log('--- Form submitted!! ---');
      return {
        ...state,
        message: 'Form submitted!!',
      };
    default:
      return state;
  }
};

export default reducer;
