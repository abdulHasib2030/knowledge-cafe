import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookers] = useState([])
  const [readingTime, setReadingTime] = useState(0)


const handleAddToBookMark = blog =>{
const newBookmarks = [...bookmarks, blog]
setBookers(newBookmarks)
}

const handleMarkAsRead = time => {
   setReadingTime(readingTime + time)

  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookMark = {handleAddToBookMark}
      handleMarkAsRead = {handleMarkAsRead}
      ></Blogs>
      <Bookmarks bookmarks= {bookmarks} readingTime = {readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
