const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS": {
      const trendingData = action.payload.filter((curElem) => {
        return curElem.rating > 4.5;
      });
      return {
        ...state,
        products: action.payload,
        all_products: action.payload,
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
        products: action.payload,
      };
    case "FILTER_CATEGORY_RESET":
      return {
        ...state,
        products: state.all_products,
      };
    case "SET_SORTING_DATA": {
      const { products } = state;
      const tempData = [...products];
      const type = action.payload;
      const sortedProducts = (a, b) => {
        if (type === "Price(LowToHigh)") {
          return a.price - b.price;
        }
        if (type === "Price(HighToLow)") {
          return b.price - a.price;
        }
      };
      let newSortedProducts = tempData.sort(sortedProducts);
      return {
        ...state,
        products: newSortedProducts,
        isCategoryChanged: false,
      };
    }
    case "CATEGORY_CHANGED":
      return {
        ...state,
        isCategoryChanged: true,
      };
    default:
      return state;
  }
};
export default ProductReducer;
