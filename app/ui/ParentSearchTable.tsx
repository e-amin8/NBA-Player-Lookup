'use client';

import React, {useState} from "react";
import PlayerTable from "./PlayerTable";
import Search from "./SearchBar";

const ParentSearchTable: React.FC = () => {

    const [query, setQuery] = useState<string>(' ');

    const handleSearch = (searchQuery: string) => {
        setQuery(searchQuery);
    }

    return (
        <div className="container mx-auto p-4">
          <Search onSearch={handleSearch} />
          <PlayerTable query={query} />
        </div>
      );
};

export default ParentSearchTable;

/*
 *  THIS IS PARENT COMPONENT
 * ITS TAKING 'SEARCHBARPROPS' AND 'PLAYERTABLEPROPS' TO
 * SEND API CALL WITH PARAMETER AND POPULATE TABEL WITH RESPONSE
 * 
 * 
 * 
 * 
 * 
 *  
*/