export interface ApiResponse {
  user: User;
  courses: Courses;
}

export interface User {
  id: string;
  email: string;
  phone?: string;
  birthday?: Date;
  name: string;
  photo: string;
  level: number;
  points: number;
  isActive: boolean;
  created_at: string;
  updated_at: string;
  provider: string;
}

export interface Course {
  id: string;
  status: boolean;
  title: string;
  description: string;
  badge: string;
  order: number | null;
  lessons: LessonsList;
}

export interface Lesson {
  id: string;
  title: string;
  coverImage: object;
  description: string;
  order: number | null;
  status: boolean;
  courseId: string;
  theoryId: string;
  challengeId: string;
  theory: Theory;
  challenge: Challenge;
  badge?: string;
}

export interface Challenge {
  id: string;
  title: string;
  status: boolean;
  progress: number;
  description?: string;
  questions: QuestionsList;
  answers: AnswersList;
}

export interface Theory {
  id: string;
  title: string;
  text: string;
  images?: string[];
  status: boolean;
  courseId: string;
}

export interface Question {
  id: string;
  title: string;
  text: string;
  images?: string[];
  status: boolean;
  challengeId: string;
  answers: AnswersList;
}

export interface Answer {
  id: string;
  title: string;
  text: string;
  status: boolean;
  questionId: string;
  challengeId: string;
}

export interface PrayerText {
  id: string;
  heading: string;
  text: string;
}

export interface Prayer {
  id: string;
  cover: string;
  heading: string;
  prayersText: PrayerText[];
}

export type Prayers = Prayer[];
export type AnswersList = Answer[];
export type QuestionsList = Question[];
export type LessonsList = Lesson[];
export type Courses = Course[];
