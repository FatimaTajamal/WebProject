import React from 'react'
import { Link } from 'react-router-dom'

export const Routing = () => {
  return (
    <div>
        <div>
        <ul>
            <li style={{display:'inline',padding:"5px"}}>
                <Link to='/'>Home</Link>
            </li>
            <li style={{display:'inline',padding:"5px"}}>
                <Link to='/Blog'>Blog</Link>
            </li>
            

        </ul>
    </div>
    </div>
  )
}

export default Routing;
