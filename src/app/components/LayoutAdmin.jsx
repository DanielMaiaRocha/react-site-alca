"use client"
import { getSession, useSession } from "next-auth/react";
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
        return <div>Loading...</div>;
    }


    if (!session) {
        setTimeout(() => {
            router.push("/login");
        }, 9999999999);
        return <div>Redirecting to login...</div>;
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
