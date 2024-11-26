import React, { useEffect } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Header from './components/header'; // Assuming Header is a separate component
import Footer from './components/footer'; // Assuming Footer is a separate component

function Refresh() {
    const navigate = useNavigate();

    useEffect(() => {
    // Delay of 1 second (1000ms)
    const timer = setTimeout(() => {
      navigate('/profile'); // Routes to the Profile page
    }, 3000);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
    }, [navigate]);

    return (
    <div className="min-h-screen">
        <Header />
        <div className="flex flex-col items-center justify-center h-96 text-center mb-28">
            <AiOutlineLoading3Quarters className="text-6xl animate-spin" />
            <h1 className="mt-4">Redirecting you to your listings. Please Wait....</h1>
        </div>
        <Footer />
        </div>
    );
}

export default Refresh;