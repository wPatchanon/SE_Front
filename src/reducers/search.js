export default (state = { searchKey: '', searchResult: [] }, action) => {
    switch (action.type) {
        case 'SET_SEARCH_KEY':
            return {
                ...state,
                searchKey: action.data.searchKey,
            };
        //Palm's 
        case 'SET_SEARCH_RESULT':
            return {
                ...state,
                searchResult: action.data.searchResult,
            };
        default:
            return state;
    }
};