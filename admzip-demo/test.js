const AdmZip = require("adm-zip");
const sourceZip = './demo/noah-backend-v2-test.zip'

function zip () {
    const zipObj = new AdmZip();
    zipObj.addLocalFolder('./errorCode');
    // const zipEntries = zipObj.getEntries();
    // zipEntries.forEach(et => {
    //     // console.log('222222',et)
    //     et.extra = Buffer.alloc(0);
    //     et.name = et.name + '1111'
    // });
    zipObj.writeZip('./test-4.zip');
}

function unzip () {
    const zip = new AdmZip(sourceZip);
    zip.extractAllTo('./test-3', true /* overwrite */);
}

function init(){
    if(process.env.TEST == 'zip'){
        zip()
    } else {
        unzip()
    }
}
init()


