import {exec} from "child_process";
import containsSensitiveData from "./util";
import ignore from "./ignore";

function printUsage() {
    console.log("Usage: personvernsjekk <branch>");
}

const proTip = `
" Fant noe som ser ut som sensitiv data  (fnr eller veilederID). Kan ikke merge denne branchen til master.
   Tips:
        - Prøv å generer testdata ved bruk av biblioteker som f.eks. nav-faker (https://github.com/navikt/nav-faker)
        - Bruk \`git-rebase --interactive master\` for å fjerne sensitiv data fra en git branch
        - Bruk testfamilien aremark om du må hardkode fnr: ${ignore.fnr[0]}
`

const branch = process.argv[2]

if (!branch) {
    printUsage();
    process.exit(1)
}

let command = `git diff origin/master..${branch}`;
exec(command, ((error, stdout) => {
    if (error) {
        console.error(`Failed to diff git repo: ${error}`)
        process.exit(1)
    }
    if (containsSensitiveData(stdout)) {
        console.log(stdout + proTip);
        process.exit(1)
    }
}));



