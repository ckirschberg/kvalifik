import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store/store';

@Injectable({ providedIn: 'root'})
export class PostsActions {
constructor (
  private ngRedux: NgRedux<AppState>) {} 
  static SET_HAPPY: string = 'SET_HAPPY'; 

  setHappy(isHappy: boolean): void {
    this.ngRedux.dispatch({
      type: PostsActions.SET_HAPPY,
      payload: isHappy
    })
  }
}
