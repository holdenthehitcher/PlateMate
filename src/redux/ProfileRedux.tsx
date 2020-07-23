/// action types
export const PROFILE_LOADING = "PROFILE_LOADING";
export const PROFILE_FAILED = "PROFILE_FAILED";
export const EDIT_PROFILE = "EDIT_PROFILE";

/// action creator

export const profileLoading = () => ({
  type: PROFILE_LOADING,
});

export const profileFailed = (errMess: string) => ({
  type: PROFILE_FAILED,
  payload: errMess,
});

export const editProfile = (item: any) => ({
  type: EDIT_PROFILE,
  payload: item
})


 /// reducer 

export const Profile = (
  state = {
    isLoading: true,
    errMess: null,
    stats: [],
  },
  action: { type: any , payload:any }
) => {
  switch (action.type) {
    case PROFILE_LOADING:
      return { ...state, isLoading: true, stats: [] };
    case PROFILE_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };
      case EDIT_PROFILE:
        const changedItems = state.stats.filter((item) => item !== action.payload) 
        return {...state, isLoading: true, changedItems}
    default:
      return state;
  }
};

