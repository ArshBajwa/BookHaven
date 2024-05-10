import React from 'react'
import Fav from "../assets/favoritebook.jpg"
import { Link } from 'react-router-dom'
const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
       <div className='md:w-3/4'>
    <img src={Fav} alt="" className='rounded md:w-10/12 h-auto'/>
</div>

         <div className='md:w-3/4 space-y-6'>
            <h2 className='text-4xl font-bold my-5 md:w-3/4 leading-snug'>Find your Favourite <span className='text-blue-700'>Book Here!</span></h2>
            <p className='mb-12 text-m md:w-5/6'> In the Book-Haven project, readers find their favorite books amidst curated recommendations and vibrant discussions, fostering a community bound by the magic of storytelling. From timeless classics to contemporary masterpieces, Book-Haven is a sanctuary where every page turn brings forth new adventures and cherished favorites await, igniting imaginations and connecting bibliophiles worldwide. Welcome to Book-Haven, where the pursuit of literary enlightenment is celebrated, and the love of reading knows no bounds.</p>
            {/* stats */}
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold'>800+</h3>
                    <p className='text-base'>Book Listening</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>550+</h3>
                    <p className='text-base'>Register Users</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold'>1200+</h3>
                    <p className='text-base'>PDF Downloads</p>
                </div>
            </div>
            <Link to="/shop" className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More </button></Link>
         </div>
    </div>
  )
}

export default FavBook
