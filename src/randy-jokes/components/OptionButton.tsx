import { Pressable, Image } from "react-native";
import { AppColors } from "../globals/GlobalStyles";

type RefreshButtonProps = {
    onPress: () => void,
    iconSource: any
}

export default function RefreshButton(props: RefreshButtonProps) {
    return (
        <Pressable style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: AppColors.accent,
            width: 52,
            height: 52,
            borderRadius: 26,
        }}
                   onPress={props.onPress}>
            <Image source={ props.iconSource} />
        </Pressable>
    )
}
