import { Navbar, CalendarEvent, CalendarModal } from '../';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getMessagesES, localizer } from '../../helper';
import { addHours } from 'date-fns';
import { useState } from 'react';
import { useUiStore } from '../../hooks';


const events = [{
  title: 'Cumpleaños',
  notes: 'Comprar carne',
  start: new Date(),
  end: addHours( new Date(), 2 ),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Ignacio'
  }
}]

export const CalendarPage = () => {

  const { openDateModal } = useUiStore();

  const [lastView, setLastView] = useState( localStorage.getItem('lastView') || 'week' );

  const eventStylrGetter = ( even , start, end, isSelected ) => {

    const style = {
      backgroundColor: '#347CF7',
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
    console.log({ click: event });
  }

  const onVisitChanged = ( event ) => {
    localStorage.setItem( 'lastView', event );
    setLastView( event );
  }

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
    </>
  )
}
