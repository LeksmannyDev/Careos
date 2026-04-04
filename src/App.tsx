import { Routes, Route } from "react-router-dom";
import { ScrollTop, PageTransitionWrapper } from "./utils/ScrollTop";
import Layout from "./utils/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <PageTransitionWrapper>
                <Home />
              </PageTransitionWrapper>
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <PageTransitionWrapper>
                <Home />
              </PageTransitionWrapper>
            </Layout>
          }
        />
        <Route
          path="/cars"
          element={
            <Layout>
              <PageTransitionWrapper>
                <Home />
              </PageTransitionWrapper>
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <PageTransitionWrapper>
                <Home />
              </PageTransitionWrapper>
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
