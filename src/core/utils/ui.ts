import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const fValue = (value: number) => RFValue(value, 680);

export const fPercentage = (percentage: number) => RFPercentage(percentage);

export const spacing = (value: number) => value * 8;
