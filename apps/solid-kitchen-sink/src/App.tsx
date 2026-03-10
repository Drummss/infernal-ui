import {
  type InfernalAccentTheme,
  InfernalContext,
  type InfernalTheme,
} from '@infernal-ui/solid';
import { Route, Router } from '@solidjs/router';
import { createSignal } from 'solid-js';
import { IndexLayout } from './layouts/IndexLayout';
import { BoxTestsPage } from './pages/BoxTests';
import { ButtonTestsPage } from './pages/ButtonTests';
import { ColorTokensPage } from './pages/ColorTokens';
import { IndexPage } from './pages/Index';

export const App = () => {
  const [theme, setTheme] = createSignal<InfernalTheme>('system');
  const [accent, setAccent] = createSignal<InfernalAccentTheme | 'base'>(
    'base',
  );

  return (
    <InfernalContext
      as="div"
      theme={theme()}
      accent={accent() === 'base' ? undefined : accent()}
      onThemeChange={setTheme}
      onAccentChange={(nextAccent) => setAccent(nextAccent ?? 'base')}
    >
      <Router root={IndexLayout}>
        <Route component={IndexPage} path="/" />
        <Route component={ColorTokensPage} path="/color-tokens" />
        <Route component={BoxTestsPage} path="/box-tests" />
        <Route component={ButtonTestsPage} path="/button-tests" />
      </Router>
    </InfernalContext>
  );
};
