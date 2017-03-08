import { UPDATE_CUSTOMER_LIST } from '../const';

const updateCustomerList = (customers) => {
	return {
		type: UPDATE_CUSTOMER_LIST,
		customers
	}
};

export default updateCustomerList;