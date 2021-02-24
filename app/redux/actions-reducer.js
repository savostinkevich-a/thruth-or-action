let SET_ACTION = "SET_ACTION"
let TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
let CLEAR = "CLEAR"

let initialState = {
    actions: [
        {
            action: 'Позвони в пиццерию закажи суши!',
            id: 1
        },
        {
            action: 'Если захочешь в туалет, отпросись у каждого игрока!',
            id: 2
        },
        {
            action: 'Отдай свой телефон на пять минут разблокированным соседу справа!',
            id: 3
        },
        {
            action: 'Дай послушать всем последнее голосовое сообщение, записанное тобой!',
            id: 4
        },
        {
            action: 'Выложи в инстаграм последнюю фотографию с телефона!',
            id: 5
        },
        {
            action: 'Позвони любому другу, не из числа игроков, и скажи, что уезжаешь в Узбекистан!',
            id: 6
        },
        {
            action: 'Пытайся произнести букву "Ъ", пока все игроки не скажут, что ты справился!',
            id: 7
        },
        {
            action: 'Съешь что-нибудь на букву "Г"',
            id: 8
        },
        {
            action: 'Приготовь поесть!',
            id: 9
        },
        {
            action: 'Подари что-нибудь соседу слева!',
            id: 10
        },
    ],
    currentAction: {},
    usedActionsIndexes: [],
    isFetching: false
};
const actionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ACTION: {
            let i = Math.floor(Math.random() * state.actions.length)
            while (state.usedActionsIndexes.some(index => index === i)){
                i = Math.floor(Math.random() * state.actions.length)
            }
            return {
                ...state,
                currentAction: state.actions[i],
                usedActionsIndexes: [...state.usedActionsIndexes, i]
            }
        }
        case CLEAR: {
            return {...state , usedActionsIndexes: [], currentAction: {}}
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
}

export const setAction = () => ({
    type: SET_ACTION
})

export const clearActions = () => ({
    type: CLEAR
})

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING, isFetching
})

export default actionReducer
