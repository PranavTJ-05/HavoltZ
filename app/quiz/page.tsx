"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Timer, ArrowRight, RefreshCw } from "lucide-react";
import allQuestions from "@/constants/quiz";

export default function QuizPage() {
  const [questions, setQuestions] = useState<typeof allQuestions>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(180); // 3 minutes in seconds
  const [quizStarted, setQuizStarted] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // Function to shuffle array using Fisher-Yates algorithm
  const shuffleArray = (array: typeof allQuestions) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isActive && timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            setIsActive(false);
            setShowScore(true);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isActive, timer]);

  const startQuiz = () => {
    // Select 10 random questions
    const shuffledQuestions = shuffleArray(allQuestions).slice(0, 10);
    setQuestions(shuffledQuestions);
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setTimer(180);
    setIsActive(true);
  };

  const handleAnswerClick = (selectedOption: number) => {
    if (questions[currentQuestion].correct === selectedOption) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsActive(false);
      setShowScore(true);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Trophy className="h-16 w-16 mx-auto mb-8 text-primary" />
          <h1 className="text-4xl font-bold mb-6">Havoltz Technical Quiz</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Test your knowledge with 10 random technical questions. You have 3 minutes to complete the quiz.
          </p>
          <Button size="lg" onClick={startQuiz}>
            Start Quiz
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    );
  }

  if (showScore) {
    const percentage = (score / questions.length) * 100;
    return (
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <Trophy className="h-16 w-16 mx-auto mb-8 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
            <div className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              {percentage}%
            </div>
            <p className="text-xl mb-8 text-muted-foreground">
              You answered {score} out of {questions.length} questions correctly
            </p>
            <Button size="lg" onClick={startQuiz}>
              Try Again
              <RefreshCw className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="text-lg font-semibold">
            Question {currentQuestion + 1}/{questions.length}
          </div>
          <div className="flex items-center gap-2 text-lg">
            <Timer className="h-5 w-5" />
            {formatTime(timer)}
          </div>
        </div>

        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6">
            {questions[currentQuestion].question}
          </h2>
          <div className="grid gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="justify-start h-auto py-4 px-6 text-left"
                onClick={() => handleAnswerClick(index)}
              >
                {option}
              </Button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}