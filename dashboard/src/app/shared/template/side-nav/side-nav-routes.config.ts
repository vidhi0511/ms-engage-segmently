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
                path: '',
                title: 'Add Build Configs', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                submenu: []
            },
            { 
                path: '',
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
                path: '',
                title: 'Add Launch Configs', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                submenu: []
            },
            { 
                path: '',
                title: 'See Launch Configs', 
                iconType: '', 
                icon: '',
                iconTheme: '',
                submenu: []
            }
        ]
    }
]    