import { type RouteConfig, index, layout, prefix, route } from '@react-router/dev/routes';

export default [
    // index('routes/home.tsx'),
    layout('components/layout/root-layout.tsx', [
        route('/dashboard', 'components/layout/dashboard-layout.tsx', [
            index('components/page/dashboard-home.tsx'),
            ...prefix('show-user', [route(':id', 'components/page/show-user.tsx')]),
            ...prefix('edit-user', [route(':id', 'components/page/edit-user.tsx')]),
            ...prefix('create-user', [route('', 'components/page/create-user.tsx')]),
        ]),
        layout('components/layout/auth-layout.tsx', [
            route('/auth/login', 'components/page/auth/login.tsx'),
        ]),
    ]),
] satisfies RouteConfig;
