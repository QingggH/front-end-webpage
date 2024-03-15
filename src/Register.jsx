import React, { useRef, useState } from 'react';
import RegisterForm from './RegisterForm';
import './Register.css';

function Register() {
    const modalRef = useRef();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="register-container">
            <h1 className="title">Make your appointment today !</h1>
            <button className="register-button" onClick={openModal}>
                Register now
            </button>

            {isModalOpen && (
                <dialog ref={modalRef} open>
                    <RegisterForm onClose={closeModal} />
                </dialog>
            )}
        </div>
    );
}

export default Register;





