function profileReducer(state = {}, action) {
  switch (action.type) {
    case "SAVE_LIKE":
      var profileLikes = [];
      if (state.profileLikes) {
        profileLikes.push(...state.profileLikes);
      }
      profileLikes.push(action.profileLike);
      return {
        ...state,
        profileLikes,
      };
    default:
      return state;
  }
}

export default profileReducer;
