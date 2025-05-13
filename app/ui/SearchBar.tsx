import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const Search: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState<string>('');
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    };
  
    const handleSearch = () => {
      onSearch(query);
    };
    
    return (
        <div className="flex items-center space-x-4 mb-4">
            <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search by last name"
            className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
            onClick={handleSearch}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
            Search
            </button>
      </div>
    );
};

export default Search;