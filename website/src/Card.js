import React from 'react'
import "./Card.css"

function Card({title, description, link, style, useList,  }) {
  return (
      <div className='product' style={style}>
          <div className='product_info'>
              <h2>{title}</h2>
              {useList ? (
                 <p dangerouslySetInnerHTML={{ __html: description }} />
              )
         
         : (
          <p>{description}</p>
        )}
             {link && (
        <p>
          <strong>Project Link:</strong>{' '}
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </p>
      )}
          </div>

    </div>
  )
}

export default Card