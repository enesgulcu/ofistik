'use client'
import Navbar from '@/containers/dashboard/_components/Navbar'
import Sidebar from '@/containers/dashboard/_components/Sidebar'
import React, { useState } from 'react'

const MainLayout = ({ children }) => {
    const [sideOpen, setSideOpen] = useState(false)

    const changeSideBar = () => {
        setSideOpen(prev => !prev)
    }

    return (
        <div className="flex h-screen w-full overflow-hidden bg-white pb-4">
            <Sidebar/>

            <div className="flex flex-1 w-full flex-col h-full px-4 gap-4">
                <Navbar/>

                <div className="flex flex-1 h-full overflow-y-scroll px-2 pt-2 rounded-lg bg-[#dedede]">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MainLayout
