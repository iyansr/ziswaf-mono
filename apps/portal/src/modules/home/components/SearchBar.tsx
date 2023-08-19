import React from 'react';
import { SearchIcon } from 'lucide-react';
import { Button } from 'ui/src/components/button';

const SearchBar = () => {
  return (
    <Button variant="outline" className="w-full font-normal text-slate-500 justify-start">
      <SearchIcon className="w-4 h-4 mr-2 text-red-600" />
      Cari program yang ingin dibantu
    </Button>
  );
};

export default SearchBar;
