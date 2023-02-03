import { Routes, Route } from 'react-router-dom'
import OneDriveFilePicker from './FilePicker'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<OneDriveFilePicker />}></Route>
    </Routes>
  )
}
