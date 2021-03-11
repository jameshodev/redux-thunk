// Action creator
import jsonPlaceholder from '../apis/jsonPlaceholder';

// The result of using async/await causes an error
// "Actions must be plain objects" during the transccopilier converting
// ECMA Script2015 to older javascript engine. It returns the request
// instead of the objects from the action creator.

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};
