[![Build Status](https://travis-ci.org/navikt/pus-dockerfile-linter.svg?branch=master)](https://travis-ci.org/navikt/pus-dockerfile-linter)

dockerfile-linter
================

Sjekker om Dockerfile er i henhold til FO sine krav. 

Linteren ser etter:
- Utdaterte base images
- Bruk av `npm install` i stedet for `npm ci`

### Bygg

`docker build -t dockerfile-linter .`

### Kjør

`docker run dockerfile-linter <path-to-dockerfile>`
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
