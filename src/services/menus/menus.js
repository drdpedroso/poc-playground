const menuItems = [
  {item: 'Pedidos', route: '/orders', icon: ''},
  {item: 'Histórico de Pedidos', route: '/history', icon: ''},
  {item: 'Estoque de Produtos', route: '/inventory', icon: ''},
  {item: 'Minha Conta', route: '/my-account', icon: ''},
  {item: 'Sair', route: '/logout', icon: ''}
]

export const getMenuItems = (activeMenu) => menuItems.map(item => (activeMenu === item.route ? Object.assign(item, {active: true}) : item))
