'use client';

import { UserButton, useAuth, useUser } from "@clerk/nextjs";



const protectedPage = () =>{
    const {userId} = useAuth()
    const {user} = useUser();
    return (
        <div>
            User: {user?.firstName}{userId}
            <UserButton />
        </div>
    )
}

export default protectedPage;