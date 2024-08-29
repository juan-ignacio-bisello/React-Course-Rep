import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter"


describe('Pruebas en el useCounter', () => {
    test('should return value default', () => { 
        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );
     });

     test('debe generar el counter con el valor de 100', () => {
        const { result } = renderHook( () => useCounter(100) );
        expect( result.current.counter ).toBe(100);
     });

     test('should incrementar el contador', () => { 
        const { result } = renderHook( () => useCounter(100) );
        const { counter, increment } = result.current;

        act( () => {
            increment();
            increment(2);
        });

        expect( result.current.counter ).toBe(103)
      });

      test('should decrementar el contador', () => { 
        const { result } = renderHook( () => useCounter(100) );
        const { counter, decrement } = result.current;

        act( () => {
            decrement();
            decrement(2);
        });

        expect( result.current.counter ).toBe(97)
      });

      test('should resetear el contador', () => { 
        const { result } = renderHook( () => useCounter(100) );
        const { counter, decrement, reset } = result.current;

        act( () => {
            decrement()
            reset();
        });

        expect( result.current.counter ).toBe(100)
      });
})