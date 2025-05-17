
import React from 'react';
import GameContainer from '../components/GameContainer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="p-4 text-center">
        <h1 className="text-3xl font-bold">Yay or Nay?</h1>
        <p className="text-gray-600">Pick the true statement!</p>
      </header>

      <main className="flex-1 flex items-start justify-center p-4">
        <div className="w-full max-w-2xl">
          <GameContainer />
        </div>
      </main>
      
      <footer className="p-4 text-center text-sm text-gray-500">
        &copy; 2025 Yay or Nay - A new game each day!
      </footer>
    </div>
  );
};

export default Index;
