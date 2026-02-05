import { BrowserRouter, Route, Routes } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import Base from './Base.jsx'
import ViewComp from './ViewComp.jsx'
import TextBar from './TextBar.jsx'
import Icons from './Icons.jsx'
import TopHeader from './TopHeader.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <Base>
          <ViewComp>
            <TopHeader value={"CV Application"} />
            <TextBar />
            <Icons />
          </ViewComp>
        </Base>
      } />
    </Routes>
  </BrowserRouter>,
)
