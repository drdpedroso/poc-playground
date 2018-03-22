const menuItems = [
  {item: 'Pedidos', router: '/orders', icon: ''},
  {item: 'Histórico de Pedidos', router: '', icon: ''},
  {item: 'Estoque de Produtos', router: '', icon: ''},
  {item: 'Minha Conta', router: '', icon: ''},
  {item: 'Sair', router: '', icon: ''}
]

export const getMenuItems = (activeMenu) => menuItems.map(item => (activeMenu === item.router ? Object.assign(item, {active: true}) : item))
