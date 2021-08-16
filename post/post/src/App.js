import Switch from "react-bootstrap/esm/Switch";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, useLocation } from "react-router-dom";
import "./App.css";
import DetailPost from "./Components/DetailPost/DetailPost";
import PostList from "./Components/PostList/PostList";

function App() {
  const {posts} = useSelector(state => state);
  return (
    <div className="Post-app">

      <BrowserRouter>
        <Switch>
        
          <Route
            exact
            path="/Details/:id"
            render={(props) => <DetailPost PostList={posts}{...props} />}
          />
          <Route exact path="/" render={() => <PostList />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
