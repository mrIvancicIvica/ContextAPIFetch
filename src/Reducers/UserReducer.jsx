export const UserReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        data: action.data,
      };
    default:
      return state;
  }
};
