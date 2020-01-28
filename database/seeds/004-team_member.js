exports.seed = function (knex) {
	return knex('team_member').truncate()
		.then(function () {
			return knex('team_member').insert(

				// data generated by https://mockaroo.com/
 
				[
					{
						"team_id": 17,
						"user_id": 63,
						"role_id": 1
					}, {
						"team_id": 17,
						"user_id": 52,
						"role_id": 2
					}, {
						"team_id": 9,
						"user_id": 28,
						"role_id": 1
					}, {
						"team_id": 14,
						"user_id": 25,
						"role_id": 2
					}, {
						"team_id": 15,
						"user_id": 35,
						"role_id": 2
					}, {
						"team_id": 5,
						"user_id": 61,
						"role_id": 3
					}, {
						"team_id": 11,
						"user_id": 55,
						"role_id": 3
					}, {
						"team_id": 13,
						"user_id": 58,
						"role_id": 2
					}, {
						"team_id": 3,
						"user_id": 86,
						"role_id": 2
					}, {
						"team_id": 20,
						"user_id": 64,
						"role_id": 3
					}, {
						"team_id": 5,
						"user_id": 29,
						"role_id": 1
					}, {
						"team_id": 12,
						"user_id": 65,
						"role_id": 1
					}, {
						"team_id": 9,
						"user_id": 71,
						"role_id": 1
					}, {
						"team_id": 20,
						"user_id": 60,
						"role_id": 3
					}, {
						"team_id": 6,
						"user_id": 20,
						"role_id": 3
					}, {
						"team_id": 20,
						"user_id": 44,
						"role_id": 1
					}, {
						"team_id": 18,
						"user_id": 6,
						"role_id": 2
					}, {
						"team_id": 16,
						"user_id": 61,
						"role_id": 3
					}, {
						"team_id": 13,
						"user_id": 84,
						"role_id": 2
					}, {
						"team_id": 6,
						"user_id": 12,
						"role_id": 1
					}, {
						"team_id": 8,
						"user_id": 99,
						"role_id": 2
					}, {
						"team_id": 2,
						"user_id": 60,
						"role_id": 1
					}, {
						"team_id": 11,
						"user_id": 41,
						"role_id": 3
					}, {
						"team_id": 11,
						"user_id": 2,
						"role_id": 3
					}, {
						"team_id": 14,
						"user_id": 94,
						"role_id": 3
					}, {
						"team_id": 19,
						"user_id": 44,
						"role_id": 1
					}, {
						"team_id": 17,
						"user_id": 80,
						"role_id": 1
					}, {
						"team_id": 6,
						"user_id": 71,
						"role_id": 1
					}, {
						"team_id": 20,
						"user_id": 57,
						"role_id": 3
					}, {
						"team_id": 3,
						"user_id": 75,
						"role_id": 1
					}
				]
			);
		});
};
