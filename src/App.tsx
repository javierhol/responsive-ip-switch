import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import Calendar from './pages/Calendar';
import ECommerce from './pages/Dashboard/ECommerce';
//import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Signin from './components/Signin/Signin';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Responsive Ip Switch" />
              <Signin />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <PageTitle title="Dashboard" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar " />
              <Calendar />
            </>
          }
        />
        {/* <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        /> */}

        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Users" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings" />
              <Settings />
            </>
          }
        />

      </Routes>
    </>
  );
}

export default App;
