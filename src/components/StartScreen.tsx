
import React from 'react';
import { Theme } from '../data/gameData';
import { Button } from '@/components/ui/button';

interface StartScreenProps {
  theme: Theme;
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ theme, onStart }) => {
  const gradientStyle = {
    background: `linear-gradient(135deg, ${theme.colors[0]}, ${theme.colors[1]})`,
  };

  return (
    <div 
      className="min-h-[500px] flex flex-col items-center justify-center p-6 rounded-lg shadow-lg fade-in"
      style={gradientStyle}
    >
      <div className="text-6xl mb-4 bounce-in">{theme.emoji}</div>
      <h1 className="text-4xl font-bold mb-2 text-white text-center">Yay or Nay?</h1>
      <h2 className="text-2xl mb-8 text-white opacity-90 text-center">Today's Theme: {theme.name}</h2>
      <p className="text-white text-center mb-8 max-w-md">
        Can you pick the true statement in each round? Test your knowledge with today's 5 questions!
      </p>
      <Button 
        onClick={onStart} 
        className="bg-white text-lg px-10 py-6 rounded-full hover:scale-105 transition-transform duration-200 text-black font-semibold"
      >
        Play Today's Game
      </Button>
    </div>
  );
};

export default StartScreen;
