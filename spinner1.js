const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

const animateSpinner = (index) => {
  process.stdout.write(`\r${spinner[index]}   `);
  setTimeout(() => {
    index = (index + 1) % spinner.length;
    animateSpinner(index);
  }, 200);
};

process.stdout.write('hello from spinner1.js... \rheyyy\n');
animateSpinner(0);
