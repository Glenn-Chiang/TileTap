import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux_store/store.ts'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { SettingsMenu } from './features/Settings/components/SettingsMenu.tsx'
import { Game } from './features/Game/components/Game.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Game/>
      },
      {
        path: "/settings",
        element: <SettingsMenu/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
