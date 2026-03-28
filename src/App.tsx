import { Routes, Route } from "react-router-dom";
import { ScrollTop, PageTransitionWrapper } from "./utils/ScrollTop";
import Layout from "./utils/Layout";

function App() {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <PageTransitionWrapper></PageTransitionWrapper>
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
