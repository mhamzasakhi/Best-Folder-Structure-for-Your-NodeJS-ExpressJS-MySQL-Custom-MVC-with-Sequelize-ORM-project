console.log("start your cronJobs from this file or folder");
const cronJobs = require('node-cron');

const {
	abcd,
	lmno,
	wxyz
} = require('./app/cron/email');

abcd.start();
lmno.start();
wxyz.start();

module.exports.cronJobs = cronJobs;
