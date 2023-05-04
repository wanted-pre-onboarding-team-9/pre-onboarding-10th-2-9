import { createContext, useContext } from 'react';
import Cache from '../utils/cache';

type State = Cache;
type Action =
  | { type: 'SET'; payload: { key: string; data: unknown } }
  | { type: 'CLAER' }
  | { type: 'SET_CACHE_TIME'; payload: { cacheTime: number } };

type Dispatch = React.Dispatch<Action>;

const StateContext = createContext<State | null>(null);
const DispatchContext = createContext<Dispatch | null>(null);

const cache = new Cache();
const dispatch = (action: Action) => {
  switch (action.type) {
    case 'SET':
      cache.set(action.payload.key, action.payload.data);
      break;

    case 'CLAER':
      cache.clear();
      break;

    case 'SET_CACHE_TIME':
      cache.setCacheTime(action.payload.cacheTime);
      break;

    default:
      throw new Error('Unhandled action');
  }
};

export const CacheContextProvider = ({ children }: { children: React.ReactNode }) => (
  <StateContext.Provider value={cache}>
    <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
  </StateContext.Provider>
);

export const useCache = <T,>(key: string) => {
  const cacheState = useContext(StateContext);
  if (!cacheState) {
    throw new Error('CacheContextProvider not found');
  }
  return cacheState.get<T>(key);
};

export const useCacheDispatch = () => {
  const cacheDispatch = useContext(DispatchContext);
  if (!cacheDispatch) {
    throw new Error('CacheContextProvider not found');
  }
  return cacheDispatch;
};
