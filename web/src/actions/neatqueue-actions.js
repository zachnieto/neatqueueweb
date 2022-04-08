import * as service from '../services/neatqueue-service';

export const getStats = async (dispatch) => {
    const stats = await service.getStats();
    dispatch({
        type: 'GET_STATS',
        stats
    })
};