import { fireEvent, render, screen } from "@testing-library/react";
import { FabDelete } from "../../../src/calendar/components/FabDelete";
import { useCalendarStore } from "../../../src/hooks";


jest.mock('../../../src/hooks/useCalendarStore');

describe('Pruebas en FabDelete', () => { 

    const mockStartDeletingEvent = jest.fn();

    beforeEach( () => { jest.clearAllMocks() });
    beforeEach( () => { jest.clearAllTimers() });
    
    test('should mostrar el componente correctamente', () => { 
    
        useCalendarStore.mockReturnValue({
            hasEventSelected: false
        });

        render( <FabDelete /> );
        
        const btn = screen.getByLabelText( 'btn-delete' );

        expect( btn.classList ).toContain( 'btn' );
        expect( btn.classList ).toContain( 'btn-danger' );
        expect( btn.classList ).toContain( 'fab-danger' );
        expect( btn.style.display ).toBe( 'none' );

    });

    test('should mostrar el boton si hay un evento activo', () => { 
    
        useCalendarStore.mockReturnValue({
            hasEventSelected: true
        });

        render( <FabDelete /> );
        const btn = screen.getByLabelText( 'btn-delete' );

        expect( btn.style.display ).toBe( '' );

    });

    test('should llamar startDeletingEvent si hay evento activo', () => { 
    
        useCalendarStore.mockReturnValue({
            hasEventSelected: true,
            startDeletingEvent: mockStartDeletingEvent
        });

        render( <FabDelete /> );
        const btn = screen.getByLabelText( 'btn-delete' );
        fireEvent.click( btn );

        expect( mockStartDeletingEvent ).toHaveBeenCalledWith();

    });
 })