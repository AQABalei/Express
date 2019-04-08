const frisby = require('frisby');
const { Joi } = frisby;

it("should return 404 status when the track is not found", () => {
	return frisby
		.patch("http://localhost:8000/api/tracks/-1")
		.expect('status', 404)
});