import { useState, useEffect } from 'react';
import useDebounce from './hooks/useDebounce';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500ms delay

  // A side effect that fetches data only after the user stops typing
  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log(`Fetching data for: ${debouncedSearchTerm}`);
      // In a real app, I would make an API call here.
      // fetchMyData(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input type="text" placeholder="Type to search..." value={searchTerm}onChange={(e) => setSearchTerm(e.target.value)}/>
      {searchTerm && (
        <p>
          Current input: {searchTerm}
        </p>
      )}
      {debouncedSearchTerm && (
        <p>
          Searching for: <strong>{debouncedSearchTerm}</strong>
        </p>
      )}
    </div>
  );
}


export default App;