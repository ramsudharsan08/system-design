import React from 'react'

export default function UserList({users, loading, error}) {
  return <>
    {
      loading && <p>Loading...</p> ||
      error && <p>Something went wrong</p> ||
      !users.length && <p>No results found</p>
    }
    <ul>
        {!loading && users.map(user => (
            <li key={user.id}>{user.name}</li>
        ))}
    </ul>
  </>

}
