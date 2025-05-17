
import React, { useState } from 'react';
import { Question, Theme } from '../data/gameData';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Dialog, 
  DialogContent, 
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';

interface QuestionCardProps {
  question: Question;
  theme: Theme;
  onAnswer: (isCorrect: boolean) => void;
  questionNumber: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  theme, 
  onAnswer,
  questionNumber 
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Randomize the order of statements
  const [statements] = useState(() => {
    const statementsArray = [
      { text: question.true, isTrue: true },
      { text: question.false, isTrue: false }
    ];
    return statementsArray.sort(() => Math.random() - 0.5);
  });

  const handleSelection = (isTrue: boolean) => {
    setSelectedAnswer(isTrue ? 'true' : 'false');
    setShowResult(true);
    
    // Show dialog with fact after a short delay
    setTimeout(() => {
      setIsDialogOpen(true);
    }, 1200);
  };

  const handleContinue = () => {
    setIsDialogOpen(false);
    // Tell parent component about the answer after dialog is closed
    // This fixes the problem where clicking continue doesn't move to the next question
    const isCorrect = selectedAnswer === 'true';
    onAnswer(isCorrect);
  };

  const getButtonClass = (statement: { isTrue: boolean }) => {
    if (!showResult) return 'bg-white text-gray-800 hover:bg-gray-100';
    
    if (statement.isTrue) return 'bg-green-500 text-white';
    if (selectedAnswer === 'false' && !statement.isTrue) return 'bg-red-500 text-white';
    
    return 'bg-white text-gray-800';
  };

  const gradientStyle = {
    background: `linear-gradient(135deg, ${theme.colors[0]}, ${theme.colors[1]})`,
  };

  return (
    <div className="fade-in">
      <div className="mb-8 text-center">
        <div className="text-3xl mb-2">{theme.emoji}</div>
        <h2 className="text-xl font-semibold">Question {questionNumber} of 5</h2>
        <h3 className="text-lg opacity-70">Theme: {theme.name}</h3>
      </div>
      
      <Card className="p-6 mb-8 shadow-lg">
        <h2 className="text-xl font-bold mb-6 text-center">Which statement is TRUE?</h2>
        <div className="flex flex-col md:flex-row gap-4">
          {statements.map((statement, index) => (
            <Button
              key={index}
              onClick={() => !showResult && handleSelection(statement.isTrue)}
              className={`${getButtonClass(statement)} p-6 h-auto text-lg font-normal text-left transition-colors ${
                showResult && statement.isTrue ? 'pulse' : ''
              } ${showResult && selectedAnswer === 'false' && !statement.isTrue ? 'shake' : ''} 
              flex-1 break-words`}
              disabled={showResult}
            >
              {statement.text}
            </Button>
          ))}
        </div>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent style={gradientStyle} className="text-white border-none max-w-md">
          <DialogTitle className="text-xl font-bold text-white">
            {selectedAnswer === 'true' ? 'Correct! ✅' : 'Incorrect ❌'}
          </DialogTitle>
          <DialogDescription className="text-white/80">
            {selectedAnswer === 'true' 
              ? 'Well done! You picked the true statement.' 
              : 'Oops! That statement was false.'}
          </DialogDescription>
          <div className="text-center py-4">
            <div className="bg-white/20 p-4 rounded-lg mb-4">
              <h4 className="text-lg font-semibold mb-2">Fun Fact</h4>
              <p>{question.fact}</p>
            </div>
            <DialogFooter>
              <Button 
                onClick={handleContinue}
                className="bg-white text-black hover:bg-gray-100 w-full"
              >
                Continue
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>

      {/* Progress indicator */}
      <div className="mt-8 flex justify-center">
        <div className="w-full max-w-xs h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-green-500" 
            style={{ width: `${(questionNumber / 5) * 100}%`, transition: 'width 0.5s ease-in-out' }}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
