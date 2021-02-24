import React from "react";
import {Button, Divider, Layout, List, ListItem, Text} from "@ui-kitten/components";
import {s} from "../styles/styles";
import {connect} from "react-redux";
import {setCurrentPlayer} from "../redux/lobby-reducer";
import {useNavigation} from "@react-navigation/native";
import {setQuestion} from "../redux/question-reducer";
import {setAction} from "../redux/actions-reducer";
import Score from "./Score";

import styled from 'styled-components'

const Choice = (props) => {

    const navigation = useNavigation()
    const player = props.lobby.players[props.lobby.currentPlayerIndex]

    const setChoice = (choice) => {
        props.setQuestion()
        props.setAction()
        navigation.navigate('Question', {choice})
    }

    const renderItem = ({item, index}) => (
        <ListItem title={() => renderItemTitle({name: item.name})} accessoryRight={() => renderItemAccessory({score: item.score})}/>
    )

    const renderItemTitle = (props) => {
        return <Text category={"h4"} style={s.text}>{props.name}</Text>
    }

    const renderItemAccessory = (props) => {
        return (<Text style={s.text} category={'h4'}>{props.score.toString()}</Text>)
    }


    if (props.questions.questions.length === props.questions.usedQuestionsIndexes.length ||
        props.actions.actions.length === props.actions.usedActionsIndexes.length
    ) {
        return <Score/>
    }



    return (
        <Layout style={{...s.flex, ...s.withPaddings}}>
            <StyledList
                data={props.lobby.players}
                renderItem={renderItem}
                ItemSeparatorComponent={Divider}
            />
            <Text style={{fontSize: 50, alignSelf: 'center', marginBottom: 20, ...s.text}}>{player.name}</Text>
            <StyledButtonTop onPress={() => setChoice('Question')}>
                <Text category={'h1'} style={s.text}>Правда</Text>
            </StyledButtonTop>
            <Divider/>
            <StyledButtonBottom onPress={() => setChoice('Action')}>
                <Text category={'h1'} style={s.text}>Действие</Text>
            </StyledButtonBottom>
        </Layout>
    )
}

const StyledList = styled(List)`
  max-height: 30%;
  background-color: transparent;
`

const StyledButtonTop = styled(Button)`
  height: 15%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`

const StyledButtonBottom = styled(Button)`
  height: 15%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`

let mapStateToProps = (state) => {
    return {
        lobby: state.lobby,
        questions: state.questions,
        actions: state.actions
    }
}

export default connect(mapStateToProps, {setCurrentPlayer, setQuestion, setAction})(Choice)
