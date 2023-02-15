// challenge
const message = 'Your phone number is contained somewhere in the digits of Pi';
const surprisedReaction = () => console.log(':o');
const smoothReaction = () => console.log('B)');
const saySomethingAndReact = (msg = 'You forgot to submit a message') => {
    console.log(msg);
    return (reaction) => {
        reaction();
    };
};

// add the inputs here
saySomethingAndReact();
saySomethingAndReact(message)(surprisedReaction);
