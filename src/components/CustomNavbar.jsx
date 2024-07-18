"use client";
import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";

function CustomNavbar(){
    //console.log("this is component")

    async function doLogout() {
        try {
            const result = await logout()
            console.log(result)
            context.setUser(undefined)
            router.push("/")
        } catch (error) {
            toast.error("logout error",{
                position: "top-right",
            })
        }
    }

    const context = useContext(UserContext)
    const router = useRouter();
    return(
        <div>
            <nav>
                <div className="bg-gray-800 h-15 py-2 px-14 flex justify-between items-center">
                    <div className="flex-shrink-0">
                        <a href="/" className="text-2xl font-bold text-white">Task Track</a>
                    </div>
                    <div>
                        <ul className="flex space-x-5">
                                        <li>
                                            <Link href={"/"} className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                                        </li>
                            
                            {
                                context.user &&(
                                    <>
                                        <li>
                                            <Link href={"/add-task"} className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Add Task</Link>
                                        </li>
                                        <li>
                                            <Link href={"/show-task"} className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Show Task</Link>
                                        </li>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                    <div>
                        <ul className="flex space-x-3">
                            {context.user &&(
                                    <>
                                        <li>
                                            <Link href={"#"} className="mr-3">{context.user.name}</Link>
                                        </li>
                                        <li>
                                            <button onClick={doLogout}>Logout</button>
                                        </li>
                                    </>
                                )
                            }
                            {!context.user &&(
                                <>
                                    <li>
                                        <Link href="/login">Login</Link>
                                    </li>
                                    <li>
                                        <Link href="/signup">SignUp</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default CustomNavbar 