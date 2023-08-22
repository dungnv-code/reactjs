import { useRef } from 'react';
import './App.css';
import {
  AiOutlineBars, AiOutlineClose, AiOutlineFolderOpen, AiTwotoneCalendar
  , AiOutlineHome, AiOutlineComment, AiFillTwitterCircle, AiFillLinkedin
  , AiFillMessage, AiFillGooglePlusCircle, AiFillIeSquare, AiFillProject
} from "react-icons/ai";


function App() {
  const iconBar = useRef();
  function hanleclose() {
    iconBar.current.style.left = -1000 + 'px';
  }
  function hanleBar() {
    iconBar.current.style.left = 0 + 'px';
  }
  return (
    <div className="App">
      <div className='main'>
        <div className='icon-sidebar'>
          <AiOutlineBars onClick={hanleBar} />
        </div>
        <div className='side-bar' ref={iconBar}>
          <div className='header'>
            <h3>Coding Addict</h3>
            <div>
              < AiOutlineClose onClick={hanleclose} />
            </div>
          </div>
          <ul className='list-menu'>
            <li>
              <AiOutlineHome />
              <span>Home</span>
            </li>
            <li>
              <AiOutlineComment />
              <span>Comment</span>
            </li>
            <li>
              <AiOutlineFolderOpen />
              <span>Projects</span>
            </li>
            <li>
              <AiTwotoneCalendar />
              <span>calendar</span>
            </li>
            <li>
              <AiFillProject />
              <span>Progress</span>
            </li>
          </ul>
          <div className='icons'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillMessage />
            <AiFillIeSquare />
            <AiFillGooglePlusCircle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
