import { Container, Grid } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { read_cookie } from 'sfcookies';
import { CONVERSATIONS, USERS_ALL } from '../../redux/actions';
import Conversation from '../functionals/Conversation';
import FriendList from '../functionals/FriendsList';
import MessagesList from '../functionals/MessagesList';

export default function Messenger() {
    
    const dispatch = useDispatch()
    const { conversations } = useSelector(state => state)

    useEffect(() => {
      dispatch(USERS_ALL())
    }, [dispatch]);

    useEffect(() => {
      dispatch(CONVERSATIONS())
    }, [dispatch]);
    
    
	return (
		<Grid container direction="row" justifyContent="center" alignItems="start">
			<Grid xs>
                <Container>
                    <MessagesList conversations={conversations}/>
                </Container>
            </Grid>
			<Grid xs={6}>
                <Container>
                    <Conversation/>
                </Container>
            </Grid>
			<Grid xs>
                <Container>
                <FriendList />
                </Container>
            </Grid>
		</Grid>
	);
}
