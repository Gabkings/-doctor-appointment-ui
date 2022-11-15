import React from 'react'
import "../layout.css"
const Layout = ({ children }) => {

    const userMenu = [
        {
          name: "Home",
          path: "/",
          icon: "ri-home-line",
        },
        {
          name: "Appointments",
          path: "/appointments",
          icon: "ri-file-list-line",
        },
        {
          name: "Apply Doctor",
          path: "/apply-doctor",
          icon: "ri-hospital-line",
        }
      ];


    return ( <div className='main'>
                <div className='d-flex layout'>
                    <div className='sidebar'> </div> 
                    <div className='content'>
                        <div className='header'> </div> 
                        <div className='body'> { children } </div> 
                    </div> 
                </div>
            </div>
    )
}

export default Layout