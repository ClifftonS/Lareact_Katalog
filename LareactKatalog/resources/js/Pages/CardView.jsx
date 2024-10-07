import Card from "@/Components/Card";
import Pagination from "@/Components/Pagination";
import { Suspense } from "react";

// rafce

const CardView = ({ data, isAdmin }) => {
    if (!data || data.data.length === 0) {
        return (
            <div className="flex justify-center mt-10">
                <p>No data available</p>
            </div>
        );
    }

    return (
        <>
            <div className="flex flex-wrap gap-6 justify-center items-center pt-4">
                {data.data.map((value, i) => (
                    <Card key={i} product={value} isAdmin={isAdmin} />
                ))}
            </div>
            <div className="">
                <Pagination links={data} />
            </div>
        </>
    );
};

export default CardView;
