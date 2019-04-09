const frisby = require('frisby');
const { Joi } = frisby;

it("should return 404 status when the track is not found", () => {
	return frisby
		.patch("http://localhost:8000/tracks/-1")
		.expect('status', 404)
});

it("should return 200 status when updating a track successfully", () => {
	return frisby
	    .fetch('http://localhost:8000/tracks/2', {
	      method: 'PATCH',
	      body: JSON.stringify({
	        name: 'Test changed name'
	      })
	    })
	    .expect('json', 'name', 'Test changed name')
	    .expect('status', 200);
});

it('should create an artist', () => {
	return frisby
	    .fetch('http://localhost:8000/tracks/2', {
	      method: 'PATCH',
	      body: JSON.stringify({
	        name: "",
	        milliseconds: "a",
	        unitPrice: "b"
	      })
	    })
	    .expect('status', 422)
	    .expect("json", "errors[0].message", "Name field is required.")
      	.expect("json", "errors[1].message", "Milliseconds must be number.")
      	.expect("json", "errors[2].message", "UnitPrice must be number.");
});