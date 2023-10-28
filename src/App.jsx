import './App.css'
import {createBrowserRouter,createRoutesFromElements,Outlet, Router, RouterProvider,Route} from 'react-router-dom'
import Home from './pages/home'
import Post from './pages/post'
import Profile from './pages/profile'
import Navbar from './components/navbar'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index path='/' element={<Home />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/profile' element={<Profile />} />
      </Route>
    )
  )

  return (
    <>
      <main>
        <RouterProvider router={router} />
      </main>    
    </>
  )
}

const Root = () => {

  return <>
      <Navbar />

      <Outlet />
  </>
}

export default App
