import { ThemeProvider } from "@emotion/react"
import { Route, Routes } from "react-router"
import { theme } from "./Styles/Theme"
import GlobalStyles from "./Styles/Global.style"
import NotFound from "./pages/NotFound/NotFound"
import Home from "./pages/Home/Home"
import Layout from "./components/common/layout"
import Songs from "./pages/Songs/Songs"


function App() {

  return (
    <ThemeProvider theme={theme} >
      <GlobalStyles/>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="songs" element={<Songs />} />
              {/* <Route path="statistics" element={<StatisticsPage />} /> */}
            </Route>
            {/* 404 Route*/}
            <Route path="*" element={<NotFound />} />
          </Routes>
    </ThemeProvider>
  )
}

export default App
