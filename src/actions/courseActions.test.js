import expect from 'expect';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

//SUT
import * as courseActions from './courseActions';
import * as types from './actionTypes';

//Test a sync action
describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expected = {
        type: types.CREATE_COURSE_SUCCESS,
        course: course
      };

      const actual = courseActions.createCourseSuccess(course);

      expect(actual).toEqual(expected);
    });
  });
});


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => nock.cleanAll());

  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
    //Example call to nock (if you aren't using a mock api)
    // nock('http://example.com')
    //   .get('./courses')
    //   .reply(200, { body: { course: [{ id: 1, firstName: 'Cory', lastname: 'House' }] } });

    //arrange
    const expectedActions = [
      {
        type: types.BEGIN_AJAX_CALL
      },
      {
        type: types.LOAD_COURSES_SUCCESS,
        body: {
          courses: [
            {id: 'clean-code', title: 'Clean Code'}
          ]
        }
      }
    ];

    //act
    const store = mockStore({ courses: [], expectedActions });
    store.dispatch(courseActions.loadCourses())
      .then(() => {
        const actions = store.getActions();
        //assert
        expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
        expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);

        //End asynchronous testing
        done();
      });
  });
});
