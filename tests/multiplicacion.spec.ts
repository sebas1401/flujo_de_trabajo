import { multiplicar } from "../src/multiplicacion";

describe("multiplicar()", () => {
    // AAA: Arrange - Act - Assert

    it("debería multiplicar dos números positivos correctamente", () => {
        // Arrange
        const a = 4;
        const b = 5;

        // Act
        const resultado = multiplicar(a, b);

        // Assert
        expect(resultado).toBe(20);
    });

    it("debería retornar cero al multiplicar por cero", () => {
        // Arrange
        const a = 99;
        const b = 0;

        // Act
        const resultado = multiplicar(a, b);

        // Assert
        expect(resultado).toBe(0);
    });

    it("debería retornar un número negativo al multiplicar positivo por negativo", () => {
        // Arrange
        const a = 6;
        const b = -3;

        // Act
        const resultado = multiplicar(a, b);

        // Assert
        expect(resultado).toBe(-18);
    });

    it("debería retornar un número positivo al multiplicar dos negativos", () => {
        // Arrange
        const a = -4;
        const b = -5;

        // Act
        const resultado = multiplicar(a, b);

        // Assert
        expect(resultado).toBe(20);
    });

    it("debería multiplicar números decimales correctamente", () => {
        // Arrange
        const a = 2.5;
        const b = 4;

        // Act
        const resultado = multiplicar(a, b);

        // Assert
        expect(resultado).toBeCloseTo(10);
    });
});
