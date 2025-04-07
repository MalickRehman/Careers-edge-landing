import { paths } from 'src/routes/paths';

import Iconify from 'src/components/iconify';

export const navConfig = [
  {
    title: 'Home',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: '/',
  },

  {
    title: 'Courses',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: paths.courses.root,
  },

  {
    title: 'Contact us',
    icon: <Iconify icon="solar:file-bold-duotone" />,
    path: paths.contact,
  },

  {
    title: 'Blog',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: paths.blog.root,
  },
];
