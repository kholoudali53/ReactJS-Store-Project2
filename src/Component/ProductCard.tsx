import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/function";
import Image from "./Image";
import Button from "./ui/Button";
interface IProps {
    product : IProduct
}

const ProductCard = ({product} : IProps) => {

    const {title, imageURL, description, price, category} = product;
    return (

            <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
            
            <Image imageURL={imageURL} alt={"product name"} className="rounded-md h-52 w-full lg:object-cover"/>

            <h3>{title}</h3>

            <p className="text-xs text-gray-500 break-words">{txtSlicer(description)}</p>

            <div className="flex items-center my-4 space-x-2">
                <span className="w-5 h-5 rounded-full bg-indigo-600 cursor-pointer"/>
                <span className="w-5 h-5 rounded-full bg-red-600 cursor-pointer"/>
                <span className="w-5 h-5 rounded-full bg-yellow-600 cursor-pointer"/>
            </div>

            <div className="flex items-center justify-between">
                <span>${price}</span>
                <Image imageURL={category.imageURL} alt={category.name} className="w-10 h-10 rounded-full object-bottom"/>
            </div>

            <div className="flex items-center justify-between space-x-2 my-5">
                <Button className="bg-indigo-700 w-full">Edit</Button>
                <Button className="bg-red-700 w-full">Delete</Button>
            </div>
            </div>
    );
};

export default ProductCard;
