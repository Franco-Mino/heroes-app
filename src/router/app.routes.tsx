import { createBrowserRouter } from "react-router";
import { HomePage } from '../heroes/pages/home/HomePage';
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { AdminLayout } from "@/admin/layouts/AdminLayout";
import { lazy } from "react";

// Lazy load pages  
const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage'));
const AdminPage = lazy(() => import('@/admin/pages/AdminPage'));
const HeroPage = lazy(() => import('@/heroes/pages/hero/HeroPage'));


export const appRouter = createBrowserRouter([

    {
        path: "/",
        element: <HeroesLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "heroes/1",
                element: <HeroPage />
            },
            {
                path: "search",
                element: <SearchPage />
            },
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <AdminPage />
            }
        ]
    },
])