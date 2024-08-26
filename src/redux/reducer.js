const initialState = {
  contactList: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contactList: [
          ...state.contactList,
          { name: action.payload.name, phoneNumber: action.payload.phoneNumber },
        ],
      };
    default:
      return { ...state };
  }
}

export default reducer;
