import { createSelector } from 'reselect';


const selectRoute = (state) => state.get('route');
const selectAppDomain = (state) => state.get('app');

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const makeSelectApp = () => createSelector(
  selectAppDomain,
  (substate) => substate.toJS()
);

export default makeSelectApp;
export {
  makeSelectLocation,
  selectAppDomain,
};
