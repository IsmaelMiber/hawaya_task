function onBoardingHide(hide) {
  return function (dispatch, getState) {
    dispatch({
      type: "ONBOARDING_HIDE",
      hide,
    });
  };
}

function saveUserPhoneNumber(phoneNumber) {
  return function (dispatch, getState) {
    dispatch({
      type: "SAVE_PHONE_NUMBER",
      phoneNumber,
    });
  };
}

export { onBoardingHide, saveUserPhoneNumber };
