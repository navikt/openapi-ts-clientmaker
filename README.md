openapi-ts-clientmaker
=======================

Dette prosjektet produserer eit node js CLI program som kan generere ein typescript klient npm pakke ut frå ein gitt openapi spesifikasjon.

Det publiserast også som reusable github action så ulike prosjekt kan bruke det i build pipelines som ein javascript action. 
På grunn av dette er _node_modules_ og _dist_ katalog med kompilert kjeldekode sjekka inn i versjonskontroll.

Det er tenkt brukt når ein har eit backend prosjekt basert på openapi, og ønsker å automatisk generere typescript (javascript) klient for dette.

Det blir og bygd eit multiplatform docker image som gjere det enkelt å køyre generatoren lokalt utan å måtte installere/sette opp noko anna enn docker.

Dette er ein tidleg versjon, lagd for spesifikke behov. Ikkje eit finpussa produkt meint for alle å ta i bruk.

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
Disse kan brukast istadenfor eller i tillegg til _--package-json-file_ til å fylle ut _name_ og _version_ prop i generert package.json
Overstyrer verdiar frå package.json viss begge er definert.

`--out-dir out/`<br>
Generert innhald blir skrive ut til denne katalog

#### Eksempel på kommandolinje kall med node js direkte
```
node dist/main.js \
    --openapi-spec-file ../../openapi.json \
    --package-json-name my-api-client \
    --package-json-version "0.0.1-alpha" \
    --out-dir my-pkg \
    --client-name MyClient
```

#### Eksempel på kommandolinje kall med docker image
```shell
docker run --rm \
  --mount type=bind,source="$(pwd)"/input,target=/in \
  --mount type=bind,source="$(pwd)"/output,target=/out \
  openapi-ts-clientmaker -- \
  --openapi-spec-file in/openapi.json \
  --package-json-file in/package.json \
```

#### Eksempel på bruk i github action.yaml
```yaml
    - name: Typescript generate
      uses: navikt/openapi-ts-clientmaker@main
      with:
        openapi-spec-file: web/target/myproject.openapi.json
        package-json-file: web/src/main/openapi-ts-client/package.json
        out-dir: web/target/ts-client
```

## Build
Litt info om bygg og deploy av prosjektet finnast i [build/README.md](build/README.md)

## Henvendelser
Dette prosjektet er vedlikeholdt av [navikt/k9saksbehandling](CODEOWNERS) 

Kontakt [#sykdom-i-familien](https://nav-it.slack.com/archives/CNGKVQVJ9) ved spørsmål.