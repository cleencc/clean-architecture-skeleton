import PersonaName from './PersonaName';

test('Name cannot be empty', () => {
    expect(() => { new PersonaName() }).toThrow({ name: 'Name cannot be empty.' });
});

test('Name cannot be shorter than 3 characters', () => {
    expect(() => { new PersonaName('ab') }).toThrow({ name: 'Name has to be at least 3 characters long.' });
});

test('Name can be casted to string', () => {
    expect(String(new PersonaName('Chris'))).toEqual('Chris');
});