import { useSearchParams } from "react-router"
import { useEffect } from "react"
import { Heart } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomBreadcrumbs } from "@/components/Custom/CustomBreadcrumbs"
import { CustomPagination } from "@/components/Custom/CustomPagination"
import { CustomJumbotron } from "@/components/Custom/CustomJumbotron"
import { usePaginateHero } from "../hero/hooks/usePaginateHero"
import { SearchControls } from "../search/ui/SearchControls"
import { useHeroSummary } from "../hero/hooks/useHeroSummary"
import { HeroStats } from "../hero/components/HeroStats"
import { HeroGrid } from "../hero/components/HeroGrid"


const VALID_TABS = ['all', 'favorites', 'heroes', 'villains'] as const;
type Tab = typeof VALID_TABS[number];

const isValidTab = (value: string | null): value is Tab =>
    !!value && VALID_TABS.includes(value as Tab);



export const HomePage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = searchParams.get('tab');
    const page = searchParams.get('page') ?? '1';
    const limit = searchParams.get('limite') ?? '6';
    const category = searchParams.get('category') ?? 'all';


    const selectedTab: Tab = isValidTab(activeTab) ? activeTab : 'all';

    useEffect(() => {
        if (!isValidTab(activeTab)) {
            setSearchParams((prev) => {
                const newParams = new URLSearchParams(prev);
                newParams.set('tab', 'all');
                return newParams;
            }, { replace: true });
        }
    }, [activeTab, setSearchParams]);


    const handleTabChange = (value: string) => {
        setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);
            newParams.set('tab', value);
            newParams.set('category', value);
            newParams.set('page', '1'); // Reset to first page on tab change
            return newParams;
        });
    };


    {/* Custom Hooks */ }
    const { data: summary } = useHeroSummary();
    const { data: heroesResponse } = usePaginateHero(+page, +limit, category);

    return (
        <>
            <CustomJumbotron
                title="Hero Management Dashboard"
                description="Discover, explore, and manage your favorite superheroes and villains"
            />

            <CustomBreadcrumbs
                currentPage="description"
                breadcrumbs={[
                    { label: "Heros", to: "/" },
                    { label: "Hero", to: "/" },
                ]}
            />

            <HeroStats />
            <SearchControls />

            <Tabs value={selectedTab} onValueChange={handleTabChange} className="mb-8">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="all">
                        {summary?.totalHeroes || 0} all Character
                    </TabsTrigger>
                    <TabsTrigger value="favorites" className="flex items-center gap-2">
                        <Heart className="h-4 w-4" />
                        {summary?.totalHeroes || 0} Favorites
                    </TabsTrigger>
                    <TabsTrigger value="hero">
                        {summary?.heroCount || 0} Heroes
                    </TabsTrigger>
                    <TabsTrigger value="villain">
                        {summary?.villainCount || 0} Villains
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="all">
                    <HeroGrid heroes={heroesResponse?.heroes || []} />
                </TabsContent>
                <TabsContent value="favorites">
                    <HeroGrid heroes={[]} />
                </TabsContent>
                <TabsContent value="heroes">
                    <HeroGrid heroes={[]} />
                </TabsContent>
                <TabsContent value="villains">
                    <HeroGrid heroes={[]} />
                </TabsContent>
            </Tabs>

            {/*Pagination*/}
            <CustomPagination totalPage={heroesResponse?.pages ?? 1} />
        </>
    );
};