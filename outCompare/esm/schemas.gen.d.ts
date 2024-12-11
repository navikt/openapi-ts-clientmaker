export declare const $ATogFLISammeOrganisasjonDto: {
    readonly properties: {
        readonly aktivitetStatus: {
            readonly enum: readonly ["MIDL_INAKTIV", "AAP", "AT", "DP", "SP_AV_DP", "PSB_AV_DP", "FL", "MS", "SN", "AT_FL", "AT_SN", "FL_SN", "AT_FL_SN", "BA", "KUN_YTELSE", "TY", "VENTELØNN_VARTPENGER", "-"];
            readonly type: "string";
        };
        readonly andelIArbeid: {
            readonly items: {
                readonly maximum: 100;
                readonly minimum: 0;
                readonly type: "number";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly andelsnr: {
            readonly format: "int64";
            readonly maximum: 1000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly arbeidsforhold: {
            readonly $ref: "#/components/schemas/BeregningsgrunnlagArbeidsforholdDto";
        };
        readonly fastsattAvSaksbehandler: {
            readonly type: "boolean";
        };
        readonly inntektPrMnd: {
            readonly type: "number";
        };
        readonly inntektskategori: {
            readonly enum: readonly ["ARBEIDSTAKER", "FRILANSER", "SELVSTENDIG_NÆRINGSDRIVENDE", "DAGPENGER", "ARBEIDSAVKLARINGSPENGER", "SJØMANN", "DAGMAMMA", "JORDBRUKER", "FISKER", "ARBEIDSTAKER_UTEN_FERIEPENGER", "-"];
            readonly type: "string";
        };
        readonly kilde: {
            readonly enum: readonly ["SAKSBEHANDLER_KOFAKBER", "PROSESS_BESTEBEREGNING", "SAKSBEHANDLER_FORDELING", "PROSESS_PERIODISERING", "PROSESS_OMFORDELING", "PROSESS_START", "PROSESS_PERIODISERING_TILKOMMET_INNTEKT"];
            readonly type: "string";
        };
        readonly lagtTilAvSaksbehandler: {
            readonly type: "boolean";
        };
    };
    readonly required: readonly ["aktivitetStatus", "andelIArbeid", "andelsnr", "inntektskategori", "kilde"];
    readonly type: "object";
};
export declare const $AbacJournalpostMottakDto: {
    readonly properties: {
        readonly forsendelseMottatt: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly forsendelseMottattTidspunkt: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly journalpostId: {
            readonly type: "string";
        };
        readonly kanalReferanse: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[a-zA-Z0-9\\\\/\\.\\:\\-_=]*$";
            readonly type: "string";
        };
        readonly payload: {
            readonly maxLength: 392000;
            readonly minLength: 0;
            readonly pattern: "^[a-zA-Z0-9\\-_=]*$";
            readonly type: "string";
        };
        readonly saksnummer: {
            readonly type: "string";
        };
        readonly type: {
            readonly type: "string";
        };
        readonly ytelseType: {
            readonly enum: readonly ["DAG", "FRISINN", "SP", "PSB", "PPN", "OMP", "OMP_KS", "OMP_MA", "OMP_AO", "OLP", "AAP", "ES", "FP", "SVP", "EF", "OBSOLETE", "-"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["forsendelseMottattTidspunkt", "journalpostId", "saksnummer", "type", "ytelseType"];
    readonly type: "object";
};
export declare const $AbacJournalpostMottakOpprettSakDto: {
    readonly properties: {
        readonly aktørId: {
            readonly type: "string";
        };
        readonly forsendelseMottatt: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly forsendelseMottattTidspunkt: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly journalpostId: {
            readonly type: "string";
        };
        readonly kanalReferanse: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[a-zA-Z0-9\\\\/\\.\\:\\-_=]*$";
            readonly type: "string";
        };
        readonly payload: {
            readonly maxLength: 392000;
            readonly minLength: 0;
            readonly pattern: "^[a-zA-Z0-9\\-_=]*$";
            readonly type: "string";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly pleietrengendeAktørId: {
            readonly type: "string";
        };
        readonly relatertPersonAktørId: {
            readonly type: "string";
        };
        readonly saksnummer: {
            readonly type: "string";
        };
        readonly type: {
            readonly type: "string";
        };
        readonly ytelseType: {
            readonly enum: readonly ["DAG", "FRISINN", "SP", "PSB", "PPN", "OMP", "OMP_KS", "OMP_MA", "OMP_AO", "OLP", "AAP", "ES", "FP", "SVP", "EF", "OBSOLETE", "-"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["aktørId", "forsendelseMottattTidspunkt", "journalpostId", "periode", "saksnummer", "type", "ytelseType"];
    readonly type: "object";
};
export declare const $AbakusKodeverkIaygrunnlag: {
    readonly properties: {
        readonly virksomhetType: {
            readonly enum: readonly ["DAGMAMMA", "FISKE", "JORDBRUK_SKOGBRUK", "ANNEN", "-"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["virksomhetType"];
    readonly type: "object";
};
export declare const $AksjonspunktDto: {
    readonly properties: {
        readonly aksjonspunktType: {
            readonly enum: readonly ["AUTO", "MANU", "OVST", "SAOV", "-"];
            readonly type: "string";
        };
        readonly begrunnelse: {
            readonly maxLength: 5000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly besluttersBegrunnelse: {
            readonly maxLength: 5000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly definisjon: {
            readonly enum: readonly ["5009", "5015", "5016", "5017", "5018", "5019", "5020", "5021", "5023", "5026", "5028", "5030", "5033", "5034", "5040", "5038", "5039", "5054", "5042", "5046", "5067", "5059", "5047", "5049", "5050", "5051", "5052", "5053", "5055", "5056", "5057", "5058", "5068", "5072", "5080", "5084", "5085", "5089", "5090", "5077", "9069", "9071", "6002", "6005", "6006", "6004", "6008", "6003", "6007", "6011", "6014", "6015", "6017", "6016", "6068", "7001", "7003", "7005", "7006", "7008", "7009", "7014", "7019", "7020", "7022", "7023", "7025", "7030", "7035", "9068", "9070", "7041", "8000", "8003", "8005", "8004", "9001", "9002", "9020", "9099", "9003", "9004", "9013", "9014", "9015", "9005", "9006", "9007", "9008", "9200", "9201", "9202", "9203", "9290", "9291", "9300", "9301", "9302", "9303", "9999", null];
            readonly type: "string";
        };
        readonly erAktivt: {
            readonly type: "boolean";
        };
        readonly fristTid: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly kanLoses: {
            readonly type: "boolean";
        };
        readonly opprettetAv: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}ÆØÅæøå\\p{Space}\\p{Sc}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly status: {
            readonly enum: readonly ["AVBR", "OPPR", "UTFO"];
            readonly type: "string";
        };
        readonly toTrinnsBehandling: {
            readonly type: "boolean";
        };
        readonly toTrinnsBehandlingGodkjent: {
            readonly type: "boolean";
        };
        readonly venteårsak: {
            readonly enum: readonly ["-", "ANKE_OVERSENDT_TIL_TRYGDERETTEN", "ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER", "AVV_DOK", "AVV_IM_MOT_AAREG", "AVV_IM_MOT_SØKNAD_AT", "AVV_SØKNADSPERIODER", "AVV_FODSEL", "AVV_RESPONS_REVURDERING", "FOR_TIDLIG_SOKNAD", "GRADERING_FLERE_ARBEIDSFORHOLD", "REFUSJON_3_MÅNEDER", "SCANN", "UTV_FRIST", "VENT_FEIL_ENDRINGSSØKNAD", "VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG", "VENT_INFOTRYGD", "VENT_INNTEKT_RAPPORTERINGSFRIST", "VENT_MILITÆR_OG_BG_UNDER_3G", "VENT_OPDT_INNTEKTSMELDING", "VENT_OPPTJENING_OPPLYSNINGER", "VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID", "VENT_REGISTERINNHENTING", "VENT_PÅ_SISTE_AAP_MELDEKORT", "VENT_SØKNAD_SENDT_INFORMASJONSBREV", "VENT_TIDLIGERE_BEHANDLING", "VENT_ÅPEN_BEHANDLING", "VENT_MANGL_FUNKSJ_SAKSBEHANDLER", "VENTER_SVAR_PORTEN", "VENTER_SVAR_TEAMS", "ANDRE_INNTEKTSOPPLYSNINGER", "INNTEKTSMELDING", "LEGEERKLÆRING", "MEDISINSKE_OPPLYSNINGER", "ANNET", "VENTER_ETTERLYS_IM", "VENTER_ETTERLYS_IM_VARSEL", "OPPD_ÅPEN_BEH", "VENT_DEKGRAD_REGEL", "VENT_ØKONOMI", "VENT_TILBAKEKREVING", "VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER", "VENT_BEREGNING_TILBAKE_I_TID", "BRUKER_70ÅR_VED_REFUSJON", "VENT_LOVENDRING_8_41", "INGEN_PERIODE_UTEN_YTELSE", "PERIODE_MED_AVSLAG", "MANGLENDE_FUNKSJONALITET", "KORTVARIG_ARBEID", "FRISINN_ATFL_SAMME_ORG", "FRISINN_VARIANT_SN_MED_FL_INNTEKT", "FRISINN_VARIANT_FL_MED_SN_INNTEKT", "FRISINN_VARIANT_NY_FL", "FRISINN_VARIANT_NY_SN_2019", "FRISINN_VARIANT_NY_SN_2020", "FRISINN_VARIANT_KOMBINERT", "FRISINN_VARIANT_KOMBINERT_NY_FL", "FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2019", "FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2020", "FRISINN_VARIANT_KOMBINERT_NY_SN_2019", "FRISINN_VARIANT_KOMBINERT_NY_SN_2020", "FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2019", "FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2020", "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2019", "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2020", "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL", "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2019", "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2020", "FRISINN_VARIANT_ENDRET_INNTEKTSTYPE", "AVV_SOKN_IT_PERIODER", "AVV_SOKN_NAERING", "AVV_SOKN_FRILANS", "DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP", "AAP_DP_SISTE_10_MND_SVP", "FL_SN_IKKE_STOTTET_FOR_SVP"];
            readonly type: "string";
        };
        readonly venteårsakVariant: {
            readonly maxLength: 5000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly vilkarType: {
            readonly enum: readonly ["K9_VILKÅRET", "MEDLEMSKAPSVILKÅRET", "OMSORGEN_FOR", "ALDERSVILKÅR", "ALDERSVILKÅR_BARN", "MEDISINSKEVILKÅR_UNDER_18_ÅR", "MEDISINSKEVILKÅR_18_ÅR", "SØKNADSFRIST", "SØKERSOPPLYSNINGSPLIKT", "OPPTJENINGSPERIODEVILKÅR", "OPPTJENINGSVILKÅRET", "BEREGNINGSGRUNNLAGVILKÅR", "I_LIVETS_SLUTTFASE", "NØDVENDIG_OPPLÆRING", "GODKJENT_OPPLÆRINGSINSTITUSJON", "GJENNOMGÅ_OPPLÆRING", "LANGVARIG_SYKDOM", "UTVIDETRETT", "UDEFINERT"];
            readonly type: "string";
        };
        readonly vurderPaNyttArsaker: {
            readonly items: {
                readonly enum: readonly ["FEIL_FAKTA", "FEIL_LOV", "FEIL_REGEL", "ANNET", "-"];
                readonly maxLength: 100;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
            readonly uniqueItems: true;
        };
    };
    readonly type: "object";
};
export declare const $Aktivitet: {
    readonly properties: {
        readonly arbeidsforhold: {
            readonly $ref: "#/components/schemas/Arbeidsforhold";
        };
        readonly uttaksperioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/Uttaksperiode";
            };
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $AktivitetDto: {
    readonly properties: {
        readonly arbeidsgiver: {
            readonly $ref: "#/components/schemas/Aktør";
        };
        readonly internArbeidsforholdRef: {
            readonly $ref: "#/components/schemas/InternArbeidsforholdRefDto";
        };
        readonly uttakArbeidType: {
            readonly enum: readonly ["AT", "SN", "FL", "MIDL_INAKTIV", "DP", "SP_AV_DP", "PSB_AV_DP", "BA", "IKKE_YRKESAKTIV", "ANNET"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["arbeidsgiver", "internArbeidsforholdRef", "uttakArbeidType"];
    readonly type: "object";
};
export declare const $AktivitetGraderingDto: {
    readonly properties: {
        readonly andelGraderingDto: {
            readonly items: {
                readonly $ref: "#/components/schemas/AndelGraderingDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 1;
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $AktivitetTomDatoMappingDto: {
    readonly properties: {
        readonly aktiviteter: {
            readonly items: {
                readonly $ref: "#/components/schemas/BeregningAktivitetDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly tom: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["aktiviteter", "tom"];
    readonly type: "object";
};
export declare const $AktivitetsAvtaleDto: {
    readonly properties: {
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly sisteLønnsendringsdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly stillingsprosent: {
            readonly type: "number";
        };
    };
    readonly required: readonly ["periode"];
    readonly type: "object";
};
export declare const $Aktør: {
    readonly discriminator: {
        readonly propertyName: "identType";
    };
    readonly properties: {
        readonly identType: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["identType"];
    readonly type: "object";
};
export declare const $AktørIdDto: {
    readonly properties: {
        readonly aktørId: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["aktørId"];
    readonly type: "object";
};
export declare const $AktørIdPersonident: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/Aktør";
    }, {
        readonly properties: {
            readonly ident: {
                readonly pattern: "^\\d{13}+$";
                readonly type: "string";
            };
        };
        readonly type: "object";
    }];
    readonly required: readonly ["ident"];
    readonly type: "object";
};
export declare const $AktørInfoDto: {
    readonly properties: {
        readonly aktoerId: {
            readonly type: "string";
        };
        readonly fagsaker: {
            readonly items: {
                readonly $ref: "#/components/schemas/FagsakDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly person: {
            readonly $ref: "#/components/schemas/PersonDto";
        };
    };
    readonly type: "object";
};
export declare const $AktørListeDto: {
    readonly properties: {
        readonly aktører: {
            readonly items: {
                readonly maxLength: 10000;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly maxItems: 10000;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["aktører"];
    readonly type: "object";
};
export declare const $AleneOmOmsorgen: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/Rammevedtak";
    }, {
        readonly properties: {
            readonly aleneOmOmsorgenFor: {
                readonly type: "string";
            };
            readonly gyldigFraOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly gyldigTilOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly lengde: {
                readonly properties: {
                    readonly nano: {
                        readonly format: "int32";
                        readonly type: "integer";
                    };
                    readonly negative: {
                        readonly type: "boolean";
                    };
                    readonly positive: {
                        readonly type: "boolean";
                    };
                    readonly seconds: {
                        readonly format: "int64";
                        readonly type: "integer";
                    };
                    readonly units: {
                        readonly items: {
                            readonly properties: {
                                readonly dateBased: {
                                    readonly type: "boolean";
                                };
                                readonly duration: {
                                    readonly properties: {
                                        readonly nano: {
                                            readonly format: "int32";
                                            readonly type: "integer";
                                        };
                                        readonly negative: {
                                            readonly type: "boolean";
                                        };
                                        readonly positive: {
                                            readonly type: "boolean";
                                        };
                                        readonly seconds: {
                                            readonly format: "int64";
                                            readonly type: "integer";
                                        };
                                        readonly zero: {
                                            readonly type: "boolean";
                                        };
                                    };
                                    readonly type: "object";
                                };
                                readonly durationEstimated: {
                                    readonly type: "boolean";
                                };
                                readonly timeBased: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly zero: {
                        readonly type: "boolean";
                    };
                };
                readonly type: "object";
            };
            readonly vedtatt: {
                readonly format: "date";
                readonly type: "string";
            };
        };
        readonly type: "object";
    }];
    readonly type: "object";
};
export declare const $AndelForFaktaOmBeregningDto: {
    readonly properties: {
        readonly aktivitetStatus: {
            readonly enum: readonly ["MIDL_INAKTIV", "AAP", "AT", "DP", "SP_AV_DP", "PSB_AV_DP", "FL", "MS", "SN", "AT_FL", "AT_SN", "FL_SN", "AT_FL_SN", "BA", "KUN_YTELSE", "TY", "VENTELØNN_VARTPENGER", "-"];
            readonly type: "string";
        };
        readonly andelsnr: {
            readonly format: "int64";
            readonly maximum: 1000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly arbeidsforhold: {
            readonly $ref: "#/components/schemas/BeregningsgrunnlagArbeidsforholdDto";
        };
        readonly belopReadOnly: {
            readonly type: "number";
        };
        readonly fastsattBelop: {
            readonly type: "number";
        };
        readonly inntektskategori: {
            readonly enum: readonly ["ARBEIDSTAKER", "FRILANSER", "SELVSTENDIG_NÆRINGSDRIVENDE", "DAGPENGER", "ARBEIDSAVKLARINGSPENGER", "SJØMANN", "DAGMAMMA", "JORDBRUKER", "FISKER", "ARBEIDSTAKER_UTEN_FERIEPENGER", "-"];
            readonly type: "string";
        };
        readonly lagtTilAvSaksbehandler: {
            readonly type: "boolean";
        };
        readonly refusjonskrav: {
            readonly type: "number";
        };
        readonly skalKunneEndreAktivitet: {
            readonly type: "boolean";
        };
    };
    readonly type: "object";
};
export declare const $AndelGraderingDto: {
    readonly properties: {
        readonly aktivitetStatus: {
            readonly enum: readonly ["MIDL_INAKTIV", "AAP", "AT", "DP", "SP_AV_DP", "PSB_AV_DP", "FL", "MS", "SN", "AT_FL", "AT_SN", "FL_SN", "AT_FL_SN", "BA", "KUN_YTELSE", "TY", "VENTELØNN_VARTPENGER", "-"];
            readonly type: "string";
        };
        readonly arbeidsforholdRef: {
            readonly $ref: "#/components/schemas/InternArbeidsforholdRefDto";
        };
        readonly arbeidsgiver: {
            readonly $ref: "#/components/schemas/Aktør";
        };
        readonly graderinger: {
            readonly items: {
                readonly $ref: "#/components/schemas/GraderingDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 1;
            readonly type: "array";
        };
    };
    readonly required: readonly ["aktivitetStatus"];
    readonly type: "object";
};
export declare const $AndelMedBeløpDto: {
    readonly properties: {
        readonly aktivitetStatus: {
            readonly enum: readonly ["MIDL_INAKTIV", "AAP", "AT", "DP", "SP_AV_DP", "PSB_AV_DP", "FL", "MS", "SN", "AT_FL", "AT_SN", "FL_SN", "AT_FL_SN", "BA", "KUN_YTELSE", "TY", "VENTELØNN_VARTPENGER", "-"];
            readonly type: "string";
        };
        readonly andelIArbeid: {
            readonly items: {
                readonly maximum: 100;
                readonly minimum: 0;
                readonly type: "number";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly andelsnr: {
            readonly format: "int64";
            readonly maximum: 1000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly arbeidsforhold: {
            readonly $ref: "#/components/schemas/BeregningsgrunnlagArbeidsforholdDto";
        };
        readonly fastsattAvSaksbehandler: {
            readonly type: "boolean";
        };
        readonly fastsattBelopPrMnd: {
            readonly type: "number";
        };
        readonly inntektskategori: {
            readonly enum: readonly ["ARBEIDSTAKER", "FRILANSER", "SELVSTENDIG_NÆRINGSDRIVENDE", "DAGPENGER", "ARBEIDSAVKLARINGSPENGER", "SJØMANN", "DAGMAMMA", "JORDBRUKER", "FISKER", "ARBEIDSTAKER_UTEN_FERIEPENGER", "-"];
            readonly type: "string";
        };
        readonly kilde: {
            readonly enum: readonly ["SAKSBEHANDLER_KOFAKBER", "PROSESS_BESTEBEREGNING", "SAKSBEHANDLER_FORDELING", "PROSESS_PERIODISERING", "PROSESS_OMFORDELING", "PROSESS_START", "PROSESS_PERIODISERING_TILKOMMET_INNTEKT"];
            readonly type: "string";
        };
        readonly lagtTilAvSaksbehandler: {
            readonly type: "boolean";
        };
    };
    readonly required: readonly ["aktivitetStatus", "andelIArbeid", "andelsnr", "inntektskategori", "kilde"];
    readonly type: "object";
};
export declare const $AngittPersonDto: {
    readonly properties: {
        readonly aktørId: {
            readonly type: "string";
        };
        readonly fødselsdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly navn: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly personIdent: {
            readonly type: "string";
        };
        readonly rolle: {
            readonly maxLength: 20;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly situasjonKode: {
            readonly maxLength: 20;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly tilleggsopplysninger: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $AnvistAndel: {
    readonly properties: {
        readonly arbeidsforholdId: {
            readonly $ref: "#/components/schemas/InternArbeidsforholdRefDto";
        };
        readonly arbeidsgiver: {
            readonly $ref: "#/components/schemas/Aktør";
        };
        readonly dagsats: {
            readonly type: "number";
        };
        readonly inntektskategori: {
            readonly enum: readonly ["ARBEIDSTAKER", "FRILANSER", "SELVSTENDIG_NÆRINGSDRIVENDE", "DAGPENGER", "ARBEIDSAVKLARINGSPENGER", "SJØMANN", "DAGMAMMA", "JORDBRUKER", "FISKER", "ARBEIDSTAKER_UTEN_FERIEPENGER", "-"];
            readonly type: "string";
        };
        readonly refusjonsgrad: {
            readonly type: "number";
        };
        readonly utbetalingsgrad: {
            readonly type: "number";
        };
    };
    readonly required: readonly ["dagsats"];
    readonly type: "object";
};
export declare const $ArbeidDto: {
    readonly properties: {
        readonly yrkesaktiviteter: {
            readonly items: {
                readonly $ref: "#/components/schemas/YrkesaktivitetDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $Arbeidsforhold: {
    readonly properties: {
        readonly aktørId: {
            readonly type: "string";
        };
        readonly arbeidsforholdId: {
            readonly type: "string";
        };
        readonly organisasjonsnummer: {
            readonly type: "string";
        };
        readonly type: {
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $ArbeidsforholdDto: {
    readonly properties: {
        readonly andelsnr: {
            readonly format: "int64";
            readonly maximum: 1000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly arbeidsforholdId: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly arbeidsgiverIdent: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $ArbeidsforholdIdDto: {
    readonly properties: {
        readonly eksternArbeidsforholdId: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly internArbeidsforholdId: {
            readonly format: "uuid";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $ArbeidsforholdInformasjonDto: {
    readonly properties: {
        readonly overstyringer: {
            readonly items: {
                readonly $ref: "#/components/schemas/ArbeidsforholdOverstyringDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 1;
            readonly type: "array";
        };
        readonly referanser: {
            readonly items: {
                readonly $ref: "#/components/schemas/ArbeidsforholdReferanseDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 1;
            readonly type: "array";
            readonly uniqueItems: true;
        };
    };
    readonly type: "object";
};
export declare const $ArbeidsforholdOverstyringDto: {
    readonly properties: {
        readonly arbeidsforholdRefDto: {
            readonly $ref: "#/components/schemas/InternArbeidsforholdRefDto";
        };
        readonly arbeidsgiver: {
            readonly $ref: "#/components/schemas/Aktør";
        };
        readonly handling: {
            readonly enum: readonly ["-", "BRUK", "NYTT_ARBEIDSFORHOLD", "BRUK_UTEN_INNTEKTSMELDING", "IKKE_BRUK", "SLÅTT_SAMMEN_MED_ANNET", "LAGT_TIL_AV_SAKSBEHANDLER", "BASERT_PÅ_INNTEKTSMELDING", "BRUK_MED_OVERSTYRT_PERIODE", "INNTEKT_IKKE_MED_I_BG"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["arbeidsgiver"];
    readonly type: "object";
};
export declare const $ArbeidsforholdReferanseDto: {
    readonly properties: {
        readonly arbeidsgiver: {
            readonly $ref: "#/components/schemas/Aktør";
        };
        readonly eksternReferanse: {
            readonly $ref: "#/components/schemas/EksternArbeidsforholdRef";
        };
        readonly internReferanse: {
            readonly $ref: "#/components/schemas/InternArbeidsforholdRefDto";
        };
    };
    readonly required: readonly ["arbeidsgiver"];
    readonly type: "object";
};
export declare const $Arbeidsgiver: {
    readonly properties: {
        readonly arbeidsgiverAktørId: {
            readonly maxLength: 20;
            readonly minLength: 0;
            readonly pattern: "^\\d+$";
            readonly type: "string";
        };
        readonly arbeidsgiverOrgnr: {
            readonly maxLength: 20;
            readonly minLength: 0;
            readonly pattern: "^\\d+$";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $ArbeidsgiverArbeidsforholdId: {
    readonly properties: {
        readonly arbeidsforhold: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly arbeidsgiver: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["arbeidsforhold", "arbeidsgiver"];
    readonly type: "object";
};
export declare const $ArbeidsgiverArbeidsforholdIdV2: {
    readonly properties: {
        readonly arbeidsforhold: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly arbeidsgiver: {
            readonly $ref: "#/components/schemas/Arbeidsgiver";
        };
    };
    readonly required: readonly ["arbeidsforhold", "arbeidsgiver"];
    readonly type: "object";
};
export declare const $ArbeidsgiverArbeidsforholdStatus: {
    readonly properties: {
        readonly arbeidsgiver: {
            readonly $ref: "#/components/schemas/ArbeidsgiverArbeidsforholdId";
        };
        readonly journalpostId: {
            readonly type: "string";
        };
        readonly status: {
            readonly enum: readonly ["MOTTATT", "MOTTATT_IKKE_ANSATT", "MOTTATT_UKJENT_ARBEIDSFORHOLDSID", "IKKE_PÅKREVD", "FORTSETT_UTEN", "MANGLER"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["arbeidsgiver", "status"];
    readonly type: "object";
};
export declare const $ArbeidsgiverArbeidsforholdStatusV2: {
    readonly properties: {
        readonly arbeidsgiver: {
            readonly $ref: "#/components/schemas/ArbeidsgiverArbeidsforholdIdV2";
        };
        readonly journalpostId: {
            readonly type: "string";
        };
        readonly status: {
            readonly enum: readonly ["MOTTATT", "MOTTATT_IKKE_ANSATT", "MOTTATT_UKJENT_ARBEIDSFORHOLDSID", "IKKE_PÅKREVD", "FORTSETT_UTEN", "MANGLER"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["arbeidsgiver", "status"];
    readonly type: "object";
};
export declare const $ArbeidsgiverDto: {
    readonly properties: {
        readonly aktørId: {
            readonly type: "string";
        };
        readonly fødselsdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly navn: {
            readonly maxLength: 200;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly organisasjonsNummer: {
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $ArbeidsgiverMedPerioderSomManglerDto: {
    readonly properties: {
        readonly arbeidsgiver: {
            readonly $ref: "#/components/schemas/UttakArbeidsforhold";
        };
        readonly manglendePerioder: {
            readonly items: {
                readonly maxLength: 2147483647;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $ArbeidsgiverOpplysningerDto: {
    readonly properties: {
        readonly arbeidsforholdreferanser: {
            readonly items: {
                readonly $ref: "#/components/schemas/ArbeidsforholdIdDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly fødselsdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly identifikator: {
            readonly pattern: "^\\d+$";
            readonly type: "string";
        };
        readonly navn: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly personIdentifikator: {
            readonly pattern: "^\\d+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["arbeidsforholdreferanser"];
    readonly type: "object";
};
export declare const $ArbeidsgiverOversiktDto: {
    readonly properties: {
        readonly arbeidsgivere: {
            readonly additionalProperties: {
                readonly $ref: "#/components/schemas/ArbeidsgiverOpplysningerDto";
            };
            readonly type: "object";
        };
    };
    readonly type: "object";
};
export declare const $ArbeidstakerUtenInntektsmeldingAndelDto: {
    readonly properties: {
        readonly aktivitetStatus: {
            readonly enum: readonly ["MIDL_INAKTIV", "AAP", "AT", "DP", "SP_AV_DP", "PSB_AV_DP", "FL", "MS", "SN", "AT_FL", "AT_SN", "FL_SN", "AT_FL_SN", "BA", "KUN_YTELSE", "TY", "VENTELØNN_VARTPENGER", "-"];
            readonly type: "string";
        };
        readonly andelIArbeid: {
            readonly items: {
                readonly maximum: 100;
                readonly minimum: 0;
                readonly type: "number";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly andelsnr: {
            readonly format: "int64";
            readonly maximum: 1000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly arbeidsforhold: {
            readonly $ref: "#/components/schemas/BeregningsgrunnlagArbeidsforholdDto";
        };
        readonly fastsattAvSaksbehandler: {
            readonly type: "boolean";
        };
        readonly inntektPrMnd: {
            readonly type: "number";
        };
        readonly inntektskategori: {
            readonly enum: readonly ["ARBEIDSTAKER", "FRILANSER", "SELVSTENDIG_NÆRINGSDRIVENDE", "DAGPENGER", "ARBEIDSAVKLARINGSPENGER", "SJØMANN", "DAGMAMMA", "JORDBRUKER", "FISKER", "ARBEIDSTAKER_UTEN_FERIEPENGER", "-"];
            readonly type: "string";
        };
        readonly kilde: {
            readonly enum: readonly ["SAKSBEHANDLER_KOFAKBER", "PROSESS_BESTEBEREGNING", "SAKSBEHANDLER_FORDELING", "PROSESS_PERIODISERING", "PROSESS_OMFORDELING", "PROSESS_START", "PROSESS_PERIODISERING_TILKOMMET_INNTEKT"];
            readonly type: "string";
        };
        readonly lagtTilAvSaksbehandler: {
            readonly type: "boolean";
        };
        readonly mottarYtelse: {
            readonly type: "boolean";
        };
    };
    readonly required: readonly ["aktivitetStatus", "andelIArbeid", "andelsnr", "inntektskategori", "kilde"];
    readonly type: "object";
};
export declare const $AsyncPollingStatus: {
    readonly properties: {
        readonly cancelUri: {
            readonly format: "uri";
            readonly type: "string";
        };
        readonly eta: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly location: {
            readonly format: "uri";
            readonly type: "string";
        };
        readonly message: {
            readonly type: "string";
        };
        readonly pending: {
            readonly type: "boolean";
        };
        readonly pollIntervalMillis: {
            readonly format: "int64";
            readonly type: "integer";
        };
        readonly readOnly: {
            readonly type: "boolean";
        };
        readonly status: {
            readonly enum: readonly ["CANCELLED", "COMPLETE", "DELAYED", "HALTED", "PENDING"];
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $AvbrytAksjonspunktDto: {
    readonly properties: {
        readonly aksjonspunktKode: {
            readonly maxLength: 15;
            readonly minLength: 1;
            readonly pattern: "^\\d+$";
            readonly type: "string";
        };
        readonly begrunnelse: {
            readonly maxLength: 1000;
            readonly minLength: 1;
            readonly pattern: "^[0-9a-zA-ZæøåÆØÅAaÁáBbCcČčDdĐđEeFfGgHhIiJjKkLlMmNnŊŋOoPpRrSsŠšTtŦŧUuVvZzŽžéôèÉöüäÖÜÄ .'-/\n%§!?@_()+:;,=\"&]*$";
            readonly type: "string";
        };
        readonly behandlingId: {
            readonly format: "int64";
            readonly type: "integer";
        };
        readonly behandlingUuid: {
            readonly format: "uuid";
            readonly type: "string";
        };
    };
    readonly required: readonly ["aksjonspunktKode", "begrunnelse", "behandlingId"];
    readonly type: "object";
};
export declare const $AvklarAktiviteterDto: {
    readonly properties: {
        readonly aktiviteterTomDatoMapping: {
            readonly items: {
                readonly $ref: "#/components/schemas/AktivitetTomDatoMappingDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly skjæringstidspunkt: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["skjæringstidspunkt"];
    readonly type: "object";
};
export declare const $AvklaringsbehovDto: {
    readonly properties: {
        readonly begrunnelse: {
            readonly maxLength: 5000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly definisjon: {
            readonly enum: readonly ["FASTSETT_BG_AT_FL", "VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN", "VURDER_VARIG_ENDRT_ARB_SITSJN_MDL_INAKTV", "FORDEL_BG", "FASTSETT_BG_TB_ARB", "VURDER_NYTT_INNTKTSFRHLD", "VURDER_REPRSNTR_STORTNGT", "FASTSETT_BG_SN_NY_I_ARB_LIVT", "AVKLAR_AKTIVITETER", "VURDER_FAKTA_ATFL_SN", "VURDER_REFUSJONSKRAV", "OVST_BEREGNINGSAKTIVITETER", "OVST_INNTEKT", "AUTO_VENT_PAA_INNTKT_RAP_FRST", "AUTO_VENT_PAA_SISTE_AAP_DP_MELDKRT", "AUTO_VENT_FRISINN", "INGEN_AKTIVITETER"];
            readonly type: "string";
        };
        readonly erTrukket: {
            readonly type: "boolean";
        };
        readonly kanLoses: {
            readonly type: "boolean";
        };
        readonly status: {
            readonly enum: readonly ["OPPR", "UTFO", "AVBR"];
            readonly type: "string";
        };
        readonly vurdertAv: {
            readonly maxLength: 20;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly vurdertTidspunkt: {
            readonly format: "date-time";
            readonly type: "string";
        };
    };
    readonly required: readonly ["definisjon", "erTrukket", "kanLoses", "status"];
    readonly type: "object";
};
export declare const $AvklartPersonstatus: {
    readonly properties: {
        readonly orginalPersonstatus: {
            readonly enum: readonly ["ABNR", "ADNR", "BOSA", "DØD", "DØDD", "FOSV", "FØDR", "UFUL", "UREG", "UTAN", "UTPE", "UTVA", "-"];
            readonly type: "string";
        };
        readonly overstyrtPersonstatus: {
            readonly enum: readonly ["ABNR", "ADNR", "BOSA", "DØD", "DØDD", "FOSV", "FØDR", "UFUL", "UREG", "UTAN", "UTPE", "UTVA", "-"];
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $AvklarteOpplysninger: {
    readonly properties: {
        readonly begrunnelse: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly fraDato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly godkjent: {
            readonly type: "boolean";
        };
        readonly opprettetAv: {
            readonly maxLength: 20;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly opprettetTidspunkt: {
            readonly format: "date-time";
            readonly type: "string";
        };
    };
    readonly required: readonly ["fraDato", "godkjent"];
    readonly type: "object";
};
export declare const $AvslagsårsakPrPeriodeDto: {
    readonly properties: {
        readonly avslagsårsak: {
            readonly enum: readonly ["FOR_LAVT_BG", "INGEN_FRILANS_I_PERIODE_UTEN_YTELSE", "AVKORTET_GRUNNET_LØPENDE_INNTEKT", "AVKORTET_GRUNNET_ANNEN_INNTEKT"];
            readonly type: "string";
        };
        readonly fom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly tom: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["avslagsårsak", "fom", "tom"];
    readonly type: "object";
};
export declare const $Barn: {
    readonly properties: {
        readonly barnType: {
            readonly enum: readonly ["VANLIG", "FOSTERBARN", "UTENLANDSK_BARN"];
            readonly type: "string";
        };
        readonly deltBostedPerioder: {
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly dødsdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly fødselsdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly personIdent: {
            readonly type: "string";
        };
        readonly sammeBostedPerioder: {
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $BehandlingAksjonspunktDto: {
    readonly properties: {
        readonly aksjonspunkter: {
            readonly items: {
                readonly $ref: "#/components/schemas/AksjonspunktDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly behandlingStatus: {
            readonly enum: readonly ["AVSLU", "FVED", "IVED", "OPPRE", "UTRED"];
            readonly type: "string";
        };
        readonly behandlingType: {
            readonly enum: readonly ["BT-002", "BT-004", "BT-010", "-"];
            readonly type: "string";
        };
        readonly behandlingUuid: {
            readonly format: "uuid";
            readonly type: "string";
        };
        readonly fagsakStatus: {
            readonly enum: readonly ["OPPR", "UBEH", "LOP", "AVSLU"];
            readonly type: "string";
        };
        readonly saksnummer: {
            readonly type: "string";
        };
        readonly ytelseType: {
            readonly enum: readonly ["DAG", "FRISINN", "SP", "PSB", "PPN", "OMP", "OMP_KS", "OMP_MA", "OMP_AO", "OLP", "AAP", "ES", "FP", "SVP", "EF", "OBSOLETE", "-"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["behandlingUuid", "saksnummer", "ytelseType"];
    readonly type: "object";
};
export declare const $BehandlingDto: {
    readonly properties: {
        readonly ansvarligBeslutter: {
            readonly maxLength: 100000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}\\p{Space}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly ansvarligSaksbehandler: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly avsluttet: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly behandlendeEnhetId: {
            readonly maxLength: 20;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}]+$";
            readonly type: "string";
        };
        readonly behandlendeEnhetNavn: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly behandlingHenlagt: {
            readonly type: "boolean";
        };
        readonly behandlingKoet: {
            readonly type: "boolean";
        };
        readonly behandlingPaaVent: {
            readonly type: "boolean";
        };
        readonly behandlingResultatType: {
            readonly enum: readonly ["IKKE_FASTSATT", "INNVILGET", "DELVIS_INNVILGET", "AVSLÅTT", "OPPHØR", "HENLAGT_SØKNAD_TRUKKET", "HENLAGT_FEILOPPRETTET", "HENLAGT_BRUKER_DØD", "MERGET_OG_HENLAGT", "HENLAGT_SØKNAD_MANGLER", "HENLAGT_MASKINELT", "INNVILGET_ENDRING", "INGEN_ENDRING", "MANGLER_BEREGNINGSREGLER"];
            readonly type: "string";
        };
        readonly behandlingsfristTid: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly behandlingsresultat: {
            readonly $ref: "#/components/schemas/BehandlingsresultatDto";
        };
        readonly behandlingÅrsaker: {
            readonly items: {
                readonly $ref: "#/components/schemas/BehandlingÅrsakDto";
            };
            readonly maxItems: 20;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly endret: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly endretAvBrukernavn: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly erPaaVent: {
            readonly type: "boolean";
        };
        readonly fagsakId: {
            readonly format: "int64";
            readonly maximum: 9223372036854776000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly fristBehandlingPaaVent: {
            readonly maxLength: 20;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly førsteÅrsak: {
            readonly $ref: "#/components/schemas/BehandlingÅrsakDto";
        };
        readonly gjeldendeVedtak: {
            readonly type: "boolean";
        };
        readonly id: {
            readonly format: "int64";
            readonly maximum: 9223372036854776000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly links: {
            readonly items: {
                readonly $ref: "#/components/schemas/ResourceLink";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly opprettet: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly originalVedtaksDato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly sakstype: {
            readonly enum: readonly ["DAG", "FRISINN", "SP", "PSB", "PPN", "OMP", "OMP_KS", "OMP_MA", "OMP_AO", "OLP", "AAP", "ES", "FP", "SVP", "EF", "OBSOLETE", "-"];
            readonly type: "string";
        };
        readonly sprakkode: {
            readonly $ref: "#/components/schemas/Språkkode";
        };
        readonly status: {
            readonly enum: readonly ["AVSLU", "FVED", "IVED", "OPPRE", "UTRED"];
            readonly type: "string";
        };
        readonly stegTilstand: {
            readonly $ref: "#/components/schemas/BehandlingStegTilstandDto";
        };
        readonly taskStatus: {
            readonly $ref: "#/components/schemas/AsyncPollingStatus";
        };
        readonly toTrinnsBehandling: {
            readonly type: "boolean";
        };
        readonly type: {
            readonly enum: readonly ["BT-002", "BT-004", "BT-010", "-"];
            readonly type: "string";
        };
        readonly uuid: {
            readonly format: "uuid";
            readonly type: "string";
        };
        readonly venteArsakKode: {
            readonly maxLength: 20;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly venteårsak: {
            readonly enum: readonly ["-", "ANKE_OVERSENDT_TIL_TRYGDERETTEN", "ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER", "AVV_DOK", "AVV_IM_MOT_AAREG", "AVV_IM_MOT_SØKNAD_AT", "AVV_SØKNADSPERIODER", "AVV_FODSEL", "AVV_RESPONS_REVURDERING", "FOR_TIDLIG_SOKNAD", "GRADERING_FLERE_ARBEIDSFORHOLD", "REFUSJON_3_MÅNEDER", "SCANN", "UTV_FRIST", "VENT_FEIL_ENDRINGSSØKNAD", "VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG", "VENT_INFOTRYGD", "VENT_INNTEKT_RAPPORTERINGSFRIST", "VENT_MILITÆR_OG_BG_UNDER_3G", "VENT_OPDT_INNTEKTSMELDING", "VENT_OPPTJENING_OPPLYSNINGER", "VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID", "VENT_REGISTERINNHENTING", "VENT_PÅ_SISTE_AAP_MELDEKORT", "VENT_SØKNAD_SENDT_INFORMASJONSBREV", "VENT_TIDLIGERE_BEHANDLING", "VENT_ÅPEN_BEHANDLING", "VENT_MANGL_FUNKSJ_SAKSBEHANDLER", "VENTER_SVAR_PORTEN", "VENTER_SVAR_TEAMS", "ANDRE_INNTEKTSOPPLYSNINGER", "INNTEKTSMELDING", "LEGEERKLÆRING", "MEDISINSKE_OPPLYSNINGER", "ANNET", "VENTER_ETTERLYS_IM", "VENTER_ETTERLYS_IM_VARSEL", "OPPD_ÅPEN_BEH", "VENT_DEKGRAD_REGEL", "VENT_ØKONOMI", "VENT_TILBAKEKREVING", "VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER", "VENT_BEREGNING_TILBAKE_I_TID", "BRUKER_70ÅR_VED_REFUSJON", "VENT_LOVENDRING_8_41", "INGEN_PERIODE_UTEN_YTELSE", "PERIODE_MED_AVSLAG", "MANGLENDE_FUNKSJONALITET", "KORTVARIG_ARBEID", "FRISINN_ATFL_SAMME_ORG", "FRISINN_VARIANT_SN_MED_FL_INNTEKT", "FRISINN_VARIANT_FL_MED_SN_INNTEKT", "FRISINN_VARIANT_NY_FL", "FRISINN_VARIANT_NY_SN_2019", "FRISINN_VARIANT_NY_SN_2020", "FRISINN_VARIANT_KOMBINERT", "FRISINN_VARIANT_KOMBINERT_NY_FL", "FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2019", "FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2020", "FRISINN_VARIANT_KOMBINERT_NY_SN_2019", "FRISINN_VARIANT_KOMBINERT_NY_SN_2020", "FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2019", "FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2020", "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2019", "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2020", "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL", "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2019", "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2020", "FRISINN_VARIANT_ENDRET_INNTEKTSTYPE", "AVV_SOKN_IT_PERIODER", "AVV_SOKN_NAERING", "AVV_SOKN_FRILANS", "DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP", "AAP_DP_SISTE_10_MND_SVP", "FL_SN_IKKE_STOTTET_FOR_SVP"];
            readonly type: "string";
        };
        readonly versjon: {
            readonly format: "int64";
            readonly maximum: 9223372036854776000;
            readonly minimum: 0;
            readonly type: "integer";
        };
    };
    readonly required: readonly ["opprettet", "sakstype", "status", "type", "uuid", "versjon"];
    readonly type: "object";
};
export declare const $BehandlingIdDto: {
    readonly properties: {
        readonly behandlingId: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}-]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["behandlingId"];
    readonly type: "object";
};
export declare const $BehandlingIdListe: {
    readonly properties: {
        readonly behandlinger: {
            readonly items: {
                readonly $ref: "#/components/schemas/BehandlingIdDto";
            };
            readonly maxItems: 1000;
            readonly minItems: 1;
            readonly type: "array";
        };
    };
    readonly required: readonly ["behandlinger"];
    readonly type: "object";
};
export declare const $BehandlingMedFagsakDto: {
    readonly properties: {
        readonly behandlingResultatType: {
            readonly enum: readonly ["IKKE_FASTSATT", "INNVILGET", "DELVIS_INNVILGET", "AVSLÅTT", "OPPHØR", "HENLAGT_SØKNAD_TRUKKET", "HENLAGT_FEILOPPRETTET", "HENLAGT_BRUKER_DØD", "MERGET_OG_HENLAGT", "HENLAGT_SØKNAD_MANGLER", "HENLAGT_MASKINELT", "INNVILGET_ENDRING", "INGEN_ENDRING", "MANGLER_BEREGNINGSREGLER"];
            readonly type: "string";
        };
        readonly eldsteDatoMedEndringFraSøker: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly sakstype: {
            readonly enum: readonly ["DAG", "FRISINN", "SP", "PSB", "PPN", "OMP", "OMP_KS", "OMP_MA", "OMP_AO", "OLP", "AAP", "ES", "FP", "SVP", "EF", "OBSOLETE", "-"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["eldsteDatoMedEndringFraSøker", "sakstype"];
    readonly type: "object";
};
export declare const $BehandlingOperasjonerDto: {
    readonly properties: {
        readonly behandlingFraBeslutter: {
            readonly type: "boolean";
        };
        readonly behandlingKanBytteEnhet: {
            readonly type: "boolean";
        };
        readonly behandlingKanGjenopptas: {
            readonly type: "boolean";
        };
        readonly behandlingKanHenlegges: {
            readonly type: "boolean";
        };
        readonly behandlingKanOpnesForEndringer: {
            readonly type: "boolean";
        };
        readonly behandlingKanSendeMelding: {
            readonly type: "boolean";
        };
        readonly behandlingKanSettesPaVent: {
            readonly type: "boolean";
        };
        readonly behandlingTilGodkjenning: {
            readonly type: "boolean";
        };
        readonly uuid: {
            readonly format: "uuid";
            readonly type: "string";
        };
    };
    readonly required: readonly ["uuid"];
    readonly type: "object";
};
export declare const $BehandlingOpprettingDto: {
    readonly properties: {
        readonly behandlingType: {
            readonly enum: readonly ["BT-002", "BT-004", "BT-010", "-"];
            readonly type: "string";
        };
        readonly kanOppretteBehandling: {
            readonly type: "boolean";
        };
    };
    readonly required: readonly ["behandlingType"];
    readonly type: "object";
};
export declare const $BehandlingStegTilstandDto: {
    readonly properties: {
        readonly stegStatus: {
            readonly enum: readonly ["STARTET", "INNGANG", "UTGANG", "VENTER", "AVBRUTT", "UTFØRT", "FREMOVERFØRT", "TILBAKEFØRT", "-"];
            readonly type: "string";
        };
        readonly stegType: {
            readonly enum: readonly ["BERYT", "PRECONDITION_BERGRUNN", "FAST_BERGRUNN", "VURDER_OPPTJ_PERIODE", "FASTSETT_STP_BER", "FVEDSTEG", "VURDER_VILKAR_BERGRUNN", "VURDER_REF_BERGRUNN", "FORDEL_BERGRUNN", "FORBRES", "FORS_BERGRUNN", "FORS_BERGRUNN_2", "VURDER_MANUELT_BREV", "FORVEDSTEG", "BERYT_OPPDRAG", "VURDER_SØKNADSFRIST", "INIT_PERIODER", "INIT_VILKÅR", "INPER", "INREG", "INSØK", "INREG_AVSL", "IVEDSTEG", "KOFAK", "KOARB", "KOMPLETT_FOR_BEREGNING", "KOFAKBER", "KOFAKUT", "KOFAK_LOP_MEDL", "VURDEROP", "SIMOPP", "START", "VRSLREV", "VULOMED", "VURDER_FARESIGNALER", "VURDINNSYN", "VURDERKOMPLETT", "VURDER_STARTDATO_UTTAKSREGLER", "VURDER_TILKOMMET_INNTEKT", "POSTCONDITION_KOMPLETTHET", "VARIANT_FILTER", "VURDER_MEDISINSK", "VURDER_NODVENDIGHET", "VURDER_INSTITUSJON", "VURDER_GJENNOMGATT_OPPLAERING", "POST_MEDISINSK", "VURDERMV", "VURDER_OMSORG_FOR", "VURDER_ALDER", "VURDER_ALDER_BARN", "VURDER_OPPTJ_FAKTA", "VURDER_OPPTJ", "VURDER_TILBAKETREKK", "VURDER_UTLAND", "VURDER_UTTAK", "VURDER_UTTAK_V2", "BEKREFT_UTTAK", "MANUELL_VILKÅRSVURDERING", "MANUELL_TILKJENNING_YTELSE", "OVERGANG_FRA_INFOTRYGD"];
            readonly type: "string";
        };
        readonly tidsstempel: {
            readonly format: "date-time";
            readonly type: "string";
        };
    };
    readonly required: readonly ["stegStatus", "stegType"];
    readonly type: "object";
};
export declare const $BehandlingsresultatDto: {
    readonly properties: {
        readonly erRevurderingMedUendretUtfall: {
            readonly type: "boolean";
        };
        readonly type: {
            readonly enum: readonly ["IKKE_FASTSATT", "INNVILGET", "DELVIS_INNVILGET", "AVSLÅTT", "OPPHØR", "HENLAGT_SØKNAD_TRUKKET", "HENLAGT_FEILOPPRETTET", "HENLAGT_BRUKER_DØD", "MERGET_OG_HENLAGT", "HENLAGT_SØKNAD_MANGLER", "HENLAGT_MASKINELT", "INNVILGET_ENDRING", "INGEN_ENDRING", "MANGLER_BEREGNINGSREGLER"];
            readonly type: "string";
        };
        readonly vedtaksdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly vilkårResultat: {
            readonly additionalProperties: {
                readonly items: {
                    readonly $ref: "#/components/schemas/VilkårResultatDto";
                };
                readonly type: "array";
                readonly uniqueItems: true;
            };
            readonly type: "object";
        };
    };
    readonly required: readonly ["type"];
    readonly type: "object";
};
export declare const $BehandlingÅrsakDto: {
    readonly properties: {
        readonly behandlingArsakType: {
            readonly enum: readonly ["RE-MF", "RE-MFIP", "RE-AVAB", "RE-LOV", "RE-RGLF", "RE-FEFAKTA", "RE-PRSSL", "RE-END-FRA-BRUKER", "RE-FRAVÆRKORR-SAKSB", "RE-END-INNTEKTSMELD", "BERØRT-BEHANDLING", "RE-ANNET", "RE-SATS-REGULERING", "RE-ENDRET-FORDELING", "INFOBREV_BEHANDLING", "INFOBREV_OPPHOLD", "RE-KLAG-U-INNTK", "RE-KLAG-M-INNTK", "RE-MDL", "RE-OPTJ", "RE-FRDLING", "RE-INNTK", "RE-DØD", "RE-SRTB", "RE-FRIST", "RE-BER-GRUN", "RE-KLAG-INNH-PGI", "ETTER_KLAGE", "RE-HENDELSE-FØDSEL", "RE-HENDELSE-DØD-F", "RE-HENDELSE-DØD-B", "RE-HENDELSE-DØDFØD", "RE-REGISTEROPPL", "RE-YTELSE", "RE-TILST-YT-INNVIL", "RE-ENDR-BER-GRUN", "RE-TILST-YT-OPPH", "RE_REBEREGN_FP", "RE_ANNEN_SAK", "RE_UTSATT_BEHANDLING", "RE_GJENOPPTAR_UTSATT_BEHANDLING", "RE_ANNEN_SAK_ET", "RE_ANNEN_SAK_NB", "RE_ANNEN_SAK_S", "RE_ANNEN_SAK_NB_ET", "RE_ANNEN_SAK_S_ET", "RE_ANNEN_SAK_S_NB", "RE_ANNEN_SAK_S_ET_NB", "RE_ANNEN_SAK_FP", "UNNT_GENERELL", "REVURDERER_BERØRT_PERIODE", "-"];
            readonly type: "string";
        };
        readonly erAutomatiskRevurdering: {
            readonly type: "boolean";
        };
        readonly manueltOpprettet: {
            readonly type: "boolean";
        };
    };
    readonly type: "object";
};
export declare const $BekreftedeAksjonspunkterDto: {
    readonly properties: {
        readonly behandlingId: {
            readonly $ref: "#/components/schemas/BehandlingIdDto";
        };
        readonly behandlingVersjon: {
            readonly format: "int64";
            readonly maximum: 9223372036854776000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly bekreftedeAksjonspunktDtoer: {
            readonly items: {
                readonly $ref: "#/components/schemas/BekreftetAksjonspunktDto";
            };
            readonly maxItems: 10;
            readonly minItems: 1;
            readonly type: "array";
        };
    };
    readonly required: readonly ["behandlingId", "behandlingVersjon", "bekreftedeAksjonspunktDtoer"];
    readonly type: "object";
};
export declare const $BekreftetAksjonspunktDto: {
    readonly properties: {
        readonly begrunnelse: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $BekreftetOgOverstyrteAksjonspunkterDto: {
    readonly properties: {
        readonly behandlingId: {
            readonly $ref: "#/components/schemas/BehandlingIdDto";
        };
        readonly behandlingVersjon: {
            readonly format: "int64";
            readonly maximum: 9223372036854776000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly bekreftedeAksjonspunktDtoer: {
            readonly items: {
                readonly $ref: "#/components/schemas/BekreftetAksjonspunktDto";
            };
            readonly maxItems: 10;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly minstEttAksjonspunkt: {
            readonly type: "boolean";
        };
        readonly overstyrteAksjonspunktDtoer: {
            readonly items: {
                readonly $ref: "#/components/schemas/OverstyringAksjonspunktDto";
            };
            readonly maxItems: 10;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["behandlingId", "behandlingVersjon", "bekreftedeAksjonspunktDtoer"];
    readonly type: "object";
};
export declare const $Beløp: {
    readonly properties: {
        readonly verdi: {
            readonly exclusiveMaximum: false;
            readonly exclusiveMinimum: false;
            readonly maximum: 10000000;
            readonly minimum: -10000000;
            readonly type: "number";
        };
    };
    readonly type: "object";
};
export declare const $BeredskapDto: {
    readonly properties: {
        readonly beskrivelser: {
            readonly items: {
                readonly $ref: "#/components/schemas/BeskrivelseDto";
            };
            readonly maxItems: 1000;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly vurderinger: {
            readonly items: {
                readonly $ref: "#/components/schemas/VurderingDto";
            };
            readonly maxItems: 1000;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $BeregningAktivitetDto: {
    readonly properties: {
        readonly arbeidsforholdId: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly arbeidsforholdType: {
            readonly enum: readonly ["AAP", "ARBEID", "DAGPENGER", "FORELDREPENGER", "FRILANS", "MILITÆR_ELLER_SIVILTJENESTE", "NÆRING", "OMSORGSPENGER", "OPPLÆRINGSPENGER", "PLEIEPENGER", "FRISINN", "ETTERLØNN_SLUTTPAKKE", "SVANGERSKAPSPENGER", "SYKEPENGER", "SYKEPENGER_AV_DAGPENGER", "PLEIEPENGER_AV_DAGPENGER", "VENTELØNN_VARTPENGER", "VIDERE_ETTERUTDANNING", "UTENLANDSK_ARBEIDSFORHOLD", "UTDANNINGSPERMISJON", "-"];
            readonly type: "string";
        };
        readonly arbeidsgiverIdent: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly eksternArbeidsforholdId: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly fom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly skalBrukes: {
            readonly type: "boolean";
        };
        readonly tom: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["arbeidsforholdType", "fom", "tom"];
    readonly type: "object";
};
export declare const $BeregningsgrunnlagArbeidsforholdDto: {
    readonly properties: {
        readonly arbeidsforholdId: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly arbeidsforholdType: {
            readonly enum: readonly ["AAP", "ARBEID", "DAGPENGER", "FORELDREPENGER", "FRILANS", "MILITÆR_ELLER_SIVILTJENESTE", "NÆRING", "OMSORGSPENGER", "OPPLÆRINGSPENGER", "PLEIEPENGER", "FRISINN", "ETTERLØNN_SLUTTPAKKE", "SVANGERSKAPSPENGER", "SYKEPENGER", "SYKEPENGER_AV_DAGPENGER", "PLEIEPENGER_AV_DAGPENGER", "VENTELØNN_VARTPENGER", "VIDERE_ETTERUTDANNING", "UTENLANDSK_ARBEIDSFORHOLD", "UTDANNINGSPERMISJON", "-"];
            readonly type: "string";
        };
        readonly arbeidsgiverIdent: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly belopFraInntektsmeldingPrMnd: {
            readonly type: "number";
        };
        readonly eksternArbeidsforholdId: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly naturalytelseBortfaltPrÅr: {
            readonly type: "number";
        };
        readonly naturalytelseTilkommetPrÅr: {
            readonly type: "number";
        };
        readonly opphoersdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly organisasjonstype: {
            readonly enum: readonly ["JURIDISK_ENHET", "VIRKSOMHET", "KUNSTIG", "-"];
            readonly type: "string";
        };
        readonly refusjonPrAar: {
            readonly type: "number";
        };
        readonly startdato: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $BeregningsgrunnlagDto: {
    readonly properties: {
        readonly aktivitetStatus: {
            readonly items: {
                readonly enum: readonly ["MIDL_INAKTIV", "AAP", "AT", "DP", "SP_AV_DP", "PSB_AV_DP", "FL", "MS", "SN", "AT_FL", "AT_SN", "FL_SN", "AT_FL_SN", "BA", "KUN_YTELSE", "TY", "VENTELØNN_VARTPENGER", "-"];
                readonly maxLength: 2147483647;
                readonly minLength: 1;
                readonly type: "string";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 1;
            readonly type: "array";
        };
        readonly andelerMedGraderingUtenBG: {
            readonly items: {
                readonly $ref: "#/components/schemas/BeregningsgrunnlagPrStatusOgAndelDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly avklaringsbehov: {
            readonly items: {
                readonly $ref: "#/components/schemas/AvklaringsbehovDto";
            };
            readonly maxItems: 10;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly beregningsgrunnlagPeriode: {
            readonly items: {
                readonly $ref: "#/components/schemas/BeregningsgrunnlagPeriodeDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 1;
            readonly type: "array";
        };
        readonly dekningsgrad: {
            readonly format: "int32";
            readonly maximum: 100;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly erOverstyrtInntekt: {
            readonly type: "boolean";
        };
        readonly faktaOmBeregning: {
            readonly $ref: "#/components/schemas/FaktaOmBeregningDto";
        };
        readonly faktaOmFordeling: {
            readonly $ref: "#/components/schemas/FordelingDto";
        };
        readonly forlengelseperioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/Periode";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly grunnbeløp: {
            readonly type: "number";
        };
        readonly halvG: {
            readonly type: "number";
        };
        readonly hjemmel: {
            readonly enum: readonly ["F_9_9", "F_9_8_8_28", "F_9_9_8_28_8_30", "F_9_9_8_35", "F_9_9_8_38", "F_9_9_8_40", "F_9_9_8_41", "F_9_9_8_42", "F_9_9_8_43", "F_9_9_8_47", "F_9_9_8_49", "F_14_7", "F_14_7_8_30", "F_14_7_8_28_8_30", "F_14_7_8_35", "F_14_7_8_38", "F_14_7_8_40", "F_14_7_8_41", "F_14_7_8_42", "F_14_7_8_43", "F_14_7_8_47", "F_14_7_8_49", "F_22_13_6", "COV_1_5", "KORONALOVEN_3", "-"];
            readonly type: "string";
        };
        readonly inntektsgrunnlag: {
            readonly $ref: "#/components/schemas/InntektsgrunnlagDto";
        };
        readonly refusjonTilVurdering: {
            readonly $ref: "#/components/schemas/RefusjonTilVurderingDto";
        };
        readonly sammenligningsgrunnlag: {
            readonly $ref: "#/components/schemas/SammenligningsgrunnlagDto";
        };
        readonly sammenligningsgrunnlagPrStatus: {
            readonly items: {
                readonly $ref: "#/components/schemas/SammenligningsgrunnlagDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly skjaeringstidspunktBeregning: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly skjæringstidspunkt: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly vilkårsperiodeFom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly ytelsesspesifiktGrunnlag: {
            readonly $ref: "#/components/schemas/YtelsespesifiktGrunnlagDto";
        };
    };
    readonly required: readonly ["avklaringsbehov", "erOverstyrtInntekt", "sammenligningsgrunnlag", "skjaeringstidspunktBeregning", "skjæringstidspunkt"];
    readonly type: "object";
};
export declare const $BeregningsgrunnlagKoblingDto: {
    readonly properties: {
        readonly erForlengelse: {
            readonly type: "boolean";
        };
        readonly referanse: {
            readonly format: "uuid";
            readonly type: "string";
        };
        readonly skjæringstidspunkt: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["erForlengelse", "referanse", "skjæringstidspunkt"];
    readonly type: "object";
};
export declare const $BeregningsgrunnlagPeriodeDto: {
    readonly properties: {
        readonly avkortetPrAar: {
            readonly type: "number";
        };
        readonly beregnetPrAar: {
            readonly type: "number";
        };
        readonly beregningsgrunnlagPeriodeFom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly beregningsgrunnlagPeriodeTom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly beregningsgrunnlagPrStatusOgAndel: {
            readonly items: {
                readonly $ref: "#/components/schemas/BeregningsgrunnlagPrStatusOgAndelDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly bruttoInkludertBortfaltNaturalytelsePrAar: {
            readonly type: "number";
        };
        readonly bruttoPrAar: {
            readonly type: "number";
        };
        readonly dagsats: {
            readonly format: "int64";
            readonly type: "integer";
        };
        readonly periodeAarsaker: {
            readonly items: {
                readonly enum: readonly ["NATURALYTELSE_BORTFALT", "ARBEIDSFORHOLD_AVSLUTTET", "NATURALYTELSE_TILKOMMER", "ENDRING_I_REFUSJONSKRAV", "REFUSJON_OPPHØRER", "GRADERING", "GRADERING_OPPHØRER", "ENDRING_I_AKTIVITETER_SØKT_FOR", "TILKOMMET_INNTEKT", "TILKOMMET_INNTEKT_MANUELT", "TILKOMMET_INNTEKT_AVSLUTTET", "REFUSJON_AVSLÅTT", "REPRESENTERER_STORTINGET", "REPRESENTERER_STORTINGET_AVSLUTTET", "-"];
                readonly maxLength: 2147483647;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
            readonly uniqueItems: true;
        };
        readonly redusertPrAar: {
            readonly type: "number";
        };
    };
    readonly type: "object";
};
export declare const $BeregningsgrunnlagPrStatusOgAndelATDto: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/BeregningsgrunnlagPrStatusOgAndelDto";
    }, {
        readonly properties: {
            readonly bortfaltNaturalytelse: {
                readonly type: "number";
            };
        };
        readonly type: "object";
    }];
    readonly type: "object";
};
export declare const $BeregningsgrunnlagPrStatusOgAndelDto: {
    readonly discriminator: {
        readonly propertyName: "dtoType";
    };
    readonly properties: {
        readonly aktivitetStatus: {
            readonly enum: readonly ["MIDL_INAKTIV", "AAP", "AT", "DP", "SP_AV_DP", "PSB_AV_DP", "FL", "MS", "SN", "AT_FL", "AT_SN", "FL_SN", "AT_FL_SN", "BA", "KUN_YTELSE", "TY", "VENTELØNN_VARTPENGER", "-"];
            readonly type: "string";
        };
        readonly andelsnr: {
            readonly format: "int64";
            readonly maximum: 1000;
            readonly minimum: 1;
            readonly type: "integer";
        };
        readonly arbeidsforhold: {
            readonly $ref: "#/components/schemas/BeregningsgrunnlagArbeidsforholdDto";
        };
        readonly avkortetPrAar: {
            readonly type: "number";
        };
        readonly belopPrAarEtterAOrdningen: {
            readonly type: "number";
        };
        readonly belopPrMndEtterAOrdningen: {
            readonly type: "number";
        };
        readonly beregnetPrAar: {
            readonly type: "number";
        };
        readonly beregningsperiodeFom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly beregningsperiodeTom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly besteberegningPrAar: {
            readonly type: "number";
        };
        readonly bruttoPrAar: {
            readonly type: "number";
        };
        readonly dagsats: {
            readonly format: "int64";
            readonly maximum: 1000000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly dtoType: {
            readonly type: "string";
        };
        readonly erNyIArbeidslivet: {
            readonly type: "boolean";
        };
        readonly erTidsbegrensetArbeidsforhold: {
            readonly type: "boolean";
        };
        readonly erTilkommetAndel: {
            readonly type: "boolean";
        };
        readonly fastsattAvSaksbehandler: {
            readonly type: "boolean";
        };
        readonly fordeltPrAar: {
            readonly type: "number";
        };
        readonly inntektskategori: {
            readonly enum: readonly ["ARBEIDSTAKER", "FRILANSER", "SELVSTENDIG_NÆRINGSDRIVENDE", "DAGPENGER", "ARBEIDSAVKLARINGSPENGER", "SJØMANN", "DAGMAMMA", "JORDBRUKER", "FISKER", "ARBEIDSTAKER_UTEN_FERIEPENGER", "-"];
            readonly type: "string";
        };
        readonly lagtTilAvSaksbehandler: {
            readonly type: "boolean";
        };
        readonly lonnsendringIBeregningsperioden: {
            readonly type: "boolean";
        };
        readonly originalDagsatsFraTilstøtendeYtelse: {
            readonly format: "int64";
            readonly maximum: 1000000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly overstyrtPrAar: {
            readonly type: "number";
        };
        readonly redusertPrAar: {
            readonly type: "number";
        };
        readonly skalFastsetteGrunnlag: {
            readonly type: "boolean";
        };
    };
    readonly required: readonly ["dtoType"];
    readonly type: "object";
};
export declare const $BeregningsgrunnlagPrStatusOgAndelDtoFelles: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/BeregningsgrunnlagPrStatusOgAndelDto";
    }];
    readonly type: "object";
};
export declare const $BeregningsgrunnlagPrStatusOgAndelFLDto: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/BeregningsgrunnlagPrStatusOgAndelDto";
    }, {
        readonly properties: {
            readonly erNyoppstartet: {
                readonly type: "boolean";
            };
        };
        readonly type: "object";
    }];
    readonly type: "object";
};
export declare const $BeregningsgrunnlagPrStatusOgAndelSNDto: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/BeregningsgrunnlagPrStatusOgAndelDto";
    }, {
        readonly properties: {
            readonly næringer: {
                readonly items: {
                    readonly $ref: "#/components/schemas/EgenNæringDto";
                };
                readonly maxItems: 2147483647;
                readonly minItems: 0;
                readonly type: "array";
            };
            readonly pgiSnitt: {
                readonly type: "number";
            };
            readonly pgiVerdier: {
                readonly items: {
                    readonly $ref: "#/components/schemas/PgiDto";
                };
                readonly maxItems: 2147483647;
                readonly minItems: 0;
                readonly type: "array";
            };
        };
        readonly type: "object";
    }];
    readonly type: "object";
};
export declare const $BeregningsgrunnlagPrStatusOgAndelYtelseDto: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/BeregningsgrunnlagPrStatusOgAndelDto";
    }, {
        readonly properties: {
            readonly belopFraMeldekortPrAar: {
                readonly type: "number";
            };
            readonly belopFraMeldekortPrMnd: {
                readonly type: "number";
            };
            readonly oppjustertGrunnlag: {
                readonly type: "number";
            };
        };
        readonly type: "object";
    }];
    readonly type: "object";
};
export declare const $BeregningsresultatDto: {
    readonly properties: {
        readonly opphoersdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly perioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/BeregningsresultatPeriodeDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly skalHindreTilbaketrekk: {
            readonly type: "boolean";
        };
    };
    readonly type: "object";
};
export declare const $BeregningsresultatMedUtbetaltePeriodeDto: {
    readonly properties: {
        readonly opphoersdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly perioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/BeregningsresultatPeriodeDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly skalHindreTilbaketrekk: {
            readonly type: "boolean";
        };
        readonly utbetaltePerioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/BeregningsresultatPeriodeDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $BeregningsresultatPeriodeAndelDto: {
    readonly properties: {
        readonly aktivitetStatus: {
            readonly enum: readonly ["MIDL_INAKTIV", "AAP", "AT", "DP", "SP_AV_DP", "PSB_AV_DP", "FL", "MS", "SN", "AT_FL", "AT_SN", "FL_SN", "AT_FL_SN", "BA", "IKKE_YRKESAKTIV", "KUN_YTELSE", "TY", "VENTELØNN_VARTPENGER", "-"];
            readonly type: "string";
        };
        readonly aktørId: {
            readonly type: "string";
        };
        readonly arbeidsforholdId: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\-\\p{P}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly arbeidsforholdType: {
            readonly enum: readonly ["AAP", "ARBEID", "DAGPENGER", "FORELDREPENGER", "FRILANS", "MILITÆR_ELLER_SIVILTJENESTE", "NÆRING", "OMSORGSPENGER", "OPPLÆRINGSPENGER", "PLEIEPENGER", "ETTERLØNN_SLUTTPAKKE", "SVANGERSKAPSPENGER", "SYKEPENGER", "SYKEPENGER_AV_DAGPENGER", "PLEIEPENGER_AV_DAGPENGER", "VENTELØNN_VARTPENGER", "VIDERE_ETTERUTDANNING", "UTENLANDSK_ARBEIDSFORHOLD", "FRISINN", "UTDANNINGSPERMISJON", "MELLOM_ARBEID", "-"];
            readonly type: "string";
        };
        readonly arbeidsgiver: {
            readonly $ref: "#/components/schemas/ArbeidsgiverDto";
        };
        readonly arbeidsgiverNavn: {
            readonly maxLength: 200;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{P}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly arbeidsgiverOrgnr: {
            readonly type: "string";
        };
        readonly eksternArbeidsforholdId: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{P}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly inntektskategori: {
            readonly enum: readonly ["ARBEIDSTAKER", "FRILANSER", "SELVSTENDIG_NÆRINGSDRIVENDE", "DAGPENGER", "ARBEIDSAVKLARINGSPENGER", "SJØMANN", "DAGMAMMA", "JORDBRUKER", "FISKER", "ARBEIDSTAKER_UTEN_FERIEPENGER", "-"];
            readonly type: "string";
        };
        readonly refusjon: {
            readonly format: "int32";
            readonly maximum: 1000000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly sisteUtbetalingsdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly stillingsprosent: {
            readonly exclusiveMaximum: false;
            readonly exclusiveMinimum: false;
            readonly maximum: 500;
            readonly minimum: 0;
            readonly type: "number";
        };
        readonly tilSoker: {
            readonly format: "int32";
            readonly maximum: 1000000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly utbetalingsgrad: {
            readonly exclusiveMaximum: false;
            readonly exclusiveMinimum: false;
            readonly maximum: 100;
            readonly minimum: 0;
            readonly type: "number";
        };
        readonly utbetalingsgradOppdragForBruker: {
            readonly exclusiveMaximum: false;
            readonly exclusiveMinimum: false;
            readonly maximum: 100;
            readonly minimum: 0;
            readonly type: "number";
        };
        readonly utbetalingsgradOppdragForRefusjon: {
            readonly exclusiveMaximum: false;
            readonly exclusiveMinimum: false;
            readonly maximum: 100;
            readonly minimum: 0;
            readonly type: "number";
        };
        readonly uttak: {
            readonly items: {
                readonly $ref: "#/components/schemas/UttakDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["inntektskategori"];
    readonly type: "object";
};
export declare const $BeregningsresultatPeriodeDto: {
    readonly properties: {
        readonly andeler: {
            readonly items: {
                readonly $ref: "#/components/schemas/BeregningsresultatPeriodeAndelDto";
            };
            readonly maxItems: 200;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly dagsats: {
            readonly format: "int32";
            readonly maximum: 100000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly fom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly reduksjonsfaktorInaktivTypeA: {
            readonly exclusiveMaximum: false;
            readonly exclusiveMinimum: false;
            readonly maximum: 1;
            readonly minimum: 0;
            readonly type: "number";
        };
        readonly tom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly totalUtbetalingsgradEtterReduksjonVedTilkommetInntekt: {
            readonly exclusiveMaximum: false;
            readonly exclusiveMinimum: false;
            readonly maximum: 1;
            readonly minimum: 0;
            readonly type: "number";
        };
        readonly totalUtbetalingsgradFraUttak: {
            readonly exclusiveMaximum: false;
            readonly exclusiveMinimum: false;
            readonly maximum: 1;
            readonly minimum: 0;
            readonly type: "number";
        };
    };
    readonly required: readonly ["andeler", "dagsats", "fom", "tom"];
    readonly type: "object";
};
export declare const $BeskrivelseDto: {
    readonly properties: {
        readonly kilde: {
            readonly enum: readonly ["SØKER", "ANDRE"];
            readonly type: "string";
        };
        readonly mottattDato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly tekst: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $BesteberegningInntektDto: {
    readonly properties: {
        readonly arbeidsforholdId: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly arbeidsgiverId: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly arbeidsgiverIdent: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly inntekt: {
            readonly type: "number";
        };
        readonly opptjeningAktivitetType: {
            readonly enum: readonly ["AAP", "ARBEID", "DAGPENGER", "FORELDREPENGER", "FRILANS", "MILITÆR_ELLER_SIVILTJENESTE", "NÆRING", "OMSORGSPENGER", "OPPLÆRINGSPENGER", "PLEIEPENGER", "FRISINN", "ETTERLØNN_SLUTTPAKKE", "SVANGERSKAPSPENGER", "SYKEPENGER", "SYKEPENGER_AV_DAGPENGER", "PLEIEPENGER_AV_DAGPENGER", "VENTELØNN_VARTPENGER", "VIDERE_ETTERUTDANNING", "UTENLANDSK_ARBEIDSFORHOLD", "UTDANNINGSPERMISJON", "-"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["inntekt", "opptjeningAktivitetType"];
    readonly type: "object";
};
export declare const $BesteberegningMånedGrunnlagDto: {
    readonly properties: {
        readonly fom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly inntekter: {
            readonly items: {
                readonly $ref: "#/components/schemas/BesteberegningInntektDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly tom: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["fom", "tom"];
    readonly type: "object";
};
export declare const $BesteberegninggrunnlagDto: {
    readonly properties: {
        readonly avvik: {
            readonly type: "number";
        };
        readonly besteMåneder: {
            readonly items: {
                readonly $ref: "#/components/schemas/BesteberegningMånedGrunnlagDto";
            };
            readonly maxItems: 6;
            readonly minItems: 6;
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $BestillBrevDto: {
    readonly properties: {
        readonly arsakskode: {
            readonly maxLength: 100;
            readonly minLength: 1;
            readonly pattern: "^[\\p{L}\\p{N}_\\.\\-/]+$";
            readonly type: "string";
        };
        readonly behandlingId: {
            readonly format: "int64";
            readonly maximum: 9223372036854776000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly brevmalkode: {
            readonly maxLength: 100;
            readonly minLength: 1;
            readonly pattern: "^[\\p{L}\\p{N}_\\.\\-/]+$";
            readonly type: "string";
        };
        readonly dokumentbestillingsId: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{L}\\p{N}_\\.\\-/]+$";
            readonly type: "string";
        };
        readonly fritekst: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Pd}\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]*$";
            readonly type: "string";
        };
        readonly fritekstbrev: {
            readonly $ref: "#/components/schemas/FritekstbrevinnholdDto";
        };
        readonly overstyrtMottaker: {
            readonly $ref: "#/components/schemas/MottakerDto";
        };
    };
    readonly required: readonly ["behandlingId", "brevmalkode"];
    readonly type: "object";
};
export declare const $BrevMottakerinfoEregResponseDto: {
    readonly properties: {
        readonly navn: {
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $BrukForrigeSkatteoppgjørDto: {
    readonly properties: {
        readonly behandlingIdForrigeSkatteoppgjør: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}-]+$";
            readonly type: "string";
        };
        readonly saksnummer: {
            readonly maxLength: 19;
            readonly minLength: 0;
            readonly pattern: "^[a-zA-Z0-9]*$";
            readonly type: "string";
        };
        readonly skjæringstidspunkt: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["behandlingIdForrigeSkatteoppgjør", "saksnummer", "skjæringstidspunkt"];
    readonly type: "object";
};
export declare const $ByttBehandlendeEnhetDto: {
    readonly properties: {
        readonly begrunnelse: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly behandlingId: {
            readonly format: "int64";
            readonly maximum: 9223372036854776000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly behandlingVersjon: {
            readonly format: "int64";
            readonly maximum: 9223372036854776000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly enhetId: {
            readonly maxLength: 10;
            readonly minLength: 0;
            readonly pattern: "^[\\p{L}\\p{N}_\\.\\-/]+$";
            readonly type: "string";
        };
        readonly enhetNavn: {
            readonly maxLength: 256;
            readonly minLength: 1;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["begrunnelse", "behandlingId", "behandlingVersjon", "enhetId"];
    readonly type: "object";
};
export declare const $CallbackDto: {
    readonly properties: {
        readonly avsenderRef: {
            readonly $ref: "#/components/schemas/ReferanseDto";
        };
        readonly grunnlagType: {
            readonly enum: readonly ["IAY"];
            readonly type: "string";
        };
        readonly oppdatertGrunnlagRef: {
            readonly $ref: "#/components/schemas/ReferanseDto";
        };
        readonly opprettetTidspunkt: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly opprinneligGrunnlagRef: {
            readonly $ref: "#/components/schemas/ReferanseDto";
        };
    };
    readonly required: readonly ["avsenderRef", "grunnlagType", "opprettetTidspunkt"];
    readonly type: "object";
};
export declare const $DatoIntervallEntitet: {
    readonly properties: {
        readonly fomDato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly tomDato: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $DeaktiverSkjæringstidspunktDto: {
    readonly properties: {
        readonly behandlingId: {
            readonly $ref: "#/components/schemas/BehandlingIdDto";
        };
        readonly skjæringstidspunkt: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["behandlingId", "skjæringstidspunkt"];
    readonly type: "object";
};
export declare const $DeltBosted: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/Rammevedtak";
    }, {
        readonly properties: {
            readonly deltBostedMed: {
                readonly type: "string";
            };
            readonly gyldigFraOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly gyldigTilOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly lengde: {
                readonly properties: {
                    readonly nano: {
                        readonly format: "int32";
                        readonly type: "integer";
                    };
                    readonly negative: {
                        readonly type: "boolean";
                    };
                    readonly positive: {
                        readonly type: "boolean";
                    };
                    readonly seconds: {
                        readonly format: "int64";
                        readonly type: "integer";
                    };
                    readonly units: {
                        readonly items: {
                            readonly properties: {
                                readonly dateBased: {
                                    readonly type: "boolean";
                                };
                                readonly duration: {
                                    readonly properties: {
                                        readonly nano: {
                                            readonly format: "int32";
                                            readonly type: "integer";
                                        };
                                        readonly negative: {
                                            readonly type: "boolean";
                                        };
                                        readonly positive: {
                                            readonly type: "boolean";
                                        };
                                        readonly seconds: {
                                            readonly format: "int64";
                                            readonly type: "integer";
                                        };
                                        readonly zero: {
                                            readonly type: "boolean";
                                        };
                                    };
                                    readonly type: "object";
                                };
                                readonly durationEstimated: {
                                    readonly type: "boolean";
                                };
                                readonly timeBased: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly zero: {
                        readonly type: "boolean";
                    };
                };
                readonly type: "object";
            };
            readonly vedtatt: {
                readonly format: "date";
                readonly type: "string";
            };
        };
        readonly type: "object";
    }];
    readonly type: "object";
};
export declare const $DirekteOvergangDto: {
    readonly properties: {
        readonly skjæringstidspunkter: {
            readonly items: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 1;
            readonly type: "array";
        };
    };
    readonly required: readonly ["skjæringstidspunkter"];
    readonly type: "object";
};
export declare const $DokumentDto: {
    readonly properties: {
        readonly behandlinger: {
            readonly items: {
                readonly format: "int64";
                readonly type: "integer";
            };
            readonly type: "array";
        };
        readonly brevkode: {
            readonly type: "string";
        };
        readonly dokumentId: {
            readonly type: "string";
        };
        readonly gjelderFor: {
            readonly type: "string";
        };
        readonly href: {
            readonly type: "string";
        };
        readonly journalpostId: {
            readonly type: "string";
        };
        readonly kommunikasjonsretning: {
            readonly enum: readonly ["I", "U", "N"];
            readonly type: "string";
        };
        readonly tidspunkt: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly tittel: {
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $DokumentIdDto: {
    readonly properties: {
        readonly dokumentId: {
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $DokumentMedUstrukturerteDataDto: {
    readonly properties: {
        readonly datert: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly id: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}-]+$";
            readonly type: "string";
        };
        readonly links: {
            readonly items: {
                readonly $ref: "#/components/schemas/ResourceLink";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly type: {
            readonly enum: readonly ["LEGEERKLÆRING_SYKEHUS", "MEDISINSKE_OPPLYSNINGER", "ANNET", "UKLASSIFISERT", "LEGEERKLÆRING_ANNEN", "LEGEERKLÆRING_MED_DOKUMENTASJON_AV_OPPLÆRING", "EPIKRISE", "FEILREGISTRERT"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["id", "type"];
    readonly type: "object";
};
export declare const $DødsfallHendelse: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/Hendelse";
    }, {
        readonly properties: {
            readonly dødsdato: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly hendelseInfo: {
                readonly $ref: "#/components/schemas/HendelseInfo";
            };
        };
        readonly type: "object";
    }];
    readonly required: readonly ["dødsdato", "hendelseInfo"];
    readonly type: "object";
};
export declare const $EgenNæringDto: {
    readonly properties: {
        readonly begrunnelse: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly endringsdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly erNyIArbeidslivet: {
            readonly type: "boolean";
        };
        readonly erNyoppstartet: {
            readonly type: "boolean";
        };
        readonly erVarigEndret: {
            readonly type: "boolean";
        };
        readonly kanRegnskapsførerKontaktes: {
            readonly type: "boolean";
        };
        readonly oppgittInntekt: {
            readonly type: "number";
        };
        readonly opphørsdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly oppstartsdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly orgnr: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly regnskapsførerNavn: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly regnskapsførerTlf: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly utenlandskvirksomhetsnavn: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly virksomhetType: {
            readonly enum: readonly ["DAGMAMMA", "FISKE", "FRILANSER", "JORDBRUK_SKOGBRUK", "ANNEN", "-"];
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $EksternArbeidsforholdRef: {
    readonly properties: {
        readonly referanse: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["referanse"];
    readonly type: "object";
};
export declare const $EndreNotatDto: {
    readonly properties: {
        readonly notatId: {
            readonly format: "uuid";
            readonly type: "string";
        };
        readonly notatTekst: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Pd}\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]*$";
            readonly type: "string";
        };
        readonly saksnummer: {
            readonly type: "string";
        };
        readonly versjon: {
            readonly format: "int64";
            readonly type: "integer";
        };
    };
    readonly required: readonly ["notatId", "notatTekst", "saksnummer", "versjon"];
    readonly type: "object";
};
export declare const $EtablertTilsynNattevåkOgBeredskapDto: {
    readonly properties: {
        readonly beredskap: {
            readonly $ref: "#/components/schemas/BeredskapDto";
        };
        readonly etablertTilsynPerioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/EtablertTilsynPeriodeDto";
            };
            readonly maxItems: 1000;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly nattevåk: {
            readonly $ref: "#/components/schemas/NattevåkDto";
        };
        readonly smortEtablertTilsynPerioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/SmørtEtablertTilsyn";
            };
            readonly maxItems: 1000;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $EtablertTilsynPeriodeDto: {
    readonly properties: {
        readonly kilde: {
            readonly enum: readonly ["SØKER", "ANDRE"];
            readonly type: "string";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly tidPerDag: {
            readonly properties: {
                readonly nano: {
                    readonly format: "int32";
                    readonly type: "integer";
                };
                readonly negative: {
                    readonly type: "boolean";
                };
                readonly positive: {
                    readonly type: "boolean";
                };
                readonly seconds: {
                    readonly format: "int64";
                    readonly type: "integer";
                };
                readonly units: {
                    readonly items: {
                        readonly properties: {
                            readonly dateBased: {
                                readonly type: "boolean";
                            };
                            readonly duration: {
                                readonly properties: {
                                    readonly nano: {
                                        readonly format: "int32";
                                        readonly type: "integer";
                                    };
                                    readonly negative: {
                                        readonly type: "boolean";
                                    };
                                    readonly positive: {
                                        readonly type: "boolean";
                                    };
                                    readonly seconds: {
                                        readonly format: "int64";
                                        readonly type: "integer";
                                    };
                                    readonly zero: {
                                        readonly type: "boolean";
                                    };
                                };
                                readonly type: "object";
                            };
                            readonly durationEstimated: {
                                readonly type: "boolean";
                            };
                            readonly timeBased: {
                                readonly type: "boolean";
                            };
                        };
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly zero: {
                    readonly type: "boolean";
                };
            };
            readonly type: "object";
        };
    };
    readonly type: "object";
};
export declare const $FagsakDto: {
    readonly properties: {
        readonly endret: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly erPbSak: {
            readonly type: "boolean";
        };
        readonly gyldigPeriode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly kanRevurderingOpprettes: {
            readonly type: "boolean";
        };
        readonly opprettet: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly person: {
            readonly $ref: "#/components/schemas/PersonDto";
        };
        readonly pleietrengendeAktørId: {
            readonly type: "string";
        };
        readonly relatertPersonAktørId: {
            readonly type: "string";
        };
        readonly saksnummer: {
            readonly type: "string";
        };
        readonly sakstype: {
            readonly enum: readonly ["DAG", "FRISINN", "SP", "PSB", "PPN", "OMP", "OMP_KS", "OMP_MA", "OMP_AO", "OLP", "AAP", "ES", "FP", "SVP", "EF", "OBSOLETE", "-"];
            readonly type: "string";
        };
        readonly skalBehandlesAvInfotrygd: {
            readonly type: "boolean";
        };
        readonly status: {
            readonly enum: readonly ["OPPR", "UBEH", "LOP", "AVSLU"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["saksnummer", "sakstype"];
    readonly type: "object";
};
export declare const $FagsakInfoDto: {
    readonly properties: {
        readonly gyldigPeriode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly person: {
            readonly type: "string";
        };
        readonly pleietrengendeAktørId: {
            readonly type: "string";
        };
        readonly relatertPersonAktørId: {
            readonly type: "string";
        };
        readonly saksnummer: {
            readonly type: "string";
        };
        readonly skalBehandlesAvInfotrygd: {
            readonly type: "boolean";
        };
        readonly status: {
            readonly pattern: "^[a-zæøåA-ZÆØÅ0-9_]+$";
            readonly type: "string";
        };
        readonly ytelseType: {
            readonly pattern: "^[a-zæøåA-ZÆØÅ0-9_]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["saksnummer", "ytelseType"];
    readonly type: "object";
};
export declare const $FaktaOmBeregningAndelDto: {
    readonly properties: {
        readonly aktivitetStatus: {
            readonly enum: readonly ["MIDL_INAKTIV", "AAP", "AT", "DP", "SP_AV_DP", "PSB_AV_DP", "FL", "MS", "SN", "AT_FL", "AT_SN", "FL_SN", "AT_FL_SN", "BA", "KUN_YTELSE", "TY", "VENTELØNN_VARTPENGER", "-"];
            readonly type: "string";
        };
        readonly andelIArbeid: {
            readonly items: {
                readonly maximum: 100;
                readonly minimum: 0;
                readonly type: "number";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly andelsnr: {
            readonly format: "int64";
            readonly maximum: 1000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly arbeidsforhold: {
            readonly $ref: "#/components/schemas/BeregningsgrunnlagArbeidsforholdDto";
        };
        readonly fastsattAvSaksbehandler: {
            readonly type: "boolean";
        };
        readonly inntektskategori: {
            readonly enum: readonly ["ARBEIDSTAKER", "FRILANSER", "SELVSTENDIG_NÆRINGSDRIVENDE", "DAGPENGER", "ARBEIDSAVKLARINGSPENGER", "SJØMANN", "DAGMAMMA", "JORDBRUKER", "FISKER", "ARBEIDSTAKER_UTEN_FERIEPENGER", "-"];
            readonly type: "string";
        };
        readonly kilde: {
            readonly enum: readonly ["SAKSBEHANDLER_KOFAKBER", "PROSESS_BESTEBEREGNING", "SAKSBEHANDLER_FORDELING", "PROSESS_PERIODISERING", "PROSESS_OMFORDELING", "PROSESS_START", "PROSESS_PERIODISERING_TILKOMMET_INNTEKT"];
            readonly type: "string";
        };
        readonly lagtTilAvSaksbehandler: {
            readonly type: "boolean";
        };
    };
    readonly required: readonly ["aktivitetStatus", "andelIArbeid", "andelsnr", "inntektskategori", "kilde"];
    readonly type: "object";
};
export declare const $FaktaOmBeregningDto: {
    readonly properties: {
        readonly andelerForFaktaOmBeregning: {
            readonly items: {
                readonly $ref: "#/components/schemas/AndelForFaktaOmBeregningDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly arbeidsforholdMedLønnsendringUtenIM: {
            readonly items: {
                readonly $ref: "#/components/schemas/FaktaOmBeregningAndelDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly arbeidstakerOgFrilanserISammeOrganisasjonListe: {
            readonly items: {
                readonly $ref: "#/components/schemas/ATogFLISammeOrganisasjonDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly avklarAktiviteter: {
            readonly $ref: "#/components/schemas/AvklarAktiviteterDto";
        };
        readonly faktaOmBeregningTilfeller: {
            readonly items: {
                readonly enum: readonly ["VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD", "VURDER_SN_NY_I_ARBEIDSLIVET", "VURDER_NYOPPSTARTET_FL", "FASTSETT_MAANEDSINNTEKT_FL", "FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING", "VURDER_LØNNSENDRING", "FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING", "VURDER_AT_OG_FL_I_SAMME_ORGANISASJON", "FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE", "VURDER_ETTERLØNN_SLUTTPAKKE", "FASTSETT_ETTERLØNN_SLUTTPAKKE", "VURDER_MOTTAR_YTELSE", "VURDER_BESTEBEREGNING", "VURDER_MILITÆR_SIVILTJENESTE", "VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT", "FASTSETT_BG_KUN_YTELSE", "TILSTØTENDE_YTELSE", "FASTSETT_ENDRET_BEREGNINGSGRUNNLAG", "-"];
                readonly maxLength: 15;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly maxItems: 15;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly frilansAndel: {
            readonly $ref: "#/components/schemas/FaktaOmBeregningAndelDto";
        };
        readonly kortvarigeArbeidsforhold: {
            readonly items: {
                readonly $ref: "#/components/schemas/KortvarigeArbeidsforholdDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly kunYtelse: {
            readonly $ref: "#/components/schemas/KunYtelseDto";
        };
        readonly refusjonskravSomKommerForSentListe: {
            readonly items: {
                readonly $ref: "#/components/schemas/RefusjonskravSomKommerForSentDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly saksopplysninger: {
            readonly $ref: "#/components/schemas/Saksopplysninger";
        };
        readonly vurderBesteberegning: {
            readonly $ref: "#/components/schemas/VurderBesteberegningDto";
        };
        readonly vurderMilitaer: {
            readonly $ref: "#/components/schemas/VurderMilitærDto";
        };
        readonly vurderMottarYtelse: {
            readonly $ref: "#/components/schemas/VurderMottarYtelseDto";
        };
    };
    readonly type: "object";
};
export declare const $FastsattOpptjeningAktivitetDto: {
    readonly properties: {
        readonly aktivitetReferanse: {
            readonly pattern: "^[\\p{Alnum}:_\\-/\\p{Space}\\p{Sc}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly arbeidsgiverNavn: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly fom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly klasse: {
            readonly enum: readonly ["BEKREFTET_GODKJENT", "BEKREFTET_AVVIST", "ANTATT_GODKJENT", "MELLOMLIGGENDE_PERIODE", "-"];
            readonly type: "string";
        };
        readonly tom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly type: {
            readonly enum: readonly ["AAP", "ARBEID", "DAGPENGER", "FORELDREPENGER", "FRILANS", "MILITÆR_ELLER_SIVILTJENESTE", "NÆRING", "OMSORGSPENGER", "OPPLÆRINGSPENGER", "PLEIEPENGER", "ETTERLØNN_SLUTTPAKKE", "SVANGERSKAPSPENGER", "SYKEPENGER", "SYKEPENGER_AV_DAGPENGER", "PLEIEPENGER_AV_DAGPENGER", "VENTELØNN_VARTPENGER", "VIDERE_ETTERUTDANNING", "UTENLANDSK_ARBEIDSFORHOLD", "FRISINN", "UTDANNINGSPERMISJON", "MELLOM_ARBEID", "-"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["fom", "klasse", "tom", "type"];
    readonly type: "object";
};
export declare const $FastsattOpptjeningDto: {
    readonly properties: {
        readonly fastsattOpptjeningAktivitetList: {
            readonly items: {
                readonly $ref: "#/components/schemas/FastsattOpptjeningAktivitetDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly opptjeningFom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly opptjeningTom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly opptjeningperiode: {
            readonly $ref: "#/components/schemas/OpptjeningPeriodeDto";
        };
    };
    readonly required: readonly ["opptjeningFom", "opptjeningTom", "opptjeningperiode"];
    readonly type: "object";
};
export declare const $FastsattUttakDto: {
    readonly properties: {
        readonly aktiviteter: {
            readonly items: {
                readonly $ref: "#/components/schemas/UttakAktivitetPeriodeDto";
            };
            readonly maxItems: 200;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly behandlingUuid: {
            readonly format: "uuid";
            readonly type: "string";
        };
    };
    readonly required: readonly ["behandlingUuid"];
    readonly type: "object";
};
export declare const $FinnEllerOpprettSak: {
    readonly properties: {
        readonly aktørId: {
            readonly type: "string";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly pleietrengendeAktørId: {
            readonly type: "string";
        };
        readonly relatertPersonAktørId: {
            readonly type: "string";
        };
        readonly saksnummer: {
            readonly maxLength: 19;
            readonly minLength: 0;
            readonly pattern: "^[a-zA-Z0-9]*$";
            readonly type: "string";
        };
        readonly ytelseType: {
            readonly maxLength: 20;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}æøåÆØÅ_\\-\\.]*$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["aktørId", "periode"];
    readonly type: "object";
};
export declare const $FinnEllerOpprettSakFnr: {
    readonly properties: {
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly pleietrengende: {
            readonly type: "string";
        };
        readonly relatertPerson: {
            readonly type: "string";
        };
        readonly saksnummer: {
            readonly maxLength: 19;
            readonly minLength: 0;
            readonly pattern: "^[a-zA-Z0-9]*$";
            readonly type: "string";
        };
        readonly søker: {
            readonly type: "string";
        };
        readonly ytelseType: {
            readonly maxLength: 20;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}æøåÆØÅ_\\-\\.]*$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["periode", "søker"];
    readonly type: "object";
};
export declare const $FinnSak: {
    readonly properties: {
        readonly aktørId: {
            readonly type: "string";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly pleietrengendeAktørId: {
            readonly type: "string";
        };
        readonly relatertPersonAktørId: {
            readonly type: "string";
        };
        readonly ytelseType: {
            readonly enum: readonly ["DAG", "FRISINN", "SP", "PSB", "PPN", "OMP", "OMP_KS", "OMP_MA", "OMP_AO", "OLP", "AAP", "ES", "FP", "SVP", "EF", "OBSOLETE", "-"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["aktørId", "ytelseType"];
    readonly type: "object";
};
export declare const $FordelBeregningsgrunnlagAndelDto: {
    readonly properties: {
        readonly aktivitetStatus: {
            readonly enum: readonly ["MIDL_INAKTIV", "AAP", "AT", "DP", "SP_AV_DP", "PSB_AV_DP", "FL", "MS", "SN", "AT_FL", "AT_SN", "FL_SN", "AT_FL_SN", "BA", "KUN_YTELSE", "TY", "VENTELØNN_VARTPENGER", "-"];
            readonly type: "string";
        };
        readonly andelIArbeid: {
            readonly items: {
                readonly maximum: 100;
                readonly minimum: 0;
                readonly type: "number";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly andelsnr: {
            readonly format: "int64";
            readonly maximum: 1000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly arbeidsforhold: {
            readonly $ref: "#/components/schemas/BeregningsgrunnlagArbeidsforholdDto";
        };
        readonly arbeidsforholdType: {
            readonly enum: readonly ["AAP", "ARBEID", "DAGPENGER", "FORELDREPENGER", "FRILANS", "MILITÆR_ELLER_SIVILTJENESTE", "NÆRING", "OMSORGSPENGER", "OPPLÆRINGSPENGER", "PLEIEPENGER", "FRISINN", "ETTERLØNN_SLUTTPAKKE", "SVANGERSKAPSPENGER", "SYKEPENGER", "SYKEPENGER_AV_DAGPENGER", "PLEIEPENGER_AV_DAGPENGER", "VENTELØNN_VARTPENGER", "VIDERE_ETTERUTDANNING", "UTENLANDSK_ARBEIDSFORHOLD", "UTDANNINGSPERMISJON", "-"];
            readonly type: "string";
        };
        readonly belopFraInntektsmeldingPrAar: {
            readonly type: "number";
        };
        readonly fastsattAvSaksbehandler: {
            readonly type: "boolean";
        };
        readonly fordelingForrigeBehandlingPrAar: {
            readonly type: "number";
        };
        readonly fordeltPrAar: {
            readonly type: "number";
        };
        readonly inntektskategori: {
            readonly enum: readonly ["ARBEIDSTAKER", "FRILANSER", "SELVSTENDIG_NÆRINGSDRIVENDE", "DAGPENGER", "ARBEIDSAVKLARINGSPENGER", "SJØMANN", "DAGMAMMA", "JORDBRUKER", "FISKER", "ARBEIDSTAKER_UTEN_FERIEPENGER", "-"];
            readonly type: "string";
        };
        readonly kilde: {
            readonly enum: readonly ["SAKSBEHANDLER_KOFAKBER", "PROSESS_BESTEBEREGNING", "SAKSBEHANDLER_FORDELING", "PROSESS_PERIODISERING", "PROSESS_OMFORDELING", "PROSESS_START", "PROSESS_PERIODISERING_TILKOMMET_INNTEKT"];
            readonly type: "string";
        };
        readonly lagtTilAvSaksbehandler: {
            readonly type: "boolean";
        };
        readonly nyttArbeidsforhold: {
            readonly type: "boolean";
        };
        readonly refusjonskravFraInntektsmeldingPrAar: {
            readonly type: "number";
        };
        readonly refusjonskravPrAar: {
            readonly type: "number";
        };
    };
    readonly required: readonly ["aktivitetStatus", "andelIArbeid", "andelsnr", "arbeidsforholdType", "inntektskategori", "kilde"];
    readonly type: "object";
};
export declare const $FordelBeregningsgrunnlagArbeidsforholdDto: {
    readonly properties: {
        readonly arbeidsforholdId: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly arbeidsforholdType: {
            readonly enum: readonly ["AAP", "ARBEID", "DAGPENGER", "FORELDREPENGER", "FRILANS", "MILITÆR_ELLER_SIVILTJENESTE", "NÆRING", "OMSORGSPENGER", "OPPLÆRINGSPENGER", "PLEIEPENGER", "FRISINN", "ETTERLØNN_SLUTTPAKKE", "SVANGERSKAPSPENGER", "SYKEPENGER", "SYKEPENGER_AV_DAGPENGER", "PLEIEPENGER_AV_DAGPENGER", "VENTELØNN_VARTPENGER", "VIDERE_ETTERUTDANNING", "UTENLANDSK_ARBEIDSFORHOLD", "UTDANNINGSPERMISJON", "-"];
            readonly type: "string";
        };
        readonly arbeidsgiverIdent: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly belopFraInntektsmeldingPrMnd: {
            readonly type: "number";
        };
        readonly eksternArbeidsforholdId: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly naturalytelseBortfaltPrÅr: {
            readonly type: "number";
        };
        readonly naturalytelseTilkommetPrÅr: {
            readonly type: "number";
        };
        readonly opphoersdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly organisasjonstype: {
            readonly enum: readonly ["JURIDISK_ENHET", "VIRKSOMHET", "KUNSTIG", "-"];
            readonly type: "string";
        };
        readonly perioderMedGraderingEllerRefusjon: {
            readonly items: {
                readonly $ref: "#/components/schemas/NyPeriodeDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly permisjon: {
            readonly $ref: "#/components/schemas/PermisjonDto";
        };
        readonly refusjonPrAar: {
            readonly type: "number";
        };
        readonly startdato: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["perioderMedGraderingEllerRefusjon"];
    readonly type: "object";
};
export declare const $FordelBeregningsgrunnlagDto: {
    readonly properties: {
        readonly arbeidsforholdTilFordeling: {
            readonly items: {
                readonly $ref: "#/components/schemas/FordelBeregningsgrunnlagArbeidsforholdDto";
            };
            readonly maxItems: 500;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly fordelBeregningsgrunnlagPerioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/FordelBeregningsgrunnlagPeriodeDto";
            };
            readonly maxItems: 5000;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["arbeidsforholdTilFordeling", "fordelBeregningsgrunnlagPerioder"];
    readonly type: "object";
};
export declare const $FordelBeregningsgrunnlagPeriodeDto: {
    readonly properties: {
        readonly fom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly fordelBeregningsgrunnlagAndeler: {
            readonly items: {
                readonly $ref: "#/components/schemas/FordelBeregningsgrunnlagAndelDto";
            };
            readonly maxItems: 100;
            readonly minItems: 1;
            readonly type: "array";
        };
        readonly harPeriodeAarsakGraderingEllerRefusjon: {
            readonly type: "boolean";
        };
        readonly skalKunneEndreRefusjon: {
            readonly type: "boolean";
        };
        readonly skalPreutfyllesMedBeregningsgrunnlag: {
            readonly type: "boolean";
        };
        readonly skalRedigereInntekt: {
            readonly type: "boolean";
        };
        readonly tom: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["fom", "fordelBeregningsgrunnlagAndeler"];
    readonly type: "object";
};
export declare const $FordelingDto: {
    readonly properties: {
        readonly fordelBeregningsgrunnlag: {
            readonly $ref: "#/components/schemas/FordelBeregningsgrunnlagDto";
        };
        readonly vurderNyttInntektsforholdDto: {
            readonly $ref: "#/components/schemas/VurderNyttInntektsforholdDto";
        };
        readonly vurderRepresentererStortinget: {
            readonly $ref: "#/components/schemas/VurderRepresentererStortingetDto";
        };
    };
    readonly type: "object";
};
export declare const $FordelingFår: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/Rammevedtak";
    }, {
        readonly properties: {
            readonly avsender: {
                readonly type: "string";
            };
            readonly gyldigFraOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly gyldigTilOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly lengde: {
                readonly properties: {
                    readonly nano: {
                        readonly format: "int32";
                        readonly type: "integer";
                    };
                    readonly negative: {
                        readonly type: "boolean";
                    };
                    readonly positive: {
                        readonly type: "boolean";
                    };
                    readonly seconds: {
                        readonly format: "int64";
                        readonly type: "integer";
                    };
                    readonly units: {
                        readonly items: {
                            readonly properties: {
                                readonly dateBased: {
                                    readonly type: "boolean";
                                };
                                readonly duration: {
                                    readonly properties: {
                                        readonly nano: {
                                            readonly format: "int32";
                                            readonly type: "integer";
                                        };
                                        readonly negative: {
                                            readonly type: "boolean";
                                        };
                                        readonly positive: {
                                            readonly type: "boolean";
                                        };
                                        readonly seconds: {
                                            readonly format: "int64";
                                            readonly type: "integer";
                                        };
                                        readonly zero: {
                                            readonly type: "boolean";
                                        };
                                    };
                                    readonly type: "object";
                                };
                                readonly durationEstimated: {
                                    readonly type: "boolean";
                                };
                                readonly timeBased: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly zero: {
                        readonly type: "boolean";
                    };
                };
                readonly type: "object";
            };
            readonly vedtatt: {
                readonly format: "date";
                readonly type: "string";
            };
        };
        readonly type: "object";
    }];
    readonly type: "object";
};
export declare const $FordelingGir: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/Rammevedtak";
    }, {
        readonly properties: {
            readonly gyldigFraOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly gyldigTilOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly lengde: {
                readonly properties: {
                    readonly nano: {
                        readonly format: "int32";
                        readonly type: "integer";
                    };
                    readonly negative: {
                        readonly type: "boolean";
                    };
                    readonly positive: {
                        readonly type: "boolean";
                    };
                    readonly seconds: {
                        readonly format: "int64";
                        readonly type: "integer";
                    };
                    readonly units: {
                        readonly items: {
                            readonly properties: {
                                readonly dateBased: {
                                    readonly type: "boolean";
                                };
                                readonly duration: {
                                    readonly properties: {
                                        readonly nano: {
                                            readonly format: "int32";
                                            readonly type: "integer";
                                        };
                                        readonly negative: {
                                            readonly type: "boolean";
                                        };
                                        readonly positive: {
                                            readonly type: "boolean";
                                        };
                                        readonly seconds: {
                                            readonly format: "int64";
                                            readonly type: "integer";
                                        };
                                        readonly zero: {
                                            readonly type: "boolean";
                                        };
                                    };
                                    readonly type: "object";
                                };
                                readonly durationEstimated: {
                                    readonly type: "boolean";
                                };
                                readonly timeBased: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly zero: {
                        readonly type: "boolean";
                    };
                };
                readonly type: "object";
            };
            readonly mottaker: {
                readonly type: "string";
            };
            readonly vedtatt: {
                readonly format: "date";
                readonly type: "string";
            };
        };
        readonly type: "object";
    }];
    readonly type: "object";
};
export declare const $ForeldrepengerGrunnlag: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/YtelsespesifiktGrunnlagDto";
    }, {
        readonly properties: {
            readonly aktivitetGradering: {
                readonly $ref: "#/components/schemas/AktivitetGraderingDto";
            };
            readonly dekningsgrad: {
                readonly exclusiveMaximum: false;
                readonly exclusiveMinimum: false;
                readonly maximum: 100;
                readonly minimum: 0;
                readonly type: "number";
            };
            readonly kvalifisererTilBesteberegning: {
                readonly type: "boolean";
            };
            readonly ytelsegrunnlagForBesteberegning: {
                readonly items: {
                    readonly $ref: "#/components/schemas/Ytelsegrunnlag";
                };
                readonly type: "array";
            };
        };
        readonly type: "object";
    }];
    readonly required: readonly ["kvalifisererTilBesteberegning"];
    readonly type: "object";
};
export declare const $ForeldrepengerGrunnlagDto: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/YtelsespesifiktGrunnlagDto";
    }, {
        readonly properties: {
            readonly besteberegninggrunnlag: {
                readonly $ref: "#/components/schemas/BesteberegninggrunnlagDto";
            };
        };
        readonly type: "object";
    }];
    readonly type: "object";
};
export declare const $Fosterbarn: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/Rammevedtak";
    }, {
        readonly properties: {
            readonly barnetsFødselsdato: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly gyldigFraOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly gyldigTilOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly lengde: {
                readonly properties: {
                    readonly nano: {
                        readonly format: "int32";
                        readonly type: "integer";
                    };
                    readonly negative: {
                        readonly type: "boolean";
                    };
                    readonly positive: {
                        readonly type: "boolean";
                    };
                    readonly seconds: {
                        readonly format: "int64";
                        readonly type: "integer";
                    };
                    readonly units: {
                        readonly items: {
                            readonly properties: {
                                readonly dateBased: {
                                    readonly type: "boolean";
                                };
                                readonly duration: {
                                    readonly properties: {
                                        readonly nano: {
                                            readonly format: "int32";
                                            readonly type: "integer";
                                        };
                                        readonly negative: {
                                            readonly type: "boolean";
                                        };
                                        readonly positive: {
                                            readonly type: "boolean";
                                        };
                                        readonly seconds: {
                                            readonly format: "int64";
                                            readonly type: "integer";
                                        };
                                        readonly zero: {
                                            readonly type: "boolean";
                                        };
                                    };
                                    readonly type: "object";
                                };
                                readonly durationEstimated: {
                                    readonly type: "boolean";
                                };
                                readonly timeBased: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly zero: {
                        readonly type: "boolean";
                    };
                };
                readonly type: "object";
            };
            readonly mottaker: {
                readonly type: "string";
            };
            readonly vedtatt: {
                readonly format: "date";
                readonly type: "string";
            };
        };
        readonly type: "object";
    }];
    readonly type: "object";
};
export declare const $FosterbarnDto: {
    readonly properties: {
        readonly fnr: {
            readonly maxLength: 11;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}]{11}+$";
            readonly type: "string";
        };
        readonly fødselsdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly navn: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{P}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["fødselsdato", "navn"];
    readonly type: "object";
};
export declare const $FosterbarnListeDto: {
    readonly properties: {
        readonly fosterbarn: {
            readonly items: {
                readonly $ref: "#/components/schemas/FosterbarnDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["fosterbarn"];
    readonly type: "object";
};
export declare const $FrisinnAndelDto: {
    readonly properties: {
        readonly oppgittInntekt: {
            readonly type: "number";
        };
        readonly statusSøktFor: {
            readonly enum: readonly ["MIDL_INAKTIV", "AAP", "AT", "DP", "SP_AV_DP", "PSB_AV_DP", "FL", "MS", "SN", "AT_FL", "AT_SN", "FL_SN", "AT_FL_SN", "BA", "KUN_YTELSE", "TY", "VENTELØNN_VARTPENGER", "-"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["statusSøktFor"];
    readonly type: "object";
};
export declare const $FrisinnGrunnlag: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/YtelsespesifiktGrunnlagDto";
    }, {
        readonly properties: {
            readonly frisinnBehandlingType: {
                readonly enum: readonly ["REVURDERING", "NY_SØKNADSPERIODE"];
                readonly type: "string";
            };
            readonly perioderMedSøkerInfo: {
                readonly items: {
                    readonly $ref: "#/components/schemas/PeriodeMedSøkerInfoDto";
                };
                readonly maxItems: 40;
                readonly minItems: 0;
                readonly type: "array";
            };
            readonly søkerYtelseForFrilans: {
                readonly type: "boolean";
            };
            readonly søkerYtelseForNæring: {
                readonly type: "boolean";
            };
        };
        readonly type: "object";
    }];
    readonly type: "object";
};
export declare const $FrisinnGrunnlagDto: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/YtelsespesifiktGrunnlagDto";
    }, {
        readonly properties: {
            readonly avslagsårsakPrPeriode: {
                readonly items: {
                    readonly $ref: "#/components/schemas/AvslagsårsakPrPeriodeDto";
                };
                readonly maxItems: 2147483647;
                readonly minItems: 0;
                readonly type: "array";
            };
            readonly frisinnPerioder: {
                readonly items: {
                    readonly $ref: "#/components/schemas/FrisinnPeriodeDto";
                };
                readonly maxItems: 2147483647;
                readonly minItems: 1;
                readonly type: "array";
            };
            readonly opplysningerFL: {
                readonly $ref: "#/components/schemas/SøknadsopplysningerDto";
            };
            readonly opplysningerSN: {
                readonly $ref: "#/components/schemas/SøknadsopplysningerDto";
            };
            readonly perioderSøktFor: {
                readonly items: {
                    readonly $ref: "#/components/schemas/OpplystPeriodeDto";
                };
                readonly maxItems: 2147483647;
                readonly minItems: 1;
                readonly type: "array";
            };
        };
        readonly type: "object";
    }];
    readonly required: readonly ["avslagsårsakPrPeriode", "frisinnPerioder", "perioderSøktFor"];
    readonly type: "object";
};
export declare const $FrisinnPeriodeDto: {
    readonly properties: {
        readonly fom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly frisinnAndeler: {
            readonly items: {
                readonly $ref: "#/components/schemas/FrisinnAndelDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 1;
            readonly type: "array";
        };
        readonly oppgittArbeidsinntekt: {
            readonly type: "number";
        };
        readonly tom: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["fom", "frisinnAndeler", "tom"];
    readonly type: "object";
};
export declare const $FritekstbrevinnholdDto: {
    readonly properties: {
        readonly brødtekst: {
            readonly maxLength: 100000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Pd}\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]*$";
            readonly type: "string";
        };
        readonly overskrift: {
            readonly maxLength: 200;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Pd}\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]*$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["brødtekst", "overskrift"];
    readonly type: "object";
};
export declare const $FullUttaksplan: {
    readonly properties: {
        readonly aktiviteter: {
            readonly items: {
                readonly $ref: "#/components/schemas/Aktivitet";
            };
            readonly type: "array";
        };
        readonly saksnummer: {
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $FødselHendelse: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/Hendelse";
    }, {
        readonly properties: {
            readonly fødselsdato: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly hendelseInfo: {
                readonly $ref: "#/components/schemas/HendelseInfo";
            };
        };
        readonly type: "object";
    }];
    readonly required: readonly ["fødselsdato", "hendelseInfo"];
    readonly type: "object";
};
export declare const $GjennomgåttOpplæringDto: {
    readonly properties: {
        readonly perioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/Periode";
            };
            readonly maxItems: 1000;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly vurderinger: {
            readonly items: {
                readonly $ref: "#/components/schemas/OpplæringVurderingDto";
            };
            readonly maxItems: 1000;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["perioder", "vurderinger"];
    readonly type: "object";
};
export declare const $GjenopptaBehandlingDto: {
    readonly properties: {
        readonly behandlingId: {
            readonly format: "int64";
            readonly maximum: 9223372036854776000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly behandlingVersjon: {
            readonly format: "int64";
            readonly maximum: 9223372036854776000;
            readonly minimum: 0;
            readonly type: "integer";
        };
    };
    readonly required: readonly ["behandlingId", "behandlingVersjon"];
    readonly type: "object";
};
export declare const $GodkjentOpplæringsinstitusjonDto: {
    readonly properties: {
        readonly navn: {
            readonly type: "string";
        };
        readonly perioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/Periode";
            };
            readonly type: "array";
        };
        readonly uuid: {
            readonly format: "uuid";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $Gradering: {
    readonly properties: {
        readonly arbeidstidProsent: {
            readonly type: "number";
        };
        readonly indexKey: {
            readonly type: "string";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/DatoIntervallEntitet";
        };
    };
    readonly type: "object";
};
export declare const $GraderingDto: {
    readonly properties: {
        readonly arbeidstidProsent: {
            readonly type: "number";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
    };
    readonly required: readonly ["arbeidstidProsent", "periode"];
    readonly type: "object";
};
export declare const $GraderingMotTilsyn: {
    readonly properties: {
        readonly andreSøkeresTilsyn: {
            readonly type: "number";
        };
        readonly andreSøkeresTilsynReberegnet: {
            readonly type: "boolean";
        };
        readonly etablertTilsyn: {
            readonly type: "number";
        };
        readonly overseEtablertTilsynÅrsak: {
            readonly enum: readonly ["FOR_LAVT", "NATTEVÅK", "BEREDSKAP", "NATTEVÅK_OG_BEREDSKAP"];
            readonly type: "string";
        };
        readonly tilgjengeligForSøker: {
            readonly type: "number";
        };
    };
    readonly type: "object";
};
export declare const $HarGyldigOmsorgsdagerVedtakDto: {
    readonly properties: {
        readonly harInnvilgedeBehandlinger: {
            readonly type: "boolean";
        };
        readonly saksnummer: {
            readonly type: "string";
        };
        readonly vedtaksdato: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $Hendelse: {
    readonly discriminator: {
        readonly propertyName: "type";
    };
    readonly properties: {
        readonly type: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["type"];
    readonly type: "object";
};
export declare const $HendelseDto: {
    readonly properties: {
        readonly aktørId: {
            readonly type: "string";
        };
        readonly hendelse: {
            readonly $ref: "#/components/schemas/Hendelse";
        };
    };
    readonly required: readonly ["aktørId", "hendelse"];
    readonly type: "object";
};
export declare const $HendelseInfo: {
    readonly properties: {
        readonly aktørIder: {
            readonly items: {
                readonly maxLength: 100;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly hendelseId: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly opprettet: {
            readonly format: "date-time";
            readonly type: "string";
        };
    };
    readonly required: readonly ["aktørIder", "opprettet"];
    readonly type: "object";
};
export declare const $HenleggBehandlingDto: {
    readonly properties: {
        readonly begrunnelse: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly behandlingId: {
            readonly format: "int64";
            readonly maximum: 9223372036854776000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly behandlingVersjon: {
            readonly format: "int64";
            readonly maximum: 9223372036854776000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly årsakKode: {
            readonly maxLength: 100;
            readonly minLength: 1;
            readonly pattern: "^[\\p{L}\\p{N}_\\.\\-/]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["begrunnelse", "behandlingId", "behandlingVersjon", "årsakKode"];
    readonly type: "object";
};
export declare const $HentFnr: {
    readonly properties: {
        readonly aktørIder: {
            readonly pattern: "^[\\p{Alnum}\\s]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["aktørIder"];
    readonly type: "object";
};
export declare const $HentReservertSaksnummerDto: {
    readonly properties: {
        readonly behandlingsår: {
            readonly type: "string";
        };
        readonly brukerAktørId: {
            readonly type: "string";
        };
        readonly pleietrengendeAktørId: {
            readonly type: "string";
        };
        readonly relatertPersonAktørId: {
            readonly type: "string";
        };
        readonly saksnummer: {
            readonly maxLength: 19;
            readonly minLength: 0;
            readonly pattern: "^[a-zA-Z0-9]*$";
            readonly type: "string";
        };
        readonly ytelseType: {
            readonly enum: readonly ["DAG", "FRISINN", "SP", "PSB", "PPN", "OMP", "OMP_KS", "OMP_MA", "OMP_AO", "OLP", "AAP", "ES", "FP", "SVP", "EF", "OBSOLETE", "-"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["brukerAktørId", "saksnummer", "ytelseType"];
    readonly type: "object";
};
export declare const $HentSisteGyldigeVedtakForAktørInputDto: {
    readonly properties: {
        readonly pleietrengendeAktørId: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["pleietrengendeAktørId"];
    readonly type: "object";
};
export declare const $HentSøknadPerioderDto: {
    readonly properties: {
        readonly bruker: {
            readonly type: "string";
        };
        readonly pleietrengende: {
            readonly type: "string";
        };
        readonly ytelseType: {
            readonly enum: readonly ["DAG", "FRISINN", "SP", "PSB", "PPN", "OMP", "OMP_KS", "OMP_MA", "OMP_AO", "OLP", "AAP", "ES", "FP", "SVP", "EF", "OBSOLETE", "-"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["bruker", "ytelseType"];
    readonly type: "object";
};
export declare const $InitLinksDto: {
    readonly properties: {
        readonly links: {
            readonly items: {
                readonly $ref: "#/components/schemas/ResourceLink";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly sakLinks: {
            readonly items: {
                readonly $ref: "#/components/schemas/ResourceLink";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $InnloggetAnsattDto: {
    readonly properties: {
        readonly brukernavn: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}\\p{Space}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly funksjonellTid: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly kanBehandleKode6: {
            readonly type: "boolean";
        };
        readonly kanBehandleKode7: {
            readonly type: "boolean";
        };
        readonly kanBehandleKodeEgenAnsatt: {
            readonly type: "boolean";
        };
        readonly kanBeslutte: {
            readonly type: "boolean";
        };
        readonly kanOverstyre: {
            readonly type: "boolean";
        };
        readonly kanSaksbehandle: {
            readonly type: "boolean";
        };
        readonly kanVeilede: {
            readonly type: "boolean";
        };
        readonly navn: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{P}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly skalViseDetaljerteFeilmeldinger: {
            readonly type: "boolean";
        };
    };
    readonly required: readonly ["brukernavn", "funksjonellTid", "navn"];
    readonly type: "object";
};
export declare const $Innsending: {
    readonly properties: {
        readonly innhold: {
            readonly $ref: "#/components/schemas/InnsendingInnhold";
        };
        readonly journalpostId: {
            readonly type: "string";
        };
        readonly kanalReferanse: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[a-zA-Z0-9\\\\/\\.\\:\\-_=]*$";
            readonly type: "string";
        };
        readonly mottattDato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly mottattTidspunkt: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly saksnummer: {
            readonly type: "string";
        };
        readonly type: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["innhold", "mottattTidspunkt", "saksnummer", "type"];
    readonly type: "object";
};
export declare const $InnsendingInnhold: {
    readonly discriminator: {
        readonly propertyName: "ytelseType";
    };
    readonly properties: {
        readonly ytelseType: {
            readonly enum: readonly ["DAG", "FRISINN", "SP", "PSB", "PPN", "OMP", "OMP_KS", "OMP_MA", "OMP_AO", "OLP", "AAP", "ES", "FP", "SVP", "EF", "OBSOLETE", "-"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["ytelseType"];
    readonly type: "object";
};
export declare const $InnsendingMottatt: {
    readonly properties: {
        readonly saksnummer: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["saksnummer"];
    readonly type: "object";
};
export declare const $InntektArbeidYtelseArbeidsforholdV2Dto: {
    readonly properties: {
        readonly aksjonspunktÅrsaker: {
            readonly items: {
                readonly enum: readonly ["MANGLENDE_INNTEKTSMELDING", "INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD", "OVERGANG_ARBEIDSFORHOLDS_ID_UNDER_YTELSE"];
                readonly type: "string";
            };
            readonly type: "array";
            readonly uniqueItems: true;
        };
        readonly arbeidsforhold: {
            readonly $ref: "#/components/schemas/ArbeidsforholdIdDto";
        };
        readonly arbeidsgiver: {
            readonly $ref: "#/components/schemas/Arbeidsgiver";
        };
        readonly begrunnelse: {
            readonly maxLength: 400;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly handlingType: {
            readonly enum: readonly ["-", "BRUK", "LAGT_TIL_AV_SAKSBEHANDLER", "BASERT_PÅ_INNTEKTSMELDING", "BRUK_UTEN_INNTEKTSMELDING", "IKKE_BRUK", "NYTT_ARBEIDSFORHOLD", "SLÅTT_SAMMEN_MED_ANNET", "BRUK_MED_OVERSTYRT_PERIODE", "INNTEKT_IKKE_MED_I_BG"];
            readonly type: "string";
        };
        readonly id: {
            readonly pattern: "^[\\p{Alnum}\\-\\p{Space}\\p{Sc}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly inntektsmeldinger: {
            readonly items: {
                readonly $ref: "#/components/schemas/MottattInntektsmeldingDto";
            };
            readonly type: "array";
            readonly uniqueItems: true;
        };
        readonly kilde: {
            readonly items: {
                readonly enum: readonly ["AA-Registeret", "A-Inntekt", "Inntektsmelding", "Saksbehandler"];
                readonly type: "string";
            };
            readonly type: "array";
            readonly uniqueItems: true;
        };
        readonly perioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/PeriodeDto";
            };
            readonly type: "array";
            readonly uniqueItems: true;
        };
        readonly permisjoner: {
            readonly items: {
                readonly $ref: "#/components/schemas/PermisjonDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly stillingsprosent: {
            readonly exclusiveMaximum: false;
            readonly exclusiveMinimum: false;
            readonly maximum: 500;
            readonly minimum: 0;
            readonly type: "number";
        };
        readonly yrkestittel: {
            readonly maxLength: 400;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["arbeidsgiver", "handlingType", "kilde"];
    readonly type: "object";
};
export declare const $InntektArbeidYtelseGrunnlagDto: {
    readonly properties: {
        readonly arbeidDto: {
            readonly $ref: "#/components/schemas/ArbeidDto";
        };
        readonly arbeidsforholdInformasjon: {
            readonly $ref: "#/components/schemas/ArbeidsforholdInformasjonDto";
        };
        readonly inntekterDto: {
            readonly $ref: "#/components/schemas/InntekterDto";
        };
        readonly inntektsmeldinger: {
            readonly $ref: "#/components/schemas/InntektsmeldingerDto";
        };
        readonly oppgittOpptjening: {
            readonly $ref: "#/components/schemas/OppgittOpptjeningDto";
        };
        readonly ytelserDto: {
            readonly $ref: "#/components/schemas/YtelserDto";
        };
    };
    readonly type: "object";
};
export declare const $InntektDto: {
    readonly properties: {
        readonly belop: {
            readonly format: "int32";
            readonly maximum: 10000000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly fom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly inntektspostType: {
            readonly enum: readonly ["-", "LØNN", "YTELSE", "SELVSTENDIG_NÆRINGSDRIVENDE", "NÆRING_FISKE_FANGST_FAMBARNEHAGE"];
            readonly type: "string";
        };
        readonly navn: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{L}\\p{N}\\p{M}]+$";
            readonly type: "string";
        };
        readonly tom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly utbetaler: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{N}\\p{M}]+$";
            readonly type: "string";
        };
        readonly ytelse: {
            readonly type: "boolean";
        };
    };
    readonly required: readonly ["fom", "tom"];
    readonly type: "object";
};
export declare const $InntekterDto: {
    readonly properties: {
        readonly inntekt: {
            readonly items: {
                readonly $ref: "#/components/schemas/InntektDto";
            };
            readonly maxItems: 200;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["inntekt"];
    readonly type: "object";
};
export declare const $InntektsforholdDto: {
    readonly properties: {
        readonly aktivitetStatus: {
            readonly enum: readonly ["MIDL_INAKTIV", "AAP", "AT", "DP", "SP_AV_DP", "PSB_AV_DP", "FL", "MS", "SN", "AT_FL", "AT_SN", "FL_SN", "AT_FL_SN", "BA", "KUN_YTELSE", "TY", "VENTELØNN_VARTPENGER", "-"];
            readonly type: "string";
        };
        readonly arbeidsforholdId: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly arbeidsgiverId: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly bruttoInntektPrÅr: {
            readonly format: "int32";
            readonly maximum: 178956970;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly eksternArbeidsforholdId: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly inntektFraInntektsmeldingPrÅr: {
            readonly format: "int32";
            readonly maximum: 178956970;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly skalRedusereUtbetaling: {
            readonly type: "boolean";
        };
    };
    readonly required: readonly ["aktivitetStatus", "periode"];
    readonly type: "object";
};
export declare const $InntektsgrunnlagDto: {
    readonly properties: {
        readonly måneder: {
            readonly items: {
                readonly $ref: "#/components/schemas/InntektsgrunnlagMånedDto";
            };
            readonly maxItems: 12;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly pgiGrunnlag: {
            readonly items: {
                readonly $ref: "#/components/schemas/PGIPrÅrDto";
            };
            readonly maxItems: 12;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["måneder", "pgiGrunnlag"];
    readonly type: "object";
};
export declare const $InntektsgrunnlagInntektDto: {
    readonly properties: {
        readonly beløp: {
            readonly type: "number";
        };
        readonly inntektAktivitetType: {
            readonly enum: readonly ["ARBEIDSTAKERINNTEKT", "FRILANSINNTEKT", "YTELSEINNTEKT", "-"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["inntektAktivitetType"];
    readonly type: "object";
};
export declare const $InntektsgrunnlagMånedDto: {
    readonly properties: {
        readonly fom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly inntekter: {
            readonly items: {
                readonly $ref: "#/components/schemas/InntektsgrunnlagInntektDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly tom: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["fom", "tom"];
    readonly type: "object";
};
export declare const $Inntektsmelding: {
    readonly properties: {
        readonly arbeidsforholdId: {
            readonly format: "uuid";
            readonly type: "string";
            readonly writeOnly: true;
        };
        readonly arbeidsforholdRef: {
            readonly format: "uuid";
            readonly type: "string";
        };
        readonly arbeidsgiver: {
            readonly $ref: "#/components/schemas/Arbeidsgiver";
        };
        readonly eksternArbeidsforholdRef: {
            readonly type: "string";
        };
        readonly endringerRefusjon: {
            readonly items: {
                readonly $ref: "#/components/schemas/Refusjon";
            };
            readonly type: "array";
        };
        readonly erNærRelasjon: {
            readonly type: "boolean";
        };
        readonly fagsakYtelseType: {
            readonly enum: readonly ["DAG", "FRISINN", "SP", "PSB", "PPN", "OMP", "OMP_KS", "OMP_MA", "OMP_AO", "OLP", "AAP", "ES", "FP", "SVP", "EF", "OBSOLETE", "-"];
            readonly type: "string";
        };
        readonly graderinger: {
            readonly items: {
                readonly $ref: "#/components/schemas/Gradering";
            };
            readonly type: "array";
        };
        readonly indexKey: {
            readonly type: "string";
        };
        readonly innsendingstidspunkt: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly inntektBeløp: {
            readonly $ref: "#/components/schemas/Beløp";
        };
        readonly inntektsmeldingInnsendingsårsak: {
            readonly enum: readonly ["NY", "ENDRING", "-"];
            readonly type: "string";
        };
        readonly journalpostId: {
            readonly type: "string";
        };
        readonly kanalreferanse: {
            readonly type: "string";
        };
        readonly kildesystem: {
            readonly type: "string";
        };
        readonly mottattDato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly naturalYtelser: {
            readonly items: {
                readonly $ref: "#/components/schemas/NaturalYtelse";
            };
            readonly type: "array";
        };
        readonly nærRelasjon: {
            readonly type: "boolean";
            readonly writeOnly: true;
        };
        readonly omsorgspengerFravær: {
            readonly items: {
                readonly $ref: "#/components/schemas/PeriodeAndel";
            };
            readonly type: "array";
            readonly writeOnly: true;
        };
        readonly oppgittFravær: {
            readonly items: {
                readonly $ref: "#/components/schemas/PeriodeAndel";
            };
            readonly type: "array";
        };
        readonly refusjonBeløpPerMnd: {
            readonly $ref: "#/components/schemas/Beløp";
        };
        readonly refusjonOpphører: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly startDatoPermisjon: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly utsettelsePerioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/UtsettelsePeriode";
            };
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $InntektsmeldingDto: {
    readonly properties: {
        readonly arbeidsforholdRef: {
            readonly $ref: "#/components/schemas/InternArbeidsforholdRefDto";
        };
        readonly arbeidsgiver: {
            readonly $ref: "#/components/schemas/Aktør";
        };
        readonly endringerRefusjon: {
            readonly items: {
                readonly $ref: "#/components/schemas/RefusjonDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly inntektBeløp: {
            readonly type: "number";
        };
        readonly journalpostId: {
            readonly type: "string";
        };
        readonly naturalYtelser: {
            readonly items: {
                readonly $ref: "#/components/schemas/NaturalYtelseDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly refusjonBeløpPerMnd: {
            readonly type: "number";
        };
        readonly refusjonOpphører: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly startDatoPermisjon: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["arbeidsgiver", "inntektBeløp"];
    readonly type: "object";
};
export declare const $InntektsmeldingVurdering: {
    readonly properties: {
        readonly arbeidsgiver: {
            readonly $ref: "#/components/schemas/ArbeidsgiverArbeidsforholdIdV2";
        };
        readonly eksternReferanse: {
            readonly pattern: "^[\\p{Graph}\\s\\t\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly erstattetAv: {
            readonly items: {
                readonly maxLength: 2147483647;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly førsteFraværsdag: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly journalpostId: {
            readonly type: "string";
        };
        readonly mottatt: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly vurdering: {
            readonly enum: readonly ["I_BRUK", "ERSTATTET_AV_NYERE", "IKKE_RELEVANT", "MANGLER_DATO"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["arbeidsgiver", "eksternReferanse", "erstattetAv", "journalpostId", "mottatt", "vurdering"];
    readonly type: "object";
};
export declare const $InntektsmeldingerDto: {
    readonly properties: {
        readonly inntektsmeldinger: {
            readonly items: {
                readonly $ref: "#/components/schemas/InntektsmeldingDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 1;
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $InntrekkBeslutning: {
    readonly properties: {
        readonly brukInntrekk: {
            readonly type: "boolean";
        };
    };
    readonly type: "object";
};
export declare const $InstitusjonPeriodeDto: {
    readonly properties: {
        readonly institusjon: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly journalpostId: {
            readonly $ref: "#/components/schemas/JournalpostIdDto";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
    };
    readonly required: readonly ["institusjon", "journalpostId", "periode"];
    readonly type: "object";
};
export declare const $InstitusjonVurderingDto: {
    readonly properties: {
        readonly begrunnelse: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly journalpostId: {
            readonly $ref: "#/components/schemas/JournalpostIdDto";
        };
        readonly perioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/Periode";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 1;
            readonly type: "array";
        };
        readonly resultat: {
            readonly enum: readonly ["MÅ_VURDERES", "GODKJENT_MANUELT", "GODKJENT_AUTOMATISK", "IKKE_GODKJENT_MANUELT", "IKKE_GODKJENT_AUTOMATISK"];
            readonly type: "string";
        };
        readonly vurdertAv: {
            readonly maxLength: 20;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly vurdertTidspunkt: {
            readonly format: "date-time";
            readonly type: "string";
        };
    };
    readonly required: readonly ["begrunnelse", "journalpostId", "perioder", "resultat", "vurdertAv", "vurdertTidspunkt"];
    readonly type: "object";
};
export declare const $InstitusjonerDto: {
    readonly properties: {
        readonly perioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/InstitusjonPeriodeDto";
            };
            readonly maxItems: 1000;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly vurderinger: {
            readonly items: {
                readonly $ref: "#/components/schemas/InstitusjonVurderingDto";
            };
            readonly maxItems: 1000;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["perioder", "vurderinger"];
    readonly type: "object";
};
export declare const $InternArbeidsforholdRefDto: {
    readonly properties: {
        readonly abakusReferanse: {
            readonly pattern: "^[\\p{L}\\p{N}_\\.\\-]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["abakusReferanse"];
    readonly type: "object";
};
export declare const $JournalpostIdDto: {
    readonly properties: {
        readonly journalpostId: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["journalpostId"];
    readonly type: "object";
};
export declare const $JournalpostIderDto: {
    readonly properties: {
        readonly journalpostIder: {
            readonly items: {
                readonly $ref: "#/components/schemas/JournalpostIdDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly journalpostIderBarn: {
            readonly items: {
                readonly $ref: "#/components/schemas/JournalpostIdDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $K9FormidlingKodeverkWeb: {
    readonly properties: {
        readonly avsenderApplikasjon: {
            readonly enum: readonly ["K9SAK", "OMSORGSPENGER_RAMMEMELDINGER", "K9KLAGE", "K9PUNSJ", "K9FORDEL"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["avsenderApplikasjon"];
    readonly type: "object";
};
export declare const $K9SakKodeverkArbeidsforhold: {
    readonly properties: {
        readonly aktivitetStatus: {
            readonly enum: readonly ["MIDL_INAKTIV", "AAP", "AT", "DP", "SP_AV_DP", "PSB_AV_DP", "FL", "MS", "SN", "AT_FL", "AT_SN", "FL_SN", "AT_FL_SN", "BA", "IKKE_YRKESAKTIV", "KUN_YTELSE", "TY", "VENTELØNN_VARTPENGER", "-"];
            readonly type: "string";
        };
        readonly arbeidType: {
            readonly enum: readonly ["ETTERLØNN_SLUTTPAKKE", "FORENKLET_OPPGJØRSORDNING", "FRILANSER", "FRILANSER_OPPDRAGSTAKER", "LØNN_UNDER_UTDANNING", "MARITIMT_ARBEIDSFORHOLD", "MILITÆR_ELLER_SIVILTJENESTE", "ORDINÆRT_ARBEIDSFORHOLD", "PENSJON_OG_ANDRE_TYPER_YTELSER_UTEN_ANSETTELSESFORHOLD", "NÆRING", "UTENLANDSK_ARBEIDSFORHOLD", "VENTELØNN_VARTPENGER", "VANLIG", "-"];
            readonly type: "string";
        };
        readonly arbeidskategori: {
            readonly enum: readonly ["FISKER", "ARBEIDSTAKER", "SELVSTENDIG_NÆRINGSDRIVENDE", "KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE", "SJØMANN", "JORDBRUKER", "DAGPENGER", "INAKTIV", "KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER", "KOMBINASJON_ARBEIDSTAKER_OG_FISKER", "FRILANSER", "KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER", "KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER", "DAGMAMMA", "UGYLDIG", "-"];
            readonly type: "string";
        };
        readonly inntektskategori: {
            readonly enum: readonly ["ARBEIDSTAKER", "FRILANSER", "SELVSTENDIG_NÆRINGSDRIVENDE", "DAGPENGER", "ARBEIDSAVKLARINGSPENGER", "SJØMANN", "DAGMAMMA", "JORDBRUKER", "FISKER", "ARBEIDSTAKER_UTEN_FERIEPENGER", "-"];
            readonly type: "string";
        };
        readonly relatertYtelseTilstand: {
            readonly enum: readonly ["ÅPEN", "LØPENDE", "AVSLUTTET", "IKKESTARTET"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["aktivitetStatus", "arbeidType", "arbeidskategori", "inntektskategori", "relatertYtelseTilstand"];
    readonly type: "object";
};
export declare const $K9SakKodeverkBehandling: {
    readonly properties: {
        readonly aksjonspunkt: {
            readonly $ref: "#/components/schemas/K9SakKodeverkBehandlingAksjonspunkt";
        };
        readonly behandlingResultatType: {
            readonly enum: readonly ["IKKE_FASTSATT", "INNVILGET", "DELVIS_INNVILGET", "AVSLÅTT", "OPPHØR", "HENLAGT_SØKNAD_TRUKKET", "HENLAGT_FEILOPPRETTET", "HENLAGT_BRUKER_DØD", "MERGET_OG_HENLAGT", "HENLAGT_SØKNAD_MANGLER", "HENLAGT_MASKINELT", "INNVILGET_ENDRING", "INGEN_ENDRING", "MANGLER_BEREGNINGSREGLER"];
            readonly type: "string";
        };
        readonly behandlingType: {
            readonly enum: readonly ["BT-002", "BT-004", "BT-010", "-"];
            readonly type: "string";
        };
        readonly behandlingÅrsakType: {
            readonly enum: readonly ["RE-MF", "RE-MFIP", "RE-AVAB", "RE-LOV", "RE-RGLF", "RE-FEFAKTA", "RE-PRSSL", "RE-END-FRA-BRUKER", "RE-FRAVÆRKORR-SAKSB", "RE-END-INNTEKTSMELD", "BERØRT-BEHANDLING", "RE-ANNET", "RE-SATS-REGULERING", "RE-ENDRET-FORDELING", "INFOBREV_BEHANDLING", "INFOBREV_OPPHOLD", "RE-KLAG-U-INNTK", "RE-KLAG-M-INNTK", "RE-MDL", "RE-OPTJ", "RE-FRDLING", "RE-INNTK", "RE-DØD", "RE-SRTB", "RE-FRIST", "RE-BER-GRUN", "RE-KLAG-INNH-PGI", "ETTER_KLAGE", "RE-HENDELSE-FØDSEL", "RE-HENDELSE-DØD-F", "RE-HENDELSE-DØD-B", "RE-HENDELSE-DØDFØD", "RE-REGISTEROPPL", "RE-YTELSE", "RE-TILST-YT-INNVIL", "RE-ENDR-BER-GRUN", "RE-TILST-YT-OPPH", "RE_REBEREGN_FP", "RE_ANNEN_SAK", "RE_UTSATT_BEHANDLING", "RE_GJENOPPTAR_UTSATT_BEHANDLING", "RE_ANNEN_SAK_ET", "RE_ANNEN_SAK_NB", "RE_ANNEN_SAK_S", "RE_ANNEN_SAK_NB_ET", "RE_ANNEN_SAK_S_ET", "RE_ANNEN_SAK_S_NB", "RE_ANNEN_SAK_S_ET_NB", "RE_ANNEN_SAK_FP", "UNNT_GENERELL", "REVURDERER_BERØRT_PERIODE", "-"];
            readonly type: "string";
        };
        readonly revurderingVarslingÅrsak: {
            readonly enum: readonly ["BARNIKKEREG", "JOBBFULLTID", "IKKEOPPTJENT", "UTVANDRET", "JOBBUTLAND", "IKKEOPPHOLD", "JOBB6MND", "AKTIVITET", "ANNET"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["aksjonspunkt", "behandlingResultatType", "behandlingType", "behandlingÅrsakType", "revurderingVarslingÅrsak"];
    readonly type: "object";
};
export declare const $K9SakKodeverkBehandlingAksjonspunkt: {
    readonly properties: {
        readonly venteårsak: {
            readonly enum: readonly ["-", "ANKE_OVERSENDT_TIL_TRYGDERETTEN", "ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER", "AVV_DOK", "AVV_IM_MOT_AAREG", "AVV_IM_MOT_SØKNAD_AT", "AVV_SØKNADSPERIODER", "AVV_FODSEL", "AVV_RESPONS_REVURDERING", "FOR_TIDLIG_SOKNAD", "GRADERING_FLERE_ARBEIDSFORHOLD", "REFUSJON_3_MÅNEDER", "SCANN", "UTV_FRIST", "VENT_FEIL_ENDRINGSSØKNAD", "VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG", "VENT_INFOTRYGD", "VENT_INNTEKT_RAPPORTERINGSFRIST", "VENT_MILITÆR_OG_BG_UNDER_3G", "VENT_OPDT_INNTEKTSMELDING", "VENT_OPPTJENING_OPPLYSNINGER", "VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID", "VENT_REGISTERINNHENTING", "VENT_PÅ_SISTE_AAP_MELDEKORT", "VENT_SØKNAD_SENDT_INFORMASJONSBREV", "VENT_TIDLIGERE_BEHANDLING", "VENT_ÅPEN_BEHANDLING", "VENT_MANGL_FUNKSJ_SAKSBEHANDLER", "VENTER_SVAR_PORTEN", "VENTER_SVAR_TEAMS", "ANDRE_INNTEKTSOPPLYSNINGER", "INNTEKTSMELDING", "LEGEERKLÆRING", "MEDISINSKE_OPPLYSNINGER", "ANNET", "VENTER_ETTERLYS_IM", "VENTER_ETTERLYS_IM_VARSEL", "OPPD_ÅPEN_BEH", "VENT_DEKGRAD_REGEL", "VENT_ØKONOMI", "VENT_TILBAKEKREVING", "VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER", "VENT_BEREGNING_TILBAKE_I_TID", "BRUKER_70ÅR_VED_REFUSJON", "VENT_LOVENDRING_8_41", "INGEN_PERIODE_UTEN_YTELSE", "PERIODE_MED_AVSLAG", "MANGLENDE_FUNKSJONALITET", "KORTVARIG_ARBEID", "FRISINN_ATFL_SAMME_ORG", "FRISINN_VARIANT_SN_MED_FL_INNTEKT", "FRISINN_VARIANT_FL_MED_SN_INNTEKT", "FRISINN_VARIANT_NY_FL", "FRISINN_VARIANT_NY_SN_2019", "FRISINN_VARIANT_NY_SN_2020", "FRISINN_VARIANT_KOMBINERT", "FRISINN_VARIANT_KOMBINERT_NY_FL", "FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2019", "FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2020", "FRISINN_VARIANT_KOMBINERT_NY_SN_2019", "FRISINN_VARIANT_KOMBINERT_NY_SN_2020", "FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2019", "FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2020", "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2019", "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2020", "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL", "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2019", "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2020", "FRISINN_VARIANT_ENDRET_INNTEKTSTYPE", "AVV_SOKN_IT_PERIODER", "AVV_SOKN_NAERING", "AVV_SOKN_FRILANS", "DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP", "AAP_DP_SISTE_10_MND_SVP", "FL_SN_IKKE_STOTTET_FOR_SVP"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["venteårsak"];
    readonly type: "object";
};
export declare const $K9SakKodeverkHistorikk: {
    readonly properties: {
        readonly historikkBegrunnelseType: {
            readonly enum: readonly ["-", "SAKSBEH_START_PA_NYTT", "BEH_STARTET_PA_NYTT", "BERORT_BEH_ENDRING_DEKNINGSGRAD", "BERORT_BEH_OPPHOR"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["historikkBegrunnelseType"];
    readonly type: "object";
};
export declare const $K9SakKodeverkMedlem: {
    readonly properties: {
        readonly medlemskapManuellVurderingType: {
            readonly enum: readonly ["-", "MEDLEM", "UNNTAK", "IKKE_RELEVANT", "OPPHOR_PGA_ENDRING_I_TPS"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["medlemskapManuellVurderingType"];
    readonly type: "object";
};
export declare const $K9SakKodeverkOpptjening: {
    readonly properties: {
        readonly opptjeningAktivitetType: {
            readonly enum: readonly ["AAP", "ARBEID", "DAGPENGER", "FORELDREPENGER", "FRILANS", "MILITÆR_ELLER_SIVILTJENESTE", "NÆRING", "OMSORGSPENGER", "OPPLÆRINGSPENGER", "PLEIEPENGER", "ETTERLØNN_SLUTTPAKKE", "SVANGERSKAPSPENGER", "SYKEPENGER", "SYKEPENGER_AV_DAGPENGER", "PLEIEPENGER_AV_DAGPENGER", "VENTELØNN_VARTPENGER", "VIDERE_ETTERUTDANNING", "UTENLANDSK_ARBEIDSFORHOLD", "FRISINN", "UTDANNINGSPERMISJON", "MELLOM_ARBEID", "-"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["opptjeningAktivitetType"];
    readonly type: "object";
};
export declare const $K9SakKodeverkPerson: {
    readonly properties: {
        readonly personstatusType: {
            readonly enum: readonly ["ABNR", "ADNR", "BOSA", "DØD", "DØDD", "FOSV", "FØDR", "UFUL", "UREG", "UTAN", "UTPE", "UTVA", "-"];
            readonly type: "string";
        };
        readonly sivilstandType: {
            readonly enum: readonly ["ENKE", "GIFT", "GJPA", "GLAD", "NULL", "REPA", "SAMB", "SEPA", "SEPR", "SKIL", "SKPA", "UGIF"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["personstatusType", "sivilstandType"];
    readonly type: "object";
};
export declare const $K9SakKodeverkWeb: {
    readonly properties: {
        readonly arbeidsforhold: {
            readonly $ref: "#/components/schemas/K9SakKodeverkArbeidsforhold";
        };
        readonly behandling: {
            readonly $ref: "#/components/schemas/K9SakKodeverkBehandling";
        };
        readonly fagsystem: {
            readonly enum: readonly ["K9SAK", "FPSAK", "TPS", "VLSP", "JOARK", "INFOTRYGD", "ARENA", "INNTEKT", "MEDL", "GOSYS", "ENHETSREGISTERET", "AAREGISTERET", "-"];
            readonly type: "string";
        };
        readonly historikk: {
            readonly $ref: "#/components/schemas/K9SakKodeverkHistorikk";
        };
        readonly iaygrunnlag: {
            readonly $ref: "#/components/schemas/AbakusKodeverkIaygrunnlag";
        };
        readonly medlem: {
            readonly $ref: "#/components/schemas/K9SakKodeverkMedlem";
        };
        readonly opptjening: {
            readonly $ref: "#/components/schemas/K9SakKodeverkOpptjening";
        };
        readonly person: {
            readonly $ref: "#/components/schemas/K9SakKodeverkPerson";
        };
    };
    readonly required: readonly ["arbeidsforhold", "behandling", "fagsystem", "historikk", "iaygrunnlag", "medlem", "opptjening", "person"];
    readonly type: "object";
};
export declare const $KalkulatorInputDto: {
    readonly properties: {
        readonly iayGrunnlag: {
            readonly $ref: "#/components/schemas/InntektArbeidYtelseGrunnlagDto";
        };
        readonly opptjeningAktiviteter: {
            readonly $ref: "#/components/schemas/OpptjeningAktiviteterDto";
        };
        readonly refusjonskravDatoer: {
            readonly items: {
                readonly $ref: "#/components/schemas/RefusjonskravDatoDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly refusjonskravPrArbeidsgiver: {
            readonly items: {
                readonly $ref: "#/components/schemas/KravperioderPrArbeidsforhold";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly skjæringstidspunkt: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly ytelsespesifiktGrunnlag: {
            readonly $ref: "#/components/schemas/YtelsespesifiktGrunnlagDto";
        };
    };
    readonly required: readonly ["iayGrunnlag", "opptjeningAktiviteter", "skjæringstidspunkt"];
    readonly type: "object";
};
export declare const $KalkulatorInputPrVilkårperiodeDto: {
    readonly properties: {
        readonly kalkulatorInput: {
            readonly $ref: "#/components/schemas/KalkulatorInputDto";
        };
        readonly vilkårPeriode: {
            readonly $ref: "#/components/schemas/DatoIntervallEntitet";
        };
    };
    readonly required: readonly ["kalkulatorInput", "vilkårPeriode"];
    readonly type: "object";
};
export declare const $KompletthetsTilstandPåPeriodeDto: {
    readonly properties: {
        readonly begrunnelse: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly periode: {
            readonly type: "string";
        };
        readonly status: {
            readonly items: {
                readonly $ref: "#/components/schemas/ArbeidsgiverArbeidsforholdStatus";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly tilVurdering: {
            readonly type: "boolean";
        };
        readonly vurdering: {
            readonly enum: readonly ["UDEFINERT", "KAN_FORTSETTE", "MANGLENDE_GRUNNLAG", "UAVKLART"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["periode", "status", "tilVurdering"];
    readonly type: "object";
};
export declare const $KompletthetsTilstandPåPeriodeV2Dto: {
    readonly properties: {
        readonly begrunnelse: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly periode: {
            readonly type: "string";
        };
        readonly status: {
            readonly items: {
                readonly $ref: "#/components/schemas/ArbeidsgiverArbeidsforholdStatusV2";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly tilVurdering: {
            readonly type: "boolean";
        };
        readonly vurdering: {
            readonly enum: readonly ["UDEFINERT", "KAN_FORTSETTE", "MANGLENDE_GRUNNLAG", "UAVKLART"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["periode", "status", "tilVurdering"];
    readonly type: "object";
};
export declare const $KompletthetsVurderingDto: {
    readonly properties: {
        readonly tilstand: {
            readonly items: {
                readonly $ref: "#/components/schemas/KompletthetsTilstandPåPeriodeDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["tilstand"];
    readonly type: "object";
};
export declare const $KompletthetsVurderingV2Dto: {
    readonly properties: {
        readonly tilstand: {
            readonly items: {
                readonly $ref: "#/components/schemas/KompletthetsTilstandPåPeriodeV2Dto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["tilstand"];
    readonly type: "object";
};
export declare const $KoronaOverføringFår: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/Rammevedtak";
    }, {
        readonly properties: {
            readonly avsender: {
                readonly type: "string";
            };
            readonly gyldigFraOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly gyldigTilOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly lengde: {
                readonly properties: {
                    readonly nano: {
                        readonly format: "int32";
                        readonly type: "integer";
                    };
                    readonly negative: {
                        readonly type: "boolean";
                    };
                    readonly positive: {
                        readonly type: "boolean";
                    };
                    readonly seconds: {
                        readonly format: "int64";
                        readonly type: "integer";
                    };
                    readonly units: {
                        readonly items: {
                            readonly properties: {
                                readonly dateBased: {
                                    readonly type: "boolean";
                                };
                                readonly duration: {
                                    readonly properties: {
                                        readonly nano: {
                                            readonly format: "int32";
                                            readonly type: "integer";
                                        };
                                        readonly negative: {
                                            readonly type: "boolean";
                                        };
                                        readonly positive: {
                                            readonly type: "boolean";
                                        };
                                        readonly seconds: {
                                            readonly format: "int64";
                                            readonly type: "integer";
                                        };
                                        readonly zero: {
                                            readonly type: "boolean";
                                        };
                                    };
                                    readonly type: "object";
                                };
                                readonly durationEstimated: {
                                    readonly type: "boolean";
                                };
                                readonly timeBased: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly zero: {
                        readonly type: "boolean";
                    };
                };
                readonly type: "object";
            };
            readonly vedtatt: {
                readonly format: "date";
                readonly type: "string";
            };
        };
        readonly type: "object";
    }];
    readonly type: "object";
};
export declare const $KoronaOverføringGir: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/Rammevedtak";
    }, {
        readonly properties: {
            readonly gyldigFraOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly gyldigTilOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly lengde: {
                readonly properties: {
                    readonly nano: {
                        readonly format: "int32";
                        readonly type: "integer";
                    };
                    readonly negative: {
                        readonly type: "boolean";
                    };
                    readonly positive: {
                        readonly type: "boolean";
                    };
                    readonly seconds: {
                        readonly format: "int64";
                        readonly type: "integer";
                    };
                    readonly units: {
                        readonly items: {
                            readonly properties: {
                                readonly dateBased: {
                                    readonly type: "boolean";
                                };
                                readonly duration: {
                                    readonly properties: {
                                        readonly nano: {
                                            readonly format: "int32";
                                            readonly type: "integer";
                                        };
                                        readonly negative: {
                                            readonly type: "boolean";
                                        };
                                        readonly positive: {
                                            readonly type: "boolean";
                                        };
                                        readonly seconds: {
                                            readonly format: "int64";
                                            readonly type: "integer";
                                        };
                                        readonly zero: {
                                            readonly type: "boolean";
                                        };
                                    };
                                    readonly type: "object";
                                };
                                readonly durationEstimated: {
                                    readonly type: "boolean";
                                };
                                readonly timeBased: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly zero: {
                        readonly type: "boolean";
                    };
                };
                readonly type: "object";
            };
            readonly mottaker: {
                readonly type: "string";
            };
            readonly vedtatt: {
                readonly format: "date";
                readonly type: "string";
            };
        };
        readonly type: "object";
    }];
    readonly type: "object";
};
export declare const $KortvarigeArbeidsforholdDto: {
    readonly properties: {
        readonly aktivitetStatus: {
            readonly enum: readonly ["MIDL_INAKTIV", "AAP", "AT", "DP", "SP_AV_DP", "PSB_AV_DP", "FL", "MS", "SN", "AT_FL", "AT_SN", "FL_SN", "AT_FL_SN", "BA", "KUN_YTELSE", "TY", "VENTELØNN_VARTPENGER", "-"];
            readonly type: "string";
        };
        readonly andelIArbeid: {
            readonly items: {
                readonly maximum: 100;
                readonly minimum: 0;
                readonly type: "number";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly andelsnr: {
            readonly format: "int64";
            readonly maximum: 1000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly arbeidsforhold: {
            readonly $ref: "#/components/schemas/BeregningsgrunnlagArbeidsforholdDto";
        };
        readonly erTidsbegrensetArbeidsforhold: {
            readonly type: "boolean";
        };
        readonly fastsattAvSaksbehandler: {
            readonly type: "boolean";
        };
        readonly inntektskategori: {
            readonly enum: readonly ["ARBEIDSTAKER", "FRILANSER", "SELVSTENDIG_NÆRINGSDRIVENDE", "DAGPENGER", "ARBEIDSAVKLARINGSPENGER", "SJØMANN", "DAGMAMMA", "JORDBRUKER", "FISKER", "ARBEIDSTAKER_UTEN_FERIEPENGER", "-"];
            readonly type: "string";
        };
        readonly kilde: {
            readonly enum: readonly ["SAKSBEHANDLER_KOFAKBER", "PROSESS_BESTEBEREGNING", "SAKSBEHANDLER_FORDELING", "PROSESS_PERIODISERING", "PROSESS_OMFORDELING", "PROSESS_START", "PROSESS_PERIODISERING_TILKOMMET_INNTEKT"];
            readonly type: "string";
        };
        readonly lagtTilAvSaksbehandler: {
            readonly type: "boolean";
        };
    };
    readonly required: readonly ["aktivitetStatus", "andelIArbeid", "andelsnr", "inntektskategori", "kilde"];
    readonly type: "object";
};
export declare const $KravDokumentMedSøktePerioder: {
    readonly properties: {
        readonly innsendingsTidspunkt: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly journalpostId: {
            readonly type: "string";
        };
        readonly kildesystem: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^\\p{L}+$";
            readonly type: "string";
        };
        readonly søktePerioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/SøktPeriode";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly type: {
            readonly enum: readonly ["INNTEKTSMELDING", "SØKNAD"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["innsendingsTidspunkt", "type"];
    readonly type: "object";
};
export declare const $KravDokumentStatus: {
    readonly properties: {
        readonly avklarteOpplysninger: {
            readonly $ref: "#/components/schemas/AvklarteOpplysninger";
        };
        readonly innsendingstidspunkt: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly journalpostId: {
            readonly type: "string";
        };
        readonly overstyrteOpplysninger: {
            readonly $ref: "#/components/schemas/AvklarteOpplysninger";
        };
        readonly status: {
            readonly items: {
                readonly $ref: "#/components/schemas/SøknadsfristPeriodeDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly type: {
            readonly enum: readonly ["INNTEKTSMELDING", "SØKNAD"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["journalpostId"];
    readonly type: "object";
};
export declare const $KravperioderPrArbeidsforhold: {
    readonly properties: {
        readonly alleSøktePerioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/PerioderForKrav";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 1;
            readonly type: "array";
        };
        readonly arbeidsgiver: {
            readonly $ref: "#/components/schemas/Aktør";
        };
        readonly internreferanse: {
            readonly $ref: "#/components/schemas/InternArbeidsforholdRefDto";
        };
        readonly sisteSøktePerioder: {
            readonly $ref: "#/components/schemas/PerioderForKrav";
        };
    };
    readonly required: readonly ["alleSøktePerioder", "arbeidsgiver", "sisteSøktePerioder"];
    readonly type: "object";
};
export declare const $KunYtelseDto: {
    readonly properties: {
        readonly andeler: {
            readonly items: {
                readonly $ref: "#/components/schemas/AndelMedBeløpDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly erBesteberegning: {
            readonly type: "boolean";
        };
        readonly fodendeKvinneMedDP: {
            readonly type: "boolean";
        };
    };
    readonly type: "object";
};
export declare const $KvoteInfo: {
    readonly properties: {
        readonly maxDato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly totaltForbruktKvote: {
            readonly type: "number";
        };
    };
    readonly type: "object";
};
export declare const $Landkoder: {
    readonly properties: {
        readonly kode: {
            readonly type: "string";
        };
        readonly kodeverk: {
            readonly readOnly: true;
            readonly type: "string";
        };
        readonly navn: {
            readonly readOnly: true;
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $LocalDateInterval: {
    readonly properties: {
        readonly closedInterval: {
            readonly type: "boolean";
        };
        readonly fomDato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly openEnd: {
            readonly type: "boolean";
        };
        readonly openStart: {
            readonly type: "boolean";
        };
        readonly tomDato: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $LocalDateTimelineVilkårUtfallSamlet: {
    readonly properties: {
        readonly continuous: {
            readonly type: "boolean";
        };
        readonly datoIntervaller: {
            readonly items: {
                readonly $ref: "#/components/schemas/LocalDateInterval";
            };
            readonly type: "array";
        };
        readonly empty: {
            readonly type: "boolean";
        };
        readonly localDateIntervals: {
            readonly items: {
                readonly $ref: "#/components/schemas/LocalDateInterval";
            };
            readonly type: "array";
        };
        readonly maxLocalDate: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly minLocalDate: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $LosOpplysningerSomManglerIKlageDto: {
    readonly properties: {
        readonly pleietrengendeAktørId: {
            readonly type: "string";
        };
        readonly utenlandstilsnitt: {
            readonly type: "boolean";
        };
    };
    readonly type: "object";
};
export declare const $LønnsendringSaksopplysningDto: {
    readonly properties: {
        readonly arbeidsforhold: {
            readonly $ref: "#/components/schemas/ArbeidsforholdDto";
        };
        readonly lønnsendringscenario: {
            readonly enum: readonly ["MANUELT_BEHANDLET", "DELVIS_MÅNEDSINNTEKT_SISTE_MND", "FULL_MÅNEDSINNTEKT_EN_MND", "FULL_MÅNEDSINNTEKT_TO_MND"];
            readonly type: "string";
        };
        readonly sisteLønnsendringsdato: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["arbeidsforhold", "lønnsendringscenario", "sisteLønnsendringsdato"];
    readonly type: "object";
};
export declare const $ManglendeArbeidstidDto: {
    readonly properties: {
        readonly mangler: {
            readonly items: {
                readonly $ref: "#/components/schemas/ArbeidsgiverMedPerioderSomManglerDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $ManglendeVedleggDto: {
    readonly properties: {
        readonly arbeidsgiver: {
            readonly $ref: "#/components/schemas/ArbeidsgiverDto";
        };
        readonly brukerHarSagtAtIkkeKommer: {
            readonly type: "boolean";
        };
        readonly dokumentType: {
            readonly enum: readonly ["INNTEKTSMELDING", "LEGEERKLÆRING", "UDEFINERT"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["dokumentType"];
    readonly type: "object";
};
export declare const $MatchFagsak: {
    readonly properties: {
        readonly bruker: {
            readonly type: "string";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly pleietrengendeIdenter: {
            readonly items: {
                readonly maxLength: 20;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly maxItems: 20;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly relatertPersonIdenter: {
            readonly items: {
                readonly maxLength: 20;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly maxItems: 20;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly ytelseType: {
            readonly enum: readonly ["DAG", "FRISINN", "SP", "PSB", "PPN", "OMP", "OMP_KS", "OMP_MA", "OMP_AO", "OLP", "AAP", "ES", "FP", "SVP", "EF", "OBSOLETE", "-"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["ytelseType"];
    readonly type: "object";
};
export declare const $MedlemPeriodeDto: {
    readonly properties: {
        readonly aksjonspunkter: {
            readonly items: {
                readonly maxLength: 10;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly maxItems: 10;
            readonly minItems: 0;
            readonly type: "array";
            readonly uniqueItems: true;
        };
        readonly begrunnelse: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{N}\\p{M}]+$";
            readonly type: "string";
        };
        readonly bosattVurdering: {
            readonly type: "boolean";
        };
        readonly erEosBorger: {
            readonly type: "boolean";
        };
        readonly lovligOppholdVurdering: {
            readonly type: "boolean";
        };
        readonly medlemskapManuellVurderingType: {
            readonly enum: readonly ["-", "MEDLEM", "UNNTAK", "IKKE_RELEVANT", "OPPHOR_PGA_ENDRING_I_TPS"];
            readonly type: "string";
        };
        readonly oppholdsrettVurdering: {
            readonly type: "boolean";
        };
        readonly personopplysninger: {
            readonly $ref: "#/components/schemas/PersonopplysningDto";
        };
        readonly vurderingsdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly vurdertAv: {
            readonly maxLength: 20;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly vurdertTidspunkt: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly årsaker: {
            readonly items: {
                readonly enum: readonly ["SKJÆRINGSTIDSPUNKT", "STATSBORGERSKAP", "ADRESSE", "PERSONSTATUS", "MEDL_PERIODE", "BORTFALL_INNTEKT", "ENDRING_I_REGISTERDATA"];
                readonly maxLength: 10;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly maxItems: 10;
            readonly minItems: 0;
            readonly type: "array";
            readonly uniqueItems: true;
        };
    };
    readonly required: readonly ["personopplysninger"];
    readonly type: "object";
};
export declare const $MedlemV2Dto: {
    readonly properties: {
        readonly medlemskapPerioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/MedlemskapPerioderDto";
            };
            readonly maxItems: 200;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly perioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/MedlemPeriodeDto";
            };
            readonly maxItems: 200;
            readonly minItems: 0;
            readonly type: "array";
            readonly uniqueItems: true;
        };
    };
    readonly type: "object";
};
export declare const $MedlemskapPerioderDto: {
    readonly properties: {
        readonly beslutningsdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly dekningType: {
            readonly enum: readonly ["FTL_2_6", "FTL_2_7_a", "FTL_2_7_b", "FTL_2_9_1_a", "FTL_2_9_1_b", "FTL_2_9_1_c", "FTL_2_9_2_a", "FTL_2_9_2_c", "FULL", "IHT_AVTALE", "OPPHOR", "UNNTATT", "UDEFINERT"];
            readonly type: "string";
        };
        readonly fom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly kildeType: {
            readonly enum: readonly ["E500", "INFOTR", "AVGSYS", "APPBRK", "PP01", "FS22", "SRVGOSYS", "SRVMELOSYS", "MEDL", "TPS", "TP", "LAANEKASSEN", "ANNEN", "UDEFINERT"];
            readonly type: "string";
        };
        readonly medlemskapType: {
            readonly enum: readonly ["ENDELIG", "FORELOPIG", "UNDER_AVKLARING", "UDEFINERT"];
            readonly type: "string";
        };
        readonly tom: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["dekningType", "fom", "kildeType", "medlemskapType", "tom"];
    readonly type: "object";
};
export declare const $MerknadEndretDto: {
    readonly properties: {
        readonly behandlingUuid: {
            readonly format: "uuid";
            readonly type: "string";
        };
        readonly fritekst: {
            readonly maxLength: 500;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Pd}\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]*$";
            readonly type: "string";
        };
        readonly merknadKoder: {
            readonly items: {
                readonly maxLength: 10;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly maxItems: 10;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly saksbehandlerIdent: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}-]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["behandlingUuid"];
    readonly type: "object";
};
export declare const $MidlertidigAleneOmOmsorgen: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/Rammevedtak";
    }, {
        readonly properties: {
            readonly gyldigFraOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly gyldigTilOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly lengde: {
                readonly properties: {
                    readonly nano: {
                        readonly format: "int32";
                        readonly type: "integer";
                    };
                    readonly negative: {
                        readonly type: "boolean";
                    };
                    readonly positive: {
                        readonly type: "boolean";
                    };
                    readonly seconds: {
                        readonly format: "int64";
                        readonly type: "integer";
                    };
                    readonly units: {
                        readonly items: {
                            readonly properties: {
                                readonly dateBased: {
                                    readonly type: "boolean";
                                };
                                readonly duration: {
                                    readonly properties: {
                                        readonly nano: {
                                            readonly format: "int32";
                                            readonly type: "integer";
                                        };
                                        readonly negative: {
                                            readonly type: "boolean";
                                        };
                                        readonly positive: {
                                            readonly type: "boolean";
                                        };
                                        readonly seconds: {
                                            readonly format: "int64";
                                            readonly type: "integer";
                                        };
                                        readonly zero: {
                                            readonly type: "boolean";
                                        };
                                    };
                                    readonly type: "object";
                                };
                                readonly durationEstimated: {
                                    readonly type: "boolean";
                                };
                                readonly timeBased: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly zero: {
                        readonly type: "boolean";
                    };
                };
                readonly type: "object";
            };
            readonly vedtatt: {
                readonly format: "date";
                readonly type: "string";
            };
        };
        readonly type: "object";
    }];
    readonly type: "object";
};
export declare const $MigrerFraInfotrygdDto: {
    readonly properties: {
        readonly saksnummer: {
            readonly maxLength: 19;
            readonly minLength: 0;
            readonly pattern: "^[a-zA-Z0-9]*$";
            readonly type: "string";
        };
        readonly skjæringstidspunkt: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["saksnummer", "skjæringstidspunkt"];
    readonly type: "object";
};
export declare const $MigrertSkjæringstidspunktDto: {
    readonly properties: {
        readonly erAktiv: {
            readonly type: "boolean";
        };
        readonly skjæringstidspunkt: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["erAktiv", "skjæringstidspunkt"];
    readonly type: "object";
};
export declare const $MottakerDto: {
    readonly properties: {
        readonly id: {
            readonly maxLength: 20;
            readonly minLength: 0;
            readonly pattern: "^\\d+$";
            readonly type: "string";
        };
        readonly type: {
            readonly pattern: "^[\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["id", "type"];
    readonly type: "object";
};
export declare const $MottattInntektsmeldingDto: {
    readonly properties: {
        readonly begrunnelse: {
            readonly maxLength: 400;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly journalpostId: {
            readonly type: "string";
        };
        readonly mottattTidspunkt: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly status: {
            readonly enum: readonly ["MOTTATT", "BEHANDLER", "GYLDIG", "HENLAGT", "UGYLDIG"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["journalpostId", "mottattTidspunkt", "status"];
    readonly type: "object";
};
export declare const $NattevåkDto: {
    readonly properties: {
        readonly beskrivelser: {
            readonly items: {
                readonly $ref: "#/components/schemas/BeskrivelseDto";
            };
            readonly maxItems: 1000;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly vurderinger: {
            readonly items: {
                readonly $ref: "#/components/schemas/VurderingDto";
            };
            readonly maxItems: 1000;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $NaturalYtelse: {
    readonly properties: {
        readonly beloepPerMnd: {
            readonly $ref: "#/components/schemas/Beløp";
        };
        readonly indexKey: {
            readonly type: "string";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/DatoIntervallEntitet";
        };
        readonly type: {
            readonly enum: readonly ["ELEKTRISK_KOMMUNIKASJON", "AKSJER_UNDERKURS", "LOSJI", "KOST_DOEGN", "BESOEKSREISER_HJEM", "KOSTBESPARELSE_HJEM", "RENTEFORDEL_LAAN", "BIL", "KOST_DAGER", "BOLIG", "FORSIKRINGER", "FRI_TRANSPORT", "OPSJONER", "TILSKUDD_BARNEHAGE", "ANNET", "BEDRIFTSBARNEHAGE", "YRKESBIL_KILOMETER", "YRKESBIL_LISTEPRIS", "UTENLANDSK_PENSJONSORDNING", "-"];
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $NaturalYtelseDto: {
    readonly properties: {
        readonly beløp: {
            readonly type: "number";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly type: {
            readonly enum: readonly ["ELEKTRISK_KOMMUNIKASJON", "AKSJER_UNDERKURS", "LOSJI", "KOST_DOEGN", "BESOEKSREISER_HJEM", "KOSTBESPARELSE_HJEM", "RENTEFORDEL_LAAN", "BIL", "KOST_DAGER", "BOLIG", "FORSIKRINGER", "FRI_TRANSPORT", "OPSJONER", "TILSKUDD_BARNEHAGE", "ANNET", "BEDRIFTSBARNEHAGE", "YRKESBIL_KILOMETER", "YRKESBIL_LISTEPRIS", "UTENLANDSK_PENSJONSORDNING", "-"];
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $NyBehandlingDto: {
    readonly properties: {
        readonly behandlingArsakType: {
            readonly enum: readonly ["RE-MF", "RE-MFIP", "RE-AVAB", "RE-LOV", "RE-RGLF", "RE-FEFAKTA", "RE-PRSSL", "RE-END-FRA-BRUKER", "RE-FRAVÆRKORR-SAKSB", "RE-END-INNTEKTSMELD", "BERØRT-BEHANDLING", "RE-ANNET", "RE-SATS-REGULERING", "RE-ENDRET-FORDELING", "INFOBREV_BEHANDLING", "INFOBREV_OPPHOLD", "RE-KLAG-U-INNTK", "RE-KLAG-M-INNTK", "RE-MDL", "RE-OPTJ", "RE-FRDLING", "RE-INNTK", "RE-DØD", "RE-SRTB", "RE-FRIST", "RE-BER-GRUN", "RE-KLAG-INNH-PGI", "ETTER_KLAGE", "RE-HENDELSE-FØDSEL", "RE-HENDELSE-DØD-F", "RE-HENDELSE-DØD-B", "RE-HENDELSE-DØDFØD", "RE-REGISTEROPPL", "RE-YTELSE", "RE-TILST-YT-INNVIL", "RE-ENDR-BER-GRUN", "RE-TILST-YT-OPPH", "RE_REBEREGN_FP", "RE_ANNEN_SAK", "RE_UTSATT_BEHANDLING", "RE_GJENOPPTAR_UTSATT_BEHANDLING", "RE_ANNEN_SAK_ET", "RE_ANNEN_SAK_NB", "RE_ANNEN_SAK_S", "RE_ANNEN_SAK_NB_ET", "RE_ANNEN_SAK_S_ET", "RE_ANNEN_SAK_S_NB", "RE_ANNEN_SAK_S_ET_NB", "RE_ANNEN_SAK_FP", "UNNT_GENERELL", "REVURDERER_BERØRT_PERIODE", "-"];
            readonly type: "string";
        };
        readonly behandlingType: {
            readonly enum: readonly ["BT-002", "BT-004", "BT-010", "-"];
            readonly type: "string";
        };
        readonly nyBehandlingEtterKlage: {
            readonly type: "boolean";
        };
        readonly saksnummer: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["behandlingArsakType", "behandlingType", "saksnummer"];
    readonly type: "object";
};
export declare const $NyPeriodeDto: {
    readonly properties: {
        readonly erGradering: {
            readonly type: "boolean";
        };
        readonly erRefusjon: {
            readonly type: "boolean";
        };
        readonly erSøktYtelse: {
            readonly type: "boolean";
        };
        readonly fom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly tom: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $NødvendigOpplæringDto: {
    readonly properties: {
        readonly perioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/NødvendighetPeriodeDto";
            };
            readonly maxItems: 1000;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly vurderinger: {
            readonly items: {
                readonly $ref: "#/components/schemas/NødvendighetVurderingDto";
            };
            readonly maxItems: 1000;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["perioder", "vurderinger"];
    readonly type: "object";
};
export declare const $NødvendighetPeriodeDto: {
    readonly properties: {
        readonly journalpostId: {
            readonly $ref: "#/components/schemas/JournalpostIdDto";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
    };
    readonly required: readonly ["journalpostId", "periode"];
    readonly type: "object";
};
export declare const $NødvendighetVurderingDto: {
    readonly properties: {
        readonly begrunnelse: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly journalpostId: {
            readonly $ref: "#/components/schemas/JournalpostIdDto";
        };
        readonly perioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/Periode";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 1;
            readonly type: "array";
        };
        readonly resultat: {
            readonly enum: readonly ["MÅ_VURDERES", "GODKJENT", "IKKE_GODKJENT"];
            readonly type: "string";
        };
        readonly tilknyttedeDokumenter: {
            readonly items: {
                readonly maxLength: 100;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly vurdertAv: {
            readonly maxLength: 20;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly vurdertTidspunkt: {
            readonly format: "date-time";
            readonly type: "string";
        };
    };
    readonly required: readonly ["begrunnelse", "journalpostId", "perioder", "resultat", "tilknyttedeDokumenter", "vurdertAv", "vurdertTidspunkt"];
    readonly type: "object";
};
export declare const $Nøkkeltall: {
    readonly properties: {
        readonly antallDagerArbeidsgiverDekker: {
            readonly type: "number";
        };
        readonly antallDagerFraværRapporterSomNyoppstaret: {
            readonly type: "number";
        };
        readonly antallDagerFraværRapportertSomNyoppstartet: {
            readonly type: "number";
        };
        readonly antallDagerInfotrygd: {
            readonly type: "number";
        };
        readonly antallForbrukteDager: {
            readonly type: "number";
        };
        readonly antallKoronadager: {
            readonly type: "number";
        };
        readonly forbruktTid: {
            readonly properties: {
                readonly nano: {
                    readonly format: "int32";
                    readonly type: "integer";
                };
                readonly negative: {
                    readonly type: "boolean";
                };
                readonly positive: {
                    readonly type: "boolean";
                };
                readonly seconds: {
                    readonly format: "int64";
                    readonly type: "integer";
                };
                readonly units: {
                    readonly items: {
                        readonly properties: {
                            readonly dateBased: {
                                readonly type: "boolean";
                            };
                            readonly duration: {
                                readonly properties: {
                                    readonly nano: {
                                        readonly format: "int32";
                                        readonly type: "integer";
                                    };
                                    readonly negative: {
                                        readonly type: "boolean";
                                    };
                                    readonly positive: {
                                        readonly type: "boolean";
                                    };
                                    readonly seconds: {
                                        readonly format: "int64";
                                        readonly type: "integer";
                                    };
                                    readonly zero: {
                                        readonly type: "boolean";
                                    };
                                };
                                readonly type: "object";
                            };
                            readonly durationEstimated: {
                                readonly type: "boolean";
                            };
                            readonly timeBased: {
                                readonly type: "boolean";
                            };
                        };
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly zero: {
                    readonly type: "boolean";
                };
            };
            readonly type: "object";
        };
        readonly migrertData: {
            readonly type: "boolean";
        };
        readonly restTid: {
            readonly properties: {
                readonly nano: {
                    readonly format: "int32";
                    readonly type: "integer";
                };
                readonly negative: {
                    readonly type: "boolean";
                };
                readonly positive: {
                    readonly type: "boolean";
                };
                readonly seconds: {
                    readonly format: "int64";
                    readonly type: "integer";
                };
                readonly units: {
                    readonly items: {
                        readonly properties: {
                            readonly dateBased: {
                                readonly type: "boolean";
                            };
                            readonly duration: {
                                readonly properties: {
                                    readonly nano: {
                                        readonly format: "int32";
                                        readonly type: "integer";
                                    };
                                    readonly negative: {
                                        readonly type: "boolean";
                                    };
                                    readonly positive: {
                                        readonly type: "boolean";
                                    };
                                    readonly seconds: {
                                        readonly format: "int64";
                                        readonly type: "integer";
                                    };
                                    readonly zero: {
                                        readonly type: "boolean";
                                    };
                                };
                                readonly type: "object";
                            };
                            readonly durationEstimated: {
                                readonly type: "boolean";
                            };
                            readonly timeBased: {
                                readonly type: "boolean";
                            };
                        };
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly zero: {
                    readonly type: "boolean";
                };
            };
            readonly type: "object";
        };
        readonly smittevernTid: {
            readonly properties: {
                readonly nano: {
                    readonly format: "int32";
                    readonly type: "integer";
                };
                readonly negative: {
                    readonly type: "boolean";
                };
                readonly positive: {
                    readonly type: "boolean";
                };
                readonly seconds: {
                    readonly format: "int64";
                    readonly type: "integer";
                };
                readonly units: {
                    readonly items: {
                        readonly properties: {
                            readonly dateBased: {
                                readonly type: "boolean";
                            };
                            readonly duration: {
                                readonly properties: {
                                    readonly nano: {
                                        readonly format: "int32";
                                        readonly type: "integer";
                                    };
                                    readonly negative: {
                                        readonly type: "boolean";
                                    };
                                    readonly positive: {
                                        readonly type: "boolean";
                                    };
                                    readonly seconds: {
                                        readonly format: "int64";
                                        readonly type: "integer";
                                    };
                                    readonly zero: {
                                        readonly type: "boolean";
                                    };
                                };
                                readonly type: "object";
                            };
                            readonly durationEstimated: {
                                readonly type: "boolean";
                            };
                            readonly timeBased: {
                                readonly type: "boolean";
                            };
                        };
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly zero: {
                    readonly type: "boolean";
                };
            };
            readonly type: "object";
        };
        readonly totaltAntallDager: {
            readonly type: "number";
        };
    };
    readonly type: "object";
};
export declare const $OmsorgenForDto: {
    readonly properties: {
        readonly begrunnelse: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly readOnly: {
            readonly type: "boolean";
        };
        readonly relasjon: {
            readonly enum: readonly ["MOR", "MEDMOR", "FAR", "FOSTERFORELDER", "ANNET"];
            readonly type: "string";
        };
        readonly relasjonsbeskrivelse: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly resultat: {
            readonly enum: readonly ["OPPFYLT", "IKKE_OPPFYLT", "IKKE_VURDERT"];
            readonly type: "string";
        };
        readonly resultatEtterAutomatikk: {
            readonly enum: readonly ["OPPFYLT", "IKKE_OPPFYLT", "IKKE_VURDERT"];
            readonly type: "string";
        };
        readonly vurdertAv: {
            readonly maxLength: 20;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly vurdertTidspunkt: {
            readonly format: "date-time";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $OmsorgenForOversiktDto: {
    readonly properties: {
        readonly kanLøseAksjonspunkt: {
            readonly type: "boolean";
        };
        readonly omsorgsperioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/OmsorgenForDto";
            };
            readonly maxItems: 1000;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly registrertForeldrerelasjon: {
            readonly type: "boolean";
        };
        readonly registrertSammeBosted: {
            readonly type: "boolean";
        };
        readonly sammeBosted: {
            readonly type: "boolean";
        };
        readonly tvingManuellVurdering: {
            readonly type: "boolean";
        };
    };
    readonly type: "object";
};
export declare const $OmsorgspengeGrunnlagDto: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/YtelsespesifiktGrunnlagDto";
    }, {
        readonly properties: {
            readonly skalAvviksvurdere: {
                readonly type: "boolean";
            };
        };
        readonly type: "object";
    }];
    readonly type: "object";
};
export declare const $OmsorgspengerGrunnlag: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/YtelsespesifiktGrunnlagDto";
    }, {
        readonly properties: {
            readonly søktePerioder: {
                readonly items: {
                    readonly $ref: "#/components/schemas/SøktPeriode";
                };
                readonly maxItems: 365;
                readonly minItems: 0;
                readonly type: "array";
            };
            readonly utbetalingsgradPrAktivitet: {
                readonly items: {
                    readonly $ref: "#/components/schemas/UtbetalingsgradPrAktivitetDto";
                };
                readonly maxItems: 2147483647;
                readonly minItems: 1;
                readonly type: "array";
            };
        };
        readonly type: "object";
    }];
    readonly required: readonly ["utbetalingsgradPrAktivitet"];
    readonly type: "object";
};
export declare const $OppgaveIdDto: {
    readonly properties: {
        readonly verdi: {
            readonly maxLength: 50;
            readonly minLength: 1;
            readonly pattern: "^[\\p{L}\\p{N}_\\.\\-/]+$";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $OppgittArbeidsforholdDto: {
    readonly properties: {
        readonly inntekt: {
            readonly type: "number";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
    };
    readonly required: readonly ["inntekt", "periode"];
    readonly type: "object";
};
export declare const $OppgittEgenNæringDto: {
    readonly properties: {
        readonly aktør: {
            readonly $ref: "#/components/schemas/Aktør";
        };
        readonly begrunnelse: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly bruttoInntekt: {
            readonly type: "number";
        };
        readonly endringDato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly nyIArbeidslivet: {
            readonly type: "boolean";
        };
        readonly nyoppstartet: {
            readonly type: "boolean";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly varigEndring: {
            readonly type: "boolean";
        };
        readonly virksomhetType: {
            readonly enum: readonly ["DAGMAMMA", "FISKE", "FRILANSER", "JORDBRUK_SKOGBRUK", "ANNEN", "-"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["nyIArbeidslivet", "nyoppstartet", "periode", "varigEndring"];
    readonly type: "object";
};
export declare const $OppgittFrilansDto: {
    readonly properties: {
        readonly erNyoppstartet: {
            readonly type: "boolean";
        };
        readonly oppgittFrilansInntekt: {
            readonly items: {
                readonly $ref: "#/components/schemas/OppgittFrilansInntekt";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["erNyoppstartet"];
    readonly type: "object";
};
export declare const $OppgittFrilansInntekt: {
    readonly properties: {
        readonly inntekt: {
            readonly type: "number";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
    };
    readonly required: readonly ["inntekt", "periode"];
    readonly type: "object";
};
export declare const $OppgittFrilansoppdragDto: {
    readonly properties: {
        readonly bruttoInntekt: {
            readonly $ref: "#/components/schemas/Beløp";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/PeriodeDto";
        };
    };
    readonly required: readonly ["bruttoInntekt", "periode"];
    readonly type: "object";
};
export declare const $OppgittOpptjeningDto: {
    readonly properties: {
        readonly egenNæring: {
            readonly items: {
                readonly $ref: "#/components/schemas/OppgittEgenNæringDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly frilans: {
            readonly $ref: "#/components/schemas/OppgittFrilansDto";
        };
        readonly journalpostId: {
            readonly type: "string";
        };
        readonly oppgittArbeidsforhold: {
            readonly items: {
                readonly $ref: "#/components/schemas/OppgittArbeidsforholdDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $OppgittTilknytningDto: {
    readonly properties: {
        readonly utlandsopphold: {
            readonly items: {
                readonly $ref: "#/components/schemas/UtlandsoppholdDto";
            };
            readonly maxItems: 50;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $OppgittUttakDto: {
    readonly properties: {
        readonly aktiviteter: {
            readonly items: {
                readonly $ref: "#/components/schemas/UttakAktivitetPeriodeDto";
            };
            readonly maxItems: 200;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly behandlingUuid: {
            readonly format: "uuid";
            readonly type: "string";
        };
    };
    readonly required: readonly ["behandlingUuid"];
    readonly type: "object";
};
export declare const $OpplystPeriodeDto: {
    readonly properties: {
        readonly fom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly statusSøktFor: {
            readonly enum: readonly ["MIDL_INAKTIV", "AAP", "AT", "DP", "SP_AV_DP", "PSB_AV_DP", "FL", "MS", "SN", "AT_FL", "AT_SN", "FL_SN", "AT_FL_SN", "BA", "KUN_YTELSE", "TY", "VENTELØNN_VARTPENGER", "-"];
            readonly type: "string";
        };
        readonly tom: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["fom", "statusSøktFor", "tom"];
    readonly type: "object";
};
export declare const $OpplæringDokumentDto: {
    readonly properties: {
        readonly datert: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly fremhevet: {
            readonly type: "boolean";
        };
        readonly id: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}-]+$";
            readonly type: "string";
        };
        readonly links: {
            readonly items: {
                readonly $ref: "#/components/schemas/ResourceLink";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly type: {
            readonly enum: readonly ["DOKUMENTASJON_AV_OPPLÆRING", "LEGEERKLÆRING_MED_DOKUMENTASJON_AV_OPPLÆRING"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["id"];
    readonly type: "object";
};
export declare const $OpplæringVurderingDto: {
    readonly properties: {
        readonly begrunnelse: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly opplæring: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly resultat: {
            readonly enum: readonly ["MÅ_VURDERES", "GODKJENT", "IKKE_GODKJENT"];
            readonly type: "string";
        };
        readonly tilknyttedeDokumenter: {
            readonly items: {
                readonly maxLength: 100;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly vurdertAv: {
            readonly maxLength: 20;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly vurdertTidspunkt: {
            readonly format: "date-time";
            readonly type: "string";
        };
    };
    readonly required: readonly ["begrunnelse", "opplæring", "resultat", "tilknyttedeDokumenter", "vurdertAv", "vurdertTidspunkt"];
    readonly type: "object";
};
export declare const $OpplæringspengerGrunnlag: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/YtelsespesifiktGrunnlagDto";
    }, {
        readonly properties: {
            readonly utbetalingsgradPrAktivitet: {
                readonly items: {
                    readonly $ref: "#/components/schemas/UtbetalingsgradPrAktivitetDto";
                };
                readonly maxItems: 2147483647;
                readonly minItems: 0;
                readonly type: "array";
            };
        };
        readonly type: "object";
    }];
    readonly required: readonly ["utbetalingsgradPrAktivitet"];
    readonly type: "object";
};
export declare const $OpprettManuellRevurdering: {
    readonly properties: {
        readonly saksnumre: {
            readonly pattern: "^[\\p{Alnum}\\s]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["saksnumre"];
    readonly type: "object";
};
export declare const $OpprettManuellRevurderingBeregning: {
    readonly properties: {
        readonly saksnummerOgSkjæringstidspunkt: {
            readonly pattern: "^[0-9a-zA-ZæøåÆØÅAaÁáBbCcČčDdĐđEeFfGgHhIiJjKkLlMmNnŊŋOoPpRrSsŠšTtŦŧUuVvZzŽžéôèÉöüäÖÜÄ .'-/\n%§!?@_()+:;,=\"&]*$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["saksnummerOgSkjæringstidspunkt"];
    readonly type: "object";
};
export declare const $OpprettNotatDto: {
    readonly properties: {
        readonly notatGjelderType: {
            readonly enum: readonly ["FAGSAK", "PLEIETRENGENDE"];
            readonly type: "string";
        };
        readonly notatTekst: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Pd}\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]*$";
            readonly type: "string";
        };
        readonly saksnummer: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["notatGjelderType", "notatTekst", "saksnummer"];
    readonly type: "object";
};
export declare const $OpptjeningAktivitetDto: {
    readonly properties: {
        readonly aktivitetType: {
            readonly enum: readonly ["AAP", "ARBEID", "DAGPENGER", "FORELDREPENGER", "FRILANS", "MILITÆR_ELLER_SIVILTJENESTE", "NÆRING", "OMSORGSPENGER", "OPPLÆRINGSPENGER", "PLEIEPENGER", "ETTERLØNN_SLUTTPAKKE", "SVANGERSKAPSPENGER", "SYKEPENGER", "SYKEPENGER_AV_DAGPENGER", "PLEIEPENGER_AV_DAGPENGER", "VENTELØNN_VARTPENGER", "VIDERE_ETTERUTDANNING", "UTENLANDSK_ARBEIDSFORHOLD", "FRISINN", "UTDANNINGSPERMISJON", "MELLOM_ARBEID", "-"];
            readonly type: "string";
        };
        readonly arbeidsforholdRef: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}\\-_:.\\p{Space}\\p{Sc}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly arbeidsgiver: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly arbeidsgiverIdentifikator: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}\\p{Space}\\p{Sc}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly arbeidsgiverNavn: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly begrunnelse: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{M}\\p{Sc}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly erEndret: {
            readonly type: "boolean";
        };
        readonly erGodkjent: {
            readonly type: "boolean";
        };
        readonly erManueltOpprettet: {
            readonly type: "boolean";
        };
        readonly erPeriodeEndret: {
            readonly type: "boolean";
        };
        readonly naringRegistreringsdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly oppdragsgiverOrg: {
            readonly maxLength: 20;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}\\p{Space}\\p{Sc}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly opptjeningFom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly opptjeningTom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly originalFom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly originalTom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly privatpersonFødselsdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly privatpersonNavn: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}.\\-\\p{Space}\\p{Sc}\\p{M}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly stillingsandel: {
            readonly exclusiveMaximum: false;
            readonly exclusiveMinimum: false;
            readonly maximum: 500;
            readonly minimum: 0;
            readonly type: "number";
        };
    };
    readonly type: "object";
};
export declare const $OpptjeningAktiviteterDto: {
    readonly properties: {
        readonly midlertidigInaktivType: {
            readonly enum: readonly ["8-47 A", "8-47 B"];
            readonly type: "string";
        };
        readonly perioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/OpptjeningPeriodeDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["perioder"];
    readonly type: "object";
};
export declare const $OpptjeningDto: {
    readonly properties: {
        readonly fastsattOpptjening: {
            readonly $ref: "#/components/schemas/FastsattOpptjeningDto";
        };
        readonly opptjeningAktivitetList: {
            readonly items: {
                readonly $ref: "#/components/schemas/OpptjeningAktivitetDto";
            };
            readonly maxItems: 200;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $OpptjeningPeriodeDto: {
    readonly properties: {
        readonly dager: {
            readonly format: "int32";
            readonly maximum: 31;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly måneder: {
            readonly format: "int32";
            readonly maximum: 36;
            readonly minimum: 0;
            readonly type: "integer";
        };
    };
    readonly type: "object";
};
export declare const $OpptjeningerDto: {
    readonly properties: {
        readonly opptjeninger: {
            readonly items: {
                readonly $ref: "#/components/schemas/OpptjeningDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $Organisasjon: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/Aktør";
    }, {
        readonly properties: {
            readonly ident: {
                readonly pattern: "^\\d{9}+$";
                readonly type: "string";
            };
        };
        readonly type: "object";
    }];
    readonly required: readonly ["ident"];
    readonly type: "object";
};
export declare const $OrganisasjonsEnhet: {
    readonly properties: {
        readonly enhetId: {
            readonly maxLength: 30;
            readonly minLength: 1;
            readonly pattern: "^[\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly enhetNavn: {
            readonly maxLength: 10;
            readonly minLength: 1;
            readonly pattern: "^[\\p{L}\\p{N}\\p{P}\\p{Space}]+$";
            readonly type: "string";
        };
        readonly status: {
            readonly maxLength: 50;
            readonly minLength: 1;
            readonly pattern: "^[A-Z_]+$";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $OrganisasjonsnrDto: {
    readonly properties: {
        readonly organisasjonsnr: {
            readonly maxLength: 9;
            readonly minLength: 0;
            readonly pattern: "^\\d{9}$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["organisasjonsnr"];
    readonly type: "object";
};
export declare const $OverføringFår: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/Rammevedtak";
    }, {
        readonly properties: {
            readonly avsender: {
                readonly type: "string";
            };
            readonly gyldigFraOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly gyldigTilOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly lengde: {
                readonly properties: {
                    readonly nano: {
                        readonly format: "int32";
                        readonly type: "integer";
                    };
                    readonly negative: {
                        readonly type: "boolean";
                    };
                    readonly positive: {
                        readonly type: "boolean";
                    };
                    readonly seconds: {
                        readonly format: "int64";
                        readonly type: "integer";
                    };
                    readonly units: {
                        readonly items: {
                            readonly properties: {
                                readonly dateBased: {
                                    readonly type: "boolean";
                                };
                                readonly duration: {
                                    readonly properties: {
                                        readonly nano: {
                                            readonly format: "int32";
                                            readonly type: "integer";
                                        };
                                        readonly negative: {
                                            readonly type: "boolean";
                                        };
                                        readonly positive: {
                                            readonly type: "boolean";
                                        };
                                        readonly seconds: {
                                            readonly format: "int64";
                                            readonly type: "integer";
                                        };
                                        readonly zero: {
                                            readonly type: "boolean";
                                        };
                                    };
                                    readonly type: "object";
                                };
                                readonly durationEstimated: {
                                    readonly type: "boolean";
                                };
                                readonly timeBased: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly zero: {
                        readonly type: "boolean";
                    };
                };
                readonly type: "object";
            };
            readonly vedtatt: {
                readonly format: "date";
                readonly type: "string";
            };
        };
        readonly type: "object";
    }];
    readonly type: "object";
};
export declare const $OverføringGir: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/Rammevedtak";
    }, {
        readonly properties: {
            readonly gyldigFraOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly gyldigTilOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly lengde: {
                readonly properties: {
                    readonly nano: {
                        readonly format: "int32";
                        readonly type: "integer";
                    };
                    readonly negative: {
                        readonly type: "boolean";
                    };
                    readonly positive: {
                        readonly type: "boolean";
                    };
                    readonly seconds: {
                        readonly format: "int64";
                        readonly type: "integer";
                    };
                    readonly units: {
                        readonly items: {
                            readonly properties: {
                                readonly dateBased: {
                                    readonly type: "boolean";
                                };
                                readonly duration: {
                                    readonly properties: {
                                        readonly nano: {
                                            readonly format: "int32";
                                            readonly type: "integer";
                                        };
                                        readonly negative: {
                                            readonly type: "boolean";
                                        };
                                        readonly positive: {
                                            readonly type: "boolean";
                                        };
                                        readonly seconds: {
                                            readonly format: "int64";
                                            readonly type: "integer";
                                        };
                                        readonly zero: {
                                            readonly type: "boolean";
                                        };
                                    };
                                    readonly type: "object";
                                };
                                readonly durationEstimated: {
                                    readonly type: "boolean";
                                };
                                readonly timeBased: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly zero: {
                        readonly type: "boolean";
                    };
                };
                readonly type: "object";
            };
            readonly mottaker: {
                readonly type: "string";
            };
            readonly vedtatt: {
                readonly format: "date";
                readonly type: "string";
            };
        };
        readonly type: "object";
    }];
    readonly type: "object";
};
export declare const $OverlappendeYtelseDto: {
    readonly properties: {
        readonly kilde: {
            readonly enum: readonly ["K9SAK", "FPSAK", "TPS", "VLSP", "JOARK", "INFOTRYGD", "ARENA", "INNTEKT", "MEDL", "GOSYS", "ENHETSREGISTERET", "AAREGISTERET", "-"];
            readonly type: "string";
        };
        readonly overlappendePerioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/OverlappendeYtelsePeriodeDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly saksnummer: {
            readonly type: "string";
        };
        readonly ytelseType: {
            readonly enum: readonly ["DAG", "FRISINN", "SP", "PSB", "PPN", "OMP", "OMP_KS", "OMP_MA", "OMP_AO", "OLP", "AAP", "ES", "FP", "SVP", "EF", "OBSOLETE", "-"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["kilde", "ytelseType"];
    readonly type: "object";
};
export declare const $OverlappendeYtelsePeriodeDto: {
    readonly properties: {
        readonly fom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly tom: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["fom", "tom"];
    readonly type: "object";
};
export declare const $OverstyrBeregningAktivitet: {
    readonly properties: {
        readonly arbeidsgiverAktørId: {
            readonly type: "string";
        };
        readonly arbeidsgiverOrgnr: {
            readonly type: "string";
        };
        readonly inntektPrAar: {
            readonly format: "int32";
            readonly maximum: 100000000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly opphørRefusjon: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly orgnrEllerAktørid: {
            readonly type: "boolean";
        };
        readonly refusjonPrAar: {
            readonly format: "int32";
            readonly maximum: 100000000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly skalKunneEndreRefusjon: {
            readonly type: "boolean";
        };
        readonly startdatoRefusjon: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly startdatoRefusjonFørOpphør: {
            readonly type: "boolean";
        };
    };
    readonly required: readonly ["inntektPrAar"];
    readonly type: "object";
};
export declare const $OverstyrBeregningInputPeriode: {
    readonly properties: {
        readonly aktivitetliste: {
            readonly items: {
                readonly $ref: "#/components/schemas/OverstyrBeregningAktivitet";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly harKategoriFrilans: {
            readonly type: "boolean";
        };
        readonly harKategoriNæring: {
            readonly type: "boolean";
        };
        readonly skjaeringstidspunkt: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["aktivitetliste", "skjaeringstidspunkt"];
    readonly type: "object";
};
export declare const $OverstyrUttakArbeidsforholdDto: {
    readonly properties: {
        readonly aktørId: {
            readonly type: "string";
        };
        readonly arbeidsforholdId: {
            readonly format: "uuid";
            readonly type: "string";
        };
        readonly orgnr: {
            readonly type: "string";
        };
        readonly type: {
            readonly enum: readonly ["AT", "SN", "FL", "DP", "SP_AV_DP", "PSB_AV_DP", "BA", "IKKE_YRKESAKTIV", "IKKE_YRKESAKTIV_UTEN_ERSTATNING", "MIDL_INAKTIV", "ANNET"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["type"];
    readonly type: "object";
};
export declare const $OverstyrUttakPeriodeDto: {
    readonly properties: {
        readonly begrunnelse: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly id: {
            readonly format: "int64";
            readonly maximum: 2147483647;
            readonly minimum: 999951;
            readonly type: "integer";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly saksbehandler: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}]+$";
            readonly type: "string";
        };
        readonly søkersUttaksgrad: {
            readonly exclusiveMaximum: false;
            readonly exclusiveMinimum: false;
            readonly maximum: 100;
            readonly minimum: 0;
            readonly type: "number";
        };
        readonly utbetalingsgrader: {
            readonly items: {
                readonly $ref: "#/components/schemas/OverstyrUttakUtbetalingsgradDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["begrunnelse", "periode"];
    readonly type: "object";
};
export declare const $OverstyrUttakUtbetalingsgradDto: {
    readonly properties: {
        readonly arbeidsforhold: {
            readonly $ref: "#/components/schemas/OverstyrUttakArbeidsforholdDto";
        };
        readonly utbetalingsgrad: {
            readonly exclusiveMaximum: false;
            readonly exclusiveMinimum: false;
            readonly maximum: 100;
            readonly minimum: 0;
            readonly type: "number";
        };
    };
    readonly required: readonly ["arbeidsforhold", "utbetalingsgrad"];
    readonly type: "object";
};
export declare const $OverstyrbareAktiviteterForUttakRequest: {
    readonly properties: {
        readonly behandlingIdDto: {
            readonly format: "uuid";
            readonly type: "string";
        };
        readonly fom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly tom: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["behandlingIdDto", "fom", "tom"];
    readonly type: "object";
};
export declare const $OverstyrbareUttakAktiviterDto: {
    readonly properties: {
        readonly arbeidsforholdsperioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/OverstyrUttakArbeidsforholdDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly arbeidsgiverOversikt: {
            readonly $ref: "#/components/schemas/ArbeidsgiverOversiktDto";
        };
    };
    readonly required: readonly ["arbeidsforholdsperioder", "arbeidsgiverOversikt"];
    readonly type: "object";
};
export declare const $OverstyringAksjonspunktDto: {
    readonly properties: {
        readonly avbrutt: {
            readonly type: "boolean";
        };
        readonly begrunnelse: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
    };
    readonly required: readonly ["periode"];
    readonly type: "object";
};
export declare const $OverstyrtUttakDto: {
    readonly properties: {
        readonly arbeidsgiverOversikt: {
            readonly $ref: "#/components/schemas/ArbeidsgiverOversiktDto";
        };
        readonly overstyringer: {
            readonly items: {
                readonly $ref: "#/components/schemas/OverstyrUttakPeriodeDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["arbeidsgiverOversikt", "overstyringer"];
    readonly type: "object";
};
export declare const $PGIGrunnlagDto: {
    readonly properties: {
        readonly beløp: {
            readonly type: "number";
        };
        readonly pgiType: {
            readonly enum: readonly ["LØNN", "NÆRING", "-"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["pgiType"];
    readonly type: "object";
};
export declare const $PGIPrÅrDto: {
    readonly properties: {
        readonly inntekter: {
            readonly items: {
                readonly $ref: "#/components/schemas/PGIGrunnlagDto";
            };
            readonly maxItems: 3;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly år: {
            readonly format: "int32";
            readonly maximum: 3000;
            readonly minimum: 1900;
            readonly type: "integer";
        };
    };
    readonly required: readonly ["år"];
    readonly type: "object";
};
export declare const $Periode: {
    readonly properties: {
        readonly fom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly tom: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["fom", "tom"];
    readonly type: "object";
};
export declare const $PeriodeAndel: {
    readonly properties: {
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly varighetPerDag: {
            readonly properties: {
                readonly nano: {
                    readonly format: "int32";
                    readonly type: "integer";
                };
                readonly negative: {
                    readonly type: "boolean";
                };
                readonly positive: {
                    readonly type: "boolean";
                };
                readonly seconds: {
                    readonly format: "int64";
                    readonly type: "integer";
                };
                readonly units: {
                    readonly items: {
                        readonly properties: {
                            readonly dateBased: {
                                readonly type: "boolean";
                            };
                            readonly duration: {
                                readonly properties: {
                                    readonly nano: {
                                        readonly format: "int32";
                                        readonly type: "integer";
                                    };
                                    readonly negative: {
                                        readonly type: "boolean";
                                    };
                                    readonly positive: {
                                        readonly type: "boolean";
                                    };
                                    readonly seconds: {
                                        readonly format: "int64";
                                        readonly type: "integer";
                                    };
                                    readonly zero: {
                                        readonly type: "boolean";
                                    };
                                };
                                readonly type: "object";
                            };
                            readonly durationEstimated: {
                                readonly type: "boolean";
                            };
                            readonly timeBased: {
                                readonly type: "boolean";
                            };
                        };
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly zero: {
                    readonly type: "boolean";
                };
            };
            readonly type: "object";
        };
    };
    readonly required: readonly ["periode"];
    readonly type: "object";
};
export declare const $PeriodeDto: {
    readonly properties: {
        readonly fom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly tom: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["fom", "tom"];
    readonly type: "object";
};
export declare const $PeriodeMedRegisterendring: {
    readonly properties: {
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
    };
    readonly required: readonly ["periode"];
    readonly type: "object";
};
export declare const $PeriodeMedSNOgFLDto: {
    readonly properties: {
        readonly måned: {
            readonly $ref: "#/components/schemas/PeriodeDto";
        };
        readonly oppgittIMåned: {
            readonly $ref: "#/components/schemas/OppgittOpptjeningDto";
        };
        readonly søkerFL: {
            readonly type: "boolean";
        };
        readonly søkerSN: {
            readonly type: "boolean";
        };
    };
    readonly required: readonly ["måned", "søkerFL", "søkerSN"];
    readonly type: "object";
};
export declare const $PeriodeMedSøkerInfoDto: {
    readonly properties: {
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly søkerFrilansIPeriode: {
            readonly type: "boolean";
        };
        readonly søkerNæringIPeriode: {
            readonly type: "boolean";
        };
    };
    readonly required: readonly ["periode", "søkerFrilansIPeriode", "søkerNæringIPeriode"];
    readonly type: "object";
};
export declare const $PeriodeMedUtbetalingsgradDto: {
    readonly properties: {
        readonly aktivitetsgrad: {
            readonly type: "number";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly utbetalingsgrad: {
            readonly type: "number";
        };
    };
    readonly required: readonly ["periode", "utbetalingsgrad"];
    readonly type: "object";
};
export declare const $PeriodeMedUtfall: {
    readonly properties: {
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly utfall: {
            readonly enum: readonly ["IKKE_OPPFYLT", "IKKE_VURDERT", "OPPFYLT", "IKKE_RELEVANT", "UDEFINERT"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["periode", "utfall"];
    readonly type: "object";
};
export declare const $PeriodeMedÅrsaker: {
    readonly properties: {
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly årsaker: {
            readonly items: {
                readonly enum: readonly ["MANUELT_REVURDERER_PERIODE", "REVURDERER_BERØRT_PERIODE", "ENDRING_FRA_BRUKER", "TRUKKET_KRAV", "REVURDERER_NY_INNTEKTSMELDING", "REVURDERER_ENDRING_FRA_ANNEN_PART", "REVURDERER_ENDRING_FERIEPENGER_ANNEN_SAK", "UTSATT_BEHANDLING", "GJENOPPTAR_UTSATT_BEHANDLING", "REVURDERER_SYKDOM_ENDRING_FRA_ANNEN_OMSORGSPERSON", "REVURDERER_ETABLERT_TILSYN_ENDRING_FRA_ANNEN_OMSORGSPERSON", "REVURDERER_NATTEVÅKBEREDSKAP_ENDRING_FRA_ANNEN_OMSORGSPERSON", "HENDELSE_DØD_BRUKER", "HENDELSE_DØD_PLEIETRENGENDE", "G_REGULERING", "REVURDERER_BEREGNING", "ENDRING_I_FORDELING", "FØRSTEGANGSVURDERING", "REVURDERER_LIGNET_INNTEKT"];
                readonly maxLength: 2147483647;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
            readonly uniqueItems: true;
        };
    };
    readonly required: readonly ["periode"];
    readonly type: "object";
};
export declare const $PerioderForKrav: {
    readonly properties: {
        readonly innsendingsdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly refusjonsperioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/Refusjonsperiode";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 1;
            readonly type: "array";
        };
    };
    readonly required: readonly ["innsendingsdato", "refusjonsperioder"];
    readonly type: "object";
};
export declare const $PerioderMedÅrsakPerKravstiller: {
    readonly properties: {
        readonly arbeidsgiver: {
            readonly $ref: "#/components/schemas/Arbeidsgiver";
        };
        readonly kravstiller: {
            readonly enum: readonly ["BRUKER", "ARBEIDSGIVER"];
            readonly type: "string";
        };
        readonly perioderMedÅrsak: {
            readonly items: {
                readonly $ref: "#/components/schemas/PeriodeMedÅrsaker";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["kravstiller"];
    readonly type: "object";
};
export declare const $PermisjonDto: {
    readonly properties: {
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly permisjonsbeskrivelseType: {
            readonly enum: readonly ["-", "PERMISJON", "UTDANNINGSPERMISJON", "UTDANNINGSPERMISJON_IKKE_LOVFESTET", "UTDANNINGSPERMISJON_LOVFESTET", "VELFERDSPERMISJON", "ANNEN_PERMISJON_IKKE_LOVFESTET", "ANNEN_PERMISJON_LOVFESTET", "PERMISJON_MED_FORELDREPENGER", "PERMITTERING", "PERMISJON_VED_MILITÆRTJENESTE"];
            readonly type: "string";
        };
        readonly prosentsats: {
            readonly type: "number";
        };
    };
    readonly required: readonly ["periode"];
    readonly type: "object";
};
export declare const $PersonDto: {
    readonly properties: {
        readonly aktørId: {
            readonly type: "string";
        };
        readonly alder: {
            readonly format: "int32";
            readonly type: "integer";
        };
        readonly diskresjonskode: {
            readonly type: "string";
        };
        readonly dodsdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly erDod: {
            readonly type: "boolean";
        };
        readonly erKvinne: {
            readonly type: "boolean";
        };
        readonly navn: {
            readonly type: "string";
        };
        readonly personnummer: {
            readonly type: "string";
        };
        readonly personstatusType: {
            readonly enum: readonly ["ABNR", "ADNR", "BOSA", "DØD", "DØDD", "FOSV", "FØDR", "UFUL", "UREG", "UTAN", "UTPE", "UTVA", "-"];
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $PersonadresseDto: {
    readonly properties: {
        readonly adresseType: {
            readonly enum: readonly ["BOSTEDSADRESSE", "DELT_BOSTEDSADRESSE", "POSTADRESSE", "POSTADRESSE_UTLAND", "MIDLERTIDIG_POSTADRESSE_NORGE", "MIDLERTIDIG_POSTADRESSE_UTLAND", "UKJENT_ADRESSE"];
            readonly type: "string";
        };
        readonly adresselinje1: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{P}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly adresselinje2: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{P}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly adresselinje3: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{P}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly land: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}\\p{Space}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly mottakerNavn: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{P}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly postNummer: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{P}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly poststed: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{P}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["adresseType", "land"];
    readonly type: "object";
};
export declare const $PersonopplysningDto: {
    readonly properties: {
        readonly adresser: {
            readonly items: {
                readonly $ref: "#/components/schemas/PersonadresseDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly aktoerId: {
            readonly type: "string";
        };
        readonly annenPart: {
            readonly $ref: "#/components/schemas/PersonopplysningDto";
        };
        readonly avklartPersonstatus: {
            readonly $ref: "#/components/schemas/AvklartPersonstatus";
        };
        readonly barn: {
            readonly items: {
                readonly $ref: "#/components/schemas/PersonopplysningDto";
            };
            readonly maxItems: 30;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly barnSoktFor: {
            readonly items: {
                readonly $ref: "#/components/schemas/PersonopplysningDto";
            };
            readonly maxItems: 10;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly diskresjonskode: {
            readonly enum: readonly ["UDEF", "URIK", "UFB", "SVAL", "SPSF", "SPFO", "PEND", "MILI", "KLIE"];
            readonly type: "string";
        };
        readonly dodsdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly ektefelle: {
            readonly $ref: "#/components/schemas/PersonopplysningDto";
        };
        readonly fnr: {
            readonly maxLength: 11;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}]{11}+$";
            readonly type: "string";
        };
        readonly fodselsdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly harVerge: {
            readonly type: "boolean";
        };
        readonly navBrukerKjonn: {
            readonly enum: readonly ["K", "M", "-"];
            readonly type: "string";
        };
        readonly navn: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{P}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly nummer: {
            readonly format: "int32";
            readonly maximum: 2147483647;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly personstatus: {
            readonly enum: readonly ["ABNR", "ADNR", "BOSA", "DØD", "DØDD", "FOSV", "FØDR", "UFUL", "UREG", "UTAN", "UTPE", "UTVA", "-"];
            readonly type: "string";
        };
        readonly pleietrengendePart: {
            readonly $ref: "#/components/schemas/PersonopplysningDto";
        };
        readonly region: {
            readonly enum: readonly ["NORDEN", "EOS", "ANNET", "-"];
            readonly type: "string";
        };
        readonly sivilstand: {
            readonly enum: readonly ["ENKE", "GIFT", "GJPA", "GLAD", "NULL", "REPA", "SAMB", "SEPA", "SEPR", "SKIL", "SKPA", "UGIF"];
            readonly type: "string";
        };
        readonly statsborgerskap: {
            readonly $ref: "#/components/schemas/Landkoder";
        };
    };
    readonly required: readonly ["aktoerId", "fnr"];
    readonly type: "object";
};
export declare const $PersonopplysningPleietrengendeDto: {
    readonly properties: {
        readonly diagnosekoder: {
            readonly items: {
                readonly maxLength: 100;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly dodsdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly fnr: {
            readonly maxLength: 11;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}]{11}+$";
            readonly type: "string";
        };
        readonly navn: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{P}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $PgiDto: {
    readonly properties: {
        readonly beløp: {
            readonly type: "number";
        };
        readonly årstall: {
            readonly format: "int32";
            readonly maximum: 3000;
            readonly minimum: 0;
            readonly type: "integer";
        };
    };
    readonly type: "object";
};
export declare const $PipDto: {
    readonly properties: {
        readonly aktørIder: {
            readonly items: {
                readonly maxLength: 50;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly maxItems: 50;
            readonly minItems: 0;
            readonly type: "array";
            readonly uniqueItems: true;
        };
        readonly behandlingStatus: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}\\p{Space}]+$";
            readonly type: "string";
        };
        readonly fagsakStatus: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}\\p{Space}]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["aktørIder"];
    readonly type: "object";
};
export declare const $PleiepengerNærståendeGrunnlag: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/YtelsespesifiktGrunnlagDto";
    }, {
        readonly properties: {
            readonly tilkommetInntektHensyntasFom: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly utbetalingsgradPrAktivitet: {
                readonly items: {
                    readonly $ref: "#/components/schemas/UtbetalingsgradPrAktivitetDto";
                };
                readonly maxItems: 2147483647;
                readonly minItems: 0;
                readonly type: "array";
            };
        };
        readonly type: "object";
    }];
    readonly required: readonly ["utbetalingsgradPrAktivitet"];
    readonly type: "object";
};
export declare const $PleiepengerSyktBarnGrunnlag: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/YtelsespesifiktGrunnlagDto";
    }, {
        readonly properties: {
            readonly tilkommetInntektHensyntasFom: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly utbetalingsgradPrAktivitet: {
                readonly items: {
                    readonly $ref: "#/components/schemas/UtbetalingsgradPrAktivitetDto";
                };
                readonly maxItems: 2147483647;
                readonly minItems: 0;
                readonly type: "array";
            };
        };
        readonly type: "object";
    }];
    readonly required: readonly ["utbetalingsgradPrAktivitet"];
    readonly type: "object";
};
export declare const $ProsessTaskDataDto: {
    readonly properties: {
        readonly gruppe: {
            readonly maxLength: 200;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}_.\\-]*$";
            readonly type: "string";
        };
        readonly id: {
            readonly format: "int64";
            readonly type: "integer";
        };
        readonly nesteKjøringEtter: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly sekvens: {
            readonly maxLength: 200;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}_.\\-]*$";
            readonly type: "string";
        };
        readonly sistKjørt: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly sisteFeilKode: {
            readonly maxLength: 200;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}_.\\-]*$";
            readonly type: "string";
        };
        readonly status: {
            readonly maxLength: 20;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}_.\\-]*$";
            readonly type: "string";
        };
        readonly taskType: {
            readonly maxLength: 200;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}æøåÆØÅ_.\\-]*$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["gruppe", "id", "sekvens", "status", "taskType"];
    readonly type: "object";
};
export declare const $ProsessTaskGruppeIdDto: {
    readonly properties: {
        readonly gruppe: {
            readonly maxLength: 250;
            readonly minLength: 1;
            readonly pattern: "[a-zA-Z0-9-.]+";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $ProsessTaskOpprettInputDto: {
    readonly properties: {
        readonly taskParametre: {
            readonly additionalProperties: {
                readonly maxLength: 100;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly type: "object";
        };
        readonly taskType: {
            readonly maxLength: 100;
            readonly minLength: 1;
            readonly pattern: "^[\\p{Alnum}æøåÆØÅ_.\\-]*$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["taskParametre", "taskType"];
    readonly type: "object";
};
export declare const $ProsessTaskRestartInputDto: {
    readonly properties: {
        readonly inneværendeStatus: {
            readonly enum: readonly ["VENTER_SVAR, SUSPENDERT, FEILET"];
            readonly maxLength: 15;
            readonly minLength: 0;
            readonly pattern: "VENTER_SVAR|FEILET|SUSPENDERT";
            readonly type: "string";
        };
        readonly prosessTaskId: {
            readonly format: "int64";
            readonly maximum: 9223372036854776000;
            readonly minimum: 0;
            readonly type: "integer";
        };
    };
    readonly required: readonly ["inneværendeStatus", "prosessTaskId"];
    readonly type: "object";
};
export declare const $ProsessTaskRestartResultatDto: {
    readonly properties: {
        readonly nesteKjoeretidspunkt: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly prosessTaskId: {
            readonly format: "int64";
            readonly type: "integer";
        };
        readonly prosessTaskStatus: {
            readonly pattern: "^[\\p{Alnum}_.\\-]*$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["nesteKjoeretidspunkt", "prosessTaskId", "prosessTaskStatus"];
    readonly type: "object";
};
export declare const $ProsessTaskRetryAllResultatDto: {
    readonly properties: {
        readonly prosessTaskIds: {
            readonly items: {
                readonly format: "int64";
                readonly type: "integer";
            };
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $ProsessTaskSetFerdigInputDto: {
    readonly properties: {
        readonly inneværendeStatus: {
            readonly enum: readonly ["VENTER_SVAR, SUSPENDERT, FEILET, VETO, KLAR"];
            readonly maxLength: 15;
            readonly minLength: 0;
            readonly pattern: "VENTER_SVAR|FEILET|SUSPENDERT|VETO|KLAR";
            readonly type: "string";
        };
        readonly prosessTaskId: {
            readonly format: "int64";
            readonly maximum: 9223372036854776000;
            readonly minimum: 0;
            readonly type: "integer";
        };
    };
    readonly required: readonly ["inneværendeStatus", "prosessTaskId"];
    readonly type: "object";
};
export declare const $ProsessTaskStatusDto: {
    readonly properties: {
        readonly prosessTaskStatusName: {
            readonly enum: readonly ["FEILET, VENTER_SVAR, SUSPENDERT, VETO, KLAR"];
            readonly maxLength: 15;
            readonly minLength: 1;
            readonly pattern: "FEILET|VENTER_SVAR|SUSPENDERT|VETO|KLAR";
            readonly type: "string";
        };
    };
    readonly required: readonly ["prosessTaskStatusName"];
    readonly type: "object";
};
export declare const $PsbInfotrygdFødselsnumre: {
    readonly properties: {
        readonly fødselsnumre: {
            readonly pattern: "^[\\p{Alnum}\\s]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["fødselsnumre"];
    readonly type: "object";
};
export declare const $PåvirkedeSaker: {
    readonly properties: {
        readonly saksnummere: {
            readonly items: {
                readonly $ref: "#/components/schemas/SaksnummerDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["saksnummere"];
    readonly type: "object";
};
export declare const $Rammevedtak: {
    readonly discriminator: {
        readonly propertyName: "type";
    };
    readonly properties: {
        readonly type: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["type"];
    readonly type: "object";
};
export declare const $RammevedtakResponse: {
    readonly properties: {
        readonly rammevedtak: {
            readonly items: {
                readonly $ref: "#/components/schemas/Rammevedtak";
            };
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $ReferanseDto: {
    readonly properties: {
        readonly referanse: {
            readonly format: "uuid";
            readonly type: "string";
        };
    };
    readonly required: readonly ["referanse"];
    readonly type: "object";
};
export declare const $Refusjon: {
    readonly properties: {
        readonly fom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly indexKey: {
            readonly type: "string";
        };
        readonly refusjonsbeløp: {
            readonly $ref: "#/components/schemas/Beløp";
        };
    };
    readonly type: "object";
};
export declare const $RefusjonAndelTilVurderingDto: {
    readonly properties: {
        readonly aktivitetStatus: {
            readonly enum: readonly ["MIDL_INAKTIV", "AAP", "AT", "DP", "SP_AV_DP", "PSB_AV_DP", "FL", "MS", "SN", "AT_FL", "AT_SN", "FL_SN", "AT_FL_SN", "BA", "KUN_YTELSE", "TY", "VENTELØNN_VARTPENGER", "-"];
            readonly type: "string";
        };
        readonly arbeidsgiver: {
            readonly $ref: "#/components/schemas/Arbeidsgiver";
        };
        readonly eksternArbeidsforholdRef: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly fastsattDelvisRefusjonPrMnd: {
            readonly type: "number";
        };
        readonly fastsattNyttRefusjonskravFom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly internArbeidsforholdRef: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly maksTillattDelvisRefusjonPrMnd: {
            readonly type: "number";
        };
        readonly nyttRefusjonskravFom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly skalKunneFastsetteDelvisRefusjon: {
            readonly type: "boolean";
        };
        readonly tidligereUtbetalinger: {
            readonly items: {
                readonly $ref: "#/components/schemas/TidligereUtbetalingDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 1;
            readonly type: "array";
        };
        readonly tidligsteMuligeRefusjonsdato: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["aktivitetStatus"];
    readonly type: "object";
};
export declare const $RefusjonDto: {
    readonly properties: {
        readonly fom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly refusjonsbeløpMnd: {
            readonly type: "number";
        };
    };
    readonly type: "object";
};
export declare const $RefusjonTilVurderingDto: {
    readonly properties: {
        readonly andeler: {
            readonly items: {
                readonly $ref: "#/components/schemas/RefusjonAndelTilVurderingDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 1;
            readonly type: "array";
        };
    };
    readonly required: readonly ["andeler"];
    readonly type: "object";
};
export declare const $RefusjonskravDatoDto: {
    readonly properties: {
        readonly arbeidsgiver: {
            readonly $ref: "#/components/schemas/Aktør";
        };
        readonly førsteDagMedRefusjonskrav: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly førsteInnsendingAvRefusjonskrav: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly harRefusjonFraStart: {
            readonly type: "boolean";
        };
    };
    readonly required: readonly ["arbeidsgiver", "førsteDagMedRefusjonskrav", "førsteInnsendingAvRefusjonskrav", "harRefusjonFraStart"];
    readonly type: "object";
};
export declare const $RefusjonskravSomKommerForSentDto: {
    readonly properties: {
        readonly arbeidsgiverIdent: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly erRefusjonskravGyldig: {
            readonly type: "boolean";
        };
    };
    readonly required: readonly ["arbeidsgiverIdent"];
    readonly type: "object";
};
export declare const $Refusjonsperiode: {
    readonly properties: {
        readonly beløp: {
            readonly type: "number";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
    };
    readonly required: readonly ["beløp", "periode"];
    readonly type: "object";
};
export declare const $ReisetidDto: {
    readonly properties: {
        readonly perioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/ReisetidPeriodeDto";
            };
            readonly maxItems: 1000;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly vurderinger: {
            readonly items: {
                readonly $ref: "#/components/schemas/ReisetidVurderingDto";
            };
            readonly maxItems: 1000;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["perioder", "vurderinger"];
    readonly type: "object";
};
export declare const $ReisetidPeriodeDto: {
    readonly properties: {
        readonly beskrivelseFraSoekerHjem: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Pd}\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]*$";
            readonly type: "string";
        };
        readonly beskrivelseFraSoekerTil: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Pd}\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]*$";
            readonly type: "string";
        };
        readonly opplæringPeriode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly reisetidHjem: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly reisetidTil: {
            readonly $ref: "#/components/schemas/Periode";
        };
    };
    readonly required: readonly ["opplæringPeriode", "reisetidHjem", "reisetidTil"];
    readonly type: "object";
};
export declare const $ReisetidPeriodeVurderingDto: {
    readonly properties: {
        readonly begrunnelse: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly resultat: {
            readonly enum: readonly ["MÅ_VURDERES", "GODKJENT", "GODKJENT_AUTOMATISK", "IKKE_GODKJENT"];
            readonly type: "string";
        };
        readonly vurdertAv: {
            readonly maxLength: 20;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly vurdertTidspunkt: {
            readonly format: "date-time";
            readonly type: "string";
        };
    };
    readonly required: readonly ["begrunnelse", "periode", "resultat", "vurdertAv", "vurdertTidspunkt"];
    readonly type: "object";
};
export declare const $ReisetidVurderingDto: {
    readonly properties: {
        readonly opplæringPeriode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly reisetidHjem: {
            readonly items: {
                readonly $ref: "#/components/schemas/ReisetidPeriodeVurderingDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly reisetidTil: {
            readonly items: {
                readonly $ref: "#/components/schemas/ReisetidPeriodeVurderingDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["opplæringPeriode", "reisetidHjem", "reisetidTil"];
    readonly type: "object";
};
export declare const $RelatertSakDto: {
    readonly properties: {
        readonly relaterteSøkere: {
            readonly items: {
                readonly $ref: "#/components/schemas/RelatertSøkerDto";
            };
            readonly maxItems: 20;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $RelatertSøkerDto: {
    readonly properties: {
        readonly saksnummer: {
            readonly type: "string";
        };
        readonly søkerIdent: {
            readonly type: "string";
        };
        readonly søkerNavn: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{P}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly åpenBehandling: {
            readonly type: "boolean";
        };
    };
    readonly required: readonly ["saksnummer", "søkerIdent", "søkerNavn", "åpenBehandling"];
    readonly type: "object";
};
export declare const $ReserverSaksnummerDto: {
    readonly properties: {
        readonly behandlingsår: {
            readonly type: "string";
        };
        readonly brukerAktørId: {
            readonly type: "string";
        };
        readonly pleietrengendeAktørId: {
            readonly type: "string";
        };
        readonly relatertPersonAktørId: {
            readonly type: "string";
        };
        readonly ytelseType: {
            readonly enum: readonly ["DAG", "FRISINN", "SP", "PSB", "PPN", "OMP", "OMP_KS", "OMP_MA", "OMP_AO", "OLP", "AAP", "ES", "FP", "SVP", "EF", "OBSOLETE", "-"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["brukerAktørId", "ytelseType"];
    readonly type: "object";
};
export declare const $ResourceLink: {
    readonly properties: {
        readonly href: {
            readonly format: "uri";
            readonly type: "string";
        };
        readonly rel: {
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{P}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly requestPayload: {
            readonly type: "object";
        };
        readonly type: {
            readonly enum: readonly ["DELETE", "GET", "PATCH", "POST", "PUT"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["href", "rel", "type"];
    readonly type: "object";
};
export declare const $RevurderPeriodeDto: {
    readonly properties: {
        readonly saksnummer: {
            readonly maxLength: 19;
            readonly minLength: 0;
            readonly pattern: "^[a-zA-Z0-9]*$";
            readonly type: "string";
        };
        readonly skjæringstidspunkt: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["saksnummer", "skjæringstidspunkt"];
    readonly type: "object";
};
export declare const $ReåpneBehandlingDto: {
    readonly properties: {
        readonly behandlingId: {
            readonly format: "int64";
            readonly maximum: 9223372036854776000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly behandlingVersjon: {
            readonly format: "int64";
            readonly maximum: 9223372036854776000;
            readonly minimum: 0;
            readonly type: "integer";
        };
    };
    readonly required: readonly ["behandlingId", "behandlingVersjon"];
    readonly type: "object";
};
export declare const $SakRettigheterDto: {
    readonly properties: {
        readonly behandlingTillatteOperasjoner: {
            readonly items: {
                readonly $ref: "#/components/schemas/BehandlingOperasjonerDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly behandlingTypeKanOpprettes: {
            readonly items: {
                readonly $ref: "#/components/schemas/BehandlingOpprettingDto";
            };
            readonly maxItems: 10;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly sakSkalTilInfotrygd: {
            readonly type: "boolean";
        };
    };
    readonly type: "object";
};
export declare const $SaksbehandlerDto: {
    readonly properties: {
        readonly saksbehandlere: {
            readonly additionalProperties: {
                readonly maxLength: 2147483647;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly type: "object";
        };
    };
    readonly type: "object";
};
export declare const $SaksnummerDto: {
    readonly properties: {
        readonly saksnummer: {
            readonly maxLength: 19;
            readonly minLength: 0;
            readonly pattern: "^[a-zA-Z0-9]*$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["saksnummer"];
    readonly type: "object";
};
export declare const $Saksopplysninger: {
    readonly properties: {
        readonly arbeidsforholdMedLønnsendring: {
            readonly items: {
                readonly $ref: "#/components/schemas/ArbeidsforholdDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly kortvarigeArbeidsforhold: {
            readonly items: {
                readonly $ref: "#/components/schemas/ArbeidsforholdDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly lønnsendringSaksopplysning: {
            readonly items: {
                readonly $ref: "#/components/schemas/LønnsendringSaksopplysningDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $SammenligningsgrunnlagDto: {
    readonly properties: {
        readonly avvikPromille: {
            readonly exclusiveMaximum: false;
            readonly exclusiveMinimum: false;
            readonly maximum: 10000000;
            readonly minimum: 0;
            readonly type: "number";
        };
        readonly avvikProsent: {
            readonly exclusiveMaximum: false;
            readonly exclusiveMinimum: false;
            readonly maximum: 10000000;
            readonly minimum: 0;
            readonly type: "number";
        };
        readonly differanseBeregnet: {
            readonly type: "number";
        };
        readonly rapportertPrAar: {
            readonly type: "number";
        };
        readonly sammenligningsgrunnlagFom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly sammenligningsgrunnlagTom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly sammenligningsgrunnlagType: {
            readonly enum: readonly ["SAMMENLIGNING_AT", "SAMMENLIGNING_FL", "SAMMENLIGNING_AT_FL", "SAMMENLIGNING_SN", "SAMMENLIGNING_ATFL_SN", "SAMMENLIGNING_MIDL_INAKTIV"];
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $SettBehandlingPaVentDto: {
    readonly properties: {
        readonly behandlingId: {
            readonly format: "int64";
            readonly maximum: 9223372036854776000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly behandlingVersjon: {
            readonly format: "int64";
            readonly maximum: 9223372036854776000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly frist: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly ventearsak: {
            readonly enum: readonly ["-", "ANKE_OVERSENDT_TIL_TRYGDERETTEN", "ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER", "AVV_DOK", "AVV_IM_MOT_AAREG", "AVV_IM_MOT_SØKNAD_AT", "AVV_SØKNADSPERIODER", "AVV_FODSEL", "AVV_RESPONS_REVURDERING", "FOR_TIDLIG_SOKNAD", "GRADERING_FLERE_ARBEIDSFORHOLD", "REFUSJON_3_MÅNEDER", "SCANN", "UTV_FRIST", "VENT_FEIL_ENDRINGSSØKNAD", "VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG", "VENT_INFOTRYGD", "VENT_INNTEKT_RAPPORTERINGSFRIST", "VENT_MILITÆR_OG_BG_UNDER_3G", "VENT_OPDT_INNTEKTSMELDING", "VENT_OPPTJENING_OPPLYSNINGER", "VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID", "VENT_REGISTERINNHENTING", "VENT_PÅ_SISTE_AAP_MELDEKORT", "VENT_SØKNAD_SENDT_INFORMASJONSBREV", "VENT_TIDLIGERE_BEHANDLING", "VENT_ÅPEN_BEHANDLING", "VENT_MANGL_FUNKSJ_SAKSBEHANDLER", "VENTER_SVAR_PORTEN", "VENTER_SVAR_TEAMS", "ANDRE_INNTEKTSOPPLYSNINGER", "INNTEKTSMELDING", "LEGEERKLÆRING", "MEDISINSKE_OPPLYSNINGER", "ANNET", "VENTER_ETTERLYS_IM", "VENTER_ETTERLYS_IM_VARSEL", "OPPD_ÅPEN_BEH", "VENT_DEKGRAD_REGEL", "VENT_ØKONOMI", "VENT_TILBAKEKREVING", "VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER", "VENT_BEREGNING_TILBAKE_I_TID", "BRUKER_70ÅR_VED_REFUSJON", "VENT_LOVENDRING_8_41", "INGEN_PERIODE_UTEN_YTELSE", "PERIODE_MED_AVSLAG", "MANGLENDE_FUNKSJONALITET", "KORTVARIG_ARBEID", "FRISINN_ATFL_SAMME_ORG", "FRISINN_VARIANT_SN_MED_FL_INNTEKT", "FRISINN_VARIANT_FL_MED_SN_INNTEKT", "FRISINN_VARIANT_NY_FL", "FRISINN_VARIANT_NY_SN_2019", "FRISINN_VARIANT_NY_SN_2020", "FRISINN_VARIANT_KOMBINERT", "FRISINN_VARIANT_KOMBINERT_NY_FL", "FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2019", "FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2020", "FRISINN_VARIANT_KOMBINERT_NY_SN_2019", "FRISINN_VARIANT_KOMBINERT_NY_SN_2020", "FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2019", "FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2020", "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2019", "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2020", "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL", "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2019", "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2020", "FRISINN_VARIANT_ENDRET_INNTEKTSTYPE", "AVV_SOKN_IT_PERIODER", "AVV_SOKN_NAERING", "AVV_SOKN_FRILANS", "DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP", "AAP_DP_SISTE_10_MND_SVP", "FL_SN_IKKE_STOTTET_FOR_SVP"];
            readonly type: "string";
        };
        readonly ventearsakVariant: {
            readonly maxLength: 200;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["behandlingId", "behandlingVersjon"];
    readonly type: "object";
};
export declare const $Simulering: {
    readonly properties: {
        readonly forrigeUttaksplan: {
            readonly $ref: "#/components/schemas/Uttaksplan";
        };
        readonly simulertUttaksplan: {
            readonly $ref: "#/components/schemas/Uttaksplan";
        };
        readonly uttakplanEndret: {
            readonly type: "boolean";
        };
    };
    readonly type: "object";
};
export declare const $SkjulNotatDto: {
    readonly properties: {
        readonly notatId: {
            readonly format: "uuid";
            readonly type: "string";
        };
        readonly saksnummer: {
            readonly type: "string";
        };
        readonly skjul: {
            readonly type: "boolean";
        };
        readonly versjon: {
            readonly format: "int64";
            readonly type: "integer";
        };
    };
    readonly required: readonly ["notatId", "saksnummer", "skjul", "versjon"];
    readonly type: "object";
};
export declare const $Smittevern: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/Rammevedtak";
    }, {
        readonly properties: {
            readonly gyldigFraOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly gyldigTilOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly lengde: {
                readonly properties: {
                    readonly nano: {
                        readonly format: "int32";
                        readonly type: "integer";
                    };
                    readonly negative: {
                        readonly type: "boolean";
                    };
                    readonly positive: {
                        readonly type: "boolean";
                    };
                    readonly seconds: {
                        readonly format: "int64";
                        readonly type: "integer";
                    };
                    readonly units: {
                        readonly items: {
                            readonly properties: {
                                readonly dateBased: {
                                    readonly type: "boolean";
                                };
                                readonly duration: {
                                    readonly properties: {
                                        readonly nano: {
                                            readonly format: "int32";
                                            readonly type: "integer";
                                        };
                                        readonly negative: {
                                            readonly type: "boolean";
                                        };
                                        readonly positive: {
                                            readonly type: "boolean";
                                        };
                                        readonly seconds: {
                                            readonly format: "int64";
                                            readonly type: "integer";
                                        };
                                        readonly zero: {
                                            readonly type: "boolean";
                                        };
                                    };
                                    readonly type: "object";
                                };
                                readonly durationEstimated: {
                                    readonly type: "boolean";
                                };
                                readonly timeBased: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly zero: {
                        readonly type: "boolean";
                    };
                };
                readonly type: "object";
            };
            readonly vedtatt: {
                readonly format: "date";
                readonly type: "string";
            };
        };
        readonly type: "object";
    }];
    readonly type: "object";
};
export declare const $SmørtEtablertTilsyn: {
    readonly properties: {
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly tidPerDag: {
            readonly properties: {
                readonly nano: {
                    readonly format: "int32";
                    readonly type: "integer";
                };
                readonly negative: {
                    readonly type: "boolean";
                };
                readonly positive: {
                    readonly type: "boolean";
                };
                readonly seconds: {
                    readonly format: "int64";
                    readonly type: "integer";
                };
                readonly units: {
                    readonly items: {
                        readonly properties: {
                            readonly dateBased: {
                                readonly type: "boolean";
                            };
                            readonly duration: {
                                readonly properties: {
                                    readonly nano: {
                                        readonly format: "int32";
                                        readonly type: "integer";
                                    };
                                    readonly negative: {
                                        readonly type: "boolean";
                                    };
                                    readonly positive: {
                                        readonly type: "boolean";
                                    };
                                    readonly seconds: {
                                        readonly format: "int64";
                                        readonly type: "integer";
                                    };
                                    readonly zero: {
                                        readonly type: "boolean";
                                    };
                                };
                                readonly type: "object";
                            };
                            readonly durationEstimated: {
                                readonly type: "boolean";
                            };
                            readonly timeBased: {
                                readonly type: "boolean";
                            };
                        };
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly zero: {
                    readonly type: "boolean";
                };
            };
            readonly type: "object";
        };
    };
    readonly type: "object";
};
export declare const $Språkkode: {
    readonly properties: {
        readonly kode: {
            readonly type: "string";
        };
        readonly kodeverk: {
            readonly readOnly: true;
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $StatusFilterDto: {
    readonly properties: {
        readonly prosessTaskStatuser: {
            readonly items: {
                readonly $ref: "#/components/schemas/ProsessTaskStatusDto";
            };
            readonly maxItems: 10;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $StatusForPerioderPåBehandling: {
    readonly properties: {
        readonly dokumenterTilBehandling: {
            readonly items: {
                readonly $ref: "#/components/schemas/KravDokumentMedSøktePerioder";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly perioderMedRegisterendring: {
            readonly items: {
                readonly $ref: "#/components/schemas/PeriodeMedRegisterendring";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
            readonly uniqueItems: true;
        };
        readonly perioderMedÅrsak: {
            readonly items: {
                readonly $ref: "#/components/schemas/PeriodeMedÅrsaker";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly perioderMedÅrsakPerKravstiller: {
            readonly items: {
                readonly $ref: "#/components/schemas/PerioderMedÅrsakPerKravstiller";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly perioderTilVurdering: {
            readonly items: {
                readonly $ref: "#/components/schemas/Periode";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
            readonly uniqueItems: true;
        };
        readonly årsakMedPerioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/ÅrsakMedPerioder";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $StatusForPerioderPåBehandlingInkludertVilkår: {
    readonly properties: {
        readonly forrigeVedtak: {
            readonly items: {
                readonly $ref: "#/components/schemas/PeriodeMedUtfall";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly periodeMedUtfall: {
            readonly items: {
                readonly $ref: "#/components/schemas/PeriodeMedUtfall";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly perioderMedÅrsak: {
            readonly $ref: "#/components/schemas/StatusForPerioderPåBehandling";
        };
    };
    readonly required: readonly ["perioderMedÅrsak"];
    readonly type: "object";
};
export declare const $SvangerskapspengerGrunnlag: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/YtelsespesifiktGrunnlagDto";
    }, {
        readonly properties: {
            readonly tilkommetInntektHensyntasFom: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly utbetalingsgradPrAktivitet: {
                readonly items: {
                    readonly $ref: "#/components/schemas/UtbetalingsgradPrAktivitetDto";
                };
                readonly maxItems: 2147483647;
                readonly minItems: 1;
                readonly type: "array";
            };
        };
        readonly type: "object";
    }];
    readonly required: readonly ["utbetalingsgradPrAktivitet"];
    readonly type: "object";
};
export declare const $SvangerskapspengerGrunnlagDto: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/YtelsespesifiktGrunnlagDto";
    }];
    readonly type: "object";
};
export declare const $SykdomAksjonspunktDto: {
    readonly properties: {
        readonly harDataSomIkkeHarBlittTattMedIBehandling: {
            readonly type: "boolean";
        };
        readonly harUklassifiserteDokumenter: {
            readonly type: "boolean";
        };
        readonly ikkeSammenMedBarnet: {
            readonly type: "boolean";
        };
        readonly kanLøseAksjonspunkt: {
            readonly type: "boolean";
        };
        readonly manglerDiagnosekode: {
            readonly type: "boolean";
        };
        readonly manglerGodkjentLegeerklæring: {
            readonly type: "boolean";
        };
        readonly manglerVurderingAvILivetsSluttfase: {
            readonly type: "boolean";
        };
        readonly manglerVurderingAvKontinuerligTilsynOgPleie: {
            readonly type: "boolean";
        };
        readonly manglerVurderingAvLangvarigSykdom: {
            readonly type: "boolean";
        };
        readonly manglerVurderingAvToOmsorgspersoner: {
            readonly type: "boolean";
        };
        readonly nyttDokumentHarIkkekontrollertEksisterendeVurderinger: {
            readonly type: "boolean";
        };
    };
    readonly type: "object";
};
export declare const $SykdomDiagnosekoderDto: {
    readonly properties: {
        readonly behandlingUuid: {
            readonly format: "uuid";
            readonly type: "string";
        };
        readonly diagnosekoder: {
            readonly items: {
                readonly maxLength: 1000;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly maxItems: 1000;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly links: {
            readonly items: {
                readonly $ref: "#/components/schemas/ResourceLink";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly versjon: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}-]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["behandlingUuid"];
    readonly type: "object";
};
export declare const $SykdomDokumentDto: {
    readonly properties: {
        readonly annenPartErKilde: {
            readonly type: "boolean";
        };
        readonly benyttet: {
            readonly type: "boolean";
        };
        readonly bruktTilMinstEnVurdering: {
            readonly type: "boolean";
        };
        readonly datert: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly fremhevet: {
            readonly type: "boolean";
        };
        readonly id: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}-]+$";
            readonly type: "string";
        };
        readonly links: {
            readonly items: {
                readonly $ref: "#/components/schemas/ResourceLink";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly type: {
            readonly enum: readonly ["LEGEERKLÆRING_SYKEHUS", "MEDISINSKE_OPPLYSNINGER", "ANNET", "UKLASSIFISERT", "LEGEERKLÆRING_ANNEN", "LEGEERKLÆRING_MED_DOKUMENTASJON_AV_OPPLÆRING", "EPIKRISE", "FEILREGISTRERT"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["id"];
    readonly type: "object";
};
export declare const $SykdomDokumentEndringDto: {
    readonly properties: {
        readonly behandlingUuid: {
            readonly format: "uuid";
            readonly type: "string";
        };
        readonly datert: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly duplikatAvId: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}-]+$";
            readonly type: "string";
        };
        readonly id: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}-]+$";
            readonly type: "string";
        };
        readonly type: {
            readonly enum: readonly ["LEGEERKLÆRING_SYKEHUS", "MEDISINSKE_OPPLYSNINGER", "ANNET", "UKLASSIFISERT", "LEGEERKLÆRING_ANNEN", "LEGEERKLÆRING_MED_DOKUMENTASJON_AV_OPPLÆRING", "EPIKRISE", "FEILREGISTRERT"];
            readonly type: "string";
        };
        readonly versjon: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}-]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["behandlingUuid", "datert", "duplikatAvId", "id", "type", "versjon"];
    readonly type: "object";
};
export declare const $SykdomDokumentIdDto: {
    readonly properties: {
        readonly sykdomDokumentId: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}-]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["sykdomDokumentId"];
    readonly type: "object";
};
export declare const $SykdomDokumentOpprettelseDto: {
    readonly properties: {
        readonly behandlingUuid: {
            readonly format: "uuid";
            readonly type: "string";
        };
        readonly harInfoSomIkkeKanPunsjes: {
            readonly type: "boolean";
        };
        readonly journalpostId: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["behandlingUuid", "journalpostId"];
    readonly type: "object";
};
export declare const $SykdomDokumentOversikt: {
    readonly properties: {
        readonly dokumenter: {
            readonly items: {
                readonly $ref: "#/components/schemas/SykdomDokumentOversiktElement";
            };
            readonly maxItems: 1000;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly links: {
            readonly items: {
                readonly $ref: "#/components/schemas/ResourceLink";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $SykdomDokumentOversiktElement: {
    readonly properties: {
        readonly annenPartErKilde: {
            readonly type: "boolean";
        };
        readonly behandlet: {
            readonly type: "boolean";
        };
        readonly datert: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly duplikatAvId: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}-]+$";
            readonly type: "string";
        };
        readonly duplikater: {
            readonly items: {
                readonly maxLength: 1000;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly maxItems: 1000;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly id: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}-]+$";
            readonly type: "string";
        };
        readonly links: {
            readonly items: {
                readonly $ref: "#/components/schemas/ResourceLink";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly mottattDato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly mottattTidspunkt: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly type: {
            readonly enum: readonly ["LEGEERKLÆRING_SYKEHUS", "MEDISINSKE_OPPLYSNINGER", "ANNET", "UKLASSIFISERT", "LEGEERKLÆRING_ANNEN", "LEGEERKLÆRING_MED_DOKUMENTASJON_AV_OPPLÆRING", "EPIKRISE", "FEILREGISTRERT"];
            readonly type: "string";
        };
        readonly versjon: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}-]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["id", "versjon"];
    readonly type: "object";
};
export declare const $SykdomDokumentUtkvitterEksisterendeVurderingerDto: {
    readonly properties: {
        readonly behandlingUuid: {
            readonly format: "uuid";
            readonly type: "string";
        };
        readonly dokumenterSomSkalUtkvitteres: {
            readonly items: {
                readonly maxLength: 100;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["behandlingUuid"];
    readonly type: "object";
};
export declare const $SykdomInnleggelseDto: {
    readonly properties: {
        readonly behandlingUuid: {
            readonly format: "uuid";
            readonly type: "string";
        };
        readonly dryRun: {
            readonly type: "boolean";
        };
        readonly links: {
            readonly items: {
                readonly $ref: "#/components/schemas/ResourceLink";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly perioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/Periode";
            };
            readonly maxItems: 1000;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly versjon: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}-]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["behandlingUuid"];
    readonly type: "object";
};
export declare const $SykdomInnleggelseOppdateringResultatDto: {
    readonly properties: {
        readonly førerTilRevurdering: {
            readonly type: "boolean";
        };
    };
    readonly type: "object";
};
export declare const $SykdomPeriodeMedEndringDto: {
    readonly properties: {
        readonly endrerAnnenVurdering: {
            readonly type: "boolean";
        };
        readonly endrerVurderingSammeBehandling: {
            readonly type: "boolean";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
    };
    readonly type: "object";
};
export declare const $SykdomVurderingAnnenInformasjon: {
    readonly properties: {
        readonly perioderSomKanVurderes: {
            readonly items: {
                readonly $ref: "#/components/schemas/Periode";
            };
            readonly maxItems: 1000;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly resterendeVurderingsperioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/Periode";
            };
            readonly maxItems: 1000;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $SykdomVurderingDto: {
    readonly properties: {
        readonly annenInformasjon: {
            readonly $ref: "#/components/schemas/SykdomVurderingAnnenInformasjon";
        };
        readonly id: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}-]+$";
            readonly type: "string";
        };
        readonly type: {
            readonly enum: readonly ["KONTINUERLIG_TILSYN_OG_PLEIE", "TO_OMSORGSPERSONER", "LIVETS_SLUTTFASE", "LANGVARIG_SYKDOM"];
            readonly type: "string";
        };
        readonly versjoner: {
            readonly items: {
                readonly $ref: "#/components/schemas/SykdomVurderingVersjonDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["id"];
    readonly type: "object";
};
export declare const $SykdomVurderingEndringDto: {
    readonly properties: {
        readonly behandlingUuid: {
            readonly format: "uuid";
            readonly type: "string";
        };
        readonly dryRun: {
            readonly type: "boolean";
        };
        readonly id: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}-]+$";
            readonly type: "string";
        };
        readonly perioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/Periode";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly resultat: {
            readonly enum: readonly ["OPPFYLT", "IKKE_OPPFYLT", "IKKE_VURDERT"];
            readonly type: "string";
        };
        readonly tekst: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly tilknyttedeDokumenter: {
            readonly items: {
                readonly maxLength: 100;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
            readonly uniqueItems: true;
        };
        readonly versjon: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}-]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["behandlingUuid", "id", "versjon"];
    readonly type: "object";
};
export declare const $SykdomVurderingEndringResultatDto: {
    readonly properties: {
        readonly perioderMedEndringer: {
            readonly items: {
                readonly $ref: "#/components/schemas/SykdomPeriodeMedEndringDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["perioderMedEndringer"];
    readonly type: "object";
};
export declare const $SykdomVurderingIdDto: {
    readonly properties: {
        readonly sykdomVurderingId: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}-]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["sykdomVurderingId"];
    readonly type: "object";
};
export declare const $SykdomVurderingOpprettelseDto: {
    readonly properties: {
        readonly behandlingUuid: {
            readonly format: "uuid";
            readonly type: "string";
        };
        readonly dryRun: {
            readonly type: "boolean";
        };
        readonly perioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/Periode";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly resultat: {
            readonly enum: readonly ["OPPFYLT", "IKKE_OPPFYLT", "IKKE_VURDERT"];
            readonly type: "string";
        };
        readonly tekst: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly tilknyttedeDokumenter: {
            readonly items: {
                readonly maxLength: 100;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
            readonly uniqueItems: true;
        };
        readonly type: {
            readonly enum: readonly ["KONTINUERLIG_TILSYN_OG_PLEIE", "TO_OMSORGSPERSONER", "LIVETS_SLUTTFASE", "LANGVARIG_SYKDOM"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["behandlingUuid", "type"];
    readonly type: "object";
};
export declare const $SykdomVurderingOversikt: {
    readonly properties: {
        readonly harPerioderDerPleietrengendeErOver18år: {
            readonly type: "boolean";
        };
        readonly links: {
            readonly items: {
                readonly $ref: "#/components/schemas/ResourceLink";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly perioderSomKanVurderes: {
            readonly items: {
                readonly $ref: "#/components/schemas/Periode";
            };
            readonly maxItems: 1000;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly pleietrengendesFødselsdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly resterendeValgfrieVurderingsperioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/Periode";
            };
            readonly maxItems: 1000;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly resterendeVurderingsperioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/Periode";
            };
            readonly maxItems: 1000;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly søknadsperioderTilBehandling: {
            readonly items: {
                readonly $ref: "#/components/schemas/Periode";
            };
            readonly maxItems: 1000;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly vurderingselementer: {
            readonly items: {
                readonly $ref: "#/components/schemas/SykdomVurderingOversiktElement";
            };
            readonly maxItems: 1000;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $SykdomVurderingOversiktElement: {
    readonly properties: {
        readonly endretIDenneBehandlingen: {
            readonly type: "boolean";
        };
        readonly erInnleggelsesperiode: {
            readonly type: "boolean";
        };
        readonly gjelderForAnnenPart: {
            readonly type: "boolean";
        };
        readonly gjelderForSøker: {
            readonly type: "boolean";
        };
        readonly id: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}-]+$";
            readonly type: "string";
        };
        readonly links: {
            readonly items: {
                readonly $ref: "#/components/schemas/ResourceLink";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly resultat: {
            readonly enum: readonly ["OPPFYLT", "IKKE_OPPFYLT", "IKKE_VURDERT"];
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $SykdomVurderingVersjonDto: {
    readonly properties: {
        readonly dokumenter: {
            readonly items: {
                readonly $ref: "#/components/schemas/SykdomDokumentDto";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly endretAv: {
            readonly maxLength: 20;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly endretTidspunkt: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly perioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/Periode";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly resultat: {
            readonly enum: readonly ["OPPFYLT", "IKKE_OPPFYLT", "IKKE_VURDERT"];
            readonly type: "string";
        };
        readonly tekst: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly versjon: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}-]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["versjon"];
    readonly type: "object";
};
export declare const $SystemNedeDto: {
    readonly properties: {
        readonly endepunkt: {
            readonly maxLength: 500;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{P}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly feilmelding: {
            readonly maxLength: 50000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{P}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly nedeFremTilTidspunkt: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly stackTrace: {
            readonly maxLength: 50000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{P}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly systemNavn: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{P}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["systemNavn"];
    readonly type: "object";
};
export declare const $SøkeSakEllerBrukerDto: {
    readonly properties: {
        readonly searchString: {
            readonly pattern: "^[a-zA-Z0-9]*$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["searchString"];
    readonly type: "object";
};
export declare const $SøknadDto: {
    readonly properties: {
        readonly angittePersoner: {
            readonly items: {
                readonly $ref: "#/components/schemas/AngittPersonDto";
            };
            readonly maxItems: 30;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly begrunnelseForSenInnsending: {
            readonly maxLength: 5000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly manglendeVedlegg: {
            readonly items: {
                readonly $ref: "#/components/schemas/ManglendeVedleggDto";
            };
            readonly maxItems: 20;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly mottattDato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly oppgittStartdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly oppgittTilknytning: {
            readonly $ref: "#/components/schemas/OppgittTilknytningDto";
        };
        readonly soknadsdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly spraakkode: {
            readonly $ref: "#/components/schemas/Språkkode";
        };
        readonly søknadsperiode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly tilleggsopplysninger: {
            readonly maxLength: 5000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["mottattDato", "oppgittStartdato", "soknadsdato"];
    readonly type: "object";
};
export declare const $SøknadsfristPeriodeDto: {
    readonly properties: {
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly status: {
            readonly enum: readonly ["IKKE_OPPFYLT", "IKKE_VURDERT", "OPPFYLT", "IKKE_RELEVANT", "UDEFINERT"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["periode"];
    readonly type: "object";
};
export declare const $SøknadsfristTilstandDto: {
    readonly properties: {
        readonly dokumentStatus: {
            readonly items: {
                readonly $ref: "#/components/schemas/KravDokumentStatus";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["dokumentStatus"];
    readonly type: "object";
};
export declare const $SøknadsopplysningerDto: {
    readonly properties: {
        readonly erNyoppstartet: {
            readonly type: "boolean";
        };
        readonly oppgittInntekt: {
            readonly type: "number";
        };
        readonly oppgittÅrsinntekt: {
            readonly type: "number";
        };
    };
    readonly type: "object";
};
export declare const $SøknadsperiodeOgOppgittOpptjeningV2Dto: {
    readonly properties: {
        readonly førSøkerPerioden: {
            readonly $ref: "#/components/schemas/OppgittOpptjeningDto";
        };
        readonly måneder: {
            readonly items: {
                readonly $ref: "#/components/schemas/PeriodeMedSNOgFLDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 1;
            readonly type: "array";
        };
    };
    readonly required: readonly ["førSøkerPerioden", "måneder"];
    readonly type: "object";
};
export declare const $SøktPeriode: {
    readonly properties: {
        readonly arbeidsforholdRef: {
            readonly format: "uuid";
            readonly type: "string";
        };
        readonly arbeidsgiver: {
            readonly $ref: "#/components/schemas/Arbeidsgiver";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly type: {
            readonly enum: readonly ["AT", "SN", "FL", "DP", "SP_AV_DP", "PSB_AV_DP", "BA", "IKKE_YRKESAKTIV", "IKKE_YRKESAKTIV_UTEN_ERSTATNING", "MIDL_INAKTIV", "ANNET"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["periode"];
    readonly type: "object";
};
export declare const $TidligereUtbetalingDto: {
    readonly properties: {
        readonly erTildeltRefusjon: {
            readonly type: "boolean";
        };
        readonly fom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly tom: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["erTildeltRefusjon", "fom"];
    readonly type: "object";
};
export declare const $TilbakekrevingValgDto: {
    readonly properties: {
        readonly erTilbakekrevingVilkårOppfylt: {
            readonly type: "boolean";
        };
        readonly grunnerTilReduksjon: {
            readonly type: "boolean";
        };
        readonly varseltekst: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{P}\\p{N}]+$";
            readonly type: "string";
        };
        readonly videreBehandling: {
            readonly enum: readonly ["UDEFINIERT", "OPPRETT_TILBAKEKREVING", "IGNORER_TILBAKEKREVING", "INNTREKK", "TILBAKEKR_OPPDATER"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["erTilbakekrevingVilkårOppfylt"];
    readonly type: "object";
};
export declare const $TilkjentYtelse: {
    readonly properties: {
        readonly perioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/TilkjentYtelsePeriodeV1";
            };
            readonly maxItems: 700;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["perioder"];
    readonly type: "object";
};
export declare const $TilkjentYtelseAndelV1: {
    readonly properties: {
        readonly arbeidsforholdId: {
            readonly maxLength: 100;
            readonly minLength: 1;
            readonly pattern: "^[\\p{Graph}\\s\\t\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly arbeidsgiverAktoerId: {
            readonly maxLength: 13;
            readonly minLength: 13;
            readonly pattern: "^\\d*$";
            readonly type: "string";
        };
        readonly arbeidsgiverOrgNr: {
            readonly maxLength: 9;
            readonly minLength: 9;
            readonly pattern: "^\\d*$";
            readonly type: "string";
        };
        readonly feriepenger: {
            readonly items: {
                readonly $ref: "#/components/schemas/TilkjentYtelseFeriepengerV1";
            };
            readonly maxItems: 3;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly inntektskategori: {
            readonly enum: readonly ["ARBEIDSTAKER", "FRILANSER", "SELVSTENDIG_NÆRINGSDRIVENDE", "DAGPENGER", "ARBEIDSAVKLARINGSPENGER", "SJØMANN", "DAGMAMMA", "JORDBRUKER", "FISKER", "ARBEIDSTAKER_UTEN_FERIEPENGER", "-"];
            readonly type: "string";
        };
        readonly satsBeloep: {
            readonly format: "int64";
            readonly maximum: 3290;
            readonly minimum: 1;
            readonly type: "integer";
        };
        readonly satsType: {
            readonly enum: readonly ["DAG", "DAG7", "UKE", "MND", "AAR", "ENG", "AKTO", "-"];
            readonly type: "string";
        };
        readonly utbetalesTilBruker: {
            readonly type: "boolean";
        };
        readonly utbetalingsgrad: {
            readonly exclusiveMaximum: false;
            readonly exclusiveMinimum: false;
            readonly maximum: 100;
            readonly minimum: 0;
            readonly type: "number";
        };
    };
    readonly required: readonly ["inntektskategori", "satsBeloep", "satsType", "utbetalingsgrad"];
    readonly type: "object";
};
export declare const $TilkjentYtelseBehandlingInfoV1: {
    readonly properties: {
        readonly aktoerId: {
            readonly maxLength: 50;
            readonly minLength: 13;
            readonly pattern: "^\\d{13}$";
            readonly type: "string";
        };
        readonly ansvarligSaksbehandler: {
            readonly maxLength: 50;
            readonly minLength: 2;
            readonly pattern: "^[\\s\\p{L}\\p{M}\\p{N}\\p{P}]+$";
            readonly type: "string";
        };
        readonly behandlendeEnhet: {
            readonly maxLength: 4;
            readonly minLength: 4;
            readonly pattern: "^\\d+$";
            readonly type: "string";
        };
        readonly behandlingId: {
            readonly type: "string";
        };
        readonly behandlingTidspunkt: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly doedsdatoBruker: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly forrigeBehandlingId: {
            readonly type: "string";
        };
        readonly gjelderAdopsjon: {
            readonly type: "boolean";
        };
        readonly saksnummer: {
            readonly type: "string";
        };
        readonly vedtaksdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly ytelseType: {
            readonly enum: readonly ["DAG", "SP", "FRISINN", "PSB", "PPN", "OMP", "OLP", "PS", "AAP", "ES", "FP", "SVP", "EF", "-"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["aktoerId", "behandlingId", "behandlingTidspunkt", "saksnummer", "vedtaksdato", "ytelseType"];
    readonly type: "object";
};
export declare const $TilkjentYtelseFeriepengerV1: {
    readonly properties: {
        readonly beloep: {
            readonly format: "int64";
            readonly maximum: 100000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly opptjeningsaar: {
            readonly format: "int32";
            readonly maximum: 2100;
            readonly minimum: 2010;
            readonly type: "integer";
        };
    };
    readonly type: "object";
};
export declare const $TilkjentYtelseOppdrag: {
    readonly properties: {
        readonly behandlingsinfo: {
            readonly $ref: "#/components/schemas/TilkjentYtelseBehandlingInfoV1";
        };
        readonly inntrekkBeslutning: {
            readonly $ref: "#/components/schemas/InntrekkBeslutning";
        };
        readonly tilkjentYtelse: {
            readonly $ref: "#/components/schemas/TilkjentYtelse";
        };
    };
    readonly required: readonly ["behandlingsinfo", "inntrekkBeslutning", "tilkjentYtelse"];
    readonly type: "object";
};
export declare const $TilkjentYtelsePeriodeV1: {
    readonly properties: {
        readonly andeler: {
            readonly items: {
                readonly $ref: "#/components/schemas/TilkjentYtelseAndelV1";
            };
            readonly maxItems: 100;
            readonly minItems: 1;
            readonly type: "array";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
    };
    readonly required: readonly ["andeler", "periode"];
    readonly type: "object";
};
export declare const $TotrinnsArbeidsforholdDto: {
    readonly properties: {
        readonly arbeidsforholdHandlingType: {
            readonly enum: readonly ["-", "BRUK", "LAGT_TIL_AV_SAKSBEHANDLER", "BASERT_PÅ_INNTEKTSMELDING", "BRUK_UTEN_INNTEKTSMELDING", "IKKE_BRUK", "NYTT_ARBEIDSFORHOLD", "SLÅTT_SAMMEN_MED_ANNET", "BRUK_MED_OVERSTYRT_PERIODE", "INNTEKT_IKKE_MED_I_BG"];
            readonly type: "string";
        };
        readonly arbeidsforholdId: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly brukPermisjon: {
            readonly type: "boolean";
        };
        readonly navn: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly organisasjonsnummer: {
            readonly maxLength: 20;
            readonly minLength: 0;
            readonly pattern: "^[1-9][0-9\\-.]{6,20}+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["navn"];
    readonly type: "object";
};
export declare const $TotrinnsBeregningDto: {
    readonly properties: {
        readonly faktaOmBeregningTilfeller: {
            readonly items: {
                readonly enum: readonly ["VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD", "VURDER_SN_NY_I_ARBEIDSLIVET", "VURDER_NYOPPSTARTET_FL", "FASTSETT_MAANEDSINNTEKT_FL", "FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING", "VURDER_LØNNSENDRING", "FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING", "VURDER_AT_OG_FL_I_SAMME_ORGANISASJON", "FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE", "VURDER_ETTERLØNN_SLUTTPAKKE", "FASTSETT_ETTERLØNN_SLUTTPAKKE", "VURDER_MOTTAR_YTELSE", "VURDER_BESTEBEREGNING", "VURDER_MILITÆR_SIVILTJENESTE", "VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT", "FASTSETT_BG_KUN_YTELSE", "TILSTØTENDE_YTELSE", "FASTSETT_ENDRET_BEREGNINGSGRUNNLAG", "UDEFINERT"];
                readonly maxLength: 100;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly fastsattVarigEndring: {
            readonly type: "boolean";
        };
        readonly fastsattVarigEndringNaering: {
            readonly type: "boolean";
        };
        readonly skjæringstidspunkt: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $TotrinnskontrollAksjonspunkterDto: {
    readonly properties: {
        readonly aksjonspunktKode: {
            readonly maxLength: 10;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}]+$";
            readonly type: "string";
        };
        readonly arbeidsforholdDtos: {
            readonly items: {
                readonly $ref: "#/components/schemas/TotrinnsArbeidsforholdDto";
            };
            readonly maxItems: 200;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly beregningDto: {
            readonly $ref: "#/components/schemas/TotrinnsBeregningDto";
        };
        readonly beregningDtoer: {
            readonly items: {
                readonly $ref: "#/components/schemas/TotrinnsBeregningDto";
            };
            readonly type: "array";
        };
        readonly besluttersBegrunnelse: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly totrinnskontrollGodkjent: {
            readonly type: "boolean";
        };
        readonly vurderPaNyttArsaker: {
            readonly items: {
                readonly $ref: "#/components/schemas/TotrinnskontrollVurderÅrsak";
            };
            readonly maxItems: 100;
            readonly minItems: 0;
            readonly type: "array";
            readonly uniqueItems: true;
        };
    };
    readonly type: "object";
};
export declare const $TotrinnskontrollSkjermlenkeContextDto: {
    readonly properties: {
        readonly skjermlenkeType: {
            readonly maxLength: 50;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}\\s\\-]+$";
            readonly type: "string";
        };
        readonly totrinnskontrollAksjonspunkter: {
            readonly items: {
                readonly $ref: "#/components/schemas/TotrinnskontrollAksjonspunkterDto";
            };
            readonly maxItems: 50;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["skjermlenkeType"];
    readonly type: "object";
};
export declare const $TotrinnskontrollVurderÅrsak: {
    readonly properties: {
        readonly kode: {
            readonly maxLength: 10;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}]+$";
            readonly type: "string";
        };
        readonly navn: {
            readonly maxLength: 10;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{L}\\p{N}\\p{P}\\p{M}\\p{Sc}]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["kode", "navn"];
    readonly type: "object";
};
export declare const $UidentifisertRammevedtak: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/Rammevedtak";
    }, {
        readonly properties: {
            readonly fritekst: {
                readonly type: "string";
            };
            readonly gyldigFraOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly gyldigTilOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly vedtatt: {
                readonly format: "date";
                readonly type: "string";
            };
        };
        readonly type: "object";
    }];
    readonly type: "object";
};
export declare const $UtbetalingDto: {
    readonly properties: {
        readonly arbeidsgiver: {
            readonly $ref: "#/components/schemas/Aktør";
        };
        readonly inntektsKilde: {
            readonly enum: readonly ["-", "INNTEKT_OPPTJENING", "INNTEKT_BEREGNING", "INNTEKT_SAMMENLIGNING", "SIGRUN", "VANLIG"];
            readonly type: "string";
        };
        readonly utbetalingsPoster: {
            readonly items: {
                readonly $ref: "#/components/schemas/UtbetalingsPostDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["inntektsKilde", "utbetalingsPoster"];
    readonly type: "object";
};
export declare const $UtbetalingsPostDto: {
    readonly properties: {
        readonly beløp: {
            readonly type: "number";
        };
        readonly inntektYtelseType: {
            readonly enum: readonly ["AAP", "DAGPENGER", "FORELDREPENGER", "SVANGERSKAPSPENGER", "SYKEPENGER", "OMSORGSPENGER", "OPPLÆRINGSPENGER", "PLEIEPENGER", "OVERGANGSSTØNAD_ENSLIG", "VENTELØNN", "FERIEPENGER_FORELDREPENGER", "FERIEPENGER_SVANGERSKAPSPENGER", "FERIEPENGER_OMSORGSPENGER", "FERIEPENGER_OPPLÆRINGSPENGER", "FERIEPENGER_PLEIEPENGER", "FERIEPENGER_SYKEPENGER", "FERIETILLEGG_DAGPENGER", "KVALIFISERINGSSTØNAD", "FORELDREPENGER_NÆRING", "SVANGERSKAPSPENGER_NÆRING", "SYKEPENGER_NÆRING", "OMSORGSPENGER_NÆRING", "OPPLÆRINGSPENGER_NÆRING", "PLEIEPENGER_NÆRING", "DAGPENGER_NÆRING", "ANNET", "VEDERLAG", "LOTT_KUN_TRYGDEAVGIFT", "KOMPENSASJON_FOR_TAPT_PERSONINNTEKT"];
            readonly type: "string";
        };
        readonly inntektspostType: {
            readonly enum: readonly ["-", "LØNN", "YTELSE", "VANLIG", "SELVSTENDIG_NÆRINGSDRIVENDE", "NÆRING_FISKE_FANGST_FAMBARNEHAGE"];
            readonly type: "string";
        };
        readonly lønnsinntektBeskrivelse: {
            readonly enum: readonly ["KOMMUNAL_OMSORGSLOENN_OG_FOSTERHJEMSGODTGJOERELSE", "-"];
            readonly type: "string";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly skattAvgiftType: {
            readonly enum: readonly ["SÆRSKILT_FRADRAG_FOR_SJØFOLK", "SVALBARD", "SKATTEFRI_ORGANISASJON", "NETTOLØNN_FOR_SJØFOLK", "NETTOLØNN", "KILDESKATT_PÅ_PENSJONER", "JAN_MAYEN_OG_BILANDENE", "-"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["inntektspostType", "periode"];
    readonly type: "object";
};
export declare const $UtbetalingsgradPrAktivitetDto: {
    readonly properties: {
        readonly periodeMedUtbetalingsgrad: {
            readonly items: {
                readonly $ref: "#/components/schemas/PeriodeMedUtbetalingsgradDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 1;
            readonly type: "array";
        };
        readonly utbetalingsgradArbeidsforholdDto: {
            readonly $ref: "#/components/schemas/AktivitetDto";
        };
    };
    readonly required: readonly ["periodeMedUtbetalingsgrad", "utbetalingsgradArbeidsforholdDto"];
    readonly type: "object";
};
export declare const $Utbetalingsgrader: {
    readonly properties: {
        readonly arbeidsforhold: {
            readonly $ref: "#/components/schemas/Arbeidsforhold";
        };
        readonly faktiskArbeidstid: {
            readonly properties: {
                readonly nano: {
                    readonly format: "int32";
                    readonly type: "integer";
                };
                readonly negative: {
                    readonly type: "boolean";
                };
                readonly positive: {
                    readonly type: "boolean";
                };
                readonly seconds: {
                    readonly format: "int64";
                    readonly type: "integer";
                };
                readonly units: {
                    readonly items: {
                        readonly properties: {
                            readonly dateBased: {
                                readonly type: "boolean";
                            };
                            readonly duration: {
                                readonly properties: {
                                    readonly nano: {
                                        readonly format: "int32";
                                        readonly type: "integer";
                                    };
                                    readonly negative: {
                                        readonly type: "boolean";
                                    };
                                    readonly positive: {
                                        readonly type: "boolean";
                                    };
                                    readonly seconds: {
                                        readonly format: "int64";
                                        readonly type: "integer";
                                    };
                                    readonly zero: {
                                        readonly type: "boolean";
                                    };
                                };
                                readonly type: "object";
                            };
                            readonly durationEstimated: {
                                readonly type: "boolean";
                            };
                            readonly timeBased: {
                                readonly type: "boolean";
                            };
                        };
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly zero: {
                    readonly type: "boolean";
                };
            };
            readonly type: "object";
        };
        readonly normalArbeidstid: {
            readonly properties: {
                readonly nano: {
                    readonly format: "int32";
                    readonly type: "integer";
                };
                readonly negative: {
                    readonly type: "boolean";
                };
                readonly positive: {
                    readonly type: "boolean";
                };
                readonly seconds: {
                    readonly format: "int64";
                    readonly type: "integer";
                };
                readonly units: {
                    readonly items: {
                        readonly properties: {
                            readonly dateBased: {
                                readonly type: "boolean";
                            };
                            readonly duration: {
                                readonly properties: {
                                    readonly nano: {
                                        readonly format: "int32";
                                        readonly type: "integer";
                                    };
                                    readonly negative: {
                                        readonly type: "boolean";
                                    };
                                    readonly positive: {
                                        readonly type: "boolean";
                                    };
                                    readonly seconds: {
                                        readonly format: "int64";
                                        readonly type: "integer";
                                    };
                                    readonly zero: {
                                        readonly type: "boolean";
                                    };
                                };
                                readonly type: "object";
                            };
                            readonly durationEstimated: {
                                readonly type: "boolean";
                            };
                            readonly timeBased: {
                                readonly type: "boolean";
                            };
                        };
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly zero: {
                    readonly type: "boolean";
                };
            };
            readonly type: "object";
        };
        readonly tilkommet: {
            readonly type: "boolean";
        };
        readonly utbetalingsgrad: {
            readonly type: "number";
        };
    };
    readonly type: "object";
};
export declare const $UtenlandskBarn: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/Rammevedtak";
    }, {
        readonly properties: {
            readonly barnetsFødselsdato: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly fødselsdato: {
                readonly type: "string";
            };
            readonly gyldigFraOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly gyldigTilOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly lengde: {
                readonly properties: {
                    readonly nano: {
                        readonly format: "int32";
                        readonly type: "integer";
                    };
                    readonly negative: {
                        readonly type: "boolean";
                    };
                    readonly positive: {
                        readonly type: "boolean";
                    };
                    readonly seconds: {
                        readonly format: "int64";
                        readonly type: "integer";
                    };
                    readonly units: {
                        readonly items: {
                            readonly properties: {
                                readonly dateBased: {
                                    readonly type: "boolean";
                                };
                                readonly duration: {
                                    readonly properties: {
                                        readonly nano: {
                                            readonly format: "int32";
                                            readonly type: "integer";
                                        };
                                        readonly negative: {
                                            readonly type: "boolean";
                                        };
                                        readonly positive: {
                                            readonly type: "boolean";
                                        };
                                        readonly seconds: {
                                            readonly format: "int64";
                                            readonly type: "integer";
                                        };
                                        readonly zero: {
                                            readonly type: "boolean";
                                        };
                                    };
                                    readonly type: "object";
                                };
                                readonly durationEstimated: {
                                    readonly type: "boolean";
                                };
                                readonly timeBased: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly zero: {
                        readonly type: "boolean";
                    };
                };
                readonly type: "object";
            };
            readonly vedtatt: {
                readonly format: "date";
                readonly type: "string";
            };
        };
        readonly type: "object";
    }];
    readonly type: "object";
};
export declare const $Utenlandsopphold: {
    readonly properties: {
        readonly erEøsLand: {
            readonly type: "boolean";
        };
        readonly landkode: {
            readonly type: "string";
        };
        readonly årsak: {
            readonly enum: readonly ["BARNET_INNLAGT_I_HELSEINSTITUSJON_FOR_NORSK_OFFENTLIG_REGNING", "BARNET_INNLAGT_I_HELSEINSTITUSJON_DEKKET_ETTER_AVTALE_MED_ET_ANNET_LAND_OM_TRYGD", "INGEN"];
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $UtenlandsoppholdDto: {
    readonly properties: {
        readonly perioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/UtenlandsoppholdPeriodeDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $UtenlandsoppholdPeriodeDto: {
    readonly properties: {
        readonly landkode: {
            readonly $ref: "#/components/schemas/Landkoder";
        };
        readonly periode: {
            readonly maxLength: 2147483647;
            readonly minLength: 0;
            readonly type: "string";
        };
        readonly region: {
            readonly enum: readonly ["NORDEN", "EOS", "ANNET", "-"];
            readonly type: "string";
        };
        readonly årsak: {
            readonly enum: readonly ["BARNET_INNLAGT_I_HELSEINSTITUSJON_FOR_NORSK_OFFENTLIG_REGNING", "BARNET_INNLAGT_I_HELSEINSTITUSJON_DEKKET_ETTER_AVTALE_MED_ET_ANNET_LAND_OM_TRYGD", "INGEN"];
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $UtlandsoppholdDto: {
    readonly properties: {
        readonly fom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly landNavn: {
            readonly maxLength: 1000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly tom: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["fom", "landNavn", "tom"];
    readonly type: "object";
};
export declare const $UtsettelsePeriode: {
    readonly properties: {
        readonly indexKey: {
            readonly type: "string";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/DatoIntervallEntitet";
        };
        readonly årsak: {
            readonly enum: readonly ["ARBEID", "LOVBESTEMT_FERIE", "SYKDOM", "INSTITUSJONSOPPHOLD_SØKER", "INSTITUSJONSOPPHOLD_BARNET", "-"];
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $UttakAktivitetPeriodeDto: {
    readonly properties: {
        readonly periode: {
            readonly type: "string";
        };
        readonly type: {
            readonly enum: readonly ["AT", "SN", "FL", "DP", "SP_AV_DP", "PSB_AV_DP", "BA", "IKKE_YRKESAKTIV", "IKKE_YRKESAKTIV_UTEN_ERSTATNING", "MIDL_INAKTIV", "ANNET"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["periode", "type"];
    readonly type: "object";
};
export declare const $UttakArbeidsforhold: {
    readonly properties: {
        readonly aktørId: {
            readonly type: "string";
        };
        readonly arbeidsforholdId: {
            readonly maxLength: 40;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Alnum}_\\.\\-]+$";
            readonly type: "string";
        };
        readonly organisasjonsnummer: {
            readonly maxLength: 20;
            readonly minLength: 0;
            readonly pattern: "^\\d+$";
            readonly type: "string";
        };
        readonly type: {
            readonly enum: readonly ["AT", "SN", "FL", "DP", "SP_AV_DP", "PSB_AV_DP", "BA", "IKKE_YRKESAKTIV", "IKKE_YRKESAKTIV_UTEN_ERSTATNING", "MIDL_INAKTIV", "ANNET"];
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $UttakDto: {
    readonly properties: {
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly utbetalingsgrad: {
            readonly exclusiveMaximum: false;
            readonly exclusiveMinimum: false;
            readonly maximum: 100;
            readonly minimum: 0;
            readonly type: "number";
        };
        readonly utfall: {
            readonly enum: readonly ["INNVILGET", "AVSLÅTT", "UDEFINERT"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["periode", "utbetalingsgrad", "utfall"];
    readonly type: "object";
};
export declare const $Uttaksperiode: {
    readonly properties: {
        readonly avvikImSøknad: {
            readonly enum: readonly ["SØKNAD_UTEN_MATCHENDE_IM", "IM_REFUSJONSKRAV_TRUMFER_SØKNAD", "INGEN_AVVIK", "UDEFINERT"];
            readonly type: "string";
        };
        readonly bekreftet: {
            readonly enum: readonly ["UBEKREFTET", "SYSTEMBEKREFTET", "MANUELTBEKREFTET"];
            readonly type: "string";
        };
        readonly delvisFravær: {
            readonly properties: {
                readonly nano: {
                    readonly format: "int32";
                    readonly type: "integer";
                };
                readonly negative: {
                    readonly type: "boolean";
                };
                readonly positive: {
                    readonly type: "boolean";
                };
                readonly seconds: {
                    readonly format: "int64";
                    readonly type: "integer";
                };
                readonly units: {
                    readonly items: {
                        readonly properties: {
                            readonly dateBased: {
                                readonly type: "boolean";
                            };
                            readonly duration: {
                                readonly properties: {
                                    readonly nano: {
                                        readonly format: "int32";
                                        readonly type: "integer";
                                    };
                                    readonly negative: {
                                        readonly type: "boolean";
                                    };
                                    readonly positive: {
                                        readonly type: "boolean";
                                    };
                                    readonly seconds: {
                                        readonly format: "int64";
                                        readonly type: "integer";
                                    };
                                    readonly zero: {
                                        readonly type: "boolean";
                                    };
                                };
                                readonly type: "object";
                            };
                            readonly durationEstimated: {
                                readonly type: "boolean";
                            };
                            readonly timeBased: {
                                readonly type: "boolean";
                            };
                        };
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly zero: {
                    readonly type: "boolean";
                };
            };
            readonly type: "object";
        };
        readonly fraværÅrsak: {
            readonly enum: readonly ["STENGT_SKOLE_ELLER_BARNEHAGE", "SMITTEVERNHENSYN", "ORDINÆRT_FRAVÆR", "UDEFINERT"];
            readonly type: "string";
        };
        readonly hjemler: {
            readonly items: {
                readonly enum: readonly ["FTRL_9_3__1", "FTRL_9_5__1", "FTRL_9_5", "FTRL_9_5__2", "FTRL_9_5__3", "FTRL_9_6__1", "FTRL_9_6__2_OG_4", "FTRL_9_6__3", "FTRL_9_6__5", "FTRL_9_6__6", "FTRL_9_8_JF_8_10__3", "FTRL_9_7__1_3", "FTRL_9_7__4", "FTRL_9_8__3", "FTRL_9_9__1", "FTRL_25_16", "COVID19_1_2", "COVID19_4_3", "COVID19_4_1__2", "COVID19_4_1__2_OG_3", "COVID19_4_2", "COVID19_4_3__1", "COVID19_4_3__2"];
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly mottattTidspunkt: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly nøkkeltall: {
            readonly $ref: "#/components/schemas/Nøkkeltall";
        };
        readonly omsorgenForManueltAvklartIk9: {
            readonly type: "boolean";
        };
        readonly opprinneligBehandlingUuid: {
            readonly format: "uuid";
            readonly type: "string";
        };
        readonly periode: {
            readonly type: "string";
        };
        readonly periodetype: {
            readonly enum: readonly ["NY", "REVURDERT"];
            readonly type: "string";
        };
        readonly refusjonTilArbeidsgiver: {
            readonly type: "boolean";
        };
        readonly søknadÅrsak: {
            readonly enum: readonly ["ARBEIDSGIVER_KONKURS", "NYOPPSTARTET_HOS_ARBEIDSGIVER", "KONFLIKT_MED_ARBEIDSGIVER", "UDEFINERT"];
            readonly type: "string";
        };
        readonly utbetalingsgrad: {
            readonly type: "number";
        };
        readonly utfall: {
            readonly enum: readonly ["INNVILGET", "AVSLÅTT", "UAVKLART"];
            readonly type: "string";
        };
        readonly vurderteVilkår: {
            readonly $ref: "#/components/schemas/VurderteVilkår";
        };
    };
    readonly type: "object";
};
export declare const $UttaksperiodeInfo: {
    readonly properties: {
        readonly annenPart: {
            readonly enum: readonly ["ALENE", "MED_ANDRE", "VENTER_ANDRE"];
            readonly type: "string";
        };
        readonly beredskap: {
            readonly enum: readonly ["OPPFYLT", "IKKE_OPPFYLT"];
            readonly type: "string";
        };
        readonly endringsstatus: {
            readonly enum: readonly ["NY", "ENDRET", "UENDRET", "UENDRET_RESULTAT"];
            readonly type: "string";
        };
        readonly graderingMotTilsyn: {
            readonly $ref: "#/components/schemas/GraderingMotTilsyn";
        };
        readonly inngangsvilkår: {
            readonly additionalProperties: {
                readonly enum: readonly ["OPPFYLT", "IKKE_OPPFYLT"];
                readonly type: "string";
            };
            readonly type: "object";
        };
        readonly kildeBehandlingUUID: {
            readonly type: "string";
        };
        readonly knekkpunktTyper: {
            readonly items: {
                readonly enum: readonly ["LOVBESTEMT_FERIE", "PLEIEBEHOV", "TILSYNSPERIODE", "BEREDSKAPSPERIODE", "NATTEVÅKSPERIODE", "INNGANGSVILKÅR_IKKE_OPPFYLT", "ANNEN_PARTS_UTTAK", "FORRIGE_UTTAKPLAN", "TRUKKET_UTTAK", "ARBEID", "SØKERS_DØDSFALL", "BARNETS_DØDSFALL", "BARNETS_DØDSFALL_SLUTT_PÅ_RETT", "SØKERS_ALDER", "KRAVPRIORITETSPERIODE", "UTENLANDSOPPHOLD", "START_SPESIALHÅNDTERING_TILKOMMEN", "OVERSTYRT_INPUT", "INNTEKTSGRADERING"];
                readonly type: "string";
            };
            readonly type: "array";
            readonly uniqueItems: true;
        };
        readonly manueltOverstyrt: {
            readonly type: "boolean";
        };
        readonly nattevåk: {
            readonly enum: readonly ["OPPFYLT", "IKKE_OPPFYLT"];
            readonly type: "string";
        };
        readonly oppgittTilsyn: {
            readonly properties: {
                readonly nano: {
                    readonly format: "int32";
                    readonly type: "integer";
                };
                readonly negative: {
                    readonly type: "boolean";
                };
                readonly positive: {
                    readonly type: "boolean";
                };
                readonly seconds: {
                    readonly format: "int64";
                    readonly type: "integer";
                };
                readonly units: {
                    readonly items: {
                        readonly properties: {
                            readonly dateBased: {
                                readonly type: "boolean";
                            };
                            readonly duration: {
                                readonly properties: {
                                    readonly nano: {
                                        readonly format: "int32";
                                        readonly type: "integer";
                                    };
                                    readonly negative: {
                                        readonly type: "boolean";
                                    };
                                    readonly positive: {
                                        readonly type: "boolean";
                                    };
                                    readonly seconds: {
                                        readonly format: "int64";
                                        readonly type: "integer";
                                    };
                                    readonly zero: {
                                        readonly type: "boolean";
                                    };
                                };
                                readonly type: "object";
                            };
                            readonly durationEstimated: {
                                readonly type: "boolean";
                            };
                            readonly timeBased: {
                                readonly type: "boolean";
                            };
                        };
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly zero: {
                    readonly type: "boolean";
                };
            };
            readonly type: "object";
        };
        readonly pleiebehov: {
            readonly type: "number";
        };
        readonly søkersTapteArbeidstid: {
            readonly type: "number";
        };
        readonly søkersTapteTimer: {
            readonly properties: {
                readonly nano: {
                    readonly format: "int32";
                    readonly type: "integer";
                };
                readonly negative: {
                    readonly type: "boolean";
                };
                readonly positive: {
                    readonly type: "boolean";
                };
                readonly seconds: {
                    readonly format: "int64";
                    readonly type: "integer";
                };
                readonly units: {
                    readonly items: {
                        readonly properties: {
                            readonly dateBased: {
                                readonly type: "boolean";
                            };
                            readonly duration: {
                                readonly properties: {
                                    readonly nano: {
                                        readonly format: "int32";
                                        readonly type: "integer";
                                    };
                                    readonly negative: {
                                        readonly type: "boolean";
                                    };
                                    readonly positive: {
                                        readonly type: "boolean";
                                    };
                                    readonly seconds: {
                                        readonly format: "int64";
                                        readonly type: "integer";
                                    };
                                    readonly zero: {
                                        readonly type: "boolean";
                                    };
                                };
                                readonly type: "object";
                            };
                            readonly durationEstimated: {
                                readonly type: "boolean";
                            };
                            readonly timeBased: {
                                readonly type: "boolean";
                            };
                        };
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly zero: {
                    readonly type: "boolean";
                };
            };
            readonly type: "object";
        };
        readonly utbetalingsgrader: {
            readonly items: {
                readonly $ref: "#/components/schemas/Utbetalingsgrader";
            };
            readonly type: "array";
        };
        readonly utenlandsopphold: {
            readonly $ref: "#/components/schemas/Utenlandsopphold";
        };
        readonly utenlandsoppholdUtenÅrsak: {
            readonly type: "boolean";
        };
        readonly utfall: {
            readonly enum: readonly ["OPPFYLT", "IKKE_OPPFYLT"];
            readonly type: "string";
        };
        readonly uttaksgrad: {
            readonly type: "number";
        };
        readonly uttaksgradMedReduksjonGrunnetInntektsgradering: {
            readonly type: "number";
        };
        readonly uttaksgradUtenReduksjonGrunnetInntektsgradering: {
            readonly type: "number";
        };
        readonly årsaker: {
            readonly items: {
                readonly enum: readonly ["GRADERT_MOT_TILSYN", "AVKORTET_MOT_INNTEKT", "OVERSTYRT_UTTAKSGRAD", "AVKORTET_MOT_SØKERS_ØNSKE", "AVKORTET_MOT_KVOTE", "OPPFYLT_PGA_BARNETS_DØDSFALL", "OPPFYLT_PGA_BARNETS_DØDSFALL_6_UKER", "OPPFYLT_PGA_BARNETS_DØDSFALL_12_UKER", "FULL_DEKNING", "UTENOM_PLEIEBEHOV", "FOR_LAV_REST_PGA_ETABLERT_TILSYN", "FOR_LAV_REST_PGA_ANDRE_SØKERE", "FOR_LAV_REST_PGA_ETABLERT_TILSYN_OG_ANDRE_SØKERE", "FOR_LAV_TAPT_ARBEIDSTID", "FOR_LAV_ØNSKET_UTTAKSGRAD", "LOVBESTEMT_FERIE", "BARNETS_DØDSFALL", "SØKERS_DØDSFALL", "INNGANGSVILKÅR_IKKE_OPPFYLT", "FOR_LAV_INNTEKT", "FOR_MANGE_DAGER_UTENLANDSOPPHOLD", "MAKS_DAGER_OVERSTEGET", "OVERSTYRT_UTTAK_AVSLAG"];
                readonly type: "string";
            };
            readonly type: "array";
            readonly uniqueItems: true;
        };
    };
    readonly type: "object";
};
export declare const $Uttaksplan: {
    readonly properties: {
        readonly commitId: {
            readonly type: "string";
        };
        readonly kvoteInfo: {
            readonly $ref: "#/components/schemas/KvoteInfo";
        };
        readonly perioder: {
            readonly additionalProperties: {
                readonly $ref: "#/components/schemas/UttaksperiodeInfo";
            };
            readonly type: "object";
        };
        readonly trukketUttak: {
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $UttaksplanMedUtsattePerioder: {
    readonly properties: {
        readonly perioderTilVurdering: {
            readonly items: {
                readonly maxLength: 2147483647;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
            readonly uniqueItems: true;
        };
        readonly simulertUttaksplan: {
            readonly $ref: "#/components/schemas/Uttaksplan";
        };
        readonly utsattePerioder: {
            readonly items: {
                readonly maxLength: 2147483647;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
            readonly uniqueItems: true;
        };
        readonly uttaksplan: {
            readonly $ref: "#/components/schemas/Uttaksplan";
        };
        readonly virkningsdatoUttakNyeRegler: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["simulertUttaksplan", "uttaksplan"];
    readonly type: "object";
};
export declare const $UttrekkPerson: {
    readonly properties: {
        readonly antallDagerIgjen: {
            readonly type: "number";
        };
        readonly antallForbrukteDager: {
            readonly type: "number";
        };
        readonly saker: {
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly totaltAntallDager: {
            readonly type: "number";
        };
    };
    readonly type: "object";
};
export declare const $UtvidetRett: {
    readonly allOf: readonly [{
        readonly $ref: "#/components/schemas/Rammevedtak";
    }, {
        readonly properties: {
            readonly gyldigFraOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly gyldigTilOgMed: {
                readonly format: "date";
                readonly type: "string";
            };
            readonly lengde: {
                readonly properties: {
                    readonly nano: {
                        readonly format: "int32";
                        readonly type: "integer";
                    };
                    readonly negative: {
                        readonly type: "boolean";
                    };
                    readonly positive: {
                        readonly type: "boolean";
                    };
                    readonly seconds: {
                        readonly format: "int64";
                        readonly type: "integer";
                    };
                    readonly units: {
                        readonly items: {
                            readonly properties: {
                                readonly dateBased: {
                                    readonly type: "boolean";
                                };
                                readonly duration: {
                                    readonly properties: {
                                        readonly nano: {
                                            readonly format: "int32";
                                            readonly type: "integer";
                                        };
                                        readonly negative: {
                                            readonly type: "boolean";
                                        };
                                        readonly positive: {
                                            readonly type: "boolean";
                                        };
                                        readonly seconds: {
                                            readonly format: "int64";
                                            readonly type: "integer";
                                        };
                                        readonly zero: {
                                            readonly type: "boolean";
                                        };
                                    };
                                    readonly type: "object";
                                };
                                readonly durationEstimated: {
                                    readonly type: "boolean";
                                };
                                readonly timeBased: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly type: "object";
                        };
                        readonly type: "array";
                    };
                    readonly zero: {
                        readonly type: "boolean";
                    };
                };
                readonly type: "object";
            };
            readonly utvidetRettFor: {
                readonly type: "string";
            };
            readonly vedtatt: {
                readonly format: "date";
                readonly type: "string";
            };
        };
        readonly type: "object";
    }];
    readonly type: "object";
};
export declare const $VarseltekstDto: {
    readonly properties: {
        readonly varseltekst: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{P}\\p{N}]+$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["varseltekst"];
    readonly type: "object";
};
export declare const $VilkårDto: {
    readonly properties: {
        readonly avslagKode: {
            readonly pattern: "^[\\p{Alnum}\\p{Space}]+$";
            readonly type: "string";
        };
        readonly evaluering: {
            readonly maxLength: 1000000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{L}\\p{Sc}\\p{M}\\p{N}]+$";
            readonly readOnly: true;
            readonly type: "string";
        };
        readonly input: {
            readonly maxLength: 1000000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{L}\\p{Sc}\\p{M}\\p{N}]+$";
            readonly readOnly: true;
            readonly type: "string";
        };
        readonly lovReferanse: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{P}\\p{Space}\\p{L}\\p{Sc}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly merknadParametere: {
            readonly additionalProperties: {
                readonly maxLength: 20;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly type: "object";
        };
        readonly overstyrbar: {
            readonly type: "boolean";
        };
        readonly vilkarStatus: {
            readonly enum: readonly ["IKKE_OPPFYLT", "IKKE_VURDERT", "OPPFYLT", "IKKE_RELEVANT", "UDEFINERT"];
            readonly type: "string";
        };
        readonly vilkarType: {
            readonly enum: readonly ["K9_VILKÅRET", "MEDLEMSKAPSVILKÅRET", "OMSORGEN_FOR", "ALDERSVILKÅR", "ALDERSVILKÅR_BARN", "MEDISINSKEVILKÅR_UNDER_18_ÅR", "MEDISINSKEVILKÅR_18_ÅR", "SØKNADSFRIST", "SØKERSOPPLYSNINGSPLIKT", "OPPTJENINGSPERIODEVILKÅR", "OPPTJENINGSVILKÅRET", "BEREGNINGSGRUNNLAGVILKÅR", "I_LIVETS_SLUTTFASE", "NØDVENDIG_OPPLÆRING", "GODKJENT_OPPLÆRINGSINSTITUSJON", "GJENNOMGÅ_OPPLÆRING", "LANGVARIG_SYKDOM", "UTVIDETRETT", "UDEFINERT"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["vilkarStatus", "vilkarType"];
    readonly type: "object";
};
export declare const $VilkårMedPerioderDto: {
    readonly properties: {
        readonly lovReferanse: {
            readonly maxLength: 100;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{P}\\p{Space}\\p{L}\\p{Sc}\\p{M}\\p{N}]+$";
            readonly type: "string";
        };
        readonly overstyrbar: {
            readonly type: "boolean";
        };
        readonly perioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/VilkårPeriodeDto";
            };
            readonly type: "array";
        };
        readonly vilkarType: {
            readonly enum: readonly ["K9_VILKÅRET", "MEDLEMSKAPSVILKÅRET", "OMSORGEN_FOR", "ALDERSVILKÅR", "ALDERSVILKÅR_BARN", "MEDISINSKEVILKÅR_UNDER_18_ÅR", "MEDISINSKEVILKÅR_18_ÅR", "SØKNADSFRIST", "SØKERSOPPLYSNINGSPLIKT", "OPPTJENINGSPERIODEVILKÅR", "OPPTJENINGSVILKÅRET", "BEREGNINGSGRUNNLAGVILKÅR", "I_LIVETS_SLUTTFASE", "NØDVENDIG_OPPLÆRING", "GODKJENT_OPPLÆRINGSINSTITUSJON", "GJENNOMGÅ_OPPLÆRING", "LANGVARIG_SYKDOM", "UTVIDETRETT", "UDEFINERT"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["vilkarType"];
    readonly type: "object";
};
export declare const $VilkårPeriodeDto: {
    readonly properties: {
        readonly avslagKode: {
            readonly pattern: "^[\\p{Alnum}\\p{Space}]+$";
            readonly type: "string";
        };
        readonly begrunnelse: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly evaluering: {
            readonly maxLength: 1000000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{L}\\p{Sc}\\p{M}\\p{N}]+$";
            readonly readOnly: true;
            readonly type: "string";
        };
        readonly input: {
            readonly maxLength: 1000000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{L}\\p{Sc}\\p{M}\\p{N}]+$";
            readonly readOnly: true;
            readonly type: "string";
        };
        readonly merknad: {
            readonly enum: readonly ["VM_1001", "VM_1002", "VM_1003", "VM_1004", "VM_1005", "VM_1006", "VM_1007", "VM_1019", "VM_1020", "VM_1021", "VM_1022", "VM_1023", "VM_1024", "VM_1025", "VM_1026", "VM_1027", "VM_1028", "VM_1029", "VM_1099", "VM_1035", "VM_1041", "VM_1042", "VM_1043", "VM_1051", "VM_1067", "VM_1068", "VM_1069", "VM_1071", "VM_1080", "VM_1081", "VM_1101", "VM_1102", "VM_5007", "VM_7001", "VM_7002", "VM_7003", "VM_7004", "VM_7006", "VM_7847_A", "VM_7847_B", "VM_8000", "VM_8001", "VM_8002", "VM_9002", "VM_9013", "VM_9015", "UDEFINERT"];
            readonly type: "string";
        };
        readonly merknadParametere: {
            readonly additionalProperties: {
                readonly maxLength: 20;
                readonly minLength: 0;
                readonly type: "string";
            };
            readonly type: "object";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly vilkarStatus: {
            readonly enum: readonly ["IKKE_OPPFYLT", "IKKE_VURDERT", "OPPFYLT", "IKKE_RELEVANT", "UDEFINERT"];
            readonly type: "string";
        };
        readonly vurderesIBehandlingen: {
            readonly type: "boolean";
        };
        readonly vurdersIBehandlingen: {
            readonly type: "boolean";
        };
    };
    readonly required: readonly ["periode", "vilkarStatus"];
    readonly type: "object";
};
export declare const $VilkårResultatContainer: {
    readonly properties: {
        readonly vilkårTidslinje: {
            readonly $ref: "#/components/schemas/LocalDateTimelineVilkårUtfallSamlet";
        };
    };
    readonly type: "object";
};
export declare const $VilkårResultatDto: {
    readonly properties: {
        readonly avslagsårsak: {
            readonly enum: readonly ["SØKT_FOR_SENT", "MANGLENDE_DOKUMENTASJON", "SØKER_ER_IKKE_MEDLEM", "SØKER_ER_UTVANDRET", "SØKER_HAR_IKKE_LOVLIG_OPPHOLD", "SØKER_HAR_IKKE_OPPHOLDSRETT", "SØKER_ER_IKKE_BOSATT", "IKKE_TILSTREKKELIG_OPPTJENING", "FYLLER_IKKE_ORDINÆRE_OPPTJENINGSREGLER", "FOR_LAVT_BEREGNINGSGRUNNLAG", "MANGLENDE_INNTEKTSGRUNNLAG", "FOR_LAVT_BEREGNINGSGRUNNLAG_8_47", "SØKT_FRILANS_UTEN_FRILANS_INNTEKT", "AVKORTET_GRUNNET_ANNEN_INNTEKT", "INGEN_STØNADSDAGER_I_SØKNADSPERIODEN", "IKKE_DOKUMENTERT_SYKDOM_SKADE_ELLER_LYTE", "DOKUMENTASJON_IKKE_FRA_RETT_ORGAN", "IKKE_BEHOV_FOR_KONTINUERLIG_TILSYN_OG_PLEIE_PÅ_BAKGRUNN_AV_SYKDOM", "IKKE_DOKUMENTERT_OMSORGEN_FOR", "IKKE_UTVIDETRETT", "IKKE_UTVIDETRETT_IKKE_KRONISK_SYK", "IKKE_UTVIDETRETT_IKKE_ØKT_RISIKO_FRAVÆR", "IKKE_MIDLERTIDIG_ALENE_VARIGHET_UNDER_SEKS_MÅN", "IKKE_MIDLERTIDIG_ALENE_REGNES_IKKE_SOM_Å_HA_ALENEOMSORG", "IKKE_MIDLERTIDIG_ALENE", "IKKE_GRUNNLAG_FOR_ALENEOMSORG", "IKKE_GRUNNLAG_FOR_ALENEOMSORG_FORELDRE_BOR_SAMMEN", "IKKE_GRUNNLAG_FOR_ALENEOMSORG_DELT_BOSTED", "PLEIETRENGENDE_INNLAGT_I_STEDET_FOR_HJEMME", "IKKE_I_LIVETS_SLUTTFASE", "IKKE_NØDVENDIG_OPPLÆRING", "IKKE_GODKJENT_INSTITUSJON", "IKKE_GJENNOMGÅTT_OPPLÆRING", "IKKE_PÅ_REISE", "SØKER_OVER_HØYESTE_ALDER", "SØKER_HAR_AVGÅTT_MED_DØDEN", "BARN_OVER_HØYESTE_ALDER", "INGEN_BEREGNINGSREGLER_TILGJENGELIG_I_LØSNINGEN", "UDEFINERT"];
            readonly type: "string";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly utfall: {
            readonly enum: readonly ["IKKE_OPPFYLT", "IKKE_VURDERT", "OPPFYLT", "IKKE_RELEVANT", "UDEFINERT"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["periode", "utfall"];
    readonly type: "object";
};
export declare const $VurderBesteberegningDto: {
    readonly properties: {
        readonly skalHaBesteberegning: {
            readonly type: "boolean";
        };
    };
    readonly type: "object";
};
export declare const $VurderInntektsforholdPeriodeDto: {
    readonly properties: {
        readonly fom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly inntektsforholdListe: {
            readonly items: {
                readonly $ref: "#/components/schemas/InntektsforholdDto";
            };
            readonly maxItems: 50;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly tom: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly required: readonly ["fom", "inntektsforholdListe", "tom"];
    readonly type: "object";
};
export declare const $VurderMilitærDto: {
    readonly properties: {
        readonly harMilitaer: {
            readonly type: "boolean";
        };
    };
    readonly type: "object";
};
export declare const $VurderMottarYtelseDto: {
    readonly properties: {
        readonly arbeidstakerAndelerUtenIM: {
            readonly items: {
                readonly $ref: "#/components/schemas/ArbeidstakerUtenInntektsmeldingAndelDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly erFrilans: {
            readonly type: "boolean";
        };
        readonly frilansInntektPrMnd: {
            readonly type: "number";
        };
        readonly frilansMottarYtelse: {
            readonly type: "boolean";
        };
    };
    readonly type: "object";
};
export declare const $VurderNyttInntektsforholdDto: {
    readonly properties: {
        readonly harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: {
            readonly type: "boolean";
        };
        readonly vurderInntektsforholdPerioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/VurderInntektsforholdPeriodeDto";
            };
            readonly maxItems: 50;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse", "vurderInntektsforholdPerioder"];
    readonly type: "object";
};
export declare const $VurderRepresentererStortingetDto: {
    readonly properties: {
        readonly representererStortinget: {
            readonly type: "boolean";
        };
        readonly stortingsperiodeFom: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly stortingsperiodeTom: {
            readonly format: "date";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $VurderingDto: {
    readonly properties: {
        readonly begrunnelse: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly id: {
            readonly format: "int64";
            readonly maximum: 9223372036854776000;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly kilde: {
            readonly enum: readonly ["SØKER", "ANDRE"];
            readonly type: "string";
        };
        readonly opprettetAv: {
            readonly maxLength: 20;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{L}\\p{N}]+$";
            readonly type: "string";
        };
        readonly opprettetTidspunkt: {
            readonly format: "date-time";
            readonly type: "string";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly resultat: {
            readonly enum: readonly ["OPPFYLT", "IKKE_OPPFYLT", "IKKE_VURDERT"];
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $VurderingPerPeriode: {
    readonly properties: {
        readonly vurderinger: {
            readonly items: {
                readonly $ref: "#/components/schemas/VurderingPåPeriode";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["vurderinger"];
    readonly type: "object";
};
export declare const $VurderingPåPeriode: {
    readonly properties: {
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly vurderinger: {
            readonly items: {
                readonly $ref: "#/components/schemas/InntektsmeldingVurdering";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["periode", "vurderinger"];
    readonly type: "object";
};
export declare const $VurderingRettPleiepengerVedDødDto: {
    readonly properties: {
        readonly begrunnelse: {
            readonly maxLength: 4000;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
        readonly rettVedDødType: {
            readonly enum: readonly ["RETT_6_UKER", "RETT_12_UKER"];
            readonly type: "string";
        };
        readonly vurdering: {
            readonly maxLength: 4096;
            readonly minLength: 0;
            readonly pattern: "^[\\p{Graph}\\p{Space}\\p{Sc}\\p{L}\\p{M}\\p{N}§]+$";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $VurderteVilkår: {
    readonly properties: {
        readonly vilkår: {
            readonly additionalProperties: {
                readonly enum: readonly ["INNVILGET", "AVSLÅTT", "UAVKLART"];
                readonly type: "string";
            };
            readonly type: "object";
        };
    };
    readonly type: "object";
};
export declare const $YrkesaktivitetDto: {
    readonly properties: {
        readonly abakusReferanse: {
            readonly $ref: "#/components/schemas/InternArbeidsforholdRefDto";
        };
        readonly aktivitetsAvtaler: {
            readonly items: {
                readonly $ref: "#/components/schemas/AktivitetsAvtaleDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly arbeidType: {
            readonly enum: readonly ["ETTERLØNN_SLUTTPAKKE", "FORENKLET_OPPGJØRSORDNING", "FRILANSER", "FRILANSER_OPPDRAGSTAKER", "LØNN_UNDER_UTDANNING", "MARITIMT_ARBEIDSFORHOLD", "MILITÆR_ELLER_SIVILTJENESTE", "ORDINÆRT_ARBEIDSFORHOLD", "PENSJON_OG_ANDRE_TYPER_YTELSER_UTEN_ANSETTELSESFORHOLD", "NÆRING", "UTENLANDSK_ARBEIDSFORHOLD", "VENTELØNN_VARTPENGER", "VANLIG", "-"];
            readonly type: "string";
        };
        readonly arbeidsgiver: {
            readonly $ref: "#/components/schemas/Aktør";
        };
        readonly permisjoner: {
            readonly items: {
                readonly $ref: "#/components/schemas/PermisjonDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly required: readonly ["arbeidType"];
    readonly type: "object";
};
export declare const $YtelseAnvistDto: {
    readonly properties: {
        readonly anvistPeriode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly anvisteAndeler: {
            readonly items: {
                readonly $ref: "#/components/schemas/AnvistAndel";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly beløp: {
            readonly type: "number";
        };
        readonly dagsats: {
            readonly type: "number";
        };
        readonly utbetalingsgradProsent: {
            readonly type: "number";
        };
    };
    readonly type: "object";
};
export declare const $YtelseDto: {
    readonly properties: {
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
        readonly relatertYtelseType: {
            readonly enum: readonly ["DAG", "FRISINN", "SP", "PSB", "PPN", "OMP", "OLP", "AAP", "ES", "FP", "SVP", "EF", "-"];
            readonly type: "string";
        };
        readonly vedtaksDagsats: {
            readonly type: "number";
        };
        readonly ytelseAnvist: {
            readonly items: {
                readonly $ref: "#/components/schemas/YtelseAnvistDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
            readonly uniqueItems: true;
        };
        readonly ytelseGrunnlag: {
            readonly $ref: "#/components/schemas/YtelseGrunnlagDto";
        };
    };
    readonly required: readonly ["periode", "relatertYtelseType"];
    readonly type: "object";
};
export declare const $YtelseFordelingDto: {
    readonly properties: {
        readonly arbeidsgiver: {
            readonly $ref: "#/components/schemas/Aktør";
        };
        readonly beløp: {
            readonly type: "number";
        };
        readonly erRefusjon: {
            readonly type: "boolean";
        };
        readonly hyppighet: {
            readonly enum: readonly ["DAGLG", "UKNLG", "14DLG", "MNDLG", "AARLG", "INNFS", "PREMGR", "-"];
            readonly type: "string";
        };
        readonly inntektPeriodeType: {
            readonly enum: readonly ["DAGLG", "UKNLG", "14DLG", "MNDLG", "AARLG", "INNFS", "PREMGR", "-"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["beløp", "inntektPeriodeType"];
    readonly type: "object";
};
export declare const $YtelseGrunnlagDto: {
    readonly properties: {
        readonly arbeidskategori: {
            readonly enum: readonly ["FISKER", "ARBEIDSTAKER", "SELVSTENDIG_NÆRINGSDRIVENDE", "KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE", "SJØMANN", "JORDBRUKER", "DAGPENGER", "INAKTIV", "KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER", "KOMBINASJON_ARBEIDSTAKER_OG_FISKER", "FRILANSER", "KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER", "KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER", "DAGMAMMA", "UGYLDIG", "-"];
            readonly type: "string";
        };
        readonly fordeling: {
            readonly items: {
                readonly $ref: "#/components/schemas/YtelseFordelingDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $Ytelseandel: {
    readonly properties: {
        readonly aktivitetStatus: {
            readonly enum: readonly ["MIDL_INAKTIV", "AAP", "AT", "DP", "SP_AV_DP", "PSB_AV_DP", "FL", "MS", "SN", "AT_FL", "AT_SN", "FL_SN", "AT_FL_SN", "BA", "KUN_YTELSE", "TY", "VENTELØNN_VARTPENGER", "-"];
            readonly type: "string";
        };
        readonly arbeidskategori: {
            readonly enum: readonly ["FISKER", "ARBEIDSTAKER", "SELVSTENDIG_NÆRINGSDRIVENDE", "KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE", "SJØMANN", "JORDBRUKER", "DAGPENGER", "INAKTIV", "KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER", "KOMBINASJON_ARBEIDSTAKER_OG_FISKER", "FRILANSER", "KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER", "KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER", "DAGMAMMA", "UGYLDIG", "-"];
            readonly type: "string";
        };
        readonly dagsats: {
            readonly format: "int64";
            readonly type: "integer";
        };
        readonly inntektskategori: {
            readonly enum: readonly ["ARBEIDSTAKER", "FRILANSER", "SELVSTENDIG_NÆRINGSDRIVENDE", "DAGPENGER", "ARBEIDSAVKLARINGSPENGER", "SJØMANN", "DAGMAMMA", "JORDBRUKER", "FISKER", "ARBEIDSTAKER_UTEN_FERIEPENGER", "-"];
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $Ytelsegrunnlag: {
    readonly properties: {
        readonly perioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/Ytelseperiode";
            };
            readonly type: "array";
        };
        readonly ytelse: {
            readonly enum: readonly ["DAG", "FRISINN", "SP", "PSB", "PPN", "OMP", "OLP", "AAP", "ES", "FP", "SVP", "EF", "-"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["perioder", "ytelse"];
    readonly type: "object";
};
export declare const $Ytelseperiode: {
    readonly properties: {
        readonly andeler: {
            readonly items: {
                readonly $ref: "#/components/schemas/Ytelseandel";
            };
            readonly type: "array";
        };
        readonly periode: {
            readonly $ref: "#/components/schemas/Periode";
        };
    };
    readonly required: readonly ["andeler", "periode"];
    readonly type: "object";
};
export declare const $YtelserDto: {
    readonly properties: {
        readonly ytelser: {
            readonly items: {
                readonly $ref: "#/components/schemas/YtelseDto";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 1;
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $YtelsespesifiktGrunnlagDto: {
    readonly discriminator: {
        readonly propertyName: "ytelseType";
    };
    readonly properties: {
        readonly ytelseType: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["ytelseType"];
    readonly type: "object";
};
export declare const $ÅrsakMedPerioder: {
    readonly properties: {
        readonly perioder: {
            readonly items: {
                readonly $ref: "#/components/schemas/Periode";
            };
            readonly maxItems: 2147483647;
            readonly minItems: 0;
            readonly type: "array";
        };
        readonly årsak: {
            readonly enum: readonly ["MANUELT_REVURDERER_PERIODE", "REVURDERER_BERØRT_PERIODE", "ENDRING_FRA_BRUKER", "TRUKKET_KRAV", "REVURDERER_NY_INNTEKTSMELDING", "REVURDERER_ENDRING_FRA_ANNEN_PART", "REVURDERER_ENDRING_FERIEPENGER_ANNEN_SAK", "UTSATT_BEHANDLING", "GJENOPPTAR_UTSATT_BEHANDLING", "REVURDERER_SYKDOM_ENDRING_FRA_ANNEN_OMSORGSPERSON", "REVURDERER_ETABLERT_TILSYN_ENDRING_FRA_ANNEN_OMSORGSPERSON", "REVURDERER_NATTEVÅKBEREDSKAP_ENDRING_FRA_ANNEN_OMSORGSPERSON", "HENDELSE_DØD_BRUKER", "HENDELSE_DØD_PLEIETRENGENDE", "G_REGULERING", "REVURDERER_BEREGNING", "ENDRING_I_FORDELING", "FØRSTEGANGSVURDERING", "REVURDERER_LIGNET_INNTEKT"];
            readonly type: "string";
        };
    };
    readonly required: readonly ["perioder", "årsak"];
    readonly type: "object";
};
export declare const $ÅrskvantumForbrukteDager: {
    readonly properties: {
        readonly barna: {
            readonly items: {
                readonly $ref: "#/components/schemas/Barn";
            };
            readonly type: "array";
        };
        readonly rammevedtak: {
            readonly items: {
                readonly $ref: "#/components/schemas/Rammevedtak";
            };
            readonly type: "array";
        };
        readonly sisteUttaksplan: {
            readonly $ref: "#/components/schemas/Uttaksplan";
        };
    };
    readonly type: "object";
};
export declare const $ÅrskvantumFravær: {
    readonly properties: {
        readonly arbeidsforhold: {
            readonly $ref: "#/components/schemas/Arbeidsforhold";
        };
        readonly perioder: {
            readonly additionalProperties: {
                readonly $ref: "#/components/schemas/ÅrskvantumFraværsinformasjon";
            };
            readonly type: "object";
        };
    };
    readonly type: "object";
};
export declare const $ÅrskvantumFraværsinformasjon: {
    readonly properties: {
        readonly delvisFravær: {
            readonly properties: {
                readonly nano: {
                    readonly format: "int32";
                    readonly type: "integer";
                };
                readonly negative: {
                    readonly type: "boolean";
                };
                readonly positive: {
                    readonly type: "boolean";
                };
                readonly seconds: {
                    readonly format: "int64";
                    readonly type: "integer";
                };
                readonly units: {
                    readonly items: {
                        readonly properties: {
                            readonly dateBased: {
                                readonly type: "boolean";
                            };
                            readonly duration: {
                                readonly properties: {
                                    readonly nano: {
                                        readonly format: "int32";
                                        readonly type: "integer";
                                    };
                                    readonly negative: {
                                        readonly type: "boolean";
                                    };
                                    readonly positive: {
                                        readonly type: "boolean";
                                    };
                                    readonly seconds: {
                                        readonly format: "int64";
                                        readonly type: "integer";
                                    };
                                    readonly zero: {
                                        readonly type: "boolean";
                                    };
                                };
                                readonly type: "object";
                            };
                            readonly durationEstimated: {
                                readonly type: "boolean";
                            };
                            readonly timeBased: {
                                readonly type: "boolean";
                            };
                        };
                        readonly type: "object";
                    };
                    readonly type: "array";
                };
                readonly zero: {
                    readonly type: "boolean";
                };
            };
            readonly type: "object";
        };
        readonly harDekketArbeidsgiverperioden: {
            readonly type: "boolean";
        };
        readonly hjemler: {
            readonly items: {
                readonly enum: readonly ["FTRL_9_3__1", "FTRL_9_5__1", "FTRL_9_5", "FTRL_9_5__2", "FTRL_9_5__3", "FTRL_9_6__1", "FTRL_9_6__2_OG_4", "FTRL_9_6__3", "FTRL_9_6__5", "FTRL_9_6__6", "FTRL_9_8_JF_8_10__3", "FTRL_9_7__1_3", "FTRL_9_7__4", "FTRL_9_8__3", "FTRL_9_9__1", "FTRL_25_16", "COVID19_1_2", "COVID19_4_3", "COVID19_4_1__2", "COVID19_4_1__2_OG_3", "COVID19_4_2", "COVID19_4_3__1", "COVID19_4_3__2"];
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly knekkPgaHelg: {
            readonly type: "boolean";
        };
        readonly refusjonTilArbeidsgiver: {
            readonly type: "boolean";
        };
        readonly vurderteVilkår: {
            readonly $ref: "#/components/schemas/VurderteVilkår";
        };
    };
    readonly type: "object";
};
export declare const $ÅrskvantumUtbetalingGrunnlag: {
    readonly properties: {
        readonly barna: {
            readonly items: {
                readonly $ref: "#/components/schemas/Barn";
            };
            readonly type: "array";
        };
        readonly behandlingUUID: {
            readonly format: "uuid";
            readonly type: "string";
        };
        readonly forbrukteDagerFraInfotrygd: {
            readonly type: "number";
        };
        readonly fravær: {
            readonly items: {
                readonly $ref: "#/components/schemas/ÅrskvantumFravær";
            };
            readonly type: "array";
        };
        readonly helePerioden: {
            readonly type: "string";
        };
        readonly hjemler: {
            readonly items: {
                readonly enum: readonly ["FTRL_9_3__1", "FTRL_9_5__1", "FTRL_9_5", "FTRL_9_5__2", "FTRL_9_5__3", "FTRL_9_6__1", "FTRL_9_6__2_OG_4", "FTRL_9_6__3", "FTRL_9_6__5", "FTRL_9_6__6", "FTRL_9_8_JF_8_10__3", "FTRL_9_7__1_3", "FTRL_9_7__4", "FTRL_9_8__3", "FTRL_9_9__1", "FTRL_25_16", "COVID19_1_2", "COVID19_4_3", "COVID19_4_1__2", "COVID19_4_1__2_OG_3", "COVID19_4_2", "COVID19_4_3__1", "COVID19_4_3__2"];
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly personIdent: {
            readonly type: "string";
        };
        readonly rammevedtak: {
            readonly items: {
                readonly $ref: "#/components/schemas/Rammevedtak";
            };
            readonly type: "array";
        };
        readonly saksnummer: {
            readonly type: "string";
        };
        readonly søkersDødsdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly søkersFødselsdato: {
            readonly format: "date";
            readonly type: "string";
        };
        readonly uttaksperioderFraInfotrygd: {
            readonly items: {
                readonly $ref: "#/components/schemas/Uttaksperiode";
            };
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $ÅrskvantumUttrekk: {
    readonly properties: {
        readonly relevanteSaker: {
            readonly items: {
                readonly $ref: "#/components/schemas/UttrekkPerson";
            };
            readonly type: "array";
            readonly writeOnly: true;
        };
        readonly uttrekk: {
            readonly items: {
                readonly $ref: "#/components/schemas/UttrekkPerson";
            };
            readonly type: "array";
        };
    };
    readonly type: "object";
};
//# sourceMappingURL=schemas.gen.d.ts.map