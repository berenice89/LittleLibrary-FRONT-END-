const initial = {
  title: "",
  author: "",
  date: "",
  rate: "",
  comment: "",
};

const Reducer = (state = initial, action) => {
  switch (action.type) {
    case "ANSWER":
      return { ...state, [action.book]: action.text };
    default:
      return state;
  }
};

export default Reducer;
