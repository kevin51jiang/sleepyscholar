import React from "react";
import { Route, Switch } from "wouter";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import { ScholarshipForm } from "./pages/ScholarshipForm";
import { ScholarshipPage } from "./pages/ScholarshipPage";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/results" component={ResultsPage} />
          <Route path="/test" component={ScholarshipForm} />
          <Route path="/scholarships/:scholarship_id" component={ScholarshipPage} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
