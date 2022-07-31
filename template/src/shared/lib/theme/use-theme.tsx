import {useColorScheme} from 'react-native';
import {DarkTheme} from './dark-theme';
import {DefaultTheme} from './default-theme';

export const useTheme = () =>
  useColorScheme() === 'dark' ? DarkTheme : DefaultTheme;
