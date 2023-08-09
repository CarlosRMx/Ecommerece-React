import { useRoutes,BrowserRouter } from 'react-router-dom';
import {Home} from '../Home'
import {Order} from '../Order'
import {Orders} from '../Orders'
import {SingIn} from '../SingIn'
import {NotFound} from '../NotFound'
import './app.css'

const AppRoutes = ()=>{
  //hook para poder crear rutas en React
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/my-order', element: <Order/>},
    {path: '/my-orders', element: <Orders/>},
    {path: '/sing-in', element: <SingIn/>},
    {path: '/*', element: <NotFound/>},
  ])
  return routes;
}

function App() {

  return (
    <>
     <BrowserRouter>
        <AppRoutes/>
     </BrowserRouter>
    </>
  )
}

export default App
