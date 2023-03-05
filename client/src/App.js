import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import Home from "./Pages/Home";
import Notfound from "./Pages/Notfound";
import Project from "./Pages/Project";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache, //cache memory use to request query from cahe data so we do not need to reload on delete or updating
});
function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<Project />} />
              <Route path="*" element={<Notfound />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
