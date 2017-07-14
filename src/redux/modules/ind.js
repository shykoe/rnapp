export const INDADD = 'INDADD';
export const INDSUB = 'INDSUB';
const initialState = {
	ind:0
}
export default (state = initialState, action = {}) =>{
	switch(action.type){
		case INDADD:
			return {...state, ind:state.ind + action.payload};
		case INDSUB:
			return {...state, ind:state.ind - action.payload};
		default:
      		return state;
	}
}
export const nextImage = (step=1)=>{
	return {
		type:INDADD,
		payload:step
	};
}
export const preImage = (step=1)=>{
	return {
		tyep:INDSUB,
		payload:step
	};
}