exports.seed = function (knex) {
	return knex('roles').truncate()
		.then(function () {
			return knex('roles').insert(
 
				// data generated by https://mockaroo.com/

				[
					{
						"role_id": 1,
						"name": "Bitwolf"
					}, {
						"role_id": 2,
						"name": "Toughjoyfax"
					}, {
						"role_id": 3,
						"name": "Opela"
					}
				]
			);
		});
};
