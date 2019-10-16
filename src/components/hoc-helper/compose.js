const compose = (...funcs) => (comp) => {
	return funcs.reduceRight((prevValue, curValue)=> curValue(prevValue), comp);
};

export default compose;