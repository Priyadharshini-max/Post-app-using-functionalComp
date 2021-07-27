import HomeComponent from "./HomeComponent";
import PostComponent from "./Post";
import GetUser from "./Getuser";
import GetComments from "./GetComments";

import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import About from "./About";
import Notfound from "./Notfound";


function App(){
  return(
   <BrowserRouter>
   <Switch>
     <Route path="/post" component={PostComponent} />
    

     <Route exact path="/" component={HomeComponent} />
       <Route path="/home">
         <Redirect to="/" />
         </Route>
<Route path="/about" component={About}/>
         <Route path="/getuser/:userId" component ={GetUser} />
         <Route path="/getcomments/:userId" component ={GetComments} />
         
         {/* <Route path="/getuser/:postid" component={GetUser} /> */}
         {/* <Route path="/CreatePost" component={CreatePost} /> */}
         <Route path="*" component={Notfound} />
     
       

   </Switch>
   
   </BrowserRouter>
  );
}

export default App;