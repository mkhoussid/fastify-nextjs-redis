module.exports = (PORT) => (err, address) => {
	if (err) throw err;

	console.log(`Server listening on http://localhost:${PORT}`);
};
