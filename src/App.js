import './App.css'; // Delete ?
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import PostListPage from './pages/PostListPage'
import PostDetailPage from './pages/PostDetailPage'
import PostCreatePage from './pages/PostCreatePage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/posts/create'> <PostCreatePage /> </Route>
        <Route path='/posts/:id'> <PostDetailPage /> </Route> {/* Make to dynamic routing */}
        <Route path='/posts'> <PostListPage /> </Route>
        <Route path='/home'> <HomePage /> </Route>
        <Route path='/login'> <LoginPage /> </Route>
        <Route path='/register'> <RegisterPage /> </Route>

        <Route path='/'> <div>Intro page</div> </Route>
      </Switch>
    </div>
  );
}

export default App;
