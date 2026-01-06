import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { Hero } from "../pages/hero/types/hero.interface";

interface FavoriteHeroContext {
    // State
    favorites: Hero[];
    favoriteCount: number;

    // Methods
    isFavorite: (hero: Hero) => boolean;
    toggleFavorite: (hero: Hero) => void;
}


export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

const getFavoritesFromLocalStorage = (): Hero[] => {
    const favorites = localStorage.getItem('favoriteHeroes');
    return favorites ? JSON.parse(favorites) : [];
}



export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {

    const [favorites, setfavorites] = useState<Hero[]>(getFavoritesFromLocalStorage());
    const favoriteCount = favorites.length;


    const isFavorite = (hero: Hero) => {
        return favorites.some(fav => fav.id === hero.id);
    }


    const toggleFavorite = (hero: Hero) => {
        const heroExist = favorites.find(fav => fav.id === hero.id);
        if (heroExist) {
            const newFavorites = favorites.filter(fav => fav.id !== hero.id);
            setfavorites(newFavorites);
        } else {
            setfavorites([...favorites, hero]);
        }
    }


    useEffect(() => {
        localStorage.setItem('favoriteHeroes', JSON.stringify(favorites));
    }, [favorites]);

    return (
        <FavoriteHeroContext
            value={{
                // State
                favoriteCount: favoriteCount,
                favorites: favorites,
                // Methods
                isFavorite: isFavorite,
                toggleFavorite: toggleFavorite,
            }}
        >
            {children}
        </FavoriteHeroContext>
    )
}
