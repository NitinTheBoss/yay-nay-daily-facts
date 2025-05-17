
import React from 'react';
import { Theme, getRankTitle } from '../data/gameData';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { ArrowRight } from 'lucide-react';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  theme: Theme;
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ 
  score, 
  totalQuestions, 
  theme,
  onRestart
}) => {
  const rankTitle = getRankTitle(score, totalQuestions);
  
  const gradientStyle = {
    background: `linear-gradient(135deg, ${theme.colors[0]}, ${theme.colors[1]})`,
  };

  const handleShare = () => {
    const shareText = `I got ${score}/${totalQuestions} in today's Yay or Nay? (Theme: ${theme.name} ${theme.emoji}).\nCan you beat me? Play here: [game link]`;
    
    // Try to use the Web Share API if available
    if (navigator.share) {
      navigator.share({
        title: 'Yay or Nay Game Results',
        text: shareText,
      }).catch(() => {
        // Fallback to clipboard
        copyToClipboard();
      });
    } else {
      // If Web Share API not available, copy to clipboard
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    const shareText = `I got ${score}/${totalQuestions} in today's Yay or Nay? (Theme: ${theme.name} ${theme.emoji}).\nCan you beat me? Play here: [game link]`;
    
    navigator.clipboard.writeText(shareText)
      .then(() => {
        toast.success("Result copied to clipboard!");
      })
      .catch(() => {
        toast.error("Couldn't copy to clipboard");
      });
  };

  return (
    <div 
      className="min-h-[500px] flex flex-col items-center justify-center p-6 rounded-lg shadow-lg fade-in text-white"
      style={gradientStyle}
    >
      <div className="text-6xl mb-4 bounce-in">
        {score === totalQuestions ? '🏆' : score >= totalQuestions / 2 ? '🎉' : '😊'}
      </div>
      
      <h2 className="text-3xl font-bold mb-2 text-center">
        You got {score}/{totalQuestions}!
      </h2>
      
      <p className="text-xl mb-8 text-center">{rankTitle}</p>
      
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Button 
          onClick={handleShare} 
          className="bg-white text-black hover:bg-gray-100 p-6 h-auto font-semibold"
        >
          Share Results <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        
        <Button 
          onClick={onRestart} 
          variant="outline"
          className="bg-transparent border-white text-white hover:bg-white/20 p-6 h-auto font-semibold"
        >
          Back to Start
        </Button>
      </div>
      
      <div className="mt-8 opacity-70 text-center">
        <p>Come back tomorrow for new questions!</p>
        <p className="text-sm mt-2">Today's Theme: {theme.name} {theme.emoji}</p>
      </div>
    </div>
  );
};

export default ResultScreen;
