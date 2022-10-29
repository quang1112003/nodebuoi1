var readline = require("readline"),
 rl = readline.createInterface(process.stdin,process.stdout);
 rl.setPrompt("-->");
rl.prompt();

var toDoList = [];

var commands = {
    ls:function(){
        console.log(toDoList);
    },
    add:function(item){
        toDoList.push(item);
    },
    rm:function(item){
        console.log("i want to remove," ,item, "!!");
    },
};

rl.on('line', function(line) {
    var words =  line.split(' '),
        commands = words.shift(),
        argsStr = words.join(' ');

    commands(commands)(argsStr);

    rl.prompt();
});