[![Build Status](https://travis-ci.org/navikt/personvernsjekk.svg?branch=master)](https://travis-ci.org/navikt/personvernsjekk)

Personvernsjekk
================

Scanner kode etter sensitive data 

Scanneren ser etter:
- Fødselsnummer
- Veilederidenter

Scanneren ser bort i fra testdata.

### Bygg

`docker build -t navikt/personvernsjekk:<versjon> .`

### Kjør

`docker run navikt/personvernsjekk <path-to-dockerfile>`
Eller uten docker:

`npm start <path til dockerfile>`

---

# Henvendelser

Spørsmål knyttet til koden eller prosjektet kan rettes mot:

* Jan Berge Ommedal, jan.berge.ommedal@nav.no
* Peder Korsveien, peder.korsveien@nav.no
* Stephen Ramthun, stephen.ramthun@nav.no

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen #pus.
