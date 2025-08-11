import { createRoot } from 'react-dom/client';
//import css
import "./css/index.css";
import BT_StateProps from './Props/BT_StateProps/BT_StateProps';
import ProductsPage from './api/ProductsPage';
import ToDoListApi from './api/ToDoListApi';
import DemoFormLogin from './Form/DemoFormLogin';
import DemoFormik from './Form/DemoFormik';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import HomeIndex from './Pages/HomeIndex';
import Login from './Pages/Login'
import HomeTemplate from './Templates/HomeTemplate';
import Register from './Pages/Register';
import DemoUseNavigate from './Pages/ReactRouterDom/DemoUseNavigate';
import ForGotPass from './Pages/ReactRouterDom/ForGotPass';
import DemoUseParam from './Pages/ReactRouterDom/DemoUseParam';
import HeaderHome from './Templates/HeaderHome';
import DemoUseSearchParam from './Pages/ReactRouterDom/DemoUseSearchParam';
import AntdDemo from './Pages/AntdDemo/AntdDemo';
//setup redux
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ChangeNumberRedux from './Pages/ReduxDemo/ChangeNumberRedux';


createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='' element={<HomeTemplate />}>
            <Route index element={<HomeIndex />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register />}></Route>
            <Route path='antd' element={<AntdDemo />}></Route>
            <Route path='redux-change-number' element={<ChangeNumberRedux />}></Route>
          </Route>
          <Route path='api' element={<div>
            <header className='bg-dark text-white p-3'>Header</header>
            <Outlet />
            <footer className='bg-dark text-white p-3'>footer</footer>
          </div>}>
            <Route path='todolist' element={<ToDoListApi />} />
            <Route path='productpage' element={<ProductsPage />} />
          </Route>
          <Route path='react-router-dom' element={<HomeTemplate />}>
            <Route path='demo-use-navigate' element={<DemoUseNavigate />}></Route>
            <Route path='for-got-pass' element={<ForGotPass />}></Route>
            <Route path='use-search-param' element={<DemoUseSearchParam />}></Route>
          </Route>
          <Route path='demo-use-param'>
            <Route path=':id' element={
              <div>
                <HeaderHome />
                <DemoUseParam />
              </div>
            }></Route>
          </Route>

        </Routes>
      </Provider>
    </BrowserRouter>
  </>
)


