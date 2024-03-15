import { useState } from 'react';
import './index.css';
import './App.css';
import './Header.css';

import Header from './Header';
import Footer from './Footer';
import MainArea from './MainArea';


function App() {

  const [page, setPage] = useState('Home');
  return (
    <div className="app">
      <Header setPage={setPage} />
      <MainArea page={page} setPage={setPage} />
      <Footer />
    </div>
  );
}

export default App;

