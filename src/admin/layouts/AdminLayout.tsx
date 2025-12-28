import React, { Suspense } from 'react'
import { Outlet } from 'react-router'

export const AdminLayout = () => {
    return (
        <div className='bg-indigo-500'>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}
