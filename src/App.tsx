import { useState } from "react";
import ProductCard from "./Component/ProductCard";
import Modal from "./Component/ui/Modal";
import { productList } from "./data";
import { Button } from "@headlessui/react";


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
  
  return (
    
    <main className="container">
      <Button className="bg-indigo-700 w-full hover:bg-indigo-400" onClick={openModal}>Add</Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen = {isOpen} closedModel={closeModal} title="ADD A NEW PRODUCT" >
        <div className="flex items-center space-x-3">
          <Button className="bg-indigo-600 w-full hover:bg-indigo-800">Submit</Button>
        <Button className="bg-gray-600 w-full hover:bg-gray-400">Cancel</Button>
        </div>
      </Modal>
    </main>
  );
};

export default App;
