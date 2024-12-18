/* eslint-disable no-unused-vars */
export const logger = (store) => (next) => (action) => {
  next(action);
}

export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [{ name: 'Gito'}, ...actionInfo.action.payload];
  const updatedActionInfo = {...actionInfo, action: {...actionInfo.action, payload: featured}};
  next(updatedActionInfo);
}