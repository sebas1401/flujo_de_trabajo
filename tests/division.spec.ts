import { dividir } from "../src/division";

describe("dividir()", () => {
    // AAA: Arrange - Act - Assert

    it("debería dividir dos números positivos correctamente", () => {
        // Arrange
        const a = 10;
        const b = 2;

        // Act
        const resultado = dividir(a, b);

        // Assert
        expect(resultado).toBe(5);
    });

    it("debería retornar un decimal al dividir números no exactos", () => {
        // Arrange
        const a = 7;
        const b = 2;

        // Act
        const resultado = dividir(a, b);

        // Assert
        expect(resultado).toBe(3.5);
    });

    it("debería retornar un número negativo al dividir positivo entre negativo", () => {
        // Arrange
        const a = 9;
        const b = -3;

        // Act
        const resultado = dividir(a, b);

        // Assert
        expect(resultado).toBe(-3);
    });

    it("debería retornar cero al dividir cero entre cualquier número", () => {
        // Arrange
        const a = 0;
        const b = 5;

        // Act
        const resultado = dividir(a, b);

        // Assert
        expect(resultado).toBe(0);
    });

    it("debería lanzar un error al dividir entre cero", () => {
        // Arrange
        const a = 10;
        const b = 0;

        // Act & Assert
        expect(() => dividir(a, b)).toThrow("Error: no se puede dividir entre cero");
    });
});
