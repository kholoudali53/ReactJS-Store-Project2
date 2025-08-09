
const productValidation = (product: {title: string; description: string; imageURL: string; price: string;}) => {
    
    const errors: {title: string; description: string; imageURL: string; price: string;} = {
        title: '',
        description: '',
        imageURL: '',
        price: '',
  };

  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);

  if(!product.title.trim() || product.title.length < 10 || product.title.length > 80)
  {
    errors.title = "Product title must be between 10 and 80 character"
  }

  if(!product.description.trim() || product.title.length < 10 || product.title.length > 80)
  {
    errors.description = "Product description must be between 10 and 900 character"
  }

  if( !product.imageURL.trim() || !validUrl)
  {
    product.imageURL = "valid image is required"
  }

  if(!product.price.trim() || isNaN(Number(product.price)))
  {
    product.price = "Valid price is required"
  }
    return errors;
}