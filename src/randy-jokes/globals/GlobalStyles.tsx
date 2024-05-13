import {StyleSheet} from "react-native";

export const AppColors = {
        primary: '#0C1123',
        secondary: '#1A90D2',
        accent: '#1C2C62',
        black: '#0C1123',
        white: '#fff'
}

export const CardColors = [
    '#D2AA1A',
    '#B81AD2',
    '#1AD2A6'
]

export const Typography = StyleSheet.create({
    largeHeading: {
        fontSize: 34,
        fontWeight: 'bold',
        color: AppColors.white
    }
})

export const Spaces = {
    s8: 8,
    s16: 16,
    s24: 24,
    s32: 32,
    appMargin: 20
}
