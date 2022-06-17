const mix = (...callbacks) => {
	let obj = {
		errors: [],
		value: 0,
	};

	let callResult = 0;

	for (let i = 0; i < callbacks.length; ++i) {
		try {
			if (typeof callbacks[i] !== "function") {
				throw new TypeError("Given parameter is not a function");
			}

			callResult = callbacks[i](callResult);
			obj.value = callResult;
		} catch (err) {
			obj.errors = [
				...obj.errors,
				{
					name: err.name,
					message: err.message,
					stack: err.stack.substring(0, 100),
					level: i,
				},
			];
		}
	}

	return obj;
};

let result = mix(
	() => {
		return 0;
	},
	(prev) => {
		return prev + 1;
	},
	(prev) => {
		throw new RangeError("Range is wrong");
	},
	(prev) => {
		return prev * 3;
	},
);

console.log(result);
