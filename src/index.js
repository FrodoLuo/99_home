import dva from 'dva';
import { createBrowserHistory } from 'history';
import './index.css';
import './mediaQuery.less';

// 1. Initialize
const app = dva({
  history: createBrowserHistory(),
});

app.model(require('./models/article'));

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
