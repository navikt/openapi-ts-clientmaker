export type ATogFLISammeOrganisasjonDto = {
    aktivitetStatus: 'MIDL_INAKTIV' | 'AAP' | 'AT' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'FL' | 'MS' | 'SN' | 'AT_FL' | 'AT_SN' | 'FL_SN' | 'AT_FL_SN' | 'BA' | 'KUN_YTELSE' | 'TY' | 'VENTELØNN_VARTPENGER' | '-';
    andelIArbeid: Array<(number)>;
    andelsnr: number;
    arbeidsforhold?: BeregningsgrunnlagArbeidsforholdDto;
    fastsattAvSaksbehandler?: boolean;
    inntektPrMnd?: number;
    inntektskategori: 'ARBEIDSTAKER' | 'FRILANSER' | 'SELVSTENDIG_NÆRINGSDRIVENDE' | 'DAGPENGER' | 'ARBEIDSAVKLARINGSPENGER' | 'SJØMANN' | 'DAGMAMMA' | 'JORDBRUKER' | 'FISKER' | 'ARBEIDSTAKER_UTEN_FERIEPENGER' | '-';
    kilde: 'SAKSBEHANDLER_KOFAKBER' | 'PROSESS_BESTEBEREGNING' | 'SAKSBEHANDLER_FORDELING' | 'PROSESS_PERIODISERING' | 'PROSESS_OMFORDELING' | 'PROSESS_START' | 'PROSESS_PERIODISERING_TILKOMMET_INNTEKT';
    lagtTilAvSaksbehandler?: boolean;
};
export type aktivitetStatus = 'MIDL_INAKTIV' | 'AAP' | 'AT' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'FL' | 'MS' | 'SN' | 'AT_FL' | 'AT_SN' | 'FL_SN' | 'AT_FL_SN' | 'BA' | 'KUN_YTELSE' | 'TY' | 'VENTELØNN_VARTPENGER' | '-';
export declare const aktivitetStatus: {
    readonly MIDL_INAKTIV: "MIDL_INAKTIV";
    readonly AAP: "AAP";
    readonly AT: "AT";
    readonly DP: "DP";
    readonly SP_AV_DP: "SP_AV_DP";
    readonly PSB_AV_DP: "PSB_AV_DP";
    readonly FL: "FL";
    readonly MS: "MS";
    readonly SN: "SN";
    readonly AT_FL: "AT_FL";
    readonly AT_SN: "AT_SN";
    readonly FL_SN: "FL_SN";
    readonly AT_FL_SN: "AT_FL_SN";
    readonly BA: "BA";
    readonly KUN_YTELSE: "KUN_YTELSE";
    readonly TY: "TY";
    readonly VENTELØNN_VARTPENGER: "VENTELØNN_VARTPENGER";
    readonly _: "-";
};
export type inntektskategori = 'ARBEIDSTAKER' | 'FRILANSER' | 'SELVSTENDIG_NÆRINGSDRIVENDE' | 'DAGPENGER' | 'ARBEIDSAVKLARINGSPENGER' | 'SJØMANN' | 'DAGMAMMA' | 'JORDBRUKER' | 'FISKER' | 'ARBEIDSTAKER_UTEN_FERIEPENGER' | '-';
export declare const inntektskategori: {
    readonly ARBEIDSTAKER: "ARBEIDSTAKER";
    readonly FRILANSER: "FRILANSER";
    readonly SELVSTENDIG_NÆRINGSDRIVENDE: "SELVSTENDIG_NÆRINGSDRIVENDE";
    readonly DAGPENGER: "DAGPENGER";
    readonly ARBEIDSAVKLARINGSPENGER: "ARBEIDSAVKLARINGSPENGER";
    readonly SJØMANN: "SJØMANN";
    readonly DAGMAMMA: "DAGMAMMA";
    readonly JORDBRUKER: "JORDBRUKER";
    readonly FISKER: "FISKER";
    readonly ARBEIDSTAKER_UTEN_FERIEPENGER: "ARBEIDSTAKER_UTEN_FERIEPENGER";
    readonly _: "-";
};
export type kilde = 'SAKSBEHANDLER_KOFAKBER' | 'PROSESS_BESTEBEREGNING' | 'SAKSBEHANDLER_FORDELING' | 'PROSESS_PERIODISERING' | 'PROSESS_OMFORDELING' | 'PROSESS_START' | 'PROSESS_PERIODISERING_TILKOMMET_INNTEKT';
export declare const kilde: {
    readonly SAKSBEHANDLER_KOFAKBER: "SAKSBEHANDLER_KOFAKBER";
    readonly PROSESS_BESTEBEREGNING: "PROSESS_BESTEBEREGNING";
    readonly SAKSBEHANDLER_FORDELING: "SAKSBEHANDLER_FORDELING";
    readonly PROSESS_PERIODISERING: "PROSESS_PERIODISERING";
    readonly PROSESS_OMFORDELING: "PROSESS_OMFORDELING";
    readonly PROSESS_START: "PROSESS_START";
    readonly PROSESS_PERIODISERING_TILKOMMET_INNTEKT: "PROSESS_PERIODISERING_TILKOMMET_INNTEKT";
};
export type AbacJournalpostMottakDto = {
    forsendelseMottatt?: string;
    forsendelseMottattTidspunkt: string;
    journalpostId: string;
    kanalReferanse?: string;
    payload?: string;
    saksnummer: string;
    type: string;
    ytelseType: 'DAG' | 'FRISINN' | 'SP' | 'PSB' | 'PPN' | 'OMP' | 'OMP_KS' | 'OMP_MA' | 'OMP_AO' | 'OLP' | 'AAP' | 'ES' | 'FP' | 'SVP' | 'EF' | 'OBSOLETE' | '-';
};
export type ytelseType = 'DAG' | 'FRISINN' | 'SP' | 'PSB' | 'PPN' | 'OMP' | 'OMP_KS' | 'OMP_MA' | 'OMP_AO' | 'OLP' | 'AAP' | 'ES' | 'FP' | 'SVP' | 'EF' | 'OBSOLETE' | '-';
export declare const ytelseType: {
    readonly DAG: "DAG";
    readonly FRISINN: "FRISINN";
    readonly SP: "SP";
    readonly PSB: "PSB";
    readonly PPN: "PPN";
    readonly OMP: "OMP";
    readonly OMP_KS: "OMP_KS";
    readonly OMP_MA: "OMP_MA";
    readonly OMP_AO: "OMP_AO";
    readonly OLP: "OLP";
    readonly AAP: "AAP";
    readonly ES: "ES";
    readonly FP: "FP";
    readonly SVP: "SVP";
    readonly EF: "EF";
    readonly OBSOLETE: "OBSOLETE";
    readonly _: "-";
};
export type AbacJournalpostMottakOpprettSakDto = {
    aktørId: string;
    forsendelseMottatt?: string;
    forsendelseMottattTidspunkt: string;
    journalpostId: string;
    kanalReferanse?: string;
    payload?: string;
    periode: Periode;
    pleietrengendeAktørId?: string;
    relatertPersonAktørId?: string;
    saksnummer: string;
    type: string;
    ytelseType: 'DAG' | 'FRISINN' | 'SP' | 'PSB' | 'PPN' | 'OMP' | 'OMP_KS' | 'OMP_MA' | 'OMP_AO' | 'OLP' | 'AAP' | 'ES' | 'FP' | 'SVP' | 'EF' | 'OBSOLETE' | '-';
};
export type AbakusKodeverkIaygrunnlag = {
    virksomhetType: 'DAGMAMMA' | 'FISKE' | 'JORDBRUK_SKOGBRUK' | 'ANNEN' | '-';
};
export type virksomhetType = 'DAGMAMMA' | 'FISKE' | 'JORDBRUK_SKOGBRUK' | 'ANNEN' | '-';
export declare const virksomhetType: {
    readonly DAGMAMMA: "DAGMAMMA";
    readonly FISKE: "FISKE";
    readonly JORDBRUK_SKOGBRUK: "JORDBRUK_SKOGBRUK";
    readonly ANNEN: "ANNEN";
    readonly _: "-";
};
export type AksjonspunktDto = {
    aksjonspunktType?: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
    begrunnelse?: string;
    besluttersBegrunnelse?: string;
    definisjon?: '5009' | '5015' | '5016' | '5017' | '5018' | '5019' | '5020' | '5021' | '5023' | '5026' | '5028' | '5030' | '5033' | '5034' | '5040' | '5038' | '5039' | '5054' | '5042' | '5046' | '5067' | '5059' | '5047' | '5049' | '5050' | '5051' | '5052' | '5053' | '5055' | '5056' | '5057' | '5058' | '5068' | '5072' | '5080' | '5084' | '5085' | '5089' | '5090' | '5077' | '9069' | '9071' | '6002' | '6005' | '6006' | '6004' | '6008' | '6003' | '6007' | '6011' | '6014' | '6015' | '6017' | '6016' | '6068' | '7001' | '7003' | '7005' | '7006' | '7008' | '7009' | '7014' | '7019' | '7020' | '7022' | '7023' | '7025' | '7030' | '7035' | '9068' | '9070' | '7041' | '8000' | '8003' | '8005' | '8004' | '9001' | '9002' | '9020' | '9099' | '9003' | '9004' | '9013' | '9014' | '9015' | '9005' | '9006' | '9007' | '9008' | '9200' | '9201' | '9202' | '9203' | '9290' | '9291' | '9300' | '9301' | '9302' | '9303' | '9999';
    erAktivt?: boolean;
    fristTid?: string;
    kanLoses?: boolean;
    opprettetAv?: string;
    status?: 'AVBR' | 'OPPR' | 'UTFO';
    toTrinnsBehandling?: boolean;
    toTrinnsBehandlingGodkjent?: boolean;
    venteårsak?: '-' | 'ANKE_OVERSENDT_TIL_TRYGDERETTEN' | 'ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER' | 'AVV_DOK' | 'AVV_IM_MOT_AAREG' | 'AVV_IM_MOT_SØKNAD_AT' | 'AVV_SØKNADSPERIODER' | 'AVV_FODSEL' | 'AVV_RESPONS_REVURDERING' | 'FOR_TIDLIG_SOKNAD' | 'GRADERING_FLERE_ARBEIDSFORHOLD' | 'REFUSJON_3_MÅNEDER' | 'SCANN' | 'UTV_FRIST' | 'VENT_FEIL_ENDRINGSSØKNAD' | 'VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG' | 'VENT_INFOTRYGD' | 'VENT_INNTEKT_RAPPORTERINGSFRIST' | 'VENT_MILITÆR_OG_BG_UNDER_3G' | 'VENT_OPDT_INNTEKTSMELDING' | 'VENT_OPPTJENING_OPPLYSNINGER' | 'VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID' | 'VENT_REGISTERINNHENTING' | 'VENT_PÅ_SISTE_AAP_MELDEKORT' | 'VENT_SØKNAD_SENDT_INFORMASJONSBREV' | 'VENT_TIDLIGERE_BEHANDLING' | 'VENT_ÅPEN_BEHANDLING' | 'VENT_MANGL_FUNKSJ_SAKSBEHANDLER' | 'VENTER_SVAR_PORTEN' | 'VENTER_SVAR_TEAMS' | 'ANDRE_INNTEKTSOPPLYSNINGER' | 'INNTEKTSMELDING' | 'LEGEERKLÆRING' | 'MEDISINSKE_OPPLYSNINGER' | 'ANNET' | 'VENTER_ETTERLYS_IM' | 'VENTER_ETTERLYS_IM_VARSEL' | 'OPPD_ÅPEN_BEH' | 'VENT_DEKGRAD_REGEL' | 'VENT_ØKONOMI' | 'VENT_TILBAKEKREVING' | 'VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER' | 'VENT_BEREGNING_TILBAKE_I_TID' | 'BRUKER_70ÅR_VED_REFUSJON' | 'VENT_LOVENDRING_8_41' | 'INGEN_PERIODE_UTEN_YTELSE' | 'PERIODE_MED_AVSLAG' | 'MANGLENDE_FUNKSJONALITET' | 'KORTVARIG_ARBEID' | 'FRISINN_ATFL_SAMME_ORG' | 'FRISINN_VARIANT_SN_MED_FL_INNTEKT' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT' | 'FRISINN_VARIANT_NY_FL' | 'FRISINN_VARIANT_NY_SN_2019' | 'FRISINN_VARIANT_NY_SN_2020' | 'FRISINN_VARIANT_KOMBINERT' | 'FRISINN_VARIANT_KOMBINERT_NY_FL' | 'FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2019' | 'FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2020' | 'FRISINN_VARIANT_KOMBINERT_NY_SN_2019' | 'FRISINN_VARIANT_KOMBINERT_NY_SN_2020' | 'FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2019' | 'FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2020' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2019' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2020' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2019' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2020' | 'FRISINN_VARIANT_ENDRET_INNTEKTSTYPE' | 'AVV_SOKN_IT_PERIODER' | 'AVV_SOKN_NAERING' | 'AVV_SOKN_FRILANS' | 'DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP' | 'AAP_DP_SISTE_10_MND_SVP' | 'FL_SN_IKKE_STOTTET_FOR_SVP';
    venteårsakVariant?: string;
    vilkarType?: 'K9_VILKÅRET' | 'MEDLEMSKAPSVILKÅRET' | 'OMSORGEN_FOR' | 'ALDERSVILKÅR' | 'ALDERSVILKÅR_BARN' | 'MEDISINSKEVILKÅR_UNDER_18_ÅR' | 'MEDISINSKEVILKÅR_18_ÅR' | 'SØKNADSFRIST' | 'SØKERSOPPLYSNINGSPLIKT' | 'OPPTJENINGSPERIODEVILKÅR' | 'OPPTJENINGSVILKÅRET' | 'BEREGNINGSGRUNNLAGVILKÅR' | 'I_LIVETS_SLUTTFASE' | 'NØDVENDIG_OPPLÆRING' | 'GODKJENT_OPPLÆRINGSINSTITUSJON' | 'GJENNOMGÅ_OPPLÆRING' | 'LANGVARIG_SYKDOM' | 'UTVIDETRETT' | 'UDEFINERT';
    vurderPaNyttArsaker?: Array<('FEIL_FAKTA' | 'FEIL_LOV' | 'FEIL_REGEL' | 'ANNET' | '-')>;
};
export type aksjonspunktType = 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
export declare const aksjonspunktType: {
    readonly AUTO: "AUTO";
    readonly MANU: "MANU";
    readonly OVST: "OVST";
    readonly SAOV: "SAOV";
    readonly _: "-";
};
export type definisjon = '5009' | '5015' | '5016' | '5017' | '5018' | '5019' | '5020' | '5021' | '5023' | '5026' | '5028' | '5030' | '5033' | '5034' | '5040' | '5038' | '5039' | '5054' | '5042' | '5046' | '5067' | '5059' | '5047' | '5049' | '5050' | '5051' | '5052' | '5053' | '5055' | '5056' | '5057' | '5058' | '5068' | '5072' | '5080' | '5084' | '5085' | '5089' | '5090' | '5077' | '9069' | '9071' | '6002' | '6005' | '6006' | '6004' | '6008' | '6003' | '6007' | '6011' | '6014' | '6015' | '6017' | '6016' | '6068' | '7001' | '7003' | '7005' | '7006' | '7008' | '7009' | '7014' | '7019' | '7020' | '7022' | '7023' | '7025' | '7030' | '7035' | '9068' | '9070' | '7041' | '8000' | '8003' | '8005' | '8004' | '9001' | '9002' | '9020' | '9099' | '9003' | '9004' | '9013' | '9014' | '9015' | '9005' | '9006' | '9007' | '9008' | '9200' | '9201' | '9202' | '9203' | '9290' | '9291' | '9300' | '9301' | '9302' | '9303' | '9999';
export declare const definisjon: {
    readonly _5009: "5009";
    readonly _5015: "5015";
    readonly _5016: "5016";
    readonly _5017: "5017";
    readonly _5018: "5018";
    readonly _5019: "5019";
    readonly _5020: "5020";
    readonly _5021: "5021";
    readonly _5023: "5023";
    readonly _5026: "5026";
    readonly _5028: "5028";
    readonly _5030: "5030";
    readonly _5033: "5033";
    readonly _5034: "5034";
    readonly _5040: "5040";
    readonly _5038: "5038";
    readonly _5039: "5039";
    readonly _5054: "5054";
    readonly _5042: "5042";
    readonly _5046: "5046";
    readonly _5067: "5067";
    readonly _5059: "5059";
    readonly _5047: "5047";
    readonly _5049: "5049";
    readonly _5050: "5050";
    readonly _5051: "5051";
    readonly _5052: "5052";
    readonly _5053: "5053";
    readonly _5055: "5055";
    readonly _5056: "5056";
    readonly _5057: "5057";
    readonly _5058: "5058";
    readonly _5068: "5068";
    readonly _5072: "5072";
    readonly _5080: "5080";
    readonly _5084: "5084";
    readonly _5085: "5085";
    readonly _5089: "5089";
    readonly _5090: "5090";
    readonly _5077: "5077";
    readonly _9069: "9069";
    readonly _9071: "9071";
    readonly _6002: "6002";
    readonly _6005: "6005";
    readonly _6006: "6006";
    readonly _6004: "6004";
    readonly _6008: "6008";
    readonly _6003: "6003";
    readonly _6007: "6007";
    readonly _6011: "6011";
    readonly _6014: "6014";
    readonly _6015: "6015";
    readonly _6017: "6017";
    readonly _6016: "6016";
    readonly _6068: "6068";
    readonly _7001: "7001";
    readonly _7003: "7003";
    readonly _7005: "7005";
    readonly _7006: "7006";
    readonly _7008: "7008";
    readonly _7009: "7009";
    readonly _7014: "7014";
    readonly _7019: "7019";
    readonly _7020: "7020";
    readonly _7022: "7022";
    readonly _7023: "7023";
    readonly _7025: "7025";
    readonly _7030: "7030";
    readonly _7035: "7035";
    readonly _9068: "9068";
    readonly _9070: "9070";
    readonly _7041: "7041";
    readonly _8000: "8000";
    readonly _8003: "8003";
    readonly _8005: "8005";
    readonly _8004: "8004";
    readonly _9001: "9001";
    readonly _9002: "9002";
    readonly _9020: "9020";
    readonly _9099: "9099";
    readonly _9003: "9003";
    readonly _9004: "9004";
    readonly _9013: "9013";
    readonly _9014: "9014";
    readonly _9015: "9015";
    readonly _9005: "9005";
    readonly _9006: "9006";
    readonly _9007: "9007";
    readonly _9008: "9008";
    readonly _9200: "9200";
    readonly _9201: "9201";
    readonly _9202: "9202";
    readonly _9203: "9203";
    readonly _9290: "9290";
    readonly _9291: "9291";
    readonly _9300: "9300";
    readonly _9301: "9301";
    readonly _9302: "9302";
    readonly _9303: "9303";
    readonly _9999: "9999";
};
export type status = 'AVBR' | 'OPPR' | 'UTFO';
export declare const status: {
    readonly AVBR: "AVBR";
    readonly OPPR: "OPPR";
    readonly UTFO: "UTFO";
};
export type venteårsak = '-' | 'ANKE_OVERSENDT_TIL_TRYGDERETTEN' | 'ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER' | 'AVV_DOK' | 'AVV_IM_MOT_AAREG' | 'AVV_IM_MOT_SØKNAD_AT' | 'AVV_SØKNADSPERIODER' | 'AVV_FODSEL' | 'AVV_RESPONS_REVURDERING' | 'FOR_TIDLIG_SOKNAD' | 'GRADERING_FLERE_ARBEIDSFORHOLD' | 'REFUSJON_3_MÅNEDER' | 'SCANN' | 'UTV_FRIST' | 'VENT_FEIL_ENDRINGSSØKNAD' | 'VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG' | 'VENT_INFOTRYGD' | 'VENT_INNTEKT_RAPPORTERINGSFRIST' | 'VENT_MILITÆR_OG_BG_UNDER_3G' | 'VENT_OPDT_INNTEKTSMELDING' | 'VENT_OPPTJENING_OPPLYSNINGER' | 'VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID' | 'VENT_REGISTERINNHENTING' | 'VENT_PÅ_SISTE_AAP_MELDEKORT' | 'VENT_SØKNAD_SENDT_INFORMASJONSBREV' | 'VENT_TIDLIGERE_BEHANDLING' | 'VENT_ÅPEN_BEHANDLING' | 'VENT_MANGL_FUNKSJ_SAKSBEHANDLER' | 'VENTER_SVAR_PORTEN' | 'VENTER_SVAR_TEAMS' | 'ANDRE_INNTEKTSOPPLYSNINGER' | 'INNTEKTSMELDING' | 'LEGEERKLÆRING' | 'MEDISINSKE_OPPLYSNINGER' | 'ANNET' | 'VENTER_ETTERLYS_IM' | 'VENTER_ETTERLYS_IM_VARSEL' | 'OPPD_ÅPEN_BEH' | 'VENT_DEKGRAD_REGEL' | 'VENT_ØKONOMI' | 'VENT_TILBAKEKREVING' | 'VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER' | 'VENT_BEREGNING_TILBAKE_I_TID' | 'BRUKER_70ÅR_VED_REFUSJON' | 'VENT_LOVENDRING_8_41' | 'INGEN_PERIODE_UTEN_YTELSE' | 'PERIODE_MED_AVSLAG' | 'MANGLENDE_FUNKSJONALITET' | 'KORTVARIG_ARBEID' | 'FRISINN_ATFL_SAMME_ORG' | 'FRISINN_VARIANT_SN_MED_FL_INNTEKT' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT' | 'FRISINN_VARIANT_NY_FL' | 'FRISINN_VARIANT_NY_SN_2019' | 'FRISINN_VARIANT_NY_SN_2020' | 'FRISINN_VARIANT_KOMBINERT' | 'FRISINN_VARIANT_KOMBINERT_NY_FL' | 'FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2019' | 'FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2020' | 'FRISINN_VARIANT_KOMBINERT_NY_SN_2019' | 'FRISINN_VARIANT_KOMBINERT_NY_SN_2020' | 'FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2019' | 'FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2020' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2019' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2020' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2019' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2020' | 'FRISINN_VARIANT_ENDRET_INNTEKTSTYPE' | 'AVV_SOKN_IT_PERIODER' | 'AVV_SOKN_NAERING' | 'AVV_SOKN_FRILANS' | 'DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP' | 'AAP_DP_SISTE_10_MND_SVP' | 'FL_SN_IKKE_STOTTET_FOR_SVP';
export declare const venteårsak: {
    readonly _: "-";
    readonly ANKE_OVERSENDT_TIL_TRYGDERETTEN: "ANKE_OVERSENDT_TIL_TRYGDERETTEN";
    readonly ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER: "ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER";
    readonly AVV_DOK: "AVV_DOK";
    readonly AVV_IM_MOT_AAREG: "AVV_IM_MOT_AAREG";
    readonly AVV_IM_MOT_SØKNAD_AT: "AVV_IM_MOT_SØKNAD_AT";
    readonly AVV_SØKNADSPERIODER: "AVV_SØKNADSPERIODER";
    readonly AVV_FODSEL: "AVV_FODSEL";
    readonly AVV_RESPONS_REVURDERING: "AVV_RESPONS_REVURDERING";
    readonly FOR_TIDLIG_SOKNAD: "FOR_TIDLIG_SOKNAD";
    readonly GRADERING_FLERE_ARBEIDSFORHOLD: "GRADERING_FLERE_ARBEIDSFORHOLD";
    readonly REFUSJON_3_MÅNEDER: "REFUSJON_3_MÅNEDER";
    readonly SCANN: "SCANN";
    readonly UTV_FRIST: "UTV_FRIST";
    readonly VENT_FEIL_ENDRINGSSØKNAD: "VENT_FEIL_ENDRINGSSØKNAD";
    readonly VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG: "VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG";
    readonly VENT_INFOTRYGD: "VENT_INFOTRYGD";
    readonly VENT_INNTEKT_RAPPORTERINGSFRIST: "VENT_INNTEKT_RAPPORTERINGSFRIST";
    readonly VENT_MILITÆR_OG_BG_UNDER_3G: "VENT_MILITÆR_OG_BG_UNDER_3G";
    readonly VENT_OPDT_INNTEKTSMELDING: "VENT_OPDT_INNTEKTSMELDING";
    readonly VENT_OPPTJENING_OPPLYSNINGER: "VENT_OPPTJENING_OPPLYSNINGER";
    readonly VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID: "VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID";
    readonly VENT_REGISTERINNHENTING: "VENT_REGISTERINNHENTING";
    readonly VENT_PÅ_SISTE_AAP_MELDEKORT: "VENT_PÅ_SISTE_AAP_MELDEKORT";
    readonly VENT_SØKNAD_SENDT_INFORMASJONSBREV: "VENT_SØKNAD_SENDT_INFORMASJONSBREV";
    readonly VENT_TIDLIGERE_BEHANDLING: "VENT_TIDLIGERE_BEHANDLING";
    readonly VENT_ÅPEN_BEHANDLING: "VENT_ÅPEN_BEHANDLING";
    readonly VENT_MANGL_FUNKSJ_SAKSBEHANDLER: "VENT_MANGL_FUNKSJ_SAKSBEHANDLER";
    readonly VENTER_SVAR_PORTEN: "VENTER_SVAR_PORTEN";
    readonly VENTER_SVAR_TEAMS: "VENTER_SVAR_TEAMS";
    readonly ANDRE_INNTEKTSOPPLYSNINGER: "ANDRE_INNTEKTSOPPLYSNINGER";
    readonly INNTEKTSMELDING: "INNTEKTSMELDING";
    readonly LEGEERKLÆRING: "LEGEERKLÆRING";
    readonly MEDISINSKE_OPPLYSNINGER: "MEDISINSKE_OPPLYSNINGER";
    readonly ANNET: "ANNET";
    readonly VENTER_ETTERLYS_IM: "VENTER_ETTERLYS_IM";
    readonly VENTER_ETTERLYS_IM_VARSEL: "VENTER_ETTERLYS_IM_VARSEL";
    readonly OPPD_ÅPEN_BEH: "OPPD_ÅPEN_BEH";
    readonly VENT_DEKGRAD_REGEL: "VENT_DEKGRAD_REGEL";
    readonly VENT_ØKONOMI: "VENT_ØKONOMI";
    readonly VENT_TILBAKEKREVING: "VENT_TILBAKEKREVING";
    readonly VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER: "VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER";
    readonly VENT_BEREGNING_TILBAKE_I_TID: "VENT_BEREGNING_TILBAKE_I_TID";
    readonly BRUKER_70ÅR_VED_REFUSJON: "BRUKER_70ÅR_VED_REFUSJON";
    readonly VENT_LOVENDRING_8_41: "VENT_LOVENDRING_8_41";
    readonly INGEN_PERIODE_UTEN_YTELSE: "INGEN_PERIODE_UTEN_YTELSE";
    readonly PERIODE_MED_AVSLAG: "PERIODE_MED_AVSLAG";
    readonly MANGLENDE_FUNKSJONALITET: "MANGLENDE_FUNKSJONALITET";
    readonly KORTVARIG_ARBEID: "KORTVARIG_ARBEID";
    readonly FRISINN_ATFL_SAMME_ORG: "FRISINN_ATFL_SAMME_ORG";
    readonly FRISINN_VARIANT_SN_MED_FL_INNTEKT: "FRISINN_VARIANT_SN_MED_FL_INNTEKT";
    readonly FRISINN_VARIANT_FL_MED_SN_INNTEKT: "FRISINN_VARIANT_FL_MED_SN_INNTEKT";
    readonly FRISINN_VARIANT_NY_FL: "FRISINN_VARIANT_NY_FL";
    readonly FRISINN_VARIANT_NY_SN_2019: "FRISINN_VARIANT_NY_SN_2019";
    readonly FRISINN_VARIANT_NY_SN_2020: "FRISINN_VARIANT_NY_SN_2020";
    readonly FRISINN_VARIANT_KOMBINERT: "FRISINN_VARIANT_KOMBINERT";
    readonly FRISINN_VARIANT_KOMBINERT_NY_FL: "FRISINN_VARIANT_KOMBINERT_NY_FL";
    readonly FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2019: "FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2019";
    readonly FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2020: "FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2020";
    readonly FRISINN_VARIANT_KOMBINERT_NY_SN_2019: "FRISINN_VARIANT_KOMBINERT_NY_SN_2019";
    readonly FRISINN_VARIANT_KOMBINERT_NY_SN_2020: "FRISINN_VARIANT_KOMBINERT_NY_SN_2020";
    readonly FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2019: "FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2019";
    readonly FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2020: "FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2020";
    readonly FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2019: "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2019";
    readonly FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2020: "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2020";
    readonly FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL: "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL";
    readonly FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2019: "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2019";
    readonly FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2020: "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2020";
    readonly FRISINN_VARIANT_ENDRET_INNTEKTSTYPE: "FRISINN_VARIANT_ENDRET_INNTEKTSTYPE";
    readonly AVV_SOKN_IT_PERIODER: "AVV_SOKN_IT_PERIODER";
    readonly AVV_SOKN_NAERING: "AVV_SOKN_NAERING";
    readonly AVV_SOKN_FRILANS: "AVV_SOKN_FRILANS";
    readonly DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP: "DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP";
    readonly AAP_DP_SISTE_10_MND_SVP: "AAP_DP_SISTE_10_MND_SVP";
    readonly FL_SN_IKKE_STOTTET_FOR_SVP: "FL_SN_IKKE_STOTTET_FOR_SVP";
};
export type vilkarType = 'K9_VILKÅRET' | 'MEDLEMSKAPSVILKÅRET' | 'OMSORGEN_FOR' | 'ALDERSVILKÅR' | 'ALDERSVILKÅR_BARN' | 'MEDISINSKEVILKÅR_UNDER_18_ÅR' | 'MEDISINSKEVILKÅR_18_ÅR' | 'SØKNADSFRIST' | 'SØKERSOPPLYSNINGSPLIKT' | 'OPPTJENINGSPERIODEVILKÅR' | 'OPPTJENINGSVILKÅRET' | 'BEREGNINGSGRUNNLAGVILKÅR' | 'I_LIVETS_SLUTTFASE' | 'NØDVENDIG_OPPLÆRING' | 'GODKJENT_OPPLÆRINGSINSTITUSJON' | 'GJENNOMGÅ_OPPLÆRING' | 'LANGVARIG_SYKDOM' | 'UTVIDETRETT' | 'UDEFINERT';
export declare const vilkarType: {
    readonly K9_VILKÅRET: "K9_VILKÅRET";
    readonly MEDLEMSKAPSVILKÅRET: "MEDLEMSKAPSVILKÅRET";
    readonly OMSORGEN_FOR: "OMSORGEN_FOR";
    readonly ALDERSVILKÅR: "ALDERSVILKÅR";
    readonly ALDERSVILKÅR_BARN: "ALDERSVILKÅR_BARN";
    readonly MEDISINSKEVILKÅR_UNDER_18_ÅR: "MEDISINSKEVILKÅR_UNDER_18_ÅR";
    readonly MEDISINSKEVILKÅR_18_ÅR: "MEDISINSKEVILKÅR_18_ÅR";
    readonly SØKNADSFRIST: "SØKNADSFRIST";
    readonly SØKERSOPPLYSNINGSPLIKT: "SØKERSOPPLYSNINGSPLIKT";
    readonly OPPTJENINGSPERIODEVILKÅR: "OPPTJENINGSPERIODEVILKÅR";
    readonly OPPTJENINGSVILKÅRET: "OPPTJENINGSVILKÅRET";
    readonly BEREGNINGSGRUNNLAGVILKÅR: "BEREGNINGSGRUNNLAGVILKÅR";
    readonly I_LIVETS_SLUTTFASE: "I_LIVETS_SLUTTFASE";
    readonly NØDVENDIG_OPPLÆRING: "NØDVENDIG_OPPLÆRING";
    readonly GODKJENT_OPPLÆRINGSINSTITUSJON: "GODKJENT_OPPLÆRINGSINSTITUSJON";
    readonly GJENNOMGÅ_OPPLÆRING: "GJENNOMGÅ_OPPLÆRING";
    readonly LANGVARIG_SYKDOM: "LANGVARIG_SYKDOM";
    readonly UTVIDETRETT: "UTVIDETRETT";
    readonly UDEFINERT: "UDEFINERT";
};
export type Aktivitet = {
    arbeidsforhold?: Arbeidsforhold;
    uttaksperioder?: Array<Uttaksperiode>;
};
export type AktivitetDto = {
    arbeidsgiver: Aktør;
    internArbeidsforholdRef: InternArbeidsforholdRefDto;
    uttakArbeidType: 'AT' | 'SN' | 'FL' | 'MIDL_INAKTIV' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'BA' | 'IKKE_YRKESAKTIV' | 'ANNET';
};
export type uttakArbeidType = 'AT' | 'SN' | 'FL' | 'MIDL_INAKTIV' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'BA' | 'IKKE_YRKESAKTIV' | 'ANNET';
export declare const uttakArbeidType: {
    readonly AT: "AT";
    readonly SN: "SN";
    readonly FL: "FL";
    readonly MIDL_INAKTIV: "MIDL_INAKTIV";
    readonly DP: "DP";
    readonly SP_AV_DP: "SP_AV_DP";
    readonly PSB_AV_DP: "PSB_AV_DP";
    readonly BA: "BA";
    readonly IKKE_YRKESAKTIV: "IKKE_YRKESAKTIV";
    readonly ANNET: "ANNET";
};
export type AktivitetGraderingDto = {
    andelGraderingDto?: Array<AndelGraderingDto>;
};
export type AktivitetTomDatoMappingDto = {
    aktiviteter: Array<BeregningAktivitetDto>;
    tom: string;
};
export type AktivitetsAvtaleDto = {
    periode: Periode;
    sisteLønnsendringsdato?: string;
    stillingsprosent?: number;
};
export type Aktør = {
    identType: string;
};
export type AktørIdDto = {
    aktørId: string;
};
export type AktørIdPersonident = Aktør & {
    ident?: string;
} & {
    ident: string;
};
export type AktørInfoDto = {
    aktoerId?: string;
    fagsaker?: Array<FagsakDto>;
    person?: PersonDto;
};
export type AktørListeDto = {
    aktører: Array<(string)>;
};
export type AleneOmOmsorgen = Rammevedtak & {
    aleneOmOmsorgenFor?: string;
    gyldigFraOgMed?: string;
    gyldigTilOgMed?: string;
    lengde?: {
        nano?: number;
        negative?: boolean;
        positive?: boolean;
        seconds?: number;
        units?: Array<{
            dateBased?: boolean;
            duration?: {
                nano?: number;
                negative?: boolean;
                positive?: boolean;
                seconds?: number;
                zero?: boolean;
            };
            durationEstimated?: boolean;
            timeBased?: boolean;
        }>;
        zero?: boolean;
    };
    vedtatt?: string;
};
export type AndelForFaktaOmBeregningDto = {
    aktivitetStatus?: 'MIDL_INAKTIV' | 'AAP' | 'AT' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'FL' | 'MS' | 'SN' | 'AT_FL' | 'AT_SN' | 'FL_SN' | 'AT_FL_SN' | 'BA' | 'KUN_YTELSE' | 'TY' | 'VENTELØNN_VARTPENGER' | '-';
    andelsnr?: number;
    arbeidsforhold?: BeregningsgrunnlagArbeidsforholdDto;
    belopReadOnly?: number;
    fastsattBelop?: number;
    inntektskategori?: 'ARBEIDSTAKER' | 'FRILANSER' | 'SELVSTENDIG_NÆRINGSDRIVENDE' | 'DAGPENGER' | 'ARBEIDSAVKLARINGSPENGER' | 'SJØMANN' | 'DAGMAMMA' | 'JORDBRUKER' | 'FISKER' | 'ARBEIDSTAKER_UTEN_FERIEPENGER' | '-';
    lagtTilAvSaksbehandler?: boolean;
    refusjonskrav?: number;
    skalKunneEndreAktivitet?: boolean;
};
export type AndelGraderingDto = {
    aktivitetStatus: 'MIDL_INAKTIV' | 'AAP' | 'AT' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'FL' | 'MS' | 'SN' | 'AT_FL' | 'AT_SN' | 'FL_SN' | 'AT_FL_SN' | 'BA' | 'KUN_YTELSE' | 'TY' | 'VENTELØNN_VARTPENGER' | '-';
    arbeidsforholdRef?: InternArbeidsforholdRefDto;
    arbeidsgiver?: Aktør;
    graderinger?: Array<GraderingDto>;
};
export type AndelMedBeløpDto = {
    aktivitetStatus: 'MIDL_INAKTIV' | 'AAP' | 'AT' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'FL' | 'MS' | 'SN' | 'AT_FL' | 'AT_SN' | 'FL_SN' | 'AT_FL_SN' | 'BA' | 'KUN_YTELSE' | 'TY' | 'VENTELØNN_VARTPENGER' | '-';
    andelIArbeid: Array<(number)>;
    andelsnr: number;
    arbeidsforhold?: BeregningsgrunnlagArbeidsforholdDto;
    fastsattAvSaksbehandler?: boolean;
    fastsattBelopPrMnd?: number;
    inntektskategori: 'ARBEIDSTAKER' | 'FRILANSER' | 'SELVSTENDIG_NÆRINGSDRIVENDE' | 'DAGPENGER' | 'ARBEIDSAVKLARINGSPENGER' | 'SJØMANN' | 'DAGMAMMA' | 'JORDBRUKER' | 'FISKER' | 'ARBEIDSTAKER_UTEN_FERIEPENGER' | '-';
    kilde: 'SAKSBEHANDLER_KOFAKBER' | 'PROSESS_BESTEBEREGNING' | 'SAKSBEHANDLER_FORDELING' | 'PROSESS_PERIODISERING' | 'PROSESS_OMFORDELING' | 'PROSESS_START' | 'PROSESS_PERIODISERING_TILKOMMET_INNTEKT';
    lagtTilAvSaksbehandler?: boolean;
};
export type AngittPersonDto = {
    aktørId?: string;
    fødselsdato?: string;
    navn?: string;
    personIdent?: string;
    rolle?: string;
    situasjonKode?: string;
    tilleggsopplysninger?: string;
};
export type AnvistAndel = {
    arbeidsforholdId?: InternArbeidsforholdRefDto;
    arbeidsgiver?: Aktør;
    dagsats: number;
    inntektskategori?: 'ARBEIDSTAKER' | 'FRILANSER' | 'SELVSTENDIG_NÆRINGSDRIVENDE' | 'DAGPENGER' | 'ARBEIDSAVKLARINGSPENGER' | 'SJØMANN' | 'DAGMAMMA' | 'JORDBRUKER' | 'FISKER' | 'ARBEIDSTAKER_UTEN_FERIEPENGER' | '-';
    refusjonsgrad?: number;
    utbetalingsgrad?: number;
};
export type ArbeidDto = {
    yrkesaktiviteter?: Array<YrkesaktivitetDto>;
};
export type Arbeidsforhold = {
    aktørId?: string;
    arbeidsforholdId?: string;
    organisasjonsnummer?: string;
    type?: string;
};
export type ArbeidsforholdDto = {
    andelsnr?: number;
    arbeidsforholdId?: string;
    arbeidsgiverIdent?: string;
};
export type ArbeidsforholdIdDto = {
    eksternArbeidsforholdId?: string;
    internArbeidsforholdId?: string;
};
export type ArbeidsforholdInformasjonDto = {
    overstyringer?: Array<ArbeidsforholdOverstyringDto>;
    referanser?: Array<ArbeidsforholdReferanseDto>;
};
export type ArbeidsforholdOverstyringDto = {
    arbeidsforholdRefDto?: InternArbeidsforholdRefDto;
    arbeidsgiver: Aktør;
    handling?: '-' | 'BRUK' | 'NYTT_ARBEIDSFORHOLD' | 'BRUK_UTEN_INNTEKTSMELDING' | 'IKKE_BRUK' | 'SLÅTT_SAMMEN_MED_ANNET' | 'LAGT_TIL_AV_SAKSBEHANDLER' | 'BASERT_PÅ_INNTEKTSMELDING' | 'BRUK_MED_OVERSTYRT_PERIODE' | 'INNTEKT_IKKE_MED_I_BG';
};
export type handling = '-' | 'BRUK' | 'NYTT_ARBEIDSFORHOLD' | 'BRUK_UTEN_INNTEKTSMELDING' | 'IKKE_BRUK' | 'SLÅTT_SAMMEN_MED_ANNET' | 'LAGT_TIL_AV_SAKSBEHANDLER' | 'BASERT_PÅ_INNTEKTSMELDING' | 'BRUK_MED_OVERSTYRT_PERIODE' | 'INNTEKT_IKKE_MED_I_BG';
export declare const handling: {
    readonly _: "-";
    readonly BRUK: "BRUK";
    readonly NYTT_ARBEIDSFORHOLD: "NYTT_ARBEIDSFORHOLD";
    readonly BRUK_UTEN_INNTEKTSMELDING: "BRUK_UTEN_INNTEKTSMELDING";
    readonly IKKE_BRUK: "IKKE_BRUK";
    readonly SLÅTT_SAMMEN_MED_ANNET: "SLÅTT_SAMMEN_MED_ANNET";
    readonly LAGT_TIL_AV_SAKSBEHANDLER: "LAGT_TIL_AV_SAKSBEHANDLER";
    readonly BASERT_PÅ_INNTEKTSMELDING: "BASERT_PÅ_INNTEKTSMELDING";
    readonly BRUK_MED_OVERSTYRT_PERIODE: "BRUK_MED_OVERSTYRT_PERIODE";
    readonly INNTEKT_IKKE_MED_I_BG: "INNTEKT_IKKE_MED_I_BG";
};
export type ArbeidsforholdReferanseDto = {
    arbeidsgiver: Aktør;
    eksternReferanse?: EksternArbeidsforholdRef;
    internReferanse?: InternArbeidsforholdRefDto;
};
export type Arbeidsgiver = {
    arbeidsgiverAktørId?: string;
    arbeidsgiverOrgnr?: string;
};
export type ArbeidsgiverArbeidsforholdId = {
    arbeidsforhold: string;
    arbeidsgiver: string;
};
export type ArbeidsgiverArbeidsforholdIdV2 = {
    arbeidsforhold: string;
    arbeidsgiver: Arbeidsgiver;
};
export type ArbeidsgiverArbeidsforholdStatus = {
    arbeidsgiver: ArbeidsgiverArbeidsforholdId;
    journalpostId?: string;
    status: 'MOTTATT' | 'MOTTATT_IKKE_ANSATT' | 'MOTTATT_UKJENT_ARBEIDSFORHOLDSID' | 'IKKE_PÅKREVD' | 'FORTSETT_UTEN' | 'MANGLER';
};
export type status2 = 'MOTTATT' | 'MOTTATT_IKKE_ANSATT' | 'MOTTATT_UKJENT_ARBEIDSFORHOLDSID' | 'IKKE_PÅKREVD' | 'FORTSETT_UTEN' | 'MANGLER';
export declare const status2: {
    readonly MOTTATT: "MOTTATT";
    readonly MOTTATT_IKKE_ANSATT: "MOTTATT_IKKE_ANSATT";
    readonly MOTTATT_UKJENT_ARBEIDSFORHOLDSID: "MOTTATT_UKJENT_ARBEIDSFORHOLDSID";
    readonly IKKE_PÅKREVD: "IKKE_PÅKREVD";
    readonly FORTSETT_UTEN: "FORTSETT_UTEN";
    readonly MANGLER: "MANGLER";
};
export type ArbeidsgiverArbeidsforholdStatusV2 = {
    arbeidsgiver: ArbeidsgiverArbeidsforholdIdV2;
    journalpostId?: string;
    status: 'MOTTATT' | 'MOTTATT_IKKE_ANSATT' | 'MOTTATT_UKJENT_ARBEIDSFORHOLDSID' | 'IKKE_PÅKREVD' | 'FORTSETT_UTEN' | 'MANGLER';
};
export type ArbeidsgiverDto = {
    aktørId?: string;
    fødselsdato?: string;
    navn?: string;
    organisasjonsNummer?: string;
};
export type ArbeidsgiverMedPerioderSomManglerDto = {
    arbeidsgiver?: UttakArbeidsforhold;
    manglendePerioder?: Array<(string)>;
};
export type ArbeidsgiverOpplysningerDto = {
    arbeidsforholdreferanser: Array<ArbeidsforholdIdDto>;
    fødselsdato?: string;
    identifikator?: string;
    navn?: string;
    personIdentifikator?: string;
};
export type ArbeidsgiverOversiktDto = {
    arbeidsgivere?: {
        [key: string]: ArbeidsgiverOpplysningerDto;
    };
};
export type ArbeidstakerUtenInntektsmeldingAndelDto = {
    aktivitetStatus: 'MIDL_INAKTIV' | 'AAP' | 'AT' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'FL' | 'MS' | 'SN' | 'AT_FL' | 'AT_SN' | 'FL_SN' | 'AT_FL_SN' | 'BA' | 'KUN_YTELSE' | 'TY' | 'VENTELØNN_VARTPENGER' | '-';
    andelIArbeid: Array<(number)>;
    andelsnr: number;
    arbeidsforhold?: BeregningsgrunnlagArbeidsforholdDto;
    fastsattAvSaksbehandler?: boolean;
    inntektPrMnd?: number;
    inntektskategori: 'ARBEIDSTAKER' | 'FRILANSER' | 'SELVSTENDIG_NÆRINGSDRIVENDE' | 'DAGPENGER' | 'ARBEIDSAVKLARINGSPENGER' | 'SJØMANN' | 'DAGMAMMA' | 'JORDBRUKER' | 'FISKER' | 'ARBEIDSTAKER_UTEN_FERIEPENGER' | '-';
    kilde: 'SAKSBEHANDLER_KOFAKBER' | 'PROSESS_BESTEBEREGNING' | 'SAKSBEHANDLER_FORDELING' | 'PROSESS_PERIODISERING' | 'PROSESS_OMFORDELING' | 'PROSESS_START' | 'PROSESS_PERIODISERING_TILKOMMET_INNTEKT';
    lagtTilAvSaksbehandler?: boolean;
    mottarYtelse?: boolean;
};
export type AsyncPollingStatus = {
    cancelUri?: string;
    eta?: string;
    location?: string;
    message?: string;
    pending?: boolean;
    pollIntervalMillis?: number;
    readOnly?: boolean;
    status?: 'CANCELLED' | 'COMPLETE' | 'DELAYED' | 'HALTED' | 'PENDING';
};
export type status3 = 'CANCELLED' | 'COMPLETE' | 'DELAYED' | 'HALTED' | 'PENDING';
export declare const status3: {
    readonly CANCELLED: "CANCELLED";
    readonly COMPLETE: "COMPLETE";
    readonly DELAYED: "DELAYED";
    readonly HALTED: "HALTED";
    readonly PENDING: "PENDING";
};
export type AvbrytAksjonspunktDto = {
    aksjonspunktKode: string;
    begrunnelse: string;
    behandlingId: number;
    behandlingUuid?: string;
};
export type AvklarAktiviteterDto = {
    aktiviteterTomDatoMapping?: Array<AktivitetTomDatoMappingDto>;
    skjæringstidspunkt: string;
};
export type AvklaringsbehovDto = {
    begrunnelse?: string;
    definisjon: 'FASTSETT_BG_AT_FL' | 'VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN' | 'VURDER_VARIG_ENDRT_ARB_SITSJN_MDL_INAKTV' | 'FORDEL_BG' | 'FASTSETT_BG_TB_ARB' | 'VURDER_NYTT_INNTKTSFRHLD' | 'VURDER_REPRSNTR_STORTNGT' | 'FASTSETT_BG_SN_NY_I_ARB_LIVT' | 'AVKLAR_AKTIVITETER' | 'VURDER_FAKTA_ATFL_SN' | 'VURDER_REFUSJONSKRAV' | 'OVST_BEREGNINGSAKTIVITETER' | 'OVST_INNTEKT' | 'AUTO_VENT_PAA_INNTKT_RAP_FRST' | 'AUTO_VENT_PAA_SISTE_AAP_DP_MELDKRT' | 'AUTO_VENT_FRISINN' | 'INGEN_AKTIVITETER';
    erTrukket: boolean;
    kanLoses: boolean;
    status: 'OPPR' | 'UTFO' | 'AVBR';
    vurdertAv?: string;
    vurdertTidspunkt?: string;
};
export type definisjon2 = 'FASTSETT_BG_AT_FL' | 'VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN' | 'VURDER_VARIG_ENDRT_ARB_SITSJN_MDL_INAKTV' | 'FORDEL_BG' | 'FASTSETT_BG_TB_ARB' | 'VURDER_NYTT_INNTKTSFRHLD' | 'VURDER_REPRSNTR_STORTNGT' | 'FASTSETT_BG_SN_NY_I_ARB_LIVT' | 'AVKLAR_AKTIVITETER' | 'VURDER_FAKTA_ATFL_SN' | 'VURDER_REFUSJONSKRAV' | 'OVST_BEREGNINGSAKTIVITETER' | 'OVST_INNTEKT' | 'AUTO_VENT_PAA_INNTKT_RAP_FRST' | 'AUTO_VENT_PAA_SISTE_AAP_DP_MELDKRT' | 'AUTO_VENT_FRISINN' | 'INGEN_AKTIVITETER';
export declare const definisjon2: {
    readonly FASTSETT_BG_AT_FL: "FASTSETT_BG_AT_FL";
    readonly VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN: "VURDER_VARIG_ENDRT_NYOPPSTR_NAERNG_SN";
    readonly VURDER_VARIG_ENDRT_ARB_SITSJN_MDL_INAKTV: "VURDER_VARIG_ENDRT_ARB_SITSJN_MDL_INAKTV";
    readonly FORDEL_BG: "FORDEL_BG";
    readonly FASTSETT_BG_TB_ARB: "FASTSETT_BG_TB_ARB";
    readonly VURDER_NYTT_INNTKTSFRHLD: "VURDER_NYTT_INNTKTSFRHLD";
    readonly VURDER_REPRSNTR_STORTNGT: "VURDER_REPRSNTR_STORTNGT";
    readonly FASTSETT_BG_SN_NY_I_ARB_LIVT: "FASTSETT_BG_SN_NY_I_ARB_LIVT";
    readonly AVKLAR_AKTIVITETER: "AVKLAR_AKTIVITETER";
    readonly VURDER_FAKTA_ATFL_SN: "VURDER_FAKTA_ATFL_SN";
    readonly VURDER_REFUSJONSKRAV: "VURDER_REFUSJONSKRAV";
    readonly OVST_BEREGNINGSAKTIVITETER: "OVST_BEREGNINGSAKTIVITETER";
    readonly OVST_INNTEKT: "OVST_INNTEKT";
    readonly AUTO_VENT_PAA_INNTKT_RAP_FRST: "AUTO_VENT_PAA_INNTKT_RAP_FRST";
    readonly AUTO_VENT_PAA_SISTE_AAP_DP_MELDKRT: "AUTO_VENT_PAA_SISTE_AAP_DP_MELDKRT";
    readonly AUTO_VENT_FRISINN: "AUTO_VENT_FRISINN";
    readonly INGEN_AKTIVITETER: "INGEN_AKTIVITETER";
};
export type AvklartPersonstatus = {
    orginalPersonstatus?: 'ABNR' | 'ADNR' | 'BOSA' | 'DØD' | 'DØDD' | 'FOSV' | 'FØDR' | 'UFUL' | 'UREG' | 'UTAN' | 'UTPE' | 'UTVA' | '-';
    overstyrtPersonstatus?: 'ABNR' | 'ADNR' | 'BOSA' | 'DØD' | 'DØDD' | 'FOSV' | 'FØDR' | 'UFUL' | 'UREG' | 'UTAN' | 'UTPE' | 'UTVA' | '-';
};
export type orginalPersonstatus = 'ABNR' | 'ADNR' | 'BOSA' | 'DØD' | 'DØDD' | 'FOSV' | 'FØDR' | 'UFUL' | 'UREG' | 'UTAN' | 'UTPE' | 'UTVA' | '-';
export declare const orginalPersonstatus: {
    readonly ABNR: "ABNR";
    readonly ADNR: "ADNR";
    readonly BOSA: "BOSA";
    readonly DØD: "DØD";
    readonly DØDD: "DØDD";
    readonly FOSV: "FOSV";
    readonly FØDR: "FØDR";
    readonly UFUL: "UFUL";
    readonly UREG: "UREG";
    readonly UTAN: "UTAN";
    readonly UTPE: "UTPE";
    readonly UTVA: "UTVA";
    readonly _: "-";
};
export type overstyrtPersonstatus = 'ABNR' | 'ADNR' | 'BOSA' | 'DØD' | 'DØDD' | 'FOSV' | 'FØDR' | 'UFUL' | 'UREG' | 'UTAN' | 'UTPE' | 'UTVA' | '-';
export declare const overstyrtPersonstatus: {
    readonly ABNR: "ABNR";
    readonly ADNR: "ADNR";
    readonly BOSA: "BOSA";
    readonly DØD: "DØD";
    readonly DØDD: "DØDD";
    readonly FOSV: "FOSV";
    readonly FØDR: "FØDR";
    readonly UFUL: "UFUL";
    readonly UREG: "UREG";
    readonly UTAN: "UTAN";
    readonly UTPE: "UTPE";
    readonly UTVA: "UTVA";
    readonly _: "-";
};
export type AvklarteOpplysninger = {
    begrunnelse?: string;
    fraDato: string;
    godkjent: boolean;
    opprettetAv?: string;
    opprettetTidspunkt?: string;
};
export type AvslagsårsakPrPeriodeDto = {
    avslagsårsak: 'FOR_LAVT_BG' | 'INGEN_FRILANS_I_PERIODE_UTEN_YTELSE' | 'AVKORTET_GRUNNET_LØPENDE_INNTEKT' | 'AVKORTET_GRUNNET_ANNEN_INNTEKT';
    fom: string;
    tom: string;
};
export type avslagsårsak = 'FOR_LAVT_BG' | 'INGEN_FRILANS_I_PERIODE_UTEN_YTELSE' | 'AVKORTET_GRUNNET_LØPENDE_INNTEKT' | 'AVKORTET_GRUNNET_ANNEN_INNTEKT';
export declare const avslagsårsak: {
    readonly FOR_LAVT_BG: "FOR_LAVT_BG";
    readonly INGEN_FRILANS_I_PERIODE_UTEN_YTELSE: "INGEN_FRILANS_I_PERIODE_UTEN_YTELSE";
    readonly AVKORTET_GRUNNET_LØPENDE_INNTEKT: "AVKORTET_GRUNNET_LØPENDE_INNTEKT";
    readonly AVKORTET_GRUNNET_ANNEN_INNTEKT: "AVKORTET_GRUNNET_ANNEN_INNTEKT";
};
export type Barn = {
    barnType?: 'VANLIG' | 'FOSTERBARN' | 'UTENLANDSK_BARN';
    deltBostedPerioder?: Array<(string)>;
    dødsdato?: string;
    fødselsdato?: string;
    personIdent?: string;
    sammeBostedPerioder?: Array<(string)>;
};
export type barnType = 'VANLIG' | 'FOSTERBARN' | 'UTENLANDSK_BARN';
export declare const barnType: {
    readonly VANLIG: "VANLIG";
    readonly FOSTERBARN: "FOSTERBARN";
    readonly UTENLANDSK_BARN: "UTENLANDSK_BARN";
};
export type BehandlingAksjonspunktDto = {
    aksjonspunkter?: Array<AksjonspunktDto>;
    behandlingStatus?: 'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED';
    behandlingType?: 'BT-002' | 'BT-004' | 'BT-010' | '-';
    behandlingUuid: string;
    fagsakStatus?: 'OPPR' | 'UBEH' | 'LOP' | 'AVSLU';
    saksnummer: string;
    ytelseType: 'DAG' | 'FRISINN' | 'SP' | 'PSB' | 'PPN' | 'OMP' | 'OMP_KS' | 'OMP_MA' | 'OMP_AO' | 'OLP' | 'AAP' | 'ES' | 'FP' | 'SVP' | 'EF' | 'OBSOLETE' | '-';
};
export type behandlingStatus = 'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED';
export declare const behandlingStatus: {
    readonly AVSLU: "AVSLU";
    readonly FVED: "FVED";
    readonly IVED: "IVED";
    readonly OPPRE: "OPPRE";
    readonly UTRED: "UTRED";
};
export type behandlingType = 'BT-002' | 'BT-004' | 'BT-010' | '-';
export declare const behandlingType: {
    readonly BT_002: "BT-002";
    readonly BT_004: "BT-004";
    readonly BT_010: "BT-010";
    readonly _: "-";
};
export type fagsakStatus = 'OPPR' | 'UBEH' | 'LOP' | 'AVSLU';
export declare const fagsakStatus: {
    readonly OPPR: "OPPR";
    readonly UBEH: "UBEH";
    readonly LOP: "LOP";
    readonly AVSLU: "AVSLU";
};
export type BehandlingDto = {
    ansvarligBeslutter?: string;
    ansvarligSaksbehandler?: string;
    avsluttet?: string;
    behandlendeEnhetId?: string;
    behandlendeEnhetNavn?: string;
    behandlingHenlagt?: boolean;
    behandlingKoet?: boolean;
    behandlingPaaVent?: boolean;
    behandlingResultatType?: 'IKKE_FASTSATT' | 'INNVILGET' | 'DELVIS_INNVILGET' | 'AVSLÅTT' | 'OPPHØR' | 'HENLAGT_SØKNAD_TRUKKET' | 'HENLAGT_FEILOPPRETTET' | 'HENLAGT_BRUKER_DØD' | 'MERGET_OG_HENLAGT' | 'HENLAGT_SØKNAD_MANGLER' | 'HENLAGT_MASKINELT' | 'INNVILGET_ENDRING' | 'INGEN_ENDRING' | 'MANGLER_BEREGNINGSREGLER';
    behandlingsfristTid?: string;
    behandlingsresultat?: BehandlingsresultatDto;
    behandlingÅrsaker?: Array<BehandlingÅrsakDto>;
    endret?: string;
    endretAvBrukernavn?: string;
    erPaaVent?: boolean;
    fagsakId?: number;
    fristBehandlingPaaVent?: string;
    førsteÅrsak?: BehandlingÅrsakDto;
    gjeldendeVedtak?: boolean;
    id?: number;
    links?: Array<ResourceLink>;
    opprettet: string;
    originalVedtaksDato?: string;
    sakstype: 'DAG' | 'FRISINN' | 'SP' | 'PSB' | 'PPN' | 'OMP' | 'OMP_KS' | 'OMP_MA' | 'OMP_AO' | 'OLP' | 'AAP' | 'ES' | 'FP' | 'SVP' | 'EF' | 'OBSOLETE' | '-';
    sprakkode?: Språkkode;
    status: 'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED';
    stegTilstand?: BehandlingStegTilstandDto;
    taskStatus?: AsyncPollingStatus;
    toTrinnsBehandling?: boolean;
    type: 'BT-002' | 'BT-004' | 'BT-010' | '-';
    uuid: string;
    venteArsakKode?: string;
    venteårsak?: '-' | 'ANKE_OVERSENDT_TIL_TRYGDERETTEN' | 'ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER' | 'AVV_DOK' | 'AVV_IM_MOT_AAREG' | 'AVV_IM_MOT_SØKNAD_AT' | 'AVV_SØKNADSPERIODER' | 'AVV_FODSEL' | 'AVV_RESPONS_REVURDERING' | 'FOR_TIDLIG_SOKNAD' | 'GRADERING_FLERE_ARBEIDSFORHOLD' | 'REFUSJON_3_MÅNEDER' | 'SCANN' | 'UTV_FRIST' | 'VENT_FEIL_ENDRINGSSØKNAD' | 'VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG' | 'VENT_INFOTRYGD' | 'VENT_INNTEKT_RAPPORTERINGSFRIST' | 'VENT_MILITÆR_OG_BG_UNDER_3G' | 'VENT_OPDT_INNTEKTSMELDING' | 'VENT_OPPTJENING_OPPLYSNINGER' | 'VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID' | 'VENT_REGISTERINNHENTING' | 'VENT_PÅ_SISTE_AAP_MELDEKORT' | 'VENT_SØKNAD_SENDT_INFORMASJONSBREV' | 'VENT_TIDLIGERE_BEHANDLING' | 'VENT_ÅPEN_BEHANDLING' | 'VENT_MANGL_FUNKSJ_SAKSBEHANDLER' | 'VENTER_SVAR_PORTEN' | 'VENTER_SVAR_TEAMS' | 'ANDRE_INNTEKTSOPPLYSNINGER' | 'INNTEKTSMELDING' | 'LEGEERKLÆRING' | 'MEDISINSKE_OPPLYSNINGER' | 'ANNET' | 'VENTER_ETTERLYS_IM' | 'VENTER_ETTERLYS_IM_VARSEL' | 'OPPD_ÅPEN_BEH' | 'VENT_DEKGRAD_REGEL' | 'VENT_ØKONOMI' | 'VENT_TILBAKEKREVING' | 'VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER' | 'VENT_BEREGNING_TILBAKE_I_TID' | 'BRUKER_70ÅR_VED_REFUSJON' | 'VENT_LOVENDRING_8_41' | 'INGEN_PERIODE_UTEN_YTELSE' | 'PERIODE_MED_AVSLAG' | 'MANGLENDE_FUNKSJONALITET' | 'KORTVARIG_ARBEID' | 'FRISINN_ATFL_SAMME_ORG' | 'FRISINN_VARIANT_SN_MED_FL_INNTEKT' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT' | 'FRISINN_VARIANT_NY_FL' | 'FRISINN_VARIANT_NY_SN_2019' | 'FRISINN_VARIANT_NY_SN_2020' | 'FRISINN_VARIANT_KOMBINERT' | 'FRISINN_VARIANT_KOMBINERT_NY_FL' | 'FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2019' | 'FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2020' | 'FRISINN_VARIANT_KOMBINERT_NY_SN_2019' | 'FRISINN_VARIANT_KOMBINERT_NY_SN_2020' | 'FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2019' | 'FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2020' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2019' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2020' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2019' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2020' | 'FRISINN_VARIANT_ENDRET_INNTEKTSTYPE' | 'AVV_SOKN_IT_PERIODER' | 'AVV_SOKN_NAERING' | 'AVV_SOKN_FRILANS' | 'DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP' | 'AAP_DP_SISTE_10_MND_SVP' | 'FL_SN_IKKE_STOTTET_FOR_SVP';
    versjon: number;
};
export type behandlingResultatType = 'IKKE_FASTSATT' | 'INNVILGET' | 'DELVIS_INNVILGET' | 'AVSLÅTT' | 'OPPHØR' | 'HENLAGT_SØKNAD_TRUKKET' | 'HENLAGT_FEILOPPRETTET' | 'HENLAGT_BRUKER_DØD' | 'MERGET_OG_HENLAGT' | 'HENLAGT_SØKNAD_MANGLER' | 'HENLAGT_MASKINELT' | 'INNVILGET_ENDRING' | 'INGEN_ENDRING' | 'MANGLER_BEREGNINGSREGLER';
export declare const behandlingResultatType: {
    readonly IKKE_FASTSATT: "IKKE_FASTSATT";
    readonly INNVILGET: "INNVILGET";
    readonly DELVIS_INNVILGET: "DELVIS_INNVILGET";
    readonly AVSLÅTT: "AVSLÅTT";
    readonly OPPHØR: "OPPHØR";
    readonly HENLAGT_SØKNAD_TRUKKET: "HENLAGT_SØKNAD_TRUKKET";
    readonly HENLAGT_FEILOPPRETTET: "HENLAGT_FEILOPPRETTET";
    readonly HENLAGT_BRUKER_DØD: "HENLAGT_BRUKER_DØD";
    readonly MERGET_OG_HENLAGT: "MERGET_OG_HENLAGT";
    readonly HENLAGT_SØKNAD_MANGLER: "HENLAGT_SØKNAD_MANGLER";
    readonly HENLAGT_MASKINELT: "HENLAGT_MASKINELT";
    readonly INNVILGET_ENDRING: "INNVILGET_ENDRING";
    readonly INGEN_ENDRING: "INGEN_ENDRING";
    readonly MANGLER_BEREGNINGSREGLER: "MANGLER_BEREGNINGSREGLER";
};
export type sakstype = 'DAG' | 'FRISINN' | 'SP' | 'PSB' | 'PPN' | 'OMP' | 'OMP_KS' | 'OMP_MA' | 'OMP_AO' | 'OLP' | 'AAP' | 'ES' | 'FP' | 'SVP' | 'EF' | 'OBSOLETE' | '-';
export declare const sakstype: {
    readonly DAG: "DAG";
    readonly FRISINN: "FRISINN";
    readonly SP: "SP";
    readonly PSB: "PSB";
    readonly PPN: "PPN";
    readonly OMP: "OMP";
    readonly OMP_KS: "OMP_KS";
    readonly OMP_MA: "OMP_MA";
    readonly OMP_AO: "OMP_AO";
    readonly OLP: "OLP";
    readonly AAP: "AAP";
    readonly ES: "ES";
    readonly FP: "FP";
    readonly SVP: "SVP";
    readonly EF: "EF";
    readonly OBSOLETE: "OBSOLETE";
    readonly _: "-";
};
export type status4 = 'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED';
export declare const status4: {
    readonly AVSLU: "AVSLU";
    readonly FVED: "FVED";
    readonly IVED: "IVED";
    readonly OPPRE: "OPPRE";
    readonly UTRED: "UTRED";
};
export type type = 'BT-002' | 'BT-004' | 'BT-010' | '-';
export declare const type: {
    readonly BT_002: "BT-002";
    readonly BT_004: "BT-004";
    readonly BT_010: "BT-010";
    readonly _: "-";
};
export type BehandlingIdDto = {
    behandlingId: string;
};
export type BehandlingIdListe = {
    behandlinger: Array<BehandlingIdDto>;
};
export type BehandlingMedFagsakDto = {
    behandlingResultatType?: 'IKKE_FASTSATT' | 'INNVILGET' | 'DELVIS_INNVILGET' | 'AVSLÅTT' | 'OPPHØR' | 'HENLAGT_SØKNAD_TRUKKET' | 'HENLAGT_FEILOPPRETTET' | 'HENLAGT_BRUKER_DØD' | 'MERGET_OG_HENLAGT' | 'HENLAGT_SØKNAD_MANGLER' | 'HENLAGT_MASKINELT' | 'INNVILGET_ENDRING' | 'INGEN_ENDRING' | 'MANGLER_BEREGNINGSREGLER';
    eldsteDatoMedEndringFraSøker: string;
    sakstype: 'DAG' | 'FRISINN' | 'SP' | 'PSB' | 'PPN' | 'OMP' | 'OMP_KS' | 'OMP_MA' | 'OMP_AO' | 'OLP' | 'AAP' | 'ES' | 'FP' | 'SVP' | 'EF' | 'OBSOLETE' | '-';
};
export type BehandlingOperasjonerDto = {
    behandlingFraBeslutter?: boolean;
    behandlingKanBytteEnhet?: boolean;
    behandlingKanGjenopptas?: boolean;
    behandlingKanHenlegges?: boolean;
    behandlingKanOpnesForEndringer?: boolean;
    behandlingKanSendeMelding?: boolean;
    behandlingKanSettesPaVent?: boolean;
    behandlingTilGodkjenning?: boolean;
    uuid: string;
};
export type BehandlingOpprettingDto = {
    behandlingType: 'BT-002' | 'BT-004' | 'BT-010' | '-';
    kanOppretteBehandling?: boolean;
};
export type BehandlingStegTilstandDto = {
    stegStatus: 'STARTET' | 'INNGANG' | 'UTGANG' | 'VENTER' | 'AVBRUTT' | 'UTFØRT' | 'FREMOVERFØRT' | 'TILBAKEFØRT' | '-';
    stegType: 'BERYT' | 'PRECONDITION_BERGRUNN' | 'FAST_BERGRUNN' | 'VURDER_OPPTJ_PERIODE' | 'FASTSETT_STP_BER' | 'FVEDSTEG' | 'VURDER_VILKAR_BERGRUNN' | 'VURDER_REF_BERGRUNN' | 'FORDEL_BERGRUNN' | 'FORBRES' | 'FORS_BERGRUNN' | 'FORS_BERGRUNN_2' | 'VURDER_MANUELT_BREV' | 'FORVEDSTEG' | 'BERYT_OPPDRAG' | 'VURDER_SØKNADSFRIST' | 'INIT_PERIODER' | 'INIT_VILKÅR' | 'INPER' | 'INREG' | 'INSØK' | 'INREG_AVSL' | 'IVEDSTEG' | 'KOFAK' | 'KOARB' | 'KOMPLETT_FOR_BEREGNING' | 'KOFAKBER' | 'KOFAKUT' | 'KOFAK_LOP_MEDL' | 'VURDEROP' | 'SIMOPP' | 'START' | 'VRSLREV' | 'VULOMED' | 'VURDER_FARESIGNALER' | 'VURDINNSYN' | 'VURDERKOMPLETT' | 'VURDER_STARTDATO_UTTAKSREGLER' | 'VURDER_TILKOMMET_INNTEKT' | 'POSTCONDITION_KOMPLETTHET' | 'VARIANT_FILTER' | 'VURDER_MEDISINSK' | 'VURDER_NODVENDIGHET' | 'VURDER_INSTITUSJON' | 'VURDER_GJENNOMGATT_OPPLAERING' | 'POST_MEDISINSK' | 'VURDERMV' | 'VURDER_OMSORG_FOR' | 'VURDER_ALDER' | 'VURDER_ALDER_BARN' | 'VURDER_OPPTJ_FAKTA' | 'VURDER_OPPTJ' | 'VURDER_TILBAKETREKK' | 'VURDER_UTLAND' | 'VURDER_UTTAK' | 'VURDER_UTTAK_V2' | 'BEKREFT_UTTAK' | 'MANUELL_VILKÅRSVURDERING' | 'MANUELL_TILKJENNING_YTELSE' | 'OVERGANG_FRA_INFOTRYGD';
    tidsstempel?: string;
};
export type stegStatus = 'STARTET' | 'INNGANG' | 'UTGANG' | 'VENTER' | 'AVBRUTT' | 'UTFØRT' | 'FREMOVERFØRT' | 'TILBAKEFØRT' | '-';
export declare const stegStatus: {
    readonly STARTET: "STARTET";
    readonly INNGANG: "INNGANG";
    readonly UTGANG: "UTGANG";
    readonly VENTER: "VENTER";
    readonly AVBRUTT: "AVBRUTT";
    readonly UTFØRT: "UTFØRT";
    readonly FREMOVERFØRT: "FREMOVERFØRT";
    readonly TILBAKEFØRT: "TILBAKEFØRT";
    readonly _: "-";
};
export type stegType = 'BERYT' | 'PRECONDITION_BERGRUNN' | 'FAST_BERGRUNN' | 'VURDER_OPPTJ_PERIODE' | 'FASTSETT_STP_BER' | 'FVEDSTEG' | 'VURDER_VILKAR_BERGRUNN' | 'VURDER_REF_BERGRUNN' | 'FORDEL_BERGRUNN' | 'FORBRES' | 'FORS_BERGRUNN' | 'FORS_BERGRUNN_2' | 'VURDER_MANUELT_BREV' | 'FORVEDSTEG' | 'BERYT_OPPDRAG' | 'VURDER_SØKNADSFRIST' | 'INIT_PERIODER' | 'INIT_VILKÅR' | 'INPER' | 'INREG' | 'INSØK' | 'INREG_AVSL' | 'IVEDSTEG' | 'KOFAK' | 'KOARB' | 'KOMPLETT_FOR_BEREGNING' | 'KOFAKBER' | 'KOFAKUT' | 'KOFAK_LOP_MEDL' | 'VURDEROP' | 'SIMOPP' | 'START' | 'VRSLREV' | 'VULOMED' | 'VURDER_FARESIGNALER' | 'VURDINNSYN' | 'VURDERKOMPLETT' | 'VURDER_STARTDATO_UTTAKSREGLER' | 'VURDER_TILKOMMET_INNTEKT' | 'POSTCONDITION_KOMPLETTHET' | 'VARIANT_FILTER' | 'VURDER_MEDISINSK' | 'VURDER_NODVENDIGHET' | 'VURDER_INSTITUSJON' | 'VURDER_GJENNOMGATT_OPPLAERING' | 'POST_MEDISINSK' | 'VURDERMV' | 'VURDER_OMSORG_FOR' | 'VURDER_ALDER' | 'VURDER_ALDER_BARN' | 'VURDER_OPPTJ_FAKTA' | 'VURDER_OPPTJ' | 'VURDER_TILBAKETREKK' | 'VURDER_UTLAND' | 'VURDER_UTTAK' | 'VURDER_UTTAK_V2' | 'BEKREFT_UTTAK' | 'MANUELL_VILKÅRSVURDERING' | 'MANUELL_TILKJENNING_YTELSE' | 'OVERGANG_FRA_INFOTRYGD';
export declare const stegType: {
    readonly BERYT: "BERYT";
    readonly PRECONDITION_BERGRUNN: "PRECONDITION_BERGRUNN";
    readonly FAST_BERGRUNN: "FAST_BERGRUNN";
    readonly VURDER_OPPTJ_PERIODE: "VURDER_OPPTJ_PERIODE";
    readonly FASTSETT_STP_BER: "FASTSETT_STP_BER";
    readonly FVEDSTEG: "FVEDSTEG";
    readonly VURDER_VILKAR_BERGRUNN: "VURDER_VILKAR_BERGRUNN";
    readonly VURDER_REF_BERGRUNN: "VURDER_REF_BERGRUNN";
    readonly FORDEL_BERGRUNN: "FORDEL_BERGRUNN";
    readonly FORBRES: "FORBRES";
    readonly FORS_BERGRUNN: "FORS_BERGRUNN";
    readonly FORS_BERGRUNN_2: "FORS_BERGRUNN_2";
    readonly VURDER_MANUELT_BREV: "VURDER_MANUELT_BREV";
    readonly FORVEDSTEG: "FORVEDSTEG";
    readonly BERYT_OPPDRAG: "BERYT_OPPDRAG";
    readonly VURDER_SØKNADSFRIST: "VURDER_SØKNADSFRIST";
    readonly INIT_PERIODER: "INIT_PERIODER";
    readonly INIT_VILKÅR: "INIT_VILKÅR";
    readonly INPER: "INPER";
    readonly INREG: "INREG";
    readonly INSØK: "INSØK";
    readonly INREG_AVSL: "INREG_AVSL";
    readonly IVEDSTEG: "IVEDSTEG";
    readonly KOFAK: "KOFAK";
    readonly KOARB: "KOARB";
    readonly KOMPLETT_FOR_BEREGNING: "KOMPLETT_FOR_BEREGNING";
    readonly KOFAKBER: "KOFAKBER";
    readonly KOFAKUT: "KOFAKUT";
    readonly KOFAK_LOP_MEDL: "KOFAK_LOP_MEDL";
    readonly VURDEROP: "VURDEROP";
    readonly SIMOPP: "SIMOPP";
    readonly START: "START";
    readonly VRSLREV: "VRSLREV";
    readonly VULOMED: "VULOMED";
    readonly VURDER_FARESIGNALER: "VURDER_FARESIGNALER";
    readonly VURDINNSYN: "VURDINNSYN";
    readonly VURDERKOMPLETT: "VURDERKOMPLETT";
    readonly VURDER_STARTDATO_UTTAKSREGLER: "VURDER_STARTDATO_UTTAKSREGLER";
    readonly VURDER_TILKOMMET_INNTEKT: "VURDER_TILKOMMET_INNTEKT";
    readonly POSTCONDITION_KOMPLETTHET: "POSTCONDITION_KOMPLETTHET";
    readonly VARIANT_FILTER: "VARIANT_FILTER";
    readonly VURDER_MEDISINSK: "VURDER_MEDISINSK";
    readonly VURDER_NODVENDIGHET: "VURDER_NODVENDIGHET";
    readonly VURDER_INSTITUSJON: "VURDER_INSTITUSJON";
    readonly VURDER_GJENNOMGATT_OPPLAERING: "VURDER_GJENNOMGATT_OPPLAERING";
    readonly POST_MEDISINSK: "POST_MEDISINSK";
    readonly VURDERMV: "VURDERMV";
    readonly VURDER_OMSORG_FOR: "VURDER_OMSORG_FOR";
    readonly VURDER_ALDER: "VURDER_ALDER";
    readonly VURDER_ALDER_BARN: "VURDER_ALDER_BARN";
    readonly VURDER_OPPTJ_FAKTA: "VURDER_OPPTJ_FAKTA";
    readonly VURDER_OPPTJ: "VURDER_OPPTJ";
    readonly VURDER_TILBAKETREKK: "VURDER_TILBAKETREKK";
    readonly VURDER_UTLAND: "VURDER_UTLAND";
    readonly VURDER_UTTAK: "VURDER_UTTAK";
    readonly VURDER_UTTAK_V2: "VURDER_UTTAK_V2";
    readonly BEKREFT_UTTAK: "BEKREFT_UTTAK";
    readonly MANUELL_VILKÅRSVURDERING: "MANUELL_VILKÅRSVURDERING";
    readonly MANUELL_TILKJENNING_YTELSE: "MANUELL_TILKJENNING_YTELSE";
    readonly OVERGANG_FRA_INFOTRYGD: "OVERGANG_FRA_INFOTRYGD";
};
export type BehandlingsresultatDto = {
    erRevurderingMedUendretUtfall?: boolean;
    type: 'IKKE_FASTSATT' | 'INNVILGET' | 'DELVIS_INNVILGET' | 'AVSLÅTT' | 'OPPHØR' | 'HENLAGT_SØKNAD_TRUKKET' | 'HENLAGT_FEILOPPRETTET' | 'HENLAGT_BRUKER_DØD' | 'MERGET_OG_HENLAGT' | 'HENLAGT_SØKNAD_MANGLER' | 'HENLAGT_MASKINELT' | 'INNVILGET_ENDRING' | 'INGEN_ENDRING' | 'MANGLER_BEREGNINGSREGLER';
    vedtaksdato?: string;
    vilkårResultat?: {
        [key: string]: Array<VilkårResultatDto>;
    };
};
export type type2 = 'IKKE_FASTSATT' | 'INNVILGET' | 'DELVIS_INNVILGET' | 'AVSLÅTT' | 'OPPHØR' | 'HENLAGT_SØKNAD_TRUKKET' | 'HENLAGT_FEILOPPRETTET' | 'HENLAGT_BRUKER_DØD' | 'MERGET_OG_HENLAGT' | 'HENLAGT_SØKNAD_MANGLER' | 'HENLAGT_MASKINELT' | 'INNVILGET_ENDRING' | 'INGEN_ENDRING' | 'MANGLER_BEREGNINGSREGLER';
export declare const type2: {
    readonly IKKE_FASTSATT: "IKKE_FASTSATT";
    readonly INNVILGET: "INNVILGET";
    readonly DELVIS_INNVILGET: "DELVIS_INNVILGET";
    readonly AVSLÅTT: "AVSLÅTT";
    readonly OPPHØR: "OPPHØR";
    readonly HENLAGT_SØKNAD_TRUKKET: "HENLAGT_SØKNAD_TRUKKET";
    readonly HENLAGT_FEILOPPRETTET: "HENLAGT_FEILOPPRETTET";
    readonly HENLAGT_BRUKER_DØD: "HENLAGT_BRUKER_DØD";
    readonly MERGET_OG_HENLAGT: "MERGET_OG_HENLAGT";
    readonly HENLAGT_SØKNAD_MANGLER: "HENLAGT_SØKNAD_MANGLER";
    readonly HENLAGT_MASKINELT: "HENLAGT_MASKINELT";
    readonly INNVILGET_ENDRING: "INNVILGET_ENDRING";
    readonly INGEN_ENDRING: "INGEN_ENDRING";
    readonly MANGLER_BEREGNINGSREGLER: "MANGLER_BEREGNINGSREGLER";
};
export type BehandlingÅrsakDto = {
    behandlingArsakType?: 'RE-MF' | 'RE-MFIP' | 'RE-AVAB' | 'RE-LOV' | 'RE-RGLF' | 'RE-FEFAKTA' | 'RE-PRSSL' | 'RE-END-FRA-BRUKER' | 'RE-FRAVÆRKORR-SAKSB' | 'RE-END-INNTEKTSMELD' | 'BERØRT-BEHANDLING' | 'RE-ANNET' | 'RE-SATS-REGULERING' | 'RE-ENDRET-FORDELING' | 'INFOBREV_BEHANDLING' | 'INFOBREV_OPPHOLD' | 'RE-KLAG-U-INNTK' | 'RE-KLAG-M-INNTK' | 'RE-MDL' | 'RE-OPTJ' | 'RE-FRDLING' | 'RE-INNTK' | 'RE-DØD' | 'RE-SRTB' | 'RE-FRIST' | 'RE-BER-GRUN' | 'RE-KLAG-INNH-PGI' | 'ETTER_KLAGE' | 'RE-HENDELSE-FØDSEL' | 'RE-HENDELSE-DØD-F' | 'RE-HENDELSE-DØD-B' | 'RE-HENDELSE-DØDFØD' | 'RE-REGISTEROPPL' | 'RE-YTELSE' | 'RE-TILST-YT-INNVIL' | 'RE-ENDR-BER-GRUN' | 'RE-TILST-YT-OPPH' | 'RE_REBEREGN_FP' | 'RE_ANNEN_SAK' | 'RE_UTSATT_BEHANDLING' | 'RE_GJENOPPTAR_UTSATT_BEHANDLING' | 'RE_ANNEN_SAK_ET' | 'RE_ANNEN_SAK_NB' | 'RE_ANNEN_SAK_S' | 'RE_ANNEN_SAK_NB_ET' | 'RE_ANNEN_SAK_S_ET' | 'RE_ANNEN_SAK_S_NB' | 'RE_ANNEN_SAK_S_ET_NB' | 'RE_ANNEN_SAK_FP' | 'UNNT_GENERELL' | 'REVURDERER_BERØRT_PERIODE' | '-';
    erAutomatiskRevurdering?: boolean;
    manueltOpprettet?: boolean;
};
export type behandlingArsakType = 'RE-MF' | 'RE-MFIP' | 'RE-AVAB' | 'RE-LOV' | 'RE-RGLF' | 'RE-FEFAKTA' | 'RE-PRSSL' | 'RE-END-FRA-BRUKER' | 'RE-FRAVÆRKORR-SAKSB' | 'RE-END-INNTEKTSMELD' | 'BERØRT-BEHANDLING' | 'RE-ANNET' | 'RE-SATS-REGULERING' | 'RE-ENDRET-FORDELING' | 'INFOBREV_BEHANDLING' | 'INFOBREV_OPPHOLD' | 'RE-KLAG-U-INNTK' | 'RE-KLAG-M-INNTK' | 'RE-MDL' | 'RE-OPTJ' | 'RE-FRDLING' | 'RE-INNTK' | 'RE-DØD' | 'RE-SRTB' | 'RE-FRIST' | 'RE-BER-GRUN' | 'RE-KLAG-INNH-PGI' | 'ETTER_KLAGE' | 'RE-HENDELSE-FØDSEL' | 'RE-HENDELSE-DØD-F' | 'RE-HENDELSE-DØD-B' | 'RE-HENDELSE-DØDFØD' | 'RE-REGISTEROPPL' | 'RE-YTELSE' | 'RE-TILST-YT-INNVIL' | 'RE-ENDR-BER-GRUN' | 'RE-TILST-YT-OPPH' | 'RE_REBEREGN_FP' | 'RE_ANNEN_SAK' | 'RE_UTSATT_BEHANDLING' | 'RE_GJENOPPTAR_UTSATT_BEHANDLING' | 'RE_ANNEN_SAK_ET' | 'RE_ANNEN_SAK_NB' | 'RE_ANNEN_SAK_S' | 'RE_ANNEN_SAK_NB_ET' | 'RE_ANNEN_SAK_S_ET' | 'RE_ANNEN_SAK_S_NB' | 'RE_ANNEN_SAK_S_ET_NB' | 'RE_ANNEN_SAK_FP' | 'UNNT_GENERELL' | 'REVURDERER_BERØRT_PERIODE' | '-';
export declare const behandlingArsakType: {
    readonly RE_MF: "RE-MF";
    readonly RE_MFIP: "RE-MFIP";
    readonly RE_AVAB: "RE-AVAB";
    readonly RE_LOV: "RE-LOV";
    readonly RE_RGLF: "RE-RGLF";
    readonly RE_FEFAKTA: "RE-FEFAKTA";
    readonly RE_PRSSL: "RE-PRSSL";
    readonly RE_END_FRA_BRUKER: "RE-END-FRA-BRUKER";
    readonly RE_FRAVÆRKORR_SAKSB: "RE-FRAVÆRKORR-SAKSB";
    readonly RE_END_INNTEKTSMELD: "RE-END-INNTEKTSMELD";
    readonly BERØRT_BEHANDLING: "BERØRT-BEHANDLING";
    readonly RE_ANNET: "RE-ANNET";
    readonly RE_SATS_REGULERING: "RE-SATS-REGULERING";
    readonly RE_ENDRET_FORDELING: "RE-ENDRET-FORDELING";
    readonly INFOBREV_BEHANDLING: "INFOBREV_BEHANDLING";
    readonly INFOBREV_OPPHOLD: "INFOBREV_OPPHOLD";
    readonly RE_KLAG_U_INNTK: "RE-KLAG-U-INNTK";
    readonly RE_KLAG_M_INNTK: "RE-KLAG-M-INNTK";
    readonly RE_MDL: "RE-MDL";
    readonly RE_OPTJ: "RE-OPTJ";
    readonly RE_FRDLING: "RE-FRDLING";
    readonly RE_INNTK: "RE-INNTK";
    readonly RE_DØD: "RE-DØD";
    readonly RE_SRTB: "RE-SRTB";
    readonly RE_FRIST: "RE-FRIST";
    readonly RE_BER_GRUN: "RE-BER-GRUN";
    readonly RE_KLAG_INNH_PGI: "RE-KLAG-INNH-PGI";
    readonly ETTER_KLAGE: "ETTER_KLAGE";
    readonly RE_HENDELSE_FØDSEL: "RE-HENDELSE-FØDSEL";
    readonly RE_HENDELSE_DØD_F: "RE-HENDELSE-DØD-F";
    readonly RE_HENDELSE_DØD_B: "RE-HENDELSE-DØD-B";
    readonly RE_HENDELSE_DØDFØD: "RE-HENDELSE-DØDFØD";
    readonly RE_REGISTEROPPL: "RE-REGISTEROPPL";
    readonly RE_YTELSE: "RE-YTELSE";
    readonly RE_TILST_YT_INNVIL: "RE-TILST-YT-INNVIL";
    readonly RE_ENDR_BER_GRUN: "RE-ENDR-BER-GRUN";
    readonly RE_TILST_YT_OPPH: "RE-TILST-YT-OPPH";
    readonly RE_REBEREGN_FP: "RE_REBEREGN_FP";
    readonly RE_ANNEN_SAK: "RE_ANNEN_SAK";
    readonly RE_UTSATT_BEHANDLING: "RE_UTSATT_BEHANDLING";
    readonly RE_GJENOPPTAR_UTSATT_BEHANDLING: "RE_GJENOPPTAR_UTSATT_BEHANDLING";
    readonly RE_ANNEN_SAK_ET: "RE_ANNEN_SAK_ET";
    readonly RE_ANNEN_SAK_NB: "RE_ANNEN_SAK_NB";
    readonly RE_ANNEN_SAK_S: "RE_ANNEN_SAK_S";
    readonly RE_ANNEN_SAK_NB_ET: "RE_ANNEN_SAK_NB_ET";
    readonly RE_ANNEN_SAK_S_ET: "RE_ANNEN_SAK_S_ET";
    readonly RE_ANNEN_SAK_S_NB: "RE_ANNEN_SAK_S_NB";
    readonly RE_ANNEN_SAK_S_ET_NB: "RE_ANNEN_SAK_S_ET_NB";
    readonly RE_ANNEN_SAK_FP: "RE_ANNEN_SAK_FP";
    readonly UNNT_GENERELL: "UNNT_GENERELL";
    readonly REVURDERER_BERØRT_PERIODE: "REVURDERER_BERØRT_PERIODE";
    readonly _: "-";
};
export type BekreftedeAksjonspunkterDto = {
    behandlingId: BehandlingIdDto;
    behandlingVersjon: number;
    bekreftedeAksjonspunktDtoer: Array<BekreftetAksjonspunktDto>;
};
export type BekreftetAksjonspunktDto = {
    begrunnelse?: string;
};
export type BekreftetOgOverstyrteAksjonspunkterDto = {
    behandlingId: BehandlingIdDto;
    behandlingVersjon: number;
    bekreftedeAksjonspunktDtoer: Array<BekreftetAksjonspunktDto>;
    minstEttAksjonspunkt?: boolean;
    overstyrteAksjonspunktDtoer?: Array<OverstyringAksjonspunktDto>;
};
export type Beløp = {
    verdi?: number;
};
export type BeredskapDto = {
    beskrivelser?: Array<BeskrivelseDto>;
    vurderinger?: Array<VurderingDto>;
};
export type BeregningAktivitetDto = {
    arbeidsforholdId?: string;
    arbeidsforholdType: 'AAP' | 'ARBEID' | 'DAGPENGER' | 'FORELDREPENGER' | 'FRILANS' | 'MILITÆR_ELLER_SIVILTJENESTE' | 'NÆRING' | 'OMSORGSPENGER' | 'OPPLÆRINGSPENGER' | 'PLEIEPENGER' | 'FRISINN' | 'ETTERLØNN_SLUTTPAKKE' | 'SVANGERSKAPSPENGER' | 'SYKEPENGER' | 'SYKEPENGER_AV_DAGPENGER' | 'PLEIEPENGER_AV_DAGPENGER' | 'VENTELØNN_VARTPENGER' | 'VIDERE_ETTERUTDANNING' | 'UTENLANDSK_ARBEIDSFORHOLD' | 'UTDANNINGSPERMISJON' | '-';
    arbeidsgiverIdent?: string;
    eksternArbeidsforholdId?: string;
    fom: string;
    skalBrukes?: boolean;
    tom: string;
};
export type arbeidsforholdType = 'AAP' | 'ARBEID' | 'DAGPENGER' | 'FORELDREPENGER' | 'FRILANS' | 'MILITÆR_ELLER_SIVILTJENESTE' | 'NÆRING' | 'OMSORGSPENGER' | 'OPPLÆRINGSPENGER' | 'PLEIEPENGER' | 'FRISINN' | 'ETTERLØNN_SLUTTPAKKE' | 'SVANGERSKAPSPENGER' | 'SYKEPENGER' | 'SYKEPENGER_AV_DAGPENGER' | 'PLEIEPENGER_AV_DAGPENGER' | 'VENTELØNN_VARTPENGER' | 'VIDERE_ETTERUTDANNING' | 'UTENLANDSK_ARBEIDSFORHOLD' | 'UTDANNINGSPERMISJON' | '-';
export declare const arbeidsforholdType: {
    readonly AAP: "AAP";
    readonly ARBEID: "ARBEID";
    readonly DAGPENGER: "DAGPENGER";
    readonly FORELDREPENGER: "FORELDREPENGER";
    readonly FRILANS: "FRILANS";
    readonly MILITÆR_ELLER_SIVILTJENESTE: "MILITÆR_ELLER_SIVILTJENESTE";
    readonly NÆRING: "NÆRING";
    readonly OMSORGSPENGER: "OMSORGSPENGER";
    readonly OPPLÆRINGSPENGER: "OPPLÆRINGSPENGER";
    readonly PLEIEPENGER: "PLEIEPENGER";
    readonly FRISINN: "FRISINN";
    readonly ETTERLØNN_SLUTTPAKKE: "ETTERLØNN_SLUTTPAKKE";
    readonly SVANGERSKAPSPENGER: "SVANGERSKAPSPENGER";
    readonly SYKEPENGER: "SYKEPENGER";
    readonly SYKEPENGER_AV_DAGPENGER: "SYKEPENGER_AV_DAGPENGER";
    readonly PLEIEPENGER_AV_DAGPENGER: "PLEIEPENGER_AV_DAGPENGER";
    readonly VENTELØNN_VARTPENGER: "VENTELØNN_VARTPENGER";
    readonly VIDERE_ETTERUTDANNING: "VIDERE_ETTERUTDANNING";
    readonly UTENLANDSK_ARBEIDSFORHOLD: "UTENLANDSK_ARBEIDSFORHOLD";
    readonly UTDANNINGSPERMISJON: "UTDANNINGSPERMISJON";
    readonly _: "-";
};
export type BeregningsgrunnlagArbeidsforholdDto = {
    arbeidsforholdId?: string;
    arbeidsforholdType?: 'AAP' | 'ARBEID' | 'DAGPENGER' | 'FORELDREPENGER' | 'FRILANS' | 'MILITÆR_ELLER_SIVILTJENESTE' | 'NÆRING' | 'OMSORGSPENGER' | 'OPPLÆRINGSPENGER' | 'PLEIEPENGER' | 'FRISINN' | 'ETTERLØNN_SLUTTPAKKE' | 'SVANGERSKAPSPENGER' | 'SYKEPENGER' | 'SYKEPENGER_AV_DAGPENGER' | 'PLEIEPENGER_AV_DAGPENGER' | 'VENTELØNN_VARTPENGER' | 'VIDERE_ETTERUTDANNING' | 'UTENLANDSK_ARBEIDSFORHOLD' | 'UTDANNINGSPERMISJON' | '-';
    arbeidsgiverIdent?: string;
    belopFraInntektsmeldingPrMnd?: number;
    eksternArbeidsforholdId?: string;
    naturalytelseBortfaltPrÅr?: number;
    naturalytelseTilkommetPrÅr?: number;
    opphoersdato?: string;
    organisasjonstype?: 'JURIDISK_ENHET' | 'VIRKSOMHET' | 'KUNSTIG' | '-';
    refusjonPrAar?: number;
    startdato?: string;
};
export type organisasjonstype = 'JURIDISK_ENHET' | 'VIRKSOMHET' | 'KUNSTIG' | '-';
export declare const organisasjonstype: {
    readonly JURIDISK_ENHET: "JURIDISK_ENHET";
    readonly VIRKSOMHET: "VIRKSOMHET";
    readonly KUNSTIG: "KUNSTIG";
    readonly _: "-";
};
export type BeregningsgrunnlagDto = {
    aktivitetStatus?: Array<('MIDL_INAKTIV' | 'AAP' | 'AT' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'FL' | 'MS' | 'SN' | 'AT_FL' | 'AT_SN' | 'FL_SN' | 'AT_FL_SN' | 'BA' | 'KUN_YTELSE' | 'TY' | 'VENTELØNN_VARTPENGER' | '-')>;
    andelerMedGraderingUtenBG?: Array<BeregningsgrunnlagPrStatusOgAndelDto>;
    avklaringsbehov: Array<AvklaringsbehovDto>;
    beregningsgrunnlagPeriode?: Array<BeregningsgrunnlagPeriodeDto>;
    dekningsgrad?: number;
    erOverstyrtInntekt: boolean;
    faktaOmBeregning?: FaktaOmBeregningDto;
    faktaOmFordeling?: FordelingDto;
    forlengelseperioder?: Array<Periode>;
    grunnbeløp?: number;
    halvG?: number;
    hjemmel?: 'F_9_9' | 'F_9_8_8_28' | 'F_9_9_8_28_8_30' | 'F_9_9_8_35' | 'F_9_9_8_38' | 'F_9_9_8_40' | 'F_9_9_8_41' | 'F_9_9_8_42' | 'F_9_9_8_43' | 'F_9_9_8_47' | 'F_9_9_8_49' | 'F_14_7' | 'F_14_7_8_30' | 'F_14_7_8_28_8_30' | 'F_14_7_8_35' | 'F_14_7_8_38' | 'F_14_7_8_40' | 'F_14_7_8_41' | 'F_14_7_8_42' | 'F_14_7_8_43' | 'F_14_7_8_47' | 'F_14_7_8_49' | 'F_22_13_6' | 'COV_1_5' | 'KORONALOVEN_3' | '-';
    inntektsgrunnlag?: InntektsgrunnlagDto;
    refusjonTilVurdering?: RefusjonTilVurderingDto;
    sammenligningsgrunnlag: SammenligningsgrunnlagDto;
    sammenligningsgrunnlagPrStatus?: Array<SammenligningsgrunnlagDto>;
    skjaeringstidspunktBeregning: string;
    skjæringstidspunkt: string;
    vilkårsperiodeFom?: string;
    ytelsesspesifiktGrunnlag?: YtelsespesifiktGrunnlagDto;
};
export type hjemmel = 'F_9_9' | 'F_9_8_8_28' | 'F_9_9_8_28_8_30' | 'F_9_9_8_35' | 'F_9_9_8_38' | 'F_9_9_8_40' | 'F_9_9_8_41' | 'F_9_9_8_42' | 'F_9_9_8_43' | 'F_9_9_8_47' | 'F_9_9_8_49' | 'F_14_7' | 'F_14_7_8_30' | 'F_14_7_8_28_8_30' | 'F_14_7_8_35' | 'F_14_7_8_38' | 'F_14_7_8_40' | 'F_14_7_8_41' | 'F_14_7_8_42' | 'F_14_7_8_43' | 'F_14_7_8_47' | 'F_14_7_8_49' | 'F_22_13_6' | 'COV_1_5' | 'KORONALOVEN_3' | '-';
export declare const hjemmel: {
    readonly F_9_9: "F_9_9";
    readonly F_9_8_8_28: "F_9_8_8_28";
    readonly F_9_9_8_28_8_30: "F_9_9_8_28_8_30";
    readonly F_9_9_8_35: "F_9_9_8_35";
    readonly F_9_9_8_38: "F_9_9_8_38";
    readonly F_9_9_8_40: "F_9_9_8_40";
    readonly F_9_9_8_41: "F_9_9_8_41";
    readonly F_9_9_8_42: "F_9_9_8_42";
    readonly F_9_9_8_43: "F_9_9_8_43";
    readonly F_9_9_8_47: "F_9_9_8_47";
    readonly F_9_9_8_49: "F_9_9_8_49";
    readonly F_14_7: "F_14_7";
    readonly F_14_7_8_30: "F_14_7_8_30";
    readonly F_14_7_8_28_8_30: "F_14_7_8_28_8_30";
    readonly F_14_7_8_35: "F_14_7_8_35";
    readonly F_14_7_8_38: "F_14_7_8_38";
    readonly F_14_7_8_40: "F_14_7_8_40";
    readonly F_14_7_8_41: "F_14_7_8_41";
    readonly F_14_7_8_42: "F_14_7_8_42";
    readonly F_14_7_8_43: "F_14_7_8_43";
    readonly F_14_7_8_47: "F_14_7_8_47";
    readonly F_14_7_8_49: "F_14_7_8_49";
    readonly F_22_13_6: "F_22_13_6";
    readonly COV_1_5: "COV_1_5";
    readonly KORONALOVEN_3: "KORONALOVEN_3";
    readonly _: "-";
};
export type BeregningsgrunnlagKoblingDto = {
    erForlengelse: boolean;
    referanse: string;
    skjæringstidspunkt: string;
};
export type BeregningsgrunnlagPeriodeDto = {
    avkortetPrAar?: number;
    beregnetPrAar?: number;
    beregningsgrunnlagPeriodeFom?: string;
    beregningsgrunnlagPeriodeTom?: string;
    beregningsgrunnlagPrStatusOgAndel?: Array<BeregningsgrunnlagPrStatusOgAndelDto>;
    bruttoInkludertBortfaltNaturalytelsePrAar?: number;
    bruttoPrAar?: number;
    dagsats?: number;
    periodeAarsaker?: Array<('NATURALYTELSE_BORTFALT' | 'ARBEIDSFORHOLD_AVSLUTTET' | 'NATURALYTELSE_TILKOMMER' | 'ENDRING_I_REFUSJONSKRAV' | 'REFUSJON_OPPHØRER' | 'GRADERING' | 'GRADERING_OPPHØRER' | 'ENDRING_I_AKTIVITETER_SØKT_FOR' | 'TILKOMMET_INNTEKT' | 'TILKOMMET_INNTEKT_MANUELT' | 'TILKOMMET_INNTEKT_AVSLUTTET' | 'REFUSJON_AVSLÅTT' | 'REPRESENTERER_STORTINGET' | 'REPRESENTERER_STORTINGET_AVSLUTTET' | '-')>;
    redusertPrAar?: number;
};
export type BeregningsgrunnlagPrStatusOgAndelATDto = BeregningsgrunnlagPrStatusOgAndelDto & {
    bortfaltNaturalytelse?: number;
};
export type BeregningsgrunnlagPrStatusOgAndelDto = {
    aktivitetStatus?: 'MIDL_INAKTIV' | 'AAP' | 'AT' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'FL' | 'MS' | 'SN' | 'AT_FL' | 'AT_SN' | 'FL_SN' | 'AT_FL_SN' | 'BA' | 'KUN_YTELSE' | 'TY' | 'VENTELØNN_VARTPENGER' | '-';
    andelsnr?: number;
    arbeidsforhold?: BeregningsgrunnlagArbeidsforholdDto;
    avkortetPrAar?: number;
    belopPrAarEtterAOrdningen?: number;
    belopPrMndEtterAOrdningen?: number;
    beregnetPrAar?: number;
    beregningsperiodeFom?: string;
    beregningsperiodeTom?: string;
    besteberegningPrAar?: number;
    bruttoPrAar?: number;
    dagsats?: number;
    dtoType: string;
    erNyIArbeidslivet?: boolean;
    erTidsbegrensetArbeidsforhold?: boolean;
    erTilkommetAndel?: boolean;
    fastsattAvSaksbehandler?: boolean;
    fordeltPrAar?: number;
    inntektskategori?: 'ARBEIDSTAKER' | 'FRILANSER' | 'SELVSTENDIG_NÆRINGSDRIVENDE' | 'DAGPENGER' | 'ARBEIDSAVKLARINGSPENGER' | 'SJØMANN' | 'DAGMAMMA' | 'JORDBRUKER' | 'FISKER' | 'ARBEIDSTAKER_UTEN_FERIEPENGER' | '-';
    lagtTilAvSaksbehandler?: boolean;
    lonnsendringIBeregningsperioden?: boolean;
    originalDagsatsFraTilstøtendeYtelse?: number;
    overstyrtPrAar?: number;
    redusertPrAar?: number;
    skalFastsetteGrunnlag?: boolean;
};
export type BeregningsgrunnlagPrStatusOgAndelDtoFelles = BeregningsgrunnlagPrStatusOgAndelDto;
export type BeregningsgrunnlagPrStatusOgAndelFLDto = BeregningsgrunnlagPrStatusOgAndelDto & {
    erNyoppstartet?: boolean;
};
export type BeregningsgrunnlagPrStatusOgAndelSNDto = BeregningsgrunnlagPrStatusOgAndelDto & {
    næringer?: Array<EgenNæringDto>;
    pgiSnitt?: number;
    pgiVerdier?: Array<PgiDto>;
};
export type BeregningsgrunnlagPrStatusOgAndelYtelseDto = BeregningsgrunnlagPrStatusOgAndelDto & {
    belopFraMeldekortPrAar?: number;
    belopFraMeldekortPrMnd?: number;
    oppjustertGrunnlag?: number;
};
export type BeregningsresultatDto = {
    opphoersdato?: string;
    perioder?: Array<BeregningsresultatPeriodeDto>;
    skalHindreTilbaketrekk?: boolean;
};
export type BeregningsresultatMedUtbetaltePeriodeDto = {
    opphoersdato?: string;
    perioder?: Array<BeregningsresultatPeriodeDto>;
    skalHindreTilbaketrekk?: boolean;
    utbetaltePerioder?: Array<BeregningsresultatPeriodeDto>;
};
export type BeregningsresultatPeriodeAndelDto = {
    aktivitetStatus?: 'MIDL_INAKTIV' | 'AAP' | 'AT' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'FL' | 'MS' | 'SN' | 'AT_FL' | 'AT_SN' | 'FL_SN' | 'AT_FL_SN' | 'BA' | 'IKKE_YRKESAKTIV' | 'KUN_YTELSE' | 'TY' | 'VENTELØNN_VARTPENGER' | '-';
    aktørId?: string;
    arbeidsforholdId?: string;
    arbeidsforholdType?: 'AAP' | 'ARBEID' | 'DAGPENGER' | 'FORELDREPENGER' | 'FRILANS' | 'MILITÆR_ELLER_SIVILTJENESTE' | 'NÆRING' | 'OMSORGSPENGER' | 'OPPLÆRINGSPENGER' | 'PLEIEPENGER' | 'ETTERLØNN_SLUTTPAKKE' | 'SVANGERSKAPSPENGER' | 'SYKEPENGER' | 'SYKEPENGER_AV_DAGPENGER' | 'PLEIEPENGER_AV_DAGPENGER' | 'VENTELØNN_VARTPENGER' | 'VIDERE_ETTERUTDANNING' | 'UTENLANDSK_ARBEIDSFORHOLD' | 'FRISINN' | 'UTDANNINGSPERMISJON' | 'MELLOM_ARBEID' | '-';
    arbeidsgiver?: ArbeidsgiverDto;
    arbeidsgiverNavn?: string;
    arbeidsgiverOrgnr?: string;
    eksternArbeidsforholdId?: string;
    inntektskategori: 'ARBEIDSTAKER' | 'FRILANSER' | 'SELVSTENDIG_NÆRINGSDRIVENDE' | 'DAGPENGER' | 'ARBEIDSAVKLARINGSPENGER' | 'SJØMANN' | 'DAGMAMMA' | 'JORDBRUKER' | 'FISKER' | 'ARBEIDSTAKER_UTEN_FERIEPENGER' | '-';
    refusjon?: number;
    sisteUtbetalingsdato?: string;
    stillingsprosent?: number;
    tilSoker?: number;
    utbetalingsgrad?: number;
    utbetalingsgradOppdragForBruker?: number;
    utbetalingsgradOppdragForRefusjon?: number;
    uttak?: Array<UttakDto>;
};
export type aktivitetStatus2 = 'MIDL_INAKTIV' | 'AAP' | 'AT' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'FL' | 'MS' | 'SN' | 'AT_FL' | 'AT_SN' | 'FL_SN' | 'AT_FL_SN' | 'BA' | 'IKKE_YRKESAKTIV' | 'KUN_YTELSE' | 'TY' | 'VENTELØNN_VARTPENGER' | '-';
export declare const aktivitetStatus2: {
    readonly MIDL_INAKTIV: "MIDL_INAKTIV";
    readonly AAP: "AAP";
    readonly AT: "AT";
    readonly DP: "DP";
    readonly SP_AV_DP: "SP_AV_DP";
    readonly PSB_AV_DP: "PSB_AV_DP";
    readonly FL: "FL";
    readonly MS: "MS";
    readonly SN: "SN";
    readonly AT_FL: "AT_FL";
    readonly AT_SN: "AT_SN";
    readonly FL_SN: "FL_SN";
    readonly AT_FL_SN: "AT_FL_SN";
    readonly BA: "BA";
    readonly IKKE_YRKESAKTIV: "IKKE_YRKESAKTIV";
    readonly KUN_YTELSE: "KUN_YTELSE";
    readonly TY: "TY";
    readonly VENTELØNN_VARTPENGER: "VENTELØNN_VARTPENGER";
    readonly _: "-";
};
export type arbeidsforholdType2 = 'AAP' | 'ARBEID' | 'DAGPENGER' | 'FORELDREPENGER' | 'FRILANS' | 'MILITÆR_ELLER_SIVILTJENESTE' | 'NÆRING' | 'OMSORGSPENGER' | 'OPPLÆRINGSPENGER' | 'PLEIEPENGER' | 'ETTERLØNN_SLUTTPAKKE' | 'SVANGERSKAPSPENGER' | 'SYKEPENGER' | 'SYKEPENGER_AV_DAGPENGER' | 'PLEIEPENGER_AV_DAGPENGER' | 'VENTELØNN_VARTPENGER' | 'VIDERE_ETTERUTDANNING' | 'UTENLANDSK_ARBEIDSFORHOLD' | 'FRISINN' | 'UTDANNINGSPERMISJON' | 'MELLOM_ARBEID' | '-';
export declare const arbeidsforholdType2: {
    readonly AAP: "AAP";
    readonly ARBEID: "ARBEID";
    readonly DAGPENGER: "DAGPENGER";
    readonly FORELDREPENGER: "FORELDREPENGER";
    readonly FRILANS: "FRILANS";
    readonly MILITÆR_ELLER_SIVILTJENESTE: "MILITÆR_ELLER_SIVILTJENESTE";
    readonly NÆRING: "NÆRING";
    readonly OMSORGSPENGER: "OMSORGSPENGER";
    readonly OPPLÆRINGSPENGER: "OPPLÆRINGSPENGER";
    readonly PLEIEPENGER: "PLEIEPENGER";
    readonly ETTERLØNN_SLUTTPAKKE: "ETTERLØNN_SLUTTPAKKE";
    readonly SVANGERSKAPSPENGER: "SVANGERSKAPSPENGER";
    readonly SYKEPENGER: "SYKEPENGER";
    readonly SYKEPENGER_AV_DAGPENGER: "SYKEPENGER_AV_DAGPENGER";
    readonly PLEIEPENGER_AV_DAGPENGER: "PLEIEPENGER_AV_DAGPENGER";
    readonly VENTELØNN_VARTPENGER: "VENTELØNN_VARTPENGER";
    readonly VIDERE_ETTERUTDANNING: "VIDERE_ETTERUTDANNING";
    readonly UTENLANDSK_ARBEIDSFORHOLD: "UTENLANDSK_ARBEIDSFORHOLD";
    readonly FRISINN: "FRISINN";
    readonly UTDANNINGSPERMISJON: "UTDANNINGSPERMISJON";
    readonly MELLOM_ARBEID: "MELLOM_ARBEID";
    readonly _: "-";
};
export type BeregningsresultatPeriodeDto = {
    andeler: Array<BeregningsresultatPeriodeAndelDto>;
    dagsats: number;
    fom: string;
    reduksjonsfaktorInaktivTypeA?: number;
    tom: string;
    totalUtbetalingsgradEtterReduksjonVedTilkommetInntekt?: number;
    totalUtbetalingsgradFraUttak?: number;
};
export type BeskrivelseDto = {
    kilde?: 'SØKER' | 'ANDRE';
    mottattDato?: string;
    periode?: Periode;
    tekst?: string;
};
export type kilde2 = 'SØKER' | 'ANDRE';
export declare const kilde2: {
    readonly SØKER: "SØKER";
    readonly ANDRE: "ANDRE";
};
export type BesteberegningInntektDto = {
    arbeidsforholdId?: string;
    arbeidsgiverId?: string;
    arbeidsgiverIdent?: string;
    inntekt: number;
    opptjeningAktivitetType: 'AAP' | 'ARBEID' | 'DAGPENGER' | 'FORELDREPENGER' | 'FRILANS' | 'MILITÆR_ELLER_SIVILTJENESTE' | 'NÆRING' | 'OMSORGSPENGER' | 'OPPLÆRINGSPENGER' | 'PLEIEPENGER' | 'FRISINN' | 'ETTERLØNN_SLUTTPAKKE' | 'SVANGERSKAPSPENGER' | 'SYKEPENGER' | 'SYKEPENGER_AV_DAGPENGER' | 'PLEIEPENGER_AV_DAGPENGER' | 'VENTELØNN_VARTPENGER' | 'VIDERE_ETTERUTDANNING' | 'UTENLANDSK_ARBEIDSFORHOLD' | 'UTDANNINGSPERMISJON' | '-';
};
export type opptjeningAktivitetType = 'AAP' | 'ARBEID' | 'DAGPENGER' | 'FORELDREPENGER' | 'FRILANS' | 'MILITÆR_ELLER_SIVILTJENESTE' | 'NÆRING' | 'OMSORGSPENGER' | 'OPPLÆRINGSPENGER' | 'PLEIEPENGER' | 'FRISINN' | 'ETTERLØNN_SLUTTPAKKE' | 'SVANGERSKAPSPENGER' | 'SYKEPENGER' | 'SYKEPENGER_AV_DAGPENGER' | 'PLEIEPENGER_AV_DAGPENGER' | 'VENTELØNN_VARTPENGER' | 'VIDERE_ETTERUTDANNING' | 'UTENLANDSK_ARBEIDSFORHOLD' | 'UTDANNINGSPERMISJON' | '-';
export declare const opptjeningAktivitetType: {
    readonly AAP: "AAP";
    readonly ARBEID: "ARBEID";
    readonly DAGPENGER: "DAGPENGER";
    readonly FORELDREPENGER: "FORELDREPENGER";
    readonly FRILANS: "FRILANS";
    readonly MILITÆR_ELLER_SIVILTJENESTE: "MILITÆR_ELLER_SIVILTJENESTE";
    readonly NÆRING: "NÆRING";
    readonly OMSORGSPENGER: "OMSORGSPENGER";
    readonly OPPLÆRINGSPENGER: "OPPLÆRINGSPENGER";
    readonly PLEIEPENGER: "PLEIEPENGER";
    readonly FRISINN: "FRISINN";
    readonly ETTERLØNN_SLUTTPAKKE: "ETTERLØNN_SLUTTPAKKE";
    readonly SVANGERSKAPSPENGER: "SVANGERSKAPSPENGER";
    readonly SYKEPENGER: "SYKEPENGER";
    readonly SYKEPENGER_AV_DAGPENGER: "SYKEPENGER_AV_DAGPENGER";
    readonly PLEIEPENGER_AV_DAGPENGER: "PLEIEPENGER_AV_DAGPENGER";
    readonly VENTELØNN_VARTPENGER: "VENTELØNN_VARTPENGER";
    readonly VIDERE_ETTERUTDANNING: "VIDERE_ETTERUTDANNING";
    readonly UTENLANDSK_ARBEIDSFORHOLD: "UTENLANDSK_ARBEIDSFORHOLD";
    readonly UTDANNINGSPERMISJON: "UTDANNINGSPERMISJON";
    readonly _: "-";
};
export type BesteberegningMånedGrunnlagDto = {
    fom: string;
    inntekter?: Array<BesteberegningInntektDto>;
    tom: string;
};
export type BesteberegninggrunnlagDto = {
    avvik?: number;
    besteMåneder?: Array<BesteberegningMånedGrunnlagDto>;
};
export type BestillBrevDto = {
    arsakskode?: string;
    behandlingId: number;
    brevmalkode: string;
    dokumentbestillingsId?: string;
    fritekst?: string;
    fritekstbrev?: FritekstbrevinnholdDto;
    overstyrtMottaker?: MottakerDto;
};
export type BrevMottakerinfoEregResponseDto = {
    navn?: string;
};
export type BrukForrigeSkatteoppgjørDto = {
    behandlingIdForrigeSkatteoppgjør: string;
    saksnummer: string;
    skjæringstidspunkt: string;
};
export type ByttBehandlendeEnhetDto = {
    begrunnelse: string;
    behandlingId: number;
    behandlingVersjon: number;
    enhetId: string;
    enhetNavn?: string;
};
export type CallbackDto = {
    avsenderRef: ReferanseDto;
    grunnlagType: 'IAY';
    oppdatertGrunnlagRef?: ReferanseDto;
    opprettetTidspunkt: string;
    opprinneligGrunnlagRef?: ReferanseDto;
};
export type grunnlagType = 'IAY';
export declare const grunnlagType: {
    readonly IAY: "IAY";
};
export type DatoIntervallEntitet = {
    fomDato?: string;
    tomDato?: string;
};
export type DeaktiverSkjæringstidspunktDto = {
    behandlingId: BehandlingIdDto;
    skjæringstidspunkt: string;
};
export type DeltBosted = Rammevedtak & {
    deltBostedMed?: string;
    gyldigFraOgMed?: string;
    gyldigTilOgMed?: string;
    lengde?: {
        nano?: number;
        negative?: boolean;
        positive?: boolean;
        seconds?: number;
        units?: Array<{
            dateBased?: boolean;
            duration?: {
                nano?: number;
                negative?: boolean;
                positive?: boolean;
                seconds?: number;
                zero?: boolean;
            };
            durationEstimated?: boolean;
            timeBased?: boolean;
        }>;
        zero?: boolean;
    };
    vedtatt?: string;
};
export type DirekteOvergangDto = {
    skjæringstidspunkter: Array<(string)>;
};
export type DokumentDto = {
    behandlinger?: Array<(number)>;
    brevkode?: string;
    dokumentId?: string;
    gjelderFor?: string;
    href?: string;
    journalpostId?: string;
    kommunikasjonsretning?: 'I' | 'U' | 'N';
    tidspunkt?: string;
    tittel?: string;
};
export type kommunikasjonsretning = 'I' | 'U' | 'N';
export declare const kommunikasjonsretning: {
    readonly I: "I";
    readonly U: "U";
    readonly N: "N";
};
export type DokumentIdDto = {
    dokumentId?: string;
};
export type DokumentMedUstrukturerteDataDto = {
    datert?: string;
    id: string;
    links?: Array<ResourceLink>;
    type: 'LEGEERKLÆRING_SYKEHUS' | 'MEDISINSKE_OPPLYSNINGER' | 'ANNET' | 'UKLASSIFISERT' | 'LEGEERKLÆRING_ANNEN' | 'LEGEERKLÆRING_MED_DOKUMENTASJON_AV_OPPLÆRING' | 'EPIKRISE' | 'FEILREGISTRERT';
};
export type type3 = 'LEGEERKLÆRING_SYKEHUS' | 'MEDISINSKE_OPPLYSNINGER' | 'ANNET' | 'UKLASSIFISERT' | 'LEGEERKLÆRING_ANNEN' | 'LEGEERKLÆRING_MED_DOKUMENTASJON_AV_OPPLÆRING' | 'EPIKRISE' | 'FEILREGISTRERT';
export declare const type3: {
    readonly LEGEERKLÆRING_SYKEHUS: "LEGEERKLÆRING_SYKEHUS";
    readonly MEDISINSKE_OPPLYSNINGER: "MEDISINSKE_OPPLYSNINGER";
    readonly ANNET: "ANNET";
    readonly UKLASSIFISERT: "UKLASSIFISERT";
    readonly LEGEERKLÆRING_ANNEN: "LEGEERKLÆRING_ANNEN";
    readonly LEGEERKLÆRING_MED_DOKUMENTASJON_AV_OPPLÆRING: "LEGEERKLÆRING_MED_DOKUMENTASJON_AV_OPPLÆRING";
    readonly EPIKRISE: "EPIKRISE";
    readonly FEILREGISTRERT: "FEILREGISTRERT";
};
export type DødsfallHendelse = Hendelse & {
    dødsdato?: string;
    hendelseInfo?: HendelseInfo;
} & {
    dødsdato: string;
    hendelseInfo: HendelseInfo;
};
export type EgenNæringDto = {
    begrunnelse?: string;
    endringsdato?: string;
    erNyIArbeidslivet?: boolean;
    erNyoppstartet?: boolean;
    erVarigEndret?: boolean;
    kanRegnskapsførerKontaktes?: boolean;
    oppgittInntekt?: number;
    opphørsdato?: string;
    oppstartsdato?: string;
    orgnr?: string;
    regnskapsførerNavn?: string;
    regnskapsførerTlf?: string;
    utenlandskvirksomhetsnavn?: string;
    virksomhetType?: 'DAGMAMMA' | 'FISKE' | 'FRILANSER' | 'JORDBRUK_SKOGBRUK' | 'ANNEN' | '-';
};
export type virksomhetType2 = 'DAGMAMMA' | 'FISKE' | 'FRILANSER' | 'JORDBRUK_SKOGBRUK' | 'ANNEN' | '-';
export declare const virksomhetType2: {
    readonly DAGMAMMA: "DAGMAMMA";
    readonly FISKE: "FISKE";
    readonly FRILANSER: "FRILANSER";
    readonly JORDBRUK_SKOGBRUK: "JORDBRUK_SKOGBRUK";
    readonly ANNEN: "ANNEN";
    readonly _: "-";
};
export type EksternArbeidsforholdRef = {
    referanse: string;
};
export type EndreNotatDto = {
    notatId: string;
    notatTekst: string;
    saksnummer: string;
    versjon: number;
};
export type EtablertTilsynNattevåkOgBeredskapDto = {
    beredskap?: BeredskapDto;
    etablertTilsynPerioder?: Array<EtablertTilsynPeriodeDto>;
    nattevåk?: NattevåkDto;
    smortEtablertTilsynPerioder?: Array<SmørtEtablertTilsyn>;
};
export type EtablertTilsynPeriodeDto = {
    kilde?: 'SØKER' | 'ANDRE';
    periode?: Periode;
    tidPerDag?: {
        nano?: number;
        negative?: boolean;
        positive?: boolean;
        seconds?: number;
        units?: Array<{
            dateBased?: boolean;
            duration?: {
                nano?: number;
                negative?: boolean;
                positive?: boolean;
                seconds?: number;
                zero?: boolean;
            };
            durationEstimated?: boolean;
            timeBased?: boolean;
        }>;
        zero?: boolean;
    };
};
export type FagsakDto = {
    endret?: string;
    erPbSak?: boolean;
    gyldigPeriode?: Periode;
    kanRevurderingOpprettes?: boolean;
    opprettet?: string;
    person?: PersonDto;
    pleietrengendeAktørId?: string;
    relatertPersonAktørId?: string;
    saksnummer: string;
    sakstype: 'DAG' | 'FRISINN' | 'SP' | 'PSB' | 'PPN' | 'OMP' | 'OMP_KS' | 'OMP_MA' | 'OMP_AO' | 'OLP' | 'AAP' | 'ES' | 'FP' | 'SVP' | 'EF' | 'OBSOLETE' | '-';
    skalBehandlesAvInfotrygd?: boolean;
    status?: 'OPPR' | 'UBEH' | 'LOP' | 'AVSLU';
};
export type status5 = 'OPPR' | 'UBEH' | 'LOP' | 'AVSLU';
export declare const status5: {
    readonly OPPR: "OPPR";
    readonly UBEH: "UBEH";
    readonly LOP: "LOP";
    readonly AVSLU: "AVSLU";
};
export type FagsakInfoDto = {
    gyldigPeriode?: Periode;
    person?: string;
    pleietrengendeAktørId?: string;
    relatertPersonAktørId?: string;
    saksnummer: string;
    skalBehandlesAvInfotrygd?: boolean;
    status?: string;
    ytelseType: string;
};
export type FaktaOmBeregningAndelDto = {
    aktivitetStatus: 'MIDL_INAKTIV' | 'AAP' | 'AT' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'FL' | 'MS' | 'SN' | 'AT_FL' | 'AT_SN' | 'FL_SN' | 'AT_FL_SN' | 'BA' | 'KUN_YTELSE' | 'TY' | 'VENTELØNN_VARTPENGER' | '-';
    andelIArbeid: Array<(number)>;
    andelsnr: number;
    arbeidsforhold?: BeregningsgrunnlagArbeidsforholdDto;
    fastsattAvSaksbehandler?: boolean;
    inntektskategori: 'ARBEIDSTAKER' | 'FRILANSER' | 'SELVSTENDIG_NÆRINGSDRIVENDE' | 'DAGPENGER' | 'ARBEIDSAVKLARINGSPENGER' | 'SJØMANN' | 'DAGMAMMA' | 'JORDBRUKER' | 'FISKER' | 'ARBEIDSTAKER_UTEN_FERIEPENGER' | '-';
    kilde: 'SAKSBEHANDLER_KOFAKBER' | 'PROSESS_BESTEBEREGNING' | 'SAKSBEHANDLER_FORDELING' | 'PROSESS_PERIODISERING' | 'PROSESS_OMFORDELING' | 'PROSESS_START' | 'PROSESS_PERIODISERING_TILKOMMET_INNTEKT';
    lagtTilAvSaksbehandler?: boolean;
};
export type FaktaOmBeregningDto = {
    andelerForFaktaOmBeregning?: Array<AndelForFaktaOmBeregningDto>;
    arbeidsforholdMedLønnsendringUtenIM?: Array<FaktaOmBeregningAndelDto>;
    arbeidstakerOgFrilanserISammeOrganisasjonListe?: Array<ATogFLISammeOrganisasjonDto>;
    avklarAktiviteter?: AvklarAktiviteterDto;
    faktaOmBeregningTilfeller?: Array<('VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD' | 'VURDER_SN_NY_I_ARBEIDSLIVET' | 'VURDER_NYOPPSTARTET_FL' | 'FASTSETT_MAANEDSINNTEKT_FL' | 'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING' | 'VURDER_LØNNSENDRING' | 'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING' | 'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON' | 'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE' | 'VURDER_ETTERLØNN_SLUTTPAKKE' | 'FASTSETT_ETTERLØNN_SLUTTPAKKE' | 'VURDER_MOTTAR_YTELSE' | 'VURDER_BESTEBEREGNING' | 'VURDER_MILITÆR_SIVILTJENESTE' | 'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT' | 'FASTSETT_BG_KUN_YTELSE' | 'TILSTØTENDE_YTELSE' | 'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG' | '-')>;
    frilansAndel?: FaktaOmBeregningAndelDto;
    kortvarigeArbeidsforhold?: Array<KortvarigeArbeidsforholdDto>;
    kunYtelse?: KunYtelseDto;
    refusjonskravSomKommerForSentListe?: Array<RefusjonskravSomKommerForSentDto>;
    saksopplysninger?: Saksopplysninger;
    vurderBesteberegning?: VurderBesteberegningDto;
    vurderMilitaer?: VurderMilitærDto;
    vurderMottarYtelse?: VurderMottarYtelseDto;
};
export type FastsattOpptjeningAktivitetDto = {
    aktivitetReferanse?: string;
    arbeidsgiverNavn?: string;
    fom: string;
    klasse: 'BEKREFTET_GODKJENT' | 'BEKREFTET_AVVIST' | 'ANTATT_GODKJENT' | 'MELLOMLIGGENDE_PERIODE' | '-';
    tom: string;
    type: 'AAP' | 'ARBEID' | 'DAGPENGER' | 'FORELDREPENGER' | 'FRILANS' | 'MILITÆR_ELLER_SIVILTJENESTE' | 'NÆRING' | 'OMSORGSPENGER' | 'OPPLÆRINGSPENGER' | 'PLEIEPENGER' | 'ETTERLØNN_SLUTTPAKKE' | 'SVANGERSKAPSPENGER' | 'SYKEPENGER' | 'SYKEPENGER_AV_DAGPENGER' | 'PLEIEPENGER_AV_DAGPENGER' | 'VENTELØNN_VARTPENGER' | 'VIDERE_ETTERUTDANNING' | 'UTENLANDSK_ARBEIDSFORHOLD' | 'FRISINN' | 'UTDANNINGSPERMISJON' | 'MELLOM_ARBEID' | '-';
};
export type klasse = 'BEKREFTET_GODKJENT' | 'BEKREFTET_AVVIST' | 'ANTATT_GODKJENT' | 'MELLOMLIGGENDE_PERIODE' | '-';
export declare const klasse: {
    readonly BEKREFTET_GODKJENT: "BEKREFTET_GODKJENT";
    readonly BEKREFTET_AVVIST: "BEKREFTET_AVVIST";
    readonly ANTATT_GODKJENT: "ANTATT_GODKJENT";
    readonly MELLOMLIGGENDE_PERIODE: "MELLOMLIGGENDE_PERIODE";
    readonly _: "-";
};
export type type4 = 'AAP' | 'ARBEID' | 'DAGPENGER' | 'FORELDREPENGER' | 'FRILANS' | 'MILITÆR_ELLER_SIVILTJENESTE' | 'NÆRING' | 'OMSORGSPENGER' | 'OPPLÆRINGSPENGER' | 'PLEIEPENGER' | 'ETTERLØNN_SLUTTPAKKE' | 'SVANGERSKAPSPENGER' | 'SYKEPENGER' | 'SYKEPENGER_AV_DAGPENGER' | 'PLEIEPENGER_AV_DAGPENGER' | 'VENTELØNN_VARTPENGER' | 'VIDERE_ETTERUTDANNING' | 'UTENLANDSK_ARBEIDSFORHOLD' | 'FRISINN' | 'UTDANNINGSPERMISJON' | 'MELLOM_ARBEID' | '-';
export declare const type4: {
    readonly AAP: "AAP";
    readonly ARBEID: "ARBEID";
    readonly DAGPENGER: "DAGPENGER";
    readonly FORELDREPENGER: "FORELDREPENGER";
    readonly FRILANS: "FRILANS";
    readonly MILITÆR_ELLER_SIVILTJENESTE: "MILITÆR_ELLER_SIVILTJENESTE";
    readonly NÆRING: "NÆRING";
    readonly OMSORGSPENGER: "OMSORGSPENGER";
    readonly OPPLÆRINGSPENGER: "OPPLÆRINGSPENGER";
    readonly PLEIEPENGER: "PLEIEPENGER";
    readonly ETTERLØNN_SLUTTPAKKE: "ETTERLØNN_SLUTTPAKKE";
    readonly SVANGERSKAPSPENGER: "SVANGERSKAPSPENGER";
    readonly SYKEPENGER: "SYKEPENGER";
    readonly SYKEPENGER_AV_DAGPENGER: "SYKEPENGER_AV_DAGPENGER";
    readonly PLEIEPENGER_AV_DAGPENGER: "PLEIEPENGER_AV_DAGPENGER";
    readonly VENTELØNN_VARTPENGER: "VENTELØNN_VARTPENGER";
    readonly VIDERE_ETTERUTDANNING: "VIDERE_ETTERUTDANNING";
    readonly UTENLANDSK_ARBEIDSFORHOLD: "UTENLANDSK_ARBEIDSFORHOLD";
    readonly FRISINN: "FRISINN";
    readonly UTDANNINGSPERMISJON: "UTDANNINGSPERMISJON";
    readonly MELLOM_ARBEID: "MELLOM_ARBEID";
    readonly _: "-";
};
export type FastsattOpptjeningDto = {
    fastsattOpptjeningAktivitetList?: Array<FastsattOpptjeningAktivitetDto>;
    opptjeningFom: string;
    opptjeningTom: string;
    opptjeningperiode: OpptjeningPeriodeDto;
};
export type FastsattUttakDto = {
    aktiviteter?: Array<UttakAktivitetPeriodeDto>;
    behandlingUuid: string;
};
export type FinnEllerOpprettSak = {
    aktørId: string;
    periode: Periode;
    pleietrengendeAktørId?: string;
    relatertPersonAktørId?: string;
    saksnummer?: string;
    ytelseType?: string;
};
export type FinnEllerOpprettSakFnr = {
    periode: Periode;
    pleietrengende?: string;
    relatertPerson?: string;
    saksnummer?: string;
    søker: string;
    ytelseType?: string;
};
export type FinnSak = {
    aktørId: string;
    periode?: Periode;
    pleietrengendeAktørId?: string;
    relatertPersonAktørId?: string;
    ytelseType: 'DAG' | 'FRISINN' | 'SP' | 'PSB' | 'PPN' | 'OMP' | 'OMP_KS' | 'OMP_MA' | 'OMP_AO' | 'OLP' | 'AAP' | 'ES' | 'FP' | 'SVP' | 'EF' | 'OBSOLETE' | '-';
};
export type FordelBeregningsgrunnlagAndelDto = {
    aktivitetStatus: 'MIDL_INAKTIV' | 'AAP' | 'AT' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'FL' | 'MS' | 'SN' | 'AT_FL' | 'AT_SN' | 'FL_SN' | 'AT_FL_SN' | 'BA' | 'KUN_YTELSE' | 'TY' | 'VENTELØNN_VARTPENGER' | '-';
    andelIArbeid: Array<(number)>;
    andelsnr: number;
    arbeidsforhold?: BeregningsgrunnlagArbeidsforholdDto;
    arbeidsforholdType: 'AAP' | 'ARBEID' | 'DAGPENGER' | 'FORELDREPENGER' | 'FRILANS' | 'MILITÆR_ELLER_SIVILTJENESTE' | 'NÆRING' | 'OMSORGSPENGER' | 'OPPLÆRINGSPENGER' | 'PLEIEPENGER' | 'FRISINN' | 'ETTERLØNN_SLUTTPAKKE' | 'SVANGERSKAPSPENGER' | 'SYKEPENGER' | 'SYKEPENGER_AV_DAGPENGER' | 'PLEIEPENGER_AV_DAGPENGER' | 'VENTELØNN_VARTPENGER' | 'VIDERE_ETTERUTDANNING' | 'UTENLANDSK_ARBEIDSFORHOLD' | 'UTDANNINGSPERMISJON' | '-';
    belopFraInntektsmeldingPrAar?: number;
    fastsattAvSaksbehandler?: boolean;
    fordelingForrigeBehandlingPrAar?: number;
    fordeltPrAar?: number;
    inntektskategori: 'ARBEIDSTAKER' | 'FRILANSER' | 'SELVSTENDIG_NÆRINGSDRIVENDE' | 'DAGPENGER' | 'ARBEIDSAVKLARINGSPENGER' | 'SJØMANN' | 'DAGMAMMA' | 'JORDBRUKER' | 'FISKER' | 'ARBEIDSTAKER_UTEN_FERIEPENGER' | '-';
    kilde: 'SAKSBEHANDLER_KOFAKBER' | 'PROSESS_BESTEBEREGNING' | 'SAKSBEHANDLER_FORDELING' | 'PROSESS_PERIODISERING' | 'PROSESS_OMFORDELING' | 'PROSESS_START' | 'PROSESS_PERIODISERING_TILKOMMET_INNTEKT';
    lagtTilAvSaksbehandler?: boolean;
    nyttArbeidsforhold?: boolean;
    refusjonskravFraInntektsmeldingPrAar?: number;
    refusjonskravPrAar?: number;
};
export type FordelBeregningsgrunnlagArbeidsforholdDto = {
    arbeidsforholdId?: string;
    arbeidsforholdType?: 'AAP' | 'ARBEID' | 'DAGPENGER' | 'FORELDREPENGER' | 'FRILANS' | 'MILITÆR_ELLER_SIVILTJENESTE' | 'NÆRING' | 'OMSORGSPENGER' | 'OPPLÆRINGSPENGER' | 'PLEIEPENGER' | 'FRISINN' | 'ETTERLØNN_SLUTTPAKKE' | 'SVANGERSKAPSPENGER' | 'SYKEPENGER' | 'SYKEPENGER_AV_DAGPENGER' | 'PLEIEPENGER_AV_DAGPENGER' | 'VENTELØNN_VARTPENGER' | 'VIDERE_ETTERUTDANNING' | 'UTENLANDSK_ARBEIDSFORHOLD' | 'UTDANNINGSPERMISJON' | '-';
    arbeidsgiverIdent?: string;
    belopFraInntektsmeldingPrMnd?: number;
    eksternArbeidsforholdId?: string;
    naturalytelseBortfaltPrÅr?: number;
    naturalytelseTilkommetPrÅr?: number;
    opphoersdato?: string;
    organisasjonstype?: 'JURIDISK_ENHET' | 'VIRKSOMHET' | 'KUNSTIG' | '-';
    perioderMedGraderingEllerRefusjon: Array<NyPeriodeDto>;
    permisjon?: PermisjonDto;
    refusjonPrAar?: number;
    startdato?: string;
};
export type FordelBeregningsgrunnlagDto = {
    arbeidsforholdTilFordeling: Array<FordelBeregningsgrunnlagArbeidsforholdDto>;
    fordelBeregningsgrunnlagPerioder: Array<FordelBeregningsgrunnlagPeriodeDto>;
};
export type FordelBeregningsgrunnlagPeriodeDto = {
    fom: string;
    fordelBeregningsgrunnlagAndeler: Array<FordelBeregningsgrunnlagAndelDto>;
    harPeriodeAarsakGraderingEllerRefusjon?: boolean;
    skalKunneEndreRefusjon?: boolean;
    skalPreutfyllesMedBeregningsgrunnlag?: boolean;
    skalRedigereInntekt?: boolean;
    tom?: string;
};
export type FordelingDto = {
    fordelBeregningsgrunnlag?: FordelBeregningsgrunnlagDto;
    vurderNyttInntektsforholdDto?: VurderNyttInntektsforholdDto;
    vurderRepresentererStortinget?: VurderRepresentererStortingetDto;
};
export type FordelingFår = Rammevedtak & {
    avsender?: string;
    gyldigFraOgMed?: string;
    gyldigTilOgMed?: string;
    lengde?: {
        nano?: number;
        negative?: boolean;
        positive?: boolean;
        seconds?: number;
        units?: Array<{
            dateBased?: boolean;
            duration?: {
                nano?: number;
                negative?: boolean;
                positive?: boolean;
                seconds?: number;
                zero?: boolean;
            };
            durationEstimated?: boolean;
            timeBased?: boolean;
        }>;
        zero?: boolean;
    };
    vedtatt?: string;
};
export type FordelingGir = Rammevedtak & {
    gyldigFraOgMed?: string;
    gyldigTilOgMed?: string;
    lengde?: {
        nano?: number;
        negative?: boolean;
        positive?: boolean;
        seconds?: number;
        units?: Array<{
            dateBased?: boolean;
            duration?: {
                nano?: number;
                negative?: boolean;
                positive?: boolean;
                seconds?: number;
                zero?: boolean;
            };
            durationEstimated?: boolean;
            timeBased?: boolean;
        }>;
        zero?: boolean;
    };
    mottaker?: string;
    vedtatt?: string;
};
export type ForeldrepengerGrunnlag = YtelsespesifiktGrunnlagDto & {
    aktivitetGradering?: AktivitetGraderingDto;
    dekningsgrad?: number;
    kvalifisererTilBesteberegning?: boolean;
    ytelsegrunnlagForBesteberegning?: Array<Ytelsegrunnlag>;
} & {
    kvalifisererTilBesteberegning: boolean;
};
export type ForeldrepengerGrunnlagDto = YtelsespesifiktGrunnlagDto & {
    besteberegninggrunnlag?: BesteberegninggrunnlagDto;
};
export type Fosterbarn = Rammevedtak & {
    barnetsFødselsdato?: string;
    gyldigFraOgMed?: string;
    gyldigTilOgMed?: string;
    lengde?: {
        nano?: number;
        negative?: boolean;
        positive?: boolean;
        seconds?: number;
        units?: Array<{
            dateBased?: boolean;
            duration?: {
                nano?: number;
                negative?: boolean;
                positive?: boolean;
                seconds?: number;
                zero?: boolean;
            };
            durationEstimated?: boolean;
            timeBased?: boolean;
        }>;
        zero?: boolean;
    };
    mottaker?: string;
    vedtatt?: string;
};
export type FosterbarnDto = {
    fnr?: string;
    fødselsdato: string;
    navn: string;
};
export type FosterbarnListeDto = {
    fosterbarn: Array<FosterbarnDto>;
};
export type FrisinnAndelDto = {
    oppgittInntekt?: number;
    statusSøktFor: 'MIDL_INAKTIV' | 'AAP' | 'AT' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'FL' | 'MS' | 'SN' | 'AT_FL' | 'AT_SN' | 'FL_SN' | 'AT_FL_SN' | 'BA' | 'KUN_YTELSE' | 'TY' | 'VENTELØNN_VARTPENGER' | '-';
};
export type statusSøktFor = 'MIDL_INAKTIV' | 'AAP' | 'AT' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'FL' | 'MS' | 'SN' | 'AT_FL' | 'AT_SN' | 'FL_SN' | 'AT_FL_SN' | 'BA' | 'KUN_YTELSE' | 'TY' | 'VENTELØNN_VARTPENGER' | '-';
export declare const statusSøktFor: {
    readonly MIDL_INAKTIV: "MIDL_INAKTIV";
    readonly AAP: "AAP";
    readonly AT: "AT";
    readonly DP: "DP";
    readonly SP_AV_DP: "SP_AV_DP";
    readonly PSB_AV_DP: "PSB_AV_DP";
    readonly FL: "FL";
    readonly MS: "MS";
    readonly SN: "SN";
    readonly AT_FL: "AT_FL";
    readonly AT_SN: "AT_SN";
    readonly FL_SN: "FL_SN";
    readonly AT_FL_SN: "AT_FL_SN";
    readonly BA: "BA";
    readonly KUN_YTELSE: "KUN_YTELSE";
    readonly TY: "TY";
    readonly VENTELØNN_VARTPENGER: "VENTELØNN_VARTPENGER";
    readonly _: "-";
};
export type FrisinnGrunnlag = YtelsespesifiktGrunnlagDto & {
    frisinnBehandlingType?: 'REVURDERING' | 'NY_SØKNADSPERIODE';
    perioderMedSøkerInfo?: Array<PeriodeMedSøkerInfoDto>;
    søkerYtelseForFrilans?: boolean;
    søkerYtelseForNæring?: boolean;
};
export type frisinnBehandlingType = 'REVURDERING' | 'NY_SØKNADSPERIODE';
export declare const frisinnBehandlingType: {
    readonly REVURDERING: "REVURDERING";
    readonly NY_SØKNADSPERIODE: "NY_SØKNADSPERIODE";
};
export type FrisinnGrunnlagDto = YtelsespesifiktGrunnlagDto & {
    avslagsårsakPrPeriode?: Array<AvslagsårsakPrPeriodeDto>;
    frisinnPerioder?: Array<FrisinnPeriodeDto>;
    opplysningerFL?: SøknadsopplysningerDto;
    opplysningerSN?: SøknadsopplysningerDto;
    perioderSøktFor?: Array<OpplystPeriodeDto>;
} & {
    avslagsårsakPrPeriode: Array<AvslagsårsakPrPeriodeDto>;
    frisinnPerioder: Array<FrisinnPeriodeDto>;
    perioderSøktFor: Array<OpplystPeriodeDto>;
};
export type FrisinnPeriodeDto = {
    fom: string;
    frisinnAndeler: Array<FrisinnAndelDto>;
    oppgittArbeidsinntekt?: number;
    tom: string;
};
export type FritekstbrevinnholdDto = {
    brødtekst: string;
    overskrift: string;
};
export type FullUttaksplan = {
    aktiviteter?: Array<Aktivitet>;
    saksnummer?: string;
};
export type FødselHendelse = Hendelse & {
    fødselsdato?: string;
    hendelseInfo?: HendelseInfo;
} & {
    fødselsdato: string;
    hendelseInfo: HendelseInfo;
};
export type GjennomgåttOpplæringDto = {
    perioder: Array<Periode>;
    vurderinger: Array<OpplæringVurderingDto>;
};
export type GjenopptaBehandlingDto = {
    behandlingId: number;
    behandlingVersjon: number;
};
export type GodkjentOpplæringsinstitusjonDto = {
    navn?: string;
    perioder?: Array<Periode>;
    uuid?: string;
};
export type Gradering = {
    arbeidstidProsent?: number;
    indexKey?: string;
    periode?: DatoIntervallEntitet;
};
export type GraderingDto = {
    arbeidstidProsent: number;
    periode: Periode;
};
export type GraderingMotTilsyn = {
    andreSøkeresTilsyn?: number;
    andreSøkeresTilsynReberegnet?: boolean;
    etablertTilsyn?: number;
    overseEtablertTilsynÅrsak?: 'FOR_LAVT' | 'NATTEVÅK' | 'BEREDSKAP' | 'NATTEVÅK_OG_BEREDSKAP';
    tilgjengeligForSøker?: number;
};
export type overseEtablertTilsynÅrsak = 'FOR_LAVT' | 'NATTEVÅK' | 'BEREDSKAP' | 'NATTEVÅK_OG_BEREDSKAP';
export declare const overseEtablertTilsynÅrsak: {
    readonly FOR_LAVT: "FOR_LAVT";
    readonly NATTEVÅK: "NATTEVÅK";
    readonly BEREDSKAP: "BEREDSKAP";
    readonly NATTEVÅK_OG_BEREDSKAP: "NATTEVÅK_OG_BEREDSKAP";
};
export type HarGyldigOmsorgsdagerVedtakDto = {
    harInnvilgedeBehandlinger?: boolean;
    saksnummer?: string;
    vedtaksdato?: string;
};
export type Hendelse = {
    type: string;
};
export type HendelseDto = {
    aktørId: string;
    hendelse: Hendelse;
};
export type HendelseInfo = {
    aktørIder: Array<(string)>;
    hendelseId?: string;
    opprettet: string;
};
export type HenleggBehandlingDto = {
    begrunnelse: string;
    behandlingId: number;
    behandlingVersjon: number;
    årsakKode: string;
};
export type HentFnr = {
    aktørIder: string;
};
export type HentReservertSaksnummerDto = {
    behandlingsår?: string;
    brukerAktørId: string;
    pleietrengendeAktørId?: string;
    relatertPersonAktørId?: string;
    saksnummer: string;
    ytelseType: 'DAG' | 'FRISINN' | 'SP' | 'PSB' | 'PPN' | 'OMP' | 'OMP_KS' | 'OMP_MA' | 'OMP_AO' | 'OLP' | 'AAP' | 'ES' | 'FP' | 'SVP' | 'EF' | 'OBSOLETE' | '-';
};
export type HentSisteGyldigeVedtakForAktørInputDto = {
    pleietrengendeAktørId: string;
};
export type HentSøknadPerioderDto = {
    bruker: string;
    pleietrengende?: string;
    ytelseType: 'DAG' | 'FRISINN' | 'SP' | 'PSB' | 'PPN' | 'OMP' | 'OMP_KS' | 'OMP_MA' | 'OMP_AO' | 'OLP' | 'AAP' | 'ES' | 'FP' | 'SVP' | 'EF' | 'OBSOLETE' | '-';
};
export type InitLinksDto = {
    links?: Array<ResourceLink>;
    sakLinks?: Array<ResourceLink>;
};
export type InnloggetAnsattDto = {
    brukernavn: string;
    funksjonellTid: string;
    kanBehandleKode6?: boolean;
    kanBehandleKode7?: boolean;
    kanBehandleKodeEgenAnsatt?: boolean;
    kanBeslutte?: boolean;
    kanOverstyre?: boolean;
    kanSaksbehandle?: boolean;
    kanVeilede?: boolean;
    navn: string;
    skalViseDetaljerteFeilmeldinger?: boolean;
};
export type Innsending = {
    innhold: InnsendingInnhold;
    journalpostId?: string;
    kanalReferanse?: string;
    mottattDato?: string;
    mottattTidspunkt: string;
    saksnummer: string;
    type: string;
};
export type InnsendingInnhold = {
    ytelseType: 'DAG' | 'FRISINN' | 'SP' | 'PSB' | 'PPN' | 'OMP' | 'OMP_KS' | 'OMP_MA' | 'OMP_AO' | 'OLP' | 'AAP' | 'ES' | 'FP' | 'SVP' | 'EF' | 'OBSOLETE' | '-';
};
export type InnsendingMottatt = {
    saksnummer: string;
};
export type InntektArbeidYtelseArbeidsforholdV2Dto = {
    aksjonspunktÅrsaker?: Array<('MANGLENDE_INNTEKTSMELDING' | 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD' | 'OVERGANG_ARBEIDSFORHOLDS_ID_UNDER_YTELSE')>;
    arbeidsforhold?: ArbeidsforholdIdDto;
    arbeidsgiver: Arbeidsgiver;
    begrunnelse?: string;
    handlingType: '-' | 'BRUK' | 'LAGT_TIL_AV_SAKSBEHANDLER' | 'BASERT_PÅ_INNTEKTSMELDING' | 'BRUK_UTEN_INNTEKTSMELDING' | 'IKKE_BRUK' | 'NYTT_ARBEIDSFORHOLD' | 'SLÅTT_SAMMEN_MED_ANNET' | 'BRUK_MED_OVERSTYRT_PERIODE' | 'INNTEKT_IKKE_MED_I_BG';
    id?: string;
    inntektsmeldinger?: Array<MottattInntektsmeldingDto>;
    kilde: Array<('AA-Registeret' | 'A-Inntekt' | 'Inntektsmelding' | 'Saksbehandler')>;
    perioder?: Array<PeriodeDto>;
    permisjoner?: Array<PermisjonDto>;
    stillingsprosent?: number;
    yrkestittel?: string;
};
export type handlingType = '-' | 'BRUK' | 'LAGT_TIL_AV_SAKSBEHANDLER' | 'BASERT_PÅ_INNTEKTSMELDING' | 'BRUK_UTEN_INNTEKTSMELDING' | 'IKKE_BRUK' | 'NYTT_ARBEIDSFORHOLD' | 'SLÅTT_SAMMEN_MED_ANNET' | 'BRUK_MED_OVERSTYRT_PERIODE' | 'INNTEKT_IKKE_MED_I_BG';
export declare const handlingType: {
    readonly _: "-";
    readonly BRUK: "BRUK";
    readonly LAGT_TIL_AV_SAKSBEHANDLER: "LAGT_TIL_AV_SAKSBEHANDLER";
    readonly BASERT_PÅ_INNTEKTSMELDING: "BASERT_PÅ_INNTEKTSMELDING";
    readonly BRUK_UTEN_INNTEKTSMELDING: "BRUK_UTEN_INNTEKTSMELDING";
    readonly IKKE_BRUK: "IKKE_BRUK";
    readonly NYTT_ARBEIDSFORHOLD: "NYTT_ARBEIDSFORHOLD";
    readonly SLÅTT_SAMMEN_MED_ANNET: "SLÅTT_SAMMEN_MED_ANNET";
    readonly BRUK_MED_OVERSTYRT_PERIODE: "BRUK_MED_OVERSTYRT_PERIODE";
    readonly INNTEKT_IKKE_MED_I_BG: "INNTEKT_IKKE_MED_I_BG";
};
export type InntektArbeidYtelseGrunnlagDto = {
    arbeidDto?: ArbeidDto;
    arbeidsforholdInformasjon?: ArbeidsforholdInformasjonDto;
    inntekterDto?: InntekterDto;
    inntektsmeldinger?: InntektsmeldingerDto;
    oppgittOpptjening?: OppgittOpptjeningDto;
    ytelserDto?: YtelserDto;
};
export type InntektDto = {
    belop?: number;
    fom: string;
    inntektspostType?: '-' | 'LØNN' | 'YTELSE' | 'SELVSTENDIG_NÆRINGSDRIVENDE' | 'NÆRING_FISKE_FANGST_FAMBARNEHAGE';
    navn?: string;
    tom: string;
    utbetaler?: string;
    ytelse?: boolean;
};
export type inntektspostType = '-' | 'LØNN' | 'YTELSE' | 'SELVSTENDIG_NÆRINGSDRIVENDE' | 'NÆRING_FISKE_FANGST_FAMBARNEHAGE';
export declare const inntektspostType: {
    readonly _: "-";
    readonly LØNN: "LØNN";
    readonly YTELSE: "YTELSE";
    readonly SELVSTENDIG_NÆRINGSDRIVENDE: "SELVSTENDIG_NÆRINGSDRIVENDE";
    readonly NÆRING_FISKE_FANGST_FAMBARNEHAGE: "NÆRING_FISKE_FANGST_FAMBARNEHAGE";
};
export type InntekterDto = {
    inntekt: Array<InntektDto>;
};
export type InntektsforholdDto = {
    aktivitetStatus: 'MIDL_INAKTIV' | 'AAP' | 'AT' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'FL' | 'MS' | 'SN' | 'AT_FL' | 'AT_SN' | 'FL_SN' | 'AT_FL_SN' | 'BA' | 'KUN_YTELSE' | 'TY' | 'VENTELØNN_VARTPENGER' | '-';
    arbeidsforholdId?: string;
    arbeidsgiverId?: string;
    bruttoInntektPrÅr?: number;
    eksternArbeidsforholdId?: string;
    inntektFraInntektsmeldingPrÅr?: number;
    periode: Periode;
    skalRedusereUtbetaling?: boolean;
};
export type InntektsgrunnlagDto = {
    måneder: Array<InntektsgrunnlagMånedDto>;
    pgiGrunnlag: Array<PGIPrÅrDto>;
};
export type InntektsgrunnlagInntektDto = {
    beløp?: number;
    inntektAktivitetType: 'ARBEIDSTAKERINNTEKT' | 'FRILANSINNTEKT' | 'YTELSEINNTEKT' | '-';
};
export type inntektAktivitetType = 'ARBEIDSTAKERINNTEKT' | 'FRILANSINNTEKT' | 'YTELSEINNTEKT' | '-';
export declare const inntektAktivitetType: {
    readonly ARBEIDSTAKERINNTEKT: "ARBEIDSTAKERINNTEKT";
    readonly FRILANSINNTEKT: "FRILANSINNTEKT";
    readonly YTELSEINNTEKT: "YTELSEINNTEKT";
    readonly _: "-";
};
export type InntektsgrunnlagMånedDto = {
    fom: string;
    inntekter?: Array<InntektsgrunnlagInntektDto>;
    tom: string;
};
export type Inntektsmelding = {
    arbeidsforholdId?: string;
    arbeidsforholdRef?: string;
    arbeidsgiver?: Arbeidsgiver;
    eksternArbeidsforholdRef?: string;
    endringerRefusjon?: Array<Refusjon>;
    erNærRelasjon?: boolean;
    fagsakYtelseType?: 'DAG' | 'FRISINN' | 'SP' | 'PSB' | 'PPN' | 'OMP' | 'OMP_KS' | 'OMP_MA' | 'OMP_AO' | 'OLP' | 'AAP' | 'ES' | 'FP' | 'SVP' | 'EF' | 'OBSOLETE' | '-';
    graderinger?: Array<Gradering>;
    indexKey?: string;
    innsendingstidspunkt?: string;
    inntektBeløp?: Beløp;
    inntektsmeldingInnsendingsårsak?: 'NY' | 'ENDRING' | '-';
    journalpostId?: string;
    kanalreferanse?: string;
    kildesystem?: string;
    mottattDato?: string;
    naturalYtelser?: Array<NaturalYtelse>;
    nærRelasjon?: boolean;
    omsorgspengerFravær?: Array<PeriodeAndel>;
    oppgittFravær?: Array<PeriodeAndel>;
    refusjonBeløpPerMnd?: Beløp;
    refusjonOpphører?: string;
    startDatoPermisjon?: string;
    utsettelsePerioder?: Array<UtsettelsePeriode>;
};
export type fagsakYtelseType = 'DAG' | 'FRISINN' | 'SP' | 'PSB' | 'PPN' | 'OMP' | 'OMP_KS' | 'OMP_MA' | 'OMP_AO' | 'OLP' | 'AAP' | 'ES' | 'FP' | 'SVP' | 'EF' | 'OBSOLETE' | '-';
export declare const fagsakYtelseType: {
    readonly DAG: "DAG";
    readonly FRISINN: "FRISINN";
    readonly SP: "SP";
    readonly PSB: "PSB";
    readonly PPN: "PPN";
    readonly OMP: "OMP";
    readonly OMP_KS: "OMP_KS";
    readonly OMP_MA: "OMP_MA";
    readonly OMP_AO: "OMP_AO";
    readonly OLP: "OLP";
    readonly AAP: "AAP";
    readonly ES: "ES";
    readonly FP: "FP";
    readonly SVP: "SVP";
    readonly EF: "EF";
    readonly OBSOLETE: "OBSOLETE";
    readonly _: "-";
};
export type inntektsmeldingInnsendingsårsak = 'NY' | 'ENDRING' | '-';
export declare const inntektsmeldingInnsendingsårsak: {
    readonly NY: "NY";
    readonly ENDRING: "ENDRING";
    readonly _: "-";
};
export type InntektsmeldingDto = {
    arbeidsforholdRef?: InternArbeidsforholdRefDto;
    arbeidsgiver: Aktør;
    endringerRefusjon?: Array<RefusjonDto>;
    inntektBeløp: number;
    journalpostId?: string;
    naturalYtelser?: Array<NaturalYtelseDto>;
    refusjonBeløpPerMnd?: number;
    refusjonOpphører?: string;
    startDatoPermisjon?: string;
};
export type InntektsmeldingVurdering = {
    arbeidsgiver: ArbeidsgiverArbeidsforholdIdV2;
    eksternReferanse: string;
    erstattetAv: Array<(string)>;
    førsteFraværsdag?: string;
    journalpostId: string;
    mottatt: string;
    vurdering: 'I_BRUK' | 'ERSTATTET_AV_NYERE' | 'IKKE_RELEVANT' | 'MANGLER_DATO';
};
export type vurdering = 'I_BRUK' | 'ERSTATTET_AV_NYERE' | 'IKKE_RELEVANT' | 'MANGLER_DATO';
export declare const vurdering: {
    readonly I_BRUK: "I_BRUK";
    readonly ERSTATTET_AV_NYERE: "ERSTATTET_AV_NYERE";
    readonly IKKE_RELEVANT: "IKKE_RELEVANT";
    readonly MANGLER_DATO: "MANGLER_DATO";
};
export type InntektsmeldingerDto = {
    inntektsmeldinger?: Array<InntektsmeldingDto>;
};
export type InntrekkBeslutning = {
    brukInntrekk?: boolean;
};
export type InstitusjonPeriodeDto = {
    institusjon: string;
    journalpostId: JournalpostIdDto;
    periode: Periode;
};
export type InstitusjonVurderingDto = {
    begrunnelse: string;
    journalpostId: JournalpostIdDto;
    perioder: Array<Periode>;
    resultat: 'MÅ_VURDERES' | 'GODKJENT_MANUELT' | 'GODKJENT_AUTOMATISK' | 'IKKE_GODKJENT_MANUELT' | 'IKKE_GODKJENT_AUTOMATISK';
    vurdertAv: string;
    vurdertTidspunkt: string;
};
export type resultat = 'MÅ_VURDERES' | 'GODKJENT_MANUELT' | 'GODKJENT_AUTOMATISK' | 'IKKE_GODKJENT_MANUELT' | 'IKKE_GODKJENT_AUTOMATISK';
export declare const resultat: {
    readonly MÅ_VURDERES: "MÅ_VURDERES";
    readonly GODKJENT_MANUELT: "GODKJENT_MANUELT";
    readonly GODKJENT_AUTOMATISK: "GODKJENT_AUTOMATISK";
    readonly IKKE_GODKJENT_MANUELT: "IKKE_GODKJENT_MANUELT";
    readonly IKKE_GODKJENT_AUTOMATISK: "IKKE_GODKJENT_AUTOMATISK";
};
export type InstitusjonerDto = {
    perioder: Array<InstitusjonPeriodeDto>;
    vurderinger: Array<InstitusjonVurderingDto>;
};
export type InternArbeidsforholdRefDto = {
    abakusReferanse: string;
};
export type JournalpostIdDto = {
    journalpostId: string;
};
export type JournalpostIderDto = {
    journalpostIder?: Array<JournalpostIdDto>;
    journalpostIderBarn?: Array<JournalpostIdDto>;
};
export type K9FormidlingKodeverkWeb = {
    avsenderApplikasjon: 'K9SAK' | 'OMSORGSPENGER_RAMMEMELDINGER' | 'K9KLAGE' | 'K9PUNSJ' | 'K9FORDEL';
};
export type avsenderApplikasjon = 'K9SAK' | 'OMSORGSPENGER_RAMMEMELDINGER' | 'K9KLAGE' | 'K9PUNSJ' | 'K9FORDEL';
export declare const avsenderApplikasjon: {
    readonly K9SAK: "K9SAK";
    readonly OMSORGSPENGER_RAMMEMELDINGER: "OMSORGSPENGER_RAMMEMELDINGER";
    readonly K9KLAGE: "K9KLAGE";
    readonly K9PUNSJ: "K9PUNSJ";
    readonly K9FORDEL: "K9FORDEL";
};
export type K9SakKodeverkArbeidsforhold = {
    aktivitetStatus: 'MIDL_INAKTIV' | 'AAP' | 'AT' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'FL' | 'MS' | 'SN' | 'AT_FL' | 'AT_SN' | 'FL_SN' | 'AT_FL_SN' | 'BA' | 'IKKE_YRKESAKTIV' | 'KUN_YTELSE' | 'TY' | 'VENTELØNN_VARTPENGER' | '-';
    arbeidType: 'ETTERLØNN_SLUTTPAKKE' | 'FORENKLET_OPPGJØRSORDNING' | 'FRILANSER' | 'FRILANSER_OPPDRAGSTAKER' | 'LØNN_UNDER_UTDANNING' | 'MARITIMT_ARBEIDSFORHOLD' | 'MILITÆR_ELLER_SIVILTJENESTE' | 'ORDINÆRT_ARBEIDSFORHOLD' | 'PENSJON_OG_ANDRE_TYPER_YTELSER_UTEN_ANSETTELSESFORHOLD' | 'NÆRING' | 'UTENLANDSK_ARBEIDSFORHOLD' | 'VENTELØNN_VARTPENGER' | 'VANLIG' | '-';
    arbeidskategori: 'FISKER' | 'ARBEIDSTAKER' | 'SELVSTENDIG_NÆRINGSDRIVENDE' | 'KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE' | 'SJØMANN' | 'JORDBRUKER' | 'DAGPENGER' | 'INAKTIV' | 'KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER' | 'KOMBINASJON_ARBEIDSTAKER_OG_FISKER' | 'FRILANSER' | 'KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER' | 'KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER' | 'DAGMAMMA' | 'UGYLDIG' | '-';
    inntektskategori: 'ARBEIDSTAKER' | 'FRILANSER' | 'SELVSTENDIG_NÆRINGSDRIVENDE' | 'DAGPENGER' | 'ARBEIDSAVKLARINGSPENGER' | 'SJØMANN' | 'DAGMAMMA' | 'JORDBRUKER' | 'FISKER' | 'ARBEIDSTAKER_UTEN_FERIEPENGER' | '-';
    relatertYtelseTilstand: 'ÅPEN' | 'LØPENDE' | 'AVSLUTTET' | 'IKKESTARTET';
};
export type arbeidType = 'ETTERLØNN_SLUTTPAKKE' | 'FORENKLET_OPPGJØRSORDNING' | 'FRILANSER' | 'FRILANSER_OPPDRAGSTAKER' | 'LØNN_UNDER_UTDANNING' | 'MARITIMT_ARBEIDSFORHOLD' | 'MILITÆR_ELLER_SIVILTJENESTE' | 'ORDINÆRT_ARBEIDSFORHOLD' | 'PENSJON_OG_ANDRE_TYPER_YTELSER_UTEN_ANSETTELSESFORHOLD' | 'NÆRING' | 'UTENLANDSK_ARBEIDSFORHOLD' | 'VENTELØNN_VARTPENGER' | 'VANLIG' | '-';
export declare const arbeidType: {
    readonly ETTERLØNN_SLUTTPAKKE: "ETTERLØNN_SLUTTPAKKE";
    readonly FORENKLET_OPPGJØRSORDNING: "FORENKLET_OPPGJØRSORDNING";
    readonly FRILANSER: "FRILANSER";
    readonly FRILANSER_OPPDRAGSTAKER: "FRILANSER_OPPDRAGSTAKER";
    readonly LØNN_UNDER_UTDANNING: "LØNN_UNDER_UTDANNING";
    readonly MARITIMT_ARBEIDSFORHOLD: "MARITIMT_ARBEIDSFORHOLD";
    readonly MILITÆR_ELLER_SIVILTJENESTE: "MILITÆR_ELLER_SIVILTJENESTE";
    readonly ORDINÆRT_ARBEIDSFORHOLD: "ORDINÆRT_ARBEIDSFORHOLD";
    readonly PENSJON_OG_ANDRE_TYPER_YTELSER_UTEN_ANSETTELSESFORHOLD: "PENSJON_OG_ANDRE_TYPER_YTELSER_UTEN_ANSETTELSESFORHOLD";
    readonly NÆRING: "NÆRING";
    readonly UTENLANDSK_ARBEIDSFORHOLD: "UTENLANDSK_ARBEIDSFORHOLD";
    readonly VENTELØNN_VARTPENGER: "VENTELØNN_VARTPENGER";
    readonly VANLIG: "VANLIG";
    readonly _: "-";
};
export type arbeidskategori = 'FISKER' | 'ARBEIDSTAKER' | 'SELVSTENDIG_NÆRINGSDRIVENDE' | 'KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE' | 'SJØMANN' | 'JORDBRUKER' | 'DAGPENGER' | 'INAKTIV' | 'KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER' | 'KOMBINASJON_ARBEIDSTAKER_OG_FISKER' | 'FRILANSER' | 'KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER' | 'KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER' | 'DAGMAMMA' | 'UGYLDIG' | '-';
export declare const arbeidskategori: {
    readonly FISKER: "FISKER";
    readonly ARBEIDSTAKER: "ARBEIDSTAKER";
    readonly SELVSTENDIG_NÆRINGSDRIVENDE: "SELVSTENDIG_NÆRINGSDRIVENDE";
    readonly KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE: "KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE";
    readonly SJØMANN: "SJØMANN";
    readonly JORDBRUKER: "JORDBRUKER";
    readonly DAGPENGER: "DAGPENGER";
    readonly INAKTIV: "INAKTIV";
    readonly KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER: "KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER";
    readonly KOMBINASJON_ARBEIDSTAKER_OG_FISKER: "KOMBINASJON_ARBEIDSTAKER_OG_FISKER";
    readonly FRILANSER: "FRILANSER";
    readonly KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER: "KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER";
    readonly KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER: "KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER";
    readonly DAGMAMMA: "DAGMAMMA";
    readonly UGYLDIG: "UGYLDIG";
    readonly _: "-";
};
export type relatertYtelseTilstand = 'ÅPEN' | 'LØPENDE' | 'AVSLUTTET' | 'IKKESTARTET';
export declare const relatertYtelseTilstand: {
    readonly ÅPEN: "ÅPEN";
    readonly LØPENDE: "LØPENDE";
    readonly AVSLUTTET: "AVSLUTTET";
    readonly IKKESTARTET: "IKKESTARTET";
};
export type K9SakKodeverkBehandling = {
    aksjonspunkt: K9SakKodeverkBehandlingAksjonspunkt;
    behandlingResultatType: 'IKKE_FASTSATT' | 'INNVILGET' | 'DELVIS_INNVILGET' | 'AVSLÅTT' | 'OPPHØR' | 'HENLAGT_SØKNAD_TRUKKET' | 'HENLAGT_FEILOPPRETTET' | 'HENLAGT_BRUKER_DØD' | 'MERGET_OG_HENLAGT' | 'HENLAGT_SØKNAD_MANGLER' | 'HENLAGT_MASKINELT' | 'INNVILGET_ENDRING' | 'INGEN_ENDRING' | 'MANGLER_BEREGNINGSREGLER';
    behandlingType: 'BT-002' | 'BT-004' | 'BT-010' | '-';
    behandlingÅrsakType: 'RE-MF' | 'RE-MFIP' | 'RE-AVAB' | 'RE-LOV' | 'RE-RGLF' | 'RE-FEFAKTA' | 'RE-PRSSL' | 'RE-END-FRA-BRUKER' | 'RE-FRAVÆRKORR-SAKSB' | 'RE-END-INNTEKTSMELD' | 'BERØRT-BEHANDLING' | 'RE-ANNET' | 'RE-SATS-REGULERING' | 'RE-ENDRET-FORDELING' | 'INFOBREV_BEHANDLING' | 'INFOBREV_OPPHOLD' | 'RE-KLAG-U-INNTK' | 'RE-KLAG-M-INNTK' | 'RE-MDL' | 'RE-OPTJ' | 'RE-FRDLING' | 'RE-INNTK' | 'RE-DØD' | 'RE-SRTB' | 'RE-FRIST' | 'RE-BER-GRUN' | 'RE-KLAG-INNH-PGI' | 'ETTER_KLAGE' | 'RE-HENDELSE-FØDSEL' | 'RE-HENDELSE-DØD-F' | 'RE-HENDELSE-DØD-B' | 'RE-HENDELSE-DØDFØD' | 'RE-REGISTEROPPL' | 'RE-YTELSE' | 'RE-TILST-YT-INNVIL' | 'RE-ENDR-BER-GRUN' | 'RE-TILST-YT-OPPH' | 'RE_REBEREGN_FP' | 'RE_ANNEN_SAK' | 'RE_UTSATT_BEHANDLING' | 'RE_GJENOPPTAR_UTSATT_BEHANDLING' | 'RE_ANNEN_SAK_ET' | 'RE_ANNEN_SAK_NB' | 'RE_ANNEN_SAK_S' | 'RE_ANNEN_SAK_NB_ET' | 'RE_ANNEN_SAK_S_ET' | 'RE_ANNEN_SAK_S_NB' | 'RE_ANNEN_SAK_S_ET_NB' | 'RE_ANNEN_SAK_FP' | 'UNNT_GENERELL' | 'REVURDERER_BERØRT_PERIODE' | '-';
    revurderingVarslingÅrsak: 'BARNIKKEREG' | 'JOBBFULLTID' | 'IKKEOPPTJENT' | 'UTVANDRET' | 'JOBBUTLAND' | 'IKKEOPPHOLD' | 'JOBB6MND' | 'AKTIVITET' | 'ANNET';
};
export type behandlingÅrsakType = 'RE-MF' | 'RE-MFIP' | 'RE-AVAB' | 'RE-LOV' | 'RE-RGLF' | 'RE-FEFAKTA' | 'RE-PRSSL' | 'RE-END-FRA-BRUKER' | 'RE-FRAVÆRKORR-SAKSB' | 'RE-END-INNTEKTSMELD' | 'BERØRT-BEHANDLING' | 'RE-ANNET' | 'RE-SATS-REGULERING' | 'RE-ENDRET-FORDELING' | 'INFOBREV_BEHANDLING' | 'INFOBREV_OPPHOLD' | 'RE-KLAG-U-INNTK' | 'RE-KLAG-M-INNTK' | 'RE-MDL' | 'RE-OPTJ' | 'RE-FRDLING' | 'RE-INNTK' | 'RE-DØD' | 'RE-SRTB' | 'RE-FRIST' | 'RE-BER-GRUN' | 'RE-KLAG-INNH-PGI' | 'ETTER_KLAGE' | 'RE-HENDELSE-FØDSEL' | 'RE-HENDELSE-DØD-F' | 'RE-HENDELSE-DØD-B' | 'RE-HENDELSE-DØDFØD' | 'RE-REGISTEROPPL' | 'RE-YTELSE' | 'RE-TILST-YT-INNVIL' | 'RE-ENDR-BER-GRUN' | 'RE-TILST-YT-OPPH' | 'RE_REBEREGN_FP' | 'RE_ANNEN_SAK' | 'RE_UTSATT_BEHANDLING' | 'RE_GJENOPPTAR_UTSATT_BEHANDLING' | 'RE_ANNEN_SAK_ET' | 'RE_ANNEN_SAK_NB' | 'RE_ANNEN_SAK_S' | 'RE_ANNEN_SAK_NB_ET' | 'RE_ANNEN_SAK_S_ET' | 'RE_ANNEN_SAK_S_NB' | 'RE_ANNEN_SAK_S_ET_NB' | 'RE_ANNEN_SAK_FP' | 'UNNT_GENERELL' | 'REVURDERER_BERØRT_PERIODE' | '-';
export declare const behandlingÅrsakType: {
    readonly RE_MF: "RE-MF";
    readonly RE_MFIP: "RE-MFIP";
    readonly RE_AVAB: "RE-AVAB";
    readonly RE_LOV: "RE-LOV";
    readonly RE_RGLF: "RE-RGLF";
    readonly RE_FEFAKTA: "RE-FEFAKTA";
    readonly RE_PRSSL: "RE-PRSSL";
    readonly RE_END_FRA_BRUKER: "RE-END-FRA-BRUKER";
    readonly RE_FRAVÆRKORR_SAKSB: "RE-FRAVÆRKORR-SAKSB";
    readonly RE_END_INNTEKTSMELD: "RE-END-INNTEKTSMELD";
    readonly BERØRT_BEHANDLING: "BERØRT-BEHANDLING";
    readonly RE_ANNET: "RE-ANNET";
    readonly RE_SATS_REGULERING: "RE-SATS-REGULERING";
    readonly RE_ENDRET_FORDELING: "RE-ENDRET-FORDELING";
    readonly INFOBREV_BEHANDLING: "INFOBREV_BEHANDLING";
    readonly INFOBREV_OPPHOLD: "INFOBREV_OPPHOLD";
    readonly RE_KLAG_U_INNTK: "RE-KLAG-U-INNTK";
    readonly RE_KLAG_M_INNTK: "RE-KLAG-M-INNTK";
    readonly RE_MDL: "RE-MDL";
    readonly RE_OPTJ: "RE-OPTJ";
    readonly RE_FRDLING: "RE-FRDLING";
    readonly RE_INNTK: "RE-INNTK";
    readonly RE_DØD: "RE-DØD";
    readonly RE_SRTB: "RE-SRTB";
    readonly RE_FRIST: "RE-FRIST";
    readonly RE_BER_GRUN: "RE-BER-GRUN";
    readonly RE_KLAG_INNH_PGI: "RE-KLAG-INNH-PGI";
    readonly ETTER_KLAGE: "ETTER_KLAGE";
    readonly RE_HENDELSE_FØDSEL: "RE-HENDELSE-FØDSEL";
    readonly RE_HENDELSE_DØD_F: "RE-HENDELSE-DØD-F";
    readonly RE_HENDELSE_DØD_B: "RE-HENDELSE-DØD-B";
    readonly RE_HENDELSE_DØDFØD: "RE-HENDELSE-DØDFØD";
    readonly RE_REGISTEROPPL: "RE-REGISTEROPPL";
    readonly RE_YTELSE: "RE-YTELSE";
    readonly RE_TILST_YT_INNVIL: "RE-TILST-YT-INNVIL";
    readonly RE_ENDR_BER_GRUN: "RE-ENDR-BER-GRUN";
    readonly RE_TILST_YT_OPPH: "RE-TILST-YT-OPPH";
    readonly RE_REBEREGN_FP: "RE_REBEREGN_FP";
    readonly RE_ANNEN_SAK: "RE_ANNEN_SAK";
    readonly RE_UTSATT_BEHANDLING: "RE_UTSATT_BEHANDLING";
    readonly RE_GJENOPPTAR_UTSATT_BEHANDLING: "RE_GJENOPPTAR_UTSATT_BEHANDLING";
    readonly RE_ANNEN_SAK_ET: "RE_ANNEN_SAK_ET";
    readonly RE_ANNEN_SAK_NB: "RE_ANNEN_SAK_NB";
    readonly RE_ANNEN_SAK_S: "RE_ANNEN_SAK_S";
    readonly RE_ANNEN_SAK_NB_ET: "RE_ANNEN_SAK_NB_ET";
    readonly RE_ANNEN_SAK_S_ET: "RE_ANNEN_SAK_S_ET";
    readonly RE_ANNEN_SAK_S_NB: "RE_ANNEN_SAK_S_NB";
    readonly RE_ANNEN_SAK_S_ET_NB: "RE_ANNEN_SAK_S_ET_NB";
    readonly RE_ANNEN_SAK_FP: "RE_ANNEN_SAK_FP";
    readonly UNNT_GENERELL: "UNNT_GENERELL";
    readonly REVURDERER_BERØRT_PERIODE: "REVURDERER_BERØRT_PERIODE";
    readonly _: "-";
};
export type revurderingVarslingÅrsak = 'BARNIKKEREG' | 'JOBBFULLTID' | 'IKKEOPPTJENT' | 'UTVANDRET' | 'JOBBUTLAND' | 'IKKEOPPHOLD' | 'JOBB6MND' | 'AKTIVITET' | 'ANNET';
export declare const revurderingVarslingÅrsak: {
    readonly BARNIKKEREG: "BARNIKKEREG";
    readonly JOBBFULLTID: "JOBBFULLTID";
    readonly IKKEOPPTJENT: "IKKEOPPTJENT";
    readonly UTVANDRET: "UTVANDRET";
    readonly JOBBUTLAND: "JOBBUTLAND";
    readonly IKKEOPPHOLD: "IKKEOPPHOLD";
    readonly JOBB6MND: "JOBB6MND";
    readonly AKTIVITET: "AKTIVITET";
    readonly ANNET: "ANNET";
};
export type K9SakKodeverkBehandlingAksjonspunkt = {
    venteårsak: '-' | 'ANKE_OVERSENDT_TIL_TRYGDERETTEN' | 'ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER' | 'AVV_DOK' | 'AVV_IM_MOT_AAREG' | 'AVV_IM_MOT_SØKNAD_AT' | 'AVV_SØKNADSPERIODER' | 'AVV_FODSEL' | 'AVV_RESPONS_REVURDERING' | 'FOR_TIDLIG_SOKNAD' | 'GRADERING_FLERE_ARBEIDSFORHOLD' | 'REFUSJON_3_MÅNEDER' | 'SCANN' | 'UTV_FRIST' | 'VENT_FEIL_ENDRINGSSØKNAD' | 'VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG' | 'VENT_INFOTRYGD' | 'VENT_INNTEKT_RAPPORTERINGSFRIST' | 'VENT_MILITÆR_OG_BG_UNDER_3G' | 'VENT_OPDT_INNTEKTSMELDING' | 'VENT_OPPTJENING_OPPLYSNINGER' | 'VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID' | 'VENT_REGISTERINNHENTING' | 'VENT_PÅ_SISTE_AAP_MELDEKORT' | 'VENT_SØKNAD_SENDT_INFORMASJONSBREV' | 'VENT_TIDLIGERE_BEHANDLING' | 'VENT_ÅPEN_BEHANDLING' | 'VENT_MANGL_FUNKSJ_SAKSBEHANDLER' | 'VENTER_SVAR_PORTEN' | 'VENTER_SVAR_TEAMS' | 'ANDRE_INNTEKTSOPPLYSNINGER' | 'INNTEKTSMELDING' | 'LEGEERKLÆRING' | 'MEDISINSKE_OPPLYSNINGER' | 'ANNET' | 'VENTER_ETTERLYS_IM' | 'VENTER_ETTERLYS_IM_VARSEL' | 'OPPD_ÅPEN_BEH' | 'VENT_DEKGRAD_REGEL' | 'VENT_ØKONOMI' | 'VENT_TILBAKEKREVING' | 'VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER' | 'VENT_BEREGNING_TILBAKE_I_TID' | 'BRUKER_70ÅR_VED_REFUSJON' | 'VENT_LOVENDRING_8_41' | 'INGEN_PERIODE_UTEN_YTELSE' | 'PERIODE_MED_AVSLAG' | 'MANGLENDE_FUNKSJONALITET' | 'KORTVARIG_ARBEID' | 'FRISINN_ATFL_SAMME_ORG' | 'FRISINN_VARIANT_SN_MED_FL_INNTEKT' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT' | 'FRISINN_VARIANT_NY_FL' | 'FRISINN_VARIANT_NY_SN_2019' | 'FRISINN_VARIANT_NY_SN_2020' | 'FRISINN_VARIANT_KOMBINERT' | 'FRISINN_VARIANT_KOMBINERT_NY_FL' | 'FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2019' | 'FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2020' | 'FRISINN_VARIANT_KOMBINERT_NY_SN_2019' | 'FRISINN_VARIANT_KOMBINERT_NY_SN_2020' | 'FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2019' | 'FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2020' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2019' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2020' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2019' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2020' | 'FRISINN_VARIANT_ENDRET_INNTEKTSTYPE' | 'AVV_SOKN_IT_PERIODER' | 'AVV_SOKN_NAERING' | 'AVV_SOKN_FRILANS' | 'DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP' | 'AAP_DP_SISTE_10_MND_SVP' | 'FL_SN_IKKE_STOTTET_FOR_SVP';
};
export type K9SakKodeverkHistorikk = {
    historikkBegrunnelseType: '-' | 'SAKSBEH_START_PA_NYTT' | 'BEH_STARTET_PA_NYTT' | 'BERORT_BEH_ENDRING_DEKNINGSGRAD' | 'BERORT_BEH_OPPHOR';
};
export type historikkBegrunnelseType = '-' | 'SAKSBEH_START_PA_NYTT' | 'BEH_STARTET_PA_NYTT' | 'BERORT_BEH_ENDRING_DEKNINGSGRAD' | 'BERORT_BEH_OPPHOR';
export declare const historikkBegrunnelseType: {
    readonly _: "-";
    readonly SAKSBEH_START_PA_NYTT: "SAKSBEH_START_PA_NYTT";
    readonly BEH_STARTET_PA_NYTT: "BEH_STARTET_PA_NYTT";
    readonly BERORT_BEH_ENDRING_DEKNINGSGRAD: "BERORT_BEH_ENDRING_DEKNINGSGRAD";
    readonly BERORT_BEH_OPPHOR: "BERORT_BEH_OPPHOR";
};
export type K9SakKodeverkMedlem = {
    medlemskapManuellVurderingType: '-' | 'MEDLEM' | 'UNNTAK' | 'IKKE_RELEVANT' | 'OPPHOR_PGA_ENDRING_I_TPS';
};
export type medlemskapManuellVurderingType = '-' | 'MEDLEM' | 'UNNTAK' | 'IKKE_RELEVANT' | 'OPPHOR_PGA_ENDRING_I_TPS';
export declare const medlemskapManuellVurderingType: {
    readonly _: "-";
    readonly MEDLEM: "MEDLEM";
    readonly UNNTAK: "UNNTAK";
    readonly IKKE_RELEVANT: "IKKE_RELEVANT";
    readonly OPPHOR_PGA_ENDRING_I_TPS: "OPPHOR_PGA_ENDRING_I_TPS";
};
export type K9SakKodeverkOpptjening = {
    opptjeningAktivitetType: 'AAP' | 'ARBEID' | 'DAGPENGER' | 'FORELDREPENGER' | 'FRILANS' | 'MILITÆR_ELLER_SIVILTJENESTE' | 'NÆRING' | 'OMSORGSPENGER' | 'OPPLÆRINGSPENGER' | 'PLEIEPENGER' | 'ETTERLØNN_SLUTTPAKKE' | 'SVANGERSKAPSPENGER' | 'SYKEPENGER' | 'SYKEPENGER_AV_DAGPENGER' | 'PLEIEPENGER_AV_DAGPENGER' | 'VENTELØNN_VARTPENGER' | 'VIDERE_ETTERUTDANNING' | 'UTENLANDSK_ARBEIDSFORHOLD' | 'FRISINN' | 'UTDANNINGSPERMISJON' | 'MELLOM_ARBEID' | '-';
};
export type opptjeningAktivitetType2 = 'AAP' | 'ARBEID' | 'DAGPENGER' | 'FORELDREPENGER' | 'FRILANS' | 'MILITÆR_ELLER_SIVILTJENESTE' | 'NÆRING' | 'OMSORGSPENGER' | 'OPPLÆRINGSPENGER' | 'PLEIEPENGER' | 'ETTERLØNN_SLUTTPAKKE' | 'SVANGERSKAPSPENGER' | 'SYKEPENGER' | 'SYKEPENGER_AV_DAGPENGER' | 'PLEIEPENGER_AV_DAGPENGER' | 'VENTELØNN_VARTPENGER' | 'VIDERE_ETTERUTDANNING' | 'UTENLANDSK_ARBEIDSFORHOLD' | 'FRISINN' | 'UTDANNINGSPERMISJON' | 'MELLOM_ARBEID' | '-';
export declare const opptjeningAktivitetType2: {
    readonly AAP: "AAP";
    readonly ARBEID: "ARBEID";
    readonly DAGPENGER: "DAGPENGER";
    readonly FORELDREPENGER: "FORELDREPENGER";
    readonly FRILANS: "FRILANS";
    readonly MILITÆR_ELLER_SIVILTJENESTE: "MILITÆR_ELLER_SIVILTJENESTE";
    readonly NÆRING: "NÆRING";
    readonly OMSORGSPENGER: "OMSORGSPENGER";
    readonly OPPLÆRINGSPENGER: "OPPLÆRINGSPENGER";
    readonly PLEIEPENGER: "PLEIEPENGER";
    readonly ETTERLØNN_SLUTTPAKKE: "ETTERLØNN_SLUTTPAKKE";
    readonly SVANGERSKAPSPENGER: "SVANGERSKAPSPENGER";
    readonly SYKEPENGER: "SYKEPENGER";
    readonly SYKEPENGER_AV_DAGPENGER: "SYKEPENGER_AV_DAGPENGER";
    readonly PLEIEPENGER_AV_DAGPENGER: "PLEIEPENGER_AV_DAGPENGER";
    readonly VENTELØNN_VARTPENGER: "VENTELØNN_VARTPENGER";
    readonly VIDERE_ETTERUTDANNING: "VIDERE_ETTERUTDANNING";
    readonly UTENLANDSK_ARBEIDSFORHOLD: "UTENLANDSK_ARBEIDSFORHOLD";
    readonly FRISINN: "FRISINN";
    readonly UTDANNINGSPERMISJON: "UTDANNINGSPERMISJON";
    readonly MELLOM_ARBEID: "MELLOM_ARBEID";
    readonly _: "-";
};
export type K9SakKodeverkPerson = {
    personstatusType: 'ABNR' | 'ADNR' | 'BOSA' | 'DØD' | 'DØDD' | 'FOSV' | 'FØDR' | 'UFUL' | 'UREG' | 'UTAN' | 'UTPE' | 'UTVA' | '-';
    sivilstandType: 'ENKE' | 'GIFT' | 'GJPA' | 'GLAD' | 'NULL' | 'REPA' | 'SAMB' | 'SEPA' | 'SEPR' | 'SKIL' | 'SKPA' | 'UGIF';
};
export type personstatusType = 'ABNR' | 'ADNR' | 'BOSA' | 'DØD' | 'DØDD' | 'FOSV' | 'FØDR' | 'UFUL' | 'UREG' | 'UTAN' | 'UTPE' | 'UTVA' | '-';
export declare const personstatusType: {
    readonly ABNR: "ABNR";
    readonly ADNR: "ADNR";
    readonly BOSA: "BOSA";
    readonly DØD: "DØD";
    readonly DØDD: "DØDD";
    readonly FOSV: "FOSV";
    readonly FØDR: "FØDR";
    readonly UFUL: "UFUL";
    readonly UREG: "UREG";
    readonly UTAN: "UTAN";
    readonly UTPE: "UTPE";
    readonly UTVA: "UTVA";
    readonly _: "-";
};
export type sivilstandType = 'ENKE' | 'GIFT' | 'GJPA' | 'GLAD' | 'NULL' | 'REPA' | 'SAMB' | 'SEPA' | 'SEPR' | 'SKIL' | 'SKPA' | 'UGIF';
export declare const sivilstandType: {
    readonly ENKE: "ENKE";
    readonly GIFT: "GIFT";
    readonly GJPA: "GJPA";
    readonly GLAD: "GLAD";
    readonly NULL: "NULL";
    readonly REPA: "REPA";
    readonly SAMB: "SAMB";
    readonly SEPA: "SEPA";
    readonly SEPR: "SEPR";
    readonly SKIL: "SKIL";
    readonly SKPA: "SKPA";
    readonly UGIF: "UGIF";
};
export type K9SakKodeverkWeb = {
    arbeidsforhold: K9SakKodeverkArbeidsforhold;
    behandling: K9SakKodeverkBehandling;
    fagsystem: 'K9SAK' | 'FPSAK' | 'TPS' | 'VLSP' | 'JOARK' | 'INFOTRYGD' | 'ARENA' | 'INNTEKT' | 'MEDL' | 'GOSYS' | 'ENHETSREGISTERET' | 'AAREGISTERET' | '-';
    historikk: K9SakKodeverkHistorikk;
    iaygrunnlag: AbakusKodeverkIaygrunnlag;
    medlem: K9SakKodeverkMedlem;
    opptjening: K9SakKodeverkOpptjening;
    person: K9SakKodeverkPerson;
};
export type fagsystem = 'K9SAK' | 'FPSAK' | 'TPS' | 'VLSP' | 'JOARK' | 'INFOTRYGD' | 'ARENA' | 'INNTEKT' | 'MEDL' | 'GOSYS' | 'ENHETSREGISTERET' | 'AAREGISTERET' | '-';
export declare const fagsystem: {
    readonly K9SAK: "K9SAK";
    readonly FPSAK: "FPSAK";
    readonly TPS: "TPS";
    readonly VLSP: "VLSP";
    readonly JOARK: "JOARK";
    readonly INFOTRYGD: "INFOTRYGD";
    readonly ARENA: "ARENA";
    readonly INNTEKT: "INNTEKT";
    readonly MEDL: "MEDL";
    readonly GOSYS: "GOSYS";
    readonly ENHETSREGISTERET: "ENHETSREGISTERET";
    readonly AAREGISTERET: "AAREGISTERET";
    readonly _: "-";
};
export type KalkulatorInputDto = {
    iayGrunnlag: InntektArbeidYtelseGrunnlagDto;
    opptjeningAktiviteter: OpptjeningAktiviteterDto;
    refusjonskravDatoer?: Array<RefusjonskravDatoDto>;
    refusjonskravPrArbeidsgiver?: Array<KravperioderPrArbeidsforhold>;
    skjæringstidspunkt: string;
    ytelsespesifiktGrunnlag?: YtelsespesifiktGrunnlagDto;
};
export type KalkulatorInputPrVilkårperiodeDto = {
    kalkulatorInput: KalkulatorInputDto;
    vilkårPeriode: DatoIntervallEntitet;
};
export type KompletthetsTilstandPåPeriodeDto = {
    begrunnelse?: string;
    periode: string;
    status: Array<ArbeidsgiverArbeidsforholdStatus>;
    tilVurdering: boolean;
    vurdering?: 'UDEFINERT' | 'KAN_FORTSETTE' | 'MANGLENDE_GRUNNLAG' | 'UAVKLART';
};
export type vurdering2 = 'UDEFINERT' | 'KAN_FORTSETTE' | 'MANGLENDE_GRUNNLAG' | 'UAVKLART';
export declare const vurdering2: {
    readonly UDEFINERT: "UDEFINERT";
    readonly KAN_FORTSETTE: "KAN_FORTSETTE";
    readonly MANGLENDE_GRUNNLAG: "MANGLENDE_GRUNNLAG";
    readonly UAVKLART: "UAVKLART";
};
export type KompletthetsTilstandPåPeriodeV2Dto = {
    begrunnelse?: string;
    periode: string;
    status: Array<ArbeidsgiverArbeidsforholdStatusV2>;
    tilVurdering: boolean;
    vurdering?: 'UDEFINERT' | 'KAN_FORTSETTE' | 'MANGLENDE_GRUNNLAG' | 'UAVKLART';
};
export type KompletthetsVurderingDto = {
    tilstand: Array<KompletthetsTilstandPåPeriodeDto>;
};
export type KompletthetsVurderingV2Dto = {
    tilstand: Array<KompletthetsTilstandPåPeriodeV2Dto>;
};
export type KoronaOverføringFår = Rammevedtak & {
    avsender?: string;
    gyldigFraOgMed?: string;
    gyldigTilOgMed?: string;
    lengde?: {
        nano?: number;
        negative?: boolean;
        positive?: boolean;
        seconds?: number;
        units?: Array<{
            dateBased?: boolean;
            duration?: {
                nano?: number;
                negative?: boolean;
                positive?: boolean;
                seconds?: number;
                zero?: boolean;
            };
            durationEstimated?: boolean;
            timeBased?: boolean;
        }>;
        zero?: boolean;
    };
    vedtatt?: string;
};
export type KoronaOverføringGir = Rammevedtak & {
    gyldigFraOgMed?: string;
    gyldigTilOgMed?: string;
    lengde?: {
        nano?: number;
        negative?: boolean;
        positive?: boolean;
        seconds?: number;
        units?: Array<{
            dateBased?: boolean;
            duration?: {
                nano?: number;
                negative?: boolean;
                positive?: boolean;
                seconds?: number;
                zero?: boolean;
            };
            durationEstimated?: boolean;
            timeBased?: boolean;
        }>;
        zero?: boolean;
    };
    mottaker?: string;
    vedtatt?: string;
};
export type KortvarigeArbeidsforholdDto = {
    aktivitetStatus: 'MIDL_INAKTIV' | 'AAP' | 'AT' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'FL' | 'MS' | 'SN' | 'AT_FL' | 'AT_SN' | 'FL_SN' | 'AT_FL_SN' | 'BA' | 'KUN_YTELSE' | 'TY' | 'VENTELØNN_VARTPENGER' | '-';
    andelIArbeid: Array<(number)>;
    andelsnr: number;
    arbeidsforhold?: BeregningsgrunnlagArbeidsforholdDto;
    erTidsbegrensetArbeidsforhold?: boolean;
    fastsattAvSaksbehandler?: boolean;
    inntektskategori: 'ARBEIDSTAKER' | 'FRILANSER' | 'SELVSTENDIG_NÆRINGSDRIVENDE' | 'DAGPENGER' | 'ARBEIDSAVKLARINGSPENGER' | 'SJØMANN' | 'DAGMAMMA' | 'JORDBRUKER' | 'FISKER' | 'ARBEIDSTAKER_UTEN_FERIEPENGER' | '-';
    kilde: 'SAKSBEHANDLER_KOFAKBER' | 'PROSESS_BESTEBEREGNING' | 'SAKSBEHANDLER_FORDELING' | 'PROSESS_PERIODISERING' | 'PROSESS_OMFORDELING' | 'PROSESS_START' | 'PROSESS_PERIODISERING_TILKOMMET_INNTEKT';
    lagtTilAvSaksbehandler?: boolean;
};
export type KravDokumentMedSøktePerioder = {
    innsendingsTidspunkt: string;
    journalpostId?: string;
    kildesystem?: string;
    søktePerioder?: Array<SøktPeriode>;
    type: 'INNTEKTSMELDING' | 'SØKNAD';
};
export type type5 = 'INNTEKTSMELDING' | 'SØKNAD';
export declare const type5: {
    readonly INNTEKTSMELDING: "INNTEKTSMELDING";
    readonly SØKNAD: "SØKNAD";
};
export type KravDokumentStatus = {
    avklarteOpplysninger?: AvklarteOpplysninger;
    innsendingstidspunkt?: string;
    journalpostId: string;
    overstyrteOpplysninger?: AvklarteOpplysninger;
    status?: Array<SøknadsfristPeriodeDto>;
    type?: 'INNTEKTSMELDING' | 'SØKNAD';
};
export type KravperioderPrArbeidsforhold = {
    alleSøktePerioder: Array<PerioderForKrav>;
    arbeidsgiver: Aktør;
    internreferanse?: InternArbeidsforholdRefDto;
    sisteSøktePerioder: PerioderForKrav;
};
export type KunYtelseDto = {
    andeler?: Array<AndelMedBeløpDto>;
    erBesteberegning?: boolean;
    fodendeKvinneMedDP?: boolean;
};
export type KvoteInfo = {
    maxDato?: string;
    totaltForbruktKvote?: number;
};
export type Landkoder = {
    kode?: string;
    readonly kodeverk?: string;
    readonly navn?: string;
};
export type LocalDateInterval = {
    closedInterval?: boolean;
    fomDato?: string;
    openEnd?: boolean;
    openStart?: boolean;
    tomDato?: string;
};
export type LocalDateTimelineVilkårUtfallSamlet = {
    continuous?: boolean;
    datoIntervaller?: Array<LocalDateInterval>;
    empty?: boolean;
    localDateIntervals?: Array<LocalDateInterval>;
    maxLocalDate?: string;
    minLocalDate?: string;
};
export type LosOpplysningerSomManglerIKlageDto = {
    pleietrengendeAktørId?: string;
    utenlandstilsnitt?: boolean;
};
export type LønnsendringSaksopplysningDto = {
    arbeidsforhold: ArbeidsforholdDto;
    lønnsendringscenario: 'MANUELT_BEHANDLET' | 'DELVIS_MÅNEDSINNTEKT_SISTE_MND' | 'FULL_MÅNEDSINNTEKT_EN_MND' | 'FULL_MÅNEDSINNTEKT_TO_MND';
    sisteLønnsendringsdato: string;
};
export type lønnsendringscenario = 'MANUELT_BEHANDLET' | 'DELVIS_MÅNEDSINNTEKT_SISTE_MND' | 'FULL_MÅNEDSINNTEKT_EN_MND' | 'FULL_MÅNEDSINNTEKT_TO_MND';
export declare const lønnsendringscenario: {
    readonly MANUELT_BEHANDLET: "MANUELT_BEHANDLET";
    readonly DELVIS_MÅNEDSINNTEKT_SISTE_MND: "DELVIS_MÅNEDSINNTEKT_SISTE_MND";
    readonly FULL_MÅNEDSINNTEKT_EN_MND: "FULL_MÅNEDSINNTEKT_EN_MND";
    readonly FULL_MÅNEDSINNTEKT_TO_MND: "FULL_MÅNEDSINNTEKT_TO_MND";
};
export type ManglendeArbeidstidDto = {
    mangler?: Array<ArbeidsgiverMedPerioderSomManglerDto>;
};
export type ManglendeVedleggDto = {
    arbeidsgiver?: ArbeidsgiverDto;
    brukerHarSagtAtIkkeKommer?: boolean;
    dokumentType: 'INNTEKTSMELDING' | 'LEGEERKLÆRING' | 'UDEFINERT';
};
export type dokumentType = 'INNTEKTSMELDING' | 'LEGEERKLÆRING' | 'UDEFINERT';
export declare const dokumentType: {
    readonly INNTEKTSMELDING: "INNTEKTSMELDING";
    readonly LEGEERKLÆRING: "LEGEERKLÆRING";
    readonly UDEFINERT: "UDEFINERT";
};
export type MatchFagsak = {
    bruker?: string;
    periode?: Periode;
    pleietrengendeIdenter?: Array<(string)>;
    relatertPersonIdenter?: Array<(string)>;
    ytelseType: 'DAG' | 'FRISINN' | 'SP' | 'PSB' | 'PPN' | 'OMP' | 'OMP_KS' | 'OMP_MA' | 'OMP_AO' | 'OLP' | 'AAP' | 'ES' | 'FP' | 'SVP' | 'EF' | 'OBSOLETE' | '-';
};
export type MedlemPeriodeDto = {
    aksjonspunkter?: Array<(string)>;
    begrunnelse?: string;
    bosattVurdering?: boolean;
    erEosBorger?: boolean;
    lovligOppholdVurdering?: boolean;
    medlemskapManuellVurderingType?: '-' | 'MEDLEM' | 'UNNTAK' | 'IKKE_RELEVANT' | 'OPPHOR_PGA_ENDRING_I_TPS';
    oppholdsrettVurdering?: boolean;
    personopplysninger: PersonopplysningDto;
    vurderingsdato?: string;
    vurdertAv?: string;
    vurdertTidspunkt?: string;
    årsaker?: Array<('SKJÆRINGSTIDSPUNKT' | 'STATSBORGERSKAP' | 'ADRESSE' | 'PERSONSTATUS' | 'MEDL_PERIODE' | 'BORTFALL_INNTEKT' | 'ENDRING_I_REGISTERDATA')>;
};
export type MedlemV2Dto = {
    medlemskapPerioder?: Array<MedlemskapPerioderDto>;
    perioder?: Array<MedlemPeriodeDto>;
};
export type MedlemskapPerioderDto = {
    beslutningsdato?: string;
    dekningType: 'FTL_2_6' | 'FTL_2_7_a' | 'FTL_2_7_b' | 'FTL_2_9_1_a' | 'FTL_2_9_1_b' | 'FTL_2_9_1_c' | 'FTL_2_9_2_a' | 'FTL_2_9_2_c' | 'FULL' | 'IHT_AVTALE' | 'OPPHOR' | 'UNNTATT' | 'UDEFINERT';
    fom: string;
    kildeType: 'E500' | 'INFOTR' | 'AVGSYS' | 'APPBRK' | 'PP01' | 'FS22' | 'SRVGOSYS' | 'SRVMELOSYS' | 'MEDL' | 'TPS' | 'TP' | 'LAANEKASSEN' | 'ANNEN' | 'UDEFINERT';
    medlemskapType: 'ENDELIG' | 'FORELOPIG' | 'UNDER_AVKLARING' | 'UDEFINERT';
    tom: string;
};
export type dekningType = 'FTL_2_6' | 'FTL_2_7_a' | 'FTL_2_7_b' | 'FTL_2_9_1_a' | 'FTL_2_9_1_b' | 'FTL_2_9_1_c' | 'FTL_2_9_2_a' | 'FTL_2_9_2_c' | 'FULL' | 'IHT_AVTALE' | 'OPPHOR' | 'UNNTATT' | 'UDEFINERT';
export declare const dekningType: {
    readonly FTL_2_6: "FTL_2_6";
    readonly FTL_2_7_A: "FTL_2_7_a";
    readonly FTL_2_7_B: "FTL_2_7_b";
    readonly FTL_2_9_1_A: "FTL_2_9_1_a";
    readonly FTL_2_9_1_B: "FTL_2_9_1_b";
    readonly FTL_2_9_1_C: "FTL_2_9_1_c";
    readonly FTL_2_9_2_A: "FTL_2_9_2_a";
    readonly FTL_2_9_2_C: "FTL_2_9_2_c";
    readonly FULL: "FULL";
    readonly IHT_AVTALE: "IHT_AVTALE";
    readonly OPPHOR: "OPPHOR";
    readonly UNNTATT: "UNNTATT";
    readonly UDEFINERT: "UDEFINERT";
};
export type kildeType = 'E500' | 'INFOTR' | 'AVGSYS' | 'APPBRK' | 'PP01' | 'FS22' | 'SRVGOSYS' | 'SRVMELOSYS' | 'MEDL' | 'TPS' | 'TP' | 'LAANEKASSEN' | 'ANNEN' | 'UDEFINERT';
export declare const kildeType: {
    readonly E500: "E500";
    readonly INFOTR: "INFOTR";
    readonly AVGSYS: "AVGSYS";
    readonly APPBRK: "APPBRK";
    readonly PP01: "PP01";
    readonly FS22: "FS22";
    readonly SRVGOSYS: "SRVGOSYS";
    readonly SRVMELOSYS: "SRVMELOSYS";
    readonly MEDL: "MEDL";
    readonly TPS: "TPS";
    readonly TP: "TP";
    readonly LAANEKASSEN: "LAANEKASSEN";
    readonly ANNEN: "ANNEN";
    readonly UDEFINERT: "UDEFINERT";
};
export type medlemskapType = 'ENDELIG' | 'FORELOPIG' | 'UNDER_AVKLARING' | 'UDEFINERT';
export declare const medlemskapType: {
    readonly ENDELIG: "ENDELIG";
    readonly FORELOPIG: "FORELOPIG";
    readonly UNDER_AVKLARING: "UNDER_AVKLARING";
    readonly UDEFINERT: "UDEFINERT";
};
export type MerknadEndretDto = {
    behandlingUuid: string;
    fritekst?: string;
    merknadKoder?: Array<(string)>;
    saksbehandlerIdent?: string;
};
export type MidlertidigAleneOmOmsorgen = Rammevedtak & {
    gyldigFraOgMed?: string;
    gyldigTilOgMed?: string;
    lengde?: {
        nano?: number;
        negative?: boolean;
        positive?: boolean;
        seconds?: number;
        units?: Array<{
            dateBased?: boolean;
            duration?: {
                nano?: number;
                negative?: boolean;
                positive?: boolean;
                seconds?: number;
                zero?: boolean;
            };
            durationEstimated?: boolean;
            timeBased?: boolean;
        }>;
        zero?: boolean;
    };
    vedtatt?: string;
};
export type MigrerFraInfotrygdDto = {
    saksnummer: string;
    skjæringstidspunkt: string;
};
export type MigrertSkjæringstidspunktDto = {
    erAktiv: boolean;
    skjæringstidspunkt: string;
};
export type MottakerDto = {
    id: string;
    type: string;
};
export type MottattInntektsmeldingDto = {
    begrunnelse?: string;
    journalpostId: string;
    mottattTidspunkt: string;
    status: 'MOTTATT' | 'BEHANDLER' | 'GYLDIG' | 'HENLAGT' | 'UGYLDIG';
};
export type status6 = 'MOTTATT' | 'BEHANDLER' | 'GYLDIG' | 'HENLAGT' | 'UGYLDIG';
export declare const status6: {
    readonly MOTTATT: "MOTTATT";
    readonly BEHANDLER: "BEHANDLER";
    readonly GYLDIG: "GYLDIG";
    readonly HENLAGT: "HENLAGT";
    readonly UGYLDIG: "UGYLDIG";
};
export type NattevåkDto = {
    beskrivelser?: Array<BeskrivelseDto>;
    vurderinger?: Array<VurderingDto>;
};
export type NaturalYtelse = {
    beloepPerMnd?: Beløp;
    indexKey?: string;
    periode?: DatoIntervallEntitet;
    type?: 'ELEKTRISK_KOMMUNIKASJON' | 'AKSJER_UNDERKURS' | 'LOSJI' | 'KOST_DOEGN' | 'BESOEKSREISER_HJEM' | 'KOSTBESPARELSE_HJEM' | 'RENTEFORDEL_LAAN' | 'BIL' | 'KOST_DAGER' | 'BOLIG' | 'FORSIKRINGER' | 'FRI_TRANSPORT' | 'OPSJONER' | 'TILSKUDD_BARNEHAGE' | 'ANNET' | 'BEDRIFTSBARNEHAGE' | 'YRKESBIL_KILOMETER' | 'YRKESBIL_LISTEPRIS' | 'UTENLANDSK_PENSJONSORDNING' | '-';
};
export type type6 = 'ELEKTRISK_KOMMUNIKASJON' | 'AKSJER_UNDERKURS' | 'LOSJI' | 'KOST_DOEGN' | 'BESOEKSREISER_HJEM' | 'KOSTBESPARELSE_HJEM' | 'RENTEFORDEL_LAAN' | 'BIL' | 'KOST_DAGER' | 'BOLIG' | 'FORSIKRINGER' | 'FRI_TRANSPORT' | 'OPSJONER' | 'TILSKUDD_BARNEHAGE' | 'ANNET' | 'BEDRIFTSBARNEHAGE' | 'YRKESBIL_KILOMETER' | 'YRKESBIL_LISTEPRIS' | 'UTENLANDSK_PENSJONSORDNING' | '-';
export declare const type6: {
    readonly ELEKTRISK_KOMMUNIKASJON: "ELEKTRISK_KOMMUNIKASJON";
    readonly AKSJER_UNDERKURS: "AKSJER_UNDERKURS";
    readonly LOSJI: "LOSJI";
    readonly KOST_DOEGN: "KOST_DOEGN";
    readonly BESOEKSREISER_HJEM: "BESOEKSREISER_HJEM";
    readonly KOSTBESPARELSE_HJEM: "KOSTBESPARELSE_HJEM";
    readonly RENTEFORDEL_LAAN: "RENTEFORDEL_LAAN";
    readonly BIL: "BIL";
    readonly KOST_DAGER: "KOST_DAGER";
    readonly BOLIG: "BOLIG";
    readonly FORSIKRINGER: "FORSIKRINGER";
    readonly FRI_TRANSPORT: "FRI_TRANSPORT";
    readonly OPSJONER: "OPSJONER";
    readonly TILSKUDD_BARNEHAGE: "TILSKUDD_BARNEHAGE";
    readonly ANNET: "ANNET";
    readonly BEDRIFTSBARNEHAGE: "BEDRIFTSBARNEHAGE";
    readonly YRKESBIL_KILOMETER: "YRKESBIL_KILOMETER";
    readonly YRKESBIL_LISTEPRIS: "YRKESBIL_LISTEPRIS";
    readonly UTENLANDSK_PENSJONSORDNING: "UTENLANDSK_PENSJONSORDNING";
    readonly _: "-";
};
export type NaturalYtelseDto = {
    beløp?: number;
    periode?: Periode;
    type?: 'ELEKTRISK_KOMMUNIKASJON' | 'AKSJER_UNDERKURS' | 'LOSJI' | 'KOST_DOEGN' | 'BESOEKSREISER_HJEM' | 'KOSTBESPARELSE_HJEM' | 'RENTEFORDEL_LAAN' | 'BIL' | 'KOST_DAGER' | 'BOLIG' | 'FORSIKRINGER' | 'FRI_TRANSPORT' | 'OPSJONER' | 'TILSKUDD_BARNEHAGE' | 'ANNET' | 'BEDRIFTSBARNEHAGE' | 'YRKESBIL_KILOMETER' | 'YRKESBIL_LISTEPRIS' | 'UTENLANDSK_PENSJONSORDNING' | '-';
};
export type NyBehandlingDto = {
    behandlingArsakType: 'RE-MF' | 'RE-MFIP' | 'RE-AVAB' | 'RE-LOV' | 'RE-RGLF' | 'RE-FEFAKTA' | 'RE-PRSSL' | 'RE-END-FRA-BRUKER' | 'RE-FRAVÆRKORR-SAKSB' | 'RE-END-INNTEKTSMELD' | 'BERØRT-BEHANDLING' | 'RE-ANNET' | 'RE-SATS-REGULERING' | 'RE-ENDRET-FORDELING' | 'INFOBREV_BEHANDLING' | 'INFOBREV_OPPHOLD' | 'RE-KLAG-U-INNTK' | 'RE-KLAG-M-INNTK' | 'RE-MDL' | 'RE-OPTJ' | 'RE-FRDLING' | 'RE-INNTK' | 'RE-DØD' | 'RE-SRTB' | 'RE-FRIST' | 'RE-BER-GRUN' | 'RE-KLAG-INNH-PGI' | 'ETTER_KLAGE' | 'RE-HENDELSE-FØDSEL' | 'RE-HENDELSE-DØD-F' | 'RE-HENDELSE-DØD-B' | 'RE-HENDELSE-DØDFØD' | 'RE-REGISTEROPPL' | 'RE-YTELSE' | 'RE-TILST-YT-INNVIL' | 'RE-ENDR-BER-GRUN' | 'RE-TILST-YT-OPPH' | 'RE_REBEREGN_FP' | 'RE_ANNEN_SAK' | 'RE_UTSATT_BEHANDLING' | 'RE_GJENOPPTAR_UTSATT_BEHANDLING' | 'RE_ANNEN_SAK_ET' | 'RE_ANNEN_SAK_NB' | 'RE_ANNEN_SAK_S' | 'RE_ANNEN_SAK_NB_ET' | 'RE_ANNEN_SAK_S_ET' | 'RE_ANNEN_SAK_S_NB' | 'RE_ANNEN_SAK_S_ET_NB' | 'RE_ANNEN_SAK_FP' | 'UNNT_GENERELL' | 'REVURDERER_BERØRT_PERIODE' | '-';
    behandlingType: 'BT-002' | 'BT-004' | 'BT-010' | '-';
    nyBehandlingEtterKlage?: boolean;
    saksnummer: string;
};
export type NyPeriodeDto = {
    erGradering?: boolean;
    erRefusjon?: boolean;
    erSøktYtelse?: boolean;
    fom?: string;
    tom?: string;
};
export type NødvendigOpplæringDto = {
    perioder: Array<NødvendighetPeriodeDto>;
    vurderinger: Array<NødvendighetVurderingDto>;
};
export type NødvendighetPeriodeDto = {
    journalpostId: JournalpostIdDto;
    periode: Periode;
};
export type NødvendighetVurderingDto = {
    begrunnelse: string;
    journalpostId: JournalpostIdDto;
    perioder: Array<Periode>;
    resultat: 'MÅ_VURDERES' | 'GODKJENT' | 'IKKE_GODKJENT';
    tilknyttedeDokumenter: Array<(string)>;
    vurdertAv: string;
    vurdertTidspunkt: string;
};
export type resultat2 = 'MÅ_VURDERES' | 'GODKJENT' | 'IKKE_GODKJENT';
export declare const resultat2: {
    readonly MÅ_VURDERES: "MÅ_VURDERES";
    readonly GODKJENT: "GODKJENT";
    readonly IKKE_GODKJENT: "IKKE_GODKJENT";
};
export type Nøkkeltall = {
    antallDagerArbeidsgiverDekker?: number;
    antallDagerFraværRapporterSomNyoppstaret?: number;
    antallDagerFraværRapportertSomNyoppstartet?: number;
    antallDagerInfotrygd?: number;
    antallForbrukteDager?: number;
    antallKoronadager?: number;
    forbruktTid?: {
        nano?: number;
        negative?: boolean;
        positive?: boolean;
        seconds?: number;
        units?: Array<{
            dateBased?: boolean;
            duration?: {
                nano?: number;
                negative?: boolean;
                positive?: boolean;
                seconds?: number;
                zero?: boolean;
            };
            durationEstimated?: boolean;
            timeBased?: boolean;
        }>;
        zero?: boolean;
    };
    migrertData?: boolean;
    restTid?: {
        nano?: number;
        negative?: boolean;
        positive?: boolean;
        seconds?: number;
        units?: Array<{
            dateBased?: boolean;
            duration?: {
                nano?: number;
                negative?: boolean;
                positive?: boolean;
                seconds?: number;
                zero?: boolean;
            };
            durationEstimated?: boolean;
            timeBased?: boolean;
        }>;
        zero?: boolean;
    };
    smittevernTid?: {
        nano?: number;
        negative?: boolean;
        positive?: boolean;
        seconds?: number;
        units?: Array<{
            dateBased?: boolean;
            duration?: {
                nano?: number;
                negative?: boolean;
                positive?: boolean;
                seconds?: number;
                zero?: boolean;
            };
            durationEstimated?: boolean;
            timeBased?: boolean;
        }>;
        zero?: boolean;
    };
    totaltAntallDager?: number;
};
export type OmsorgenForDto = {
    begrunnelse?: string;
    periode?: Periode;
    readOnly?: boolean;
    relasjon?: 'MOR' | 'MEDMOR' | 'FAR' | 'FOSTERFORELDER' | 'ANNET';
    relasjonsbeskrivelse?: string;
    resultat?: 'OPPFYLT' | 'IKKE_OPPFYLT' | 'IKKE_VURDERT';
    resultatEtterAutomatikk?: 'OPPFYLT' | 'IKKE_OPPFYLT' | 'IKKE_VURDERT';
    vurdertAv?: string;
    vurdertTidspunkt?: string;
};
export type relasjon = 'MOR' | 'MEDMOR' | 'FAR' | 'FOSTERFORELDER' | 'ANNET';
export declare const relasjon: {
    readonly MOR: "MOR";
    readonly MEDMOR: "MEDMOR";
    readonly FAR: "FAR";
    readonly FOSTERFORELDER: "FOSTERFORELDER";
    readonly ANNET: "ANNET";
};
export type resultat3 = 'OPPFYLT' | 'IKKE_OPPFYLT' | 'IKKE_VURDERT';
export declare const resultat3: {
    readonly OPPFYLT: "OPPFYLT";
    readonly IKKE_OPPFYLT: "IKKE_OPPFYLT";
    readonly IKKE_VURDERT: "IKKE_VURDERT";
};
export type resultatEtterAutomatikk = 'OPPFYLT' | 'IKKE_OPPFYLT' | 'IKKE_VURDERT';
export declare const resultatEtterAutomatikk: {
    readonly OPPFYLT: "OPPFYLT";
    readonly IKKE_OPPFYLT: "IKKE_OPPFYLT";
    readonly IKKE_VURDERT: "IKKE_VURDERT";
};
export type OmsorgenForOversiktDto = {
    kanLøseAksjonspunkt?: boolean;
    omsorgsperioder?: Array<OmsorgenForDto>;
    registrertForeldrerelasjon?: boolean;
    registrertSammeBosted?: boolean;
    sammeBosted?: boolean;
    tvingManuellVurdering?: boolean;
};
export type OmsorgspengeGrunnlagDto = YtelsespesifiktGrunnlagDto & {
    skalAvviksvurdere?: boolean;
};
export type OmsorgspengerGrunnlag = YtelsespesifiktGrunnlagDto & {
    søktePerioder?: Array<SøktPeriode>;
    utbetalingsgradPrAktivitet?: Array<UtbetalingsgradPrAktivitetDto>;
} & {
    utbetalingsgradPrAktivitet: Array<UtbetalingsgradPrAktivitetDto>;
};
export type OppgaveIdDto = {
    verdi?: string;
};
export type OppgittArbeidsforholdDto = {
    inntekt: number;
    periode: Periode;
};
export type OppgittEgenNæringDto = {
    aktør?: Aktør;
    begrunnelse?: string;
    bruttoInntekt?: number;
    endringDato?: string;
    nyIArbeidslivet: boolean;
    nyoppstartet: boolean;
    periode: Periode;
    varigEndring: boolean;
    virksomhetType?: 'DAGMAMMA' | 'FISKE' | 'FRILANSER' | 'JORDBRUK_SKOGBRUK' | 'ANNEN' | '-';
};
export type OppgittFrilansDto = {
    erNyoppstartet: boolean;
    oppgittFrilansInntekt?: Array<OppgittFrilansInntekt>;
};
export type OppgittFrilansInntekt = {
    inntekt: number;
    periode: Periode;
};
export type OppgittFrilansoppdragDto = {
    bruttoInntekt: Beløp;
    periode: PeriodeDto;
};
export type OppgittOpptjeningDto = {
    egenNæring?: Array<OppgittEgenNæringDto>;
    frilans?: OppgittFrilansDto;
    journalpostId?: string;
    oppgittArbeidsforhold?: Array<OppgittArbeidsforholdDto>;
};
export type OppgittTilknytningDto = {
    utlandsopphold?: Array<UtlandsoppholdDto>;
};
export type OppgittUttakDto = {
    aktiviteter?: Array<UttakAktivitetPeriodeDto>;
    behandlingUuid: string;
};
export type OpplystPeriodeDto = {
    fom: string;
    statusSøktFor: 'MIDL_INAKTIV' | 'AAP' | 'AT' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'FL' | 'MS' | 'SN' | 'AT_FL' | 'AT_SN' | 'FL_SN' | 'AT_FL_SN' | 'BA' | 'KUN_YTELSE' | 'TY' | 'VENTELØNN_VARTPENGER' | '-';
    tom: string;
};
export type OpplæringDokumentDto = {
    datert?: string;
    fremhevet?: boolean;
    id: string;
    links?: Array<ResourceLink>;
    type?: 'DOKUMENTASJON_AV_OPPLÆRING' | 'LEGEERKLÆRING_MED_DOKUMENTASJON_AV_OPPLÆRING';
};
export type type7 = 'DOKUMENTASJON_AV_OPPLÆRING' | 'LEGEERKLÆRING_MED_DOKUMENTASJON_AV_OPPLÆRING';
export declare const type7: {
    readonly DOKUMENTASJON_AV_OPPLÆRING: "DOKUMENTASJON_AV_OPPLÆRING";
    readonly LEGEERKLÆRING_MED_DOKUMENTASJON_AV_OPPLÆRING: "LEGEERKLÆRING_MED_DOKUMENTASJON_AV_OPPLÆRING";
};
export type OpplæringVurderingDto = {
    begrunnelse: string;
    opplæring: Periode;
    resultat: 'MÅ_VURDERES' | 'GODKJENT' | 'IKKE_GODKJENT';
    tilknyttedeDokumenter: Array<(string)>;
    vurdertAv: string;
    vurdertTidspunkt: string;
};
export type OpplæringspengerGrunnlag = YtelsespesifiktGrunnlagDto & {
    utbetalingsgradPrAktivitet?: Array<UtbetalingsgradPrAktivitetDto>;
} & {
    utbetalingsgradPrAktivitet: Array<UtbetalingsgradPrAktivitetDto>;
};
export type OpprettManuellRevurdering = {
    saksnumre: string;
};
export type OpprettManuellRevurderingBeregning = {
    saksnummerOgSkjæringstidspunkt: string;
};
export type OpprettNotatDto = {
    notatGjelderType: 'FAGSAK' | 'PLEIETRENGENDE';
    notatTekst: string;
    saksnummer: string;
};
export type notatGjelderType = 'FAGSAK' | 'PLEIETRENGENDE';
export declare const notatGjelderType: {
    readonly FAGSAK: "FAGSAK";
    readonly PLEIETRENGENDE: "PLEIETRENGENDE";
};
export type OpptjeningAktivitetDto = {
    aktivitetType?: 'AAP' | 'ARBEID' | 'DAGPENGER' | 'FORELDREPENGER' | 'FRILANS' | 'MILITÆR_ELLER_SIVILTJENESTE' | 'NÆRING' | 'OMSORGSPENGER' | 'OPPLÆRINGSPENGER' | 'PLEIEPENGER' | 'ETTERLØNN_SLUTTPAKKE' | 'SVANGERSKAPSPENGER' | 'SYKEPENGER' | 'SYKEPENGER_AV_DAGPENGER' | 'PLEIEPENGER_AV_DAGPENGER' | 'VENTELØNN_VARTPENGER' | 'VIDERE_ETTERUTDANNING' | 'UTENLANDSK_ARBEIDSFORHOLD' | 'FRISINN' | 'UTDANNINGSPERMISJON' | 'MELLOM_ARBEID' | '-';
    arbeidsforholdRef?: string;
    arbeidsgiver?: string;
    arbeidsgiverIdentifikator?: string;
    arbeidsgiverNavn?: string;
    begrunnelse?: string;
    erEndret?: boolean;
    erGodkjent?: boolean;
    erManueltOpprettet?: boolean;
    erPeriodeEndret?: boolean;
    naringRegistreringsdato?: string;
    oppdragsgiverOrg?: string;
    opptjeningFom?: string;
    opptjeningTom?: string;
    originalFom?: string;
    originalTom?: string;
    privatpersonFødselsdato?: string;
    privatpersonNavn?: string;
    stillingsandel?: number;
};
export type aktivitetType = 'AAP' | 'ARBEID' | 'DAGPENGER' | 'FORELDREPENGER' | 'FRILANS' | 'MILITÆR_ELLER_SIVILTJENESTE' | 'NÆRING' | 'OMSORGSPENGER' | 'OPPLÆRINGSPENGER' | 'PLEIEPENGER' | 'ETTERLØNN_SLUTTPAKKE' | 'SVANGERSKAPSPENGER' | 'SYKEPENGER' | 'SYKEPENGER_AV_DAGPENGER' | 'PLEIEPENGER_AV_DAGPENGER' | 'VENTELØNN_VARTPENGER' | 'VIDERE_ETTERUTDANNING' | 'UTENLANDSK_ARBEIDSFORHOLD' | 'FRISINN' | 'UTDANNINGSPERMISJON' | 'MELLOM_ARBEID' | '-';
export declare const aktivitetType: {
    readonly AAP: "AAP";
    readonly ARBEID: "ARBEID";
    readonly DAGPENGER: "DAGPENGER";
    readonly FORELDREPENGER: "FORELDREPENGER";
    readonly FRILANS: "FRILANS";
    readonly MILITÆR_ELLER_SIVILTJENESTE: "MILITÆR_ELLER_SIVILTJENESTE";
    readonly NÆRING: "NÆRING";
    readonly OMSORGSPENGER: "OMSORGSPENGER";
    readonly OPPLÆRINGSPENGER: "OPPLÆRINGSPENGER";
    readonly PLEIEPENGER: "PLEIEPENGER";
    readonly ETTERLØNN_SLUTTPAKKE: "ETTERLØNN_SLUTTPAKKE";
    readonly SVANGERSKAPSPENGER: "SVANGERSKAPSPENGER";
    readonly SYKEPENGER: "SYKEPENGER";
    readonly SYKEPENGER_AV_DAGPENGER: "SYKEPENGER_AV_DAGPENGER";
    readonly PLEIEPENGER_AV_DAGPENGER: "PLEIEPENGER_AV_DAGPENGER";
    readonly VENTELØNN_VARTPENGER: "VENTELØNN_VARTPENGER";
    readonly VIDERE_ETTERUTDANNING: "VIDERE_ETTERUTDANNING";
    readonly UTENLANDSK_ARBEIDSFORHOLD: "UTENLANDSK_ARBEIDSFORHOLD";
    readonly FRISINN: "FRISINN";
    readonly UTDANNINGSPERMISJON: "UTDANNINGSPERMISJON";
    readonly MELLOM_ARBEID: "MELLOM_ARBEID";
    readonly _: "-";
};
export type OpptjeningAktiviteterDto = {
    midlertidigInaktivType?: '8-47 A' | '8-47 B';
    perioder: Array<OpptjeningPeriodeDto>;
};
export type midlertidigInaktivType = '8-47 A' | '8-47 B';
export declare const midlertidigInaktivType: {
    readonly _8_47_A: "8-47 A";
    readonly _8_47_B: "8-47 B";
};
export type OpptjeningDto = {
    fastsattOpptjening?: FastsattOpptjeningDto;
    opptjeningAktivitetList?: Array<OpptjeningAktivitetDto>;
};
export type OpptjeningPeriodeDto = {
    dager?: number;
    måneder?: number;
};
export type OpptjeningerDto = {
    opptjeninger?: Array<OpptjeningDto>;
};
export type Organisasjon = Aktør & {
    ident?: string;
} & {
    ident: string;
};
export type OrganisasjonsEnhet = {
    enhetId?: string;
    enhetNavn?: string;
    status?: string;
};
export type OrganisasjonsnrDto = {
    organisasjonsnr: string;
};
export type OverføringFår = Rammevedtak & {
    avsender?: string;
    gyldigFraOgMed?: string;
    gyldigTilOgMed?: string;
    lengde?: {
        nano?: number;
        negative?: boolean;
        positive?: boolean;
        seconds?: number;
        units?: Array<{
            dateBased?: boolean;
            duration?: {
                nano?: number;
                negative?: boolean;
                positive?: boolean;
                seconds?: number;
                zero?: boolean;
            };
            durationEstimated?: boolean;
            timeBased?: boolean;
        }>;
        zero?: boolean;
    };
    vedtatt?: string;
};
export type OverføringGir = Rammevedtak & {
    gyldigFraOgMed?: string;
    gyldigTilOgMed?: string;
    lengde?: {
        nano?: number;
        negative?: boolean;
        positive?: boolean;
        seconds?: number;
        units?: Array<{
            dateBased?: boolean;
            duration?: {
                nano?: number;
                negative?: boolean;
                positive?: boolean;
                seconds?: number;
                zero?: boolean;
            };
            durationEstimated?: boolean;
            timeBased?: boolean;
        }>;
        zero?: boolean;
    };
    mottaker?: string;
    vedtatt?: string;
};
export type OverlappendeYtelseDto = {
    kilde: 'K9SAK' | 'FPSAK' | 'TPS' | 'VLSP' | 'JOARK' | 'INFOTRYGD' | 'ARENA' | 'INNTEKT' | 'MEDL' | 'GOSYS' | 'ENHETSREGISTERET' | 'AAREGISTERET' | '-';
    overlappendePerioder?: Array<OverlappendeYtelsePeriodeDto>;
    saksnummer?: string;
    ytelseType: 'DAG' | 'FRISINN' | 'SP' | 'PSB' | 'PPN' | 'OMP' | 'OMP_KS' | 'OMP_MA' | 'OMP_AO' | 'OLP' | 'AAP' | 'ES' | 'FP' | 'SVP' | 'EF' | 'OBSOLETE' | '-';
};
export type kilde3 = 'K9SAK' | 'FPSAK' | 'TPS' | 'VLSP' | 'JOARK' | 'INFOTRYGD' | 'ARENA' | 'INNTEKT' | 'MEDL' | 'GOSYS' | 'ENHETSREGISTERET' | 'AAREGISTERET' | '-';
export declare const kilde3: {
    readonly K9SAK: "K9SAK";
    readonly FPSAK: "FPSAK";
    readonly TPS: "TPS";
    readonly VLSP: "VLSP";
    readonly JOARK: "JOARK";
    readonly INFOTRYGD: "INFOTRYGD";
    readonly ARENA: "ARENA";
    readonly INNTEKT: "INNTEKT";
    readonly MEDL: "MEDL";
    readonly GOSYS: "GOSYS";
    readonly ENHETSREGISTERET: "ENHETSREGISTERET";
    readonly AAREGISTERET: "AAREGISTERET";
    readonly _: "-";
};
export type OverlappendeYtelsePeriodeDto = {
    fom: string;
    tom: string;
};
export type OverstyrBeregningAktivitet = {
    arbeidsgiverAktørId?: string;
    arbeidsgiverOrgnr?: string;
    inntektPrAar: number;
    opphørRefusjon?: string;
    orgnrEllerAktørid?: boolean;
    refusjonPrAar?: number;
    skalKunneEndreRefusjon?: boolean;
    startdatoRefusjon?: string;
    startdatoRefusjonFørOpphør?: boolean;
};
export type OverstyrBeregningInputPeriode = {
    aktivitetliste: Array<OverstyrBeregningAktivitet>;
    harKategoriFrilans?: boolean;
    harKategoriNæring?: boolean;
    skjaeringstidspunkt: string;
};
export type OverstyrUttakArbeidsforholdDto = {
    aktørId?: string;
    arbeidsforholdId?: string;
    orgnr?: string;
    type: 'AT' | 'SN' | 'FL' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'BA' | 'IKKE_YRKESAKTIV' | 'IKKE_YRKESAKTIV_UTEN_ERSTATNING' | 'MIDL_INAKTIV' | 'ANNET';
};
export type type8 = 'AT' | 'SN' | 'FL' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'BA' | 'IKKE_YRKESAKTIV' | 'IKKE_YRKESAKTIV_UTEN_ERSTATNING' | 'MIDL_INAKTIV' | 'ANNET';
export declare const type8: {
    readonly AT: "AT";
    readonly SN: "SN";
    readonly FL: "FL";
    readonly DP: "DP";
    readonly SP_AV_DP: "SP_AV_DP";
    readonly PSB_AV_DP: "PSB_AV_DP";
    readonly BA: "BA";
    readonly IKKE_YRKESAKTIV: "IKKE_YRKESAKTIV";
    readonly IKKE_YRKESAKTIV_UTEN_ERSTATNING: "IKKE_YRKESAKTIV_UTEN_ERSTATNING";
    readonly MIDL_INAKTIV: "MIDL_INAKTIV";
    readonly ANNET: "ANNET";
};
export type OverstyrUttakPeriodeDto = {
    begrunnelse: string;
    id?: number;
    periode: Periode;
    saksbehandler?: string;
    søkersUttaksgrad?: number;
    utbetalingsgrader?: Array<OverstyrUttakUtbetalingsgradDto>;
};
export type OverstyrUttakUtbetalingsgradDto = {
    arbeidsforhold: OverstyrUttakArbeidsforholdDto;
    utbetalingsgrad: number;
};
export type OverstyrbareAktiviteterForUttakRequest = {
    behandlingIdDto: string;
    fom: string;
    tom: string;
};
export type OverstyrbareUttakAktiviterDto = {
    arbeidsforholdsperioder: Array<OverstyrUttakArbeidsforholdDto>;
    arbeidsgiverOversikt: ArbeidsgiverOversiktDto;
};
export type OverstyringAksjonspunktDto = {
    avbrutt?: boolean;
    begrunnelse?: string;
    periode: Periode;
};
export type OverstyrtUttakDto = {
    arbeidsgiverOversikt: ArbeidsgiverOversiktDto;
    overstyringer: Array<OverstyrUttakPeriodeDto>;
};
export type PGIGrunnlagDto = {
    beløp?: number;
    pgiType: 'LØNN' | 'NÆRING' | '-';
};
export type pgiType = 'LØNN' | 'NÆRING' | '-';
export declare const pgiType: {
    readonly LØNN: "LØNN";
    readonly NÆRING: "NÆRING";
    readonly _: "-";
};
export type PGIPrÅrDto = {
    inntekter?: Array<PGIGrunnlagDto>;
    år: number;
};
export type Periode = {
    fom: string;
    tom: string;
};
export type PeriodeAndel = {
    periode: Periode;
    varighetPerDag?: {
        nano?: number;
        negative?: boolean;
        positive?: boolean;
        seconds?: number;
        units?: Array<{
            dateBased?: boolean;
            duration?: {
                nano?: number;
                negative?: boolean;
                positive?: boolean;
                seconds?: number;
                zero?: boolean;
            };
            durationEstimated?: boolean;
            timeBased?: boolean;
        }>;
        zero?: boolean;
    };
};
export type PeriodeDto = {
    fom: string;
    tom: string;
};
export type PeriodeMedRegisterendring = {
    periode: Periode;
};
export type PeriodeMedSNOgFLDto = {
    måned: PeriodeDto;
    oppgittIMåned?: OppgittOpptjeningDto;
    søkerFL: boolean;
    søkerSN: boolean;
};
export type PeriodeMedSøkerInfoDto = {
    periode: Periode;
    søkerFrilansIPeriode: boolean;
    søkerNæringIPeriode: boolean;
};
export type PeriodeMedUtbetalingsgradDto = {
    aktivitetsgrad?: number;
    periode: Periode;
    utbetalingsgrad: number;
};
export type PeriodeMedUtfall = {
    periode: Periode;
    utfall: 'IKKE_OPPFYLT' | 'IKKE_VURDERT' | 'OPPFYLT' | 'IKKE_RELEVANT' | 'UDEFINERT';
};
export type utfall = 'IKKE_OPPFYLT' | 'IKKE_VURDERT' | 'OPPFYLT' | 'IKKE_RELEVANT' | 'UDEFINERT';
export declare const utfall: {
    readonly IKKE_OPPFYLT: "IKKE_OPPFYLT";
    readonly IKKE_VURDERT: "IKKE_VURDERT";
    readonly OPPFYLT: "OPPFYLT";
    readonly IKKE_RELEVANT: "IKKE_RELEVANT";
    readonly UDEFINERT: "UDEFINERT";
};
export type PeriodeMedÅrsaker = {
    periode: Periode;
    årsaker?: Array<('MANUELT_REVURDERER_PERIODE' | 'REVURDERER_BERØRT_PERIODE' | 'ENDRING_FRA_BRUKER' | 'TRUKKET_KRAV' | 'REVURDERER_NY_INNTEKTSMELDING' | 'REVURDERER_ENDRING_FRA_ANNEN_PART' | 'REVURDERER_ENDRING_FERIEPENGER_ANNEN_SAK' | 'UTSATT_BEHANDLING' | 'GJENOPPTAR_UTSATT_BEHANDLING' | 'REVURDERER_SYKDOM_ENDRING_FRA_ANNEN_OMSORGSPERSON' | 'REVURDERER_ETABLERT_TILSYN_ENDRING_FRA_ANNEN_OMSORGSPERSON' | 'REVURDERER_NATTEVÅKBEREDSKAP_ENDRING_FRA_ANNEN_OMSORGSPERSON' | 'HENDELSE_DØD_BRUKER' | 'HENDELSE_DØD_PLEIETRENGENDE' | 'G_REGULERING' | 'REVURDERER_BEREGNING' | 'ENDRING_I_FORDELING' | 'FØRSTEGANGSVURDERING' | 'REVURDERER_LIGNET_INNTEKT')>;
};
export type PerioderForKrav = {
    innsendingsdato: string;
    refusjonsperioder: Array<Refusjonsperiode>;
};
export type PerioderMedÅrsakPerKravstiller = {
    arbeidsgiver?: Arbeidsgiver;
    kravstiller: 'BRUKER' | 'ARBEIDSGIVER';
    perioderMedÅrsak?: Array<PeriodeMedÅrsaker>;
};
export type kravstiller = 'BRUKER' | 'ARBEIDSGIVER';
export declare const kravstiller: {
    readonly BRUKER: "BRUKER";
    readonly ARBEIDSGIVER: "ARBEIDSGIVER";
};
export type PermisjonDto = {
    periode: Periode;
    permisjonsbeskrivelseType?: '-' | 'PERMISJON' | 'UTDANNINGSPERMISJON' | 'UTDANNINGSPERMISJON_IKKE_LOVFESTET' | 'UTDANNINGSPERMISJON_LOVFESTET' | 'VELFERDSPERMISJON' | 'ANNEN_PERMISJON_IKKE_LOVFESTET' | 'ANNEN_PERMISJON_LOVFESTET' | 'PERMISJON_MED_FORELDREPENGER' | 'PERMITTERING' | 'PERMISJON_VED_MILITÆRTJENESTE';
    prosentsats?: number;
};
export type permisjonsbeskrivelseType = '-' | 'PERMISJON' | 'UTDANNINGSPERMISJON' | 'UTDANNINGSPERMISJON_IKKE_LOVFESTET' | 'UTDANNINGSPERMISJON_LOVFESTET' | 'VELFERDSPERMISJON' | 'ANNEN_PERMISJON_IKKE_LOVFESTET' | 'ANNEN_PERMISJON_LOVFESTET' | 'PERMISJON_MED_FORELDREPENGER' | 'PERMITTERING' | 'PERMISJON_VED_MILITÆRTJENESTE';
export declare const permisjonsbeskrivelseType: {
    readonly _: "-";
    readonly PERMISJON: "PERMISJON";
    readonly UTDANNINGSPERMISJON: "UTDANNINGSPERMISJON";
    readonly UTDANNINGSPERMISJON_IKKE_LOVFESTET: "UTDANNINGSPERMISJON_IKKE_LOVFESTET";
    readonly UTDANNINGSPERMISJON_LOVFESTET: "UTDANNINGSPERMISJON_LOVFESTET";
    readonly VELFERDSPERMISJON: "VELFERDSPERMISJON";
    readonly ANNEN_PERMISJON_IKKE_LOVFESTET: "ANNEN_PERMISJON_IKKE_LOVFESTET";
    readonly ANNEN_PERMISJON_LOVFESTET: "ANNEN_PERMISJON_LOVFESTET";
    readonly PERMISJON_MED_FORELDREPENGER: "PERMISJON_MED_FORELDREPENGER";
    readonly PERMITTERING: "PERMITTERING";
    readonly PERMISJON_VED_MILITÆRTJENESTE: "PERMISJON_VED_MILITÆRTJENESTE";
};
export type PersonDto = {
    aktørId?: string;
    alder?: number;
    diskresjonskode?: string;
    dodsdato?: string;
    erDod?: boolean;
    erKvinne?: boolean;
    navn?: string;
    personnummer?: string;
    personstatusType?: 'ABNR' | 'ADNR' | 'BOSA' | 'DØD' | 'DØDD' | 'FOSV' | 'FØDR' | 'UFUL' | 'UREG' | 'UTAN' | 'UTPE' | 'UTVA' | '-';
};
export type PersonadresseDto = {
    adresseType: 'BOSTEDSADRESSE' | 'DELT_BOSTEDSADRESSE' | 'POSTADRESSE' | 'POSTADRESSE_UTLAND' | 'MIDLERTIDIG_POSTADRESSE_NORGE' | 'MIDLERTIDIG_POSTADRESSE_UTLAND' | 'UKJENT_ADRESSE';
    adresselinje1?: string;
    adresselinje2?: string;
    adresselinje3?: string;
    land: string;
    mottakerNavn?: string;
    postNummer?: string;
    poststed?: string;
};
export type adresseType = 'BOSTEDSADRESSE' | 'DELT_BOSTEDSADRESSE' | 'POSTADRESSE' | 'POSTADRESSE_UTLAND' | 'MIDLERTIDIG_POSTADRESSE_NORGE' | 'MIDLERTIDIG_POSTADRESSE_UTLAND' | 'UKJENT_ADRESSE';
export declare const adresseType: {
    readonly BOSTEDSADRESSE: "BOSTEDSADRESSE";
    readonly DELT_BOSTEDSADRESSE: "DELT_BOSTEDSADRESSE";
    readonly POSTADRESSE: "POSTADRESSE";
    readonly POSTADRESSE_UTLAND: "POSTADRESSE_UTLAND";
    readonly MIDLERTIDIG_POSTADRESSE_NORGE: "MIDLERTIDIG_POSTADRESSE_NORGE";
    readonly MIDLERTIDIG_POSTADRESSE_UTLAND: "MIDLERTIDIG_POSTADRESSE_UTLAND";
    readonly UKJENT_ADRESSE: "UKJENT_ADRESSE";
};
export type PersonopplysningDto = {
    adresser?: Array<PersonadresseDto>;
    aktoerId: string;
    annenPart?: PersonopplysningDto;
    avklartPersonstatus?: AvklartPersonstatus;
    barn?: Array<PersonopplysningDto>;
    barnSoktFor?: Array<PersonopplysningDto>;
    diskresjonskode?: 'UDEF' | 'URIK' | 'UFB' | 'SVAL' | 'SPSF' | 'SPFO' | 'PEND' | 'MILI' | 'KLIE';
    dodsdato?: string;
    ektefelle?: PersonopplysningDto;
    fnr: string;
    fodselsdato?: string;
    harVerge?: boolean;
    navBrukerKjonn?: 'K' | 'M' | '-';
    navn?: string;
    nummer?: number;
    personstatus?: 'ABNR' | 'ADNR' | 'BOSA' | 'DØD' | 'DØDD' | 'FOSV' | 'FØDR' | 'UFUL' | 'UREG' | 'UTAN' | 'UTPE' | 'UTVA' | '-';
    pleietrengendePart?: PersonopplysningDto;
    region?: 'NORDEN' | 'EOS' | 'ANNET' | '-';
    sivilstand?: 'ENKE' | 'GIFT' | 'GJPA' | 'GLAD' | 'NULL' | 'REPA' | 'SAMB' | 'SEPA' | 'SEPR' | 'SKIL' | 'SKPA' | 'UGIF';
    statsborgerskap?: Landkoder;
};
export type diskresjonskode = 'UDEF' | 'URIK' | 'UFB' | 'SVAL' | 'SPSF' | 'SPFO' | 'PEND' | 'MILI' | 'KLIE';
export declare const diskresjonskode: {
    readonly UDEF: "UDEF";
    readonly URIK: "URIK";
    readonly UFB: "UFB";
    readonly SVAL: "SVAL";
    readonly SPSF: "SPSF";
    readonly SPFO: "SPFO";
    readonly PEND: "PEND";
    readonly MILI: "MILI";
    readonly KLIE: "KLIE";
};
export type navBrukerKjonn = 'K' | 'M' | '-';
export declare const navBrukerKjonn: {
    readonly K: "K";
    readonly M: "M";
    readonly _: "-";
};
export type personstatus = 'ABNR' | 'ADNR' | 'BOSA' | 'DØD' | 'DØDD' | 'FOSV' | 'FØDR' | 'UFUL' | 'UREG' | 'UTAN' | 'UTPE' | 'UTVA' | '-';
export declare const personstatus: {
    readonly ABNR: "ABNR";
    readonly ADNR: "ADNR";
    readonly BOSA: "BOSA";
    readonly DØD: "DØD";
    readonly DØDD: "DØDD";
    readonly FOSV: "FOSV";
    readonly FØDR: "FØDR";
    readonly UFUL: "UFUL";
    readonly UREG: "UREG";
    readonly UTAN: "UTAN";
    readonly UTPE: "UTPE";
    readonly UTVA: "UTVA";
    readonly _: "-";
};
export type region = 'NORDEN' | 'EOS' | 'ANNET' | '-';
export declare const region: {
    readonly NORDEN: "NORDEN";
    readonly EOS: "EOS";
    readonly ANNET: "ANNET";
    readonly _: "-";
};
export type sivilstand = 'ENKE' | 'GIFT' | 'GJPA' | 'GLAD' | 'NULL' | 'REPA' | 'SAMB' | 'SEPA' | 'SEPR' | 'SKIL' | 'SKPA' | 'UGIF';
export declare const sivilstand: {
    readonly ENKE: "ENKE";
    readonly GIFT: "GIFT";
    readonly GJPA: "GJPA";
    readonly GLAD: "GLAD";
    readonly NULL: "NULL";
    readonly REPA: "REPA";
    readonly SAMB: "SAMB";
    readonly SEPA: "SEPA";
    readonly SEPR: "SEPR";
    readonly SKIL: "SKIL";
    readonly SKPA: "SKPA";
    readonly UGIF: "UGIF";
};
export type PersonopplysningPleietrengendeDto = {
    diagnosekoder?: Array<(string)>;
    dodsdato?: string;
    fnr?: string;
    navn?: string;
};
export type PgiDto = {
    beløp?: number;
    årstall?: number;
};
export type PipDto = {
    aktørIder: Array<(string)>;
    behandlingStatus?: string;
    fagsakStatus?: string;
};
export type PleiepengerNærståendeGrunnlag = YtelsespesifiktGrunnlagDto & {
    tilkommetInntektHensyntasFom?: string;
    utbetalingsgradPrAktivitet?: Array<UtbetalingsgradPrAktivitetDto>;
} & {
    utbetalingsgradPrAktivitet: Array<UtbetalingsgradPrAktivitetDto>;
};
export type PleiepengerSyktBarnGrunnlag = YtelsespesifiktGrunnlagDto & {
    tilkommetInntektHensyntasFom?: string;
    utbetalingsgradPrAktivitet?: Array<UtbetalingsgradPrAktivitetDto>;
} & {
    utbetalingsgradPrAktivitet: Array<UtbetalingsgradPrAktivitetDto>;
};
export type ProsessTaskDataDto = {
    gruppe: string;
    id: number;
    nesteKjøringEtter?: string;
    sekvens: string;
    sistKjørt?: string;
    sisteFeilKode?: string;
    status: string;
    taskType: string;
};
export type ProsessTaskGruppeIdDto = {
    gruppe?: string;
};
export type ProsessTaskOpprettInputDto = {
    taskParametre: {
        [key: string]: (string);
    };
    taskType: string;
};
/**
 * Informasjon for restart av en eksisterende prosesstask
 */
export type ProsessTaskRestartInputDto = {
    /**
     * Nåværende status. Angis hviss prosessen som skal restartes har en annen status enn KLAR.
     */
    inneværendeStatus: 'VENTER_SVAR, SUSPENDERT, FEILET';
    prosessTaskId: number;
};
/**
 * Nåværende status. Angis hviss prosessen som skal restartes har en annen status enn KLAR.
 */
export type inneværendeStatus = 'VENTER_SVAR, SUSPENDERT, FEILET';
/**
 * Nåværende status. Angis hviss prosessen som skal restartes har en annen status enn KLAR.
 */
export declare const inneværendeStatus: {
    readonly VENTER_SVAR__SUSPENDERT__FEILET: "VENTER_SVAR, SUSPENDERT, FEILET";
};
/**
 * Resultatet av asynkron-restart av en eksisterende prosesstask
 */
export type ProsessTaskRestartResultatDto = {
    /**
     * Kjøretidspunkt for restart av prosessen
     */
    nesteKjoeretidspunkt: string;
    prosessTaskId: number;
    /**
     * Nåværende status (KLAR)
     */
    prosessTaskStatus: string;
};
/**
 * Resultatet av asynkron-restart av feilede prosesstasks
 */
export type ProsessTaskRetryAllResultatDto = {
    /**
     * Prosesstasks som restartes
     */
    prosessTaskIds?: Array<(number)>;
};
/**
 * Informasjon for restart av en eksisterende prosesstask
 */
export type ProsessTaskSetFerdigInputDto = {
    /**
     * Nåværende status. Angis hviss prosessen som skal restartes har en annen status enn KLAR.
     */
    inneværendeStatus: 'VENTER_SVAR, SUSPENDERT, FEILET, VETO, KLAR';
    prosessTaskId: number;
};
/**
 * Nåværende status. Angis hviss prosessen som skal restartes har en annen status enn KLAR.
 */
export type inneværendeStatus2 = 'VENTER_SVAR, SUSPENDERT, FEILET, VETO, KLAR';
/**
 * Nåværende status. Angis hviss prosessen som skal restartes har en annen status enn KLAR.
 */
export declare const inneværendeStatus2: {
    readonly VENTER_SVAR__SUSPENDERT__FEILET__VETO__KLAR: "VENTER_SVAR, SUSPENDERT, FEILET, VETO, KLAR";
};
export type ProsessTaskStatusDto = {
    /**
     * Status som slås opp.
     */
    prosessTaskStatusName: 'FEILET, VENTER_SVAR, SUSPENDERT, VETO, KLAR';
};
/**
 * Status som slås opp.
 */
export type prosessTaskStatusName = 'FEILET, VENTER_SVAR, SUSPENDERT, VETO, KLAR';
/**
 * Status som slås opp.
 */
export declare const prosessTaskStatusName: {
    readonly FEILET__VENTER_SVAR__SUSPENDERT__VETO__KLAR: "FEILET, VENTER_SVAR, SUSPENDERT, VETO, KLAR";
};
export type PsbInfotrygdFødselsnumre = {
    fødselsnumre: string;
};
export type PåvirkedeSaker = {
    saksnummere: Array<SaksnummerDto>;
};
export type Rammevedtak = {
    type: string;
};
export type RammevedtakResponse = {
    rammevedtak?: Array<Rammevedtak>;
};
export type ReferanseDto = {
    referanse: string;
};
export type Refusjon = {
    fom?: string;
    indexKey?: string;
    refusjonsbeløp?: Beløp;
};
export type RefusjonAndelTilVurderingDto = {
    aktivitetStatus: 'MIDL_INAKTIV' | 'AAP' | 'AT' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'FL' | 'MS' | 'SN' | 'AT_FL' | 'AT_SN' | 'FL_SN' | 'AT_FL_SN' | 'BA' | 'KUN_YTELSE' | 'TY' | 'VENTELØNN_VARTPENGER' | '-';
    arbeidsgiver?: Arbeidsgiver;
    eksternArbeidsforholdRef?: string;
    fastsattDelvisRefusjonPrMnd?: number;
    fastsattNyttRefusjonskravFom?: string;
    internArbeidsforholdRef?: string;
    maksTillattDelvisRefusjonPrMnd?: number;
    nyttRefusjonskravFom?: string;
    skalKunneFastsetteDelvisRefusjon?: boolean;
    tidligereUtbetalinger?: Array<TidligereUtbetalingDto>;
    tidligsteMuligeRefusjonsdato?: string;
};
export type RefusjonDto = {
    fom?: string;
    refusjonsbeløpMnd?: number;
};
export type RefusjonTilVurderingDto = {
    andeler: Array<RefusjonAndelTilVurderingDto>;
};
export type RefusjonskravDatoDto = {
    arbeidsgiver: Aktør;
    førsteDagMedRefusjonskrav: string;
    førsteInnsendingAvRefusjonskrav: string;
    harRefusjonFraStart: boolean;
};
export type RefusjonskravSomKommerForSentDto = {
    arbeidsgiverIdent: string;
    erRefusjonskravGyldig?: boolean;
};
export type Refusjonsperiode = {
    beløp: number;
    periode: Periode;
};
export type ReisetidDto = {
    perioder: Array<ReisetidPeriodeDto>;
    vurderinger: Array<ReisetidVurderingDto>;
};
export type ReisetidPeriodeDto = {
    beskrivelseFraSoekerHjem?: string;
    beskrivelseFraSoekerTil?: string;
    opplæringPeriode: Periode;
    reisetidHjem: Periode;
    reisetidTil: Periode;
};
export type ReisetidPeriodeVurderingDto = {
    begrunnelse: string;
    periode: Periode;
    resultat: 'MÅ_VURDERES' | 'GODKJENT' | 'GODKJENT_AUTOMATISK' | 'IKKE_GODKJENT';
    vurdertAv: string;
    vurdertTidspunkt: string;
};
export type resultat4 = 'MÅ_VURDERES' | 'GODKJENT' | 'GODKJENT_AUTOMATISK' | 'IKKE_GODKJENT';
export declare const resultat4: {
    readonly MÅ_VURDERES: "MÅ_VURDERES";
    readonly GODKJENT: "GODKJENT";
    readonly GODKJENT_AUTOMATISK: "GODKJENT_AUTOMATISK";
    readonly IKKE_GODKJENT: "IKKE_GODKJENT";
};
export type ReisetidVurderingDto = {
    opplæringPeriode: Periode;
    reisetidHjem: Array<ReisetidPeriodeVurderingDto>;
    reisetidTil: Array<ReisetidPeriodeVurderingDto>;
};
export type RelatertSakDto = {
    relaterteSøkere?: Array<RelatertSøkerDto>;
};
export type RelatertSøkerDto = {
    saksnummer: string;
    søkerIdent: string;
    søkerNavn: string;
    åpenBehandling: boolean;
};
export type ReserverSaksnummerDto = {
    behandlingsår?: string;
    brukerAktørId: string;
    pleietrengendeAktørId?: string;
    relatertPersonAktørId?: string;
    ytelseType: 'DAG' | 'FRISINN' | 'SP' | 'PSB' | 'PPN' | 'OMP' | 'OMP_KS' | 'OMP_MA' | 'OMP_AO' | 'OLP' | 'AAP' | 'ES' | 'FP' | 'SVP' | 'EF' | 'OBSOLETE' | '-';
};
export type ResourceLink = {
    href: string;
    rel: string;
    requestPayload?: {
        [key: string]: unknown;
    };
    type: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';
};
export type type9 = 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';
export declare const type9: {
    readonly DELETE: "DELETE";
    readonly GET: "GET";
    readonly PATCH: "PATCH";
    readonly POST: "POST";
    readonly PUT: "PUT";
};
export type RevurderPeriodeDto = {
    saksnummer: string;
    skjæringstidspunkt: string;
};
export type ReåpneBehandlingDto = {
    behandlingId: number;
    behandlingVersjon: number;
};
export type SakRettigheterDto = {
    behandlingTillatteOperasjoner?: Array<BehandlingOperasjonerDto>;
    behandlingTypeKanOpprettes?: Array<BehandlingOpprettingDto>;
    sakSkalTilInfotrygd?: boolean;
};
export type SaksbehandlerDto = {
    saksbehandlere?: {
        [key: string]: (string);
    };
};
export type SaksnummerDto = {
    saksnummer: string;
};
export type Saksopplysninger = {
    arbeidsforholdMedLønnsendring?: Array<ArbeidsforholdDto>;
    kortvarigeArbeidsforhold?: Array<ArbeidsforholdDto>;
    lønnsendringSaksopplysning?: Array<LønnsendringSaksopplysningDto>;
};
export type SammenligningsgrunnlagDto = {
    avvikPromille?: number;
    avvikProsent?: number;
    differanseBeregnet?: number;
    rapportertPrAar?: number;
    sammenligningsgrunnlagFom?: string;
    sammenligningsgrunnlagTom?: string;
    sammenligningsgrunnlagType?: 'SAMMENLIGNING_AT' | 'SAMMENLIGNING_FL' | 'SAMMENLIGNING_AT_FL' | 'SAMMENLIGNING_SN' | 'SAMMENLIGNING_ATFL_SN' | 'SAMMENLIGNING_MIDL_INAKTIV';
};
export type sammenligningsgrunnlagType = 'SAMMENLIGNING_AT' | 'SAMMENLIGNING_FL' | 'SAMMENLIGNING_AT_FL' | 'SAMMENLIGNING_SN' | 'SAMMENLIGNING_ATFL_SN' | 'SAMMENLIGNING_MIDL_INAKTIV';
export declare const sammenligningsgrunnlagType: {
    readonly SAMMENLIGNING_AT: "SAMMENLIGNING_AT";
    readonly SAMMENLIGNING_FL: "SAMMENLIGNING_FL";
    readonly SAMMENLIGNING_AT_FL: "SAMMENLIGNING_AT_FL";
    readonly SAMMENLIGNING_SN: "SAMMENLIGNING_SN";
    readonly SAMMENLIGNING_ATFL_SN: "SAMMENLIGNING_ATFL_SN";
    readonly SAMMENLIGNING_MIDL_INAKTIV: "SAMMENLIGNING_MIDL_INAKTIV";
};
export type SettBehandlingPaVentDto = {
    behandlingId: number;
    behandlingVersjon: number;
    frist?: string;
    ventearsak?: '-' | 'ANKE_OVERSENDT_TIL_TRYGDERETTEN' | 'ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER' | 'AVV_DOK' | 'AVV_IM_MOT_AAREG' | 'AVV_IM_MOT_SØKNAD_AT' | 'AVV_SØKNADSPERIODER' | 'AVV_FODSEL' | 'AVV_RESPONS_REVURDERING' | 'FOR_TIDLIG_SOKNAD' | 'GRADERING_FLERE_ARBEIDSFORHOLD' | 'REFUSJON_3_MÅNEDER' | 'SCANN' | 'UTV_FRIST' | 'VENT_FEIL_ENDRINGSSØKNAD' | 'VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG' | 'VENT_INFOTRYGD' | 'VENT_INNTEKT_RAPPORTERINGSFRIST' | 'VENT_MILITÆR_OG_BG_UNDER_3G' | 'VENT_OPDT_INNTEKTSMELDING' | 'VENT_OPPTJENING_OPPLYSNINGER' | 'VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID' | 'VENT_REGISTERINNHENTING' | 'VENT_PÅ_SISTE_AAP_MELDEKORT' | 'VENT_SØKNAD_SENDT_INFORMASJONSBREV' | 'VENT_TIDLIGERE_BEHANDLING' | 'VENT_ÅPEN_BEHANDLING' | 'VENT_MANGL_FUNKSJ_SAKSBEHANDLER' | 'VENTER_SVAR_PORTEN' | 'VENTER_SVAR_TEAMS' | 'ANDRE_INNTEKTSOPPLYSNINGER' | 'INNTEKTSMELDING' | 'LEGEERKLÆRING' | 'MEDISINSKE_OPPLYSNINGER' | 'ANNET' | 'VENTER_ETTERLYS_IM' | 'VENTER_ETTERLYS_IM_VARSEL' | 'OPPD_ÅPEN_BEH' | 'VENT_DEKGRAD_REGEL' | 'VENT_ØKONOMI' | 'VENT_TILBAKEKREVING' | 'VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER' | 'VENT_BEREGNING_TILBAKE_I_TID' | 'BRUKER_70ÅR_VED_REFUSJON' | 'VENT_LOVENDRING_8_41' | 'INGEN_PERIODE_UTEN_YTELSE' | 'PERIODE_MED_AVSLAG' | 'MANGLENDE_FUNKSJONALITET' | 'KORTVARIG_ARBEID' | 'FRISINN_ATFL_SAMME_ORG' | 'FRISINN_VARIANT_SN_MED_FL_INNTEKT' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT' | 'FRISINN_VARIANT_NY_FL' | 'FRISINN_VARIANT_NY_SN_2019' | 'FRISINN_VARIANT_NY_SN_2020' | 'FRISINN_VARIANT_KOMBINERT' | 'FRISINN_VARIANT_KOMBINERT_NY_FL' | 'FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2019' | 'FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2020' | 'FRISINN_VARIANT_KOMBINERT_NY_SN_2019' | 'FRISINN_VARIANT_KOMBINERT_NY_SN_2020' | 'FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2019' | 'FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2020' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2019' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2020' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2019' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2020' | 'FRISINN_VARIANT_ENDRET_INNTEKTSTYPE' | 'AVV_SOKN_IT_PERIODER' | 'AVV_SOKN_NAERING' | 'AVV_SOKN_FRILANS' | 'DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP' | 'AAP_DP_SISTE_10_MND_SVP' | 'FL_SN_IKKE_STOTTET_FOR_SVP';
    ventearsakVariant?: string;
};
export type ventearsak = '-' | 'ANKE_OVERSENDT_TIL_TRYGDERETTEN' | 'ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER' | 'AVV_DOK' | 'AVV_IM_MOT_AAREG' | 'AVV_IM_MOT_SØKNAD_AT' | 'AVV_SØKNADSPERIODER' | 'AVV_FODSEL' | 'AVV_RESPONS_REVURDERING' | 'FOR_TIDLIG_SOKNAD' | 'GRADERING_FLERE_ARBEIDSFORHOLD' | 'REFUSJON_3_MÅNEDER' | 'SCANN' | 'UTV_FRIST' | 'VENT_FEIL_ENDRINGSSØKNAD' | 'VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG' | 'VENT_INFOTRYGD' | 'VENT_INNTEKT_RAPPORTERINGSFRIST' | 'VENT_MILITÆR_OG_BG_UNDER_3G' | 'VENT_OPDT_INNTEKTSMELDING' | 'VENT_OPPTJENING_OPPLYSNINGER' | 'VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID' | 'VENT_REGISTERINNHENTING' | 'VENT_PÅ_SISTE_AAP_MELDEKORT' | 'VENT_SØKNAD_SENDT_INFORMASJONSBREV' | 'VENT_TIDLIGERE_BEHANDLING' | 'VENT_ÅPEN_BEHANDLING' | 'VENT_MANGL_FUNKSJ_SAKSBEHANDLER' | 'VENTER_SVAR_PORTEN' | 'VENTER_SVAR_TEAMS' | 'ANDRE_INNTEKTSOPPLYSNINGER' | 'INNTEKTSMELDING' | 'LEGEERKLÆRING' | 'MEDISINSKE_OPPLYSNINGER' | 'ANNET' | 'VENTER_ETTERLYS_IM' | 'VENTER_ETTERLYS_IM_VARSEL' | 'OPPD_ÅPEN_BEH' | 'VENT_DEKGRAD_REGEL' | 'VENT_ØKONOMI' | 'VENT_TILBAKEKREVING' | 'VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER' | 'VENT_BEREGNING_TILBAKE_I_TID' | 'BRUKER_70ÅR_VED_REFUSJON' | 'VENT_LOVENDRING_8_41' | 'INGEN_PERIODE_UTEN_YTELSE' | 'PERIODE_MED_AVSLAG' | 'MANGLENDE_FUNKSJONALITET' | 'KORTVARIG_ARBEID' | 'FRISINN_ATFL_SAMME_ORG' | 'FRISINN_VARIANT_SN_MED_FL_INNTEKT' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT' | 'FRISINN_VARIANT_NY_FL' | 'FRISINN_VARIANT_NY_SN_2019' | 'FRISINN_VARIANT_NY_SN_2020' | 'FRISINN_VARIANT_KOMBINERT' | 'FRISINN_VARIANT_KOMBINERT_NY_FL' | 'FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2019' | 'FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2020' | 'FRISINN_VARIANT_KOMBINERT_NY_SN_2019' | 'FRISINN_VARIANT_KOMBINERT_NY_SN_2020' | 'FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2019' | 'FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2020' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2019' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2020' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2019' | 'FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2020' | 'FRISINN_VARIANT_ENDRET_INNTEKTSTYPE' | 'AVV_SOKN_IT_PERIODER' | 'AVV_SOKN_NAERING' | 'AVV_SOKN_FRILANS' | 'DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP' | 'AAP_DP_SISTE_10_MND_SVP' | 'FL_SN_IKKE_STOTTET_FOR_SVP';
export declare const ventearsak: {
    readonly _: "-";
    readonly ANKE_OVERSENDT_TIL_TRYGDERETTEN: "ANKE_OVERSENDT_TIL_TRYGDERETTEN";
    readonly ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER: "ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER";
    readonly AVV_DOK: "AVV_DOK";
    readonly AVV_IM_MOT_AAREG: "AVV_IM_MOT_AAREG";
    readonly AVV_IM_MOT_SØKNAD_AT: "AVV_IM_MOT_SØKNAD_AT";
    readonly AVV_SØKNADSPERIODER: "AVV_SØKNADSPERIODER";
    readonly AVV_FODSEL: "AVV_FODSEL";
    readonly AVV_RESPONS_REVURDERING: "AVV_RESPONS_REVURDERING";
    readonly FOR_TIDLIG_SOKNAD: "FOR_TIDLIG_SOKNAD";
    readonly GRADERING_FLERE_ARBEIDSFORHOLD: "GRADERING_FLERE_ARBEIDSFORHOLD";
    readonly REFUSJON_3_MÅNEDER: "REFUSJON_3_MÅNEDER";
    readonly SCANN: "SCANN";
    readonly UTV_FRIST: "UTV_FRIST";
    readonly VENT_FEIL_ENDRINGSSØKNAD: "VENT_FEIL_ENDRINGSSØKNAD";
    readonly VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG: "VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG";
    readonly VENT_INFOTRYGD: "VENT_INFOTRYGD";
    readonly VENT_INNTEKT_RAPPORTERINGSFRIST: "VENT_INNTEKT_RAPPORTERINGSFRIST";
    readonly VENT_MILITÆR_OG_BG_UNDER_3G: "VENT_MILITÆR_OG_BG_UNDER_3G";
    readonly VENT_OPDT_INNTEKTSMELDING: "VENT_OPDT_INNTEKTSMELDING";
    readonly VENT_OPPTJENING_OPPLYSNINGER: "VENT_OPPTJENING_OPPLYSNINGER";
    readonly VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID: "VENT_PÅ_NY_INNTEKTSMELDING_MED_GYLDIG_ARB_ID";
    readonly VENT_REGISTERINNHENTING: "VENT_REGISTERINNHENTING";
    readonly VENT_PÅ_SISTE_AAP_MELDEKORT: "VENT_PÅ_SISTE_AAP_MELDEKORT";
    readonly VENT_SØKNAD_SENDT_INFORMASJONSBREV: "VENT_SØKNAD_SENDT_INFORMASJONSBREV";
    readonly VENT_TIDLIGERE_BEHANDLING: "VENT_TIDLIGERE_BEHANDLING";
    readonly VENT_ÅPEN_BEHANDLING: "VENT_ÅPEN_BEHANDLING";
    readonly VENT_MANGL_FUNKSJ_SAKSBEHANDLER: "VENT_MANGL_FUNKSJ_SAKSBEHANDLER";
    readonly VENTER_SVAR_PORTEN: "VENTER_SVAR_PORTEN";
    readonly VENTER_SVAR_TEAMS: "VENTER_SVAR_TEAMS";
    readonly ANDRE_INNTEKTSOPPLYSNINGER: "ANDRE_INNTEKTSOPPLYSNINGER";
    readonly INNTEKTSMELDING: "INNTEKTSMELDING";
    readonly LEGEERKLÆRING: "LEGEERKLÆRING";
    readonly MEDISINSKE_OPPLYSNINGER: "MEDISINSKE_OPPLYSNINGER";
    readonly ANNET: "ANNET";
    readonly VENTER_ETTERLYS_IM: "VENTER_ETTERLYS_IM";
    readonly VENTER_ETTERLYS_IM_VARSEL: "VENTER_ETTERLYS_IM_VARSEL";
    readonly OPPD_ÅPEN_BEH: "OPPD_ÅPEN_BEH";
    readonly VENT_DEKGRAD_REGEL: "VENT_DEKGRAD_REGEL";
    readonly VENT_ØKONOMI: "VENT_ØKONOMI";
    readonly VENT_TILBAKEKREVING: "VENT_TILBAKEKREVING";
    readonly VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER: "VENTELØNN_ELLER_MILITÆR_MED_FLERE_AKTIVITETER";
    readonly VENT_BEREGNING_TILBAKE_I_TID: "VENT_BEREGNING_TILBAKE_I_TID";
    readonly BRUKER_70ÅR_VED_REFUSJON: "BRUKER_70ÅR_VED_REFUSJON";
    readonly VENT_LOVENDRING_8_41: "VENT_LOVENDRING_8_41";
    readonly INGEN_PERIODE_UTEN_YTELSE: "INGEN_PERIODE_UTEN_YTELSE";
    readonly PERIODE_MED_AVSLAG: "PERIODE_MED_AVSLAG";
    readonly MANGLENDE_FUNKSJONALITET: "MANGLENDE_FUNKSJONALITET";
    readonly KORTVARIG_ARBEID: "KORTVARIG_ARBEID";
    readonly FRISINN_ATFL_SAMME_ORG: "FRISINN_ATFL_SAMME_ORG";
    readonly FRISINN_VARIANT_SN_MED_FL_INNTEKT: "FRISINN_VARIANT_SN_MED_FL_INNTEKT";
    readonly FRISINN_VARIANT_FL_MED_SN_INNTEKT: "FRISINN_VARIANT_FL_MED_SN_INNTEKT";
    readonly FRISINN_VARIANT_NY_FL: "FRISINN_VARIANT_NY_FL";
    readonly FRISINN_VARIANT_NY_SN_2019: "FRISINN_VARIANT_NY_SN_2019";
    readonly FRISINN_VARIANT_NY_SN_2020: "FRISINN_VARIANT_NY_SN_2020";
    readonly FRISINN_VARIANT_KOMBINERT: "FRISINN_VARIANT_KOMBINERT";
    readonly FRISINN_VARIANT_KOMBINERT_NY_FL: "FRISINN_VARIANT_KOMBINERT_NY_FL";
    readonly FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2019: "FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2019";
    readonly FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2020: "FRISINN_VARIANT_KOMBINERT_NY_FL_NY_SN_2020";
    readonly FRISINN_VARIANT_KOMBINERT_NY_SN_2019: "FRISINN_VARIANT_KOMBINERT_NY_SN_2019";
    readonly FRISINN_VARIANT_KOMBINERT_NY_SN_2020: "FRISINN_VARIANT_KOMBINERT_NY_SN_2020";
    readonly FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2019: "FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2019";
    readonly FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2020: "FRISINN_VARIANT_SN_MED_FL_INNTEKT_NY_SN_2020";
    readonly FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2019: "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2019";
    readonly FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2020: "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_SN_2020";
    readonly FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL: "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL";
    readonly FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2019: "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2019";
    readonly FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2020: "FRISINN_VARIANT_FL_MED_SN_INNTEKT_NY_FL_NY_SN_2020";
    readonly FRISINN_VARIANT_ENDRET_INNTEKTSTYPE: "FRISINN_VARIANT_ENDRET_INNTEKTSTYPE";
    readonly AVV_SOKN_IT_PERIODER: "AVV_SOKN_IT_PERIODER";
    readonly AVV_SOKN_NAERING: "AVV_SOKN_NAERING";
    readonly AVV_SOKN_FRILANS: "AVV_SOKN_FRILANS";
    readonly DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP: "DELVIS_TILRETTELEGGING_OG_REFUSJON_SVP";
    readonly AAP_DP_SISTE_10_MND_SVP: "AAP_DP_SISTE_10_MND_SVP";
    readonly FL_SN_IKKE_STOTTET_FOR_SVP: "FL_SN_IKKE_STOTTET_FOR_SVP";
};
export type Simulering = {
    forrigeUttaksplan?: Uttaksplan;
    simulertUttaksplan?: Uttaksplan;
    uttakplanEndret?: boolean;
};
export type SkjulNotatDto = {
    notatId: string;
    saksnummer: string;
    skjul: boolean;
    versjon: number;
};
export type Smittevern = Rammevedtak & {
    gyldigFraOgMed?: string;
    gyldigTilOgMed?: string;
    lengde?: {
        nano?: number;
        negative?: boolean;
        positive?: boolean;
        seconds?: number;
        units?: Array<{
            dateBased?: boolean;
            duration?: {
                nano?: number;
                negative?: boolean;
                positive?: boolean;
                seconds?: number;
                zero?: boolean;
            };
            durationEstimated?: boolean;
            timeBased?: boolean;
        }>;
        zero?: boolean;
    };
    vedtatt?: string;
};
export type SmørtEtablertTilsyn = {
    periode?: Periode;
    tidPerDag?: {
        nano?: number;
        negative?: boolean;
        positive?: boolean;
        seconds?: number;
        units?: Array<{
            dateBased?: boolean;
            duration?: {
                nano?: number;
                negative?: boolean;
                positive?: boolean;
                seconds?: number;
                zero?: boolean;
            };
            durationEstimated?: boolean;
            timeBased?: boolean;
        }>;
        zero?: boolean;
    };
};
export type Språkkode = {
    kode?: string;
    readonly kodeverk?: string;
};
export type StatusFilterDto = {
    prosessTaskStatuser?: Array<ProsessTaskStatusDto>;
};
export type StatusForPerioderPåBehandling = {
    dokumenterTilBehandling?: Array<KravDokumentMedSøktePerioder>;
    perioderMedRegisterendring?: Array<PeriodeMedRegisterendring>;
    perioderMedÅrsak?: Array<PeriodeMedÅrsaker>;
    perioderMedÅrsakPerKravstiller?: Array<PerioderMedÅrsakPerKravstiller>;
    perioderTilVurdering?: Array<Periode>;
    årsakMedPerioder?: Array<ÅrsakMedPerioder>;
};
export type StatusForPerioderPåBehandlingInkludertVilkår = {
    forrigeVedtak?: Array<PeriodeMedUtfall>;
    periodeMedUtfall?: Array<PeriodeMedUtfall>;
    perioderMedÅrsak: StatusForPerioderPåBehandling;
};
export type SvangerskapspengerGrunnlag = YtelsespesifiktGrunnlagDto & {
    tilkommetInntektHensyntasFom?: string;
    utbetalingsgradPrAktivitet?: Array<UtbetalingsgradPrAktivitetDto>;
} & {
    utbetalingsgradPrAktivitet: Array<UtbetalingsgradPrAktivitetDto>;
};
export type SvangerskapspengerGrunnlagDto = YtelsespesifiktGrunnlagDto;
export type SykdomAksjonspunktDto = {
    harDataSomIkkeHarBlittTattMedIBehandling?: boolean;
    harUklassifiserteDokumenter?: boolean;
    ikkeSammenMedBarnet?: boolean;
    kanLøseAksjonspunkt?: boolean;
    manglerDiagnosekode?: boolean;
    manglerGodkjentLegeerklæring?: boolean;
    manglerVurderingAvILivetsSluttfase?: boolean;
    manglerVurderingAvKontinuerligTilsynOgPleie?: boolean;
    manglerVurderingAvLangvarigSykdom?: boolean;
    manglerVurderingAvToOmsorgspersoner?: boolean;
    nyttDokumentHarIkkekontrollertEksisterendeVurderinger?: boolean;
};
export type SykdomDiagnosekoderDto = {
    behandlingUuid: string;
    diagnosekoder?: Array<(string)>;
    links?: Array<ResourceLink>;
    versjon?: string;
};
export type SykdomDokumentDto = {
    annenPartErKilde?: boolean;
    benyttet?: boolean;
    bruktTilMinstEnVurdering?: boolean;
    datert?: string;
    fremhevet?: boolean;
    id: string;
    links?: Array<ResourceLink>;
    type?: 'LEGEERKLÆRING_SYKEHUS' | 'MEDISINSKE_OPPLYSNINGER' | 'ANNET' | 'UKLASSIFISERT' | 'LEGEERKLÆRING_ANNEN' | 'LEGEERKLÆRING_MED_DOKUMENTASJON_AV_OPPLÆRING' | 'EPIKRISE' | 'FEILREGISTRERT';
};
export type SykdomDokumentEndringDto = {
    behandlingUuid: string;
    datert: string;
    duplikatAvId: string;
    id: string;
    type: 'LEGEERKLÆRING_SYKEHUS' | 'MEDISINSKE_OPPLYSNINGER' | 'ANNET' | 'UKLASSIFISERT' | 'LEGEERKLÆRING_ANNEN' | 'LEGEERKLÆRING_MED_DOKUMENTASJON_AV_OPPLÆRING' | 'EPIKRISE' | 'FEILREGISTRERT';
    versjon: string;
};
export type SykdomDokumentIdDto = {
    sykdomDokumentId: string;
};
export type SykdomDokumentOpprettelseDto = {
    behandlingUuid: string;
    harInfoSomIkkeKanPunsjes?: boolean;
    journalpostId: string;
};
export type SykdomDokumentOversikt = {
    dokumenter?: Array<SykdomDokumentOversiktElement>;
    links?: Array<ResourceLink>;
};
export type SykdomDokumentOversiktElement = {
    annenPartErKilde?: boolean;
    behandlet?: boolean;
    datert?: string;
    duplikatAvId?: string;
    duplikater?: Array<(string)>;
    id: string;
    links?: Array<ResourceLink>;
    mottattDato?: string;
    mottattTidspunkt?: string;
    type?: 'LEGEERKLÆRING_SYKEHUS' | 'MEDISINSKE_OPPLYSNINGER' | 'ANNET' | 'UKLASSIFISERT' | 'LEGEERKLÆRING_ANNEN' | 'LEGEERKLÆRING_MED_DOKUMENTASJON_AV_OPPLÆRING' | 'EPIKRISE' | 'FEILREGISTRERT';
    versjon: string;
};
export type SykdomDokumentUtkvitterEksisterendeVurderingerDto = {
    behandlingUuid: string;
    dokumenterSomSkalUtkvitteres?: Array<(string)>;
};
export type SykdomInnleggelseDto = {
    behandlingUuid: string;
    dryRun?: boolean;
    links?: Array<ResourceLink>;
    perioder?: Array<Periode>;
    versjon?: string;
};
export type SykdomInnleggelseOppdateringResultatDto = {
    førerTilRevurdering?: boolean;
};
export type SykdomPeriodeMedEndringDto = {
    endrerAnnenVurdering?: boolean;
    endrerVurderingSammeBehandling?: boolean;
    periode?: Periode;
};
export type SykdomVurderingAnnenInformasjon = {
    perioderSomKanVurderes?: Array<Periode>;
    resterendeVurderingsperioder?: Array<Periode>;
};
export type SykdomVurderingDto = {
    annenInformasjon?: SykdomVurderingAnnenInformasjon;
    id: string;
    type?: 'KONTINUERLIG_TILSYN_OG_PLEIE' | 'TO_OMSORGSPERSONER' | 'LIVETS_SLUTTFASE' | 'LANGVARIG_SYKDOM';
    versjoner?: Array<SykdomVurderingVersjonDto>;
};
export type type10 = 'KONTINUERLIG_TILSYN_OG_PLEIE' | 'TO_OMSORGSPERSONER' | 'LIVETS_SLUTTFASE' | 'LANGVARIG_SYKDOM';
export declare const type10: {
    readonly KONTINUERLIG_TILSYN_OG_PLEIE: "KONTINUERLIG_TILSYN_OG_PLEIE";
    readonly TO_OMSORGSPERSONER: "TO_OMSORGSPERSONER";
    readonly LIVETS_SLUTTFASE: "LIVETS_SLUTTFASE";
    readonly LANGVARIG_SYKDOM: "LANGVARIG_SYKDOM";
};
export type SykdomVurderingEndringDto = {
    behandlingUuid: string;
    dryRun?: boolean;
    id: string;
    perioder?: Array<Periode>;
    resultat?: 'OPPFYLT' | 'IKKE_OPPFYLT' | 'IKKE_VURDERT';
    tekst?: string;
    tilknyttedeDokumenter?: Array<(string)>;
    versjon: string;
};
export type SykdomVurderingEndringResultatDto = {
    perioderMedEndringer: Array<SykdomPeriodeMedEndringDto>;
};
export type SykdomVurderingIdDto = {
    sykdomVurderingId: string;
};
export type SykdomVurderingOpprettelseDto = {
    behandlingUuid: string;
    dryRun?: boolean;
    perioder?: Array<Periode>;
    resultat?: 'OPPFYLT' | 'IKKE_OPPFYLT' | 'IKKE_VURDERT';
    tekst?: string;
    tilknyttedeDokumenter?: Array<(string)>;
    type: 'KONTINUERLIG_TILSYN_OG_PLEIE' | 'TO_OMSORGSPERSONER' | 'LIVETS_SLUTTFASE' | 'LANGVARIG_SYKDOM';
};
export type SykdomVurderingOversikt = {
    harPerioderDerPleietrengendeErOver18år?: boolean;
    links?: Array<ResourceLink>;
    perioderSomKanVurderes?: Array<Periode>;
    pleietrengendesFødselsdato?: string;
    resterendeValgfrieVurderingsperioder?: Array<Periode>;
    resterendeVurderingsperioder?: Array<Periode>;
    søknadsperioderTilBehandling?: Array<Periode>;
    vurderingselementer?: Array<SykdomVurderingOversiktElement>;
};
export type SykdomVurderingOversiktElement = {
    endretIDenneBehandlingen?: boolean;
    erInnleggelsesperiode?: boolean;
    gjelderForAnnenPart?: boolean;
    gjelderForSøker?: boolean;
    id?: string;
    links?: Array<ResourceLink>;
    periode?: Periode;
    resultat?: 'OPPFYLT' | 'IKKE_OPPFYLT' | 'IKKE_VURDERT';
};
export type SykdomVurderingVersjonDto = {
    dokumenter?: Array<SykdomDokumentDto>;
    endretAv?: string;
    endretTidspunkt?: string;
    perioder?: Array<Periode>;
    resultat?: 'OPPFYLT' | 'IKKE_OPPFYLT' | 'IKKE_VURDERT';
    tekst?: string;
    versjon: string;
};
export type SystemNedeDto = {
    endepunkt?: string;
    feilmelding?: string;
    nedeFremTilTidspunkt?: string;
    stackTrace?: string;
    systemNavn: string;
};
export type SøkeSakEllerBrukerDto = {
    searchString: string;
};
export type SøknadDto = {
    angittePersoner?: Array<AngittPersonDto>;
    begrunnelseForSenInnsending?: string;
    manglendeVedlegg?: Array<ManglendeVedleggDto>;
    mottattDato: string;
    oppgittStartdato: string;
    oppgittTilknytning?: OppgittTilknytningDto;
    soknadsdato: string;
    spraakkode?: Språkkode;
    søknadsperiode?: Periode;
    tilleggsopplysninger?: string;
};
export type SøknadsfristPeriodeDto = {
    periode: Periode;
    status?: 'IKKE_OPPFYLT' | 'IKKE_VURDERT' | 'OPPFYLT' | 'IKKE_RELEVANT' | 'UDEFINERT';
};
export type status7 = 'IKKE_OPPFYLT' | 'IKKE_VURDERT' | 'OPPFYLT' | 'IKKE_RELEVANT' | 'UDEFINERT';
export declare const status7: {
    readonly IKKE_OPPFYLT: "IKKE_OPPFYLT";
    readonly IKKE_VURDERT: "IKKE_VURDERT";
    readonly OPPFYLT: "OPPFYLT";
    readonly IKKE_RELEVANT: "IKKE_RELEVANT";
    readonly UDEFINERT: "UDEFINERT";
};
export type SøknadsfristTilstandDto = {
    dokumentStatus: Array<KravDokumentStatus>;
};
export type SøknadsopplysningerDto = {
    erNyoppstartet?: boolean;
    oppgittInntekt?: number;
    oppgittÅrsinntekt?: number;
};
export type SøknadsperiodeOgOppgittOpptjeningV2Dto = {
    førSøkerPerioden: OppgittOpptjeningDto;
    måneder: Array<PeriodeMedSNOgFLDto>;
};
export type SøktPeriode = {
    arbeidsforholdRef?: string;
    arbeidsgiver?: Arbeidsgiver;
    periode: Periode;
    type?: 'AT' | 'SN' | 'FL' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'BA' | 'IKKE_YRKESAKTIV' | 'IKKE_YRKESAKTIV_UTEN_ERSTATNING' | 'MIDL_INAKTIV' | 'ANNET';
};
export type TidligereUtbetalingDto = {
    erTildeltRefusjon: boolean;
    fom: string;
    tom?: string;
};
export type TilbakekrevingValgDto = {
    erTilbakekrevingVilkårOppfylt: boolean;
    grunnerTilReduksjon?: boolean;
    varseltekst?: string;
    videreBehandling?: 'UDEFINIERT' | 'OPPRETT_TILBAKEKREVING' | 'IGNORER_TILBAKEKREVING' | 'INNTREKK' | 'TILBAKEKR_OPPDATER';
};
export type videreBehandling = 'UDEFINIERT' | 'OPPRETT_TILBAKEKREVING' | 'IGNORER_TILBAKEKREVING' | 'INNTREKK' | 'TILBAKEKR_OPPDATER';
export declare const videreBehandling: {
    readonly UDEFINIERT: "UDEFINIERT";
    readonly OPPRETT_TILBAKEKREVING: "OPPRETT_TILBAKEKREVING";
    readonly IGNORER_TILBAKEKREVING: "IGNORER_TILBAKEKREVING";
    readonly INNTREKK: "INNTREKK";
    readonly TILBAKEKR_OPPDATER: "TILBAKEKR_OPPDATER";
};
export type TilkjentYtelse = {
    perioder: Array<TilkjentYtelsePeriodeV1>;
};
export type TilkjentYtelseAndelV1 = {
    arbeidsforholdId?: string;
    arbeidsgiverAktoerId?: string;
    arbeidsgiverOrgNr?: string;
    feriepenger?: Array<TilkjentYtelseFeriepengerV1>;
    inntektskategori: 'ARBEIDSTAKER' | 'FRILANSER' | 'SELVSTENDIG_NÆRINGSDRIVENDE' | 'DAGPENGER' | 'ARBEIDSAVKLARINGSPENGER' | 'SJØMANN' | 'DAGMAMMA' | 'JORDBRUKER' | 'FISKER' | 'ARBEIDSTAKER_UTEN_FERIEPENGER' | '-';
    satsBeloep: number;
    satsType: 'DAG' | 'DAG7' | 'UKE' | 'MND' | 'AAR' | 'ENG' | 'AKTO' | '-';
    utbetalesTilBruker?: boolean;
    utbetalingsgrad: number;
};
export type satsType = 'DAG' | 'DAG7' | 'UKE' | 'MND' | 'AAR' | 'ENG' | 'AKTO' | '-';
export declare const satsType: {
    readonly DAG: "DAG";
    readonly DAG7: "DAG7";
    readonly UKE: "UKE";
    readonly MND: "MND";
    readonly AAR: "AAR";
    readonly ENG: "ENG";
    readonly AKTO: "AKTO";
    readonly _: "-";
};
export type TilkjentYtelseBehandlingInfoV1 = {
    aktoerId: string;
    ansvarligSaksbehandler?: string;
    behandlendeEnhet?: string;
    behandlingId: string;
    behandlingTidspunkt: string;
    doedsdatoBruker?: string;
    forrigeBehandlingId?: string;
    gjelderAdopsjon?: boolean;
    saksnummer: string;
    vedtaksdato: string;
    ytelseType: 'DAG' | 'SP' | 'FRISINN' | 'PSB' | 'PPN' | 'OMP' | 'OLP' | 'PS' | 'AAP' | 'ES' | 'FP' | 'SVP' | 'EF' | '-';
};
export type ytelseType2 = 'DAG' | 'SP' | 'FRISINN' | 'PSB' | 'PPN' | 'OMP' | 'OLP' | 'PS' | 'AAP' | 'ES' | 'FP' | 'SVP' | 'EF' | '-';
export declare const ytelseType2: {
    readonly DAG: "DAG";
    readonly SP: "SP";
    readonly FRISINN: "FRISINN";
    readonly PSB: "PSB";
    readonly PPN: "PPN";
    readonly OMP: "OMP";
    readonly OLP: "OLP";
    readonly PS: "PS";
    readonly AAP: "AAP";
    readonly ES: "ES";
    readonly FP: "FP";
    readonly SVP: "SVP";
    readonly EF: "EF";
    readonly _: "-";
};
export type TilkjentYtelseFeriepengerV1 = {
    beloep?: number;
    opptjeningsaar?: number;
};
export type TilkjentYtelseOppdrag = {
    behandlingsinfo: TilkjentYtelseBehandlingInfoV1;
    inntrekkBeslutning: InntrekkBeslutning;
    tilkjentYtelse: TilkjentYtelse;
};
export type TilkjentYtelsePeriodeV1 = {
    andeler: Array<TilkjentYtelseAndelV1>;
    periode: Periode;
};
export type TotrinnsArbeidsforholdDto = {
    arbeidsforholdHandlingType?: '-' | 'BRUK' | 'LAGT_TIL_AV_SAKSBEHANDLER' | 'BASERT_PÅ_INNTEKTSMELDING' | 'BRUK_UTEN_INNTEKTSMELDING' | 'IKKE_BRUK' | 'NYTT_ARBEIDSFORHOLD' | 'SLÅTT_SAMMEN_MED_ANNET' | 'BRUK_MED_OVERSTYRT_PERIODE' | 'INNTEKT_IKKE_MED_I_BG';
    arbeidsforholdId?: string;
    brukPermisjon?: boolean;
    navn: string;
    organisasjonsnummer?: string;
};
export type arbeidsforholdHandlingType = '-' | 'BRUK' | 'LAGT_TIL_AV_SAKSBEHANDLER' | 'BASERT_PÅ_INNTEKTSMELDING' | 'BRUK_UTEN_INNTEKTSMELDING' | 'IKKE_BRUK' | 'NYTT_ARBEIDSFORHOLD' | 'SLÅTT_SAMMEN_MED_ANNET' | 'BRUK_MED_OVERSTYRT_PERIODE' | 'INNTEKT_IKKE_MED_I_BG';
export declare const arbeidsforholdHandlingType: {
    readonly _: "-";
    readonly BRUK: "BRUK";
    readonly LAGT_TIL_AV_SAKSBEHANDLER: "LAGT_TIL_AV_SAKSBEHANDLER";
    readonly BASERT_PÅ_INNTEKTSMELDING: "BASERT_PÅ_INNTEKTSMELDING";
    readonly BRUK_UTEN_INNTEKTSMELDING: "BRUK_UTEN_INNTEKTSMELDING";
    readonly IKKE_BRUK: "IKKE_BRUK";
    readonly NYTT_ARBEIDSFORHOLD: "NYTT_ARBEIDSFORHOLD";
    readonly SLÅTT_SAMMEN_MED_ANNET: "SLÅTT_SAMMEN_MED_ANNET";
    readonly BRUK_MED_OVERSTYRT_PERIODE: "BRUK_MED_OVERSTYRT_PERIODE";
    readonly INNTEKT_IKKE_MED_I_BG: "INNTEKT_IKKE_MED_I_BG";
};
export type TotrinnsBeregningDto = {
    faktaOmBeregningTilfeller?: Array<('VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD' | 'VURDER_SN_NY_I_ARBEIDSLIVET' | 'VURDER_NYOPPSTARTET_FL' | 'FASTSETT_MAANEDSINNTEKT_FL' | 'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING' | 'VURDER_LØNNSENDRING' | 'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING' | 'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON' | 'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE' | 'VURDER_ETTERLØNN_SLUTTPAKKE' | 'FASTSETT_ETTERLØNN_SLUTTPAKKE' | 'VURDER_MOTTAR_YTELSE' | 'VURDER_BESTEBEREGNING' | 'VURDER_MILITÆR_SIVILTJENESTE' | 'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT' | 'FASTSETT_BG_KUN_YTELSE' | 'TILSTØTENDE_YTELSE' | 'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG' | 'UDEFINERT')>;
    fastsattVarigEndring?: boolean;
    fastsattVarigEndringNaering?: boolean;
    skjæringstidspunkt?: string;
};
export type TotrinnskontrollAksjonspunkterDto = {
    aksjonspunktKode?: string;
    arbeidsforholdDtos?: Array<TotrinnsArbeidsforholdDto>;
    beregningDto?: TotrinnsBeregningDto;
    beregningDtoer?: Array<TotrinnsBeregningDto>;
    besluttersBegrunnelse?: string;
    totrinnskontrollGodkjent?: boolean;
    vurderPaNyttArsaker?: Array<TotrinnskontrollVurderÅrsak>;
};
export type TotrinnskontrollSkjermlenkeContextDto = {
    skjermlenkeType: string;
    totrinnskontrollAksjonspunkter?: Array<TotrinnskontrollAksjonspunkterDto>;
};
export type TotrinnskontrollVurderÅrsak = {
    kode: string;
    navn: string;
};
export type UidentifisertRammevedtak = Rammevedtak & {
    fritekst?: string;
    gyldigFraOgMed?: string;
    gyldigTilOgMed?: string;
    vedtatt?: string;
};
export type UtbetalingDto = {
    arbeidsgiver?: Aktør;
    inntektsKilde: '-' | 'INNTEKT_OPPTJENING' | 'INNTEKT_BEREGNING' | 'INNTEKT_SAMMENLIGNING' | 'SIGRUN' | 'VANLIG';
    utbetalingsPoster: Array<UtbetalingsPostDto>;
};
export type inntektsKilde = '-' | 'INNTEKT_OPPTJENING' | 'INNTEKT_BEREGNING' | 'INNTEKT_SAMMENLIGNING' | 'SIGRUN' | 'VANLIG';
export declare const inntektsKilde: {
    readonly _: "-";
    readonly INNTEKT_OPPTJENING: "INNTEKT_OPPTJENING";
    readonly INNTEKT_BEREGNING: "INNTEKT_BEREGNING";
    readonly INNTEKT_SAMMENLIGNING: "INNTEKT_SAMMENLIGNING";
    readonly SIGRUN: "SIGRUN";
    readonly VANLIG: "VANLIG";
};
export type UtbetalingsPostDto = {
    beløp?: number;
    inntektYtelseType?: 'AAP' | 'DAGPENGER' | 'FORELDREPENGER' | 'SVANGERSKAPSPENGER' | 'SYKEPENGER' | 'OMSORGSPENGER' | 'OPPLÆRINGSPENGER' | 'PLEIEPENGER' | 'OVERGANGSSTØNAD_ENSLIG' | 'VENTELØNN' | 'FERIEPENGER_FORELDREPENGER' | 'FERIEPENGER_SVANGERSKAPSPENGER' | 'FERIEPENGER_OMSORGSPENGER' | 'FERIEPENGER_OPPLÆRINGSPENGER' | 'FERIEPENGER_PLEIEPENGER' | 'FERIEPENGER_SYKEPENGER' | 'FERIETILLEGG_DAGPENGER' | 'KVALIFISERINGSSTØNAD' | 'FORELDREPENGER_NÆRING' | 'SVANGERSKAPSPENGER_NÆRING' | 'SYKEPENGER_NÆRING' | 'OMSORGSPENGER_NÆRING' | 'OPPLÆRINGSPENGER_NÆRING' | 'PLEIEPENGER_NÆRING' | 'DAGPENGER_NÆRING' | 'ANNET' | 'VEDERLAG' | 'LOTT_KUN_TRYGDEAVGIFT' | 'KOMPENSASJON_FOR_TAPT_PERSONINNTEKT';
    inntektspostType: '-' | 'LØNN' | 'YTELSE' | 'VANLIG' | 'SELVSTENDIG_NÆRINGSDRIVENDE' | 'NÆRING_FISKE_FANGST_FAMBARNEHAGE';
    lønnsinntektBeskrivelse?: 'KOMMUNAL_OMSORGSLOENN_OG_FOSTERHJEMSGODTGJOERELSE' | '-';
    periode: Periode;
    skattAvgiftType?: 'SÆRSKILT_FRADRAG_FOR_SJØFOLK' | 'SVALBARD' | 'SKATTEFRI_ORGANISASJON' | 'NETTOLØNN_FOR_SJØFOLK' | 'NETTOLØNN' | 'KILDESKATT_PÅ_PENSJONER' | 'JAN_MAYEN_OG_BILANDENE' | '-';
};
export type inntektYtelseType = 'AAP' | 'DAGPENGER' | 'FORELDREPENGER' | 'SVANGERSKAPSPENGER' | 'SYKEPENGER' | 'OMSORGSPENGER' | 'OPPLÆRINGSPENGER' | 'PLEIEPENGER' | 'OVERGANGSSTØNAD_ENSLIG' | 'VENTELØNN' | 'FERIEPENGER_FORELDREPENGER' | 'FERIEPENGER_SVANGERSKAPSPENGER' | 'FERIEPENGER_OMSORGSPENGER' | 'FERIEPENGER_OPPLÆRINGSPENGER' | 'FERIEPENGER_PLEIEPENGER' | 'FERIEPENGER_SYKEPENGER' | 'FERIETILLEGG_DAGPENGER' | 'KVALIFISERINGSSTØNAD' | 'FORELDREPENGER_NÆRING' | 'SVANGERSKAPSPENGER_NÆRING' | 'SYKEPENGER_NÆRING' | 'OMSORGSPENGER_NÆRING' | 'OPPLÆRINGSPENGER_NÆRING' | 'PLEIEPENGER_NÆRING' | 'DAGPENGER_NÆRING' | 'ANNET' | 'VEDERLAG' | 'LOTT_KUN_TRYGDEAVGIFT' | 'KOMPENSASJON_FOR_TAPT_PERSONINNTEKT';
export declare const inntektYtelseType: {
    readonly AAP: "AAP";
    readonly DAGPENGER: "DAGPENGER";
    readonly FORELDREPENGER: "FORELDREPENGER";
    readonly SVANGERSKAPSPENGER: "SVANGERSKAPSPENGER";
    readonly SYKEPENGER: "SYKEPENGER";
    readonly OMSORGSPENGER: "OMSORGSPENGER";
    readonly OPPLÆRINGSPENGER: "OPPLÆRINGSPENGER";
    readonly PLEIEPENGER: "PLEIEPENGER";
    readonly OVERGANGSSTØNAD_ENSLIG: "OVERGANGSSTØNAD_ENSLIG";
    readonly VENTELØNN: "VENTELØNN";
    readonly FERIEPENGER_FORELDREPENGER: "FERIEPENGER_FORELDREPENGER";
    readonly FERIEPENGER_SVANGERSKAPSPENGER: "FERIEPENGER_SVANGERSKAPSPENGER";
    readonly FERIEPENGER_OMSORGSPENGER: "FERIEPENGER_OMSORGSPENGER";
    readonly FERIEPENGER_OPPLÆRINGSPENGER: "FERIEPENGER_OPPLÆRINGSPENGER";
    readonly FERIEPENGER_PLEIEPENGER: "FERIEPENGER_PLEIEPENGER";
    readonly FERIEPENGER_SYKEPENGER: "FERIEPENGER_SYKEPENGER";
    readonly FERIETILLEGG_DAGPENGER: "FERIETILLEGG_DAGPENGER";
    readonly KVALIFISERINGSSTØNAD: "KVALIFISERINGSSTØNAD";
    readonly FORELDREPENGER_NÆRING: "FORELDREPENGER_NÆRING";
    readonly SVANGERSKAPSPENGER_NÆRING: "SVANGERSKAPSPENGER_NÆRING";
    readonly SYKEPENGER_NÆRING: "SYKEPENGER_NÆRING";
    readonly OMSORGSPENGER_NÆRING: "OMSORGSPENGER_NÆRING";
    readonly OPPLÆRINGSPENGER_NÆRING: "OPPLÆRINGSPENGER_NÆRING";
    readonly PLEIEPENGER_NÆRING: "PLEIEPENGER_NÆRING";
    readonly DAGPENGER_NÆRING: "DAGPENGER_NÆRING";
    readonly ANNET: "ANNET";
    readonly VEDERLAG: "VEDERLAG";
    readonly LOTT_KUN_TRYGDEAVGIFT: "LOTT_KUN_TRYGDEAVGIFT";
    readonly KOMPENSASJON_FOR_TAPT_PERSONINNTEKT: "KOMPENSASJON_FOR_TAPT_PERSONINNTEKT";
};
export type inntektspostType2 = '-' | 'LØNN' | 'YTELSE' | 'VANLIG' | 'SELVSTENDIG_NÆRINGSDRIVENDE' | 'NÆRING_FISKE_FANGST_FAMBARNEHAGE';
export declare const inntektspostType2: {
    readonly _: "-";
    readonly LØNN: "LØNN";
    readonly YTELSE: "YTELSE";
    readonly VANLIG: "VANLIG";
    readonly SELVSTENDIG_NÆRINGSDRIVENDE: "SELVSTENDIG_NÆRINGSDRIVENDE";
    readonly NÆRING_FISKE_FANGST_FAMBARNEHAGE: "NÆRING_FISKE_FANGST_FAMBARNEHAGE";
};
export type lønnsinntektBeskrivelse = 'KOMMUNAL_OMSORGSLOENN_OG_FOSTERHJEMSGODTGJOERELSE' | '-';
export declare const lønnsinntektBeskrivelse: {
    readonly KOMMUNAL_OMSORGSLOENN_OG_FOSTERHJEMSGODTGJOERELSE: "KOMMUNAL_OMSORGSLOENN_OG_FOSTERHJEMSGODTGJOERELSE";
    readonly _: "-";
};
export type skattAvgiftType = 'SÆRSKILT_FRADRAG_FOR_SJØFOLK' | 'SVALBARD' | 'SKATTEFRI_ORGANISASJON' | 'NETTOLØNN_FOR_SJØFOLK' | 'NETTOLØNN' | 'KILDESKATT_PÅ_PENSJONER' | 'JAN_MAYEN_OG_BILANDENE' | '-';
export declare const skattAvgiftType: {
    readonly SÆRSKILT_FRADRAG_FOR_SJØFOLK: "SÆRSKILT_FRADRAG_FOR_SJØFOLK";
    readonly SVALBARD: "SVALBARD";
    readonly SKATTEFRI_ORGANISASJON: "SKATTEFRI_ORGANISASJON";
    readonly NETTOLØNN_FOR_SJØFOLK: "NETTOLØNN_FOR_SJØFOLK";
    readonly NETTOLØNN: "NETTOLØNN";
    readonly KILDESKATT_PÅ_PENSJONER: "KILDESKATT_PÅ_PENSJONER";
    readonly JAN_MAYEN_OG_BILANDENE: "JAN_MAYEN_OG_BILANDENE";
    readonly _: "-";
};
export type UtbetalingsgradPrAktivitetDto = {
    periodeMedUtbetalingsgrad: Array<PeriodeMedUtbetalingsgradDto>;
    utbetalingsgradArbeidsforholdDto: AktivitetDto;
};
export type Utbetalingsgrader = {
    arbeidsforhold?: Arbeidsforhold;
    faktiskArbeidstid?: {
        nano?: number;
        negative?: boolean;
        positive?: boolean;
        seconds?: number;
        units?: Array<{
            dateBased?: boolean;
            duration?: {
                nano?: number;
                negative?: boolean;
                positive?: boolean;
                seconds?: number;
                zero?: boolean;
            };
            durationEstimated?: boolean;
            timeBased?: boolean;
        }>;
        zero?: boolean;
    };
    normalArbeidstid?: {
        nano?: number;
        negative?: boolean;
        positive?: boolean;
        seconds?: number;
        units?: Array<{
            dateBased?: boolean;
            duration?: {
                nano?: number;
                negative?: boolean;
                positive?: boolean;
                seconds?: number;
                zero?: boolean;
            };
            durationEstimated?: boolean;
            timeBased?: boolean;
        }>;
        zero?: boolean;
    };
    tilkommet?: boolean;
    utbetalingsgrad?: number;
};
export type UtenlandskBarn = Rammevedtak & {
    barnetsFødselsdato?: string;
    fødselsdato?: string;
    gyldigFraOgMed?: string;
    gyldigTilOgMed?: string;
    lengde?: {
        nano?: number;
        negative?: boolean;
        positive?: boolean;
        seconds?: number;
        units?: Array<{
            dateBased?: boolean;
            duration?: {
                nano?: number;
                negative?: boolean;
                positive?: boolean;
                seconds?: number;
                zero?: boolean;
            };
            durationEstimated?: boolean;
            timeBased?: boolean;
        }>;
        zero?: boolean;
    };
    vedtatt?: string;
};
export type Utenlandsopphold = {
    erEøsLand?: boolean;
    landkode?: string;
    årsak?: 'BARNET_INNLAGT_I_HELSEINSTITUSJON_FOR_NORSK_OFFENTLIG_REGNING' | 'BARNET_INNLAGT_I_HELSEINSTITUSJON_DEKKET_ETTER_AVTALE_MED_ET_ANNET_LAND_OM_TRYGD' | 'INGEN';
};
export type årsak = 'BARNET_INNLAGT_I_HELSEINSTITUSJON_FOR_NORSK_OFFENTLIG_REGNING' | 'BARNET_INNLAGT_I_HELSEINSTITUSJON_DEKKET_ETTER_AVTALE_MED_ET_ANNET_LAND_OM_TRYGD' | 'INGEN';
export declare const årsak: {
    readonly BARNET_INNLAGT_I_HELSEINSTITUSJON_FOR_NORSK_OFFENTLIG_REGNING: "BARNET_INNLAGT_I_HELSEINSTITUSJON_FOR_NORSK_OFFENTLIG_REGNING";
    readonly BARNET_INNLAGT_I_HELSEINSTITUSJON_DEKKET_ETTER_AVTALE_MED_ET_ANNET_LAND_OM_TRYGD: "BARNET_INNLAGT_I_HELSEINSTITUSJON_DEKKET_ETTER_AVTALE_MED_ET_ANNET_LAND_OM_TRYGD";
    readonly INGEN: "INGEN";
};
export type UtenlandsoppholdDto = {
    perioder?: Array<UtenlandsoppholdPeriodeDto>;
};
export type UtenlandsoppholdPeriodeDto = {
    landkode?: Landkoder;
    periode?: string;
    region?: 'NORDEN' | 'EOS' | 'ANNET' | '-';
    årsak?: 'BARNET_INNLAGT_I_HELSEINSTITUSJON_FOR_NORSK_OFFENTLIG_REGNING' | 'BARNET_INNLAGT_I_HELSEINSTITUSJON_DEKKET_ETTER_AVTALE_MED_ET_ANNET_LAND_OM_TRYGD' | 'INGEN';
};
export type UtlandsoppholdDto = {
    fom: string;
    landNavn: string;
    tom: string;
};
export type UtsettelsePeriode = {
    indexKey?: string;
    periode?: DatoIntervallEntitet;
    årsak?: 'ARBEID' | 'LOVBESTEMT_FERIE' | 'SYKDOM' | 'INSTITUSJONSOPPHOLD_SØKER' | 'INSTITUSJONSOPPHOLD_BARNET' | '-';
};
export type årsak2 = 'ARBEID' | 'LOVBESTEMT_FERIE' | 'SYKDOM' | 'INSTITUSJONSOPPHOLD_SØKER' | 'INSTITUSJONSOPPHOLD_BARNET' | '-';
export declare const årsak2: {
    readonly ARBEID: "ARBEID";
    readonly LOVBESTEMT_FERIE: "LOVBESTEMT_FERIE";
    readonly SYKDOM: "SYKDOM";
    readonly INSTITUSJONSOPPHOLD_SØKER: "INSTITUSJONSOPPHOLD_SØKER";
    readonly INSTITUSJONSOPPHOLD_BARNET: "INSTITUSJONSOPPHOLD_BARNET";
    readonly _: "-";
};
export type UttakAktivitetPeriodeDto = {
    periode: string;
    type: 'AT' | 'SN' | 'FL' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'BA' | 'IKKE_YRKESAKTIV' | 'IKKE_YRKESAKTIV_UTEN_ERSTATNING' | 'MIDL_INAKTIV' | 'ANNET';
};
export type UttakArbeidsforhold = {
    aktørId?: string;
    arbeidsforholdId?: string;
    organisasjonsnummer?: string;
    type?: 'AT' | 'SN' | 'FL' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'BA' | 'IKKE_YRKESAKTIV' | 'IKKE_YRKESAKTIV_UTEN_ERSTATNING' | 'MIDL_INAKTIV' | 'ANNET';
};
export type UttakDto = {
    periode: Periode;
    utbetalingsgrad: number;
    utfall: 'INNVILGET' | 'AVSLÅTT' | 'UDEFINERT';
};
export type utfall2 = 'INNVILGET' | 'AVSLÅTT' | 'UDEFINERT';
export declare const utfall2: {
    readonly INNVILGET: "INNVILGET";
    readonly AVSLÅTT: "AVSLÅTT";
    readonly UDEFINERT: "UDEFINERT";
};
export type Uttaksperiode = {
    avvikImSøknad?: 'SØKNAD_UTEN_MATCHENDE_IM' | 'IM_REFUSJONSKRAV_TRUMFER_SØKNAD' | 'INGEN_AVVIK' | 'UDEFINERT';
    bekreftet?: 'UBEKREFTET' | 'SYSTEMBEKREFTET' | 'MANUELTBEKREFTET';
    delvisFravær?: {
        nano?: number;
        negative?: boolean;
        positive?: boolean;
        seconds?: number;
        units?: Array<{
            dateBased?: boolean;
            duration?: {
                nano?: number;
                negative?: boolean;
                positive?: boolean;
                seconds?: number;
                zero?: boolean;
            };
            durationEstimated?: boolean;
            timeBased?: boolean;
        }>;
        zero?: boolean;
    };
    fraværÅrsak?: 'STENGT_SKOLE_ELLER_BARNEHAGE' | 'SMITTEVERNHENSYN' | 'ORDINÆRT_FRAVÆR' | 'UDEFINERT';
    hjemler?: Array<('FTRL_9_3__1' | 'FTRL_9_5__1' | 'FTRL_9_5' | 'FTRL_9_5__2' | 'FTRL_9_5__3' | 'FTRL_9_6__1' | 'FTRL_9_6__2_OG_4' | 'FTRL_9_6__3' | 'FTRL_9_6__5' | 'FTRL_9_6__6' | 'FTRL_9_8_JF_8_10__3' | 'FTRL_9_7__1_3' | 'FTRL_9_7__4' | 'FTRL_9_8__3' | 'FTRL_9_9__1' | 'FTRL_25_16' | 'COVID19_1_2' | 'COVID19_4_3' | 'COVID19_4_1__2' | 'COVID19_4_1__2_OG_3' | 'COVID19_4_2' | 'COVID19_4_3__1' | 'COVID19_4_3__2')>;
    mottattTidspunkt?: string;
    nøkkeltall?: Nøkkeltall;
    omsorgenForManueltAvklartIk9?: boolean;
    opprinneligBehandlingUuid?: string;
    periode?: string;
    periodetype?: 'NY' | 'REVURDERT';
    refusjonTilArbeidsgiver?: boolean;
    søknadÅrsak?: 'ARBEIDSGIVER_KONKURS' | 'NYOPPSTARTET_HOS_ARBEIDSGIVER' | 'KONFLIKT_MED_ARBEIDSGIVER' | 'UDEFINERT';
    utbetalingsgrad?: number;
    utfall?: 'INNVILGET' | 'AVSLÅTT' | 'UAVKLART';
    vurderteVilkår?: VurderteVilkår;
};
export type avvikImSøknad = 'SØKNAD_UTEN_MATCHENDE_IM' | 'IM_REFUSJONSKRAV_TRUMFER_SØKNAD' | 'INGEN_AVVIK' | 'UDEFINERT';
export declare const avvikImSøknad: {
    readonly SØKNAD_UTEN_MATCHENDE_IM: "SØKNAD_UTEN_MATCHENDE_IM";
    readonly IM_REFUSJONSKRAV_TRUMFER_SØKNAD: "IM_REFUSJONSKRAV_TRUMFER_SØKNAD";
    readonly INGEN_AVVIK: "INGEN_AVVIK";
    readonly UDEFINERT: "UDEFINERT";
};
export type bekreftet = 'UBEKREFTET' | 'SYSTEMBEKREFTET' | 'MANUELTBEKREFTET';
export declare const bekreftet: {
    readonly UBEKREFTET: "UBEKREFTET";
    readonly SYSTEMBEKREFTET: "SYSTEMBEKREFTET";
    readonly MANUELTBEKREFTET: "MANUELTBEKREFTET";
};
export type fraværÅrsak = 'STENGT_SKOLE_ELLER_BARNEHAGE' | 'SMITTEVERNHENSYN' | 'ORDINÆRT_FRAVÆR' | 'UDEFINERT';
export declare const fraværÅrsak: {
    readonly STENGT_SKOLE_ELLER_BARNEHAGE: "STENGT_SKOLE_ELLER_BARNEHAGE";
    readonly SMITTEVERNHENSYN: "SMITTEVERNHENSYN";
    readonly ORDINÆRT_FRAVÆR: "ORDINÆRT_FRAVÆR";
    readonly UDEFINERT: "UDEFINERT";
};
export type periodetype = 'NY' | 'REVURDERT';
export declare const periodetype: {
    readonly NY: "NY";
    readonly REVURDERT: "REVURDERT";
};
export type søknadÅrsak = 'ARBEIDSGIVER_KONKURS' | 'NYOPPSTARTET_HOS_ARBEIDSGIVER' | 'KONFLIKT_MED_ARBEIDSGIVER' | 'UDEFINERT';
export declare const søknadÅrsak: {
    readonly ARBEIDSGIVER_KONKURS: "ARBEIDSGIVER_KONKURS";
    readonly NYOPPSTARTET_HOS_ARBEIDSGIVER: "NYOPPSTARTET_HOS_ARBEIDSGIVER";
    readonly KONFLIKT_MED_ARBEIDSGIVER: "KONFLIKT_MED_ARBEIDSGIVER";
    readonly UDEFINERT: "UDEFINERT";
};
export type utfall3 = 'INNVILGET' | 'AVSLÅTT' | 'UAVKLART';
export declare const utfall3: {
    readonly INNVILGET: "INNVILGET";
    readonly AVSLÅTT: "AVSLÅTT";
    readonly UAVKLART: "UAVKLART";
};
export type UttaksperiodeInfo = {
    annenPart?: 'ALENE' | 'MED_ANDRE' | 'VENTER_ANDRE';
    beredskap?: 'OPPFYLT' | 'IKKE_OPPFYLT';
    endringsstatus?: 'NY' | 'ENDRET' | 'UENDRET' | 'UENDRET_RESULTAT';
    graderingMotTilsyn?: GraderingMotTilsyn;
    inngangsvilkår?: {
        [key: string]: ('OPPFYLT' | 'IKKE_OPPFYLT');
    };
    kildeBehandlingUUID?: string;
    knekkpunktTyper?: Array<('LOVBESTEMT_FERIE' | 'PLEIEBEHOV' | 'TILSYNSPERIODE' | 'BEREDSKAPSPERIODE' | 'NATTEVÅKSPERIODE' | 'INNGANGSVILKÅR_IKKE_OPPFYLT' | 'ANNEN_PARTS_UTTAK' | 'FORRIGE_UTTAKPLAN' | 'TRUKKET_UTTAK' | 'ARBEID' | 'SØKERS_DØDSFALL' | 'BARNETS_DØDSFALL' | 'BARNETS_DØDSFALL_SLUTT_PÅ_RETT' | 'SØKERS_ALDER' | 'KRAVPRIORITETSPERIODE' | 'UTENLANDSOPPHOLD' | 'START_SPESIALHÅNDTERING_TILKOMMEN' | 'OVERSTYRT_INPUT' | 'INNTEKTSGRADERING')>;
    manueltOverstyrt?: boolean;
    nattevåk?: 'OPPFYLT' | 'IKKE_OPPFYLT';
    oppgittTilsyn?: {
        nano?: number;
        negative?: boolean;
        positive?: boolean;
        seconds?: number;
        units?: Array<{
            dateBased?: boolean;
            duration?: {
                nano?: number;
                negative?: boolean;
                positive?: boolean;
                seconds?: number;
                zero?: boolean;
            };
            durationEstimated?: boolean;
            timeBased?: boolean;
        }>;
        zero?: boolean;
    };
    pleiebehov?: number;
    søkersTapteArbeidstid?: number;
    søkersTapteTimer?: {
        nano?: number;
        negative?: boolean;
        positive?: boolean;
        seconds?: number;
        units?: Array<{
            dateBased?: boolean;
            duration?: {
                nano?: number;
                negative?: boolean;
                positive?: boolean;
                seconds?: number;
                zero?: boolean;
            };
            durationEstimated?: boolean;
            timeBased?: boolean;
        }>;
        zero?: boolean;
    };
    utbetalingsgrader?: Array<Utbetalingsgrader>;
    utenlandsopphold?: Utenlandsopphold;
    utenlandsoppholdUtenÅrsak?: boolean;
    utfall?: 'OPPFYLT' | 'IKKE_OPPFYLT';
    uttaksgrad?: number;
    uttaksgradMedReduksjonGrunnetInntektsgradering?: number;
    uttaksgradUtenReduksjonGrunnetInntektsgradering?: number;
    årsaker?: Array<('GRADERT_MOT_TILSYN' | 'AVKORTET_MOT_INNTEKT' | 'OVERSTYRT_UTTAKSGRAD' | 'AVKORTET_MOT_SØKERS_ØNSKE' | 'AVKORTET_MOT_KVOTE' | 'OPPFYLT_PGA_BARNETS_DØDSFALL' | 'OPPFYLT_PGA_BARNETS_DØDSFALL_6_UKER' | 'OPPFYLT_PGA_BARNETS_DØDSFALL_12_UKER' | 'FULL_DEKNING' | 'UTENOM_PLEIEBEHOV' | 'FOR_LAV_REST_PGA_ETABLERT_TILSYN' | 'FOR_LAV_REST_PGA_ANDRE_SØKERE' | 'FOR_LAV_REST_PGA_ETABLERT_TILSYN_OG_ANDRE_SØKERE' | 'FOR_LAV_TAPT_ARBEIDSTID' | 'FOR_LAV_ØNSKET_UTTAKSGRAD' | 'LOVBESTEMT_FERIE' | 'BARNETS_DØDSFALL' | 'SØKERS_DØDSFALL' | 'INNGANGSVILKÅR_IKKE_OPPFYLT' | 'FOR_LAV_INNTEKT' | 'FOR_MANGE_DAGER_UTENLANDSOPPHOLD' | 'MAKS_DAGER_OVERSTEGET' | 'OVERSTYRT_UTTAK_AVSLAG')>;
};
export type annenPart = 'ALENE' | 'MED_ANDRE' | 'VENTER_ANDRE';
export declare const annenPart: {
    readonly ALENE: "ALENE";
    readonly MED_ANDRE: "MED_ANDRE";
    readonly VENTER_ANDRE: "VENTER_ANDRE";
};
export type beredskap = 'OPPFYLT' | 'IKKE_OPPFYLT';
export declare const beredskap: {
    readonly OPPFYLT: "OPPFYLT";
    readonly IKKE_OPPFYLT: "IKKE_OPPFYLT";
};
export type endringsstatus = 'NY' | 'ENDRET' | 'UENDRET' | 'UENDRET_RESULTAT';
export declare const endringsstatus: {
    readonly NY: "NY";
    readonly ENDRET: "ENDRET";
    readonly UENDRET: "UENDRET";
    readonly UENDRET_RESULTAT: "UENDRET_RESULTAT";
};
export type nattevåk = 'OPPFYLT' | 'IKKE_OPPFYLT';
export declare const nattevåk: {
    readonly OPPFYLT: "OPPFYLT";
    readonly IKKE_OPPFYLT: "IKKE_OPPFYLT";
};
export type utfall4 = 'OPPFYLT' | 'IKKE_OPPFYLT';
export declare const utfall4: {
    readonly OPPFYLT: "OPPFYLT";
    readonly IKKE_OPPFYLT: "IKKE_OPPFYLT";
};
export type Uttaksplan = {
    commitId?: string;
    kvoteInfo?: KvoteInfo;
    perioder?: {
        [key: string]: UttaksperiodeInfo;
    };
    trukketUttak?: Array<(string)>;
};
export type UttaksplanMedUtsattePerioder = {
    perioderTilVurdering?: Array<(string)>;
    simulertUttaksplan: Uttaksplan;
    utsattePerioder?: Array<(string)>;
    uttaksplan: Uttaksplan;
    virkningsdatoUttakNyeRegler?: string;
};
export type UttrekkPerson = {
    antallDagerIgjen?: number;
    antallForbrukteDager?: number;
    saker?: Array<(string)>;
    totaltAntallDager?: number;
};
export type UtvidetRett = Rammevedtak & {
    gyldigFraOgMed?: string;
    gyldigTilOgMed?: string;
    lengde?: {
        nano?: number;
        negative?: boolean;
        positive?: boolean;
        seconds?: number;
        units?: Array<{
            dateBased?: boolean;
            duration?: {
                nano?: number;
                negative?: boolean;
                positive?: boolean;
                seconds?: number;
                zero?: boolean;
            };
            durationEstimated?: boolean;
            timeBased?: boolean;
        }>;
        zero?: boolean;
    };
    utvidetRettFor?: string;
    vedtatt?: string;
};
export type VarseltekstDto = {
    varseltekst: string;
};
export type VilkårDto = {
    avslagKode?: string;
    readonly evaluering?: string;
    readonly input?: string;
    lovReferanse?: string;
    merknadParametere?: {
        [key: string]: (string);
    };
    overstyrbar?: boolean;
    vilkarStatus: 'IKKE_OPPFYLT' | 'IKKE_VURDERT' | 'OPPFYLT' | 'IKKE_RELEVANT' | 'UDEFINERT';
    vilkarType: 'K9_VILKÅRET' | 'MEDLEMSKAPSVILKÅRET' | 'OMSORGEN_FOR' | 'ALDERSVILKÅR' | 'ALDERSVILKÅR_BARN' | 'MEDISINSKEVILKÅR_UNDER_18_ÅR' | 'MEDISINSKEVILKÅR_18_ÅR' | 'SØKNADSFRIST' | 'SØKERSOPPLYSNINGSPLIKT' | 'OPPTJENINGSPERIODEVILKÅR' | 'OPPTJENINGSVILKÅRET' | 'BEREGNINGSGRUNNLAGVILKÅR' | 'I_LIVETS_SLUTTFASE' | 'NØDVENDIG_OPPLÆRING' | 'GODKJENT_OPPLÆRINGSINSTITUSJON' | 'GJENNOMGÅ_OPPLÆRING' | 'LANGVARIG_SYKDOM' | 'UTVIDETRETT' | 'UDEFINERT';
};
export type vilkarStatus = 'IKKE_OPPFYLT' | 'IKKE_VURDERT' | 'OPPFYLT' | 'IKKE_RELEVANT' | 'UDEFINERT';
export declare const vilkarStatus: {
    readonly IKKE_OPPFYLT: "IKKE_OPPFYLT";
    readonly IKKE_VURDERT: "IKKE_VURDERT";
    readonly OPPFYLT: "OPPFYLT";
    readonly IKKE_RELEVANT: "IKKE_RELEVANT";
    readonly UDEFINERT: "UDEFINERT";
};
export type VilkårMedPerioderDto = {
    lovReferanse?: string;
    overstyrbar?: boolean;
    perioder?: Array<VilkårPeriodeDto>;
    vilkarType: 'K9_VILKÅRET' | 'MEDLEMSKAPSVILKÅRET' | 'OMSORGEN_FOR' | 'ALDERSVILKÅR' | 'ALDERSVILKÅR_BARN' | 'MEDISINSKEVILKÅR_UNDER_18_ÅR' | 'MEDISINSKEVILKÅR_18_ÅR' | 'SØKNADSFRIST' | 'SØKERSOPPLYSNINGSPLIKT' | 'OPPTJENINGSPERIODEVILKÅR' | 'OPPTJENINGSVILKÅRET' | 'BEREGNINGSGRUNNLAGVILKÅR' | 'I_LIVETS_SLUTTFASE' | 'NØDVENDIG_OPPLÆRING' | 'GODKJENT_OPPLÆRINGSINSTITUSJON' | 'GJENNOMGÅ_OPPLÆRING' | 'LANGVARIG_SYKDOM' | 'UTVIDETRETT' | 'UDEFINERT';
};
export type VilkårPeriodeDto = {
    avslagKode?: string;
    begrunnelse?: string;
    readonly evaluering?: string;
    readonly input?: string;
    merknad?: 'VM_1001' | 'VM_1002' | 'VM_1003' | 'VM_1004' | 'VM_1005' | 'VM_1006' | 'VM_1007' | 'VM_1019' | 'VM_1020' | 'VM_1021' | 'VM_1022' | 'VM_1023' | 'VM_1024' | 'VM_1025' | 'VM_1026' | 'VM_1027' | 'VM_1028' | 'VM_1029' | 'VM_1099' | 'VM_1035' | 'VM_1041' | 'VM_1042' | 'VM_1043' | 'VM_1051' | 'VM_1067' | 'VM_1068' | 'VM_1069' | 'VM_1071' | 'VM_1080' | 'VM_1081' | 'VM_1101' | 'VM_1102' | 'VM_5007' | 'VM_7001' | 'VM_7002' | 'VM_7003' | 'VM_7004' | 'VM_7006' | 'VM_7847_A' | 'VM_7847_B' | 'VM_8000' | 'VM_8001' | 'VM_8002' | 'VM_9002' | 'VM_9013' | 'VM_9015' | 'UDEFINERT';
    merknadParametere?: {
        [key: string]: (string);
    };
    periode: Periode;
    vilkarStatus: 'IKKE_OPPFYLT' | 'IKKE_VURDERT' | 'OPPFYLT' | 'IKKE_RELEVANT' | 'UDEFINERT';
    vurderesIBehandlingen?: boolean;
    vurdersIBehandlingen?: boolean;
};
export type merknad = 'VM_1001' | 'VM_1002' | 'VM_1003' | 'VM_1004' | 'VM_1005' | 'VM_1006' | 'VM_1007' | 'VM_1019' | 'VM_1020' | 'VM_1021' | 'VM_1022' | 'VM_1023' | 'VM_1024' | 'VM_1025' | 'VM_1026' | 'VM_1027' | 'VM_1028' | 'VM_1029' | 'VM_1099' | 'VM_1035' | 'VM_1041' | 'VM_1042' | 'VM_1043' | 'VM_1051' | 'VM_1067' | 'VM_1068' | 'VM_1069' | 'VM_1071' | 'VM_1080' | 'VM_1081' | 'VM_1101' | 'VM_1102' | 'VM_5007' | 'VM_7001' | 'VM_7002' | 'VM_7003' | 'VM_7004' | 'VM_7006' | 'VM_7847_A' | 'VM_7847_B' | 'VM_8000' | 'VM_8001' | 'VM_8002' | 'VM_9002' | 'VM_9013' | 'VM_9015' | 'UDEFINERT';
export declare const merknad: {
    readonly VM_1001: "VM_1001";
    readonly VM_1002: "VM_1002";
    readonly VM_1003: "VM_1003";
    readonly VM_1004: "VM_1004";
    readonly VM_1005: "VM_1005";
    readonly VM_1006: "VM_1006";
    readonly VM_1007: "VM_1007";
    readonly VM_1019: "VM_1019";
    readonly VM_1020: "VM_1020";
    readonly VM_1021: "VM_1021";
    readonly VM_1022: "VM_1022";
    readonly VM_1023: "VM_1023";
    readonly VM_1024: "VM_1024";
    readonly VM_1025: "VM_1025";
    readonly VM_1026: "VM_1026";
    readonly VM_1027: "VM_1027";
    readonly VM_1028: "VM_1028";
    readonly VM_1029: "VM_1029";
    readonly VM_1099: "VM_1099";
    readonly VM_1035: "VM_1035";
    readonly VM_1041: "VM_1041";
    readonly VM_1042: "VM_1042";
    readonly VM_1043: "VM_1043";
    readonly VM_1051: "VM_1051";
    readonly VM_1067: "VM_1067";
    readonly VM_1068: "VM_1068";
    readonly VM_1069: "VM_1069";
    readonly VM_1071: "VM_1071";
    readonly VM_1080: "VM_1080";
    readonly VM_1081: "VM_1081";
    readonly VM_1101: "VM_1101";
    readonly VM_1102: "VM_1102";
    readonly VM_5007: "VM_5007";
    readonly VM_7001: "VM_7001";
    readonly VM_7002: "VM_7002";
    readonly VM_7003: "VM_7003";
    readonly VM_7004: "VM_7004";
    readonly VM_7006: "VM_7006";
    readonly VM_7847_A: "VM_7847_A";
    readonly VM_7847_B: "VM_7847_B";
    readonly VM_8000: "VM_8000";
    readonly VM_8001: "VM_8001";
    readonly VM_8002: "VM_8002";
    readonly VM_9002: "VM_9002";
    readonly VM_9013: "VM_9013";
    readonly VM_9015: "VM_9015";
    readonly UDEFINERT: "UDEFINERT";
};
export type VilkårResultatContainer = {
    vilkårTidslinje?: LocalDateTimelineVilkårUtfallSamlet;
};
export type VilkårResultatDto = {
    avslagsårsak?: 'SØKT_FOR_SENT' | 'MANGLENDE_DOKUMENTASJON' | 'SØKER_ER_IKKE_MEDLEM' | 'SØKER_ER_UTVANDRET' | 'SØKER_HAR_IKKE_LOVLIG_OPPHOLD' | 'SØKER_HAR_IKKE_OPPHOLDSRETT' | 'SØKER_ER_IKKE_BOSATT' | 'IKKE_TILSTREKKELIG_OPPTJENING' | 'FYLLER_IKKE_ORDINÆRE_OPPTJENINGSREGLER' | 'FOR_LAVT_BEREGNINGSGRUNNLAG' | 'MANGLENDE_INNTEKTSGRUNNLAG' | 'FOR_LAVT_BEREGNINGSGRUNNLAG_8_47' | 'SØKT_FRILANS_UTEN_FRILANS_INNTEKT' | 'AVKORTET_GRUNNET_ANNEN_INNTEKT' | 'INGEN_STØNADSDAGER_I_SØKNADSPERIODEN' | 'IKKE_DOKUMENTERT_SYKDOM_SKADE_ELLER_LYTE' | 'DOKUMENTASJON_IKKE_FRA_RETT_ORGAN' | 'IKKE_BEHOV_FOR_KONTINUERLIG_TILSYN_OG_PLEIE_PÅ_BAKGRUNN_AV_SYKDOM' | 'IKKE_DOKUMENTERT_OMSORGEN_FOR' | 'IKKE_UTVIDETRETT' | 'IKKE_UTVIDETRETT_IKKE_KRONISK_SYK' | 'IKKE_UTVIDETRETT_IKKE_ØKT_RISIKO_FRAVÆR' | 'IKKE_MIDLERTIDIG_ALENE_VARIGHET_UNDER_SEKS_MÅN' | 'IKKE_MIDLERTIDIG_ALENE_REGNES_IKKE_SOM_Å_HA_ALENEOMSORG' | 'IKKE_MIDLERTIDIG_ALENE' | 'IKKE_GRUNNLAG_FOR_ALENEOMSORG' | 'IKKE_GRUNNLAG_FOR_ALENEOMSORG_FORELDRE_BOR_SAMMEN' | 'IKKE_GRUNNLAG_FOR_ALENEOMSORG_DELT_BOSTED' | 'PLEIETRENGENDE_INNLAGT_I_STEDET_FOR_HJEMME' | 'IKKE_I_LIVETS_SLUTTFASE' | 'IKKE_NØDVENDIG_OPPLÆRING' | 'IKKE_GODKJENT_INSTITUSJON' | 'IKKE_GJENNOMGÅTT_OPPLÆRING' | 'IKKE_PÅ_REISE' | 'SØKER_OVER_HØYESTE_ALDER' | 'SØKER_HAR_AVGÅTT_MED_DØDEN' | 'BARN_OVER_HØYESTE_ALDER' | 'INGEN_BEREGNINGSREGLER_TILGJENGELIG_I_LØSNINGEN' | 'UDEFINERT';
    periode: Periode;
    utfall: 'IKKE_OPPFYLT' | 'IKKE_VURDERT' | 'OPPFYLT' | 'IKKE_RELEVANT' | 'UDEFINERT';
};
export type avslagsårsak2 = 'SØKT_FOR_SENT' | 'MANGLENDE_DOKUMENTASJON' | 'SØKER_ER_IKKE_MEDLEM' | 'SØKER_ER_UTVANDRET' | 'SØKER_HAR_IKKE_LOVLIG_OPPHOLD' | 'SØKER_HAR_IKKE_OPPHOLDSRETT' | 'SØKER_ER_IKKE_BOSATT' | 'IKKE_TILSTREKKELIG_OPPTJENING' | 'FYLLER_IKKE_ORDINÆRE_OPPTJENINGSREGLER' | 'FOR_LAVT_BEREGNINGSGRUNNLAG' | 'MANGLENDE_INNTEKTSGRUNNLAG' | 'FOR_LAVT_BEREGNINGSGRUNNLAG_8_47' | 'SØKT_FRILANS_UTEN_FRILANS_INNTEKT' | 'AVKORTET_GRUNNET_ANNEN_INNTEKT' | 'INGEN_STØNADSDAGER_I_SØKNADSPERIODEN' | 'IKKE_DOKUMENTERT_SYKDOM_SKADE_ELLER_LYTE' | 'DOKUMENTASJON_IKKE_FRA_RETT_ORGAN' | 'IKKE_BEHOV_FOR_KONTINUERLIG_TILSYN_OG_PLEIE_PÅ_BAKGRUNN_AV_SYKDOM' | 'IKKE_DOKUMENTERT_OMSORGEN_FOR' | 'IKKE_UTVIDETRETT' | 'IKKE_UTVIDETRETT_IKKE_KRONISK_SYK' | 'IKKE_UTVIDETRETT_IKKE_ØKT_RISIKO_FRAVÆR' | 'IKKE_MIDLERTIDIG_ALENE_VARIGHET_UNDER_SEKS_MÅN' | 'IKKE_MIDLERTIDIG_ALENE_REGNES_IKKE_SOM_Å_HA_ALENEOMSORG' | 'IKKE_MIDLERTIDIG_ALENE' | 'IKKE_GRUNNLAG_FOR_ALENEOMSORG' | 'IKKE_GRUNNLAG_FOR_ALENEOMSORG_FORELDRE_BOR_SAMMEN' | 'IKKE_GRUNNLAG_FOR_ALENEOMSORG_DELT_BOSTED' | 'PLEIETRENGENDE_INNLAGT_I_STEDET_FOR_HJEMME' | 'IKKE_I_LIVETS_SLUTTFASE' | 'IKKE_NØDVENDIG_OPPLÆRING' | 'IKKE_GODKJENT_INSTITUSJON' | 'IKKE_GJENNOMGÅTT_OPPLÆRING' | 'IKKE_PÅ_REISE' | 'SØKER_OVER_HØYESTE_ALDER' | 'SØKER_HAR_AVGÅTT_MED_DØDEN' | 'BARN_OVER_HØYESTE_ALDER' | 'INGEN_BEREGNINGSREGLER_TILGJENGELIG_I_LØSNINGEN' | 'UDEFINERT';
export declare const avslagsårsak2: {
    readonly SØKT_FOR_SENT: "SØKT_FOR_SENT";
    readonly MANGLENDE_DOKUMENTASJON: "MANGLENDE_DOKUMENTASJON";
    readonly SØKER_ER_IKKE_MEDLEM: "SØKER_ER_IKKE_MEDLEM";
    readonly SØKER_ER_UTVANDRET: "SØKER_ER_UTVANDRET";
    readonly SØKER_HAR_IKKE_LOVLIG_OPPHOLD: "SØKER_HAR_IKKE_LOVLIG_OPPHOLD";
    readonly SØKER_HAR_IKKE_OPPHOLDSRETT: "SØKER_HAR_IKKE_OPPHOLDSRETT";
    readonly SØKER_ER_IKKE_BOSATT: "SØKER_ER_IKKE_BOSATT";
    readonly IKKE_TILSTREKKELIG_OPPTJENING: "IKKE_TILSTREKKELIG_OPPTJENING";
    readonly FYLLER_IKKE_ORDINÆRE_OPPTJENINGSREGLER: "FYLLER_IKKE_ORDINÆRE_OPPTJENINGSREGLER";
    readonly FOR_LAVT_BEREGNINGSGRUNNLAG: "FOR_LAVT_BEREGNINGSGRUNNLAG";
    readonly MANGLENDE_INNTEKTSGRUNNLAG: "MANGLENDE_INNTEKTSGRUNNLAG";
    readonly FOR_LAVT_BEREGNINGSGRUNNLAG_8_47: "FOR_LAVT_BEREGNINGSGRUNNLAG_8_47";
    readonly SØKT_FRILANS_UTEN_FRILANS_INNTEKT: "SØKT_FRILANS_UTEN_FRILANS_INNTEKT";
    readonly AVKORTET_GRUNNET_ANNEN_INNTEKT: "AVKORTET_GRUNNET_ANNEN_INNTEKT";
    readonly INGEN_STØNADSDAGER_I_SØKNADSPERIODEN: "INGEN_STØNADSDAGER_I_SØKNADSPERIODEN";
    readonly IKKE_DOKUMENTERT_SYKDOM_SKADE_ELLER_LYTE: "IKKE_DOKUMENTERT_SYKDOM_SKADE_ELLER_LYTE";
    readonly DOKUMENTASJON_IKKE_FRA_RETT_ORGAN: "DOKUMENTASJON_IKKE_FRA_RETT_ORGAN";
    readonly IKKE_BEHOV_FOR_KONTINUERLIG_TILSYN_OG_PLEIE_PÅ_BAKGRUNN_AV_SYKDOM: "IKKE_BEHOV_FOR_KONTINUERLIG_TILSYN_OG_PLEIE_PÅ_BAKGRUNN_AV_SYKDOM";
    readonly IKKE_DOKUMENTERT_OMSORGEN_FOR: "IKKE_DOKUMENTERT_OMSORGEN_FOR";
    readonly IKKE_UTVIDETRETT: "IKKE_UTVIDETRETT";
    readonly IKKE_UTVIDETRETT_IKKE_KRONISK_SYK: "IKKE_UTVIDETRETT_IKKE_KRONISK_SYK";
    readonly IKKE_UTVIDETRETT_IKKE_ØKT_RISIKO_FRAVÆR: "IKKE_UTVIDETRETT_IKKE_ØKT_RISIKO_FRAVÆR";
    readonly IKKE_MIDLERTIDIG_ALENE_VARIGHET_UNDER_SEKS_MÅN: "IKKE_MIDLERTIDIG_ALENE_VARIGHET_UNDER_SEKS_MÅN";
    readonly IKKE_MIDLERTIDIG_ALENE_REGNES_IKKE_SOM_Å_HA_ALENEOMSORG: "IKKE_MIDLERTIDIG_ALENE_REGNES_IKKE_SOM_Å_HA_ALENEOMSORG";
    readonly IKKE_MIDLERTIDIG_ALENE: "IKKE_MIDLERTIDIG_ALENE";
    readonly IKKE_GRUNNLAG_FOR_ALENEOMSORG: "IKKE_GRUNNLAG_FOR_ALENEOMSORG";
    readonly IKKE_GRUNNLAG_FOR_ALENEOMSORG_FORELDRE_BOR_SAMMEN: "IKKE_GRUNNLAG_FOR_ALENEOMSORG_FORELDRE_BOR_SAMMEN";
    readonly IKKE_GRUNNLAG_FOR_ALENEOMSORG_DELT_BOSTED: "IKKE_GRUNNLAG_FOR_ALENEOMSORG_DELT_BOSTED";
    readonly PLEIETRENGENDE_INNLAGT_I_STEDET_FOR_HJEMME: "PLEIETRENGENDE_INNLAGT_I_STEDET_FOR_HJEMME";
    readonly IKKE_I_LIVETS_SLUTTFASE: "IKKE_I_LIVETS_SLUTTFASE";
    readonly IKKE_NØDVENDIG_OPPLÆRING: "IKKE_NØDVENDIG_OPPLÆRING";
    readonly IKKE_GODKJENT_INSTITUSJON: "IKKE_GODKJENT_INSTITUSJON";
    readonly IKKE_GJENNOMGÅTT_OPPLÆRING: "IKKE_GJENNOMGÅTT_OPPLÆRING";
    readonly IKKE_PÅ_REISE: "IKKE_PÅ_REISE";
    readonly SØKER_OVER_HØYESTE_ALDER: "SØKER_OVER_HØYESTE_ALDER";
    readonly SØKER_HAR_AVGÅTT_MED_DØDEN: "SØKER_HAR_AVGÅTT_MED_DØDEN";
    readonly BARN_OVER_HØYESTE_ALDER: "BARN_OVER_HØYESTE_ALDER";
    readonly INGEN_BEREGNINGSREGLER_TILGJENGELIG_I_LØSNINGEN: "INGEN_BEREGNINGSREGLER_TILGJENGELIG_I_LØSNINGEN";
    readonly UDEFINERT: "UDEFINERT";
};
export type VurderBesteberegningDto = {
    skalHaBesteberegning?: boolean;
};
export type VurderInntektsforholdPeriodeDto = {
    fom: string;
    inntektsforholdListe: Array<InntektsforholdDto>;
    tom: string;
};
export type VurderMilitærDto = {
    harMilitaer?: boolean;
};
export type VurderMottarYtelseDto = {
    arbeidstakerAndelerUtenIM?: Array<ArbeidstakerUtenInntektsmeldingAndelDto>;
    erFrilans?: boolean;
    frilansInntektPrMnd?: number;
    frilansMottarYtelse?: boolean;
};
export type VurderNyttInntektsforholdDto = {
    harMottattOmsorgsstønadEllerFosterhjemsgodtgjørelse: boolean;
    vurderInntektsforholdPerioder: Array<VurderInntektsforholdPeriodeDto>;
};
export type VurderRepresentererStortingetDto = {
    representererStortinget?: boolean;
    stortingsperiodeFom?: string;
    stortingsperiodeTom?: string;
};
export type VurderingDto = {
    begrunnelse?: string;
    id?: number;
    kilde?: 'SØKER' | 'ANDRE';
    opprettetAv?: string;
    opprettetTidspunkt?: string;
    periode?: Periode;
    resultat?: 'OPPFYLT' | 'IKKE_OPPFYLT' | 'IKKE_VURDERT';
};
export type VurderingPerPeriode = {
    vurderinger: Array<VurderingPåPeriode>;
};
export type VurderingPåPeriode = {
    periode: Periode;
    vurderinger: Array<InntektsmeldingVurdering>;
};
export type VurderingRettPleiepengerVedDødDto = {
    begrunnelse?: string;
    rettVedDødType?: 'RETT_6_UKER' | 'RETT_12_UKER';
    vurdering?: string;
};
export type rettVedDødType = 'RETT_6_UKER' | 'RETT_12_UKER';
export declare const rettVedDødType: {
    readonly RETT_6_UKER: "RETT_6_UKER";
    readonly RETT_12_UKER: "RETT_12_UKER";
};
export type VurderteVilkår = {
    vilkår?: {
        [key: string]: ('INNVILGET' | 'AVSLÅTT' | 'UAVKLART');
    };
};
export type YrkesaktivitetDto = {
    abakusReferanse?: InternArbeidsforholdRefDto;
    aktivitetsAvtaler?: Array<AktivitetsAvtaleDto>;
    arbeidType: 'ETTERLØNN_SLUTTPAKKE' | 'FORENKLET_OPPGJØRSORDNING' | 'FRILANSER' | 'FRILANSER_OPPDRAGSTAKER' | 'LØNN_UNDER_UTDANNING' | 'MARITIMT_ARBEIDSFORHOLD' | 'MILITÆR_ELLER_SIVILTJENESTE' | 'ORDINÆRT_ARBEIDSFORHOLD' | 'PENSJON_OG_ANDRE_TYPER_YTELSER_UTEN_ANSETTELSESFORHOLD' | 'NÆRING' | 'UTENLANDSK_ARBEIDSFORHOLD' | 'VENTELØNN_VARTPENGER' | 'VANLIG' | '-';
    arbeidsgiver?: Aktør;
    permisjoner?: Array<PermisjonDto>;
};
export type YtelseAnvistDto = {
    anvistPeriode?: Periode;
    anvisteAndeler?: Array<AnvistAndel>;
    beløp?: number;
    dagsats?: number;
    utbetalingsgradProsent?: number;
};
export type YtelseDto = {
    periode: Periode;
    relatertYtelseType: 'DAG' | 'FRISINN' | 'SP' | 'PSB' | 'PPN' | 'OMP' | 'OLP' | 'AAP' | 'ES' | 'FP' | 'SVP' | 'EF' | '-';
    vedtaksDagsats?: number;
    ytelseAnvist?: Array<YtelseAnvistDto>;
    ytelseGrunnlag?: YtelseGrunnlagDto;
};
export type relatertYtelseType = 'DAG' | 'FRISINN' | 'SP' | 'PSB' | 'PPN' | 'OMP' | 'OLP' | 'AAP' | 'ES' | 'FP' | 'SVP' | 'EF' | '-';
export declare const relatertYtelseType: {
    readonly DAG: "DAG";
    readonly FRISINN: "FRISINN";
    readonly SP: "SP";
    readonly PSB: "PSB";
    readonly PPN: "PPN";
    readonly OMP: "OMP";
    readonly OLP: "OLP";
    readonly AAP: "AAP";
    readonly ES: "ES";
    readonly FP: "FP";
    readonly SVP: "SVP";
    readonly EF: "EF";
    readonly _: "-";
};
export type YtelseFordelingDto = {
    arbeidsgiver?: Aktør;
    beløp: number;
    erRefusjon?: boolean;
    hyppighet?: 'DAGLG' | 'UKNLG' | '14DLG' | 'MNDLG' | 'AARLG' | 'INNFS' | 'PREMGR' | '-';
    inntektPeriodeType: 'DAGLG' | 'UKNLG' | '14DLG' | 'MNDLG' | 'AARLG' | 'INNFS' | 'PREMGR' | '-';
};
export type hyppighet = 'DAGLG' | 'UKNLG' | '14DLG' | 'MNDLG' | 'AARLG' | 'INNFS' | 'PREMGR' | '-';
export declare const hyppighet: {
    readonly DAGLG: "DAGLG";
    readonly UKNLG: "UKNLG";
    readonly _14DLG: "14DLG";
    readonly MNDLG: "MNDLG";
    readonly AARLG: "AARLG";
    readonly INNFS: "INNFS";
    readonly PREMGR: "PREMGR";
    readonly _: "-";
};
export type inntektPeriodeType = 'DAGLG' | 'UKNLG' | '14DLG' | 'MNDLG' | 'AARLG' | 'INNFS' | 'PREMGR' | '-';
export declare const inntektPeriodeType: {
    readonly DAGLG: "DAGLG";
    readonly UKNLG: "UKNLG";
    readonly _14DLG: "14DLG";
    readonly MNDLG: "MNDLG";
    readonly AARLG: "AARLG";
    readonly INNFS: "INNFS";
    readonly PREMGR: "PREMGR";
    readonly _: "-";
};
export type YtelseGrunnlagDto = {
    arbeidskategori?: 'FISKER' | 'ARBEIDSTAKER' | 'SELVSTENDIG_NÆRINGSDRIVENDE' | 'KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE' | 'SJØMANN' | 'JORDBRUKER' | 'DAGPENGER' | 'INAKTIV' | 'KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER' | 'KOMBINASJON_ARBEIDSTAKER_OG_FISKER' | 'FRILANSER' | 'KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER' | 'KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER' | 'DAGMAMMA' | 'UGYLDIG' | '-';
    fordeling?: Array<YtelseFordelingDto>;
};
export type Ytelseandel = {
    aktivitetStatus?: 'MIDL_INAKTIV' | 'AAP' | 'AT' | 'DP' | 'SP_AV_DP' | 'PSB_AV_DP' | 'FL' | 'MS' | 'SN' | 'AT_FL' | 'AT_SN' | 'FL_SN' | 'AT_FL_SN' | 'BA' | 'KUN_YTELSE' | 'TY' | 'VENTELØNN_VARTPENGER' | '-';
    arbeidskategori?: 'FISKER' | 'ARBEIDSTAKER' | 'SELVSTENDIG_NÆRINGSDRIVENDE' | 'KOMBINASJON_ARBEIDSTAKER_OG_SELVSTENDIG_NÆRINGSDRIVENDE' | 'SJØMANN' | 'JORDBRUKER' | 'DAGPENGER' | 'INAKTIV' | 'KOMBINASJON_ARBEIDSTAKER_OG_JORDBRUKER' | 'KOMBINASJON_ARBEIDSTAKER_OG_FISKER' | 'FRILANSER' | 'KOMBINASJON_ARBEIDSTAKER_OG_FRILANSER' | 'KOMBINASJON_ARBEIDSTAKER_OG_DAGPENGER' | 'DAGMAMMA' | 'UGYLDIG' | '-';
    dagsats?: number;
    inntektskategori?: 'ARBEIDSTAKER' | 'FRILANSER' | 'SELVSTENDIG_NÆRINGSDRIVENDE' | 'DAGPENGER' | 'ARBEIDSAVKLARINGSPENGER' | 'SJØMANN' | 'DAGMAMMA' | 'JORDBRUKER' | 'FISKER' | 'ARBEIDSTAKER_UTEN_FERIEPENGER' | '-';
};
export type Ytelsegrunnlag = {
    perioder: Array<Ytelseperiode>;
    ytelse: 'DAG' | 'FRISINN' | 'SP' | 'PSB' | 'PPN' | 'OMP' | 'OLP' | 'AAP' | 'ES' | 'FP' | 'SVP' | 'EF' | '-';
};
export type ytelse = 'DAG' | 'FRISINN' | 'SP' | 'PSB' | 'PPN' | 'OMP' | 'OLP' | 'AAP' | 'ES' | 'FP' | 'SVP' | 'EF' | '-';
export declare const ytelse: {
    readonly DAG: "DAG";
    readonly FRISINN: "FRISINN";
    readonly SP: "SP";
    readonly PSB: "PSB";
    readonly PPN: "PPN";
    readonly OMP: "OMP";
    readonly OLP: "OLP";
    readonly AAP: "AAP";
    readonly ES: "ES";
    readonly FP: "FP";
    readonly SVP: "SVP";
    readonly EF: "EF";
    readonly _: "-";
};
export type Ytelseperiode = {
    andeler: Array<Ytelseandel>;
    periode: Periode;
};
export type YtelserDto = {
    ytelser?: Array<YtelseDto>;
};
export type YtelsespesifiktGrunnlagDto = {
    ytelseType: string;
};
export type ÅrsakMedPerioder = {
    perioder: Array<Periode>;
    årsak: 'MANUELT_REVURDERER_PERIODE' | 'REVURDERER_BERØRT_PERIODE' | 'ENDRING_FRA_BRUKER' | 'TRUKKET_KRAV' | 'REVURDERER_NY_INNTEKTSMELDING' | 'REVURDERER_ENDRING_FRA_ANNEN_PART' | 'REVURDERER_ENDRING_FERIEPENGER_ANNEN_SAK' | 'UTSATT_BEHANDLING' | 'GJENOPPTAR_UTSATT_BEHANDLING' | 'REVURDERER_SYKDOM_ENDRING_FRA_ANNEN_OMSORGSPERSON' | 'REVURDERER_ETABLERT_TILSYN_ENDRING_FRA_ANNEN_OMSORGSPERSON' | 'REVURDERER_NATTEVÅKBEREDSKAP_ENDRING_FRA_ANNEN_OMSORGSPERSON' | 'HENDELSE_DØD_BRUKER' | 'HENDELSE_DØD_PLEIETRENGENDE' | 'G_REGULERING' | 'REVURDERER_BEREGNING' | 'ENDRING_I_FORDELING' | 'FØRSTEGANGSVURDERING' | 'REVURDERER_LIGNET_INNTEKT';
};
export type årsak3 = 'MANUELT_REVURDERER_PERIODE' | 'REVURDERER_BERØRT_PERIODE' | 'ENDRING_FRA_BRUKER' | 'TRUKKET_KRAV' | 'REVURDERER_NY_INNTEKTSMELDING' | 'REVURDERER_ENDRING_FRA_ANNEN_PART' | 'REVURDERER_ENDRING_FERIEPENGER_ANNEN_SAK' | 'UTSATT_BEHANDLING' | 'GJENOPPTAR_UTSATT_BEHANDLING' | 'REVURDERER_SYKDOM_ENDRING_FRA_ANNEN_OMSORGSPERSON' | 'REVURDERER_ETABLERT_TILSYN_ENDRING_FRA_ANNEN_OMSORGSPERSON' | 'REVURDERER_NATTEVÅKBEREDSKAP_ENDRING_FRA_ANNEN_OMSORGSPERSON' | 'HENDELSE_DØD_BRUKER' | 'HENDELSE_DØD_PLEIETRENGENDE' | 'G_REGULERING' | 'REVURDERER_BEREGNING' | 'ENDRING_I_FORDELING' | 'FØRSTEGANGSVURDERING' | 'REVURDERER_LIGNET_INNTEKT';
export declare const årsak3: {
    readonly MANUELT_REVURDERER_PERIODE: "MANUELT_REVURDERER_PERIODE";
    readonly REVURDERER_BERØRT_PERIODE: "REVURDERER_BERØRT_PERIODE";
    readonly ENDRING_FRA_BRUKER: "ENDRING_FRA_BRUKER";
    readonly TRUKKET_KRAV: "TRUKKET_KRAV";
    readonly REVURDERER_NY_INNTEKTSMELDING: "REVURDERER_NY_INNTEKTSMELDING";
    readonly REVURDERER_ENDRING_FRA_ANNEN_PART: "REVURDERER_ENDRING_FRA_ANNEN_PART";
    readonly REVURDERER_ENDRING_FERIEPENGER_ANNEN_SAK: "REVURDERER_ENDRING_FERIEPENGER_ANNEN_SAK";
    readonly UTSATT_BEHANDLING: "UTSATT_BEHANDLING";
    readonly GJENOPPTAR_UTSATT_BEHANDLING: "GJENOPPTAR_UTSATT_BEHANDLING";
    readonly REVURDERER_SYKDOM_ENDRING_FRA_ANNEN_OMSORGSPERSON: "REVURDERER_SYKDOM_ENDRING_FRA_ANNEN_OMSORGSPERSON";
    readonly REVURDERER_ETABLERT_TILSYN_ENDRING_FRA_ANNEN_OMSORGSPERSON: "REVURDERER_ETABLERT_TILSYN_ENDRING_FRA_ANNEN_OMSORGSPERSON";
    readonly REVURDERER_NATTEVÅKBEREDSKAP_ENDRING_FRA_ANNEN_OMSORGSPERSON: "REVURDERER_NATTEVÅKBEREDSKAP_ENDRING_FRA_ANNEN_OMSORGSPERSON";
    readonly HENDELSE_DØD_BRUKER: "HENDELSE_DØD_BRUKER";
    readonly HENDELSE_DØD_PLEIETRENGENDE: "HENDELSE_DØD_PLEIETRENGENDE";
    readonly G_REGULERING: "G_REGULERING";
    readonly REVURDERER_BEREGNING: "REVURDERER_BEREGNING";
    readonly ENDRING_I_FORDELING: "ENDRING_I_FORDELING";
    readonly FØRSTEGANGSVURDERING: "FØRSTEGANGSVURDERING";
    readonly REVURDERER_LIGNET_INNTEKT: "REVURDERER_LIGNET_INNTEKT";
};
export type ÅrskvantumForbrukteDager = {
    barna?: Array<Barn>;
    rammevedtak?: Array<Rammevedtak>;
    sisteUttaksplan?: Uttaksplan;
};
export type ÅrskvantumFravær = {
    arbeidsforhold?: Arbeidsforhold;
    perioder?: {
        [key: string]: ÅrskvantumFraværsinformasjon;
    };
};
export type ÅrskvantumFraværsinformasjon = {
    delvisFravær?: {
        nano?: number;
        negative?: boolean;
        positive?: boolean;
        seconds?: number;
        units?: Array<{
            dateBased?: boolean;
            duration?: {
                nano?: number;
                negative?: boolean;
                positive?: boolean;
                seconds?: number;
                zero?: boolean;
            };
            durationEstimated?: boolean;
            timeBased?: boolean;
        }>;
        zero?: boolean;
    };
    harDekketArbeidsgiverperioden?: boolean;
    hjemler?: Array<('FTRL_9_3__1' | 'FTRL_9_5__1' | 'FTRL_9_5' | 'FTRL_9_5__2' | 'FTRL_9_5__3' | 'FTRL_9_6__1' | 'FTRL_9_6__2_OG_4' | 'FTRL_9_6__3' | 'FTRL_9_6__5' | 'FTRL_9_6__6' | 'FTRL_9_8_JF_8_10__3' | 'FTRL_9_7__1_3' | 'FTRL_9_7__4' | 'FTRL_9_8__3' | 'FTRL_9_9__1' | 'FTRL_25_16' | 'COVID19_1_2' | 'COVID19_4_3' | 'COVID19_4_1__2' | 'COVID19_4_1__2_OG_3' | 'COVID19_4_2' | 'COVID19_4_3__1' | 'COVID19_4_3__2')>;
    knekkPgaHelg?: boolean;
    refusjonTilArbeidsgiver?: boolean;
    vurderteVilkår?: VurderteVilkår;
};
export type ÅrskvantumUtbetalingGrunnlag = {
    barna?: Array<Barn>;
    behandlingUUID?: string;
    forbrukteDagerFraInfotrygd?: number;
    fravær?: Array<ÅrskvantumFravær>;
    helePerioden?: string;
    hjemler?: Array<('FTRL_9_3__1' | 'FTRL_9_5__1' | 'FTRL_9_5' | 'FTRL_9_5__2' | 'FTRL_9_5__3' | 'FTRL_9_6__1' | 'FTRL_9_6__2_OG_4' | 'FTRL_9_6__3' | 'FTRL_9_6__5' | 'FTRL_9_6__6' | 'FTRL_9_8_JF_8_10__3' | 'FTRL_9_7__1_3' | 'FTRL_9_7__4' | 'FTRL_9_8__3' | 'FTRL_9_9__1' | 'FTRL_25_16' | 'COVID19_1_2' | 'COVID19_4_3' | 'COVID19_4_1__2' | 'COVID19_4_1__2_OG_3' | 'COVID19_4_2' | 'COVID19_4_3__1' | 'COVID19_4_3__2')>;
    personIdent?: string;
    rammevedtak?: Array<Rammevedtak>;
    saksnummer?: string;
    søkersDødsdato?: string;
    søkersFødselsdato?: string;
    uttaksperioderFraInfotrygd?: Array<Uttaksperiode>;
};
export type ÅrskvantumUttrekk = {
    relevanteSaker?: Array<UttrekkPerson>;
    uttrekk?: Array<UttrekkPerson>;
};
export type DoRedirectData = {
    oppgaveId?: OppgaveIdDto;
    sakId?: SaksnummerDto;
};
export type DoRedirectResponse = unknown;
export type AntallÅpnePsbMedSøknadResponse = unknown;
export type AvbrytAksjonspunktData = {
    requestBody: AvbrytAksjonspunktDto;
};
export type AvbrytAksjonspunktResponse = unknown;
export type GetVilkårFullV3Data = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type GetVilkårFullV3Response = VilkårMedPerioderDto;
export type HentBehandlingHistorikkData = {
    /**
     * Behandling-UUID
     */
    requestBody: BehandlingIdDto;
};
export type HentBehandlingHistorikkResponse = unknown;
export type BeskyttAktoerIdData = {
    /**
     * Liste med aktør-IDer
     */
    requestBody?: AktørListeDto;
};
export type BeskyttAktoerIdResponse = unknown;
export type DumpSakData = {
    formData?: {
        /**
         * begrunnelse
         */
        begrunnelse: string;
        /**
         * saksnummer
         */
        saksnummer: string;
    };
};
export type DumpSakResponse = unknown;
export type OpprettFeriepengerevurderingData = {
    /**
     * Fødselsnumre (skilt med mellomrom eller linjeskift)
     */
    requestBody?: OpprettManuellRevurdering;
};
export type OpprettFeriepengerevurderingResponse = unknown;
export type OpprettFeriepengerevurderingSaksnumreData = {
    /**
     * Saksnumre (skilt med mellomrom eller linjeskift)
     */
    requestBody?: OpprettManuellRevurdering;
};
export type OpprettFeriepengerevurderingSaksnumreResponse = unknown;
export type InnhentRegisterdataPåNyttData = {
    formData?: {
        /**
         * begrunnelse
         */
        begrunnelse: string;
        /**
         * saksnummer
         */
        saksnummer: string;
    };
};
export type InnhentRegisterdataPåNyttResponse = unknown;
export type OpprettNyManuellRevurderingEllerTilbakestillingAvÅpenBehandlingData = {
    /**
     * Saksnumre (skilt med mellomrom eller linjeskift)
     */
    requestBody?: OpprettManuellRevurdering;
};
export type OpprettNyManuellRevurderingEllerTilbakestillingAvÅpenBehandlingResponse = unknown;
export type MarkerMottattDokumentUgyldigData = {
    formData?: {
        /**
         * begrunnelse
         */
        begrunnelse: string;
        /**
         * journalpost
         */
        journalpost: string;
        /**
         * saksnummer
         */
        saksnummer: string;
    };
};
export type MarkerMottattDokumentUgyldigResponse = unknown;
export type DumpFnrCacheResponse = unknown;
export type InnhentFnrData = {
    formData?: {
        /**
         * restart innhenting
         */
        restart: boolean;
    };
};
export type InnhentFnrResponse = unknown;
export type HentSaksnummerForBehandlingData = {
    /**
     * Behandling-UUID
     */
    requestBody: BehandlingIdDto;
};
export type HentSaksnummerForBehandlingResponse = unknown;
export type HentStarttidspunktÅpenBehandlingResponse = unknown;
export type HentUtStønadstatistikkData = {
    /**
     * Behandling-UUID
     */
    requestBody: BehandlingIdDto;
};
export type HentUtStønadstatistikkResponse = unknown;
export type HentVilkårhistorikkForBeregningData = {
    /**
     * Behandling-UUID
     */
    requestBody: BehandlingIdDto;
};
export type HentVilkårhistorikkForBeregningResponse = unknown;
export type GetAksjonspunkter2Data = {
    saksnummer?: SaksnummerDto;
};
export type GetAksjonspunkter2Response = unknown;
export type GetAksjonspunkterSammendragData = {
    /**
     * Valgfritt å inkludere utførte aksjonspunkt. Default er false.
     */
    medUtforte?: boolean;
    /**
     * Tidsrom for opprettelse. Format YYYY-MM-DD/YYYY-MM-DD.
     */
    opprettetPeriode: Periode;
};
export type GetAksjonspunkterSammendragResponse = unknown;
export type GetAksjonspunkterData = {
    behandlingId: BehandlingIdDto;
};
export type GetAksjonspunkterResponse = Array<AksjonspunktDto>;
export type BekreftData = {
    /**
     * Liste over aksjonspunkt som skal bekreftes, inklusiv data som trengs for å løse de.
     */
    requestBody?: BekreftedeAksjonspunkterDto;
};
export type BekreftResponse = unknown;
export type GetAksjonspunkter1Data = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type GetAksjonspunkter1Response = Array<AksjonspunktDto>;
export type ErKontrollerRevurderingAksjonspunktÅpentData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type ErKontrollerRevurderingAksjonspunktÅpentResponse = boolean;
export type OverstyrData = {
    /**
     * Liste over aksjonspunkter.
     */
    requestBody?: BekreftetOgOverstyrteAksjonspunkterDto;
};
export type OverstyrResponse = unknown;
export type GetRisikoAksjonspunktData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type GetRisikoAksjonspunktResponse = AksjonspunktDto;
export type GetAktoerInfoData = {
    aktoerId: AktørIdDto;
};
export type GetAktoerInfoResponse = AktørInfoDto;
export type GetAktoerInfo1Data = {
    aktoerId: AktørIdDto;
};
export type GetAktoerInfo1Response = AktørInfoDto;
export type GetAinntektUrlData = {
    /**
     * SAKSNUMMER
     */
    saksnummer: SaksnummerDto;
};
export type GetAktoerInfo2Data = {
    saksnummer: SaksnummerDto;
};
export type HentBehandlingData1Data = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentBehandlingData1Response = BehandlingDto;
export type HentBehandlingResultatForBackendData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentBehandlingResultatForBackendResponse = BehandlingDto;
export type OppfriskSakerData = {
    requestBody: BehandlingIdListe;
};
export type OppfriskSakerResponse = string;
export type HentDirekteOvergangForBehandlingData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentDirekteOvergangForBehandlingResponse = DirekteOvergangDto;
export type HentRevurderingensOriginalBehandling1Data = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentRevurderingensOriginalBehandling1Response = BehandlingDto;
export type HentBehandlingMidlertidigStatus1Data = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
    gruppe?: ProsessTaskGruppeIdDto;
};
export type HentBehandlingMidlertidigStatus1Response = AsyncPollingStatus;
export type HentBehandlingDataData = {
    behandlingId: BehandlingIdDto;
};
export type HentBehandlingDataResponse = BehandlingDto;
export type HentBehandlingData = {
    requestBody: BehandlingIdDto;
};
export type HentBehandlingResponse = string;
export type OpprettNyBehandlingData = {
    /**
     * Saksnummer og flagg om det er ny behandling etter klage
     */
    requestBody?: NyBehandlingDto;
};
export type OpprettNyBehandlingResponse = string;
export type HentBehandlingerData = {
    /**
     * Saksnummer må være et eksisterende saksnummer
     */
    saksnummer: SaksnummerDto;
};
export type HentBehandlingerResponse = Array<BehandlingDto>;
export type ByttBehandlendeEnhetData = {
    /**
     * Ny enhet som skal byttes
     */
    requestBody?: ByttBehandlendeEnhetDto;
};
export type ByttBehandlendeEnhetResponse = unknown;
export type EndreFristForBehandlingPaVentData = {
    /**
     * Frist for behandling på vent
     */
    requestBody?: SettBehandlingPaVentDto;
};
export type EndreFristForBehandlingPaVentResponse = unknown;
export type GjenopptaBehandlingData = {
    /**
     * BehandlingId for behandling som skal gjenopptas
     */
    requestBody?: GjenopptaBehandlingDto;
};
export type GjenopptaBehandlingResponse = string;
export type HenleggBehandlingData = {
    /**
     * Henleggelsesårsak
     */
    requestBody?: HenleggBehandlingDto;
};
export type HenleggBehandlingResponse = unknown;
export type ÅpneBehandlingForEndringerData = {
    /**
     * BehandlingId for behandling som skal åpnes for endringer
     */
    requestBody?: ReåpneBehandlingDto;
};
export type ÅpneBehandlingForEndringerResponse = string;
export type HentLovligeBehandlingsoperasjonerData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentLovligeBehandlingsoperasjonerResponse = BehandlingOperasjonerDto;
export type HentRevurderingensOriginalBehandlingData = {
    behandlingId: BehandlingIdDto;
};
export type HentRevurderingensOriginalBehandlingResponse = BehandlingDto;
export type SettBehandlingPaVentData = {
    /**
     * Frist for behandling på vent
     */
    requestBody?: SettBehandlingPaVentDto;
};
export type SettBehandlingPaVentResponse = unknown;
export type HentBehandlingMidlertidigStatusData = {
    behandlingId: BehandlingIdDto;
    gruppe?: ProsessTaskGruppeIdDto;
};
export type HentBehandlingMidlertidigStatusResponse = AsyncPollingStatus;
export type OpprettNyUnntaksbehandlingData = {
    /**
     * Saksnummer
     */
    requestBody?: NyBehandlingDto;
};
export type OpprettNyUnntaksbehandlingResponse = string;
export type HentAlleBehandlingerData = {
    /**
     * Saksnummer må være et eksisterende saksnummer
     */
    saksnummer: SaksnummerDto;
};
export type HentAlleBehandlingerResponse = Array<BehandlingDto>;
export type GetForbrukteDagerData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type GetForbrukteDagerResponse = ÅrskvantumForbrukteDager;
export type InputTilÅrskvantumsBeregningData = {
    /**
     * behandlingUUID
     */
    requestBody: string;
};
export type InputTilÅrskvantumsBeregningResponse = unknown;
export type HentUtbetalingsgrunnlagFraÅrskvantumData = {
    /**
     * behandlingUUID
     */
    requestBody: string;
};
export type HentUtbetalingsgrunnlagFraÅrskvantumResponse = unknown;
export type GetFullUttaksplanData = {
    /**
     * behandlingUUID
     */
    behandlingUuid?: string;
    /**
     * saksnummer
     */
    saksnummer: SaksnummerDto;
};
export type GetFullUttaksplanResponse = FullUttaksplan;
export type HentUttrekkResponse = unknown;
export type GetArbeidsgiverOpplysningerData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type GetArbeidsgiverOpplysningerResponse = ArbeidsgiverOversiktDto;
export type HentBeregningsgrunnlagData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentBeregningsgrunnlagResponse = BeregningsgrunnlagDto;
export type HentBeregningsgrunnlageneData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentBeregningsgrunnlageneResponse = Array<BeregningsgrunnlagDto>;
export type HentNøkkelknippeData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentNøkkelknippeResponse = Array<BeregningsgrunnlagKoblingDto>;
export type HentNøklerTilVurderingData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentNøklerTilVurderingResponse = Array<BeregningsgrunnlagKoblingDto>;
export type HentOverstyrInputBeregningData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentOverstyrInputBeregningResponse = Array<OverstyrBeregningInputPeriode>;
export type HentBeregningsresultatData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentBeregningsresultatResponse = BeregningsresultatDto;
export type HarRevurderingSammeResultatSomOriginalBehandlingData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HarRevurderingSammeResultatSomOriginalBehandlingResponse = boolean;
export type HentBeregningsresultatMedUtbetalingData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentBeregningsresultatMedUtbetalingResponse = BeregningsresultatMedUtbetaltePeriodeDto;
export type HentFosterbarnData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentFosterbarnResponse = FosterbarnListeDto;
export type HentVurdertOpplæringData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentVurdertOpplæringResponse = GjennomgåttOpplæringDto;
export type HentVurdertInstitusjonData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentVurdertInstitusjonResponse = InstitusjonerDto;
export type HentVurdertNødvendigOpplæringData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentVurdertNødvendigOpplæringResponse = NødvendigOpplæringDto;
export type HentDokumentinnholdData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
    /**
     * sykdomDokumentId
     */
    sykdomDokumentId: SykdomDokumentIdDto;
};
export type HentDokumentinnholdResponse = unknown;
export type HentDokumenterData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentDokumenterResponse = OpplæringDokumentDto;
export type HentVurdertReisetidData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentVurdertReisetidResponse = ReisetidDto;
export type GetArbeidsforholdData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type GetArbeidsforholdResponse = InntektArbeidYtelseArbeidsforholdV2Dto;
export type HentArbeidsforholdIdFraInntektsmeldingerData = {
    /**
     * Match-kritierer for å lete opp fagsaken med inntektsmeldinger
     */
    requestBody?: MatchFagsak;
};
export type HentArbeidsforholdIdFraInntektsmeldingerResponse = InntektArbeidYtelseArbeidsforholdV2Dto;
export type UtledStatusForKompletthetData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type UtledStatusForKompletthetResponse = KompletthetsVurderingDto;
export type UtledStatusForKompletthetV2Data = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type UtledStatusForKompletthetV2Response = KompletthetsVurderingV2Dto;
export type UtledVurderingerAvMottatteInntektsmeldingerData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type UtledVurderingerAvMottatteInntektsmeldingerResponse = VurderingPerPeriode;
export type HentKontrollresultatData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentKontrollresultatResponse = unknown;
export type HentKontrollresultatV21Data = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentKontrollresultatV21Response = unknown;
export type HentOmsorgenForInformasjonData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentOmsorgenForInformasjonResponse = OmsorgenForOversiktDto;
export type GetOppgittOpptjeningV2Data = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type GetOppgittOpptjeningV2Response = SøknadsperiodeOgOppgittOpptjeningV2Dto;
export type GetOpptjeningerData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type GetOpptjeningerResponse = OpptjeningerDto;
export type GetInntektData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type GetInntektResponse = OpptjeningDto;
export type HentPerioderTilBehandlingData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentPerioderTilBehandlingResponse = StatusForPerioderPåBehandling;
export type HentPerioderMedVilkårForBehandlingData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentPerioderMedVilkårForBehandlingResponse = StatusForPerioderPåBehandling;
export type HentMedlemskapData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentMedlemskapResponse = MedlemV2Dto;
export type GetPersonopplysningerData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type GetPersonopplysningerResponse = PersonopplysningDto;
export type GetPersonopplysninger1Data = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type GetPersonopplysninger1Response = PersonopplysningDto;
export type GetArbeidstidSomManglerData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type GetArbeidstidSomManglerResponse = ManglendeArbeidstidDto;
export type DebugInputData = {
    formData?: {
        /**
         * begrunnelse
         */
        begrunnelse: string;
        /**
         * behandlingUUID
         */
        behandlingUuid: string;
    };
};
export type DebugInputResponse = unknown;
export type KjøreplanData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type KjøreplanResponse = unknown;
export type SimulertUttaksplanData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type SimulertUttaksplanResponse = Simulering;
export type GetUttaksplanData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type GetUttaksplanResponse = Uttaksplan;
export type UttaksplanMedUtsattePerioderData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type UttaksplanMedUtsattePerioderResponse = UttaksplanMedUtsattePerioder;
export type HentOverstyrbareAktiviterForUttakData = {
    requestBody: OverstyrbareAktiviteterForUttakRequest;
};
export type HentOverstyrbareAktiviterForUttakResponse = OverstyrbareUttakAktiviterDto;
export type GetOverstyrtUttakData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type GetOverstyrtUttakResponse = OverstyrtUttakDto;
export type GetFastsattUttakData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type GetFastsattUttakResponse = FastsattUttakDto;
export type GetOppgittUttakData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type GetOppgittUttakResponse = OppgittUttakDto;
export type GetUtenlandsoppholdData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type GetUtenlandsoppholdResponse = UtenlandsoppholdDto;
export type HentVurderingRettPleiepengerVedDødData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentVurderingRettPleiepengerVedDødResponse = VurderingRettPleiepengerVedDødDto | void;
export type GetSøknadData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type GetSøknadResponse = SøknadDto;
export type HentSøknadPerioderData = {
    /**
     * Match kritierer for å lete opp fagsaker
     */
    requestBody?: HentSøknadPerioderDto;
};
export type HentSøknadPerioderResponse = Array<Periode>;
export type HentSøknadPerioderMedSaksnummerData = {
    saksnummer: SaksnummerDto;
};
export type HentSøknadPerioderMedSaksnummerResponse = Array<Periode>;
export type HentSykdomAksjonspunktData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentSykdomAksjonspunktResponse = SykdomAksjonspunktDto;
export type OppdaterDokumentData = {
    requestBody: SykdomDokumentEndringDto;
};
export type OppdaterDokumentResponse = unknown;
export type HentDiagnosekoderData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentDiagnosekoderResponse = SykdomDiagnosekoderDto;
export type OppdaterDiagnosekoderData = {
    requestBody: SykdomDiagnosekoderDto;
};
export type OppdaterDiagnosekoderResponse = unknown;
export type HentSykdomsdokumenterSomIkkeHarOppdatertEksisterendeVurderingerData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentSykdomsdokumenterSomIkkeHarOppdatertEksisterendeVurderingerResponse = SykdomDokumentDto;
export type SykdomDokumentUtkvitterEksisterendeVurderingerData = {
    requestBody: SykdomDokumentUtkvitterEksisterendeVurderingerDto;
};
export type SykdomDokumentUtkvitterEksisterendeVurderingerResponse = unknown;
export type HentSykdomInnleggelseData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentSykdomInnleggelseResponse = SykdomInnleggelseDto;
export type OppdaterSykdomInnleggelseData = {
    requestBody: SykdomInnleggelseDto;
};
export type OppdaterSykdomInnleggelseResponse = unknown;
export type HentSykdomsdokumenterData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentSykdomsdokumenterResponse = SykdomDokumentDto;
export type LeggTilNyttDokumentData = {
    requestBody: SykdomDokumentOpprettelseDto;
};
export type LeggTilNyttDokumentResponse = unknown;
export type HentDokumentoversiktData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentDokumentoversiktResponse = SykdomDokumentOversikt;
export type HentSykdomsInformasjonForData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
    /**
     * sykdomVurderingId
     */
    sykdomVurderingId: SykdomVurderingIdDto;
};
export type HentSykdomsInformasjonForResponse = SykdomVurderingDto;
export type OpprettSykdomsVurderingData = {
    requestBody: SykdomVurderingOpprettelseDto;
};
export type OpprettSykdomsVurderingResponse = SykdomVurderingEndringResultatDto;
export type HentSykdomsoversiktForIlivetsSluttaseData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentSykdomsoversiktForIlivetsSluttaseResponse = SykdomVurderingOversikt;
export type HentSykdomsoversiktForKtpData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentSykdomsoversiktForKtpResponse = SykdomVurderingOversikt;
export type HentSykdomsoversiktForLangvarigSykdomData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentSykdomsoversiktForLangvarigSykdomResponse = SykdomVurderingOversikt;
export type HentSykdomsoversiktForToOmsorgspersonerData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentSykdomsoversiktForToOmsorgspersonerResponse = SykdomVurderingOversikt;
export type OppdaterSykdomsVurderingData = {
    requestBody: SykdomVurderingEndringDto;
};
export type OppdaterSykdomsVurderingResponse = SykdomVurderingEndringResultatDto;
export type HentDokumentinnhold1Data = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
    /**
     * sykdomDokumentId
     */
    sykdomDokumentId: SykdomDokumentIdDto;
};
export type HentDokumentinnhold1Response = unknown;
export type HentDokumentData = {
    /**
     * Unik identifikator av DokumentInfo/Dokumentbeskrivelse (dokumentnivå)
     */
    dokumentId: DokumentIdDto;
    /**
     * Unik identifikator av journalposten (forsendelsenivå)
     */
    journalpostId: JournalpostIdDto;
    /**
     * Saksnummer
     */
    saksnummer: SaksnummerDto;
};
export type HentDokumentResponse = unknown;
export type HentAlleDokumenterForSakData = {
    /**
     * Saksnummer
     */
    saksnummer: SaksnummerDto;
};
export type HentAlleDokumenterForSakResponse = Array<DokumentDto>;
export type UtledStatusData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type UtledStatusResponse = SøknadsfristTilstandDto;
export type HentTilbakekrevingValgData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentTilbakekrevingValgResponse = TilbakekrevingValgDto;
export type HentVarseltekstData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentVarseltekstResponse = VarseltekstDto;
export type HentEtablertTilsynData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentEtablertTilsynResponse = EtablertTilsynNattevåkOgBeredskapDto;
export type HentTotrinnskontrollSkjermlenkeContextData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentTotrinnskontrollSkjermlenkeContextResponse = Array<TotrinnskontrollSkjermlenkeContextDto>;
export type HentTotrinnskontrollvurderingSkjermlenkeContextData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentTotrinnskontrollvurderingSkjermlenkeContextResponse = Array<TotrinnskontrollSkjermlenkeContextDto>;
export type HentRammevedtakData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentRammevedtakResponse = RammevedtakResponse;
export type HentDokumenterMedUstrukturerteDataData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentDokumenterMedUstrukturerteDataResponse = DokumentMedUstrukturerteDataDto;
export type HentVedtakVarselData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentVedtakVarselResponse = unknown;
export type GetVilkårV3Data = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type GetVilkårV3Response = VilkårDto;
export type GetVilkårSamletData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type GetVilkårSamletResponse = VilkårResultatContainer;
export type HentOverlappendeYtelserData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentOverlappendeYtelserResponse = Array<OverlappendeYtelseDto>;
export type GetKalkulatorInputData = {
    behandlingId?: BehandlingIdDto;
};
export type GetKalkulatorInputResponse = Array<KalkulatorInputPrVilkårperiodeDto>;
export type FinnBehandlingerMedFeilImResponse = unknown;
export type FjernProsessTriggerForReberegningData = {
    /**
     * Saksnummer og skjæringstidspunkt (YYYY-MM-DD) på csv-format
     */
    requestBody?: OpprettManuellRevurderingBeregning;
};
export type FjernProsessTriggerForReberegningResponse = unknown;
export type InntektsmeldingSorteringData = {
    behandlingId?: BehandlingIdDto;
};
export type InntektsmeldingSorteringResponse = Array<Inntektsmelding>;
export type RevurderGrunnetEndretOpplysningData = {
    /**
     * Saksnummer og skjæringstidspunkt (YYYY-MM-DD) på csv-format
     */
    requestBody?: OpprettManuellRevurderingBeregning;
};
export type RevurderGrunnetEndretOpplysningResponse = unknown;
export type RevurderGrunnetOpplysningOmOpptjeningData = {
    /**
     * Saksnummer og skjæringstidspunkt (YYYY-MM-DD) på csv-format
     */
    requestBody?: OpprettManuellRevurderingBeregning;
};
export type RevurderGrunnetOpplysningOmOpptjeningResponse = unknown;
export type FinnAktivitetstatusForlengelseDataData = {
    formData?: {
        /**
         * begrunnelse
         */
        begrunnelse: string;
        /**
         * behandlingUUID
         */
        behandlingUuid: string;
    };
};
export type FinnAktivitetstatusForlengelseDataResponse = unknown;
export type RevurderOgBrukForrigeSkatteoppgjørData = {
    requestBody?: BrukForrigeSkatteoppgjørDto;
};
export type RevurderOgBrukForrigeSkatteoppgjørResponse = unknown;
export type RevurderOgInnhentPgiData = {
    requestBody?: RevurderPeriodeDto;
};
export type RevurderOgInnhentPgiResponse = unknown;
export type BestillDokumentData = {
    /**
     * Inneholder kode til brevmal og data som skal flettes inn i brevet
     */
    requestBody?: BestillBrevDto;
};
export type BestillDokumentResponse = void;
export type GetBrevMottakerinfoEregData = {
    requestBody: OrganisasjonsnrDto;
};
export type GetBrevMottakerinfoEregResponse = (BrevMottakerinfoEregResponseDto) | null;
export type HentSisteGyldigeVedtakForAktorIdData = {
    requestBody?: HentSisteGyldigeVedtakForAktørInputDto;
};
export type HentSisteGyldigeVedtakForAktorIdResponse = HarGyldigOmsorgsdagerVedtakDto;
export type HentFagsakData = {
    saksnummer: SaksnummerDto;
};
export type HentFagsakResponse = FagsakDto;
export type HentBrukerForFagsakData = {
    saksnummer: SaksnummerDto;
};
export type HentBrukerForFagsakResponse = PersonDto;
export type MatchFagsakerData = {
    /**
     * Match kritierer for å lete opp fagsaker
     */
    requestBody?: MatchFagsak;
};
export type MatchFagsakerResponse = Array<FagsakInfoDto>;
export type HentRelaterteSakerData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentRelaterteSakerResponse = RelatertSakDto;
export type HentRettigheterData = {
    saksnummer: SaksnummerDto;
};
export type HentRettigheterResponse = SakRettigheterDto;
export type SøkFagsakerData = {
    /**
     * Søkestreng kan være saksnummer, fødselsnummer eller D-nummer.
     */
    requestBody?: SøkeSakEllerBrukerDto;
};
export type SøkFagsakerResponse = Array<FagsakDto>;
export type HentFagsakMidlertidigStatusData = {
    gruppe?: ProsessTaskGruppeIdDto;
    saksnummer: SaksnummerDto;
};
export type HentFagsakMidlertidigStatusResponse = AsyncPollingStatus;
export type InnsendingData = {
    /**
     * Hendelse innsendt.
     */
    requestBody?: HendelseDto;
};
export type InnsendingResponse = PåvirkedeSaker;
export type FinnPåvirkedeFagsakerData = {
    /**
     * Oppretter fagsak
     */
    requestBody?: HendelseDto;
};
export type FinnPåvirkedeFagsakerResponse = PåvirkedeSaker;
export type FinnSisteFagsakData = {
    /**
     * Oppretter fagsak
     */
    requestBody?: FinnSak;
};
export type FinnSisteFagsakResponse = unknown;
export type OpprettSakData = {
    /**
     * Oppretter fagsak
     */
    requestBody?: FinnEllerOpprettSak;
};
export type OpprettSakResponse = SaksnummerDto;
export type OpprettSakMedFnrData = {
    /**
     * Oppretter fagsak
     */
    requestBody?: FinnEllerOpprettSakFnr;
};
export type OpprettSakMedFnrResponse = SaksnummerDto;
export type OpprettSakOgMottaJournalpostData = {
    /**
     * Krever saksnummer, journalpostId, aktørId, periode og ytelseType
     */
    requestBody?: AbacJournalpostMottakOpprettSakDto;
};
export type OpprettSakOgMottaJournalpostResponse = unknown;
export type FinnEksisterendeFagsakData = {
    /**
     * Oppretter fagsak
     */
    requestBody?: FinnSak;
};
export type FinnEksisterendeFagsakResponse = SaksnummerDto;
export type Innsending1Data = {
    /**
     * Søknad/dokument innsendt.
     */
    requestBody?: Innsending;
};
export type Innsending1Response = InnsendingMottatt;
export type MottaJournalposterData = {
    /**
     * Krever saksnummer, journalpostId og behandlingstemaOffisiellKode
     */
    requestBody?: Array<AbacJournalpostMottakDto>;
};
export type MottaJournalposterResponse = unknown;
export type LeggTilPsbInfotrygdAktørData = {
    /**
     * Liste med aktør-IDer
     */
    requestBody?: AktørListeDto;
};
export type LeggTilPsbInfotrygdAktørResponse = unknown;
export type SjekkPsbInfotrygdPersonData = {
    /**
     * Sjekker om PSB-fordeling skal til Infotrygd for minst én av personen)
     */
    requestBody?: AktørListeDto;
};
export type SjekkPsbInfotrygdPersonResponse = boolean;
export type LeggTilPsbInfotrygdPersonData = {
    /**
     * Fødselsnumre (skilt med mellomrom eller linjeskift
     */
    requestBody?: PsbInfotrygdFødselsnumre;
};
export type LeggTilPsbInfotrygdPersonResponse = unknown;
export type FinnesEksisterendeFagsakMedEnAvAktøreneData = {
    /**
     * Søkeparametere
     */
    requestBody?: FinnSak;
};
export type FinnesEksisterendeFagsakMedEnAvAktøreneResponse = boolean;
export type LeggTilPbPersonData = {
    saksnummer: SaksnummerDto;
};
export type LeggTilPbPersonResponse = unknown;
export type FinnSakerSomSkalRevurderesResponse = unknown;
export type FinnUbehandledeDødsfallBehandlingerData = {
    antall: number;
};
export type FinnUbehandledeDødsfallBehandlingerResponse = unknown;
export type LoginData = {
    original?: string;
    redirectTo?: string;
};
export type LoginResponse = unknown;
export type FinnUbehandledeUnntaksbehandlngerResponse = unknown;
export type GetFnrForAktørIdData = {
    /**
     * AktørIder (skilt med mellomrom eller linjeskift)
     */
    requestBody?: HentFnr;
};
export type GetFnrForAktørIdResponse = unknown;
export type HentAlleInnslagData = {
    /**
     * Saksnummer må være et eksisterende saksnummer
     */
    saksnummer: SaksnummerDto;
};
export type HentAlleInnslagResponse = unknown;
export type DeaktiverSkjærinstidspunktData = {
    requestBody?: DeaktiverSkjæringstidspunktDto;
};
export type DeaktiverSkjærinstidspunktResponse = unknown;
export type FinnSakerMedDeaktivertMigreringResponse = Array<SaksnummerDto>;
export type FeilbehandledeMigreringerResponse = Array<SaksnummerDto>;
export type LeggTilSkjærinstidspunktData = {
    requestBody?: MigrerFraInfotrygdDto;
};
export type LeggTilSkjærinstidspunktResponse = unknown;
export type GetSkjæringstidspunkterData = {
    saksnummer?: SaksnummerDto;
};
export type GetSkjæringstidspunkterResponse = Array<MigrertSkjæringstidspunktDto>;
export type HentInitielleRessurserResponse = InitLinksDto;
export type FinnSystemerSomErNedeResponse = Array<SystemNedeDto>;
export type SkalViseDetaljerteFeilmeldingerResponse = boolean;
export type HentGruppertKodelisteResponse = unknown;
export type HentBehandlendeEnheterData = {
    ytelseType: 'DAG' | 'FRISINN' | 'SP' | 'PSB' | 'PPN' | 'OMP' | 'OMP_KS' | 'OMP_MA' | 'OMP_AO' | 'OLP' | 'AAP' | 'ES' | 'FP' | 'SVP' | 'EF' | 'OBSOLETE' | '-';
};
export type HentBehandlendeEnheterResponse = Array<OrganisasjonsEnhet>;
export type GetK9FormidlingKodeverkTyperResponse = K9FormidlingKodeverkWeb;
export type GetK9SakKodeverkTyperResponse = K9SakKodeverkWeb;
export type HentBehandlingData2Data = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentBehandlingData2Response = BehandlingMedFagsakDto;
export type HentLosdataForKlageData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type HentLosdataForKlageResponse = LosOpplysningerSomManglerIKlageDto;
export type GetMerknadData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type GetMerknadResponse = unknown;
export type PostMerknadData = {
    /**
     * behandlingUUID
     */
    requestBody?: MerknadEndretDto;
};
export type PostMerknadResponse = unknown;
export type InnloggetBrukerResponse = InnloggetAnsattDto;
export type GetSaksbehandlereData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type GetSaksbehandlereResponse = SaksbehandlerDto;
export type HentData = {
    /**
     * Notat uuid
     */
    notatId?: string;
    /**
     * Saksnummer
     */
    saksnummer: SaksnummerDto;
};
export type HentResponse = unknown;
export type OpprettData = {
    /**
     * Nytt notat
     */
    requestBody: OpprettNotatDto;
};
export type OpprettResponse = unknown;
export type EndreData = {
    /**
     * Notat som skal endres
     */
    requestBody: EndreNotatDto;
};
export type EndreResponse = unknown;
export type SkjulData = {
    /**
     * Notat som skal skjules
     */
    requestBody: SkjulNotatDto;
};
export type SkjulResponse = unknown;
export type HentIverksettingDataData = {
    behandlingId: BehandlingIdDto;
};
export type HentIverksettingDataResponse = TilkjentYtelseOppdrag;
export type HentMedUuidData = {
    id: string;
};
export type HentMedUuidResponse = GodkjentOpplæringsinstitusjonDto | void;
export type HentAktivMedUuidData = {
    /**
     * Format: YYYY-MM-DD/YYYY-MM-DD
     */
    aktivPeriode: Periode;
    id: string;
};
export type HentAktivMedUuidResponse = GodkjentOpplæringsinstitusjonDto | void;
export type HentAktiveData = {
    /**
     * Format: YYYY-MM-DD/YYYY-MM-DD
     */
    aktivPeriode: Periode;
};
export type HentAktiveResponse = Array<GodkjentOpplæringsinstitusjonDto>;
export type HentAlleResponse = Array<GodkjentOpplæringsinstitusjonDto>;
export type ErAktivData = {
    /**
     * Format: YYYY-MM-DD/YYYY-MM-DD
     */
    aktivPeriode: Periode;
    id: string;
};
export type ErAktivResponse = boolean;
export type HentAktørIdListeTilknyttetSakData = {
    saksnummer: SaksnummerDto;
};
export type HentAktørIdListeTilknyttetSakResponse = Array<(string)>;
export type HentAktørIdListeTilknyttetBehandlingData = {
    behandlingUuid: BehandlingIdDto;
};
export type HentAktørIdListeTilknyttetBehandlingResponse = PipDto;
export type CreateProsessTaskData = {
    /**
     * Informasjon for restart en eksisterende prosesstask
     */
    requestBody?: ProsessTaskOpprettInputDto;
};
export type CreateProsessTaskResponse = ProsessTaskDataDto;
export type RestartProsessTaskData = {
    /**
     * Informasjon for restart en eksisterende prosesstask
     */
    requestBody?: ProsessTaskRestartInputDto;
};
export type RestartProsessTaskResponse = ProsessTaskRestartResultatDto;
export type FinnProsessTasksData = {
    /**
     * Liste av statuser som skal hentes.
     */
    requestBody?: StatusFilterDto;
};
export type FinnProsessTasksResponse = ProsessTaskDataDto;
export type RetryAllProsessTaskResponse = ProsessTaskRetryAllResultatDto;
export type SetFeiletProsessTaskFerdigData = {
    /**
     * Prosesstask-id for feilet prosesstask
     */
    requestBody: ProsessTaskSetFerdigInputDto;
};
export type SetFeiletProsessTaskFerdigResponse = unknown;
export type GetUferdigJournalpostIderPrAktoerData = {
    /**
     * behandlingUUID
     */
    behandlingUuid: string;
};
export type GetUferdigJournalpostIderPrAktoerResponse = JournalpostIderDto;
export type GetUferdigJournalpostIderPrAktoer1Data = {
    /**
     * SAKSNUMMER
     */
    saksnummer: SaksnummerDto;
};
export type GetUferdigJournalpostIderPrAktoer1Response = JournalpostIderDto;
export type GenererRapportForYtelseData = {
    formData?: {
        periode: Periode;
        /**
         * rapport
         */
        rapport: 'UTBETALING_PER_DAG' | 'UTBETALING_PER_BRUKER' | 'G_REGULERING' | 'DELVIS_FULLT_KANTIKANT';
        /**
         * ytelseType
         */
        ytelseType: 'OMP' | 'PSB' | 'PPN' | 'OMP_KS' | 'OMP_MA' | 'OMP_AO' | 'FRISINN';
    };
};
export type GenererRapportForYtelseResponse = unknown;
export type CallbackData = {
    /**
     * callbackDto
     */
    requestBody?: CallbackDto;
};
export type CallbackResponse = unknown;
export type HentReservertSaksnummerData = {
    /**
     * SaksnummerDto
     */
    saksnummer: SaksnummerDto;
};
export type HentReservertSaksnummerResponse = HentReservertSaksnummerDto;
export type ReserverSaksnummerData = {
    /**
     * ReserverSaksnummerDto
     */
    requestBody: ReserverSaksnummerDto;
};
export type ReserverSaksnummerResponse = SaksnummerDto;
export type HentReserverteSaksnummerPåSøkerData = {
    /**
     * AktørIdDto
     */
    requestBody: AktørIdDto;
};
export type HentReserverteSaksnummerPåSøkerResponse = Array<HentReservertSaksnummerDto>;
export type FjernProsessTriggerForEndringFraAnnenOmsorgspersonData = {
    /**
     * Behandling-id
     */
    requestBody: BehandlingIdDto;
};
export type FjernProsessTriggerForEndringFraAnnenOmsorgspersonResponse = unknown;
export type FjernProsessTriggerForEndringFraAnnenOmsorgspersonMedGittPeriodeData = {
    formData?: {
        /**
         * begrunnelse
         */
        begrunnelse: string;
        behandlingId: BehandlingIdDto;
        periode: Periode;
    };
};
export type FjernProsessTriggerForEndringFraAnnenOmsorgspersonMedGittPeriodeResponse = unknown;
export type HentEndringsperioderTidslinjeData = {
    formData?: {
        behandlingId: BehandlingIdDto;
        periode: Periode;
    };
};
export type HentEndringsperioderTidslinjeResponse = unknown;
export type HentTidslinjerEndringFraAnnenOmsorgspersonData = {
    /**
     * Behandling-id
     */
    requestBody: BehandlingIdDto;
};
export type HentTidslinjerEndringFraAnnenOmsorgspersonResponse = unknown;
export type $OpenApiTs = {
    '/': {
        get: {
            req: DoRedirectData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/aapne-psb-med-soknad': {
        get: {
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/avbryt-aksjonspunkt': {
        post: {
            req: AvbrytAksjonspunktData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/behandling/vilkar/full-v3': {
        get: {
            req: GetVilkårFullV3Data;
            res: {
                /**
                 * Returnerer vilkår på behandling, tom liste hvis ikke eksisterer (GUI støtter ikke NOT_FOUND p.t.)
                 */
                200: VilkårMedPerioderDto;
            };
        };
    };
    '/behandlingsteg-historikk': {
        post: {
            req: HentBehandlingHistorikkData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/beskyttAktoerId': {
        post: {
            req: BeskyttAktoerIdData;
            res: {
                /**
                 * AktørId er endret.
                 */
                200: unknown;
                /**
                 * AktørId er uendret.
                 */
                400: unknown;
                /**
                 * Feilet pga ukjent feil.
                 */
                500: unknown;
            };
        };
    };
    '/diagnostikk/sak': {
        post: {
            req: DumpSakData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/feriepengerevurdering': {
        post: {
            req: OpprettFeriepengerevurderingData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/feriepengerevurdering-saksnumre': {
        post: {
            req: OpprettFeriepengerevurderingSaksnumreData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/innhent-registerdata': {
        post: {
            req: InnhentRegisterdataPåNyttData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/manuell-revurdering': {
        post: {
            req: OpprettNyManuellRevurderingEllerTilbakestillingAvÅpenBehandlingData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/marker-ugyldig': {
        post: {
            req: MarkerMottattDokumentUgyldigData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/rapportering/dump-fnr': {
        post: {
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/rapportering/innhent-fnr': {
        post: {
            req: InnhentFnrData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/saksnummerForBehandling': {
        post: {
            req: HentSaksnummerForBehandlingData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/starttidspunkt-aapen-behandling': {
        get: {
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/stonadstatistikk': {
        post: {
            req: HentUtStønadstatistikkData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/vilkar-historikk-beregning': {
        post: {
            req: HentVilkårhistorikkForBeregningData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/aksjonspunkt': {
        get: {
            req: GetAksjonspunkter2Data;
            res: {
                /**
                 * Returnerer behandlinger med aksjonspunkt på CSV format
                 */
                200: unknown;
            };
        };
    };
    '/aksjonspunkt/sammendrag_periode': {
        get: {
            req: GetAksjonspunkterSammendragData;
            res: {
                /**
                 * Returnerer behandlinger med aksjonspunkt opprettet innenfor angitt periode på CSV format
                 */
                200: unknown;
            };
        };
    };
    '/behandling/aksjonspunkt': {
        get: {
            req: GetAksjonspunkterData;
            res: {
                200: Array<AksjonspunktDto>;
            };
        };
        post: {
            req: BekreftData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/behandling/aksjonspunkt-v2': {
        get: {
            req: GetAksjonspunkter1Data;
            res: {
                200: Array<AksjonspunktDto>;
            };
        };
    };
    '/behandling/aksjonspunkt/kontroller-revurdering': {
        get: {
            req: ErKontrollerRevurderingAksjonspunktÅpentData;
            res: {
                200: boolean;
            };
        };
    };
    '/behandling/aksjonspunkt/overstyr': {
        post: {
            req: OverstyrData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/behandling/aksjonspunkt/risiko': {
        get: {
            req: GetRisikoAksjonspunktData;
            res: {
                200: AksjonspunktDto;
            };
        };
    };
    '/aktoer-info': {
        get: {
            req: GetAktoerInfoData;
            res: {
                /**
                 * Returnerer basisinformasjon om en aktør og hvilke fagsaker vedkommede har i k9-sak.
                 */
                200: AktørInfoDto;
            };
        };
    };
    '/forvaltning/person/saksnumre-for-person': {
        get: {
            req: GetAktoerInfo1Data;
            res: {
                /**
                 * Liste av fagsaker i k9-sak personen er del av.
                 */
                200: AktørInfoDto;
            };
        };
    };
    '/register/redirect-to/a-inntekt': {
        get: {
            req: GetAinntektUrlData;
            res: {
                /**
                 * Redirecter til a-inntekt for arbeidstakeren
                 */
                307: unknown;
            };
        };
    };
    '/register/redirect-to/aa-reg': {
        get: {
            req: GetAktoerInfo2Data;
            res: {
                /**
                 * Redirecter til aa-reg for arbeidstakeren
                 */
                307: unknown;
            };
        };
    };
    '/behandling': {
        get: {
            req: HentBehandlingData1Data;
            res: {
                /**
                 * Returnerer Behandling
                 */
                200: BehandlingDto;
            };
        };
    };
    '/behandling/backend-root': {
        get: {
            req: HentBehandlingResultatForBackendData;
            res: {
                /**
                 * Returnerer behandling
                 */
                200: BehandlingDto;
            };
        };
    };
    '/behandling/backend-root/refresh': {
        post: {
            req: OppfriskSakerData;
            res: {
                /**
                 * Hent behandling initiert, Returnerer status på fremdrift/feil i backend
                 */
                202: string;
            };
        };
    };
    '/behandling/direkte-overgang': {
        get: {
            req: HentDirekteOvergangForBehandlingData;
            res: {
                /**
                 * Returnerer skjæringstidspunkter for direkte overgang
                 */
                200: DirekteOvergangDto;
            };
        };
    };
    '/behandling/revurdering-original': {
        get: {
            req: HentRevurderingensOriginalBehandling1Data;
            res: {
                /**
                 * Returnerer avsluttet førstegangsbehandling
                 */
                200: BehandlingDto;
            };
        };
    };
    '/behandling/status': {
        get: {
            req: HentBehandlingMidlertidigStatus1Data;
            res: {
                /**
                 * Returnerer Status
                 */
                200: AsyncPollingStatus;
                /**
                 * Behandling tilgjenglig (prosesstasks avsluttet)
                 */
                303: string;
                /**
                 * ProsessTasks har feilet
                 */
                418: AsyncPollingStatus;
            };
        };
    };
    '/behandlinger': {
        get: {
            req: HentBehandlingDataData;
            res: {
                /**
                 * Returnerer Behandling
                 */
                200: BehandlingDto;
            };
        };
        post: {
            req: HentBehandlingData;
            res: {
                /**
                 * Hent behandling initiert, Returnerer link til å polle på fremdrift
                 */
                202: string;
                /**
                 * Behandling tilgjenglig (prosesstasks avsluttet)
                 */
                303: string;
            };
        };
        put: {
            req: OpprettNyBehandlingData;
            res: {
                /**
                 * Opprett ny behandling pågår
                 */
                202: string;
            };
        };
    };
    '/behandlinger/alle': {
        get: {
            req: HentBehandlingerData;
            res: {
                /**
                 * default response
                 */
                default: Array<BehandlingDto>;
            };
        };
    };
    '/behandlinger/bytt-enhet': {
        post: {
            req: ByttBehandlendeEnhetData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/behandlinger/endre-pa-vent': {
        post: {
            req: EndreFristForBehandlingPaVentData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/behandlinger/gjenoppta': {
        post: {
            req: GjenopptaBehandlingData;
            res: {
                /**
                 * Gjenoppta behandling påstartet i bakgrunnen
                 */
                200: string;
            };
        };
    };
    '/behandlinger/henlegg': {
        post: {
            req: HenleggBehandlingData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/behandlinger/opne-for-endringer': {
        post: {
            req: ÅpneBehandlingForEndringerData;
            res: {
                /**
                 * Åpning av behandling for endringer påstartet i bakgrunnen
                 */
                200: string;
            };
        };
    };
    '/behandlinger/rettigheter': {
        get: {
            req: HentLovligeBehandlingsoperasjonerData;
            res: {
                /**
                 * default response
                 */
                default: BehandlingOperasjonerDto;
            };
        };
    };
    '/behandlinger/revurdering-original': {
        get: {
            req: HentRevurderingensOriginalBehandlingData;
            res: {
                /**
                 * Returnerer avsluttet førstegangsbehandling
                 */
                200: BehandlingDto;
            };
        };
    };
    '/behandlinger/sett-pa-vent': {
        post: {
            req: SettBehandlingPaVentData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/behandlinger/status': {
        get: {
            req: HentBehandlingMidlertidigStatusData;
            res: {
                /**
                 * Returnerer Status
                 */
                200: AsyncPollingStatus;
                /**
                 * Behandling tilgjenglig (prosesstasks avsluttet)
                 */
                303: string;
                /**
                 * ProsessTasks har feilet
                 */
                418: AsyncPollingStatus;
            };
        };
    };
    '/behandlinger/unntak': {
        put: {
            req: OpprettNyUnntaksbehandlingData;
            res: {
                /**
                 * Opprett ny unntaksbehandling pågår
                 */
                202: string;
            };
        };
    };
    '/fagsak/behandling': {
        get: {
            req: HentAlleBehandlingerData;
            res: {
                /**
                 * default response
                 */
                default: Array<BehandlingDto>;
            };
        };
    };
    '/behandling/aarskvantum/forbruktedager': {
        get: {
            req: GetForbrukteDagerData;
            res: {
                /**
                 * Returnerer forbrukte dager av totalt årskvantum
                 */
                200: ÅrskvantumForbrukteDager;
            };
        };
    };
    '/behandling/aarskvantum/input': {
        post: {
            req: InputTilÅrskvantumsBeregningData;
            res: {
                /**
                 * input til beregning av årskvantum
                 */
                200: unknown;
            };
        };
    };
    '/behandling/aarskvantum/utbetalingsgrunnlag': {
        post: {
            req: HentUtbetalingsgrunnlagFraÅrskvantumData;
            res: {
                /**
                 * utbetalingsgrunnlag fra årskvantum
                 */
                200: unknown;
            };
        };
    };
    '/behandling/aarskvantum/uttaksplan': {
        get: {
            req: GetFullUttaksplanData;
            res: {
                /**
                 * Returnerer full uttaksplan hittil i år
                 */
                200: FullUttaksplan;
            };
        };
    };
    '/behandling/aarskvantum/uttrekk': {
        post: {
            res: {
                /**
                 * uttrekk fra årskvantum
                 */
                200: unknown;
            };
        };
    };
    '/behandling/arbeidsgiver': {
        get: {
            req: GetArbeidsgiverOpplysningerData;
            res: {
                /**
                 * Returnerer ArbeidsgiverOversiktDto
                 */
                200: ArbeidsgiverOversiktDto;
            };
        };
    };
    '/behandling/beregningsgrunnlag': {
        get: {
            req: HentBeregningsgrunnlagData;
            res: {
                /**
                 * default response
                 */
                default: BeregningsgrunnlagDto;
            };
        };
    };
    '/behandling/beregningsgrunnlag/alle': {
        get: {
            req: HentBeregningsgrunnlageneData;
            res: {
                /**
                 * default response
                 */
                default: Array<BeregningsgrunnlagDto>;
            };
        };
    };
    '/behandling/beregningsgrunnlag/koblinger': {
        get: {
            req: HentNøkkelknippeData;
            res: {
                /**
                 * default response
                 */
                default: Array<BeregningsgrunnlagKoblingDto>;
            };
        };
    };
    '/behandling/beregningsgrunnlag/koblingerTilVurdering': {
        get: {
            req: HentNøklerTilVurderingData;
            res: {
                /**
                 * default response
                 */
                default: Array<BeregningsgrunnlagKoblingDto>;
            };
        };
    };
    '/behandling/beregningsgrunnlag/overstyrInput': {
        get: {
            req: HentOverstyrInputBeregningData;
            res: {
                /**
                 * default response
                 */
                default: Array<OverstyrBeregningInputPeriode>;
            };
        };
    };
    '/behandling/beregningsresultat': {
        get: {
            req: HentBeregningsresultatData;
            res: {
                /**
                 * default response
                 */
                default: BeregningsresultatDto;
            };
        };
    };
    '/behandling/beregningsresultat/har-samme-resultat': {
        get: {
            req: HarRevurderingSammeResultatSomOriginalBehandlingData;
            res: {
                /**
                 * default response
                 */
                default: boolean;
            };
        };
    };
    '/behandling/beregningsresultat/utbetalt': {
        get: {
            req: HentBeregningsresultatMedUtbetalingData;
            res: {
                /**
                 * default response
                 */
                default: BeregningsresultatMedUtbetaltePeriodeDto;
            };
        };
    };
    '/behandling/fosterbarn': {
        get: {
            req: HentFosterbarnData;
            res: {
                /**
                 * Returnerer Fosterbarn, null hvis ikke finnes (GUI støtter ikke NOT_FOUND p.t.)
                 */
                200: FosterbarnListeDto;
            };
        };
    };
    '/behandling/gjennomgåttopplæring': {
        get: {
            req: HentVurdertOpplæringData;
            res: {
                /**
                 * perioder fra søknad og vurdert opplæring
                 */
                200: GjennomgåttOpplæringDto;
            };
        };
    };
    '/behandling/institusjon': {
        get: {
            req: HentVurdertInstitusjonData;
            res: {
                /**
                 * perioder fra søknad og vurderte institusjoner
                 */
                200: InstitusjonerDto;
            };
        };
    };
    '/behandling/nødvendigopplæring': {
        get: {
            req: HentVurdertNødvendigOpplæringData;
            res: {
                /**
                 * perioder fra søknad og vurdert opplæring
                 */
                200: NødvendigOpplæringDto;
            };
        };
    };
    '/behandling/opplæring/dokument/innhold': {
        get: {
            req: HentDokumentinnholdData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/behandling/opplæring/dokument/liste': {
        get: {
            req: HentDokumenterData;
            res: {
                200: OpplæringDokumentDto;
            };
        };
    };
    '/behandling/reisetid': {
        get: {
            req: HentVurdertReisetidData;
            res: {
                /**
                 * perioder fra søknad og vurdert reisetid
                 */
                200: ReisetidDto;
            };
        };
    };
    '/behandling/iay/arbeidsforhold-v2': {
        get: {
            req: GetArbeidsforholdData;
            res: {
                /**
                 * Returnerer InntektArbeidYtelseDto, null hvis ikke eksisterer (GUI støtter ikke NOT_FOUND p.t.)
                 */
                200: InntektArbeidYtelseArbeidsforholdV2Dto;
            };
        };
    };
    '/behandling/iay/im-arbeidsforhold-v2': {
        post: {
            req: HentArbeidsforholdIdFraInntektsmeldingerData;
            res: {
                /**
                 * Returnerer InntektArbeidYtelseDto, null hvis ikke eksisterer (GUI støtter ikke NOT_FOUND p.t.)
                 */
                200: InntektArbeidYtelseArbeidsforholdV2Dto;
            };
        };
    };
    '/behandling/kompletthet/beregning': {
        get: {
            req: UtledStatusForKompletthetData;
            res: {
                /**
                 * default response
                 */
                default: KompletthetsVurderingDto;
            };
        };
    };
    '/behandling/kompletthet/beregning-v2': {
        get: {
            req: UtledStatusForKompletthetV2Data;
            res: {
                /**
                 * default response
                 */
                default: KompletthetsVurderingV2Dto;
            };
        };
    };
    '/behandling/kompletthet/beregning/vurderinger': {
        get: {
            req: UtledVurderingerAvMottatteInntektsmeldingerData;
            res: {
                /**
                 * default response
                 */
                default: VurderingPerPeriode;
            };
        };
    };
    '/behandling/kontrollresultat': {
        get: {
            req: HentKontrollresultatData;
            res: {
                200: unknown;
            };
        };
    };
    '/behandling/kontrollresultat/resultat': {
        get: {
            req: HentKontrollresultatV21Data;
            res: {
                200: unknown;
            };
        };
    };
    '/behandling/omsorg-for': {
        get: {
            req: HentOmsorgenForInformasjonData;
            res: {
                /**
                 * null hvis ikke eksisterer
                 */
                200: OmsorgenForOversiktDto;
            };
        };
    };
    '/behandling/oppgitt-opptjening-v2': {
        get: {
            req: GetOppgittOpptjeningV2Data;
            res: {
                /**
                 * Returnerer SøknadsperiodeOgOppgittOpptjeningDto, null hvis ikke eksisterer (GUI støtter ikke NOT_FOUND p.t.)
                 */
                200: SøknadsperiodeOgOppgittOpptjeningV2Dto;
            };
        };
    };
    '/behandling/opptjening-v2': {
        get: {
            req: GetOpptjeningerData;
            res: {
                /**
                 * Returnerer Opptjening, null hvis ikke eksisterer (GUI støtter ikke NOT_FOUND p.t.)
                 */
                200: OpptjeningerDto;
            };
        };
    };
    '/behandling/opptjening/inntekt': {
        get: {
            req: GetInntektData;
            res: {
                /**
                 * Returnerer inntekter, null hvis ikke eksisterer (GUI støtter ikke NOT_FOUND p.t.)
                 */
                200: OpptjeningDto;
            };
        };
    };
    '/behandling/perioder': {
        get: {
            req: HentPerioderTilBehandlingData;
            res: {
                /**
                 * Liste med periode og årsaken til at perioden behandles
                 */
                200: StatusForPerioderPåBehandling;
            };
        };
    };
    '/behandling/perioder-med-vilkar': {
        get: {
            req: HentPerioderMedVilkårForBehandlingData;
            res: {
                /**
                 * Liste med periode og årsaken til at perioden behandles
                 */
                200: StatusForPerioderPåBehandling;
            };
        };
    };
    '/behandling/person/medlemskap-v2': {
        get: {
            req: HentMedlemskapData;
            res: {
                /**
                 * Returnerer Medlemskap, null hvis ikke finnes (GUI støtter ikke NOT_FOUND p.t.)
                 */
                200: MedlemV2Dto;
            };
        };
    };
    '/behandling/person/personopplysninger': {
        get: {
            req: GetPersonopplysningerData;
            res: {
                /**
                 * Returnerer Personopplysninger, null hvis ikke finnes (GUI støtter ikke NOT_FOUND p.t.)
                 */
                200: PersonopplysningDto;
            };
        };
    };
    '/behandling/pleietrengende': {
        get: {
            req: GetPersonopplysninger1Data;
            res: {
                /**
                 * Returnerer Personopplysninger, null hvis ikke finnes (GUI støtter ikke NOT_FOUND p.t.)
                 */
                200: PersonopplysningDto;
            };
        };
    };
    '/behandling/pleiepenger/arbeidstid-mangler': {
        get: {
            req: GetArbeidstidSomManglerData;
            res: {
                /**
                 * Henter ut arbeidstid som bruker skulle oppgitt
                 */
                200: ManglendeArbeidstidDto;
            };
        };
    };
    '/behandling/pleiepenger/debug-input': {
        post: {
            req: DebugInputData;
            res: {
                /**
                 * Uttaksgrunnlag
                 */
                200: unknown;
            };
        };
    };
    '/behandling/pleiepenger/debug-kjøreplan': {
        get: {
            req: KjøreplanData;
            res: {
                /**
                 * Uttaksgrunnlag
                 */
                200: unknown;
            };
        };
    };
    '/behandling/pleiepenger/simuler': {
        get: {
            req: SimulertUttaksplanData;
            res: {
                /**
                 * Returnerer simulert uttaksplan for angitt behandling
                 */
                200: Simulering;
            };
        };
    };
    '/behandling/pleiepenger/uttak': {
        get: {
            req: GetUttaksplanData;
            res: {
                /**
                 * Returnerer uttaksplan for angitt behandling
                 */
                200: Uttaksplan;
            };
        };
    };
    '/behandling/pleiepenger/uttak-med-utsatt': {
        get: {
            req: UttaksplanMedUtsattePerioderData;
            res: {
                /**
                 * Returnerer uttaksplan for angitt behandling
                 */
                200: UttaksplanMedUtsattePerioder;
            };
        };
    };
    '/behandling/pleiepenger/uttak/overstyrbare-aktiviteter': {
        post: {
            req: HentOverstyrbareAktiviterForUttakData;
            res: {
                /**
                 * Returnerer overstyrbare aktiviteter
                 */
                200: OverstyrbareUttakAktiviterDto;
            };
        };
    };
    '/behandling/pleiepenger/uttak/overstyrt': {
        get: {
            req: GetOverstyrtUttakData;
            res: {
                /**
                 * Returnerer uttak overstyrt av overstyrer, null hvis ikke finnes noe
                 */
                200: OverstyrtUttakDto;
            };
        };
    };
    '/behandling/uttak/fastsatt': {
        get: {
            req: GetFastsattUttakData;
            res: {
                /**
                 * Returnerer uttak fastsatt av saksbehandler (fakta avklart før vurdering av uttak), null hvis ikke finnes noe
                 */
                200: FastsattUttakDto;
            };
        };
    };
    '/behandling/uttak/oppgitt': {
        get: {
            req: GetOppgittUttakData;
            res: {
                /**
                 * Returnerer Oppgitt uttak fra søknad, null hvis ikke finnes noe
                 */
                200: OppgittUttakDto;
            };
        };
    };
    '/behandling/uttak/utenlandsopphold': {
        get: {
            req: GetUtenlandsoppholdData;
            res: {
                /**
                 * Returnerer søkers oppgitte utenlandsopphold, tom liste hvis det ikke finnes noe
                 */
                200: UtenlandsoppholdDto;
            };
        };
    };
    '/behandling/pleietrengende/dod': {
        get: {
            req: HentVurderingRettPleiepengerVedDødData;
            res: {
                /**
                 * rett til pleiepenger ved død
                 */
                200: VurderingRettPleiepengerVedDødDto;
                /**
                 * ingen rett til pleiepenger ved død vurdert
                 */
                204: void;
            };
        };
    };
    '/behandling/soknad': {
        get: {
            req: GetSøknadData;
            res: {
                /**
                 * Returnerer Søknad, null hvis ikke eksisterer (GUI støtter ikke NOT_FOUND p.t.)
                 */
                200: SøknadDto;
            };
        };
    };
    '/behandling/soknad/perioder': {
        post: {
            req: HentSøknadPerioderData;
            res: {
                /**
                 * default response
                 */
                default: Array<Periode>;
            };
        };
    };
    '/behandling/soknad/perioder/saksnummer': {
        post: {
            req: HentSøknadPerioderMedSaksnummerData;
            res: {
                /**
                 * default response
                 */
                default: Array<Periode>;
            };
        };
    };
    '/behandling/sykdom/aksjonspunkt': {
        get: {
            req: HentSykdomAksjonspunktData;
            res: {
                /**
                 * Informasjon om sykdomsaksjonspunkt
                 */
                200: SykdomAksjonspunktDto;
            };
        };
    };
    '/behandling/sykdom/dokument': {
        post: {
            req: OppdaterDokumentData;
            res: {
                /**
                 * Dokumentet har blitt opprettet.
                 */
                201: unknown;
            };
        };
    };
    '/behandling/sykdom/dokument/diagnosekoder': {
        get: {
            req: HentDiagnosekoderData;
            res: {
                200: SykdomDiagnosekoderDto;
            };
        };
        post: {
            req: OppdaterDiagnosekoderData;
            res: {
                /**
                 * Dokumentet har blitt opprettet.
                 */
                201: unknown;
            };
        };
    };
    '/behandling/sykdom/dokument/eksisterendevurderinger': {
        get: {
            req: HentSykdomsdokumenterSomIkkeHarOppdatertEksisterendeVurderingerData;
            res: {
                200: SykdomDokumentDto;
            };
        };
        post: {
            req: SykdomDokumentUtkvitterEksisterendeVurderingerData;
            res: {
                /**
                 * Dokumentene har blitt utkvittert.
                 */
                200: unknown;
            };
        };
    };
    '/behandling/sykdom/dokument/innleggelse': {
        get: {
            req: HentSykdomInnleggelseData;
            res: {
                200: SykdomInnleggelseDto;
            };
        };
        post: {
            req: OppdaterSykdomInnleggelseData;
            res: {
                /**
                 * Dokumentet har blitt opprettet.
                 */
                201: unknown;
            };
        };
    };
    '/behandling/sykdom/dokument/liste': {
        get: {
            req: HentSykdomsdokumenterData;
            res: {
                200: SykdomDokumentDto;
            };
        };
    };
    '/behandling/sykdom/dokument/ny': {
        post: {
            req: LeggTilNyttDokumentData;
            res: {
                /**
                 * Dokumentet har blitt opprettet.
                 */
                201: unknown;
            };
        };
    };
    '/behandling/sykdom/dokument/oversikt': {
        get: {
            req: HentDokumentoversiktData;
            res: {
                200: SykdomDokumentOversikt;
            };
        };
    };
    '/behandling/sykdom/vurdering': {
        get: {
            req: HentSykdomsInformasjonForData;
            res: {
                200: SykdomVurderingDto;
            };
        };
        post: {
            req: OpprettSykdomsVurderingData;
            res: {
                /**
                 * Et resultatobjekt som viser vurderinger som blir erstattet.
                 */
                200: SykdomVurderingEndringResultatDto;
            };
        };
    };
    '/behandling/sykdom/vurdering/oversikt/I_LIVETS_SLUTT': {
        get: {
            req: HentSykdomsoversiktForIlivetsSluttaseData;
            res: {
                200: SykdomVurderingOversikt;
            };
        };
    };
    '/behandling/sykdom/vurdering/oversikt/KONTINUERLIG_TILSYN_OG_PLEIE': {
        get: {
            req: HentSykdomsoversiktForKtpData;
            res: {
                200: SykdomVurderingOversikt;
            };
        };
    };
    '/behandling/sykdom/vurdering/oversikt/LANGVARIG_SYKDOM': {
        get: {
            req: HentSykdomsoversiktForLangvarigSykdomData;
            res: {
                200: SykdomVurderingOversikt;
            };
        };
    };
    '/behandling/sykdom/vurdering/oversikt/TO_OMSORGSPERSONER': {
        get: {
            req: HentSykdomsoversiktForToOmsorgspersonerData;
            res: {
                200: SykdomVurderingOversikt;
            };
        };
    };
    '/behandling/sykdom/vurdering/versjon': {
        post: {
            req: OppdaterSykdomsVurderingData;
            res: {
                /**
                 * Et resultatobjekt som viser vurderinger som blir erstattet.
                 */
                200: SykdomVurderingEndringResultatDto;
            };
        };
    };
    '/behandling/sykdom/dokument/innhold': {
        get: {
            req: HentDokumentinnhold1Data;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/dokument/hent-dokument': {
        get: {
            req: HentDokumentData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/dokument/hent-dokumentliste': {
        get: {
            req: HentAlleDokumenterForSakData;
            res: {
                /**
                 * default response
                 */
                default: Array<DokumentDto>;
            };
        };
    };
    '/behandling/søknadsfrist/status': {
        get: {
            req: UtledStatusData;
            res: {
                /**
                 * default response
                 */
                default: SøknadsfristTilstandDto;
            };
        };
    };
    '/behandling/tilbakekreving/valg': {
        get: {
            req: HentTilbakekrevingValgData;
            res: {
                /**
                 * default response
                 */
                default: TilbakekrevingValgDto;
            };
        };
    };
    '/behandling/tilbakekreving/varseltekst': {
        get: {
            req: HentVarseltekstData;
            res: {
                /**
                 * default response
                 */
                default: VarseltekstDto;
            };
        };
    };
    '/behandling/tilsyn': {
        get: {
            req: HentEtablertTilsynData;
            res: {
                /**
                 * perioder med etablert tilsyn, nattevåk og beredskap
                 */
                200: EtablertTilsynNattevåkOgBeredskapDto;
            };
        };
    };
    '/behandling/totrinnskontroll/arsaker': {
        get: {
            req: HentTotrinnskontrollSkjermlenkeContextData;
            res: {
                200: Array<TotrinnskontrollSkjermlenkeContextDto>;
            };
        };
    };
    '/behandling/totrinnskontroll/arsaker_read_only': {
        get: {
            req: HentTotrinnskontrollvurderingSkjermlenkeContextData;
            res: {
                200: Array<TotrinnskontrollSkjermlenkeContextDto>;
            };
        };
    };
    '/behandling/utvidetRett/rammevedtak': {
        get: {
            req: HentRammevedtakData;
            res: {
                /**
                 * Returnerer relevante rammevedtak for en behandling om utvidet rett
                 */
                200: RammevedtakResponse;
            };
        };
    };
    '/behandling/vedtak/fritekstdokumenter': {
        get: {
            req: HentDokumenterMedUstrukturerteDataData;
            res: {
                200: DokumentMedUstrukturerteDataDto;
            };
        };
    };
    '/brev/vedtak': {
        get: {
            req: HentVedtakVarselData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/behandling/vilkar-v3': {
        get: {
            req: GetVilkårV3Data;
            res: {
                /**
                 * Returnerer vilkår på behandling, tom liste hvis ikke eksisterer (GUI støtter ikke NOT_FOUND p.t.)
                 */
                200: VilkårDto;
            };
        };
    };
    '/behandling/vilkar/samlet': {
        get: {
            req: GetVilkårSamletData;
            res: {
                /**
                 * Returnerer vilkår på behandling, tom liste hvis ikke eksisterer (GUI støtter ikke NOT_FOUND p.t.)
                 */
                200: VilkårResultatContainer;
            };
        };
    };
    '/behandling/ytelser': {
        get: {
            req: HentOverlappendeYtelserData;
            res: {
                /**
                 * default response
                 */
                default: Array<OverlappendeYtelseDto>;
            };
        };
    };
    '/beregning': {
        get: {
            req: GetKalkulatorInputData;
            res: {
                /**
                 * Returnerer kalkulatorinput på JSON format
                 */
                200: Array<KalkulatorInputPrVilkårperiodeDto>;
            };
        };
    };
    '/beregning/finn-feil-inntektsmelding-bruk': {
        post: {
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/beregning/fjern-prosesstrigger-reberegning': {
        post: {
            req: FjernProsessTriggerForReberegningData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/beregning/inntektsmelding-sortering': {
        post: {
            req: InntektsmeldingSorteringData;
            res: {
                /**
                 * Returnerer kalkulatorinput på JSON format
                 */
                200: Array<Inntektsmelding>;
            };
        };
    };
    '/beregning/manuell-revurdering-beregning': {
        post: {
            req: RevurderGrunnetEndretOpplysningData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/beregning/manuell-revurdering-opptjening': {
        post: {
            req: RevurderGrunnetOpplysningOmOpptjeningData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/beregning/psb-aktivitetstatus-forlengelse-data': {
        post: {
            req: FinnAktivitetstatusForlengelseDataData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/beregning/revurder-bruk-forrige-skatteoppgjør': {
        post: {
            req: RevurderOgBrukForrigeSkatteoppgjørData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/beregning/revurder-innhent-pgi': {
        post: {
            req: RevurderOgInnhentPgiData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/brev/bestill': {
        post: {
            req: BestillDokumentData;
            res: {
                /**
                 * Bestilling ok
                 */
                200: void;
            };
        };
    };
    '/brev/mottaker-info/ereg': {
        post: {
            req: GetBrevMottakerinfoEregData;
            res: {
                /**
                 * respons fra ereg, eller null viss organisasjon ikke blir funnet
                 */
                200: (BrevMottakerinfoEregResponseDto) | null;
            };
        };
    };
    '/brukerdialog/omsorgsdager-kronisk-sykt-barn/har-gyldig-vedtak': {
        post: {
            req: HentSisteGyldigeVedtakForAktorIdData;
            res: {
                /**
                 * default response
                 */
                default: HarGyldigOmsorgsdagerVedtakDto;
            };
        };
    };
    '/fagsak': {
        get: {
            req: HentFagsakData;
            res: {
                /**
                 * Returnerer fagsak
                 */
                200: FagsakDto;
                /**
                 * Fagsak ikke tilgjengelig
                 */
                404: unknown;
            };
        };
    };
    '/fagsak/bruker': {
        get: {
            req: HentBrukerForFagsakData;
            res: {
                /**
                 * Returnerer person
                 */
                200: PersonDto;
                /**
                 * Person ikke tilgjengelig
                 */
                404: unknown;
            };
        };
    };
    '/fagsak/match': {
        post: {
            req: MatchFagsakerData;
            res: {
                /**
                 * default response
                 */
                default: Array<FagsakInfoDto>;
            };
        };
    };
    '/fagsak/relatertesaker': {
        get: {
            req: HentRelaterteSakerData;
            res: {
                200: RelatertSakDto;
            };
        };
    };
    '/fagsak/rettigheter': {
        get: {
            req: HentRettigheterData;
            res: {
                /**
                 * Returnerer rettigheter
                 */
                200: SakRettigheterDto;
                /**
                 * Fagsak ikke tilgjengelig
                 */
                404: unknown;
            };
        };
    };
    '/fagsak/sok': {
        post: {
            req: SøkFagsakerData;
            res: {
                /**
                 * default response
                 */
                default: Array<FagsakDto>;
            };
        };
    };
    '/fagsak/status': {
        get: {
            req: HentFagsakMidlertidigStatusData;
            res: {
                /**
                 * Returnerer Status
                 */
                200: AsyncPollingStatus;
                /**
                 * Pågående prosesstasks avsluttet
                 */
                303: string;
                /**
                 * ProsessTasks har feilet
                 */
                418: AsyncPollingStatus;
            };
        };
    };
    '/fagsak/hendelse/innsending': {
        post: {
            req: InnsendingData;
            res: {
                /**
                 * default response
                 */
                default: PåvirkedeSaker;
            };
        };
    };
    '/fagsak/hendelse/sok': {
        post: {
            req: FinnPåvirkedeFagsakerData;
            res: {
                /**
                 * default response
                 */
                default: PåvirkedeSaker;
            };
        };
    };
    '/fagsak/siste': {
        post: {
            req: FinnSisteFagsakData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/fordel/fagsak/opprett': {
        post: {
            req: OpprettSakData;
            res: {
                /**
                 * default response
                 */
                default: SaksnummerDto;
            };
        };
    };
    '/fordel/fagsak/opprett/fnr': {
        post: {
            req: OpprettSakMedFnrData;
            res: {
                /**
                 * default response
                 */
                default: SaksnummerDto;
            };
        };
    };
    '/fordel/fagsak/opprett/journalpost': {
        post: {
            req: OpprettSakOgMottaJournalpostData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/fordel/fagsak/sok': {
        post: {
            req: FinnEksisterendeFagsakData;
            res: {
                /**
                 * default response
                 */
                default: SaksnummerDto;
            };
        };
    };
    '/fordel/innsending': {
        post: {
            req: Innsending1Data;
            res: {
                /**
                 * default response
                 */
                default: InnsendingMottatt;
            };
        };
    };
    '/fordel/journalposter': {
        post: {
            req: MottaJournalposterData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/fordel/psb-infotrygd/aktoer': {
        post: {
            req: LeggTilPsbInfotrygdAktørData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/fordel/psb-infotrygd/finnes': {
        post: {
            req: SjekkPsbInfotrygdPersonData;
            res: {
                /**
                 * default response
                 */
                default: boolean;
            };
        };
    };
    '/fordel/psb-infotrygd/fnr': {
        post: {
            req: LeggTilPsbInfotrygdPersonData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/fordel/relatertSak': {
        post: {
            req: FinnesEksisterendeFagsakMedEnAvAktøreneData;
            res: {
                /**
                 * default response
                 */
                default: boolean;
            };
        };
    };
    '/fordel/sett-til-pb': {
        post: {
            req: LeggTilPbPersonData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/feriepengerevurderingkandidater': {
        post: {
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/finn-ubehandlede-saker-doed': {
        get: {
            req: FinnUbehandledeDødsfallBehandlingerData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/login': {
        get: {
            req: LoginData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/unntaksbehandling/forvaltning/finn-ubehandlede': {
        get: {
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/forvaltning/person/hentFnr': {
        post: {
            req: GetFnrForAktørIdData;
            res: {
                /**
                 * Hent fnr for aktørid
                 */
                200: unknown;
            };
        };
    };
    '/historikk': {
        get: {
            req: HentAlleInnslagData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/infotrygdmigrering/deaktiverSkjærinstidspunkt': {
        post: {
            req: DeaktiverSkjærinstidspunktData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/infotrygdmigrering/defaktiverteMigreringer': {
        get: {
            res: {
                /**
                 * Returnerer aker som har fått deaktivert migrering og har flere perioder
                 */
                200: Array<SaksnummerDto>;
            };
        };
    };
    '/infotrygdmigrering/feilbehandletMigrering': {
        get: {
            res: {
                /**
                 * Returnerer saker som feilaktig har blitt behandlet som ikke migrert fra infotrygd
                 */
                200: Array<SaksnummerDto>;
            };
        };
    };
    '/infotrygdmigrering/leggTilSkjæringstidspunkt': {
        post: {
            req: LeggTilSkjærinstidspunktData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/infotrygdmigrering/skjæringstidspunkter': {
        get: {
            req: GetSkjæringstidspunkterData;
            res: {
                /**
                 * Returnerer alle skjæringstidspunkt som har blitt lagret på sak
                 */
                200: Array<MigrertSkjæringstidspunktDto>;
            };
        };
    };
    '/init-fetch': {
        get: {
            res: {
                /**
                 * default response
                 */
                default: InitLinksDto;
            };
        };
    };
    '/integrasjon/status': {
        get: {
            res: {
                /**
                 * default response
                 */
                default: Array<SystemNedeDto>;
            };
        };
    };
    '/integrasjon/status/vises': {
        get: {
            res: {
                /**
                 * default response
                 */
                default: boolean;
            };
        };
    };
    '/kodeverk': {
        get: {
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/kodeverk/behandlende-enheter': {
        get: {
            req: HentBehandlendeEnheterData;
            res: {
                /**
                 * default response
                 */
                default: Array<OrganisasjonsEnhet>;
            };
        };
    };
    '/kodeverk/k9formidling/kodeverk/typer': {
        get: {
            res: {
                /**
                 * default response
                 */
                default: K9FormidlingKodeverkWeb;
            };
        };
    };
    '/kodeverk/k9sak/kodeverk/typer': {
        get: {
            res: {
                /**
                 * default response
                 */
                default: K9SakKodeverkWeb;
            };
        };
    };
    '/los/behandling': {
        get: {
            req: HentBehandlingData2Data;
            res: {
                /**
                 * Returnerer Behandling
                 */
                200: BehandlingMedFagsakDto;
            };
        };
    };
    '/los/klage/berik': {
        get: {
            req: HentLosdataForKlageData;
            res: {
                /**
                 * Returnerer opplysninger los trenger for å fylle ut klageoppgaver
                 */
                200: LosOpplysningerSomManglerIKlageDto;
            };
        };
    };
    '/los/merknad': {
        get: {
            req: GetMerknadData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
        post: {
            req: PostMerknadData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/nav-ansatt': {
        get: {
            res: {
                /**
                 * default response
                 */
                default: InnloggetAnsattDto;
            };
        };
    };
    '/saksbehandler': {
        get: {
            req: GetSaksbehandlereData;
            res: {
                /**
                 * default response
                 */
                default: SaksbehandlerDto;
            };
        };
    };
    '/notat': {
        get: {
            req: HentData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
        post: {
            req: OpprettData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/notat/endre': {
        post: {
            req: EndreData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/notat/skjul': {
        post: {
            req: SkjulData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/oppdrag/forvaltning/hent-iverksetting-data': {
        get: {
            req: HentIverksettingDataData;
            res: {
                /**
                 * Returnerer data som k9-sak sender tli k9-oppdrag ved iverksetting
                 */
                200: TilkjentYtelseOppdrag;
            };
        };
    };
    '/opplæringsinstitusjon': {
        get: {
            req: HentMedUuidData;
            res: {
                /**
                 * Returnerer opplæringsinstitusjon
                 */
                200: GodkjentOpplæringsinstitusjonDto;
                /**
                 * Opplæringsinstitusjon ikke funnet
                 */
                204: void;
            };
        };
    };
    '/opplæringsinstitusjon/aktiv': {
        get: {
            req: HentAktivMedUuidData;
            res: {
                /**
                 * Returnerer aktiv opplæringsinstitusjon
                 */
                200: GodkjentOpplæringsinstitusjonDto;
                /**
                 * Opplæringsinstitusjon ikke funnet
                 */
                204: void;
            };
        };
    };
    '/opplæringsinstitusjon/aktive': {
        get: {
            req: HentAktiveData;
            res: {
                /**
                 * Returnerer aktive opplæringsinstitusjoner for oppgitt periode
                 */
                200: Array<GodkjentOpplæringsinstitusjonDto>;
            };
        };
    };
    '/opplæringsinstitusjon/alle': {
        get: {
            res: {
                /**
                 * Returnerer opplæringsinstitusjoner
                 */
                200: Array<GodkjentOpplæringsinstitusjonDto>;
            };
        };
    };
    '/opplæringsinstitusjon/erAktiv': {
        get: {
            req: ErAktivData;
            res: {
                /**
                 * Returnerer om opplæringsinstitusjon er aktiv i oppgitt periode
                 */
                200: boolean;
            };
        };
    };
    '/pip/aktoer-for-sak': {
        get: {
            req: HentAktørIdListeTilknyttetSakData;
            res: {
                /**
                 * default response
                 */
                default: Array<(string)>;
            };
        };
    };
    '/pip/pipdata-for-behandling': {
        get: {
            req: HentAktørIdListeTilknyttetBehandlingData;
            res: {
                /**
                 * default response
                 */
                default: PipDto;
            };
        };
    };
    '/prosesstask/create': {
        post: {
            req: CreateProsessTaskData;
            res: {
                /**
                 * Prosesstaskens oppdatert informasjon
                 */
                202: ProsessTaskDataDto;
                /**
                 * Feilet pga ukjent feil eller tekniske/funksjonelle feil
                 */
                500: unknown;
            };
        };
    };
    '/prosesstask/launch': {
        post: {
            req: RestartProsessTaskData;
            res: {
                /**
                 * Prosesstaskens oppdatert informasjon
                 */
                200: ProsessTaskRestartResultatDto;
                /**
                 * Feilet pga ukjent feil eller tekniske/funksjonelle feil
                 */
                500: unknown;
            };
        };
    };
    '/prosesstask/list': {
        post: {
            req: FinnProsessTasksData;
            res: {
                /**
                 * Liste over prosesstasker, eller tom liste når angitt/default søkefilter ikke finner noen prosesstasker
                 */
                200: ProsessTaskDataDto;
            };
        };
    };
    '/prosesstask/retryall': {
        post: {
            res: {
                /**
                 * Response med liste av prosesstasks som restartes
                 */
                200: ProsessTaskRetryAllResultatDto;
                /**
                 * Feilet pga ukjent feil eller tekniske/funksjonelle feil
                 */
                500: unknown;
            };
        };
    };
    '/prosesstask/setferdig': {
        post: {
            req: SetFeiletProsessTaskFerdigData;
            res: {
                /**
                 * Angitt prosesstask-id satt til status FERDIG
                 */
                200: unknown;
                /**
                 * Feilet pga ukjent feil eller tekniske/funksjonelle feil
                 */
                500: unknown;
            };
        };
    };
    '/punsj/journalpost/uferdig': {
        get: {
            req: GetUferdigJournalpostIderPrAktoerData;
            res: {
                /**
                 * Returnerer en liste med uferdig journalpostIder som ligger i punsj på gitt behandlingUuid.
                 */
                200: JournalpostIderDto;
            };
        };
    };
    '/punsj/journalpost/uferdig/v2': {
        get: {
            req: GetUferdigJournalpostIderPrAktoer1Data;
            res: {
                /**
                 * Returnerer en liste med uferdig journalpostIder som ligger i punsj på et gitt saksnummer.
                 */
                200: JournalpostIderDto;
            };
        };
    };
    '/rapportering/generer': {
        post: {
            req: GenererRapportForYtelseData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/registerdata/iay/callback': {
        post: {
            req: CallbackData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/saksnummer': {
        get: {
            req: HentReservertSaksnummerData;
            res: {
                /**
                 * default response
                 */
                default: HentReservertSaksnummerDto;
            };
        };
    };
    '/saksnummer/reserver': {
        post: {
            req: ReserverSaksnummerData;
            res: {
                /**
                 * default response
                 */
                default: SaksnummerDto;
            };
        };
    };
    '/saksnummer/søker': {
        post: {
            req: HentReserverteSaksnummerPåSøkerData;
            res: {
                /**
                 * default response
                 */
                default: Array<HentReservertSaksnummerDto>;
            };
        };
    };
    '/uttak/fjern-prosesstrigger-endring-annen-omsorgsperson': {
        post: {
            req: FjernProsessTriggerForEndringFraAnnenOmsorgspersonData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/uttak/fjern-prosesstrigger-endring-annen-omsorgsperson-gitt-periode': {
        post: {
            req: FjernProsessTriggerForEndringFraAnnenOmsorgspersonMedGittPeriodeData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/uttak/hent-endret-uttak-revurdering-tidslinjer': {
        post: {
            req: HentEndringsperioderTidslinjeData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
    '/uttak/hent-endringstidslinjer-fra-annen-omsorgsperson': {
        post: {
            req: HentTidslinjerEndringFraAnnenOmsorgspersonData;
            res: {
                /**
                 * default response
                 */
                default: unknown;
            };
        };
    };
};
//# sourceMappingURL=types.gen.d.ts.map