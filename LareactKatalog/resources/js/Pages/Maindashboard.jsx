import CardView from "./CardView";
import MainLayout from "@/Layouts/MainLayout";
import { Link, useForm } from "@inertiajs/react";
export default function Maindashboard({
    products,
    isAdmin,
    brands,
    categories,
}) {
    const { data, setData, get } = useForm({
        search: "",
        brand: "",
        category: "",
    });
    const handleSearch = (e) => {
        e.preventDefault();
        console.log(data);

        get(route("dashboard"), {
            preserveScroll: true,
            preserveState: true,
        });
    };

    const limitText = (text, limit = 10) => {
        return text.length > limit ? `${text.slice(0, limit)}...` : text;
    };
    return (
        <MainLayout>
            <div className="flex justify-between mt-6 z-20">
                <div className="mx-auto w-3/4">
                    <form className="w-2/3 ms-32" onSubmit={handleSearch}>
                        <div className="flex">
                            <label
                                htmlFor="search-dropdown"
                                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                            >
                                Your Email
                            </label>
                            <button
                                id="dropdown-button1"
                                data-dropdown-toggle="dropdownbrand"
                                className="w-1/5 flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                                type="button"
                            >
                                {data.brand
                                    ? limitText(
                                          brands.find(
                                              (b) =>
                                                  b.id === parseInt(data.brand)
                                          )?.name
                                      )
                                    : "All brands "}
                                <svg
                                    className="w-2.5 h-2.5 ms-2.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            <div
                                id="dropdownbrand"
                                className="absolute z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                            >
                                <ul
                                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdown-button1"
                                >
                                    <li>
                                        <button
                                            type="button"
                                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            onClick={() => setData("brand", "")}
                                        >
                                            All brands
                                        </button>
                                    </li>
                                    {brands && brands.length > 0 ? (
                                        brands.map((brand, i) => (
                                            <li key={i}>
                                                <button
                                                    type="button"
                                                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    onClick={() =>
                                                        setData(
                                                            "brand",
                                                            brand.id
                                                        )
                                                    }
                                                >
                                                    {brand.name}
                                                </button>
                                            </li>
                                        ))
                                    ) : (
                                        <li>
                                            <button
                                                type="button"
                                                className="inline-flex w-full px-4 py-2 text-gray-500"
                                            >
                                                No brands available
                                            </button>
                                        </li>
                                    )}
                                </ul>
                            </div>
                            <button
                                id="dropdown-button2"
                                data-dropdown-toggle="dropdowncategory"
                                className="w-1/5 flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300  hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                                type="button"
                            >
                                {data.category
                                    ? limitText(
                                          categories.find(
                                              (b) =>
                                                  b.id ===
                                                  parseInt(data.category)
                                          )?.name
                                      )
                                    : "All categories "}
                                <svg
                                    className="w-2.5 h-2.5 ms-2.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            <div
                                id="dropdowncategory"
                                className="absolute z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                            >
                                <ul
                                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                    aria-labelledby="dropdown-button2"
                                >
                                    <li>
                                        <button
                                            type="button"
                                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            onClick={() =>
                                                setData("category", "")
                                            }
                                        >
                                            All category
                                        </button>
                                    </li>
                                    {categories && categories.length > 0 ? (
                                        categories.map((category, i) => (
                                            <li key={i}>
                                                <button
                                                    type="button"
                                                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                    onClick={() =>
                                                        setData(
                                                            "category",
                                                            category.id
                                                        )
                                                    }
                                                >
                                                    {category.name}
                                                </button>
                                            </li>
                                        ))
                                    ) : (
                                        <li>
                                            <button
                                                type="button"
                                                className="inline-flex w-full px-4 py-2 text-gray-500"
                                            >
                                                No categories available
                                            </button>
                                        </li>
                                    )}
                                </ul>
                            </div>
                            <div className="relative w-full">
                                <input
                                    type="search"
                                    id="search-dropdown"
                                    value={data.search}
                                    onChange={(e) =>
                                        setData("search", e.target.value)
                                    }
                                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                    placeholder="Search products"
                                />
                                <button
                                    type="submit"
                                    className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                    <span className="sr-only">Search</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                {isAdmin && (
                    <div className="ml-auto">
                        <Link
                            type="button"
                            as="button"
                            href="/posts/create"
                            method="get"
                            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  mr-40"
                        >
                            Create Product
                        </Link>
                    </div>
                )}
            </div>

            <div className="bg-white">
                <CardView data={products} isAdmin={isAdmin} />
            </div>
        </MainLayout>
    );
}
