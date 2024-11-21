
// AppRouter.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from '../../screens/Landing/Landing';
import Courses from '../../screens/Courses/Courses';
import NewsArticles from '../../screens/NewsArticles/NewsArticles'; 
import DetailsNewsArticles from '../../screens/NewsArticles/Details/DetailsNewsArticles'; 
import CourseDetails from '../../screens/Courses/Details/CourseDetails';
import Layout from '../../app/Layout/DefaultLayout/DefaultLayout';
import { UserDashboard } from '../../app/Layout/UserDashboard/UserDashboard'


import { Dashboard } from '../../screens/UserDashboard/Dashboard/Dashboard'
import { EditUserInfo } from '../../screens/UserDashboard/EditUserInfo/EditUserInfo'
import { Favorites } from '../../screens/UserDashboard/Favorites/Favorites'
import { MyComments } from '../../screens/UserDashboard/MyComments/MyComments'
import { MyCourses } from '../../screens/UserDashboard/MyCourses/MyCourses'
import { ReservedCourses } from '../../screens/UserDashboard/ReservedCourses/ReservedCourses'
import { SecuritySettings } from '../../screens/UserDashboard/SecuritySettings/SecuritySettings'


const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          <Landing />
        </Layout>
      ),
    },
    {
      path: '/courses', 
      element: (
        <Layout>
          <Courses />
        </Layout>
      ),
    },
    {
      path: '/courses/:id', 
      element: (
        <Layout>
          <CourseDetails /> 
        </Layout>
      ),
    },
    {
      path: '/articles', 
      element: (
        <Layout>
          <NewsArticles /> 
        </Layout>
      ),
    },
    {
      path: '/articles/:id', 
      element: (
        <Layout>
          <DetailsNewsArticles /> 
        </Layout>
      ),
    },
    {
      path: '/userDashboard',
      element: <UserDashboard />,
      children: [
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'editUserInfo', element: <EditUserInfo /> },
        { path: 'myCourses', element: <MyCourses /> },
        { path: 'reservedCourses', element: <ReservedCourses /> },
        { path: 'myComments', element: <MyComments /> },
        { path: 'favorites', element: <Favorites /> },
        { path: 'securitySettings', element: <SecuritySettings /> }
      ]
    }
  ]);
  
  return <RouterProvider router={router} />;
};

export default AppRouter;
