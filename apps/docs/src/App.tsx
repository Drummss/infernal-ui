import { InfernalContext } from '@infernal-ui/solid';
import { Navigate, Route, Router } from '@solidjs/router';
import { type Component, lazy } from 'solid-js';
import { defaultDocsHref } from './content/docs';
import { DocsLayout, HomeLayout } from './layouts';

const HomePage = lazy(() => import('./pages/home-page'));
const DocsPage = lazy(() => import('./pages/docs-page'));

const App: Component = () => {
  return (
    <InfernalContext defaultTheme="dark">
      <Router>
        <Route path="/" component={HomeLayout}>
          <Route path="/" component={HomePage} />
        </Route>
        <Route path="/docs" component={DocsLayout}>
          <Route path="/" component={() => <Navigate href={defaultDocsHref} />} />
          <Route path="/*page" component={DocsPage} />
        </Route>
      </Router>
    </InfernalContext>
  );
};

export default App;
