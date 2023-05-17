import React from 'react';
import NewsList from './components/NewsList';

const App = () => {
  return (
    <div>
      <nav className="bg-blue-500 py-4">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-4 text-white font-medium">
            <li><a href="#" className="hover:text-blue-200">Category 1</a></li>
            <li><a href="#" className="hover:text-blue-200">Category 2</a></li>
            <li><a href="#" className="hover:text-blue-200">Category 3</a></li>
            <li><a href="#" className="hover:text-blue-200">Category 4</a></li>
          </ul>
        </div>
      </nav>
      <NewsList/>
    </div>
  );
};

export default App;
