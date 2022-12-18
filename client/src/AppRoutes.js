import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import CartPage from './pages/CartPage/CartPage';
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import OrderPage from './pages/OrderPage/OrderPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LoginPage from './pages/LoginPage/LoginPage';

function AppRoutes() {
  const products = useSelector((state) => state.productsAll.products);
  sessionStorage.setItem('storeCategories', JSON.stringify([...(new Set(products.map((product) => product.categories)))]));
  const sessionStorageCategories = JSON.parse(sessionStorage.getItem('storeCategories'));
  sessionStorage.setItem('storeItemNo', JSON.stringify([...(new Set(products.map((product) => product.itemNo)))]));
  const sessionStorageItemNo = JSON.parse(sessionStorage.getItem('storeItemNo'));
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path={`/${sessionStorageCategories[0]}`} element={<CategoryPage />} />
      <Route path={`/${sessionStorageCategories[1]}`} element={<CategoryPage />} />
      <Route path={`/${sessionStorageCategories[2]}`} element={<CategoryPage />} />
      <Route path={`/${sessionStorageCategories[3]}`} element={<CategoryPage />} />
      <Route path={`/${sessionStorageItemNo[0]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[1]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[2]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[3]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[4]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[5]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[6]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[7]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[8]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[9]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[10]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[11]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[12]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[13]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[14]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[15]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[16]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[17]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[18]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[19]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[20]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[21]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[22]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[23]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[24]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[25]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[26]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[27]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[28]}`} element={<ProductPage />} />
      <Route path={`/${sessionStorageItemNo[29]}`} element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/cart/order" element={<OrderPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
