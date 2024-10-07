import MainLayout from "@/Layouts/MainLayout";
import { useForm } from "@inertiajs/react";
import { useRef } from "react";

const CreateProduct = ({ categories, brands }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        desc: "",
        image: [],
        brand: 1,
        category: 1,
    });
    const fileInputRef = useRef(null);
    function submit(e) {
        e.preventDefault();
        post("/posts", {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                fileInputRef.current.value = "";
                alert("Store success");
            },
        });
    }
    return (
        <MainLayout>
            <div className="flex justify-center mt-8">
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <form onSubmit={submit} className="max-w-sm mx-auto">
                        <div className="mb-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Product Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={data.name}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                                autoComplete="off"
                            />
                            {errors.name && <div>{errors.name}</div>}
                        </div>

                        <div className="mb-2">
                            <label
                                htmlFor="desc"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Product Desc
                            </label>
                            <input
                                type="text"
                                id="desc"
                                value={data.desc}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={(e) =>
                                    setData("desc", e.target.value)
                                }
                                required
                                autoComplete="off"
                            />
                            {errors.desc && <div>{errors.desc}</div>}
                        </div>

                        <div className="mb-2">
                            <label
                                htmlFor="brand"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Select Brand
                            </label>
                            <select
                                name="brand"
                                id="brand"
                                value={data.brand}
                                onChange={(e) =>
                                    setData("brand", e.target.value)
                                }
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                {brands.map((brand) => (
                                    <option key={brand.id} value={brand.id}>
                                        {brand.name}
                                    </option>
                                ))}
                            </select>
                            {errors.brand && <div>{errors.brand}</div>}
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="category"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Select Category
                            </label>
                            <select
                                name="category"
                                id="category"
                                value={data.category}
                                onChange={(e) =>
                                    setData("category", e.target.value)
                                }
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                {categories.map((category) => (
                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                            {errors.category && <div>{errors.category}</div>}
                        </div>

                        <div className="mb-5">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                htmlFor="file"
                            >
                                Upload Image (can multiple)
                            </label>
                            <input
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                onChange={(e) =>
                                    setData("image", e.target.files)
                                }
                                id="file"
                                type="file"
                                multiple
                                required
                                ref={fileInputRef}
                            />
                            {errors.image && <div>{errors.image}</div>}
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={processing}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            >
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
};

export default CreateProduct;
