import { Heart } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/Custom/CustomJumbotron"
import { HeroStats } from "../hero/components/HeroStats"
import { SearchControls } from "../search/ui/SearchControls"
import { HeroGrid } from "../hero/components/HeroGrid"
import { useState } from "react"
import { CustomPagination } from "@/components/Custom/CustomPagination"


export const HomePage = () => {

    const [activeTab, setActiveTab] = useState<"all" | "favorites" | "heroes" | "villains">("all");

    return (
        <>
            <>
                {/* Header */}
                <CustomJumbotron
                    title="Hero Management Dashboard"
                    description="Discover, explore, and manage your favorite superheroes and villains"
                />

                {/* Stats Dashboard */}
                <HeroStats />

                {/* Controls and Advanced Filters */}
                <SearchControls />

                {/* Tabs */}
                <Tabs value={activeTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="all"
                            onClick={() => setActiveTab("all")}
                        >All Characters (16)</TabsTrigger>
                        <TabsTrigger value="favorites" onClick={() => setActiveTab("favorites")} className="flex items-center gap-2">
                            <Heart className="h-4 w-4" />
                            Favorites (3)
                        </TabsTrigger>
                        <TabsTrigger value="heroes" onClick={() => setActiveTab("heroes")}>Heroes (12)</TabsTrigger>
                        <TabsTrigger value="villains" onClick={() => setActiveTab("villains")}>Villains (2)</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all">
                        {/* All Characters Grid */}
                        <HeroGrid />
                    </TabsContent>
                    <TabsContent value="favorites">
                        {/* Favorite Characters Grid */}
                        <HeroGrid />
                    </TabsContent>
                    <TabsContent value="heroes">
                        {/* Hero Characters Grid */}
                        <HeroGrid />
                    </TabsContent>
                    <TabsContent value="villains">
                        {/* Villain Characters Grid */}
                        <HeroGrid />
                    </TabsContent>
                </Tabs>

                {/* Pagination */}
                <CustomPagination totalPage={8} />
            </>
        </>
    )
}
