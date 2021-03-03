import { combineReducers } from 'redux';
import { postsReducer } from './posts.reducer';

export class PostsState {
    isHappy: boolean;
}
export class AppState {
    posts?: PostsState;
}
export const rootReducer = combineReducers<AppState>({
    posts: postsReducer,
});
