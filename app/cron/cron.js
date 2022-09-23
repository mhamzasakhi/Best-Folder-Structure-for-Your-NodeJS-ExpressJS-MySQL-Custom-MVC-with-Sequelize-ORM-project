const cronJobs = require('node-cron');

module.exports.cronJob = cronJobs.schedule(
	'0 0 1 * *',
	async function () {
		console.log("Please put your cron jobs in this directory!");
	},
	{
		scheduled: false, // indicate auto run of task
	}
);
