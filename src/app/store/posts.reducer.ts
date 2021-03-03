import { PostsActions } from './posts.actions';
import { PostsState } from './store';
import { tassign } from 'tassign';

const INITIAL_STATE: PostsState = {isHappy: false}

export function postsReducer(state: PostsState = INITIAL_STATE, action:any) {
 switch (action.type) {
  case PostsActions.SET_HAPPY:
    return tassign(state, { isHappy: action.payload });

   default:
    return state;
}
}
