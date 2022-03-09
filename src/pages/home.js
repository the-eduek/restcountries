import { useState } from "react";
import Message from "../components/message";
import Country from "../components/country";

function Home ({ countries, isLoading, errorMessage }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('');

  return (
    <main className="bg-[color:var(--lightBackground)] text-[color:var(--darkText)] px-4 pt-20 pb-10 min-h-screen xl:px-16 xl:py-24 md:pb-20 dark:bg-[color:var(--darkBackground)] dark:text-[color:var(--whiteText)]">
      <div className="px-6">
        <form 
          onSubmit={(e) => e.preventDefault() }
          className={`${errorMessage ? 'opacity-0' : ''} md:flex md:justify-between md:mt-2 md:mb-6`}
        >
          <div className="my-6 relative text-[color:var(--darkGray)] z-10 md:w-1/2 lg:w-2/5 dark:text-[color:var(--whiteText)]">
            <input
              type="search"
              value={searchTerm}
              placeholder="Search for a country"
              onChange={(e) => setSearchTerm(e.target.value) }
              disabled={ errorMessage ? true : false }
              className="w-full py-3 pl-8 pr-4 rounded text-xs shadow shadow-neutral-200 outline-none focus:ring-2 focus:ring-neutral-400 transition disabled:opacity-0 md:py-4 md:pl-16 md:text-sm xl:py-5 dark:shadow-black/20 dark:bg-[color:var(--darkBlue)]"
            />
            <svg width="24 "height="24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="absolute top-2 stroke-current left-1 md:left-6 md:top-3.5 xl:top-[18px]">
              <path d="m19 19-3.5-3.5"></path>
              <circle cx="11" cy="11" r="6"></circle>
            </svg>
          </div>

          <div className="my-6 shadow shadow-neutral-200 dark:shadow-black/20">
            <select 
              value={region}
              onChange={(e) => setRegion(e.target.value) }
              className="w-full py-3 px-4 rounded text-xs outline-none focus:ring-2 focus:ring-neutral-300 transition md:py-4 md:w-52 md:text-sm xl:py-5 dark:bg-[color:var(--darkBlue)]"
            >
              <option value="" className="w-full text-[color:var(--darkGray)]">Filter by Region</option>
              <option value="africa" className="w-full">Africa</option>
              <option value="americas" className="w-full">America</option>
              <option value="asia" className="w-full">Asia</option>
              <option value="europe" className="w-full">Europe</option>
              <option value="oceania" className="w-full">Oceania</option>
            </select>
          </div>
        </form>

        <ul className="grid gap-10 sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] xl:gap-20">
          { countries && 
            countries.sort((a, b) => {
              const name1 = a.name.common.toLowerCase();
              const name2 = b.name.common.toLowerCase();

              if (name1 < name2) return - 1
              else if (name1 > name2) return 1
              else return 0
            }).filter(country => country.name.common.toLowerCase().search(searchTerm.toLowerCase()) !== -1)
              .filter(country => country.region.toLowerCase().search(region) !== -1)
              .map(country => <Country data={country} key={country.name.common} />) 
          }
        </ul>

        { isLoading && <Message success={isLoading} />}
        { errorMessage && <Message failure={errorMessage} />}
      </div>
    </main>
 );
}
 
export default Home;