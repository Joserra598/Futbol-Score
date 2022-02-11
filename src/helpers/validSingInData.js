const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const validEmail = (email) => {
	return regex.test(email);
};

export const validPassword = (pass) => {
	if (pass.length < 8) return false;
	return true;
};
