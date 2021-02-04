import logo from './logo.svg';
import './App.css';
import Books from './Book'
import React from 'react'
import {
  ApolloClient, 
  ApolloProvider,
  InMemoryCache
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
})
function App() {
  return (
    <ApolloProvider client = {client}>
        <Books></Books>
    </ApolloProvider>
  );
}

export default App;
