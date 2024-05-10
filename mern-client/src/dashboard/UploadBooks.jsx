import React from 'react'
import { useState } from 'react';
import { Select } from 'flowbite-react';
import { Textarea } from 'flowbite-react';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
const UploadBooks = () => {
  const bookCategories=[
       "Fantasy",
       "Romance",
       "Fiction",
       "Non-Fiction",
       "Mistery",
       "Programming",
       "Science Fiction",
       "Horror",
       "Bibliography",
       "Autobiography",
       "History",
       "Self-Help",
       "Memoir",
       "Business",
       "Children Books",
       "Travel",
       "Religion",
       "Art and Design"
  ]
  const [selectedBookCategory,setSelectedBookCategory]=useState(bookCategories[0]);
  const handleChangeSelectedValue=(event)=>{
         console.log(event.target.value);
         setSelectedBookCategory(event.target.value);
  }
  // handle book submission
  const handleBookSubmit=(event)=>{
       event.preventDefault();
      const form=event.target;
      const bookTitle=form.bookTitle.value;
      const authorName=form.authorName.value;
      const imageURL=form.imageURL.value;
      const category=form.categoryName.value;
      const bookDescription=form.bookDescription.value;
      const bookPDFURL=form.bookPDFURL.value;
      const bookObj={
          bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
      }
      console.log(bookObj);
      //send data to db
      fetch("http://localhost:5000/upload-book",{
        method:"POST",
        headers:{
           "Content-Type":"application/json",
        },
        body: JSON.stringify(bookObj)
      }).then(res=>res.json()).then(data=>{
        alert("Book Uploaded Successfully!!!");
        form.reset();  
      })
  }
  return (
    <div className='px-4 my-12'>
          <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>
 
          <form onSubmit={handleBookSubmit}className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      {/* first row */}
      <div className='flex gap-8'>
      <div className='lg:w-1/4 '>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle"
        name='bookTitle' placeholder="Book name" required
        type="text" />
      </div>
      {/* author name */}
      <div className='lg:w-1/4 '>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName"
        name='authorName' placeholder="Author Name" required
        type="text" />
      </div>
      </div>
      {/* second row */}
      {/* Image URL */}
      <div className='flex gap-8'>
      <div className='lg:w-1/4 '>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL" />
        </div>
        <TextInput id="imageURL"
        name='imageURL' placeholder="Book image URL" required
        type="text" />
      </div>
      {/* Category */}
      <div className='lg:w-1/4 '>
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>
        <Select id='inputState' name='categoryName' className='w-full rounded'
        value={selectedBookCategory}
        onChange={handleChangeSelectedValue}>
         {
             bookCategories.map((option)=><option key={option} value={option}>{option}</option>)

         }
        </Select>
      </div>
      </div>
      {/* third row */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="BookDescription" 
        name="bookDescription"
        placeholder="Write your book description..." required className='w-full' rows={6}/>
      </div>
      {/* book pdf link */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFURL"
        name="bookPDFURL"
        placeholder="book pdf url" required />
      </div>
      <Button type="submit" className='mt-4 lg:w-1/2' >Upload Book</Button>
    </form> 
    </div>
  )
} 

export default UploadBooks
