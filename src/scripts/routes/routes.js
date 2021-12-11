import Login from '../views/pages/login';
import Register from '../views/pages/register';
import Dashboard from '../views/pages/dashboard';

const routes = {
  '/': Dashboard, // default page TODO: Balikin ke login abis selesai develop
  '/login': Login,
  '/register': Register,
  '/dashboard': Dashboard,
};

export default routes;
