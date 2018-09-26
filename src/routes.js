import Home from './components/Home';
import UserPage from './components/User/UserPage';
import UserEdit from './components/User/UserEdit';
import ProjectCreation from './components/Project/ProjectCreation';
import ProjectPage from './components/Project/ProjectPage';

const routes = [
  {
    path: '/',
    name: 'Default',
    components: {
      default: Home
    }
  },
  {
    path: '/users/:id',
    name: 'User page',
    components: {
      default: UserPage
    }
  },
  {
    path: '/user/edit',
    name: 'User edit',
    components: {
      default: UserEdit
    }
  },
  {
    path: '/project/create',
    name: 'Project creation',
    components: {
      default: ProjectCreation
    }
  },
  {
    path: '/projects/:id',
    name: 'Project page',
    components: {
      default: ProjectPage
    }
  }
];

export default routes;
