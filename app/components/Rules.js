import React from "react";
import {Button, Layout, Text} from "@ui-kitten/components";
import {s} from "../styles/styles";
import {useNavigation} from "@react-navigation/native";

const Rules = (props) => {
    const navigation = useNavigation()

    return (
        <Layout style={{...s.flex, ...s.withPaddings}}>
            <Text category={"h1"} style={{alignSelf: "center", paddingTop: 20, ...s.text}}>Правила</Text>
            <Text category={'h5'} style={{paddingTop: 20, ...s.text}}>За каждый отвеченный вопрос или выполенное
                действие игрок получвает 2 балла.</Text>
            <Text category={'h5'} style={{paddingTop: 20, ...s.text}}>Игрок может пропустить вопрос или действие, в этом
                случае он не получит баллов.</Text>
            <Text category={'h5'} style={{paddingTop: 20, ...s.text}}>Также игрок может извенить свой выбор и выбрать
                действие, вместо вопроса, или наоборот.
                В этом случае он получит только 1 балл. </Text>
            <Text category={'h5'} style={{paddingTop: 20, ...s.text}}>А если даже вы этом случае он откажется выполнять
                задание,
                то колличество его набранных баллав уменьшится на 1.</Text>
            <Text category={'h2'} style={{alignSelf: "center", paddingTop: 20, paddingBottom: 20, ...s.text}}>Удачной
                игры!</Text>
            <Button style={s.navButton} onPress={() => navigation.navigate('Choice')}>
                <Text category={'h4'} style={s.text}>Понятно</Text>
            </Button>
        </Layout>
    )
}

export default Rules
