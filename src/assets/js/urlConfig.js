'use strict'
const url = {
	//user
	userRegister: '/user/register',
	userLogIn: '/user/logIn',
	userLogOut: '/user/logOut',
	userFindAll: '/user/queryAll',
	queryAllById: '/user/queryAll',
	//product
	addProduct: '/products/addProduct',
	updateById: '/products/updateById',
	findAllList: '/products/findAllList',
	findListByObj: '/products/findListByObj',
	delProduct: '/products/delProduct',

	//futures
	futuresQueryAll: '/futures/queryAll',
	futuresInsert: '/futures/insert',
	futuresUpdate: '/futures/updateById',
	futuresDelete: '/futures/deleteById',
}
module.exports = url
