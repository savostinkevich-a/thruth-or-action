import React from "react";
import {useNavigation} from '@react-navigation/native';
import {Button, Layout, Spinner, Text} from "@ui-kitten/components";
import {s} from "../styles/styles";
import {
    AmaticSC_400Regular,
    AmaticSC_700Bold, useFonts
} from '@expo-google-fonts/amatic-sc'



const HomeScreen = (props) => {

    let [fontsLoaded] = useFonts({
        AmaticSC_400Regular,
        AmaticSC_700Bold
    });

    const navigation = useNavigation()

    let goToLobby = () => {
        navigation.navigate('Lobby')
    }
    if (!fontsLoaded) {
        return <Spinner/>;
    }

    return (
        <Layout style={{...s.centralView, ...s.withPaddings}}>
            <Button style={s.navButton} onPress={goToLobby}>
                <Text category={'h1'} style={s.text}>Играть</Text>

            </Button>
        </Layout>
    )
}

export default HomeScreen
