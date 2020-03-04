import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer',()=>{
    it('should return the initial state',()=>{
        expect(reducer(undefined,{})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
        //we are testing the reducer in initial state in this test
    })

    it('should store the token upon login',()=>{
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        },{
            type:actionTypes.AUTH_SUCCESS,
            idToken: 'some-token',
            userId: 'some-uesr-id'
        })).toEqual({
            token: 'some-token',
            userId: 'some-uesr-id',
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    })
});