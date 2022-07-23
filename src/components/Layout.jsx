import { Route, Routes, NavLink } from 'react-router-dom';
import About from  '../pages/About';
import NotFound from '../pages/NotFound';

function Layout(){
    return(
        <div className="Layout">
            <nav>
                <NavLink to={'/About'}>Open About</NavLink>
                <NavLink to={'/'}> | Close About</NavLink>
            </nav>
            <Routes>
                <Route path='/' element={Layout} />
                <Route path='/About' element={<About/>} />
                <Route path='*' element={<NotFound/>} />
            </Routes>

      </div>
    )
}

export default Layout;