const SET_COINS = 'SET_COINS';

let initialState = {
    coins:[]
}

let converter = (state = initialState, action:object) => {
    switch (action.type) {
        case SET_COINS:
            return{
                ...state,
                coins: action.coins
            }

        default:
            return state;
    }
}

export const setCoins = (coins:[]) => ({
    type: SET_COINS,
    coins
})

export default converter;