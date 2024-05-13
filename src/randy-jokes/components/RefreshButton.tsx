import { Pressable, Image } from "react-native";
import { AppColors } from "../globals/GlobalStyles";

type RefreshButtonProps = {
    onPress: () => void;
}

export default function RefreshButton(props: RefreshButtonProps) {
    return (
        <Pressable style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: AppColors.secondary,
            width: 84,
            height: 84,
            borderRadius: 42,
        }}
        onPress={props.onPress}>
            <Image source={require('../assets/icons/tabler-icon-rotate-clockwise-2.png')} />
        </Pressable>
    )
}
