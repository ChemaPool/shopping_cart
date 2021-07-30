import { createContext, useReducer, useContext } from 'react';

const StateContext = createContext(null);
const DispatchContext = createContext(null);

const validateLocalStore = ({ key }: any) => {
  const item = localStorage.getItem(key);

  if (item !== 'undefined') JSON.parse(item ?? '[]');

  return JSON.parse(item ?? '[]');
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'ADD_ITEM':
      const item = action?.data.item;
      return {
        ...state,
        cart: [...state.cart.concat({
          id: item?.id,
          name: item?.name,
          cover: item?.cover,
          price: item?.price
        })],
      };

    case 'REMOVE_ITEM':
      const index = Number(action.data.index);
      return {
        ...state,
        cart: [...state.cart.slice(0, index), ...state.cart.slice(index + 1)],
      };

    case 'REMOVE_ALL_ITEMS':
      const length = Number(state.cart.length);
      return {
        ...state,
        cart: state.cart?.splice(0, length),
      };

    default:
      return state;
  }
}

function Provider({ children }: any) {
  const shoppingCart =
    typeof window !== 'undefined' ? validateLocalStore({ key: 'shoppingCart' }) : [];

  const [state, dispatch]: any = useReducer(reducer, {
    cart: shoppingCart,
  });

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

function useConsumer() {
  return [
    useContext(StateContext),
    useContext(DispatchContext),
  ].map((ctx) => {
    if (ctx === undefined) throw new Error('Provider not found');
    return ctx;
  });
}

export { Provider, useConsumer };
