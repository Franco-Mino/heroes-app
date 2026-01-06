import { CustomJumbotron } from '@/components/Custom/CustomJumbotron';
import { HeroStats } from '../hero/components/HeroStats';
import { SearchControls } from './ui/SearchControls';
import { HeroGrid } from '../hero/components/HeroGrid';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';
import { searchHeroesAction } from '@/heroes/actions/search-hero.action';
import { AlertCircle, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';


export const SearchPage = () => {

    // usar useQuery
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name') ?? undefined;
    const strengthParam = searchParams.get('strength');

    const strength = strengthParam
        ? Math.min(Math.max(parseInt(strengthParam, 10), 0), 10)
        : undefined;

    const { data = [], isLoading, error, isFetching } = useQuery({
        queryKey: ['search', { name, strength }],
        queryFn: () => searchHeroesAction({ name, strength: strength?.toString() }),
        staleTime: 1000 * 60 * 5
    })

    return (
        <>
            <CustomJumbotron
                title="Hero Search"
                description="Discover, explore, and manage your favorite superheroes and villains"
            />

            { /* Stats Dashboard */}
            <HeroStats />
            { /* Filter and Search Dashboard */}
            <SearchControls />

            {/* Loading State */}
            {isLoading && (
                <div className="flex justify-center items-center py-12">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    <span className="ml-2 text-lg">Searching heroes...</span>
                </div>
            )}

            {/* Error State */}
            {error && (
                <Alert variant="destructive" className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        Failed to load heroes. Please try again later.
                        {error instanceof Error && ` (${error.message})`}
                    </AlertDescription>
                </Alert>
            )}

            {/* Empty State */}
            {!isLoading && !error && data.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-xl text-gray-500">
                        No heroes found. Try adjusting your filters.
                    </p>
                </div>
            )}

            {/* Results with loading overlay */}
            {!isLoading && !error && data.length > 0 && (
                <div className="relative">
                    {isFetching && (
                        <div className="absolute top-0 right-0 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                            <Loader2 className="h-3 w-3 animate-spin" />
                            Updating...
                        </div>
                    )}
                    <HeroGrid heroes={data} />
                </div>
            )}
        </>
    )
}

export default SearchPage;