export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //REMOVE after finished developing
    // token: 'BQC7gT6MBaro4l8oGuWIfIlF2IbH3r90bs3L7Zyv_Dk8Szzu65iLAIAK9Nm-CX_84IV2pyhnVQo5v1Hww5wRSvK1OCXrffo_2V_Ri3kB3e0pJ_t8DPpY3wGN_22ye8i17R1Pc1-2Cyqw4SqbfKlGpbnS3o_vRatJiAd_lpOhwpVE98r-HGAZ86pBPOviPK7pMQ',

};


const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            }

        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            }

        case "SET_TOP_ARTISTS":
            return{
                ...state,
                top_artists: action.top_artists,
            };

        default:
            return state;
    }
}

export default reducer;