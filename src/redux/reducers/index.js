import onboardingReducer from './onboarding';
import porfileReducer from './profile';
import {combineReducers} from 'redux';

export default combineReducers({
  onboarding: onboardingReducer,
  profile: porfileReducer,
});
