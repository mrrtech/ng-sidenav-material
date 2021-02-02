export const menu = [
  {
    topLabel: 'Actions',
    topId: 'actionId',
    targetId: 'actionssub',
    topIcon: 'fa fa-address-card-o',
    subMenu: [
      {
        label: 'Action List',
        routerLink: ['/actionlist'],
        icon: 'fa fa-list',
      },
      {
        label: 'Action Create',
        routerLink: ['/actioncreate'],
        icon: 'fa fa-plus',
      },
    ],
  },
  {
    topLabel: 'Client Profile',
    topId: 'cpId',
    targetId: 'clientprofilesub',
    topIcon: 'fa fa-address-book',
    subMenu: [
      {
        label: 'Client Profile List',
        routerLink: ['/clientprofilelist'],
        icon: 'fa fa-list',
      },
      {
        label: 'Client Profile Create',
        routerLink: ['/clientprofilecreate'],
        icon: 'fa fa-plus',
      },
    ],
  },
];
