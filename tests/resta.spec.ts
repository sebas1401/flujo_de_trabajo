import { restar } from "../src/resta";

describe("restar()", () => {
    // AAA: Arrange - Act - Assert

    it("debería restar dos números positivos correctamente", () => {
        // Arrange
        const a = 10;
        const b = 4;

        // Act
        const resultado = restar(a, b);

        // Assert
        expect(resultado).toBe(6);
    });

    it("debería retornar un número negativo si b es mayor que a", () => {
        // Arrange
        const a = 3;
        const b = 8;

        // Act
        const resultado = restar(a, b);

        // Assert
        expect(resultado).toBe(-5);
    });

    it("debería retornar cero al restar un número de sí mismo", () => {
        // Arrange
        const a = 7;
        const b = 7;

        // Act
        const resultado = restar(a, b);

        // Assert
        expect(resultado).toBe(0);
    });

    it("debería restar números decimales correctamente", () => {
        // Arrange
        const a = 5.5;
        const b = 2.2;

        // Act
        const resultado = restar(a, b);

        // Assert
        expect(resultado).toBeCloseTo(3.3);
    });
});
