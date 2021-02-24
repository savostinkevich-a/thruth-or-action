import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "../components/HomeScreen";
import Lobby from "../components/Lobby";
import Choice from "../components/Choice";
import Question from "../components/Question";
import Action from "../components/Action";
import Score from "../components/Score";
import Rules from "../components/Rules";


const {Navigator, Screen} = createStackNavigator();

const AppNavigator = () => {
    return (
        <Navigator initialRouteName="Home Screen" headerMode="none">
            <Screen name="Home Screen" component={HomeScreen}/>
            <Screen name="Lobby" component={Lobby}/>
            <Screen name="Choice" component={Choice}/>
            <Screen name="Question" component={Question}/>
            <Screen name="Action" component={Action}/>
            <Screen name="Score" component={Score}/>
            <Screen name="Rules" component={Rules}/>

        </Navigator>
    )
}


export default AppNavigator
