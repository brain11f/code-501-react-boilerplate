import React from 'react'
import format from 'date-fns/format'

const PicOfDay = ({author, message, date }) =>
  <li>
    <div>
      <img src={`https://message-list.appspot.com/${author.photoUrl}`} alt={author.name} />
    <h4>{author.name}</h4>
    </div>
    <div>
      <p>{format(date, 'D MMM. YYYY, h:mm a')}</p>
    </div>
    <div>
      <p>{message}</p>
    </div>
  </li>

  const propTypes = {
    author: React.PropTypes.object,
    message: React.PropTypes.string,
    date: React.PropTypes.date
  }

  export default Object.assign(PicOfDay, propTypes)
