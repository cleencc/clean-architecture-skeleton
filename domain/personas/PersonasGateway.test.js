import PersonasGateway from './PersonasGateway';

test('There is a method for creating personas from name', () => {
    const gateway = new PersonasGateway();

    expect(gateway.createFromName).toBeInstanceOf(Function);
    expect(gateway.createFromName('Name')).toBe(undefined);
});