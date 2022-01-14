import {
  SET_TRUST_MEMBERS,
  SET_TRUST_PERSON,
  SET_TRUST_PHONE,
  SET_ADDRESS,
  SUBMIT_FORM,
  SET_WORK_PHONE,
  SET_MOBILE_PHONE,
  SET_NAME,
} from '../constants/formTypes';

export const setSubmitAction = () => (dispatch) => {
  dispatch({
    type: SUBMIT_FORM,
  });
};

export const setFormName = (formName) => (dispatch) => {
  dispatch({
    type: SET_NAME,
    payload: formName,
  });
};

export const setFormMobilePhone = (formMobilePhone) => (dispatch) => {
  dispatch({
    type: SET_MOBILE_PHONE,
    payload: formMobilePhone,
  });
};

export const setFormWorkPhone = (formWorkPhone) => (dispatch) => {
  dispatch({
    type: SET_WORK_PHONE,
    payload: formWorkPhone,
  });
};

export const setFormAddress = (formAddress) => (dispatch) => {
  dispatch({
    type: SET_ADDRESS,
    payload: formAddress,
  });
};

export const setFormTrustPerson = (formTrustPerson) => (dispatch) => {
  dispatch({
    type: SET_TRUST_PERSON,
    payload: formTrustPerson,
  });
};
export const setFormTrustPhone = (formTrustPhone) => (dispatch) => {
  dispatch({
    type: SET_TRUST_PHONE,
    payload: formTrustPhone,
  });
};
export const setFormTrustedMembers = (formTrustMembers) => (dispatch) => {
  dispatch({
    type: SET_TRUST_MEMBERS,
    payload: formTrustMembers,
  });
};
