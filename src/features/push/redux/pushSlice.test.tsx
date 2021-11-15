import {pushReducer, savePushToken} from 'features/push/redux/pushSlice';

test('should return the initial state', () => {
  expect(pushReducer(undefined, {type: 'unknown'})).toEqual({
    pushToken: null,
  });
});

test('should remove the auth tokens on sing out', () => {
  const previousState: ReturnType<typeof pushReducer> = {
    pushToken: null,
  };

  expect(
    pushReducer(previousState, savePushToken({pushToken: 'dummy-push-token'})),
  ).toEqual({pushToken: 'dummy-push-token'});
});
