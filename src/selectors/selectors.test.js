import expect from 'expect';
import { authorsFormattedForDropdown } from './selectors';

describe('Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return no data formatted for use in a dropdown when passed no authors', () => {
      const authors = [];
      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: 'scott-allen', text: 'Scott Allen'}
      ];
      const actual = authorsFormattedForDropdown(authors);

      expect(actual).toNotEqual(expected);
    });
    it('should return author data formatted for use in a dropdown when passed authors', () => {
      const authors = [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
        {id: 'scott-allen', firstName: 'Scott', lastName: 'Allen'}
      ];
      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: 'scott-allen', text: 'Scott Allen'}
      ];
      const actual = authorsFormattedForDropdown(authors);

      expect(actual).toEqual(expected);
    });
  });
});
