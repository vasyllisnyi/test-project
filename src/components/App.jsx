// React
import { Route, Routes } from 'react-router-dom';

// Pages
import HomePage from 'pages/HomePage/HomePage';
import NotFound from 'pages/NotFound/NotFound';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
