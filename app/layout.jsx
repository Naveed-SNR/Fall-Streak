import './globals.css'
import './styles/bootstrap.css'
import './styles/w3.css'
import { REM } from 'next/font/google'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
config.autoAddCss = false;

//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const rem = REM({ subsets: ['latin'] })

export const metadata = {
  title: 'Fall Streak',
  description: 'Fall Streak',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Fall Streak</title>
      </head>
      <body className={rem.className}>   
        <Navbar />
        {children}
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          className={"w3-black"}
          progressClassName={"bg-light"}
          icon ="☑️"
          theme="dark"
        /> {/* Auto close after 3 seconds */}
        <Footer />
      </body>
      
    </html>
  )
}
