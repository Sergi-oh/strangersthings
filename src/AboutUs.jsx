import {Route, Routes, Link} from 'react-router-dom'

const AboutUs = ()=> {
  return (
    <div className='about'>
      <h1>All About Us</h1>
      <p>This is a place where you can buy and sell!</p>
      <p>Browse our listings or create one yourself!</p>
      <Link to='/contact'>Reach out to us!</Link>
      <Routes>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
};

export default AboutUs;
