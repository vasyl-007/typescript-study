import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { TodosPage } from "./pages/TodosPage";
import { AboutPage } from "./pages/AboutPage";
// import { TodoForm } from "./components/TodoForm";
// import { TodoList } from "./components/TodoList";
// import { ITodo } from "./interfaces";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" completed={TodosPage} />
          <Route path="/about" completed={AboutPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
