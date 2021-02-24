let SET_QUESTION = "SET_QUESTION"
let TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
let CLEAR = "CLEAR"

let initialState = {
    questions: [
        {
            question: 'За что тебе до сих пор стыдно?',
            id: 1
        },
        {
            question: 'Что сделаешь, есть жить осталось всего сутки?',
            id: 2
        },
        {
            question: 'Расскажи секрет!',
            id: 3
        },
        {
            question: 'Какого вопроса ты боишься в этой игре?',
            id: 4
        },
        {
            question: 'Какая максимальная разница в возрасте тебя не смутит в отношениях?',
            id: 5
        },
        {
            question: 'Как бы называлась твоя компания, по проиводсту секс игрушек?',
            id: 6
        },
        {
            question: 'Скажи 5 своих желаний за 30 секунд',
            id: 7
        },
        {
            question: 'Что больше всего боишься потерять?',
            id: 8
        },
        {
            question: 'Чьи мысли из игроков ты больше всего хотел бы прочитать?',
            id: 9
        },
        {
            question: 'Назови три любимых канала на ютубе и объясни, почему они тебе нравятся!',
            id: 10
        },
    ],
    currentQuestion: {},
    usedQuestionsIndexes: [],
    isFetching: false
};


const questionsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_QUESTION: {
            let i = Math.floor(Math.random() * state.questions.length)
            while (state.usedQuestionsIndexes.some(index => index === i)){
                i = Math.floor(Math.random() * state.questions.length)
            }
            return {
                ...state,
                currentQuestion: state.questions[i],
                usedQuestionsIndexes: [...state.usedQuestionsIndexes, i]
            }
        }
        case CLEAR: {
            return {...state, usedQuestionsIndexes: [], currentQuestion: {}}
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

export const setQuestion = () => ({
    type: SET_QUESTION
})

export const clearQuestions = () => ({
    type: CLEAR
})


export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING, isFetching
})

export default questionsReducer


