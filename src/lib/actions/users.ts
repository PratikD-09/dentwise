"use server"

import { currentUser } from "@clerk/nextjs/server"
import { prisma } from "../prisma"
import { Phone } from "lucide-react";


export async function syncUser() {
    try {

        const user = await currentUser();

        if (!user) return

        const exsistingUser = await prisma.user.findUnique({ where: { clerkId: user.id } })

        if (exsistingUser) return exsistingUser

        const dbUser = await prisma.user.create({
            data: {
                clerkId: user.id,
                firstName: user.firstName,
                email: user.emailAddresses[0].emailAddress,
                phone: user.phoneNumbers[0]?.phoneNumber
            }
        })

        return dbUser

    } catch (error) {

        console.log("Error in user sync", error)

    }

}






