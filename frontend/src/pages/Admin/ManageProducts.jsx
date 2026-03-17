import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productsAPI } from '../../services/api';
import toast from 'react-hot-toast';
import { Edit, Trash2, Package, Plus, Star } from 'lucide-react';
import anime from 'animejs';

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    anime({
      targets: '.product-card',
      scale: [0.9, 1],
      opacity: [0, 1],
      delay: anime.stagger(100),
      duration: 600,
      easing: 'easeOutExpo',
    });
  }, [products]);

  const fetchProducts = async () => {
    try {
      const response = await productsAPI.getAll();
      setProducts(response.data);
    } catch (error) {
      toast.error('Failed to fetch products');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await productsAPI.delete(productId);
      setProducts(products.filter(product => product._id !== productId));
      toast.success('Product deleted successfully');
      setDeleteConfirm(null);
    } catch (error) {
      toast.error('Failed to delete product');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage Products</h1>
            <p className="mt-2 text-gray-600">View, edit, and delete your products</p>
          </div>
          <Link
            to="/admin/upload-product"
            className="btn-primary flex items-center"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Product
          </Link>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products yet</h3>
            <p className="text-gray-600 mb-4">Get started by uploading your first product</p>
            <Link
              to="/admin/upload-product"
              className="btn-primary inline-flex items-center"
            >
              <Plus className="h-5 w-5 mr-2" />
              Upload Product
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {products.map((product) => (
              <div key={product._id} className="product-card card">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg sm:text-2xl font-bold text-blue-600">
                      ${product.price}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      product.inStock 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  
                  {product.description && (
                    <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                  )}

                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-xs sm:text-sm text-gray-600">4.5</span>
                    </div>
                    <span className="text-gray-400">•</span>
                    <span className="text-xs sm:text-sm text-gray-600 capitalize">
                      {product.category}
                    </span>
                  </div>

                  <div className="flex space-x-2">
                    <Link
                      to={`/admin/edit-product/${product._id}`}
                      className="flex-1 bg-blue-600 text-white px-2 sm:px-3 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center text-xs sm:text-sm"
                    >
                      <Edit className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      <span className="hidden sm:inline">Edit</span>
                      <span className="sm:hidden">✏️</span>
                    </Link>
                    <button
                      onClick={() => setDeleteConfirm(product._id)}
                      className="flex-1 bg-red-600 text-white px-2 sm:px-3 py-2 rounded-md hover:bg-red-700 transition-colors duration-200 flex items-center justify-center text-xs sm:text-sm"
                    >
                      <Trash2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      <span className="hidden sm:inline">Delete</span>
                      <span className="sm:hidden">🗑️</span>
                    </button>
                  </div>

                  {deleteConfirm === product._id && (
                    <div className="mt-3 p-3 bg-red-50 rounded-md">
                      <p className="text-xs sm:text-sm text-red-800 mb-2">
                        Are you sure you want to delete this product?
                      </p>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="flex-1 bg-red-600 text-white px-2 py-1 rounded text-xs sm:text-sm hover:bg-red-700"
                        >
                          Yes, Delete
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(null)}
                          className="flex-1 bg-gray-300 text-gray-700 px-2 py-1 rounded text-xs sm:text-sm hover:bg-gray-400"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageProducts;
