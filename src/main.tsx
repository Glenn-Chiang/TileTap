import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { ScoresPage } from './features/Scores/components/ScoresPage.tsx'
import './index.css'
import { store } from './store/store.ts'
import { GamePage } from './features/Game/components/GamePage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <GamePage/>
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
