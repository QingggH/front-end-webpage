import React from 'react';
import Home from './Home';
import Designers from './Designers';
import AboutStyles from './AboutStyles';
import AboutCases from './AboutCases';
import Register from './Register';


const MainArea = ({ page, setPage }) => {
    return (
        <div className="mainArea">
            {page === 'Home' && <Home />}
            {page === 'About' && <About setPage={setPage} />}
            {page === 'Designers' && <Designers setPage={setPage} />}
            {page === 'Register' && <Register setPage={setPage} />}
            {page === 'AboutStyles' && <AboutStyles setPage={setPage} />}
            {page === 'AboutCases' && <AboutCases setPage={setPage} />}
        </div>
    );
}

export default MainArea;