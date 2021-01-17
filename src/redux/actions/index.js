import axios from 'axios';
import { toast } from 'react-toastify';

import {
  AUTH_USER,
  AUTH_ERROR,
  TODOCREATE,
  TODOINDEX, TODOUPDATE,
  TODOMODEL,BUCKETLIST
} from './types';
import config from './config'
const ROOT_URL = config.url;
axios.defaults.baseURL = ROOT_URL;
if (localStorage.getItem('auth_jwt_token')) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('auth_jwt_token');
} else {
  console.log("Not Getting");
}
axios.defaults.headers.post['Content-Type'] = 'application/json';


//module.exports.axios = axios;


const configs = () => {
  return {
    headers: { 'Authorization': "bearer " + localStorage.getItem('auth_jwt_token') }
  }
}

export const simpleAction = () => dispatch => {
  dispatch({
    type: 'SIMPLE_ACTION1',
    payload: 'result_of_simple_action'
  })
}




export function signUserIn(data) {
  return function (dispatch) {
    // Submit email/password to server
    axios
      .post(`users/login`, data)
      .then(res => {
        console.log("response", res.data);
        dispatch({ type: AUTH_USER, payload: res.data })
        localStorage.setItem('auth_jwt_token', res.data.token);
        window.location = '#/dashboard';
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('auth_jwt_token');
      })
      .catch(error => {
        console.log("I am here", error);
        toast.error('Opps!  Server Error, try later', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        dispatch({ type: AUTH_ERROR, payload: 'Server Error, try later.' })
      });
  }
}


export function signUserUp(formData) {


  return function (dispatch) {
    // Submit email/password to server
    axios
      .post(`users/register`, formData)
      .then(res => {
        toast.info('Success! User is Successfully Created', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });

        window.location = '#/login';
      })
      .catch(error => {
        toast.error('Opps!  Server Error, try later', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        dispatch({ type: AUTH_ERROR, payload: 'Server Error, try later.' })
      });
  }
}





export function updateTodo(formData) {


  return function (dispatch) {

    axios
      .post(`todos/update/${formData.id}`, formData)
      .then(res => {
        toast.info('Todos is Successfully Update', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });

        window.location = '#/dashboard';

        return res;
      })
      .catch(error => {
        toast.error('Opps!  Server Error, try later', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        dispatch({ type: AUTH_ERROR, payload: 'Server Error, try later.' })
      });

  }

}


export function createTodo(formData) {


  return function (dispatch) {

    axios
      .post(`todos/create`, formData)
      .then(res => {
        toast.info('Todos is Successfully Created', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });

        window.location = '#/dashboard';
      })
      .catch(error => {
        toast.error('Opps!  Server Error, try later', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        dispatch({ type: AUTH_ERROR, payload: 'Server Error, try later.' })
      });

  }

}


export const getTodoLists = payloads => dispatch => axios.get(`todos/index`, configs())
  .then(res => {
    console.log("getTo", res);
    dispatch({
      type: TODOINDEX,
      payload: res.data
    })
    return res
  })
  .catch(
    error => console.log(error.response.data)
  );

export const getById = payloads => dispatch => axios.get(`todos/getById/${payloads.id}`, configs())
  .then(res => {
    console.log("getTo", res);
    dispatch({
      type: TODOMODEL,
      payload: res.data
    })
    return res
  })
  .catch(
    error => console.log(error.response.data)
  );



  export const deleteTodo  = payloads => dispatch => axios.post(`todos/delete`,payloads,configs())
            .then((response) => { 
               
              return response;
            }).catch(error => {
                  console.log("error",error.response.data)
                   
            });

            export const deleteBuckets  = payloads => dispatch => axios.post(`buckets/delete`,payloads,configs())
            .then((response) => { 
               
              return response;
            }).catch(error => {
                  console.log("error",error.response.data)
                   
            });







            export function createBucket(formData) {


              return function (dispatch) {
            
                axios
                  .post(`buckets/create`, formData)
                  .then(res => {
                    toast.info('Bucket is Successfully Created', {
                      position: "top-right",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true
                    });
            
                    window.location = '#/bucket/index';
                  })
                  .catch(error => {
                    toast.error('Opps!  Server Error, try later', {
                      position: "top-right",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true
                    });
                  });
            
              }
            
            }            



            export const getBucketLists = payloads => dispatch => axios.get(`buckets/index`, configs())
            .then(res => {
              console.log("getTo", res);
              dispatch({
                type: BUCKETLIST,
                payload: res.data
              })
              return res
            })
            .catch(
              error => console.log(error.response.data)
            );            


            export const getBucketTodoLists = payloads => dispatch => axios.get(`buckets/bucket-index/${payloads.id}`, configs())
            .then(res => {
              console.log("getTo", res);
              dispatch({
                type: BUCKETLIST,
                payload: res.data
              })
              return res
            })
            .catch(
              error => console.log(error.response.data)
            );            