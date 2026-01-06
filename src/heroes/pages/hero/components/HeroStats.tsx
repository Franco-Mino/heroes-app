import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Users } from 'lucide-react'

import { HeroStatCard } from './HeroStatsCard'
import { useHeroSummary } from '../hooks/useHeroSummary'
import { use } from 'react'
import { FavoriteHeroContext } from '@/heroes/context/FavoriteHeroContext'

export const HeroStats = () => {

    const { favoriteCount } = use(FavoriteHeroContext);
    {/* Custom Hooks */ }
    const { data: summary } = useHeroSummary();
    const totalFavorites = (favoriteCount / summary?.totalHeroes!) * 100;



    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

            { /* Total Characters */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Characters</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{summary?.totalHeroes}</div>
                    <div className="flex gap-1 mt-2">
                        <Badge variant="secondary" className="text-xs bg-green-400">
                            {summary?.heroCount} Heroes
                        </Badge>
                        <Badge variant="destructive" className="text-xs">
                            {summary?.villainCount} Villains
                        </Badge>
                    </div>
                </CardContent>
            </Card>


            { /* Favorites */}
            <HeroStatCard title="Favorites" icon={<Heart className="h-4 w-4 text-muted-foreground" />}>
                <div className="text-2xl font-bold text-red-600">{favoriteCount}</div>
                <p className="text-xs text-muted-foreground">{totalFavorites.toFixed(2)}% of total</p>
            </HeroStatCard>

            { /* Strongest */}
            <HeroStatCard title="Strongest" icon={<Heart className="h-4 w-4 text-muted-foreground" />}>
                <div className="text-lg font-bold">{summary?.strongestHero.alias}</div>
                <p className="text-xs text-muted-foreground">Strength: {summary?.strongestHero.strength}/10</p>
            </HeroStatCard>

            { /* Smartest */}
            <HeroStatCard title="Smartest" icon={<Heart className="h-4 w-4 text-muted-foreground" />}>
                <div className="text-lg font-bold">{summary?.smartestHero.alias}</div>
                <p className="text-xs text-muted-foreground">Intelligence: {summary?.smartestHero.intelligence}/10</p>
            </HeroStatCard>



        </div>
    )
}
