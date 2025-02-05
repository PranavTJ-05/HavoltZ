"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trophy, Timer, ArrowRight } from "lucide-react";
import questions from "@/constants/quiz";

const leaderboard = [
  { name: "Alex Johnson", score: 95, time: "2:45" },
  { name: "Sarah Smith", score: 90, time: "3:00" },
  { name: "Mike Brown", score: 85, time: "2:30" },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(180); // 3 minutes in seconds
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
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
            Test your knowledge and compete with other members. You have 3 minutes to complete the quiz.
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
    return (
      <div className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Trophy className="h-16 w-16 mx-auto mb-8 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
            <p className="text-xl mb-8">
              You scored {score} out of {questions.length}
            </p>
          </div>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Leaderboard</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Rank</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboard.map((entry, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{entry.name}</TableCell>
                    <TableCell>{entry.score}%</TableCell>
                    <TableCell>{entry.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
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