
export default {
  namespace: 'article',
  state: {
    content: '',
    visible: false,
  },
  reducers: {
    saveContent(state, { payload: data }) {
      return { ...state, content: data, visible: true };
    },
    saveVisible(state, { payload: visible }) {
      return { ...state, visible };
    },
  },
  effects: {
    *setVisible({ payload: visible }, { put }) {
      yield put({
        type: 'saveVisible',
        payload: visible,
      });
    },
    *setContent({ payload: content }, { put }) {
      yield put({
        type: 'saveContent',
        payload: content,
      });
    },
  },
  subscriptions: {},
};
