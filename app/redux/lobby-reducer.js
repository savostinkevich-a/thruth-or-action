let ADD_PLAYER = "ADD_PLAYER"
let REMOVE_PLAYER = "REMOVE_PLAYER"
let SET_CURRENT_PLAYER = "SET_CURRENT_PLAYER"
let SET_SCORE = "SET_SCORE"
let CLEAR_SCORE = "CLEAR_SCORE"
let CLEAR_LOBBY = "CLEAR_LOBBY"

let initialState = {
    players: [],
    currentPlayerIndex: 0
};
const lobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLAYER: {
            return {
                ...state,
                players: [...state.players, {
                    name: action.name,
                    score: 0
                }]
            }
        }
        case REMOVE_PLAYER: {
            let arr = state.players
            arr.splice(action.index, 1)
            return {
                ...state,
                players: arr
            }
        }
        case SET_CURRENT_PLAYER: {
            if (state.currentPlayerIndex === state.players.length - 1) {
                return {
                    ...state,
                    currentPlayerIndex: 0
                }
            }
            return {
                ...state,
                currentPlayerIndex: state.currentPlayerIndex + 1
            }
        }
        case SET_SCORE: {
            state.players[state.currentPlayerIndex].score += action.score
            return state
        }
        case CLEAR_SCORE: {
            state.players.forEach(player => player.score = 0)
            return state
        }
        case CLEAR_LOBBY: {
            return {
                ...state,
                players: []
            }
        }
        default:
            return state;
    }
}

export const addPlayer = (name) => ({
    type: ADD_PLAYER, name
})

export const removePlayer = (index) => ({
    type: REMOVE_PLAYER, index
})

export const setCurrentPlayer = () => ({
    type: SET_CURRENT_PLAYER
})

export const setScore = (score) => ({
    type: SET_SCORE, score
})

export const clearPlayersScore = () => ({
    type: CLEAR_SCORE
})

export const clearLobby = () => ({
    type: CLEAR_LOBBY
})

export default lobbyReducer
