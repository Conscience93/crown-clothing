import { Route, Routes } from "react-router-dom";

// React prefer Pascal Case naming convention
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const App = () => {
  return (
    // Routes able to work due to BrowserRouter in index.js
    <Routes>  
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        
        <Route path="sign-in" element={<SignIn />}/>
      </Route>
    </Routes>
  );
};

export default App;
