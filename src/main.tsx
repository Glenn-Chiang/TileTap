import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { SettingsMenu } from './features/Settings/components/SettingsMenu.tsx'
import { Game } from './features/Game/components/Game.tsx'
import { ScoresPage } from './features/Scores/components/ScoresPage.tsx'

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
      },
      {
        path: "/scores",
        element: <ScoresPage/>
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
