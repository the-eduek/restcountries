import { Link } from "react-router-dom";

function Header({ theme, changeTheme }) {  
  return (
    <header className="px-4 py-6 flex justify-between items-center fixed z-20 shadow-md shadow-gray-100 top-0 w-full bg-white sm:px-12 xl:px-24 text-[color:var(--darkText)] dark:bg-[color:var(--darkBlue)] dark:text-[color:var(--whiteText)] dark:shadow-black/20">
      <h2 className="font-bold text-lg font-mono tracking-tighter md:text-2xl"><Link to={'/'}>Where in the world?</Link></h2>
      <button onClick={ () => changeTheme(theme) }>
        { theme === 'light' ?
          <span  className="inline-flex items-center text-xs md:text-base">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 mr-1 md:w-6 md:h-6">
              <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" className="fill-current"></path>
          </svg> Dark Mode
          </span> :
          <span className="inline-flex items-center text-xs md:text-base">
            <svg viewBox="0 0 24 24" fill="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-1 md:w-6 md:h-6">
              <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="fill-current stroke-current"></path>
              <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-current"></path>
            </svg> Light Mode
          </span>
        }
      </button>
    </header>
  );
}

export default Header;