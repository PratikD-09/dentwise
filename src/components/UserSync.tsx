"use client";

import { syncUser } from "@/lib/actions/users";
import { useUser } from "@clerk/nextjs"
import { useEffect } from "react";

function UserSync() {
    const { isLoaded, isSignedIn } = useUser();

    useEffect(() => {

        const hanedleSyncUser = async () => {
            try {
                await syncUser();
            } catch (error) {
                console.log("Failed to sync user", error)
            }
        }

        hanedleSyncUser();

    }, [isLoaded, isSignedIn])

    return null;

}

export default UserSync
