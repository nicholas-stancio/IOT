import Login from '../views/pages/login';
import Register from '../views/pages/register';
import Dashboard from '../views/pages/dashboard';

const routes = {
  '/': Login,
  '/login': Login,
  '/register': Register,
  '/dashboard': Dashboard,
};

export default routes;
