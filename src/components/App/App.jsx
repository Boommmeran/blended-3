import { Header } from 'components';
import { CountrySearch, Home, Country } from 'pages';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'routes'

export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Header />}>
        <Route index element={<Home />} />
        <Route path={routes.COUNTRY} element={<Country />} />
        <Route path={routes.COUNTRY_ID} element={<CountrySearch />} />
      </Route>
    </Routes>
  );
};
