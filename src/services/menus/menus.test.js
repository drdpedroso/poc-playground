import * as menu from './menus'

describe('Menus', () => {
  it('should render correctly', () => {
    const expectedOutput = [
      {item: 'Pedidos', router: '/orders', icon: '', active: true},
      {item: 'Histórico de Pedidos', router: '', icon: ''},
      {item: 'Estoque de Produtos', router: '', icon: ''},
      {item: 'Minha Conta', router: '', icon: ''},
      {item: 'Sair', router: '', icon: ''}
    ]
    const output = menu.getMenuItems('/orders')
    expect(String(output)).toEqual(String(expectedOutput))
  })
})
