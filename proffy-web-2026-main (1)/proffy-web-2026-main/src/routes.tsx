<<<<<<< HEAD
import { createBrowserRouter } from "react-router";
import { Home } from "./pages/app/home";
import { TeacherList } from "./pages/app/teacher-list";
import { TeacherForms } from "./pages/app/teacher-forms";
import { TeacherFormsCompleted } from "./pages/app/teacher-forms-completed";
import { TeacherProfile } from "./pages/app/teacher-profile";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/study", element: <TeacherList /> },
  { path: "/give-classes", element: <TeacherForms /> },
  { path: "/give-classes/register-completed", element: <TeacherFormsCompleted /> },
  { path: "/profile", element: <TeacherProfile /> },
=======
import { createBrowserRouter, Navigate } from 'react-router';
import { SignIn } from './pages/auth/sign-in';
import { SignUp } from './pages/auth/sign-up';
import { FinallyRegister } from './pages/auth/finally-register';
import { Forgot } from './pages/auth/forgot';
import { ForgotCompleted } from './pages/auth/forgot-completed';
import { Landing } from "./pages/landing";
import { Study } from "./pages/study";
import { GiveClasses } from "./pages/give-classes";

export const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/sign-in" replace /> },
  
  { path: '/sign-in', element: <SignIn /> },
  { path: '/sign-up', element: <SignUp /> },
  { path: '/sign-up/register-completed', element: <FinallyRegister /> },
  
  { path: '/forgot', element: <Forgot /> },
  { path: '/forgot/send-email', element: <ForgotCompleted /> },

  { path: '/landing', element: <Landing /> },
  { path: '/study', element: <Study /> },
  { path: '/give-classes', element: <GiveClasses /> },
>>>>>>> 2bbea5fd2db0c56718204d642176d3a6629f0853
]);