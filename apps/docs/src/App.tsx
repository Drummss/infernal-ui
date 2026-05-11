import { InfernalContext } from '@infernal-ui/solid';
import { Meta, MetaProvider, Title } from '@solidjs/meta';
import { Navigate, Route, Router } from '@solidjs/router';
import { type Component, lazy } from 'solid-js';
import { DocsLayout, defaultDocsHref, docsRoutes, HomeLayout } from './layouts';

const HomePage = lazy(() => import('./pages/home-page'));
const DocsPage = lazy(() => import('./pages/docs-page'));

const App: Component = () => {
  return (
    <MetaProvider>
      <Title>Infernal UI</Title>
      <Meta name="description" content="Infernal UI Documentation" />

      <InfernalContext defaultTheme="dark">
        <Router>
          <Route path="/" component={HomeLayout}>
            <Route path="/" component={HomePage} />
          </Route>
          <Route path="/docs" component={DocsLayout}>
            <Route
              path="/"
              component={() => <Navigate href={defaultDocsHref} />}
            />
            {docsRoutes.map(({ path, page }) => (
              <Route path={path} component={() => <DocsPage page={page} />} />
            ))}
            <Route
              path="*missing"
              component={() => <Navigate href={defaultDocsHref} />}
            />
          </Route>
        </Router>
      </InfernalContext>
    </MetaProvider>
  );
};

export default App;
