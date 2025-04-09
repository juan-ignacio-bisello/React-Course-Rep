import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onDeleteEvent, onLoadEvents, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";
import { calendarApi } from '../api'
import { convertToDateEvents } from "../helper";

export const useCalendarStore = () => {

  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector( state => state.calendar);
  const { user } = useSelector( state => state.auth );

  const setActiveEvent = ( calendarEvent ) => {
    dispatch( onSetActiveEvent( calendarEvent ) );
  }

  const startSavingEvent = async( calendarEvent ) => {
    if( calendarEvent._id ) {
      dispatch( onUpdateEvent({ ...calendarEvent }) );
    } else {
      
      const { data } = await calendarApi.post( '/events', calendarEvent );
      
      dispatch( onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }) );
    }
  }

  const startDeletingEvent = () => {
    dispatch( onDeleteEvent() );
  }

  const startLoadingEvents = async() => {

    try {
      
      const { data } = await calendarApi.get('/events');
      const events = convertToDateEvents( data.eventos );
      dispatch( onLoadEvents( events ) );
      console.log( events );

    } catch (error) {
      console.log('Error cargando eventos');
      console.log( error );
    }
  }
  return {
    // Propiedades
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,

    // Metodos
    startDeletingEvent,
    setActiveEvent,
    startSavingEvent,
    startLoadingEvents,
  }
}
