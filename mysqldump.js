const mysqldump = require('mysqldump')
const argv = require('minimist')(process.argv.slice(2));

console.info("[*] By: https://github.com/mycve/mysqldump")

if(argv.h && argv.u&& argv.p&& argv.d&& argv.o){
    const options = {
        connection: {
            host: argv.h,
            user: argv.u,
            password: argv.p,
            database: argv.d
        },
        dumpToFile: argv.o
    }
    if(argv.t){
        options['dump'] = {
            "tables": argv.t.split(",")
        }
    }
	mysqldump(options).then();
}else{
    console.info("[*] ./mysqldump -h 127.0.0.1 -u root -p 123456 -d database -o data.sql");
    console.info("[*] ./mysqldump -h 127.0.0.1 -u root -p 123456 -d database -o data.sql -t table1,table2");
}

