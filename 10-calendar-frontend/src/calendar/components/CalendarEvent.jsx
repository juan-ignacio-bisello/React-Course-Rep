
export const CalendarEvent = ({ event }) => {

    const { title, user } = event;

  return (
    <>
      <strong>{ title }</strong>r
      <span> - {user.name }</span>
    </>
  )
}
