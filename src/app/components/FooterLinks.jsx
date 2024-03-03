import Link from "next/link";

const FooterLink = ({href, title}) => {
    return (
        <Link 
        href={href} 
            className='block py-2 pl-3 pr-4 font-customFont3 font-semibold text-white sm:text-sl rounded md:p-0 hover:text-zinc-400' >
          {title}
        </Link>
    )
}

export default FooterLink;
