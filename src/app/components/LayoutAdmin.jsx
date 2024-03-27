"use client"
import { getSession, useSession } from "next-auth/react";
import Image from "next/image";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useRouter } from "next/navigation";


const createJwt = (user) => {
    const token = {
 
        sub: user.id,
        name: user.name,
        email: user.email,
   
    };
    
    const encodedToken = JSON.stringify(token);
    return encodedToken;
};


export default function LayoutAdmin({ children }) {
    const router = useRouter();
    const { data: session, status } = useSession();


    if (status === "loading") {
        return <div className="flex flex-col justify-center items-center mt-80 delay-500">
                <Image 
                    src={"/images/logo.png"}
                    alt="/"
                    width={200}
                    height={200}
                />
                <AiOutlineLoading3Quarters className="animate-spin mr-2 w-9 h-9 font-bold"/>
            </div>;
    }


    if (!session) {
        setTimeout(() => {
            router.push("/login");
        }, 10);
        return <div className="flex flex-col justify-center items-center mt-80 delay-500">
        <Image 
            src={"/images/logo.png"}
            alt="/"
            width={200}
            height={200}
        />
        <AiOutlineLoading3Quarters className="animate-spin mr-2 w-9 h-9 font-bold"/>
    </div>;
    }

    
    const jwt = createJwt(session.user);

    return (
        <div className="min-h-screen">
            {children}
        </div>
    );
}


export async function getServerSideProps(context) {
    const session = await getSession(context);
    return {
        props: {
            session,
        },
    };
}
