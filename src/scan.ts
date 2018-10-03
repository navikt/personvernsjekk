import * as fs from 'fs'

function printUsage() {
    console.log("Usage: personvernsjekk <repodir>");
}

function foundSensitiveData(content: string) {
    const fnrRegex = /[0-7]\d[01]\d{8}/
    const veilederIdRegex = /[A-Ya-y]\d{6}/
    return new RegExp(fnrRegex).test(content) || new RegExp(veilederIdRegex).test(content)
}

const dirname = process.argv[2]

if (!dirname) {
    printUsage();
    process.exit(1)
}

fs.readdir(dirname, (err, filenames) => {
    if (err) {
        console.error(`Could not read dir: ${err}`);
        process.exit(1)
    }
    filenames.forEach((filename) => {
        fs.readFile(dirname + filename, 'utf-8', (err, content) => {
            if (err) {
                console.error(`Could not read file: ${err}`);
                process.exit(1)
            }
            if (foundSensitiveData(content)) {
                console.error(proTip)
            }
        });
    });
});

const proTip = `
" Fant noe som ser ut som sensitiv data  (fnr eller veilederID). Kan ikke merge denne branchen til master.
   Tips:
        - Prøv å generer testdata i stedet for å harkode det
        - Bruk \`git-rebase --interactive master\` for å fjerne sensitiv data fra en git branch
        - Bruk testfamilien aremark om du må hardkode fnr: 10108000398
`
