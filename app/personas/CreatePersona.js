import PersonaName from '../../domain/personas/PersonaName';

export default class CreatePersona {
    constructor(personas) {
        this.personas = personas;
    }

    fromName(name) {
        try {
            const persona = this.personas.createFromName(
                String(new PersonaName(name))
            );

            return {
                created: true,
                persona_id: persona.id,
            }
        } catch (errors) {
            return {
                created: false,
                errors: errors
            };
        }
    }
}