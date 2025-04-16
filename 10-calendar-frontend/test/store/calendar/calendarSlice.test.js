import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar, onSetActiveEvent, onUpdateEvent } from "../../../src/store/calendar/calendarSlice"
import { calendarWithActiveEventsState, calendarWithEventsState, events, initialState } from "../../fixtures/calendarState";


describe('Pruebas en calendarSlice', () => { 
    
    test('should regresar el estado por defecto', () => { 
        
        const state = calendarSlice.getInitialState();
        expect( state ).toEqual( initialState );

    });

    test('should debe de activar el vento', () => { 
        
        const state = calendarSlice.reducer( calendarWithEventsState, onSetActiveEvent( events[0]) );
        expect( state.activeEvent ).toEqual( events[0] );

    });

    test('should debe de agregar el evento', () => { 
        
        const newEvent = {
            id: '3',
            start: new Date('2022-11-01 13:00:00'),
            end: new Date('2022-11-01 15:00:00'),
            title: 'Cumple Feli',
            notes: 'Alguna nota3'
        };

        const state = calendarSlice.reducer( calendarWithEventsState, onAddNewEvent( newEvent ) );
        expect( state.events ).toEqual([ ...events, newEvent ]);

    });

    test('should actualizar el evento', () => { 
        
        const updatedEvent = {
            id: '1',
            start: new Date('2022-11-01 13:00:00'),
            end: new Date('2022-11-01 15:00:00'),
            title: 'Cumple Feli',
            notes: 'Alguna nota actualizada'
        };

        const state = calendarSlice.reducer( calendarWithEventsState, onUpdateEvent( updatedEvent ) );
        expect( state.events ).toContain( updatedEvent );

    });

    test('should eliminar un evento', () => { 

        const state = calendarSlice.reducer( calendarWithActiveEventsState, onDeleteEvent() );
        expect( state.activeEvent ).toBe( null );
        expect( state.events ).not.toContain( events[0] );

    });

    test('should cargar el evento', () => { 
        
        const state = calendarSlice.reducer( initialState, onLoadEvents( events ) );
        expect( state.isLoadingEvents ).toBeFalsy();
        expect( state.events ).toEqual( events );
        
        const newState = calendarSlice.reducer( state, onLoadEvents( events ) );
        expect( state.events.length ).toBe( events.length );
    });

    test('should limpiar el estado del evento', () => { 
        
        const state = calendarSlice.reducer( calendarWithActiveEventsState, onLogoutCalendar() );
        expect( state ).toEqual( initialState );

    });
 })