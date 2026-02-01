import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import useDebounce from './hooks/useDebounce';
import UserList from './components/UserList';

function App() {
  const [value, setValue] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  const debouncedSearch = useDebounce(value);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setError(false);

    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal
    })
      .then((res) => {
        if(!res.ok) throw new Error('request failed');
        return res.json()
      })
      .then((data) => {
        const filteredUsers = data.filter((user) => {
          return user.name.toLowerCase().includes(debouncedSearch.toLowerCase())
        })
        setUsers(filteredUsers)
      })
      .catch((err) => {
        if(err.name !== 'AbortError') {
          setError(true);
        }
      })
      .finally(() => {
        setLoading(false);
      })
    return () => controller.abort();
  }, [debouncedSearch])

  return <>
    <h1>filter by user name</h1>
    <SearchBar value={value} onChange={setValue}/>
    <UserList users={users} loading={loading} error={error}/>
  </>
}

export default App;
