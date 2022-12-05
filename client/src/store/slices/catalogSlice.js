import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const catalogSlise = createSlice({
  name: 'catalog',
  initialState: {
    catalogProducts: [],
    currentProducts: [],
    currentPage: 1,
    productsPurPage: 9,
  },

  reducers: {
    allCatalogProducts: (state, action) => {
      state.catalogProducts = action.payload;
    },

    paginationCatalog: (state) => {
      const lastProductIndex = state.currentPage * state.productsPurPage;
      const firstProductIndex = lastProductIndex - state.productsPurPage;

      state.currentProducts = state.catalogProducts.slice(firstProductIndex, lastProductIndex);
    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },

    nextPageCatalog: (state) => {
      state.currentPage += 1;
    },

    prevPageCatalog: (state) => {
      state.currentPage -= 1;
    },
  },

});

export const {
  allCatalogProducts, paginationCatalog, setCurrentPage, nextPageCatalog, prevPageCatalog,
} = catalogSlise.actions;

const getAllProducts = () => async (dispatch) => {
  try {
    const { status, data } = await axios.get(`${process.env.REACT_APP_API_URL}/products`);

    if (status === 200) {
      dispatch(allCatalogProducts(data));
    }
  } catch (err) {
    console.warn(err);
  }
};

const filterCatalogProducts = (value) => async (dispatch) => {
  try {
    const { status, data } = await axios.get(`${process.env.REACT_APP_API_URL}/products/filter?categories=${value}`);

    if (status === 200) {
      dispatch(allCatalogProducts(data.products));
    }
  } catch (err) {
    console.warn(err);
  }
};

export { getAllProducts, filterCatalogProducts };

export default catalogSlise.reducer;