import * as types from '../mutation-types';

const chapters = {
  namespaced: true,
  state: {
    chapters: [
      {
        id: 0,
        title: "The F2E Challenge Start!",
        pages: [
          {url: '../../../static/images/chapter1/storyboard-1.png'},
          {url: '../../../static/images/chapter1/storyboard-2.png'},
          {url: '../../../static/images/chapter1/storyboard-3.png'},
          {url: '../../../static/images/chapter1/storyboard-4.png'},
          {url: '../../../static/images/chapter1/storyboard-5.png'},
          {url: '../../../static/images/chapter1/storyboard-6.png'},
          {url: '../../../static/images/chapter1/storyboard-7.png'},
          {url: '../../../static/images/chapter1/storyboard-8.png'},
          {url: '../../../static/images/chapter1/storyboard-9.png'},
          {url: '../../../static/images/chapter1/storyboard-10.png'},
          {url: '../../../static/images/chapter1/storyboard-11.png'},
          {url: '../../../static/images/chapter1/storyboard-12.png'},
        ]
      },
      {
        id: 1,
        title: "Todo List is Going Crazy!",
        pages: [
          {url: '../../../static/images/chapter1/storyboard-6.png'},
          {url: '../../../static/images/chapter1/storyboard-5.png'},
          {url: '../../../static/images/chapter1/storyboard-4.png'},
          {url: '../../../static/images/chapter1/storyboard-3.png'},
          {url: '../../../static/images/chapter1/storyboard-2.png'},
          {url: '../../../static/images/chapter1/storyboard-1.png'},
        ]
      }
    ],
    nowChapter: 0,
    nowPage: 0,
  },
  getters: {

  },
  mutations: {
    [types.CHANGE_CHAPTER] (state, {index}) {
      state.nowChapter = index;
      state.nowPage = 0;
    },
    [types.CHANGE_PAGE] (state, {index}) {
      if(index > state.chapters[state.nowChapter].pages.length - 1 
        || index < 0){ return }
      state.nowPage = index;
    }
  },
  actions: {

  }
}

export default chapters;