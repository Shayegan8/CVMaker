import { BrowserRouter, Route, Routes } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import Base from './Base.jsx'
import ViewComp from './ViewComp.jsx'
import TopHeader from './TopHeader.jsx'
import EditorComp from './EditorComp.jsx'
import Github from './Github.jsx'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <Base>
              <ViewComp>
                <TopHeader value={"CV Application"} />
                <EditorComp />
              </ViewComp>
            </Base>
            <Github value="Github" />
          </>
        } />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
