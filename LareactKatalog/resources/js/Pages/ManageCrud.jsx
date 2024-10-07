import CreateProduct from "./Crud/CreateProduct";
import UpdateProduct from "./Crud/UpdateProduct";

const ManageCrud = ({ categories, brands }) => {
    return (
        <div className="flex justify-center">
            <CreateProduct categories={categories} brands={brands} />
            <UpdateProduct categories={categories} brands={brands} />
        </div>
    );
};

export default ManageCrud;
