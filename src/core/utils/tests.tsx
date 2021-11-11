import React, {ReactElement} from 'react';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {reducer, RootState, Store} from 'redux/store';
import {
  render as rtlRender,
  RenderOptions as RtlRenderOptions,
} from '@testing-library/react-native';

type RenderOptions = RtlRenderOptions & {
  preloadedState?: RootState;
  store?: Store;
};

const render = (
  ui: ReactElement<any>,
  {
    preloadedState,
    store = configureStore({reducer, preloadedState}),
    ...renderOptions
  }: RenderOptions = {},
) => {
  const Wrapper = ({children}: {children: ReactElement<any>}): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };

  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
};

export * from '@testing-library/react-native';
export {render};
