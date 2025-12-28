import { ChevronLeft, MoreHorizontal, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"


interface Props {
    totalPage: number;
}


export const CustomPagination = ({ totalPage }: Props) => {

    const page = 1;


    return (
        <div className="flex items-center justify-center space-x-2">
            <Button variant="outline" size="sm"
                disabled={page == 1}>
                <ChevronLeft className="h-4 w-4" />
                Previous
            </Button>


            {Array.from({ length: totalPage }).map((_, index) => (
                <Button
                    key={index}
                    variant={
                        page === index + 1 ? "default" : "outline"
                    } size="sm">
                    {index + 1}
                </Button>
            ))}
            <Button variant="ghost" size="sm" disabled>
                <MoreHorizontal className="h-4 w-4" />
            </Button>

            <Button variant="outline" size="sm"
                disabled={page === totalPage}
            >
                Next
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    )
}
