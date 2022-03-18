import routes from './route/route'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {routes.map(route => {
            return (
              <Route path={route.path} exact key={route.path}>
                <route.conponent/>
              </Route>
            )
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
