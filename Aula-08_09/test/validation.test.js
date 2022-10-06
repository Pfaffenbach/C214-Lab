const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

it('Caso válido 0', () => {
    const result = Validation.create({
        modelo: "A5",
        marca: "Audi",
        ano: "2018"
    });
    expect(result).toEqual(undefined);
});

it('Caso válido 1', () => {
    const result = Validation.create({
        modelo: "I8",
        marca: "Bmw",
        ano: "2020"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido 0 - Duplicado', () => {
    const result = Validation.create({
        modelo: "A5",
        marca: "Audi",
        ano: "2018"
    });
    expect(result.name).toEqual(Constants.ErrorDuplicate.name);
});

it('Caso inválido 1 - Duplicado', () => {
    const result = Validation.create({
        modelo: "I8",
        marca: "Bmw",
        ano: "2020"
    });
    expect(result.name).toEqual(Constants.ErrorDuplicate.name);
});