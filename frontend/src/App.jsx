import React from 'react'
import Homepage from './pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import Create from './pages/Create'
import StockReport from './pages/StockReport'
import OrderSlip from './pages/OrderSlip'
import SupplierLIst from './pages/SupplierLIst'
import Product from './pages/Product'
import Login from './pages/Login'
import Signup from './pages/Signup'
import CreateProduct from './pages/CreateProduct'
import ProductLIst from './pages/ProductList'
import Supplier from './pages/Supplier'
import UserProfile from './pages/UserProfile'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/create-supplier' element={<Create />} />
      <Route path='/create-product' element={<CreateProduct />} />
      <Route path='/stock-report' element={<StockReport />} />
      <Route path='/order-slip' element={<OrderSlip />} />
      <Route path='/suppliers' element={<SupplierLIst />} />
      <Route path='/products' element={<ProductLIst />} />
      <Route path='/product-profile' element={<Product />} />
      <Route path='/supplier-profile' element={<Supplier />} />
      <Route path='/user-profile' element={<UserProfile />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />

    </Routes>
  )
}

export default App