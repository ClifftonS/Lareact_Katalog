import Carousel from "./Carousel";
import { Link } from "@inertiajs/react";

export default function Card({ product, isAdmin }) {
    const limitText = (text, limit = 10) => {
        return text.length > limit ? `${text.slice(0, limit)}...` : text;
    };
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-xl">
                <Carousel images={product.image} />

                <div className="card-body">
                    <h2 className="card-title">
                        {limitText(product.name, 20)}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{limitText(product.desc, 75)}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline bg-pink-500 text-white">
                            {limitText(product.category.name, 17)}
                        </div>
                        <div className="badge badge-outline bg-blue-500 text-white">
                            {limitText(product.brand.name, 17)}
                        </div>
                    </div>
                    {isAdmin && (
                        <div className="flex justify-center mt-3 space-x-4">
                            <Link
                                as="button"
                                href={`/posts/${product.id}/edit`}
                                method="get"
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                                Edit
                            </Link>
                            <Link
                                as="button"
                                href={`/posts/${product.id}`}
                                method="delete"
                                type="button"
                                onClick={() => confirm("Are you sure?")}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                                Delete
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
