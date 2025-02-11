import { Typography } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'

export const JournalPages = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        sdsgdhasddf
      </Typography> */}

      <NoteView />
      
    </JournalLayout>
  )
}
