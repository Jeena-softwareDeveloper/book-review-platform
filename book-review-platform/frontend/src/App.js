// Main App component
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import UserProfile from './components/UserProfile';
import ReviewForm from './components/ReviewForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={BookList} />
        <Route path="/books/:id" component={BookDetail} />
        <Route path="/user/:id" component={UserProfile} />
        <Route path="/books/:id/review" component={ReviewForm} />
      </Switch>
    </Router>
  );
}

export default App;
