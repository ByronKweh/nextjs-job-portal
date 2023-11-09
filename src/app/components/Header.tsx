"use client";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const renderButton = () => {
    if (
      typeof localStorage === "undefined" ||
      !localStorage ||
      !localStorage.getItem("jwt")
    ) {
      return (
        <button
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          onClick={() => router.push("login")}
        >
          Login
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      );
    }

    return (
      <>
        {/* <button
        
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          onClick={() => {
            localStorage.removeItem("jwt");
            window.location.href = "/";
          }}
        >
          Profile
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> */}

        <div className="group relative cursor-pointer ">
          <div className="flex items-center justify-between space-x-5 px-4">
            <a
              className="menu-hover my-2 py-2 text-base font-medium text-grey-500"
              // onClick=""
              onClick={() => router.push(`/profile`)}
            >
              Account
            </a>
          </div>
          <div
            className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
            style={{ fontSize: 12 }}

            // onClick=""
          >
            <a
              className="my-1 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
              onClick={() => router.push(`/profile`)}
            >
              Profile
            </a>

            <a
              className="my-1 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
              onClick={() => router.push(`/posted-jobs`)}
            >
              Posted jobs
            </a>
            <a
              className="my-1 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
              onClick={() => router.push(`/my-resume`)}
            >
              Resume
            </a>
            <a
              className="my-1 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
              onClick={() => {
                localStorage.removeItem("jwt");
                window.location.href = "/";
              }}
            >
              Log out
            </a>
          </div>
        </div>
      </>
    );
  };

  return (
    <header className="text-gray-400 bg-gray-900 body-font w-full z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Jobz</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
          <a onClick={() => router.push(`/`)} className="mr-5 hover:text-white">
            Home
          </a>
          <a className="mr-5 hover:text-white">Jobs</a>
          <a className="mr-5 hover:text-white">Resources</a>
          <a
            className="mr-5 hover:text-white"
            onClick={() => router.push(`/contact`)}
          >
            Contact
          </a>
        </nav>
        {renderButton()}
      </div>
    </header>
  );
}
