import React from 'react';

const Tables = React.lazy(() => import('./views/base/tables/Tables'));
const AdminForms = React.lazy(() => import('./views/base/forms/AdminForm'));
const TeacherForm = React.lazy(() => import('./views/base/forms1/TeacherForm'));
const StudentForm = React.lazy(() => import('./views/base/forms3/StudentForm'));
//const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));


const routes = [
  { path: '/', exact: true, name: 'Home' },
 { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  { path: '/base/forms', name: 'Admin', component: AdminForms },
  { path: '/base/forms1', name: 'Teacher', component: TeacherForm},
  { path: '/base/forms3', name: 'Teacher', component: StudentForm},
  //{ path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', exact: true },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
