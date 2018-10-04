import ignore from "./ignore";
import {erGyldigFødselsnummer} from 'nav-faker/dist/personidentifikator/helpers/fodselsnummer-utils';

export function containsFnr(diff: string): boolean {
    console.log("diff", diff);
    const fnrRegex = /\d{11}/
    const addedLines = diff.split('\n').filter(line => line.startsWith('+')).join('\n');

    const matches = addedLines.match(fnrRegex)
    if (!matches) {
        return false
    }

    return matches
        .filter(fnr => erGyldigFødselsnummer(fnr))
        .filter(fnr => !ignore.fnr.includes(fnr))
        .length > 0;
}

export function containsVeilederId(diff: string): boolean {
    const veilederIdRegex = /[A-Ya-y]\d{6}/
    let addedLines = diff.split('\n').filter(line => line.startsWith('+')).join('\n');
    return new RegExp(veilederIdRegex).test(addedLines)
}

export default function containsSensitiveData(diff: string): boolean {
    return containsFnr(diff) || containsVeilederId(diff)
}
