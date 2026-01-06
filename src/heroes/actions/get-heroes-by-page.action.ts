import { heroApi } from "../api/hero.api";
import type { HeroesResponse } from "../pages/hero/types/get-hero.response";


const VITE_API_URL = import.meta.env.VITE_API_URL;



export const getHeroByPageAction = async (
    page: number,
    limit: number = 6,
    category = 'all',
): Promise<HeroesResponse> => {

    if (isNaN(page)) {
        page = 1;
    }
    if (isNaN(limit)) {
        limit = 6;
    }

    const { data } = await heroApi.get<HeroesResponse>('/', {
        params: {
            limit: limit,
            offset: (page - 1) * limit,
            category: category,
        }
    });


    const heroes = data.heroes.map(hero => ({
        ...hero,
        image: `${VITE_API_URL}/images/${hero.image}`
    }))

    return {
        ...data,
        heroes: heroes,
    }
}