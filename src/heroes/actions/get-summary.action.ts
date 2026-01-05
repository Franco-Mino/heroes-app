import { heroApi } from "../api/hero.api"
import { SummaryInFormationResponse } from "../pages/hero/types/summary-information.response"

export const getSummaryAction = async () => {
    const { data } = await heroApi.get<SummaryInFormationResponse>('/summary')

    return data;
}