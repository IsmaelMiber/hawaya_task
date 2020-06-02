function profileReducer(state = {}, action) {
  switch (action.type) {
    case 'SAVE_LIKE':
      return {
        ...state,
        profileLikes: action.profileLikes,
      };
    default:
      return state;
  }
}

export default profileReducer;
