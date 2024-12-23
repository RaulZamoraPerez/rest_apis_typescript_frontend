import {createBrowserRouter} from 'react-router-dom';
import Layout from './layout/Layout';
import Products, { loader as productsLoader , action as updateAvailabilityAction } from './views/Products';
import NewProduct , { action as newProductAction } from './views/NewProduct';
import EditProduct, {loader as editProductLoader, action as editProductAction } from './views/EditProduct';
import { action as deleteProductAction } from './components/ProductDetails';

export const router = createBrowserRouter([
    {
        path: '/',                  //  ruta
        element: <Layout/>,
        children: [                     //hijos de el elemnt de arriba
            {
                index: true,
                element: <Products/>,
                loader:  productsLoader, //loader son funciones que se ejecutan antes de renderizar el componente
                action: updateAvailabilityAction
            },
            {
                path:'productos/nuevo',
                element: <NewProduct/>,
                action: newProductAction
            },
            {
                path:'productos/:id/editar',//ROA Pattern 
                element:<EditProduct/>,
                loader: editProductLoader,
                action: editProductAction
            },
            {
                path:'productos/:id/eliminar',//ROA Pattern 
                action: deleteProductAction
            }
        ]
    }
])