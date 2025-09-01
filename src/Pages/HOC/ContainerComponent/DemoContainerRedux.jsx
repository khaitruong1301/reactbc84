import React from 'react'
import Login from '../../Login'
import { useDispatch } from 'react-redux';
import { setComponent } from '../../../redux/ModalReducer';
import Register from '../../Register';

function DemoContainerRedux() {
    const dispatch = useDispatch();
    return (
        <div className='container'>
            <h3>DemoContainerRedux</h3>
            <p>This is a demo container using Redux.</p>
            <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#modalRedux" onClick={() => {
                const action = setComponent({
                    title: 'Login',
                    component: <Login />
                });
                //Dispatch action thay đổi title và component trên redux 
                dispatch(action);
            }}>
                open login
            </button>


            <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#modalRedux" onClick={() => {
                const action = setComponent({
                    title: 'Register',
                    component: <Register />
                });
                //Dispatch action thay đổi title và component trên redux 
                dispatch(action);
            }}>
                open register
            </button>


        </div>
    )
}

export default DemoContainerRedux

