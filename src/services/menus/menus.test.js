import * as menu from './menus'

describe('Menus', () => {
  it('should render correctly', () => {
    const expectedOutput = [
      {item: 'Pedidos', route: '/orders', icon: '', active: true},
      {item: 'Histórico de Pedidos', route: '/order-history', icon: ''},
      {item: 'Estoque de Produtos', route: '/inventory', icon: ''},
      {item: 'Minha Conta', route: '/my-account', icon: ''},
      {item: 'Sair', route: '/logout', icon: ''}
    ]
    const output = menu.getMenuItems('/orders')
    expect(String(output)).toEqual(String(expectedOutput))
  })
})
