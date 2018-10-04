import {expect} from 'chai'
import navfaker from 'nav-faker/dist/index';
import {containsFnr} from "./util";
import ignore from "./ignore";


function createDiff(diff: string): string {
    return `
diff --git a/README.md b/README.md
index 014b44b..dbfd0dd 100644
--- a/README.md
+++ b/README.md
@@ -9,7 +9,6 @@ Testapplikasjon som oppfører seg ufint. Brukes til å teste smoketestene. Veldig meta.
 
 Inneholder også testdata som ser ut som fnr:
 
${diff}
 
 FOO
`
}

describe('fnr', function () {
    it('should return true for valid fnr', function () {
        const fnr = navfaker.personIdentifikator.fødselsnummer();
        const diff = createDiff(`+ ${fnr}`);
        const result = containsFnr(diff);
        expect(result).to.be.true;
    });

    it('should return false for testdata', function () {
        ignore.fnr
            .map(fnr => createDiff(`+${fnr}`))
            .map(diff => containsFnr(diff))
            .forEach(result => expect(result).to.be.false)
    });

    it('should return false for invalid fnrs', function () {
        const invalidFnr = '23158431331'
        const diff = createDiff(`+${invalidFnr}`)
        const result = containsFnr(diff);
        expect(result).to.be.false
    });

    it('should only search added lines', function () {
        const fnr = navfaker.personIdentifikator.fødselsnummer();
        const diff = createDiff(`-${fnr}`);
        const result = containsFnr(diff);
        expect(result).to.be.false
    });
});

describe('veilederId', function () {
    it('should return true for valid ids', function () {

    });

    it('should return false for test ids', function () {

    });
});

describe('aktoerId', function () {
    it('should return true on valid aktoerId', function () {
        return false
    });

    it('should return false on aktoerId for aremark (testdata)', function () {
        return false
    });
});
