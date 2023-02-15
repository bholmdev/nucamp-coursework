const logMessage = (msg) => {
    console.log(msg);
}
const greetUser = (func, userName) => {
    func(`Hi there, ${userName}`);
}
greetUser(logMessage, "Sam");