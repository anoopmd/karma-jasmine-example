describe('Dummy', function () {
    it('aboveFive should return false for 2', function () {
      expect(dummy.aboveFive(2)).toEqual(false);
    });

    it('setClass should set the className', function () {
      var el = document.createElement('span');

      dummy.setClass(el, 'foo');

      expect(el.className).toBe('foo');
    });
});