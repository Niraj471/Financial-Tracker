import HomePage from "./Pages/HomePage"
import LoginPage from "./Pages/LoginPage"
import RegisterPage from "./Pages/RegisterPage"
import { Routes, Route } from "react-router-dom"
import Layout from "./Pages/Layout"
import SettingsPage from "./Pages/SettingsPage"

function App() {
 

  return (
    <main className='h-screen w-full bg-purple-50 overflow-x-hidden'>
      <Routes >
        <Route element={
          <Layout></Layout>
        }>
        <Route index element={<HomePage></HomePage>}/>
        <Route path="/settings" element={<SettingsPage></SettingsPage>}/>
        </Route>
        <Route path="/login" element={<LoginPage></LoginPage>}/>
        <Route path="/register" element={<RegisterPage></RegisterPage>}/>
      </Routes> 
      </main>
  )
}

export default App
