var programs = [];
programs[0] = [];
programs[1] = [];
programs[2] = [];

var locked = false;
var wait = [];

var exeTime = {
	"var": t1,
	"print": t2,
	"lock": t3,
	"unlock": t4,
	"end": t5
}

while(programs.length > 0) {
	// fetch the first program
	var program = programs.splice(0, 1);

	var i = 0;
	while(i <= q) {
		if(program.length == 0) {
			break;
		}
		if(program[0] == "lock") {
			if (!locked) {
				locked = true;
			} else {
				wait.push(program);
				break;
			}
		}
		if(program[0] == "unlock") {
			if(locked) {
				locked = false;
				var prInWait = wait.splice(0, 1)[0];
				programs = [prInWait].concat(programs);
			}
		}
		i += exeTime[program[0]];

		program.splice(0, 1);
	}

	if(program.length > 0) {
		programs.push(program);
	}
}