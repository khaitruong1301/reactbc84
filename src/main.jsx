import { createRoot } from 'react-dom/client';
//import css
import "./css/index.css";
import BT_StateProps from './Props/BT_StateProps/BT_StateProps';
import ProductsPage from './api/ProductsPage';
import ToDoListApi from './api/ToDoListApi';
import DemoFormLogin from './Form/DemoFormLogin';
import DemoFormik from './Form/DemoFormik';

/*
  Phân biệt state và props:
  state: giá trị thay đổi dùng để binding lên giao diện, state có thể gán lại giá trị ( state,setState)
  props: giá trị có thể thay đổi dùng để binding lên giao diện, props không thể gán lại giá trị (readonly)
*/

createRoot(document.getElementById('root')).render(
  <>
   {/* <BT1_HomeComponent /> */}
   {/* <DataBinding /> */}
   {/* <HandleEvent /> */}
    {/* <RenderCondition /> */}
    {/* <DemoState /> */}
    {/* <DemoChangeNumber /> */}
    {/* <DemoChangeColor /> */}
    {/* <DemoTinker /> */}
    {/* <DemoStyle /> */}
    {/* <DemoProps /> */}
    {/* <BT_ProductList /> */}
    {/* <BT_StateProps /> */}
    {/* <BT_ChonXe /> */}
    {/* <ProductsPage /> */}
    {/* <ToDoListApi /> */}
    {/* <DemoFormLogin /> */}
    <DemoFormik />
  </>
)


