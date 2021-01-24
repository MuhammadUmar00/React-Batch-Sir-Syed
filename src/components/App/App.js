import React, { useEffect, useState } from 'react'
import Home from '../Home'
// import Profile from '../Profile'

export default function App () {
  const [user, setUser] = useState(null)

  useEffect(() => {
    let user = { name: 'Mukhtyar', age: 22, class: 'React' } // example of fetching from db
    setUser(user)
  }, [])

  return (
    <div>
      {user && <Home user={user || {}} />}
      {/* {<Profile />} */}
    </div>
  )
}
