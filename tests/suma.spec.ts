import { sumar } from "../src/suma";

describe("sumar()", () => {
    // AAA: Arrange - Act - Assert

    it("debería sumar dos números positivos correctamente", () => {
        // Arrange
        const a = 3;
        const b = 5;

        // Act
        const resultado = sumar(a, b);

        // Assert
        expect(resultado).toBe(8);
    });

    it("debería sumar un número positivo y uno negativo", () => {
        // Arrange
        const a = 10;
        const b = -4;

        // Act
        const resultado = sumar(a, b);

        // Assert
        expect(resultado).toBe(6);
    });

    it("debería retornar cero al sumar dos ceros", () => {
        // Arrange
        const a = 0;
        const b = 0;

        // Act
        const resultado = sumar(a, b);

        // Assert
        expect(resultado).toBe(0);
    });

    it("debería sumar números decimales correctamente", () => {
        // Arrange
        const a = 1.5;
        const b = 2.3;

        // Act
        const resultado = sumar(a, b);

        // Assert
        expect(resultado).toBeCloseTo(3.8);
    });
});
