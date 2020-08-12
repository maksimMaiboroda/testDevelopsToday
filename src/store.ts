import { createStore, AnyAction, applyMiddleware } from 'redux';
import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import promise from 'redux-promise-middleware';

export interface State {
    server: any;
    client: any;
}

const reducer = (state: State, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            return {
                ...state,
                server: {
                    ...state.server,
                    ...action.payload.server,
                },
            };
        case 'SERVER_ACTION':
            return {
                ...state,
                server: {
                    ...state.server,
                    tick: action.payload,
                },
            };
        case 'CLIENT_ACTION':
            return {
                ...state,
                client: {
                    ...state.client,
                    tick: action.payload,
                },
            };
        default:
            return state;
    }
};

// create a makeStore function
const makeStore: MakeStore<State> = (context: Context) => createStore(reducer, applyMiddleware(promise));

// export an assembled wrapper
export const wrapper = createWrapper<State>(makeStore, { debug: true });
