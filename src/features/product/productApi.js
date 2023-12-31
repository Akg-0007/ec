import axios from 'axios';

export async function fetchAllProducts() {
  try {
    const response = await axios.get('http://localhost:8000/products');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
