import expect from 'expect';
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
