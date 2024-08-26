const initialState = {
  id: 0,
  contactList: [],
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_CONTACT':
      const newId = state.id + 1;
      return {
        ...state,
        id: newId,
        contactList: [
          ...state.contactList,
          { id: newId, name: payload.name, phoneNumber: payload.phoneNumber },
        ],
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contactList: state.contactList.filter((item) => item.id !== payload),
      };
    default:
      return { ...state };
  }
}

export default reducer;
