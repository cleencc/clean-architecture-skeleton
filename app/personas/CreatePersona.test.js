import CreatePersona from './CreatePersona';
import PersonasGateway from '../../domain/personas/PersonasGateway';

jest.mock('../../domain/personas/PersonasGateway.js');

test('Name is required', () => {
    const createPersona = new CreatePersona(new PersonasGateway);
    const response = createPersona.fromName();

    expect(response.created).toBe(false);
    expect(response.errors.name).toEqual('Name cannot be empty.');
});

test('Name cannot be less than 3 characters long', () => {
    const createPersona = new CreatePersona(new PersonasGateway);
    const response = createPersona.fromName('AB');

    expect(response.created).toBe(false);
    expect(response.errors.name).toEqual('Name has to be at least 3 characters long.');
});

test('When gateway fails, persona is not created', () => {
    const gateway = new PersonasGateway();
    gateway.createFromName.mockImplementation(() => { throw new Error(); });
    const createPersona = new CreatePersona(gateway);
    const response = createPersona.fromName('Chris');

    expect(gateway.createFromName).toBeCalledWith('Chris');
    expect(response.created).toBe(false);
});

test('Persona can be created', () => {
    const gateway = new PersonasGateway();
    gateway.createFromName.mockReturnValue({ id: 'new_persona_id' });
    const createPersona = new CreatePersona(gateway);
    const response = createPersona.fromName('Chris');

    expect(gateway.createFromName).toBeCalledWith('Chris');
    expect(response.created).toBe(true);
    expect(response.persona_id).toEqual('new_persona_id');
});