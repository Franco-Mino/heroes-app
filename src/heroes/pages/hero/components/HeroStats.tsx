import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Users } from 'lucide-react'

import { HeroStatCard } from './HeroStatsCard'

export const HeroStats = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

            { /* Total Characters */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Characters</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">16</div>
                    <div className="flex gap-1 mt-2">
                        <Badge variant="secondary" className="text-xs">
                            12 Heroes
                        </Badge>
                        <Badge variant="destructive" className="text-xs">
                            2 Villains
                        </Badge>
                    </div>
                </CardContent>
            </Card>


            { /* Favorites */}
            <HeroStatCard title="Favorites" icon={<Heart className="h-4 w-4 text-muted-foreground" />}>
                <div className="text-2xl font-bold text-red-600">3</div>
                <p className="text-xs text-muted-foreground">18.8% of total</p>
            </HeroStatCard>

            { /* Strongest */}
            <HeroStatCard title="Strongest" icon={<Heart className="h-4 w-4 text-muted-foreground" />}>
                <div className="text-lg font-bold">Superman</div>
                <p className="text-xs text-muted-foreground">Strength: 10/10</p>
            </HeroStatCard>

            { /* Smartest */}
            <HeroStatCard title="Smartest" icon={<Heart className="h-4 w-4 text-muted-foreground" />}>
                <div className="text-lg font-bold">Batman</div>
                <p className="text-xs text-muted-foreground">Intelligence: 10/10</p>
            </HeroStatCard>



        </div>
    )
}
