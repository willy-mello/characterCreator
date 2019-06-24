// actions types

const Types = {
  GET_ROUTE: 'GET_ROUTE',
  DELETE_ROUTE: 'DELETE_ROUTE'
}


//actions
const getRoute = route => ({
  type: Types.GET_ROUTE,
  payload: route
});

const deleteRoute = routeId => ({
  type: Types.DELETE_ROUTE,
  payload: routeId
})

export default {
  Types,
  getRoute,
  deleteRoute
}