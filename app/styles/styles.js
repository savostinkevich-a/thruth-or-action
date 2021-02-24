import {StyleSheet} from "react-native";

export const s = StyleSheet.create({
    flex: {
        flex: 1
    },
    topView: {
        flex: 1,
        alignItems: 'center',
    },
    centralView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'AmaticSC_700Bold'
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    withPaddings:{
        padding: 20,
        paddingTop: 45,
        paddingBottom: 0
    },
    navButton: {
        minWidth: 170,
        height: 70,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 35,
        elevation: 5
    },
    choiceButtonTop: {
        height:100,
        borderRadius: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    choiceButtonBottom: {
        height:100,
        borderRadius: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    notActive: {
        borderWidth: 0
    },
    answersButton: {
        width: 330,
        height: 120,
        marginTop: 40,
        padding: 10,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    row: {
        flexDirection: 'row',
    },
    bottom: {
        marginTop: 'auto'
    },
    backdrop: {
    },
    playersList: {
        maxHeight: 350,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    icon: {
        width: 32,
        height: 32,
    }
});
