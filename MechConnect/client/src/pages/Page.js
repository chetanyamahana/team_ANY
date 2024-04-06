import { useNavigate } from "react-router-dom";

const Page = () => {
  const navigate = useNavigate();
  return (
    <>
      <>
        {/* partial:index.partial.html */}
        <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
          <div className="flex flex-shrink-0 items-center ml-auto">
            <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
              <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                <span className="font-semibold">Anubhav </span>
                <span className="text-sm text-gray-600">Mechanic</span>
              </div>
            </button>
            <button
              onClick={() => {
                navigate("/chats");
              }}
              className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg"
            >
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
            <div className="border-l pl-3 ml-3 space-x-1">
              <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                <span className="sr-only">Log out</span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>
        <main className="p-6 sm:p-10 space-y-6">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
            <div className="mr-6">
              <h1 className="text-4xl font-semibold mb-2">
                {" "}
                Mechanic Dashboard{" "}
              </h1>
              <h2 className="text-gray-600 ml-0.5">Mech Connect </h2>
            </div>
          </div>
          <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="flex items-center p-8 bg-white shadow rounded-lg">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <span className="block text-2xl font-bold">62</span>
                <span className="block text-gray-500"> Customers </span>
              </div>
            </div>
            <div className="flex items-center p-8 bg-white shadow rounded-lg">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <div>
                <span className="block text-2xl font-bold">6.8</span>
                <span className="block text-gray-500">Average Rating</span>
              </div>
            </div>
            <div className="flex items-center p-8 bg-white shadow rounded-lg">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                  />
                </svg>
              </div>
              <div>
                <span className="inline-block text-2xl font-bold">9</span>
                <span className="inline-block text-xl text-gray-500 font-semibold">
                  (14%)
                </span>
                <span className="block text-gray-500">Negative Ratings </span>
              </div>
            </div>
            <div className="flex items-center p-8 bg-white shadow rounded-lg">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <span className="block text-2xl font-bold">83%</span>
                <span className="block text-gray-500">Customers Satisfied</span>
              </div>
            </div>
          </section>
          <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
            <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
              <div className="px-6 py-5 font-semibold border-b border-gray-100">
                Your Performance{" "}
              </div>
              <div className="p-4 flex-grow">
                <div className="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
                  Your Performance Chart{" "}
                </div>
              </div>
            </div>
            <div className="flex items-center p-8 bg-white shadow rounded-lg">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    fill="#fff"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <div>
                <span className="block text-2xl font-bold">25</span>
                <span className="block text-gray-500">Streak</span>
              </div>
            </div>
            <div className="flex items-center p-8 bg-white shadow rounded-lg">
              <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
                <svg
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <span className="block text-2xl font-bold">62</span>
                <span className="block text-gray-500">Jobs done</span>
              </div>
            </div>
            <div className="row-span-3 bg-white shadow rounded-lg">
              <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                <span>Ratings given to you by customers </span>
                {/* Refer here for full dropdown menu code: https://tailwindui.com/components/application-ui/elements/dropdowns */}
              </div>
              <div className="overflow-y-auto" style={{ maxHeight: "24rem" }}>
                <ul className="p-6 space-y-6">
                  <li className="flex items-center">
                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        src="https://randomuser.me/api/portraits/women/82.jpg"
                        alt="Annette Watson profile picture"
                      />
                    </div>
                    <span className="text-gray-600">Annette Watson</span>
                    <span className="ml-auto font-semibold">9.3</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        src="https://randomuser.me/api/portraits/men/81.jpg"
                        alt="Calvin Steward profile picture"
                      />
                    </div>
                    <span className="text-gray-600">Calvin Steward</span>
                    <span className="ml-auto font-semibold">8.9</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        src="https://randomuser.me/api/portraits/men/80.jpg"
                        alt="Ralph Richards profile picture"
                      />
                    </div>
                    <span className="text-gray-600">Ralph Richards</span>
                    <span className="ml-auto font-semibold">8.7</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        src="https://randomuser.me/api/portraits/men/79.jpg"
                        alt="Bernard Murphy profile picture"
                      />
                    </div>
                    <span className="text-gray-600">Bernard Murphy</span>
                    <span className="ml-auto font-semibold">8.2</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        src="https://randomuser.me/api/portraits/women/78.jpg"
                        alt="Arlene Robertson profile picture"
                      />
                    </div>
                    <span className="text-gray-600">Arlene Robertson</span>
                    <span className="ml-auto font-semibold">8.2</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        src="https://randomuser.me/api/portraits/women/77.jpg"
                        alt="Jane Lane profile picture"
                      />
                    </div>
                    <span className="text-gray-600">Jane Lane</span>
                    <span className="ml-auto font-semibold">8.1</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        src="https://randomuser.me/api/portraits/men/76.jpg"
                        alt="Pat Mckinney profile picture"
                      />
                    </div>
                    <span className="text-gray-600">Pat Mckinney</span>
                    <span className="ml-auto font-semibold">7.9</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                      <img
                        src="https://randomuser.me/api/portraits/men/75.jpg"
                        alt="Norman Walters profile picture"
                      />
                    </div>
                    <span className="text-gray-600">Norman Walters</span>
                    <span className="ml-auto font-semibold">7.7</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </>
    </>
  );
};

export default Page;