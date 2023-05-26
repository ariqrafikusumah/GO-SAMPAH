import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="lg:px-32">
                <div className="flex items-center justify-between py-4">
                    <div className="italic text-2xl font-bold">
                        GO-<span className="text-green-500">SAMPAH</span>
                    </div>
                    <button
                        className="lg:hidden p-2.5"
                        type='button'
                        onClick={toggleNavbar}
                        aria-label="Toggle navigation"
                    >
                        <div>
                            <svg
                                className="w-6 h-6 fill-current text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M19.293 5.293a1 1 0 011.414 0l.707.707a1 1 0 010 1.414l-7.414 7.414a1 1 0 01-1.414 0L2.586 7.414a1 1 0 010-1.414l.707-.707a1 1 0 011.414 0l7.414 7.414a1 1 0 001.414 0l7.414-7.414z"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm1 5a1 1 0 100 2h14a1 1 0 100-2H5zm-1 5a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1z"
                                    />
                                )}
                            </svg>
                        </div>
                    </button>
                </div>

                <div
                    className={`${isOpen ? 'block' : 'hidden'
                        } lg:flex lg:items-center lg:justify-between`}
                >
                    <ul className="lg:flex lg:space-x-4">
                        <li className="py-3 font-bold">
                            <a href="/" className="hover:text-green-400 duration-500">
                                Beranda
                            </a>
                        </li>
                        <li className="py-3 font-bold">
                            <a href="#" className="hover:text-green-400 duration-500">
                                Tentang Kami
                            </a>
                        </li>
                        <li className="py-3 font-bold">
                            <a href="#" className="hover:text-green-400 duration-500">
                                Drop Point
                            </a>
                        </li>
                        <li className="py-3 font-bold">
                            <a href="#" className="hover:text-green-400 duration-500">
                                Layanan Kami
                            </a>
                        </li>
                    </ul>

                    <a
                        href="#"
                        className="inline-block text-white bg-green-500 hover:bg-green-300 duration-500 border p-2 rounded-lg"
                    >
                        Masuk
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
