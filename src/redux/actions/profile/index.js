function saveProfileLikes(profileLikes) {
  return function(dispatch, getState) {
    dispatch({
      type: 'SAVE_LIKE',
      profileLikes,
    });
  };
}

export {saveProfileLikes};
