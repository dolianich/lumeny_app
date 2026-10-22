import './styles/App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
  useLocation,
} from 'react-router-dom';
import CoursesPage from './pages/CoursesPage';
import PrayPage from './pages/PrayPage';
import BibleStudyPage from './pages/BibleStudyPage';
import AiPage from './pages/AiPage';
import ProfilePage from './pages/ProfilePage';
import LessonPage from './pages/LessonPage';
import NotFoundPage from './pages/NotFoundPage';
import AuthPage from './pages/AuthPage';
import SignUpPage from './pages/SignUpPage';
import TheoryPage from './pages/TheoryPage';
import ChallengePage from './pages/ChallengePage';
import PrayerPage from './pages/PrayerPage';
import LandingPage from './pages/LandingPage';
import { Provider } from 'react-redux';
import { store } from './store';

import TopBar from './components/TopBar/TopBar';
import MobNav from './components/MobNav/MobNav';

const RootLayout = () => {
  const location = useLocation();
  const hiddenComponentsRoutes = [
    '/auth',
    '/theory',
    '/challenge',
    '/signup',
    '/home',
    '/profile',
  ];

  const shouldHideComponents = hiddenComponentsRoutes.some((route) =>
    location.pathname.startsWith(route)
  );
  return (
    <div className="page">
      {!shouldHideComponents && (
        <>
          <TopBar />
          <MobNav />
        </>
      )}
      <div className={!shouldHideComponents ? 'content' : 'theoryContent'}>
        <Outlet />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Navigate to="home" />,
      },
      {
        path: '/foundations',
        element: <CoursesPage />,
      },
      {
        path: '/pray',
        element: <PrayPage />,
      },
      {
        path: '/bible_study',
        element: <BibleStudyPage />,
      },
      {
        path: '/ai',
        element: <AiPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/foundations/:lessonId',
        element: <LessonPage />,
      },
      {
        path: '/auth',
        element: <AuthPage />,
      },

      {
        path: '/signup',
        element: <SignUpPage />,
      },
      {
        path: '/theory',
        element: <TheoryPage />,
      },
      {
        path: '/challenge',
        element: <ChallengePage />,
      },
      {
        path: '/pray/:prayerId',
        element: <PrayerPage />,
      },
      {
        path: '/home',
        element: <LandingPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
