console.log(name);

var name = 'Neil';

b();

function b() {
    console.log('I hath been hoisted');
}
//This works because of JS' engine. It starts by taking a complete ledger of code, then node reads/interprets the ledger to output

