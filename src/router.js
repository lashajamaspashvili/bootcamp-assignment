import { Routes, Route } from 'react-router-dom';

import PersonalInfoPage from './pages/PersonalInfoPage';
import TechnicalIssuesPage from './pages/TechnicalIssuesPage';
import CovidPage from './pages/CovidPage';
import RedberryInternalPage from './pages/RedberryInternalPage';
import SubmitPage from './pages/SubmitPage';

const routes = [
  {
    id: 1,
    path: "/personal-info",
    element: <PersonalInfoPage />,
  },
  {
    id: 2,
    path: "/technical-issues",
    element: <TechnicalIssuesPage />,
  },
  {
    id: 3,
    path: "/covid",
    element: <CovidPage />,
  },
  {
    id: 4,
    path: "/redberry-internal",
    element: <RedberryInternalPage />,
  },
  {
    id: 5,
    path: "/submit",
    element: <SubmitPage />,
  },
];




const AppRouter = () => {
  return (
    <Routes>
      {
        routes.map(route => <Route key={route.id} {...route} />)
      }
    </Routes>
  )
}


export default AppRouter;