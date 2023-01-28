import React from 'react'

function Stats({views, downloads, likes}) {
    return (
      <ul>
        <li>
          <strong>Views: </strong>
          {views}
        </li>
        <li>
          <strong>Downloads: </strong>
          {downloads}
        </li>
        <li>
          <strong>Likes: </strong>
          {likes}
        </li>
      </ul>
    );
  }

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');

  return (
    <div>
      <div className="max-w-sm rounded overlflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className='w-full'/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Image by {image.user}
        </div>
        <Stats views={image.views} downloads={image.downloads} likes={image.likes} />
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{tag}
            </span>
        ))}
      </div>
    </div>
    </div>
  )
}

export default ImageCard;
