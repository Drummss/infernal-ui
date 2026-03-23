import { InfernalContext } from '@infernal-ui/solid';
import { Route, Router } from '@solidjs/router';
import { type Component, lazy } from 'solid-js';
import { DocsLayout, HomeLayout } from './layouts';

const HomePage = lazy(() => import('./pages/home-page'));
const DocsPage = lazy(() => import('./pages/docs-page'));

const App: Component = () => {
  return (
    <InfernalContext defaultTheme="dark">
      <Router>
        <Route path="/" component={HomeLayout}>
          <Route component={HomePage} />
        </Route>
        <Route path="/docs" component={DocsLayout}>
          <Route component={DocsPage} />
        </Route>
      </Router>
    </InfernalContext>
  );
};

export default App;
