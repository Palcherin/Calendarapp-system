import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook within the component

    const handleNavigate = () => {
        navigate('/date'); // Call navigate function to navigate to '/'
    };

    return (
        <div className='flex flex-col justify-center items-center pt-16 pr-20 md:pt-0 md:mr-20 w-full h-screen bg-pink-50'>
            <h1 className='text-4xl md:text-2xl font-bold'>Welcome to my Event Reminder</h1>
            <p className='text-xl font-light'>The big day at your fingertips!!</p>
            <button className='bg-blue-500 w-40 h-12 rounded-full hover:bg-blue-400 mt-8' onClick={handleNavigate}>Get started</button>
        </div>
    );
};

export default Home;
