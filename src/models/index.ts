import { Effect, Reducer, Subscription } from 'umi'

export interface IndexModelState {
  test: string
}

export interface IndexModelType {
  namespace: 'index'
  state: IndexModelState
  effects: {
    query: Effect
  }
  reducres: {
    save: Reducer<IndexModelState>
  }
  subscriptions: {
    setup: Subscription
  }
}

const IndexModel: IndexModelType = {
  namespace: 'index',
  state: {
    test: 'indextest'
  },
  effects: {
    *query({ payload }, { call, put }) {}
  },
  reducres: {
    save (state, action) {
      return {
        ...state,
        ...action.payload
      }
    }
  },
  subscriptions: {
    setup ({ history, dispatch }) {}
  }
}

export default IndexModel
