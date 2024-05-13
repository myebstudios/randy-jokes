import { useState } from "react";
import {View, StyleSheet, Text, Pressable, Image} from 'react-native';
import { Spaces, CardColors, AppColors, Typography } from "../globals/GlobalStyles";

type JokeCardProps = {
    color: string,
    setup: string,
    punchline: string,
    type: string,
}

export default function JokeCard(props: JokeCardProps) {

    return (
        <View style={[styles.jokeCardContainer, {backgroundColor: props.color} ]}>

            <View style={{
                gap: Spaces.s16
            }}>
                <View style={{
                    gap: Spaces.s8
                }}>
                    <Text  style={styles.label}>SETUP</Text>
                    <Text style={[Typography.largeHeading, {fontSize: 24}]}>{props.setup}</Text>
                </View>

                <View style={{
                    gap: Spaces.s8
                }}>
                    <Text style={styles.label}>PUNCHLINE</Text>
                    <Text style={[Typography.largeHeading, {fontSize: 24}]}>{props.punchline}</Text>
                </View>
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <View style={styles.pill}>
                    <Text style={[Typography.largeHeading, {
                        fontSize: 16,
                        color: AppColors.primary
                    }]}>{props.type}</Text>
                </View>

                <Pressable onPress={() => {
                    alert("🤣 LOL!!!")
                }}>
                    <Image style={{width: 32, height: 32}} source={require('../assets/icons/lol-false.png')} />
                </Pressable>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    jokeCardContainer: {
        padding: Spaces.appMargin,
        borderRadius: Spaces.s32,
        gap: Spaces.s32,
    },
    label: {
        fontSize: 16,
        fontWeight: '900',
        color: '#0004',
    },
    pill: {
        backgroundColor: AppColors.white,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: Spaces.s16,
        borderRadius: 24
    }
})
