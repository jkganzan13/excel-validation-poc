import { UPDATE_CUSTOMER_LIST } from '../actions/const';

const initialState = {
	customers: []
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case UPDATE_CUSTOMER_LIST:
			return Object.assign({}, state, {
				customers: [...action.customers]
			});

		default:
			return state;
	}
}

export default reducer;