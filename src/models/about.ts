import { Effect, Reducer, IndexModelState } from 'umi';

export interface AboutModelState {
  num: number
  test: string
}

export interface AboutModelType {
  namespace: 'about'
  state: AboutModelState
  effects: {
    query: Effect
  }
  reducers: {
    add: Reducer<AboutModelState>
    minus: Reducer<AboutModelState>
    addTest: Reducer<AboutModelState>
  }
  subscription: {}
}

const AboutModel: AboutModelType = {
  namespace: 'about',
  state: {
    num: 1,
    test: ''
  },
  effects: {
    *query ({}, { select, put }) {
      const test = yield select(({ index }: { index: IndexModelState }) => index.test)
      yield put({
        type: 'addTest',
        payload: { test }
      })
    }
  },
  reducers: {
    add(state) {
      return {
        ...state!,
        num: state?.num as number + 1
      }
    },
    minus (state) {
      return {
        ...state!,
        num: state?.num as number - 1
      }
    },
    addTest (state, { payload }) {
      return {
        ...state!,
        ...payload
      }
    }
  },
  subscription: {}
}

export default AboutModel
