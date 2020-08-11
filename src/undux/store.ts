import { createConnectedStore, withReduxDevtools } from 'undux';

export const Store = createConnectedStore({
  theme: 'light',
});
