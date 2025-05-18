
import React, { useState } from 'react';
import { getGameDataForDate, GameData } from '../data/gameData';
import StartScreen from './StartScreen';
import QuestionCard from './QuestionCard';
import ResultScreen from './ResultScreen';

enum GameState {
  START,
  PLAYING,
  RESULTS
}

const GameContainer: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.START);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameData] = useState<GameData>(getGameDataForDate());

  console.log('GameContainer rendered. Current state:', 
    GameState[gameState], 
    'Question index:', currentQuestionIndex, 
    'Score:', score);

  const handleStartGame = () => {
    console.log('Starting game');
    setGameState(GameState.PLAYING);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const handleAnswer = (isCorrect: boolean) => {
    console.log('handleAnswer called with isCorrect:', isCorrect);
    
    if (isCorrect) {
      const newScore = score + 1;
      console.log('Incrementing score from', score, 'to', newScore);
      setScore(newScore);
    }
    
    // Move to next question or show results
    const nextQuestionIndex = currentQuestionIndex + 1;
    console.log('Current question index:', currentQuestionIndex, 'Next index:', nextQuestionIndex);
    
    if (nextQuestionIndex < gameData.questions.length) {
      console.log('Moving to next question:', nextQuestionIndex);
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      console.log('All questions answered, showing results');
      setGameState(GameState.RESULTS);
    }
  };

  const handleRestartGame = () => {
    console.log('Restarting game');
    setGameState(GameState.START);
  };

  const renderGameContent = () => {
    console.log('Rendering game content for state:', GameState[gameState]);
    
    switch (gameState) {
      case GameState.START:
        return <StartScreen theme={gameData.theme} onStart={handleStartGame} />;
      
      case GameState.PLAYING:
        console.log('Rendering question card with index:', currentQuestionIndex);
        return (
          <QuestionCard 
            question={gameData.questions[currentQuestionIndex]}
            theme={gameData.theme}
            onAnswer={handleAnswer}
            questionNumber={currentQuestionIndex + 1}
          />
        );
      
      case GameState.RESULTS:
        return (
          <ResultScreen 
            score={score} 
            totalQuestions={gameData.questions.length} 
            theme={gameData.theme}
            onRestart={handleRestartGame}
          />
        );
    }
  };

  return (
    <div className="max-w-md mx-auto my-4 p-4">
      {renderGameContent()}
    </div>
  );
};

export default GameContainer;
