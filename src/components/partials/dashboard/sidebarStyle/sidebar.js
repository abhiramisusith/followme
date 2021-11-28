import React, {useState, useContext, useEffect} from 'react'
import { Link , useLocation} from 'react-router-dom'
import {Accordion, useAccordionButton, AccordionContext} from 'react-bootstrap'
import Scrollbar from 'smooth-scrollbar'

function CustomToggle({ children, eventKey, onClick }) {

   const { activeEventKey } = useContext(AccordionContext);

   const decoratedOnClick = useAccordionButton(eventKey, (active) => onClick({state: !active, eventKey: eventKey}));

   const isCurrentEventKey = activeEventKey === eventKey;
 
   return (
     <Link to="#" aria-expanded={isCurrentEventKey ? 'true' : 'false'} className="nav-link" role="button" onClick={(e) => {
       decoratedOnClick(isCurrentEventKey)
     }}>
       {children}
     </Link>
   );
 }
const Sidebar = () => { 
   useEffect(
      () =>{
          Scrollbar.init(document.querySelector('#sidebar-scrollbar'))
   })
   const [activeMenu, setActiveMenu] = useState(false)
   let location = useLocation();
      return (
         <>
            <div className="iq-sidebar">
               <div id="sidebar-scrollbar">
                  <nav className="iq-sidebar-menu">
                     <Accordion as="ul" id="iq-sidebar-toggle" className="iq-menu">
                        <li className={`${location.pathname === '/' ? 'active' : ''} `}>
                           <Link to="/" ><i className="las la-home"></i><span>Community</span></Link>
                        </li>
                        <li className={`${location.pathname === '#/dashboard/app/profile' ? 'active' : ''}`}>
                           <Link to="/dashboard/app/market" ><i className="las la-store-alt"></i><span>Market</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboards/app/friend-list' ? 'active' : ''}`}>
                           <Link to="/dashboards/app/friend-list" ><i className="las la-signal"></i><span>Signal</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboard/app/friend-profile' ? 'active' : ''}`}>
                           <Link to="/dashboard/app/friend-profile" ><i className="las la-user-friends"></i><span>WEBTRADER</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboards/app/aboutus' ? 'active' : ''}`}>
                           <Link to="/dashboards/app/aboutus" ><i className="las la-exclamation-circle"></i><span> About us</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboards/app/download' ? 'active' : ''}`}>
                           <Link to="/dashboards/app/download" ><i className="las la-download"></i><span> Download</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboard/app/contactus' ? 'active' : ''}`}>
                           <Link to="/dashboard/app/contactus"><i className="las la-mail-bulk"></i><span>Contact Us</span></Link>
                        </li>
                        <li className={`${location.pathname === '/dashboard/extrapages/pages-faq' ? 'active' : ''}`}>
                           <Link to="/dashboard/extrapages/pages-faq"><i className="las la-question"></i><span>FAQ</span></Link>
                        </li>
                        <Accordion.Item as="li" className={`${location.pathname === '/dashboard/blog/blog-grid' || location.pathname === '/dashboard/blog/blog-list' || location.pathname === '/dashboard/blog/blog-detail' ?  'active' : ''}`} eventKey="sidebar-blog"  >
                           <CustomToggle eventKey="sidebar-blog" onClick={(activeKey) => setActiveMenu(activeKey)}>
                           <i className="las la-ellipsis-h"></i>
                                 <span>More</span>
                                 <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                           </CustomToggle>
                           <Accordion.Collapse eventKey="sidebar-blog">
                              <ul id="blog" className="iq-submenu " >
                                 <li className={`${location.pathname === '/dashboard/blog/blog-grid' ? 'active' : ''}`}>
                                    <Link to="/dashboard/blog/blog-grid">
                                    <i className="las la-user-plus"></i>
                                       Connect Account
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboard/blog/blog-list' ? 'active' : ''}`}>
                                    <Link to="/dashboard/blog/blog-list">
                                    <i className="las la-people-carry"></i>Be a Signal Provider
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboard/blog/blog-detail' ? 'active' : ''}`}>
                                    <Link to="/dashboard/blog/blog-detail">
                                    <i className="lar la-star"></i>FollowSTAR
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboard/app/download' ? 'active' : ''}`}>
                                    <Link to="/dashboards/app/download">
                                    <i className="las la-download"></i>Download
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboard/blog/blog-detail' ? 'active' : ''}`}>
                                    <Link to="/dashboard/app/settings" >
                                    <i className="las la-cog"></i>Settings
                                    </Link>
                                 </li>
                                 <li className={`${location.pathname === '/dashboard/blog/blog-detail' ? 'active' : ''}`}>
                                    <Link to="/auth/sign-in">
                                    <i className="las la-sign-out-alt"></i>Logout
                                    </Link>
                                 </li>
                              </ul>
                           </Accordion.Collapse>
                        </Accordion.Item>
                       
                      
        
                        
                     </Accordion>
                  </nav>
                  <div className="p-5"></div>
               </div>
            </div>
         </>
   )
}

export default Sidebar
