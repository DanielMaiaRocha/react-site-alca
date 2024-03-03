import Link from "next/link";

const Navlink = ({href, title}) => {
    return (
        <Link 
        href={href} 
            className='block py-2 pl-3 pr-4 font-customFont3 font-semibold text-zinc-900 sm:text-2xl rounded md:p-0 hover:text-zinc-700' >
          {title}
        </Link>
    )
}

export default Navlink;
