import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Link, useLocation } from "react-router"

export const CustomMenu = () => {
    const { pathname } = useLocation();


    const isActive = (path: string) => {
        return pathname === path;
    }

    return (
        <NavigationMenu className="py-5">
            <NavigationMenuList>

                {/*Menu*/}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild
                        className={cn(isActive("/") && "bg-slate-300 rounded-md p-2")}>
                        <Link to="/">Home</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/*Search*/}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild
                        className={cn(isActive("/search") && "bg-slate-300 rounded-md p-2")}>
                        <Link to="/search">Search Heroes</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>


            </NavigationMenuList>
        </NavigationMenu>
    )
}
