import { useDispatch } from 'react-redux' ;
import { IconButton, Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';
import { startNewNote } from '../../store/journal/thunks';

export const JournalPages = () => {

  const dispatch = useDispatch();

  const onClickNewNote = () => {

    dispatch( startNewNote() );
  }

  return (
    <JournalLayout>
      {/* <Typography>
        sdsgdhasddf
      </Typography> */}

      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton 
        onClick={ onClickNewNote }
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
  )
}
