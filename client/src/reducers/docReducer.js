const docReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_DOC_FULFILLED': {
      const response = action.payload.data;
      state = { ...state, ...response };
      break;
    }
    case 'CREATE_DOC_REJECTED': {
      const response = action.payload.data;
      state = { ...state, ...response };
      break;
    }
    case 'CREATE_DOC_PENDING': {
      // state = { ...state, ...action.payload };
      break;
    }
  }
  return state;
};

export default docReducer;