import React from 'react'

//router
import { Switch,Route } from 'react-router'

//pages
import Groups from '../views/dashboard/app/groups';
import GroupDetail from '../views/dashboard/app/group-detail';
import Signal from '../views/dashboard/app/friend-list'
import ProfileImages from '../views/dashboard/app/profile-images';
import ProfileVideos from '../views/dashboard/app/profile-videos';
import ProfileEvents from '../views/dashboard/app/profile-events';
import EventDetail from '../views/dashboard/app/event-detail';
import Calendar from '../views/dashboard/app/calendar';
import Birthday from '../views/dashboard/app/birthday';
import Weather from '../views/dashboard/app/weather'
import Market from '../views/dashboard/app/music';
import aboutus from '../views/dashboard/app/aboutus';
import download from '../views/dashboard/app/download';
import contactus from '../views/dashboard/app/contactus';
import CatergoryGrid from '../views/dashboard/store/store-category-grid';
import CatergoryList from '../views/dashboard/store/store-category-list';
import StoreDetail from '../views/dashboard/store/store-detail';
import StoreCheckout from '../views/dashboard/store/store-checkout';

const Layout1Router = () => {
    return (
        <>
            <Switch>
            <Route path="/dashboard/app/contactus"                component={contactus}></Route>
                <Route path="/dashboards/app/aboutus"                component={aboutus}></Route>
                <Route path="/dashboards/app/download"          component={download}></Route>    
                <Route path="/dashboards/app/groups"                component={Groups}></Route>
                <Route path="/dashboards/app/group-detail"          component={GroupDetail}></Route>
                <Route path="/dashboards/app/signal"           component={Signal} />
                <Route path="/dashboards/app/profile-images"        component={ProfileImages} />
                <Route path="/dashboards/app/profile-videos"        component={ProfileVideos} />
                <Route path="/dashboards/app/profile-events"        component={ProfileEvents} />
                <Route path="/dashboards/app/event-detail"          component={EventDetail} />
                <Route path="/dashboards/app/calendar"              component={Calendar}/>
                <Route path="/dashboards/app/birthday"              component={Birthday} />
                <Route path="/dashboards/app/weather"               component={Weather}/>
                <Route path="/dashboard/app/market"                 component={Market} />
                <Route path="/dashboards/store/store-category-grid" component={CatergoryGrid}/>
                <Route path="/dashboards/store/store-category-list" component={CatergoryList}/>
                <Route path="/dashboards/store/store-detail"        component={StoreDetail}/>
                <Route path="/dashboards/store/store-checkout"      component={StoreCheckout}/>
            </Switch>
        </>
    )
}

export default Layout1Router
