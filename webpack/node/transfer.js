const program = require('commander');
const path = require('path');
const { spawn } = require('child_process');

program
  .command('folder <folder> [file]')
  .action((folder, file) => {
    myPath = path.resolve(__dirname, '../../', 'projects', 'learnNode', folder);
    let p = spawn('node', [`${file}.js`], {
      cwd: myPath,
      stdio: 'inherit',
      shell: process.platform === 'win32'
    });
    p.on('exit', () => {
      console.log('子进程 ' + file + '.js 已退出');
    })
  })
  program.parse(process.argv);