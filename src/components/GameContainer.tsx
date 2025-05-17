
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

  const handleStartGame = () => {
    setGameState(GameState.PLAYING);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    
    // Move to next question or show results
    if (currentQuestionIndex < gameData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameState(GameState.RESULTS);
    }
  };

  const handleRestartGame = () => {
    setGameState(GameState.START);
  };

  const renderGameContent = () => {
    switch (gameState) {
      case GameState.START:
        return <StartScreen theme={gameData.theme} onStart={handleStartGame} />;
      
      case GameState.PLAYING:
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
