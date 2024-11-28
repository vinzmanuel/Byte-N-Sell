import React, { useEffect, useState } from 'react';
import { SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';


function Header() {
    const { user, isSignedIn } = useUser();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setIsVisible(false); // Scrolling down and past 50px hides the header
        } else {
            setIsVisible(true); // Scrolling up shows the header
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lastScrollY]);

    return (
        <div
            className={`px-44 fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-transform duration-300 ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className="flex justify-between items-center p-5">
                <Link to="/" className="cursor-pointer">
                    <img src="/BYTENSELL-2.png" width={200} height={150} />
                </Link>

                <ul className="hidden md:flex gap-16">
                    <li className="font-bold hover:scale-105 transition-all cursor-pointer hover:text-primary">Home</li>
                    <li className="font-bold hover:scale-105 transition-all cursor-pointer hover:text-primary">Search</li>
                    <li className="font-bold hover:scale-105 transition-all cursor-pointer hover:text-primary">About Us</li>
                    <li className="font-bold hover:scale-105 transition-all cursor-pointer hover:text-primary">Contact</li>
                </ul>

                {isSignedIn ? (
                    <div className="flex items-center gap-5">
                        <UserButton />
                        <Link to={'/profile'}>
                            <Button>Go to Profile</Button>
                        </Link>
                    </div>
                ) : (
                    <SignInButton>
                        <Button>Login</Button>
                    </SignInButton>
                )}
            </div>
        </div>
    );
}

export default Header;
