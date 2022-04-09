import * as serverService from '../services/server-service';

export const getSession = async (dispatch) => {
    const session = await serverService.getSession()
    dispatch({
        type: 'SESSION',
        session
    })
};

export const resetSession = async (dispatch) => {
    await serverService.endSession()
    dispatch({
        type: 'LOGOUT'
    })
};
