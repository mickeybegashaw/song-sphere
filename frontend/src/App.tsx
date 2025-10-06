import { ThemeProvider } from "@emotion/react";
import { Navigate, Route, Routes } from "react-router";
import { theme } from "./Styles/Theme";
import GlobalStyles from "./Styles/Global.style";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Layout from "./components/common/layout";
import Songs from "./pages/Songs/Songs";
import Login from "./pages/Login/Login";
import { useSession } from "../lib/authClient";
import Statistics from "./pages/Stastics/Statistics";

function App() {
  const { data: session, isPending } = useSession();
  const user = session?.user;

  if (isPending) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.2rem",
          color: "#666",
        }}
      >
        Checking session...
      </div>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="songs"
            element={user ? <Songs /> : <Navigate to="/login" replace />}
          />
          <Route
            path="statistics"
            element={user ? <Statistics /> : <Navigate to="/login" replace />}
          />
          <Route
            path="login"
            element={!user ? <Login /> : <Navigate to="/songs" replace />}
          />
        </Route>
        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
