openapi-ts-clientorator
=======================

Dette prosjektet produserer eit node js CLI program som kan generere ein typescript klient npm pakke ut frå ein gitt openapi spesifikasjon.

Det er tenkt brukt når ein har eit backend prosjekt basert på openapi, og ønsker å automatisk generere typescript (javascript) klient for dette.

## Bruk

### Kommandolinje argument
Oversikt over mulige kommandolinje parameter med standardverdier som eksempel. Standardverdier blir brukt viss argument ikkje blir gitt.

`--openapi-spec-file in/openapi.json` <br>
Spesifiserer filsti til json fil som spesifiserer openapi definisjonen.

`--package-json-file in/package.json`<br>
Spesifiserer filsti til package.json fil som skal brukast til å generere den package.json fila til npm pakken som blir generert.

Denne må minst innehalde _name_ og _version_ prop, men kan og innehalde feks _license_ og anna info ein ønsker å få med ut i generert pakke. 

Som eit alternativ til å ha ei slik fil kan ein bruke _--package-json-name_ og _--package-json-version_ parameter.

`--package-json-name` og `--package-json-version`<br>
Disse kan brukast istadenfor _--package-json-file_ til å fylle ut _name_ og _version_ prop i generert package.json

`--out-dir out/`<br>
Generert innhald blir skrive ut til denne katalog

`--client-name Client`<br>
Generert typescript klient for gitt spesifikasjon blir gitt dette klassenamn.

#### Eksempel på kommandolinje kall
```
node dist/main.js \
    --openapi-spec-file ../../openapi.json \
    --package-json-name my-api-client \
    --package-json-version "0.0.1-alpha" \
    --out-dir my-pkg \
    --client-name MyClient
```

## Henvendelser
Dette prosjektet er vedlikeholdt av [navikt/k9saksbehandling](CODEOWNERS) 

Kontakt [#sykdom-i-familien](https://nav-it.slack.com/archives/CNGKVQVJ9) ved spørsmål.