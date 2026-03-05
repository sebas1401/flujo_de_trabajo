/**
 * Divide el primer número entre el segundo y retorna el resultado.
 * @param a - Dividendo
 * @param b - Divisor (no puede ser cero)
 * @returns El cociente de a entre b
 * @throws {Error} Si el divisor es cero
 */
export function dividir(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Error: no se puede dividir entre cero");
    }
    return a / b;
}
