import { Pressable, View, Text } from "react-native";
import {AppColors} from "../globals/GlobalStyles";

export default function OnboardingButton() {
    return (
        <Pressable style={
            {
                backgroundColor: AppColors.secondary,
                padding: 16,
                borderRadius: 12,
                width: '100%',
                alignItems: 'center'
            }
        }>
            <Text style={
                {
                    fontSize: 17,
                    fontWeight: '600'
                }
            }>Get Started</Text>
        </Pressable>
    )
}