import { CustomJumbotron } from '@/components/Custom/CustomJumbotron';
import { HeroStats } from '../hero/components/HeroStats';
import { SearchControls } from './ui/SearchControls';


export const SearchPage = () => {
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
        </>
    )
}

export default SearchPage;