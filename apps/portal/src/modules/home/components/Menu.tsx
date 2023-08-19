import React from 'react';

const Menu = () => {
  return (
    <div className="bg-slate-100 mt-6 p-4">
      <h2 className="font-semibold text-center">Mau berbuat kebaikan apa hari ini?</h2>

      <div className="flex items-center space-x-6 mt-4">
        <div className="aspect-square bg-amber-300 flex-1 rounded-lg flex items-center justify-center font-semibold">
          zakat
        </div>
        <div className="aspect-square bg-amber-300 flex-1 rounded-lg flex items-center justify-center font-semibold">
          infak
        </div>
        <div className="aspect-square bg-amber-300 flex-1 rounded-lg flex items-center justify-center font-semibold">
          sedekah
        </div>
        <div className="aspect-square bg-amber-300 flex-1 rounded-lg flex items-center justify-center font-semibold">
          wakaf
        </div>
      </div>
    </div>
  );
};

export default Menu;
