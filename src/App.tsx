import { ChangeEvent, FormEvent, useState } from "react";
import ProductCard from "./Component/ProductCard";
import Modal from "./Component/ui/Modal";
import { formInputsList, productList } from "./data";
import { Button } from "@headlessui/react";
import Input from "./Component/ui/Input";
import { IProduct } from "./interfaces";
import ErrorMessage from "./Component/ErrorMessage";


const App = () => {

  
  const defaultProductObj = {
      title: '',
      description: '',
      imageURL: '',
      price: '',
      colors: [],
      category: {
        name: '',
        imageURL: ''
      }
  };
  
  // ********************** States *********************************
  
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [errors, setErrors] = useState({title: '', description: '', imageURL: '', price: ''}) 
  const [isOpen, setIsOpen] = useState(false);

  // *********************** Handlers ************************
  const openModal = ()=> { setIsOpen(true) }
  const closeModal = () => { setIsOpen(false) }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target;

    setProduct({...product, [name]: value}); // ??

    setErrors({...errors, [name]: ''});
  };

  const onCanceld = () => {
    setProduct(defaultProductObj);

    closeModal();
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
  event.preventDefault();
  const { title, description, price, imageURL } = product;

  const errors = productValidation({
    title,
    description,
    price,
    imageURL,
  });
    // validation
  const hasErrorMsg = Object.values(errors).some(value => value === '') && Object.values(errors).every(value => value === '');
    
    if(!hasErrorMsg){
      setErrors(errors)
      return;
    };
  };

  // ************************ Render **************************************

  const renderProductList = productList.map(product => <ProductCard  key={product.id} product={product} />) // map return array of jsx
  
  const renderFormInputList = formInputsList.map(input => (
  <div className="flex flex-col" key={input.id}>
    <label htmlFor={input.id} className="mb-[2px] text-sm font-medium text-gray-700">
      {input.label}
    </label>
    <Input type="text" id={input.id} name={input.name} value={product[input.name]} onChange={onChangeHandler} />
    <ErrorMessage msg={errors[input.name]} />
  </div>
));
 
  // *********************** Return ***************************
  return (
    
    <main className="container">

      <Button
        className="block bg-indigo-700 hover:bg-indigo-800 mx-auto my-10 px-10 font-medium w-full"
        onClick={openModal} >
       Build a Product
      </Button>

      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
      {renderProductList}
      </div>


      <Modal isOpen = {isOpen} closedModel={closeModal} title="ADD A NEW PRODUCT" >
        
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}

        <div className="flex items-center space-x-3">
          <Button className="bg-indigo-600 w-full p-2 my-2  rounded-md hover:bg-indigo-700">Submit</Button>
        <Button className="bg-gray-500 w-full p-2 my-2 rounded-md hover:bg-gray-700" onClick={onCanceld} >Cancel</Button>
        </div>
        </form>

      </Modal>
    </main>
  );
};

export default App;
