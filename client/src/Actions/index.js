import * as types from '../Constants/ActionTypes';
const url = 'http://localhost:8888/'
import axios from 'axios';

export function namelist(){
    return function(dispatch) {
        var headers = {
         'Content-Type': 'application/json',
        }
        axios.post(url+'api/getNames', {}, {headers: headers}).then(function (response) {
                dispatch({
                    type: types.NAME_LIST,
                    payload: response.data.data
                });
            }).catch(function (error) {
                dispatch({
                    type: types.NAME_LIST,
                    payload: []
                });
         });
    }
}
export function addName(data){
    return function(dispatch) {
        var headers = {
        'Content-Type': 'application/json',
        }
        axios.post(url+'api/addName', {name:data}, {headers: headers}).then(function (response) {
            dispatch({
                type: types.NAME_CREATE,
                payload: "Added!"
            });
        }).catch(function (error) {
            dispatch({
                type: types.NAME_CREATE,
                payload:[]
            });
        });
    }
}

export function editUser(){
    return {
        type:types.NAME_EDIT,
        payload:[]
    }
}

export function deleteUser(){
    return {
        type:types.NAME_DELETE,
        payload:[]
    }
}


