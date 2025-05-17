import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function MenuHamburguesa() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative ml-8">
            <button
                className="text-dark text-2xl md:hidden"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            {isOpen && (
                <div className="absolute top-12 right-0 bg-white shadow-lg p-4 rounded-lg w-48">
                    <ul className="flex flex-col items-start">
                        <li>
                            <Link className="hover:text-primary" href="/experiencia" title="experiencia">
                                Experiencia
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-primary" href="/portfolio" title="portfolio">
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-primary" href="/voluntariado" title="voluntariado">
                                Voluntariado
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}