import axios from 'axios';
import React, { useState } from 'react'

const Categories = () => {

    const [categoryName, setCategoryName] = useState('');
    const [categoryDescription, setCategoryDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post('http://localhost:3000/api/category/add', {
            categoryName, categoryDescription
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('pos-token')}`
            },
        });

        if(response.data.success){
            alert("Category added successfully", response.data);
            setCategoryName('');
            setCategoryDescription('');
        }else{
            console.error("Failed to add category", response.data);
            alert("Failed to add category, try again.");
        }
    };


  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-8'>Category Management</h1>

      <div className='flex flex-col lg:flex-row gap-4'>
            <div className="lg:w-1/3 w-full">
                <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
                    <h2 className="text-center text-2xl font-bold mb-6 text-gray-700">
                    Add Category
                    </h2>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="text-sm font-medium text-gray-600">Category Name</label>
                        <input
                        type="text"
                        placeholder="Enter category name"
                        className="mt-1 border w-full p-3 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-600">Description</label>
                        <input
                        type="text"
                        placeholder="Enter description"
                        className="mt-1 border w-full p-3 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition"
                        value={categoryDescription}
                        onChange={(e) => setCategoryDescription(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-green-600 text-white p-3 font-semibold hover:bg-green-700 transition shadow-md cursor-pointer"
                    >
                        Add Category
                    </button>
                    </form>
                </div>
            </div>

        
        <div>

        </div>
      </div>
    </div>
  )
}

export default Categories
