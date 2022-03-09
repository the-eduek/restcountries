import { Link, useNavigate, useParams } from "react-router-dom";
import Message from "../components/message";
import useFetch from "../useFetch";

function CountryDetails({ countries }) {
  const navigate = useNavigate();
  const { countryId } = useParams();
  const { data:country, isLoading, errorMessage } = useFetch('https://restcountries.com/v3.1/name/'+countryId+'?fullText=true');

  if (countries) {
    const title = countries.find(country => country.name.common.toLowerCase() === countryId);
    document.title = `${title.name.common} — Where in the world?`;
  } else if (country) document.title = `{${country[0].name.common} — Where in the world?`;

  return (
    <main className="text-[color:var(--darkText)] px-6 pt-28 pb-20 min-h-screen sm:px-12 xl:px-20 dark:bg-[color:var(--darkBackground)] dark:text-[color:var(--whiteText)]">
      <button onClick={() => navigate(-1)} className={`inline-flex items-center py-2.5 px-6 bg-white rounded shadow-md shadow-gray-400 font-light ${ country ? '' : 'opacity-0'} md:text-base md:my-4 md:py-3 md:px-10 xl:my-10 dark:bg-[color:var(--darkBlue)] dark:text-[color:var(--whiteText)] dark:shadow-black/20`}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
      </svg> Back
      </button>
      { country && 
        <article className="lg:flex lg:flex-wrap lg:items-center">
          <div className="shadow-md shadow-gray-300 my-12 lg:self-start lg:w-2/5 xl:w-[45%] dark:shadow-black/20">
            <img 
              src={ country[0].flags.svg }
              alt={ country[0].name.common.toLowerCase() + '\'s flag'} 
              className=" w-full h-full object-cover object-center"
            />
          </div>
          <div className="lg:w-3/5 lg:pl-16 xl:pl-28  xl:w-[55%]">            
            <h1 className="font-bold text-xl py-4 md:text-3xl md:py-8 ">{ country[0].name.official }</h1>
            <div className="lg:flex lg:justify-between 2xl:justify-start">
              <div>
                <p className="leading-8"><span className="font-medium">Common Name: </span>{ country[0].name.common }</p>
                <p className="leading-8"><span className="font-medium">Native Name: </span>
                {
                  !country[0].name.nativeName ? <span>&mdash;</span> :
                  Object.keys(country[0].name.nativeName).map((name, i) => (
                    <span key={i} className="capitalize">
                      {i > 0 ? ', ': ''}
                      {country[0].name.nativeName[name].official}
                    </span>
                  ))
                }
                </p>
                <p className="leading-8"><span className="font-medium">Population: </span>{ country[0].population.toLocaleString() }</p>
                <p className="leading-8"><span className="font-medium">Region: </span>{ country[0].region }</p>
                <p className="leading-8"><span className="font-medium">Sub Region: </span>{ country[0].subregion ? country[0].subregion : <span>&mdash;</span> }</p>
                <p className="leading-8"><span className="font-medium">Capital: </span>
                  { country[0].capital ? country[0].capital.join(', ') : <span>&mdash;</span> }
                </p>
              </div>
              <div className="py-8 lg:p-0 lg:pl-8 2xl:pl-20">
                <p className="leading-8"><span className="font-medium">Top Level Domain: </span>{ country[0].tld[0] }</p>
                <p className="leading-8"><span className="font-medium">Currencies: </span>
                  { 
                    !country[0].currencies ? <span>&mdash;</span> :
                    Object.keys(country[0].currencies).map((currency, i) => (
                      <span key={i} className="capitalize">
                        {i > 0 ? ', ': ''}
                        {country[0].currencies[currency].name} ({currency})
                      </span>
                    ))
                  }
                </p>
                <p className="leading-8"><span className="font-medium">Languages: </span>
                { 
                  !country[0].languages ? <span>&mdash;</span> :
                  Object.keys(country[0].languages).map((language, i) => 
                    <span key={i} className="capitalize">
                      {i > 0 ? ', ': ''}
                      {country[0].languages[language]}
                    </span>
                  )
                }
                </p>
              </div>
            </div>
            <div className={`${!country[0].borders ? 'flex' : ''} lg:mt-14`}>
              <h2 className="font-medium text-base lg:w-36">Border Countries: </h2>
              {
                !country[0].borders ? <span className="block leading-6 pl-1">None&mdash;</span> :
                <div className="-ml-1.5 pt-2">
                  {
                    country[0].borders.map((border, i) => {
                      const matchingCountry = countries.find(country => country.cca3 === border);

                      return <Link key={i} to={`/countries/${matchingCountry.name.common.toLowerCase()}`} className="inline-flex py-1.5 px-6 bg-white rounded shadow shadow-gray-400 font-light m-1.5 dark:bg-[color:var(--darkBlue)] dark:text-[color:var(--whiteText)] dark:shadow-black/20">{ matchingCountry.name.common }</Link>
                    })
                  }
                </div>
              }
            </div>
          </div>
        </article>
      }

      { isLoading && <Message success={isLoading} />}      
      { errorMessage && <Message failure={errorMessage} />}
    </main>
  );
}
 
export default CountryDetails;