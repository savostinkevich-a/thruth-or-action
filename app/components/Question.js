import React, {useState} from "react";
import {Button, Divider, Layout, Text} from "@ui-kitten/components";
import {s} from "../styles/styles";
import {connect} from "react-redux";
import {useNavigation, useRoute} from "@react-navigation/native";
import {setCurrentPlayer, setScore} from "../redux/lobby-reducer";
import styled from 'styled-components'


const Question = (props) => {
    const navigation = useNavigation()
    const route = useRoute()
    const [score, setScore] = useState(2)
    const [isChanged, setIsChanged] = useState(false)
    const choice = route.params?.choice

    const question = props.questions.currentQuestion
    const action = props.actions.currentAction
    const player = props.lobby.players[props.lobby.currentPlayerIndex]

    const continueGame = () => {
        props.setScore(score)
        props.setCurrentPlayer()
        navigation.navigate('Choice')
    }

    const change = () => {
        setIsChanged(true)
        setScore(1)
    }

    const giveUp = () => {
        props.setScore(score - 2)
        props.setCurrentPlayer()
        navigation.navigate('Choice')
    }

    return (
        <Layout style={{...s.flex, ...s.withPaddings}}>
            <Text category={'h1'} style={{alignSelf: 'center', ...s.text}}>{player.name}</Text>
            <StyledQuestionContainer>
                <StyledTitleText category={'h1'} style={s.text}>
                    {choice === 'Question' && !isChanged ? "Правда" : null }
                    {choice === 'Action' && isChanged ? "Правда" : null }
                    {choice === 'Question' && isChanged ? "Действие" : null }
                    {choice === 'Action' && !isChanged ? "Действие" : null }
                </StyledTitleText>
                <StyledQuestionText category={'h3'} style={s.text}>
                    {choice === 'Question' && !isChanged ? question.question : null }
                    {choice === 'Action' && isChanged ? question.question : null }
                    {choice === 'Question' && isChanged ? action.action : null }
                    {choice === 'Action' && !isChanged ? action.action : null }
                </StyledQuestionText>
            </StyledQuestionContainer>
            <StyledBottomContainer>
                <StyledButtonTop onPress={continueGame}><Text category={'h3'} style={s.text}>Продолжить</Text></StyledButtonTop>
                <Divider/>
                {!isChanged && <><StyledButtonMiddle onPress={change}><Text category={'h3'} style={s.text}>{choice === 'Question' ? 'Выбрать дейтвие' : 'Выбрать правду'}</Text></StyledButtonMiddle><Divider/></>}
                <StyledButtonBottom onPress={giveUp}><Text category={'h3'} style={s.text}>Пропустить</Text></StyledButtonBottom>
            </StyledBottomContainer>

        </Layout>
    )
}

const StyledQuestionContainer = styled(Layout)`
  height: 40%;
  border-radius: 15px;
  background-color: aliceblue;
  margin-top: 5%;
  align-items: center;
  padding-top: 5%;
  padding-bottom: 5%;
  margin-bottom: 5%;
`

const StyledTitleText = styled(Text)`
  color: #222;
`

const StyledQuestionText = styled(Text)`
  color: #222;
  margin-top: 10%;
  text-align: center;
`

const StyledBottomContainer = styled(Layout)`
  height: 50%;
  justify-content: center;
`

const StyledButtonTop = styled(Button)`
  height: 25%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`

const StyledButtonMiddle = styled(Button)`
  height: 25%;
  border-radius: 0;
`

const StyledButtonBottom = styled(Button)`
  height: 25%;
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

export default connect(mapStateToProps, {setCurrentPlayer, setScore})(Question)
