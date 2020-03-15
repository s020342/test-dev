import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading';

const app = dva();

app.use(createLoading({
    globale: false,
    models: {
        order: false
    }
}));

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/live').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
