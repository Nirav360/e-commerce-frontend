const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS": {
      const trendingData = action.payload.filter((curElem) => {
        return curElem.rating > 4.5;
      });
      return {
        ...state,
        products: action.payload,
        trendingProducts: trendingData,
      };
    }
    case "SET_LOADING": {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case "SET_FILTER_CATEGORY":
      return {
        ...state,
        filterCategory: action.payload,
      };
    case "FILTER_CATEGORY_RESET":
      return {
        ...state,
        filterCategory: [],
      };
    default:
      return state;
  }
};
export default ProductReducer;
