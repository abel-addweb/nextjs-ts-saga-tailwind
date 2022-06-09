
const Intro = () => {
  return (
    <div className="relative bg-white overflow-hidden h-screen w-screen">
      <div className="max-w-8xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="/">
                      <span className="sr-only">Workflow</span>
                      <img
                        alt="breaking bad logo"
                        className="h-8 w-auto sm:h-10"
                        src="https://www.seekpng.com/png/detail/64-647457_breaking-bad-logo-rug-breaking-bad-logo-transparent.png"
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <button
                        type="button"
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        aria-expanded="false"
                      >
                        <span className="sr-only">Open main menu</span>
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
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
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
                </div>
              </nav>
            </div>

            <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <span className="sr-only">Close main menu</span>
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
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
                    href="/quotes"
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    Qoute
                  </a>

                  <a
                    href="/quiz"
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    Quiz
                  </a>
                </div>
              </div>
            </div>
          </div>

          <main className="mt-10 mx-auto max-w-8xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Website for fans of</span>
                <span className="block text-green-800 xl:inline">
                  breaking bad.
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                A high school chemistry teacher diagnosed with inoperable lung
                cancer turns to manufacturing and selling methamphetamine in
                order to secure his family's future.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/random"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-900 md:py-4 md:text-lg md:px-10"
                  >
                    Random Character
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://occ-0-92-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABeq9Fg04r6qPCr1dq7VKOglPPuluLbGBoyy60tgKnh9KsXWh5Y2VaY7jDWhrl4QQV1NhshZxCtLJrM_3V_WJc5J0p-eW.jpg?r=776"
          alt=""
        />
      </div>
    </div>
  );
}

export default Intro;