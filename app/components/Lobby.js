import React, {useState} from "react";
import {Button, Divider, Icon, Input, Layout, List, ListItem, Text} from "@ui-kitten/components";
import {s} from "../styles/styles";
import {connect} from "react-redux";
import {addPlayer, removePlayer, setCurrentPlayer} from "../redux/lobby-reducer";
import {useNavigation} from "@react-navigation/native";


const Lobby = (props) => {
    const navigation = useNavigation()
    const [value, setValue] = useState('')

    const addPlayer = () => {
        if (value !== '') {
            props.addPlayer(value)
            setValue('')
        }
    }

    const removePlayer = (index) => {
        props.removePlayer(index)
    }

    const startGame = () => {
        navigation.navigate('Rules')
    }

    const CrossIcon = (props) => (
        <Icon {...props} name='close-outline'/>
    );

    const renderItem = ({item, index}) => (
        <ListItem style={s.text} title={() => renderItemTitle({name: item.name})} accessoryRight={() => renderItemAccessory({index})}/>
    )

    const renderItemTitle = (props) => {
        return <Text category={"h4"} style={s.text}>{props.name}</Text>
    }

    const renderItemAccessory = (props) => {
        return (<Button size='tiny' accessoryLeft={CrossIcon}
                        onPress={() => removePlayer(props.index)}/>)
    }

    return (
        <Layout style={{...s.flex, ...s.withPaddings}}>
            <Text category={"h1"} style={{alignSelf: 'center', marginBottom: 15, ...s.text}}>Добавь Игроков</Text>
            <Input
                style={s.text}
                placeholder='Имя игрока'
                value={value}
                onChangeText={nextValue => setValue(nextValue)}
            />
            <Button onPress={addPlayer} style={{...s.navButton, alignSelf: 'center'}}>
                <Text category={"h4"} style={s.text}>
                    Добавить
                </Text>
            </Button>

            {props.lobby.players.length !== 0 ? <List
                style={s.playersList}
                data={props.lobby.players}
                renderItem={renderItem}
                ItemSeparatorComponent={Divider}

            /> : <Text category={'h3'} style={{alignSelf: 'center', paddingTop: 40, ...s.text}}>Они будут тут</Text>}
            {props.lobby.players.length > 1 &&
            <Button style={{...s.navButton, alignSelf: 'center'}} onPress={startGame}>
                <Text category={"h4"} style={s.text}>
                    Начать игру
                </Text>
            </Button>}
        </Layout>
    )
}


let mapStateToProps = (state) => {
    return {
        lobby: state.lobby
    }
}

export default connect(mapStateToProps, {addPlayer, removePlayer})(Lobby)
