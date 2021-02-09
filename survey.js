const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What name do you go by? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question('What is your favorite passtime? ', (answer2) => {
    console.log(`Thank you for your valuable feedback: ${answer2}`);
    rl.question('What is your favorite genre of music? ', (answer3) => {
      console.log(`Thank you for your valuable feedback: ${answer3}`);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.), ', (answer4) => {
        console.log(`Thank you for your valuable feedback: ${answer4}`);
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          console.log(`Thank you for your valuable feedback: ${answer5}`);
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            console.log(`Thank you for your valuable feedback: ${answer6}`);
            rl.question("What is your superpower? If a few words, tell us what's amazing about it! ", (answer7) => {
              console.log(`Thank you for your valuable feedback: ${answer7}`);

              const profile = (`${answer} loves ${answer2} and jamming to ${answer3}. They love to eat ${answer5} for ${answer4} and their favorite sport? ${answer6}! But, most interesting of all, they have a secret special super power: ${answer7}! 😎`);
            
             console.log(profile);
            rl.close();
          })
          })
        })
      })
    })
  })
});
