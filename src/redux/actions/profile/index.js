function saveProfileLikes(profileLike) {
  return function (dispatch, getState) {
    dispatch({
      type: "SAVE_LIKE",
      profileLike,
    });
  };
}

export default saveProfileLikes;
