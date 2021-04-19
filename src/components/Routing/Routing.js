import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Book from '../DashBoard/User/Book';
import Home from '../Home/Home/Home';
import BookingList from '../DashBoard/User/BookingList'
import GiveReview from '../DashBoard/User/GiveReview'
import NavigationBar from '../Shared/Navbar/NavigationBar';
import AllBookingsList from '../DashBoard/Admin/AllBookingsList/AllBookingsList';
import AddPackage from '../DashBoard/Admin/AddPackage/AddPackage';
import MakeAdmin from '../DashBoard/Admin/MakeAdmin/MakeAdmin'
import Manageservices from '../DashBoard/Admin/Manageservices/Manageservices'
import { createContext, useState } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute'
import Login from '../Login/Login';
import ConfirmationCart from '../ConfirmationCart/ConfirmationCart';
export const UserContext = createContext();
export const BookContext = createContext();

const Routing = () => {
    const [loggedInUser, setLoggedInUser] = useState({});
    const [book, setBook] = useState([]);
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <BookContext.Provider value={[book, setBook]}>
                <h1>{loggedInUser.email}</h1>
                <Router>
                    <NavigationBar />
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path='/home'>
                            <Home />
                        </Route>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <PrivateRoute path='/confirmation'>
                            <ConfirmationCart />
                        </PrivateRoute>
                        <PrivateRoute path='/book'>
                            <Book />
                        </PrivateRoute>
                        <Route path='/bookinglist'>
                            <BookingList />
                        </Route>
                        <Route path='/givereview'>
                            <GiveReview />
                        </Route>
                        <Route path='/allbookingslist'>
                            <AllBookingsList />
                        </Route>
                        <Route path='/addPackage'>
                            <AddPackage />
                        </Route>
                        <Route path='/makeadmin'>
                            <MakeAdmin />
                        </Route>
                        <Route path='/manageservices'>
                            <Manageservices />
                        </Route>
                        <Route path='*'>
                            <h1>NOT FOUND</h1>
                        </Route>
                    </Switch>
                </Router>
            </BookContext.Provider>
        </UserContext.Provider>
    );
};

export default Routing;