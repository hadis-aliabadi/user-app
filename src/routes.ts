import { type RouteConfig, index, layout, prefix, route } from '@react-router/dev/routes';

export default [
    // index('routes/home.tsx'),
    layout('components/layout/root-layout.tsx', [
        route('/dashboard', 'components/layout/dashboard-layout.tsx', [
            index('components/page/dashboard-home.tsx'),
        ]),
        layout('components/layout/auth-layout.tsx', [
            route('/auth/login', 'components/page/auth/login.tsx'),
        ]),
    ]),
] satisfies RouteConfig;
