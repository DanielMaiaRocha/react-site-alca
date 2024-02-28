import Link from "next/link";

const Navlink = ({href, title}) => {
    return (
        <Link 
        href={href} 
            className='block py-2 pl-3 pr-4 font-semibold text-[#121212] sm:text-sl rounded md:p-0 hover:text-[#433d3d]' >
          {title}
        </Link>
    )
}

export default Navlink;
