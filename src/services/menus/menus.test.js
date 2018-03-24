import * as menu from './menus'

describe('Menus', () => {
  it('should render correctly', () => {
    const expectedOutput = [
      {item: 'Pedidos', route: '/orders', icon: '', active: true},
      {item: 'Histórico de Pedidos', route: '', icon: ''},
      {item: 'Estoque de Produtos', route: '', icon: ''},
      {item: 'Minha Conta', route: '', icon: ''},
      {item: 'Sair', route: '', icon: ''}
    ]
    const output = menu.getMenuItems('/orders')
    expect(String(output)).toEqual(String(expectedOutput))
  })
})
