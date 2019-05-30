export default function (state = {}, action) {
    switch(action.type){
        case 'NAME_LIST':
           return { ...state, nameList:action.payload}
        case 'NAME_CREATE':
           return { ...state, nameCreate:action.payload}
        case 'NAME_EDIT':
           return { ...state, nameEdit:action.payload}
        case 'NAME_DELETE':
            return { ...state, nameDelete:action.payloade}
        default :
        return state;
    }
}