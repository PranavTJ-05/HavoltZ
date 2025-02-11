"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Timer, ArrowRight, RefreshCw } from "lucide-react";

const allQuestions = [
  {
    id: 1,
    question: "What is the primary purpose of a microcontroller?",
    options: [
      "To control microphones",
      "To process data and control devices",
      "To amplify sound",
      "To display images",
    ],
    correct: 1,
  },
  {
    id: 2,
    question: "Which programming language is commonly used for Arduino?",
    options: ["Python", "C++", "Java", "Ruby"],
    correct: 1,
  },
  {
    id: 3,
    question: "What does LED stand for?",
    options: [
      "Light Emitting Device",
      "Light Enabling Diode",
      "Light Emitting Diode",
      "Light Energy Display",
    ],
    correct: 2,
  },
  {
    id: 4,
    question: "What is the function of a voltage regulator?",
    options: [
      "To increase voltage only",
      "To maintain a constant voltage level",
      "To convert AC to DC",
      "To measure current flow",
    ],
    correct: 1,
  },
  {
    id: 5,
    question: "Which component is used to store electrical charge?",
    options: [
      "Resistor",
      "Inductor",
      "Capacitor",
      "Transistor",
    ],
    correct: 2,
  },
  {
    id: 6,
    question: "What is the purpose of a transistor?",
    options: [
      "To store energy",
      "To amplify or switch electronic signals",
      "To resist current flow",
      "To emit light",
    ],
    correct: 1,
  },
  {
    id: 7,
    question: "What does PWM stand for in electronics?",
    options: [
      "Power Width Management",
      "Pulse Width Modulation",
      "Power Wave Mechanism",
      "Pulse Wave Management",
    ],
    correct: 1,
  },
  {
    id: 8,
    question: "Which protocol is commonly used for serial communication?",
    options: [
      "USB",
      "UART",
      "HTTP",
      "FTP",
    ],
    correct: 1,
  },
];

export default function QuizPage() {
  const [questions, setQuestions] = useState<typeof allQuestions>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(180); // 3 minutes in seconds
  const [quizStarted, setQuizStarted] = useState(false);

  // Function to shuffle array using Fisher-Yates algorithm
  const shuffleArray = (array: typeof allQuestions) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const startQuiz = () => {
    // Select 5 random questions
    const shuffledQuestions = shuffleArray(allQuestions).slice(0, 5);
    setQuestions(shuffledQuestions);
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setTimer(180);

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          clearInterval(interval);
          setShowScore(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleAnswerClick = (selectedOption: number) => {
    if (questions[currentQuestion].correct === selectedOption) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
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
            Test your knowledge with 5 random technical questions. You have 3 minutes to complete the quiz.
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