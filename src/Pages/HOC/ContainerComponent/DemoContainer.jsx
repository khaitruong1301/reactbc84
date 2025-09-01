import React, { useState } from 'react'
import Login from '../../Login'
import ContainerModal from './ContainerModal'
import Register from '../../Register';

const DemoContainer = () => {
    const [component, setComponent] = useState(<Login />);

    return (
        <div>
            <h3>Demo Container Component</h3>
            <ContainerModal component={component} title="login" />
            {/* Modal trigger button */}
            <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId" onClick={() => {
                setComponent(<Login />)
            }}>
                open modal login
            </button>
             <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId" onClick={() => {
                setComponent(<Register />)
            }}>
                open modal register
            </button>
        </div>
    )
}

export default DemoContainer