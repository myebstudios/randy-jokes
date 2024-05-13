import { Pressable, Text } from "react-native";
import {AppColors} from "../globals/GlobalStyles";

type OnboardingButtonProps = {
    text: string,
    onPress: () => void,
}

export default function OnboardingButton(props: OnboardingButtonProps) {
    return (
        <Pressable style={
            {
                backgroundColor: AppColors.secondary,
                padding: 16,
                borderRadius: 12,
                width: '100%',
                alignItems: 'center'
            }
        }
        onPress={props.onPress}>
            <Text style={
                {
                    fontSize: 17,
                    fontWeight: '600'
                }
            }>{props.text}</Text>
        </Pressable>
    )
}
