import { SideNavInterface } from '../../interfaces/side-nav.type';
export const ROUTES: SideNavInterface[] = [
    {
        path: '/discover',
        title: 'Discover',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'dashboard',
        submenu: []
    },
    {
        path: '',
        title: 'Build',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'appstore',
        submenu: [
            { 
                path: '/build/add-config',
                title: 'Add Build Configs', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                submenu: []
            },
            { 
                path: '/build/list-configs',
                title: 'List Build Configs', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Launch',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'appstore',
        submenu: [
            { 
                path: '/launch/add-config',
                title: 'Add Launch Configs', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                submenu: []
            },
            { 
                path: '/launch/list-configs',
                title: 'See Launch Configs', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                submenu: []
            }
        ]
    }
]    