import superagent from 'superagent';
const api = 'https://authenticated-api-server1.herokuapp.com';

export const getRemoteData = function (endPoint) {
  return (dispatch) => {
    console.log(`${api}/${endPoint}`);
    if (endPoint === 'categories') {
      return superagent.get(`${api}/${endPoint}`).then(response => {
        dispatch(getActionCategories({ results: response.body.results }));
      });
    }else{
      return superagent.get(`${api}/${endPoint}`).then(response => {
        dispatch(getActionProducts({ results: response.body.results }));
      });
    }
  };
};

export const putRemoteData = ((id, data, endPoint) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  };
  return (dispatch => {
    const url = `${api}/${endPoint}/${id}`;
    return fetch(url, options).then(response => {
      // console.log(response.body);
    });
  });
});



///categories
export const getActionCategories = (payload) => {
  return {
    type: 'GETCAT',
    payload: payload,
  };
};





///////products
export const getActionProducts = (payload) => {
  return {
    type: 'GETPRO',
    payload: payload,
  };
};