import { Component, FC } from 'react';

const Layout: FC<{ children: any }> = ({ children }) => {
    return (
        <>
            <div className="relative bg-white h">
                <div className="mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="/">
                                <span className="sr-only">Workflow</span>
                                <img
                                    className="h-8 w-auto sm:h-10"
                                    src="https://www.seekpng.com/png/detail/64-647457_breaking-bad-logo-rug-breaking-bad-logo-transparent.png"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <button
                                type="button"
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open menu</span>
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                        <nav className="hidden md:flex space-x-10">
                            <a
                                href="/characters"
                                className="font-medium text-gray-500 hover:text-gray-900"
                            >
                                Character
                            </a>

                            <a
                                href="/episodes"
                                className="font-medium text-gray-500 hover:text-gray-900"
                            >
                                Episode
                            </a>


                            <a
                                href="/quiz"
                                className="font-medium text-gray-500 hover:text-gray-900"
                            >
                                Quiz
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
            {children}
        </>
    );
}

export default Layout;