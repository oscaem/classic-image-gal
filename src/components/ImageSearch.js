import React, { useState } from 'react'

const ImageSearch = ( {searchText} ) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        searchText(text);
    }

    return (
      <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
        <form onSubmit={onSubmit} className="w-full max-w-sm">
            <div className="flex items-center border-4 px-4
            border-purple-500 py-2 bg-purple-200">
                <input onChange={e => setText(e.target.value)} className= "appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text" placeholder="Search Image.." /> 
                <button className="flex-shrink-0 bg-purple-500 hover:bg-black text-sm text-white py-2 px-3 rounded" 
                type="submit">
                    Search 
                </button> 
            </div> 
        </form>
      </div>
  )
}

export default ImageSearch;
