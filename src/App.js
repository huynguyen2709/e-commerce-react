import React from 'react';
import Products from './components/Products';
import Navbar from './components/Navbar/Navbar';

function App(props) {
    return (
        <div>
            <Navbar />
            <Products />
        </div>
    );
}

export default App; 
