import React, { useState } from 'react'
import HOCModal from './HOCModal'
import Login from '../Login'
import Register from '../Register';

/*
    HOC (Higher Order Component) là một hàm nhận vào một component và trả về một component mới.
    HOC  dùng để tại sử dụng giao diện cũng như logic của 1 giao diện component trong component khác
*/
//dnd component
const DemoHOC = () => {
    const [component, setComponent] = useState("Login");
    let HOCModalDemo = HOCModal("Component", Login);
    if (component === "Login") {
        HOCModalDemo = HOCModal("Component", Login);
    } else if (component === "Register") {
        HOCModalDemo = HOCModal("Component", Register);
    }
    return (
        <div>
            {/* Modal trigger button */}
            <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId" onClick={()=>{
                setComponent("Register");
            }}>
                Open register
            </button>

             <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId" onClick={()=>{
                setComponent("Login");
            }}>
                Open login
            </button>
            <HOCModalDemo />
        </div>
    )
}

export default DemoHOC