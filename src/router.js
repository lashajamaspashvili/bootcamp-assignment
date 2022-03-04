import { Routes, Route } from 'react-router-dom';

import PersonalInfoPage from './components/pages/PersonalInfoPage';
import TechnicalIssuesPage from './components/pages/TechnicalIssuesPage';
import CovidPage from './components/pages/CovidPage';
import RedberryInternalPage from './components/pages/RedberryInternalPage';
import SubmitPage from './components/pages/SubmitPage';

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