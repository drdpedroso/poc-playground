const menuItems = [
  {item: 'Pedidos', route: '/orders', icon: '', active: false},
  {item: 'Histórico de Pedidos', route: '/order-history', icon: '', active: false},
  {item: 'Estoque de Produtos', route: '/inventory', icon: '', active: false},
  {item: 'Minha Conta', route: '/my-account', icon: '', active: false},
  {item: 'Sair', route: '/logout', icon: '', active: false}
]

export const getMenuItems = (activeMenu) => menuItems.map(item => (activeMenu === item.route ? Object.assign(item, {active: true}) : Object.assign(item, {active: false})))
