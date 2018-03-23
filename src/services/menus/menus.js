const menuItems = [
  {item: 'Pedidos', router: '/orders', icon: ''},
  {item: 'Histórico de Pedidos', router: '/history', icon: ''},
  {item: 'Estoque de Produtos', router: '/inventory', icon: ''},
  {item: 'Minha Conta', router: '/my-account', icon: ''},
  {item: 'Sair', router: '/logout', icon: ''}
]

export const getMenuItems = (activeMenu) => menuItems.map(item => (activeMenu === item.router ? Object.assign(item, {active: true}) : item))
