import QuizClient from "./QuizClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Take the Free MBTI Personality Test",
  description: "Answer 60 questions to discover your MBTI personality type. Free, no sign-up required. Find out if you're an INTJ, ENFP, ISTP, or one of the other 16 types.",
};

export default function TestPage() {
  return <QuizClient />;
}
