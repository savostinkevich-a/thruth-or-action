import React from "react";
import {Button, Divider, Layout, List, ListItem, Text} from "@ui-kitten/components";
import {s} from "../styles/styles";
import {connect} from "react-redux";
import {clearQuestions} from "../redux/question-reducer";
import {clearActions} from "../redux/actions-reducer";
import {clearLobby, clearPlayersScore} from "../redux/lobby-reducer";
import {useNavigation} from "@react-navigation/native";

const Score = (props) => {
    const navigation = useNavigation()
    const renderItem = ({item}) => (
        <ListItem title={item.name} accessoryRight={() => renderItemAccessory({score: item.score})}/>
    )

    const renderItemAccessory = (props) => {
        return (<Button size='tiny'>{props.score}</Button>)
    }

    const startNewGameWithCurrentPlayers = () => {
        props.clearActions()
        props.clearQuestions()
        props.clearPlayersScore()
        navigation.navigate('Lobby')
    }

    return (
        <Layout style={{...s.flex, ...s.withPaddings}}>
            <Text style={{alignSelf:'center'}} category={'h5'}>Результат</Text>
            <List
                style={s.playersList}
                data={props.lobby.players}
                renderItem={renderItem}
                ItemSeparatorComponent={Divider}
            />
            <Button style={{...s.navButton, alignSelf: 'center'}} onPress={startNewGameWithCurrentPlayers}>Новая игра</Button>
        </Layout>
    )
}

let mapStateToProps = (state) => {
    return {
        lobby: state.lobby
    }
}

export default connect(mapStateToProps, {clearQuestions, clearActions, clearPlayersScore, clearLobby})(Score)
