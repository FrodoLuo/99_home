
export default {
  namespace: 'article',
  state: {
    content: '',
    visible: false,
    author: null,
  },
  reducers: {
    saveContent(state, { payload: data }) {
      return { ...state, content: data, visible: true, author: null };
    },
    saveVisible(state, { payload: visible }) {
      return { ...state, visible };
    },
    saveContentWithAuthor(state, { payload: { content, author } }) {
      return { ...state, content, visible: true, author };
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
    *setContentWithAuthor({ payload: { content, author } }, { put }) {
      yield put({
        type: 'saveContentWithAuthor',
        payload: { content, author },
      });
    },
  },
  subscriptions: {},
};
