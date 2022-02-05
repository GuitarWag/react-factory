import { getSagaExtension } from '@react-factory/async';
import { Store } from '@react-factory/react';
import { createStore } from '@react-factory/react';

import { ageModule, AgeState, NAMESPACE } from './age';

interface RootState {
  [NAMESPACE]: AgeState;
}

// eslint-disable-next-line import/prefer-default-export
export async function initStore(): Promise<Store<RootState>> {
  return createStore<RootState>(
    {
      initialState: {},
      extensions: [getSagaExtension({})],
    },
    ageModule
  );
}
