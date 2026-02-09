import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'

const Home = lazy(() => import('../pages/Home/Home'))
const Explore = lazy(() => import('../pages/Explore/Explore'))
const Report = lazy(() => import('../pages/Report/Report'))
const Track = lazy(() => import('../pages/Track/Track'))
const Profile = lazy(() => import('../pages/Profile/Profile'))

function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="page">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="explore" element={<Explore />} />
            <Route path="report" element={<Report />} />
            <Route path="track" element={<Track />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
