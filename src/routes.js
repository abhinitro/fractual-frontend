
import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));

const Home = React.lazy(() => import('./views/Home'));
const TodoCreate= React.lazy(() => import('./views/Todo/Create'));

const TodoUpdate= React.lazy(() => import('./views/Todo/Edit'));
const BucketIndex=React.lazy(() => import('./views/Buckets/Index'));

const BucketCreate=React.lazy(() => import('./views/Buckets/Create'));

const BucketTodoIndex=React.lazy(() => import('./views/Buckets/BuckeTodo'));

const routes = [

  { path: '/dashboard', exact: true, name: 'Dashboard' ,component: Dashboard  },

  { path: '/todo/create', exact: true, name: 'Create' ,component:TodoCreate   },

  { path: '/bucket/index', exact: true, name: 'BucketIndex' ,component:BucketIndex },

  { path: '/bucket/create', exact: true, name: 'BucketCreate' ,component:BucketCreate },

  { path: '/bucket/bucket-todo-index/:id', exact: true, name: 'BucketTodoIndex' ,component:BucketTodoIndex   },

  { path: '/todo/update/:id', exact: true, name: 'TodoUpdate' ,component:TodoUpdate   },
 
];


export default routes;
