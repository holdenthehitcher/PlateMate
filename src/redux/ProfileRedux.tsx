
export const PROFILE_LOADING = "PROFILE_LOADING";
export const PROFILE_FAILED = "PROFILE_FAILED";
export const EDIT_PROFILE = "EDIT_PROFILE";


export const fetchProfile = () => (dispatch: any) => {
  dispatch(profileLoading());

  return fetch("ProfileStats")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(`Error ${response.status}: ${response.statusText}`);
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .catch((error) => dispatch(profileFailed(error.message)));
};

export const profileLoading = () => ({
  type: PROFILE_LOADING,
});

export const profileFailed = (errMess: string) => ({
  type: PROFILE_FAILED,
  payload: errMess,
});


 
const Profile = (
  state = {
    isLoading: true,
    errMess: null,
    stats: [],
  },
  action: { type: any  }
) => {
  switch (action.type) {
    case PROFILE_LOADING:
      return { ...state, isLoading: true, stats: [] };
    case PROFILE_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
    default:
      return state;
  }
};

export default Profile;