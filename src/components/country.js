import { Link } from "react-router-dom";

function Country({ data: country }) {
  return (
    <li className="bg-white rounded-md shadow-md shadow-stone-200 overflow-hidden dark:bg-[color:var(--darkBlue)] dark:shadow-black/20">
      <Link to={`/countries/${country.name.common.toLowerCase()}`} className="flex justify-center shadow-md shadow-stone-100 h-40 dark:shadow-black/20">
        <div className="h-full w-full relative bg-cover bg-center before:transition before:absolute before:h-full before:w-full before:z-10 before:opacity-0 before:bg-neutral-800 before:top-0 hover:before:opacity-50" style={{ backgroundImage: `url(${country.flags.svg})` }}></div>
      </Link>
      <div className="px-6 pt-2 pb-10">
        <h2 className="font-bold text-lg py-4"><Link to={`/countries/${country.name.common.toLowerCase()}`} className="hover:opacity-80 transition">{ country.name.common }</Link></h2>
        <p className="leading-6"><span className="font-medium">Population: </span>{ country.population.toLocaleString() }</p>
        <p className="leading-6"><span className="font-medium">Region: </span>{ country.region }</p>
        <p className="leading-6"><span className="font-medium">Capital: </span>
          { country.capital ? country.capital.join(', ') : <span>&mdash;</span> }
        </p>
      </div>
    </li>
  );
}
 
export default Country;