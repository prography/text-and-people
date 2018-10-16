import Vue from 'vue';
import Router from 'vue-router';

import About from '../views/about/About';
import CommentDetail from '../views/comments/CommentDetail';
import CommentEdit from '../views/comments/CommentEdit';
import CommentList from '../views/comments/CommentList';
import Main from '../views/Main';
import PostDetail from '../views/posts/PostDetail';
import PostEdit from '../views/posts/PostEdit';
import PostList from '../views/posts/PostList';
import SignIn from '../views/auth/SignIn';
import SignUp from '../views/auth/SignUp';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostList,
    },
    {
      path: '/posts/:id',
      name: 'posts',
      component: PostDetail,
      children: [{
        path: 'edit',
        name: 'post-edit',
        component: PostEdit,
      }, {
        path: '',
        name: 'comments',
        component: CommentList,
      }]
    },
    {
      path: '/posts/:id/comments',
      name: 'comments',
      component: CommentList,
    },
    {
      path: '/posts/:id/comments/:id',
      name: 'comments',
      component: CommentDetail,
      children: [{
        path: '',
        name: '/posts/:id/comments/:id',
        component: CommentEdit,
      }]
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignIn,
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp,
    },
  ],
});
