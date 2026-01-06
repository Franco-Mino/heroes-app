import { heroApi } from "../api/hero.api";
import { Hero } from "../pages/hero/types/hero.interface";

const VITE_API_URL = import.meta.env.VITE_API_URL;


export const getHeroAction = async (idSlug: string) => {

    const { data } = await heroApi.get<Hero>(`/${idSlug}`);

    return {
        ...data,
        image: `${VITE_API_URL}/images/${data.image}`
    }
};