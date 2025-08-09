import { useState } from "react";
import ProductCard from "./Component/ProductCard";
import Modal from "./Component/ui/Modal";
import { formInputsList, productList } from "./data";
import { Button, Label } from "@headlessui/react";
import Input from "./Component/ui/input";


const App = () => {
  
  const [isOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  // ** Render
  const renderProductList = productList.map(product => <ProductCard  key={product.id} product={product} />) // map return array of jsx
  const renderFormInputList = formInputsList.map(input => 
    (
      <div className="flex flex-col">
      <label htmlFor={input.id} className="mb-[1px] text-sm font-medium text-gray-700">{input.label}</label>
      <Input type={input.type} name={input.name} id={input.id}/>
      </div>
  ))

  return (
    
    <main className="container">
      <Button className="bg-indigo-600 w-full hover:bg-indigo-800" onClick={openModal}>Add</Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen = {isOpen} closedModel={closeModal} title="ADD A NEW PRODUCT" >

        <form className="space-y-3">
          {renderFormInputList}

        <div className="flex items-center space-x-3">
          <Button className="bg-indigo-600 w-full p-2 my-2  rounded-md hover:bg-indigo-700">Submit</Button>
        <Button className="bg-gray-500 w-full p-2 my-2 rounded-md hover:bg-gray-700">Cancel</Button>
        </div>
        </form>
      </Modal>
    </main>
  );
};

export default App;
