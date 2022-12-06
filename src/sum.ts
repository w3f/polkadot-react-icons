type Lol = {
	c: number;
};

const sum = (a: number, b: Lol) => {
	return a + b.c;
};

export { sum };
