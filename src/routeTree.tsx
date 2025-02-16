import { Route, RootRoute } from '@tanstack/react-router';
import { Layout } from './components/Layout';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Messages } from './pages/Messages';

const rootRoute = new RootRoute({
  component: Layout,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

const messagesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/messages',
  component: Messages,
});

const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  messagesRoute,
  contactRoute,
]);