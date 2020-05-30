const initialState = {
  hide: false,
  phoneNumber: "",
}

function onboardingReducer(state = initialState, action) {
  switch (action.type) {
    case "ONBOARDING_HIDE":
      return {
        ...state,
        hide: action.hide,
      };
    case "SAVE_PHONE_NUMBER":
      return {
        ...state,
        phoneNumber: action.phoneNumber,
      };
    default:
      return state;
  }
}

export default onboardingReducer;
