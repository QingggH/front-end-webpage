import './register-form.css';
import React, { useId, useState, useEffect } from 'react';

function RegisterForm({ onClose, onRegister }) {
    const [username, setUsername] = useState('');
    const [usernameIsMissing, setUsernameIsMissing] = useState(false);
    const [otherFieldVisible, setOtherFieldVisible] = useState(false);
    const [sameAddressChecked, setSameAddressChecked] = useState(false);
    const [shippingAddress, setShippingAddress] = useState('');
    const [billingAddress, setBillingAddress] = useState('');
    const [selectedMake, setSelectedMake] = useState('janesmith');
    const [appTime, setAppTime] = useState(['Monday 10 a.m.', 'Tuesday 10 a.m.', 'Wednesday 10 a.m.']);
    const id = useId();

    useEffect(() => {
        updateModels();
    }, []);

    function usernameIsValid(name) {
        return !!name;
    }
    const toggleOtherField = (e) => {
        console.log("Selected value:", e.target.value);
        setOtherFieldVisible(e.target.value === 'other');

    };

    const toggleBillingAddress = () => {
        setSameAddressChecked(!sameAddressChecked);

        if (!sameAddressChecked) {
            setBillingAddress(shippingAddress);
        } else {
            setBillingAddress('');
        }
    };

    const updateModels = () => {
        if (selectedMake === 'janesmith') {
            setAppTime(['Monday 10 a.m.', 'Tuesday 10 a.m.', 'Wednesday 10 a.m.']);
        } else if (selectedMake === 'michaeljohnson') {
            setAppTime(['Tuesday 3 p.m.', 'Thursday 10 a.m.', 'Friday 2 p.m.']);
        }
    };

    const addOptionsToDropdown = (options) => {
        return options.map((option, index) => (
            <option key={index} value={option}>
                {option}
            </option>
        ));
    };


    return (
        <form
            className="register"
            onSubmit={(e) => {
                e.preventDefault();

                setUsernameIsMissing(!usernameIsValid(username));
                if (usernameIsValid(username)) {
                    alert('Thank you for your registeration');
                    console.log("register");
                    onRegister(username);
                    setUsername('');
                }
                else {
                    console.log('blocked');
                }
            }}
        >
            <span>* = Required</span>
            <label className={`${id}-username`}>
                Username*
            </label>
            {usernameIsMissing && <span className='form-alert'>Username is required</span>}
            <input id={`${id}-username`}
                value={username}
                onInput={(e) => {
                    setUsername(e.target.value);
                    setUsernameIsMissing(!usernameIsValid(e.target.value));
                }
                }
            />
            <label className={`${id}-email`}>
                Email
            </label>
            <input id={`${id}-email`} />
            <label className="dropdown">How would you like us to contact you ?</label>
            <select id="dropdown" value={otherFieldVisible ? "other" : selectedMake} onChange={toggleOtherField}>
                <option value="option1">Email</option>
                <option value="other">Other</option>
            </select>


            {otherFieldVisible && (
                <div className="other-field">
                    <label className="otherInput">Please provide specific contact information:</label>
                    <input type="text" id="otherInput" />
                </div>
            )}


            <label className="shippingAddress">Shipping Address:</label>

            <input
                type="text"
                id="shippingAddress"
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
            />
            <label>
                <input type="checkbox" id="sameAddress" onChange={toggleBillingAddress} /> Billing address same as shipping
                address
            </label>

            <label className="billingAddress">Billing Address:</label>
            <input
                type="text"
                id="billingAddress"
                readOnly={sameAddressChecked}
                value={billingAddress}
                onChange={(e) => setBillingAddress(e.target.value)}
            />


            <label className="make">Preferred Designer:</label>
            <select id="make" onChange={(e) => { setSelectedMake(e.target.value); updateModels(); }}>
                <option value="janesmith">Jane Smith</option>
                <option value="michaeljohnson">Michael Johnson</option>
            </select>

            <label className="model">Appointment Time:</label>
            <select id="model">{addOptionsToDropdown(appTime)}</select>
            <button type="submit">Register</button>
            <button type="button" onClick={onClose}>
                Close
            </button>
        </form>
    );
}

export default RegisterForm;
