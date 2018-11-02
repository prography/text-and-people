import Vue from 'vue';
import Router from 'vue-router';
import Cookie from 'js-cookie';

import CommentDetail from '../views/comments/CommentDetail';
import CommentEdit from '../views/comments/CommentEdit';
import CommentList from '../views/comments/CommentList';
import Main from '../views/Main';
import PostDetail from '../views/posts/PostDetail';
import PostEdit from '../views/posts/PostEdit';
import PostList from '../views/posts/PostList';
import SignUp from '../views/auth/SignUp';
import SignIn from '../views/auth/SignIn';
import SignUpDetail from '../views/auth/SignUpDetail';
import Editor from '../views/editor/Editor';

Vue.use(Router);

const requireAuth = (to, from, next) => {
  const token = Cookie.get('pad-token');
  if (token) {
    return next();
  }
  next({
    path: '/sign-in',
    query: {
      redirect: to.fullPath
    },
  });
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostList,
    },
    {
      path: '/posts/:postId',
      name: 'posts-detail',
      component: PostDetail,
      children: [{
        path: 'edit',
        component: PostEdit,
        beforeEnter: requireAuth,
      }, {
        path: '',
        component: CommentList,
      }]
    },
    {
      path: '/posts/:postId/comments',
      name: 'comments',
      component: CommentList,
      children: [{
        path: ':commentId',
        component: CommentDetail,
        children: [{
          path: 'edit',
          component: CommentEdit,
        }]
      }]
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp,
      children: [{
        path: ':username',
        component: SignUpDetail,
      }]
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignIn,
    },

    {
      path: '/editor',
      name: 'editor',
      component: Editor,
    },
    {
      path: '/logout',
      beforeEnter(to, from, next) {
        const token = Cookie.get('pad-token');
        if (token) {
          Cookie.remove('pad-token');
          next('/')
        }
        next('/sign-in')
      }
    },
    {
      path: '*',
      component: Main
    }
  ],
});
