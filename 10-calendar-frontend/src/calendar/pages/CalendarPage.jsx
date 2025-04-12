import { useEffect, useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Navbar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from '../';
import { getMessagesES, localizer } from '../../helper';
import { useUiStore, useCalendarStore, useAuthStore } from '../../hooks';


export const CalendarPage = () => {

  const { user } = useAuthStore();
  const { openDateModal } = useUiStore();
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();
  
  const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'week' );

  const eventStylrGetter = ( event , start, end, isSelected ) => {

    const isMyEvent = ( user.uid === event.user._id ) || ( user.uid === event.user.uid );

    const style = {
      backgroundColor: isMyEvent ? '#347CF7' : '#464660',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }

  const onDobleClick = ( event ) => {
    openDateModal();
  }

  const onSelect = ( event ) => {
    // console.log({ click: event });
    setActiveEvent( event );
  }

  const onVisitChanged = ( event ) => {
    localStorage.setItem( 'lastView', event );
    setLastView( event );
  }

  useEffect(() => {
    startLoadingEvents();
  }, [])
  

  return (
    <>
      <Navbar />

      <Calendar
        culture='es'
        localizer={ localizer }
        events={ events }
        defaultView={ lastView }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
        messages={ getMessagesES() }
        eventPropGetter={ eventStylrGetter }
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={ onDobleClick }
        onSelectEvent={ onSelect }
        onView={ onVisitChanged }
      />

      <CalendarModal />

      <FabAddNew />
      
      <FabDelete />
    </>
  )
}
