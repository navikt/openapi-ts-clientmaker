import type { CancelablePromise } from './core/CancelablePromise';
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { DoRedirectData, DoRedirectResponse, AntallÅpnePsbMedSøknadResponse, AvbrytAksjonspunktData, AvbrytAksjonspunktResponse, GetVilkårFullV3Data, GetVilkårFullV3Response, HentBehandlingHistorikkData, HentBehandlingHistorikkResponse, BeskyttAktoerIdData, BeskyttAktoerIdResponse, DumpSakData, DumpSakResponse, OpprettFeriepengerevurderingData, OpprettFeriepengerevurderingResponse, OpprettFeriepengerevurderingSaksnumreData, OpprettFeriepengerevurderingSaksnumreResponse, InnhentRegisterdataPåNyttData, InnhentRegisterdataPåNyttResponse, OpprettNyManuellRevurderingEllerTilbakestillingAvÅpenBehandlingData, OpprettNyManuellRevurderingEllerTilbakestillingAvÅpenBehandlingResponse, MarkerMottattDokumentUgyldigData, MarkerMottattDokumentUgyldigResponse, DumpFnrCacheResponse, InnhentFnrData, InnhentFnrResponse, HentSaksnummerForBehandlingData, HentSaksnummerForBehandlingResponse, HentStarttidspunktÅpenBehandlingResponse, HentUtStønadstatistikkData, HentUtStønadstatistikkResponse, HentVilkårhistorikkForBeregningData, HentVilkårhistorikkForBeregningResponse, GetAksjonspunkter2Data, GetAksjonspunkter2Response, GetAksjonspunkterSammendragData, GetAksjonspunkterSammendragResponse, GetAksjonspunkterData, GetAksjonspunkterResponse, BekreftData, BekreftResponse, GetAksjonspunkter1Data, GetAksjonspunkter1Response, ErKontrollerRevurderingAksjonspunktÅpentData, ErKontrollerRevurderingAksjonspunktÅpentResponse, OverstyrData, OverstyrResponse, GetRisikoAksjonspunktData, GetRisikoAksjonspunktResponse, GetAktoerInfoData, GetAktoerInfoResponse, GetAktoerInfo1Data, GetAktoerInfo1Response, GetAinntektUrlData, GetAktoerInfo2Data, HentBehandlingData1Data, HentBehandlingData1Response, HentBehandlingResultatForBackendData, HentBehandlingResultatForBackendResponse, OppfriskSakerData, OppfriskSakerResponse, HentDirekteOvergangForBehandlingData, HentDirekteOvergangForBehandlingResponse, HentRevurderingensOriginalBehandling1Data, HentRevurderingensOriginalBehandling1Response, HentBehandlingMidlertidigStatus1Data, HentBehandlingMidlertidigStatus1Response, HentBehandlingDataData, HentBehandlingDataResponse, HentBehandlingData, HentBehandlingResponse, OpprettNyBehandlingData, OpprettNyBehandlingResponse, HentBehandlingerData, HentBehandlingerResponse, ByttBehandlendeEnhetData, ByttBehandlendeEnhetResponse, EndreFristForBehandlingPaVentData, EndreFristForBehandlingPaVentResponse, GjenopptaBehandlingData, GjenopptaBehandlingResponse, HenleggBehandlingData, HenleggBehandlingResponse, ÅpneBehandlingForEndringerData, ÅpneBehandlingForEndringerResponse, HentLovligeBehandlingsoperasjonerData, HentLovligeBehandlingsoperasjonerResponse, HentRevurderingensOriginalBehandlingData, HentRevurderingensOriginalBehandlingResponse, SettBehandlingPaVentData, SettBehandlingPaVentResponse, HentBehandlingMidlertidigStatusData, HentBehandlingMidlertidigStatusResponse, OpprettNyUnntaksbehandlingData, OpprettNyUnntaksbehandlingResponse, HentAlleBehandlingerData, HentAlleBehandlingerResponse, GetForbrukteDagerData, GetForbrukteDagerResponse, InputTilÅrskvantumsBeregningData, InputTilÅrskvantumsBeregningResponse, HentUtbetalingsgrunnlagFraÅrskvantumData, HentUtbetalingsgrunnlagFraÅrskvantumResponse, GetFullUttaksplanData, GetFullUttaksplanResponse, HentUttrekkResponse, GetArbeidsgiverOpplysningerData, GetArbeidsgiverOpplysningerResponse, HentBeregningsgrunnlagData, HentBeregningsgrunnlagResponse, HentBeregningsgrunnlageneData, HentBeregningsgrunnlageneResponse, HentNøkkelknippeData, HentNøkkelknippeResponse, HentNøklerTilVurderingData, HentNøklerTilVurderingResponse, HentOverstyrInputBeregningData, HentOverstyrInputBeregningResponse, HentBeregningsresultatData, HentBeregningsresultatResponse, HarRevurderingSammeResultatSomOriginalBehandlingData, HarRevurderingSammeResultatSomOriginalBehandlingResponse, HentBeregningsresultatMedUtbetalingData, HentBeregningsresultatMedUtbetalingResponse, HentFosterbarnData, HentFosterbarnResponse, HentVurdertOpplæringData, HentVurdertOpplæringResponse, HentVurdertInstitusjonData, HentVurdertInstitusjonResponse, HentVurdertNødvendigOpplæringData, HentVurdertNødvendigOpplæringResponse, HentDokumentinnholdData, HentDokumentinnholdResponse, HentDokumenterData, HentDokumenterResponse, HentVurdertReisetidData, HentVurdertReisetidResponse, GetArbeidsforholdData, GetArbeidsforholdResponse, HentArbeidsforholdIdFraInntektsmeldingerData, HentArbeidsforholdIdFraInntektsmeldingerResponse, UtledStatusForKompletthetData, UtledStatusForKompletthetResponse, UtledStatusForKompletthetV2Data, UtledStatusForKompletthetV2Response, UtledVurderingerAvMottatteInntektsmeldingerData, UtledVurderingerAvMottatteInntektsmeldingerResponse, HentKontrollresultatData, HentKontrollresultatResponse, HentKontrollresultatV21Data, HentKontrollresultatV21Response, HentOmsorgenForInformasjonData, HentOmsorgenForInformasjonResponse, GetOppgittOpptjeningV2Data, GetOppgittOpptjeningV2Response, GetOpptjeningerData, GetOpptjeningerResponse, GetInntektData, GetInntektResponse, HentPerioderTilBehandlingData, HentPerioderTilBehandlingResponse, HentPerioderMedVilkårForBehandlingData, HentPerioderMedVilkårForBehandlingResponse, HentMedlemskapData, HentMedlemskapResponse, GetPersonopplysningerData, GetPersonopplysningerResponse, GetPersonopplysninger1Data, GetPersonopplysninger1Response, GetArbeidstidSomManglerData, GetArbeidstidSomManglerResponse, DebugInputData, DebugInputResponse, KjøreplanData, KjøreplanResponse, SimulertUttaksplanData, SimulertUttaksplanResponse, GetUttaksplanData, GetUttaksplanResponse, UttaksplanMedUtsattePerioderData, UttaksplanMedUtsattePerioderResponse, HentOverstyrbareAktiviterForUttakData, HentOverstyrbareAktiviterForUttakResponse, GetOverstyrtUttakData, GetOverstyrtUttakResponse, GetFastsattUttakData, GetFastsattUttakResponse, GetOppgittUttakData, GetOppgittUttakResponse, GetUtenlandsoppholdData, GetUtenlandsoppholdResponse, HentVurderingRettPleiepengerVedDødData, HentVurderingRettPleiepengerVedDødResponse, GetSøknadData, GetSøknadResponse, HentSøknadPerioderData, HentSøknadPerioderResponse, HentSøknadPerioderMedSaksnummerData, HentSøknadPerioderMedSaksnummerResponse, HentSykdomAksjonspunktData, HentSykdomAksjonspunktResponse, OppdaterDokumentData, OppdaterDokumentResponse, HentDiagnosekoderData, HentDiagnosekoderResponse, OppdaterDiagnosekoderData, OppdaterDiagnosekoderResponse, HentSykdomsdokumenterSomIkkeHarOppdatertEksisterendeVurderingerData, HentSykdomsdokumenterSomIkkeHarOppdatertEksisterendeVurderingerResponse, SykdomDokumentUtkvitterEksisterendeVurderingerData, SykdomDokumentUtkvitterEksisterendeVurderingerResponse, HentSykdomInnleggelseData, HentSykdomInnleggelseResponse, OppdaterSykdomInnleggelseData, OppdaterSykdomInnleggelseResponse, HentSykdomsdokumenterData, HentSykdomsdokumenterResponse, LeggTilNyttDokumentData, LeggTilNyttDokumentResponse, HentDokumentoversiktData, HentDokumentoversiktResponse, HentSykdomsInformasjonForData, HentSykdomsInformasjonForResponse, OpprettSykdomsVurderingData, OpprettSykdomsVurderingResponse, HentSykdomsoversiktForIlivetsSluttaseData, HentSykdomsoversiktForIlivetsSluttaseResponse, HentSykdomsoversiktForKtpData, HentSykdomsoversiktForKtpResponse, HentSykdomsoversiktForLangvarigSykdomData, HentSykdomsoversiktForLangvarigSykdomResponse, HentSykdomsoversiktForToOmsorgspersonerData, HentSykdomsoversiktForToOmsorgspersonerResponse, OppdaterSykdomsVurderingData, OppdaterSykdomsVurderingResponse, HentDokumentinnhold1Data, HentDokumentinnhold1Response, HentDokumentData, HentDokumentResponse, HentAlleDokumenterForSakData, HentAlleDokumenterForSakResponse, UtledStatusData, UtledStatusResponse, HentTilbakekrevingValgData, HentTilbakekrevingValgResponse, HentVarseltekstData, HentVarseltekstResponse, HentEtablertTilsynData, HentEtablertTilsynResponse, HentTotrinnskontrollSkjermlenkeContextData, HentTotrinnskontrollSkjermlenkeContextResponse, HentTotrinnskontrollvurderingSkjermlenkeContextData, HentTotrinnskontrollvurderingSkjermlenkeContextResponse, HentRammevedtakData, HentRammevedtakResponse, HentDokumenterMedUstrukturerteDataData, HentDokumenterMedUstrukturerteDataResponse, HentVedtakVarselData, HentVedtakVarselResponse, GetVilkårV3Data, GetVilkårV3Response, GetVilkårSamletData, GetVilkårSamletResponse, HentOverlappendeYtelserData, HentOverlappendeYtelserResponse, GetKalkulatorInputData, GetKalkulatorInputResponse, FinnBehandlingerMedFeilImResponse, FjernProsessTriggerForReberegningData, FjernProsessTriggerForReberegningResponse, InntektsmeldingSorteringData, InntektsmeldingSorteringResponse, RevurderGrunnetEndretOpplysningData, RevurderGrunnetEndretOpplysningResponse, RevurderGrunnetOpplysningOmOpptjeningData, RevurderGrunnetOpplysningOmOpptjeningResponse, FinnAktivitetstatusForlengelseDataData, FinnAktivitetstatusForlengelseDataResponse, RevurderOgBrukForrigeSkatteoppgjørData, RevurderOgBrukForrigeSkatteoppgjørResponse, RevurderOgInnhentPgiData, RevurderOgInnhentPgiResponse, BestillDokumentData, BestillDokumentResponse, GetBrevMottakerinfoEregData, GetBrevMottakerinfoEregResponse, HentSisteGyldigeVedtakForAktorIdData, HentSisteGyldigeVedtakForAktorIdResponse, HentFagsakData, HentFagsakResponse, HentBrukerForFagsakData, HentBrukerForFagsakResponse, MatchFagsakerData, MatchFagsakerResponse, HentRelaterteSakerData, HentRelaterteSakerResponse, HentRettigheterData, HentRettigheterResponse, SøkFagsakerData, SøkFagsakerResponse, HentFagsakMidlertidigStatusData, HentFagsakMidlertidigStatusResponse, InnsendingData, InnsendingResponse, FinnPåvirkedeFagsakerData, FinnPåvirkedeFagsakerResponse, FinnSisteFagsakData, FinnSisteFagsakResponse, OpprettSakData, OpprettSakResponse, OpprettSakMedFnrData, OpprettSakMedFnrResponse, OpprettSakOgMottaJournalpostData, OpprettSakOgMottaJournalpostResponse, FinnEksisterendeFagsakData, FinnEksisterendeFagsakResponse, Innsending1Data, Innsending1Response, MottaJournalposterData, MottaJournalposterResponse, LeggTilPsbInfotrygdAktørData, LeggTilPsbInfotrygdAktørResponse, SjekkPsbInfotrygdPersonData, SjekkPsbInfotrygdPersonResponse, LeggTilPsbInfotrygdPersonData, LeggTilPsbInfotrygdPersonResponse, FinnesEksisterendeFagsakMedEnAvAktøreneData, FinnesEksisterendeFagsakMedEnAvAktøreneResponse, LeggTilPbPersonData, LeggTilPbPersonResponse, FinnSakerSomSkalRevurderesResponse, FinnUbehandledeDødsfallBehandlingerData, FinnUbehandledeDødsfallBehandlingerResponse, LoginData, LoginResponse, FinnUbehandledeUnntaksbehandlngerResponse, GetFnrForAktørIdData, GetFnrForAktørIdResponse, HentAlleInnslagData, HentAlleInnslagResponse, DeaktiverSkjærinstidspunktData, DeaktiverSkjærinstidspunktResponse, FinnSakerMedDeaktivertMigreringResponse, FeilbehandledeMigreringerResponse, LeggTilSkjærinstidspunktData, LeggTilSkjærinstidspunktResponse, GetSkjæringstidspunkterData, GetSkjæringstidspunkterResponse, HentInitielleRessurserResponse, FinnSystemerSomErNedeResponse, SkalViseDetaljerteFeilmeldingerResponse, HentGruppertKodelisteResponse, HentBehandlendeEnheterData, HentBehandlendeEnheterResponse, GetK9FormidlingKodeverkTyperResponse, GetK9SakKodeverkTyperResponse, HentBehandlingData2Data, HentBehandlingData2Response, HentLosdataForKlageData, HentLosdataForKlageResponse, GetMerknadData, GetMerknadResponse, PostMerknadData, PostMerknadResponse, InnloggetBrukerResponse, GetSaksbehandlereData, GetSaksbehandlereResponse, HentData, HentResponse, OpprettData, OpprettResponse, EndreData, EndreResponse, SkjulData, SkjulResponse, HentIverksettingDataData, HentIverksettingDataResponse, HentMedUuidData, HentMedUuidResponse, HentAktivMedUuidData, HentAktivMedUuidResponse, HentAktiveData, HentAktiveResponse, HentAlleResponse, ErAktivData, ErAktivResponse, HentAktørIdListeTilknyttetSakData, HentAktørIdListeTilknyttetSakResponse, HentAktørIdListeTilknyttetBehandlingData, HentAktørIdListeTilknyttetBehandlingResponse, CreateProsessTaskData, CreateProsessTaskResponse, RestartProsessTaskData, RestartProsessTaskResponse, FinnProsessTasksData, FinnProsessTasksResponse, RetryAllProsessTaskResponse, SetFeiletProsessTaskFerdigData, SetFeiletProsessTaskFerdigResponse, GetUferdigJournalpostIderPrAktoerData, GetUferdigJournalpostIderPrAktoerResponse, GetUferdigJournalpostIderPrAktoer1Data, GetUferdigJournalpostIderPrAktoer1Response, GenererRapportForYtelseData, GenererRapportForYtelseResponse, CallbackData, CallbackResponse, HentReservertSaksnummerData, HentReservertSaksnummerResponse, ReserverSaksnummerData, ReserverSaksnummerResponse, HentReserverteSaksnummerPåSøkerData, HentReserverteSaksnummerPåSøkerResponse, FjernProsessTriggerForEndringFraAnnenOmsorgspersonData, FjernProsessTriggerForEndringFraAnnenOmsorgspersonResponse, FjernProsessTriggerForEndringFraAnnenOmsorgspersonMedGittPeriodeData, FjernProsessTriggerForEndringFraAnnenOmsorgspersonMedGittPeriodeResponse, HentEndringsperioderTidslinjeData, HentEndringsperioderTidslinjeResponse, HentTidslinjerEndringFraAnnenOmsorgspersonData, HentTidslinjerEndringFraAnnenOmsorgspersonResponse } from './types.gen';
export declare class RedirectService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * redirect til oppgave
     * @param oppgaveId
     * @param sakId
     * @returns unknown default response
     * @throws ApiError
     */
    doRedirect(oppgaveId?: DoRedirectData['oppgaveId'], sakId?: DoRedirectData['sakId']): CancelablePromise<DoRedirectResponse>;
}
export declare class ForvaltningService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Henter åpne saker i PSB.
     * Henter åpne saker i PSB.
     * @returns unknown default response
     * @throws ApiError
     */
    antallÅpnePsbMedSøknad(): CancelablePromise<AntallÅpnePsbMedSøknadResponse>;
    /**
     * Avbryter feilopprettet aksjonspunkt
     * Avbryter feilopprettet aksjonspunkt
     * @param requestBody
     * @returns unknown default response
     * @throws ApiError
     */
    avbrytAksjonspunkt(requestBody: AvbrytAksjonspunktData['requestBody']): CancelablePromise<AvbrytAksjonspunktResponse>;
    /**
     * Returnerer info om vilkår, inkludert hvordan eventuelt kjørt (input og evaluering).
     * Forvaltning : Hent informasjon om vilkår for en behandling
     * @param behandlingUuid behandlingUUID
     * @returns VilkårMedPerioderDto Returnerer vilkår på behandling, tom liste hvis ikke eksisterer (GUI støtter ikke NOT_FOUND p.t.)
     * @throws ApiError
     */
    getVilkårFullV3(behandlingUuid: GetVilkårFullV3Data['behandlingUuid']): CancelablePromise<GetVilkårFullV3Response>;
    /**
     * Henter behandlingsteghistorikk
     * Henter behandlingsteghistorikk
     * @param requestBody Behandling-UUID
     * @returns unknown default response
     * @throws ApiError
     */
    hentBehandlingHistorikk(requestBody: HentBehandlingHistorikkData['requestBody']): CancelablePromise<HentBehandlingHistorikkResponse>;
    /**
     * Beskytt aktørid og oppdaterer nødvendige tabeller
     * @param requestBody Liste med aktør-IDer
     * @returns unknown AktørId er endret.
     * @throws ApiError
     */
    beskyttAktoerId(requestBody?: BeskyttAktoerIdData['requestBody']): CancelablePromise<BeskyttAktoerIdResponse>;
    /**
     * Henter en dump av info for debugging og analyse av en sak
     * Henter en dump av info for debugging og analyse av en sak. Logger hvem som har hatt innsyn i sak
     * @param formData
     * @returns unknown default response
     * @throws ApiError
     */
    dumpSak(formData?: DumpSakData['formData']): CancelablePromise<DumpSakResponse>;
    /**
     * Oppretter automatisk revurdering av feriepenger.
     * Oppretter automatisk revurdering av feriepenger.
     * @param requestBody Fødselsnumre (skilt med mellomrom eller linjeskift)
     * @returns unknown default response
     * @throws ApiError
     */
    opprettFeriepengerevurdering(requestBody?: OpprettFeriepengerevurderingData['requestBody']): CancelablePromise<OpprettFeriepengerevurderingResponse>;
    /**
     * Oppretter automatisk revurdering av feriepenger.
     * Oppretter automatisk revurdering av feriepenger.
     * @param requestBody Saksnumre (skilt med mellomrom eller linjeskift)
     * @returns unknown default response
     * @throws ApiError
     */
    opprettFeriepengerevurderingSaksnumre(requestBody?: OpprettFeriepengerevurderingSaksnumreData['requestBody']): CancelablePromise<OpprettFeriepengerevurderingSaksnumreResponse>;
    /**
     * Innhent registerdata på nytt
     * Innhent registerdata på nytt
     * @param formData
     * @returns unknown default response
     * @throws ApiError
     */
    innhentRegisterdataPåNytt(formData?: InnhentRegisterdataPåNyttData['formData']): CancelablePromise<InnhentRegisterdataPåNyttResponse>;
    /**
     * Oppretter manuell revurdering med annet som årsak.
     * Oppretter manuell revurdering med annet som årsak.
     * @param requestBody Saksnumre (skilt med mellomrom eller linjeskift)
     * @returns unknown default response
     * @throws ApiError
     */
    opprettNyManuellRevurderingEllerTilbakestillingAvÅpenBehandling(requestBody?: OpprettNyManuellRevurderingEllerTilbakestillingAvÅpenBehandlingData['requestBody']): CancelablePromise<OpprettNyManuellRevurderingEllerTilbakestillingAvÅpenBehandlingResponse>;
    /**
     * Markerer angitt dokument som ugyldig
     * Markerer et mottatt dokument som ugyldig
     * @param formData
     * @returns unknown default response
     * @throws ApiError
     */
    markerMottattDokumentUgyldig(formData?: MarkerMottattDokumentUgyldigData['formData']): CancelablePromise<MarkerMottattDokumentUgyldigResponse>;
    /**
     * Dump Cache fnr
     * Dump Cache fnr
     * @returns unknown default response
     * @throws ApiError
     */
    dumpFnrCache(): CancelablePromise<DumpFnrCacheResponse>;
    /**
     * Cache fnr for aktørid for rapporteringsformålg
     * Cache fnr for aktørid for rapporteringsformål
     * @param formData
     * @returns unknown default response
     * @throws ApiError
     */
    innhentFnr(formData?: InnhentFnrData['formData']): CancelablePromise<InnhentFnrResponse>;
    /**
     * Finner saksnummer for behandlinguuid
     * Finner saksnummer for behandlinguuid
     * @param requestBody Behandling-UUID
     * @returns unknown default response
     * @throws ApiError
     */
    hentSaksnummerForBehandling(requestBody: HentSaksnummerForBehandlingData['requestBody']): CancelablePromise<HentSaksnummerForBehandlingResponse>;
    /**
     * Henter starttidspunkt for åpen behandling. Dvs tidspunktet den første søknaden kom inn på behandlingen i k9-sak.
     * Henter starttidspunkt for åpen behandling. Dvs tidspunktet den første søknaden kom inn på behandlingen i k9-sak.
     * @returns unknown default response
     * @throws ApiError
     */
    hentStarttidspunktÅpenBehandling(): CancelablePromise<HentStarttidspunktÅpenBehandlingResponse>;
    /**
     * Henter ut stønadstatistikk-JSON.
     * Henter ut stønadstatistikk-JSON.
     * @param requestBody Behandling-UUID
     * @returns unknown default response
     * @throws ApiError
     */
    hentUtStønadstatistikk(requestBody: HentUtStønadstatistikkData['requestBody']): CancelablePromise<HentUtStønadstatistikkResponse>;
    /**
     * Henter vilkårshistorikk for beregning
     * Henter vilkårshistorikk for beregning
     * @param requestBody Behandling-UUID
     * @returns unknown default response
     * @throws ApiError
     */
    hentVilkårhistorikkForBeregning(requestBody: HentVilkårhistorikkForBeregningData['requestBody']): CancelablePromise<HentVilkårhistorikkForBeregningResponse>;
}
export declare class AksjonspunktService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Hent aksjonspunter for saker
     * @param saksnummer
     * @returns unknown Returnerer behandlinger med aksjonspunkt på CSV format
     * @throws ApiError
     */
    getAksjonspunkter2(saksnummer?: GetAksjonspunkter2Data['saksnummer']): CancelablePromise<GetAksjonspunkter2Response>;
    /**
     * Hent aksjonspunter for saker
     * @param opprettetPeriode Tidsrom for opprettelse. Format YYYY-MM-DD/YYYY-MM-DD.
     * @param medUtforte Valgfritt å inkludere utførte aksjonspunkt. Default er false.
     * @returns unknown Returnerer behandlinger med aksjonspunkt opprettet innenfor angitt periode på CSV format
     * @throws ApiError
     */
    getAksjonspunkterSammendrag(opprettetPeriode: GetAksjonspunkterSammendragData['opprettetPeriode'], medUtforte?: GetAksjonspunkterSammendragData['medUtforte']): CancelablePromise<GetAksjonspunkterSammendragResponse>;
    /**
     * Hent aksjonspunter for en behandling
     * @param behandlingId
     * @returns AksjonspunktDto
     * @throws ApiError
     */
    getAksjonspunkter(behandlingId: GetAksjonspunkterData['behandlingId']): CancelablePromise<GetAksjonspunkterResponse>;
    /**
     * Lagre endringer gitt av aksjonspunktene og rekjør behandling fra gjeldende steg
     * @param requestBody Liste over aksjonspunkt som skal bekreftes, inklusiv data som trengs for å løse de.
     * @returns unknown default response
     * @throws ApiError
     */
    bekreft(requestBody?: BekreftData['requestBody']): CancelablePromise<BekreftResponse>;
    /**
     * Hent aksjonspunter for en behandling
     * @param behandlingUuid behandlingUUID
     * @returns AksjonspunktDto
     * @throws ApiError
     */
    getAksjonspunkter1(behandlingUuid: GetAksjonspunkter1Data['behandlingUuid']): CancelablePromise<GetAksjonspunkter1Response>;
    /**
     * Har behandling åpent kontroller revurdering aksjonspunkt
     * @param behandlingUuid behandlingUUID
     * @returns boolean
     * @throws ApiError
     */
    erKontrollerRevurderingAksjonspunktÅpent(behandlingUuid: ErKontrollerRevurderingAksjonspunktÅpentData['behandlingUuid']): CancelablePromise<ErKontrollerRevurderingAksjonspunktÅpentResponse>;
    /**
     * Overstyrer stegene
     * @param requestBody Liste over aksjonspunkter.
     * @returns unknown default response
     * @throws ApiError
     */
    overstyr(requestBody?: OverstyrData['requestBody']): CancelablePromise<OverstyrResponse>;
    /**
     * @deprecated
     * Hent risikoaksjonspunkt for en behandling
     * @param behandlingUuid behandlingUUID
     * @returns AksjonspunktDto
     * @throws ApiError
     */
    getRisikoAksjonspunkt(behandlingUuid: GetRisikoAksjonspunktData['behandlingUuid']): CancelablePromise<GetRisikoAksjonspunktResponse>;
}
export declare class AktoerService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Henter informasjon om en aktøer
     * @param aktoerId
     * @returns AktørInfoDto Returnerer basisinformasjon om en aktør og hvilke fagsaker vedkommede har i k9-sak.
     * @throws ApiError
     */
    getAktoerInfo(aktoerId: GetAktoerInfoData['aktoerId']): CancelablePromise<GetAktoerInfoResponse>;
    /**
     * Henter saksnumre for en person. Kan for eksempel brukes for å finne ut om k9 er påvirket av 'aktør-splitt'
     * @param aktoerId
     * @returns AktørInfoDto Liste av fagsaker i k9-sak personen er del av.
     * @throws ApiError
     */
    getAktoerInfo1(aktoerId: GetAktoerInfo1Data['aktoerId']): CancelablePromise<GetAktoerInfo1Response>;
    /**
     * Redirecter til a-inntekt for arbeidstakeren
     * @param saksnummer SAKSNUMMER
     * @throws ApiError
     */
    getAinntektUrl(saksnummer: GetAinntektUrlData['saksnummer']): CancelablePromise<void>;
    /**
     * Redirecter til aa-reg for arbeidstakeren
     * @param saksnummer
     * @throws ApiError
     */
    getAktoerInfo2(saksnummer: GetAktoerInfo2Data['saksnummer']): CancelablePromise<void>;
}
export declare class BehandlingerService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Returnerer behandlingen som er tilknyttet id. Dette er resultat etter at asynkrone operasjoner er utført.
     * Hent behandling gitt id
     * @param behandlingUuid behandlingUUID
     * @returns BehandlingDto Returnerer Behandling
     * @throws ApiError
     */
    hentBehandlingData1(behandlingUuid: HentBehandlingData1Data['behandlingUuid']): CancelablePromise<HentBehandlingData1Response>;
    /**
     * Returnerer behandlingen som er tilknyttet id. Dette er resultat etter at asynkrone operasjoner er utført.
     * Hent behandling gitt id for backend
     * @param behandlingUuid behandlingUUID
     * @returns BehandlingDto Returnerer behandling
     * @throws ApiError
     */
    hentBehandlingResultatForBackend(behandlingUuid: HentBehandlingResultatForBackendData['behandlingUuid']): CancelablePromise<HentBehandlingResultatForBackendResponse>;
    /**
     * Init hent behandling
     * @param requestBody
     * @returns string Hent behandling initiert, Returnerer status på fremdrift/feil i backend
     * @throws ApiError
     */
    oppfriskSaker(requestBody: OppfriskSakerData['requestBody']): CancelablePromise<OppfriskSakerResponse>;
    /**
     * Returnerer direkte overgang for behandling
     * Hent direkte overgang for behandling gitt id
     * @param behandlingUuid behandlingUUID
     * @returns DirekteOvergangDto Returnerer skjæringstidspunkter for direkte overgang
     * @throws ApiError
     */
    hentDirekteOvergangForBehandling(behandlingUuid: HentDirekteOvergangForBehandlingData['behandlingUuid']): CancelablePromise<HentDirekteOvergangForBehandlingResponse>;
    /**
     * Henter førstegangngsbehandlingen som er/blir revurdert
     * Hent avsluttet førstegangsbehandling gitt id
     * @param behandlingUuid behandlingUUID
     * @returns BehandlingDto Returnerer avsluttet førstegangsbehandling
     * @throws ApiError
     */
    hentRevurderingensOriginalBehandling1(behandlingUuid: HentRevurderingensOriginalBehandling1Data['behandlingUuid']): CancelablePromise<HentRevurderingensOriginalBehandling1Response>;
    /**
     * Returnerer link til enten samme (hvis ikke ferdig) eller redirecter til /behandlinger dersom asynkrone operasjoner er ferdig.
     * Url for å polle på behandling mens behandlingprosessen pågår i bakgrunnen(asynkront)
     * @param behandlingUuid behandlingUUID
     * @param gruppe
     * @returns AsyncPollingStatus Returnerer Status
     * @throws ApiError
     */
    hentBehandlingMidlertidigStatus1(behandlingUuid: HentBehandlingMidlertidigStatus1Data['behandlingUuid'], gruppe?: HentBehandlingMidlertidigStatus1Data['gruppe']): CancelablePromise<HentBehandlingMidlertidigStatus1Response>;
    /**
     * Returnerer behandlingen som er tilknyttet id. Dette er resultat etter at asynkrone operasjoner er utført.
     * Hent behandling gitt id
     * @param behandlingId
     * @returns BehandlingDto Returnerer Behandling
     * @throws ApiError
     */
    hentBehandlingData(behandlingId: HentBehandlingDataData['behandlingId']): CancelablePromise<HentBehandlingDataResponse>;
    /**
     * Init hent behandling
     * @param requestBody
     * @returns string Hent behandling initiert, Returnerer link til å polle på fremdrift
     * @throws ApiError
     */
    hentBehandling(requestBody: HentBehandlingData['requestBody']): CancelablePromise<HentBehandlingResponse>;
    /**
     * Opprette ny behandling
     * @param requestBody Saksnummer og flagg om det er ny behandling etter klage
     * @returns string Opprett ny behandling pågår
     * @throws ApiError
     */
    opprettNyBehandling(requestBody?: OpprettNyBehandlingData['requestBody']): CancelablePromise<OpprettNyBehandlingResponse>;
    /**
     * Returnerer alle behandlinger som er tilknyttet saksnummer.
     * Henter alle behandlinger basert på saksnummer
     * @param saksnummer Saksnummer må være et eksisterende saksnummer
     * @returns BehandlingDto default response
     * @throws ApiError
     */
    hentBehandlinger(saksnummer: HentBehandlingerData['saksnummer']): CancelablePromise<HentBehandlingerResponse>;
    /**
     * Bytte behandlende enhet
     * @param requestBody Ny enhet som skal byttes
     * @returns unknown default response
     * @throws ApiError
     */
    byttBehandlendeEnhet(requestBody?: ByttBehandlendeEnhetData['requestBody']): CancelablePromise<ByttBehandlendeEnhetResponse>;
    /**
     * Endrer ventefrist for behandling på vent
     * @param requestBody Frist for behandling på vent
     * @returns unknown default response
     * @throws ApiError
     */
    endreFristForBehandlingPaVent(requestBody?: EndreFristForBehandlingPaVentData['requestBody']): CancelablePromise<EndreFristForBehandlingPaVentResponse>;
    /**
     * Gjenopptar behandling som er satt på vent
     * @param requestBody BehandlingId for behandling som skal gjenopptas
     * @returns string Gjenoppta behandling påstartet i bakgrunnen
     * @throws ApiError
     */
    gjenopptaBehandling(requestBody?: GjenopptaBehandlingData['requestBody']): CancelablePromise<GjenopptaBehandlingResponse>;
    /**
     * Henlegger behandling
     * @param requestBody Henleggelsesårsak
     * @returns unknown default response
     * @throws ApiError
     */
    henleggBehandling(requestBody?: HenleggBehandlingData['requestBody']): CancelablePromise<HenleggBehandlingResponse>;
    /**
     * Åpner behandling for endringer
     * @param requestBody BehandlingId for behandling som skal åpnes for endringer
     * @returns string Åpning av behandling for endringer påstartet i bakgrunnen
     * @throws ApiError
     */
    åpneBehandlingForEndringer(requestBody?: ÅpneBehandlingForEndringerData['requestBody']): CancelablePromise<ÅpneBehandlingForEndringerResponse>;
    /**
     * Henter lovlige operasjoner på behandling for menyvalg
     * @param behandlingUuid behandlingUUID
     * @returns BehandlingOperasjonerDto default response
     * @throws ApiError
     */
    hentLovligeBehandlingsoperasjoner(behandlingUuid: HentLovligeBehandlingsoperasjonerData['behandlingUuid']): CancelablePromise<HentLovligeBehandlingsoperasjonerResponse>;
    /**
     * Henter førstegangngsbehandlingen som er/blir revurdert
     * Hent avsluttet førstegangsbehandling gitt id
     * @param behandlingId
     * @returns BehandlingDto Returnerer avsluttet førstegangsbehandling
     * @throws ApiError
     */
    hentRevurderingensOriginalBehandling(behandlingId: HentRevurderingensOriginalBehandlingData['behandlingId']): CancelablePromise<HentRevurderingensOriginalBehandlingResponse>;
    /**
     * Setter behandling på vent
     * @param requestBody Frist for behandling på vent
     * @returns unknown default response
     * @throws ApiError
     */
    settBehandlingPaVent(requestBody?: SettBehandlingPaVentData['requestBody']): CancelablePromise<SettBehandlingPaVentResponse>;
    /**
     * Returnerer link til enten samme (hvis ikke ferdig) eller redirecter til /behandlinger dersom asynkrone operasjoner er ferdig.
     * Url for å polle på behandling mens behandlingprosessen pågår i bakgrunnen(asynkront)
     * @param behandlingId
     * @param gruppe
     * @returns AsyncPollingStatus Returnerer Status
     * @throws ApiError
     */
    hentBehandlingMidlertidigStatus(behandlingId: HentBehandlingMidlertidigStatusData['behandlingId'], gruppe?: HentBehandlingMidlertidigStatusData['gruppe']): CancelablePromise<HentBehandlingMidlertidigStatusResponse>;
    /**
     * Opprette ny unntaksbehandling
     * @param requestBody Saksnummer
     * @returns string Opprett ny unntaksbehandling pågår
     * @throws ApiError
     */
    opprettNyUnntaksbehandling(requestBody?: OpprettNyUnntaksbehandlingData['requestBody']): CancelablePromise<OpprettNyUnntaksbehandlingResponse>;
    /**
     * Returnerer alle behandlinger som er tilknyttet saksnummer.
     * Henter alle behandlinger basert på saksnummer
     * @param saksnummer Saksnummer må være et eksisterende saksnummer
     * @returns BehandlingDto default response
     * @throws ApiError
     */
    hentAlleBehandlinger(saksnummer: HentAlleBehandlingerData['saksnummer']): CancelablePromise<HentAlleBehandlingerResponse>;
}
export declare class BehandlingÅrskvantumUttakService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Hent forbrukte dager
     * @param behandlingUuid behandlingUUID
     * @returns ÅrskvantumForbrukteDager Returnerer forbrukte dager av totalt årskvantum
     * @throws ApiError
     */
    getForbrukteDager(behandlingUuid: GetForbrukteDagerData['behandlingUuid']): CancelablePromise<GetForbrukteDagerResponse>;
    /**
     * Hent input til beregning av årskvantum
     * @param requestBody behandlingUUID
     * @returns unknown input til beregning av årskvantum
     * @throws ApiError
     */
    inputTilÅrskvantumsBeregning(requestBody: InputTilÅrskvantumsBeregningData['requestBody']): CancelablePromise<InputTilÅrskvantumsBeregningResponse>;
    /**
     * Hent utbetalingsgrunnlag fra årskvantum
     * @param requestBody behandlingUUID
     * @returns unknown utbetalingsgrunnlag fra årskvantum
     * @throws ApiError
     */
    hentUtbetalingsgrunnlagFraÅrskvantum(requestBody: HentUtbetalingsgrunnlagFraÅrskvantumData['requestBody']): CancelablePromise<HentUtbetalingsgrunnlagFraÅrskvantumResponse>;
    /**
     * Hent full uttaksplan
     * @param saksnummer saksnummer
     * @param behandlingUuid behandlingUUID
     * @returns FullUttaksplan Returnerer full uttaksplan hittil i år
     * @throws ApiError
     */
    getFullUttaksplan(saksnummer: GetFullUttaksplanData['saksnummer'], behandlingUuid?: GetFullUttaksplanData['behandlingUuid']): CancelablePromise<GetFullUttaksplanResponse>;
}
export declare class BehandlingÅrskvantumUttrekkService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Hent uttrekk fra årskvantum
     * @returns unknown uttrekk fra årskvantum
     * @throws ApiError
     */
    hentUttrekk(): CancelablePromise<HentUttrekkResponse>;
}
export declare class ArbeidsgiverService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Henter informasjon om alle arbeidsgivere (navn, fødselsnr for privat arbeidsgiver osv)
     * Henter informasjon om alle arbeidsgivere knyttet til bruker
     * @param behandlingUuid behandlingUUID
     * @returns ArbeidsgiverOversiktDto Returnerer ArbeidsgiverOversiktDto
     * @throws ApiError
     */
    getArbeidsgiverOpplysninger(behandlingUuid: GetArbeidsgiverOpplysningerData['behandlingUuid']): CancelablePromise<GetArbeidsgiverOpplysningerResponse>;
}
export declare class BeregningsgrunnlagService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Returnerer beregningsgrunnlag for behandling.
     * Hent beregningsgrunnlag for angitt behandling
     * @param behandlingUuid behandlingUUID
     * @returns BeregningsgrunnlagDto default response
     * @throws ApiError
     */
    hentBeregningsgrunnlag(behandlingUuid: HentBeregningsgrunnlagData['behandlingUuid']): CancelablePromise<HentBeregningsgrunnlagResponse>;
    /**
     * Returnerer beregningsgrunnlag for behandling.
     * Henter alle beregningsgrunnlag for angitt behandling
     * @param behandlingUuid behandlingUUID
     * @returns BeregningsgrunnlagDto default response
     * @throws ApiError
     */
    hentBeregningsgrunnlagene(behandlingUuid: HentBeregningsgrunnlageneData['behandlingUuid']): CancelablePromise<HentBeregningsgrunnlageneResponse>;
    /**
     * Henter alle koblingene for angitt behandling
     * Henter alle koblingene for angitt behandling
     * @param behandlingUuid behandlingUUID
     * @returns BeregningsgrunnlagKoblingDto default response
     * @throws ApiError
     */
    hentNøkkelknippe(behandlingUuid: HentNøkkelknippeData['behandlingUuid']): CancelablePromise<HentNøkkelknippeResponse>;
    /**
     * Henter alle koblingene til vurdering for angitt behandling
     * Henter alle koblingene til vurdering for angitt behandling
     * @param behandlingUuid behandlingUUID
     * @returns BeregningsgrunnlagKoblingDto default response
     * @throws ApiError
     */
    hentNøklerTilVurdering(behandlingUuid: HentNøklerTilVurderingData['behandlingUuid']): CancelablePromise<HentNøklerTilVurderingResponse>;
    /**
     * Returnerer data for overstyring av input til beregning.
     * Henter data for overstyring av input til beregning
     * @param behandlingUuid behandlingUUID
     * @returns OverstyrBeregningInputPeriode default response
     * @throws ApiError
     */
    hentOverstyrInputBeregning(behandlingUuid: HentOverstyrInputBeregningData['behandlingUuid']): CancelablePromise<HentOverstyrInputBeregningResponse>;
}
export declare class BeregningsresultatService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Returnerer beregningsresultat med uttaksplan for behandling.
     * Hent beregningsresultat med uttaksplan fra behandling
     * @param behandlingUuid behandlingUUID
     * @returns BeregningsresultatDto default response
     * @throws ApiError
     */
    hentBeregningsresultat(behandlingUuid: HentBeregningsresultatData['behandlingUuid']): CancelablePromise<HentBeregningsresultatResponse>;
    /**
     * Har revurdering samme resultat som original behandling
     * @param behandlingUuid behandlingUUID
     * @returns boolean default response
     * @throws ApiError
     */
    harRevurderingSammeResultatSomOriginalBehandling(behandlingUuid: HarRevurderingSammeResultatSomOriginalBehandlingData['behandlingUuid']): CancelablePromise<HarRevurderingSammeResultatSomOriginalBehandlingResponse>;
    /**
     * Returnerer beregningsresultat med uttaksplan for behandling.
     * Hent beregningsresultat med uttaksplan for foreldrepenger behandling
     * @param behandlingUuid behandlingUUID
     * @returns BeregningsresultatMedUtbetaltePeriodeDto default response
     * @throws ApiError
     */
    hentBeregningsresultatMedUtbetaling(behandlingUuid: HentBeregningsresultatMedUtbetalingData['behandlingUuid']): CancelablePromise<HentBeregningsresultatMedUtbetalingResponse>;
}
export declare class BehandlingFosterbarnService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Hent fosterbarn for omsorgspenger
     * @param behandlingUuid behandlingUUID
     * @returns FosterbarnListeDto Returnerer Fosterbarn, null hvis ikke finnes (GUI støtter ikke NOT_FOUND p.t.)
     * @throws ApiError
     */
    hentFosterbarn(behandlingUuid: HentFosterbarnData['behandlingUuid']): CancelablePromise<HentFosterbarnResponse>;
}
export declare class OpplæringspengerService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Returnerer alle perioder og tilhørende vurderinger av gjennomgått opplæring
     * Hent vurderinger av gjennomgått opplæring
     * @param behandlingUuid behandlingUUID
     * @returns GjennomgåttOpplæringDto perioder fra søknad og vurdert opplæring
     * @throws ApiError
     */
    hentVurdertOpplæring(behandlingUuid: HentVurdertOpplæringData['behandlingUuid']): CancelablePromise<HentVurdertOpplæringResponse>;
    /**
     * Returnerer alle perioder og tilhørende institusjonsvurderinger
     * Hent institusjonsvurderinger
     * @param behandlingUuid behandlingUUID
     * @returns InstitusjonerDto perioder fra søknad og vurderte institusjoner
     * @throws ApiError
     */
    hentVurdertInstitusjon(behandlingUuid: HentVurdertInstitusjonData['behandlingUuid']): CancelablePromise<HentVurdertInstitusjonResponse>;
    /**
     * Returnerer alle perioder og tilhørende vurderinger av nødvendig opplæring
     * Hent vurderinger av nødvendig opplæring
     * @param behandlingUuid behandlingUUID
     * @returns NødvendigOpplæringDto perioder fra søknad og vurdert opplæring
     * @throws ApiError
     */
    hentVurdertNødvendigOpplæring(behandlingUuid: HentVurdertNødvendigOpplæringData['behandlingUuid']): CancelablePromise<HentVurdertNødvendigOpplæringResponse>;
    /**
     * Laster ned selve dokumentet (innholdet).
     * Laster ned selve dokumentet (innholdet).
     * @param behandlingUuid behandlingUUID
     * @param sykdomDokumentId sykdomDokumentId
     * @returns unknown default response
     * @throws ApiError
     */
    hentDokumentinnhold(behandlingUuid: HentDokumentinnholdData['behandlingUuid'], sykdomDokumentId: HentDokumentinnholdData['sykdomDokumentId']): CancelablePromise<HentDokumentinnholdResponse>;
    /**
     * Henter en liste over dokumenter som kan brukes i vurdering.
     * Henter en liste over dokumenter som kan brukes i vurdering.
     * @param behandlingUuid behandlingUUID
     * @returns OpplæringDokumentDto
     * @throws ApiError
     */
    hentDokumenter(behandlingUuid: HentDokumenterData['behandlingUuid']): CancelablePromise<HentDokumenterResponse>;
    /**
     * Returnerer alle perioder og tilhørende vurderinger av reisetid
     * Hent vurderinger av reisetid
     * @param behandlingUuid behandlingUUID
     * @returns ReisetidDto perioder fra søknad og vurdert reisetid
     * @throws ApiError
     */
    hentVurdertReisetid(behandlingUuid: HentVurdertReisetidData['behandlingUuid']): CancelablePromise<HentVurdertReisetidResponse>;
}
export declare class InntektArbeidYtelseService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Returnerer info om innhentet og avklart inntekter/arbeid og ytelser for bruker, inkludert hva bruker har vedlagt søknad.
     * Hent informasjon om innhentet og avklart inntekter, arbeid og ytelser
     * @param behandlingUuid behandlingUUID
     * @returns InntektArbeidYtelseArbeidsforholdV2Dto Returnerer InntektArbeidYtelseDto, null hvis ikke eksisterer (GUI støtter ikke NOT_FOUND p.t.)
     * @throws ApiError
     */
    getArbeidsforhold(behandlingUuid: GetArbeidsforholdData['behandlingUuid']): CancelablePromise<GetArbeidsforholdResponse>;
    /**
     * Returnerer arbeidsforhold oppgitt på inntektsmeldinger
     * Hent arbeidsforhold fra inntektsmeldinger
     * @param requestBody Match-kritierer for å lete opp fagsaken med inntektsmeldinger
     * @returns InntektArbeidYtelseArbeidsforholdV2Dto Returnerer InntektArbeidYtelseDto, null hvis ikke eksisterer (GUI støtter ikke NOT_FOUND p.t.)
     * @throws ApiError
     */
    hentArbeidsforholdIdFraInntektsmeldinger(requestBody?: HentArbeidsforholdIdFraInntektsmeldingerData['requestBody']): CancelablePromise<HentArbeidsforholdIdFraInntektsmeldingerResponse>;
}
export declare class KompletthetService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Returnerer beregningsgrunnlag for behandling.
     * Hent tilstand for kompletthet for behandling
     * @param behandlingUuid behandlingUUID
     * @returns KompletthetsVurderingDto default response
     * @throws ApiError
     */
    utledStatusForKompletthet(behandlingUuid: UtledStatusForKompletthetData['behandlingUuid']): CancelablePromise<UtledStatusForKompletthetResponse>;
    /**
     * Returnerer beregningsgrunnlag for behandling.
     * Hent tilstand for kompletthet for behandling
     * @param behandlingUuid behandlingUUID
     * @returns KompletthetsVurderingV2Dto default response
     * @throws ApiError
     */
    utledStatusForKompletthetV2(behandlingUuid: UtledStatusForKompletthetV2Data['behandlingUuid']): CancelablePromise<UtledStatusForKompletthetV2Response>;
    /**
     * Henter vurderinger på bruk av inntektsmeldinger
     * Henter vurderinger på bruk av inntektsmeldinger
     * @param behandlingUuid behandlingUUID
     * @returns VurderingPerPeriode default response
     * @throws ApiError
     */
    utledVurderingerAvMottatteInntektsmeldinger(behandlingUuid: UtledVurderingerAvMottatteInntektsmeldingerData['behandlingUuid']): CancelablePromise<UtledVurderingerAvMottatteInntektsmeldingerResponse>;
}
export declare class KontrollService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @deprecated
     * Hent kontrollresultatet for en behandling
     * @param behandlingUuid behandlingUUID
     * @returns unknown
     * @throws ApiError
     */
    hentKontrollresultat(behandlingUuid: HentKontrollresultatData['behandlingUuid']): CancelablePromise<HentKontrollresultatResponse>;
    /**
     * @deprecated
     * Hent kontrollresultatet for en behandling
     * @param behandlingUuid behandlingUUID
     * @returns unknown
     * @throws ApiError
     */
    hentKontrollresultatV21(behandlingUuid: HentKontrollresultatV21Data['behandlingUuid']): CancelablePromise<HentKontrollresultatV21Response>;
}
export declare class OmsorgenForService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Returnerer informasjon saksbehandler har skrevet inn fra legeerklæring og vurderinger vedrørende kontinuerlig tilsyn & pleie
     * Hent omsorgen for opplysninger
     * @param behandlingUuid behandlingUUID
     * @returns OmsorgenForOversiktDto null hvis ikke eksisterer
     * @throws ApiError
     */
    hentOmsorgenForInformasjon(behandlingUuid: HentOmsorgenForInformasjonData['behandlingUuid']): CancelablePromise<HentOmsorgenForInformasjonResponse>;
}
export declare class OppgittOpptjeningService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Returnerer info om oppgitt opptjening og om hvilken ytelser det blir søkt ytelser for.
     * Hent informasjon om oppgitt opptjening for alle søknadsperioder
     * @param behandlingUuid behandlingUUID
     * @returns SøknadsperiodeOgOppgittOpptjeningV2Dto Returnerer SøknadsperiodeOgOppgittOpptjeningDto, null hvis ikke eksisterer (GUI støtter ikke NOT_FOUND p.t.)
     * @throws ApiError
     */
    getOppgittOpptjeningV2(behandlingUuid: GetOppgittOpptjeningV2Data['behandlingUuid']): CancelablePromise<GetOppgittOpptjeningV2Response>;
}
export declare class OpptjeningService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Hent informasjon om opptjening
     * @param behandlingUuid behandlingUUID
     * @returns OpptjeningerDto Returnerer Opptjening, null hvis ikke eksisterer (GUI støtter ikke NOT_FOUND p.t.)
     * @throws ApiError
     */
    getOpptjeninger(behandlingUuid: GetOpptjeningerData['behandlingUuid']): CancelablePromise<GetOpptjeningerResponse>;
    /**
     * Hent informasjon om inntekt
     * @param behandlingUuid behandlingUUID
     * @returns OpptjeningDto Returnerer inntekter, null hvis ikke eksisterer (GUI støtter ikke NOT_FOUND p.t.)
     * @throws ApiError
     */
    getInntekt(behandlingUuid: GetInntektData['behandlingUuid']): CancelablePromise<GetInntektResponse>;
}
export declare class PerioderService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Hent perioder til behandling og kilden til disse
     * Hent perioder til behandling og kilden til disse
     * @param behandlingUuid behandlingUUID
     * @returns StatusForPerioderPåBehandling Liste med periode og årsaken til at perioden behandles
     * @throws ApiError
     */
    hentPerioderTilBehandling(behandlingUuid: HentPerioderTilBehandlingData['behandlingUuid']): CancelablePromise<HentPerioderTilBehandlingResponse>;
    /**
     * Hent perioder til behandling og kilden til disse
     * Hent perioder til behandling og kilden til disse
     * @param behandlingUuid behandlingUUID
     * @returns StatusForPerioderPåBehandling Liste med periode og årsaken til at perioden behandles
     * @throws ApiError
     */
    hentPerioderMedVilkårForBehandling(behandlingUuid: HentPerioderMedVilkårForBehandlingData['behandlingUuid']): CancelablePromise<HentPerioderMedVilkårForBehandlingResponse>;
}
export declare class BehandlingPersonService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Hent informasjon om medlemskap i Folketrygden for søker i behandling
     * @param behandlingUuid behandlingUUID
     * @returns MedlemV2Dto Returnerer Medlemskap, null hvis ikke finnes (GUI støtter ikke NOT_FOUND p.t.)
     * @throws ApiError
     */
    hentMedlemskap(behandlingUuid: HentMedlemskapData['behandlingUuid']): CancelablePromise<HentMedlemskapResponse>;
    /**
     * Hent informasjon om personopplysninger søker i behandling
     * @param behandlingUuid behandlingUUID
     * @returns PersonopplysningDto Returnerer Personopplysninger, null hvis ikke finnes (GUI støtter ikke NOT_FOUND p.t.)
     * @throws ApiError
     */
    getPersonopplysninger(behandlingUuid: GetPersonopplysningerData['behandlingUuid']): CancelablePromise<GetPersonopplysningerResponse>;
    /**
     * Hent informasjon om personopplysninger søker i behandling
     * @param behandlingUuid behandlingUUID
     * @returns PersonopplysningDto Returnerer Personopplysninger, null hvis ikke finnes (GUI støtter ikke NOT_FOUND p.t.)
     * @throws ApiError
     */
    getPersonopplysninger1(behandlingUuid: GetPersonopplysninger1Data['behandlingUuid']): CancelablePromise<GetPersonopplysninger1Response>;
}
export declare class BehandlingPleiepengerUttakService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Henter ut arbeidstid som bruker skulle oppgitt
     * @param behandlingUuid behandlingUUID
     * @returns ManglendeArbeidstidDto Henter ut arbeidstid som bruker skulle oppgitt
     * @throws ApiError
     */
    getArbeidstidSomMangler(behandlingUuid: GetArbeidstidSomManglerData['behandlingUuid']): CancelablePromise<GetArbeidstidSomManglerResponse>;
    /**
     * Henter ut uttaksgrunnlag for behandling
     * @param formData
     * @returns unknown Uttaksgrunnlag
     * @throws ApiError
     */
    debugInput(formData?: DebugInputData['formData']): CancelablePromise<DebugInputResponse>;
    /**
     * Henter ut uttaksgrunnlag for behandling
     * @param behandlingUuid behandlingUUID
     * @returns unknown Uttaksgrunnlag
     * @throws ApiError
     */
    kjøreplan(behandlingUuid: KjøreplanData['behandlingUuid']): CancelablePromise<KjøreplanResponse>;
    /**
     * Simuler uttaksplan mot ubesluttede data
     * @param behandlingUuid behandlingUUID
     * @returns Simulering Returnerer simulert uttaksplan for angitt behandling
     * @throws ApiError
     */
    simulertUttaksplan(behandlingUuid: SimulertUttaksplanData['behandlingUuid']): CancelablePromise<SimulertUttaksplanResponse>;
    /**
     * Hent uttaksplan for behandling
     * @param behandlingUuid behandlingUUID
     * @returns Uttaksplan Returnerer uttaksplan for angitt behandling
     * @throws ApiError
     */
    getUttaksplan(behandlingUuid: GetUttaksplanData['behandlingUuid']): CancelablePromise<GetUttaksplanResponse>;
    /**
     * Hent uttaksplan for behandling med utsatte perioder
     * @param behandlingUuid behandlingUUID
     * @returns UttaksplanMedUtsattePerioder Returnerer uttaksplan for angitt behandling
     * @throws ApiError
     */
    uttaksplanMedUtsattePerioder(behandlingUuid: UttaksplanMedUtsattePerioderData['behandlingUuid']): CancelablePromise<UttaksplanMedUtsattePerioderResponse>;
}
export declare class BehandlingUttakService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Hent overstyrbare aktiviteter for uttak for behandling
     * @param requestBody
     * @returns OverstyrbareUttakAktiviterDto Returnerer overstyrbare aktiviteter
     * @throws ApiError
     */
    hentOverstyrbareAktiviterForUttak(requestBody: HentOverstyrbareAktiviterForUttakData['requestBody']): CancelablePromise<HentOverstyrbareAktiviterForUttakResponse>;
    /**
     * Hent overstyrt uttak for behandling
     * @param behandlingUuid behandlingUUID
     * @returns OverstyrtUttakDto Returnerer uttak overstyrt av overstyrer, null hvis ikke finnes noe
     * @throws ApiError
     */
    getOverstyrtUttak(behandlingUuid: GetOverstyrtUttakData['behandlingUuid']): CancelablePromise<GetOverstyrtUttakResponse>;
    /**
     * Hent Fastsatt uttak for behandling
     * @param behandlingUuid behandlingUUID
     * @returns FastsattUttakDto Returnerer uttak fastsatt av saksbehandler (fakta avklart før vurdering av uttak), null hvis ikke finnes noe
     * @throws ApiError
     */
    getFastsattUttak(behandlingUuid: GetFastsattUttakData['behandlingUuid']): CancelablePromise<GetFastsattUttakResponse>;
    /**
     * Hent oppgitt uttak for behandling
     * @param behandlingUuid behandlingUUID
     * @returns OppgittUttakDto Returnerer Oppgitt uttak fra søknad, null hvis ikke finnes noe
     * @throws ApiError
     */
    getOppgittUttak(behandlingUuid: GetOppgittUttakData['behandlingUuid']): CancelablePromise<GetOppgittUttakResponse>;
    /**
     * Hent oppgitt utenlandsopphold
     * @param behandlingUuid behandlingUUID
     * @returns UtenlandsoppholdDto Returnerer søkers oppgitte utenlandsopphold, tom liste hvis det ikke finnes noe
     * @throws ApiError
     */
    getUtenlandsopphold(behandlingUuid: GetUtenlandsoppholdData['behandlingUuid']): CancelablePromise<GetUtenlandsoppholdResponse>;
}
export declare class DødService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Hent rett pleiepenger ved død
     * Hent vurdering av rett til pleiepenger ved død
     * @param behandlingUuid behandlingUUID
     * @returns VurderingRettPleiepengerVedDødDto rett til pleiepenger ved død
     * @returns void ingen rett til pleiepenger ved død vurdert
     * @throws ApiError
     */
    hentVurderingRettPleiepengerVedDød(behandlingUuid: HentVurderingRettPleiepengerVedDødData['behandlingUuid']): CancelablePromise<HentVurderingRettPleiepengerVedDødResponse>;
}
export declare class SøknadService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Hent informasjon om søknad
     * @param behandlingUuid behandlingUUID
     * @returns SøknadDto Returnerer Søknad, null hvis ikke eksisterer (GUI støtter ikke NOT_FOUND p.t.)
     * @throws ApiError
     */
    getSøknad(behandlingUuid: GetSøknadData['behandlingUuid']): CancelablePromise<GetSøknadResponse>;
    /**
     * Finner søknadspperioder på siste fagsak
     * Henter søknadsperioder på siste fagsak på ytelse, bruker, og pleieptrengende
     * @param requestBody Match kritierer for å lete opp fagsaker
     * @returns Periode default response
     * @throws ApiError
     */
    hentSøknadPerioder(requestBody?: HentSøknadPerioderData['requestBody']): CancelablePromise<HentSøknadPerioderResponse>;
    /**
     * Finner søknadspperioder med saksnummer
     * Henter søknadsperioder med saksnummer
     * @param saksnummer
     * @returns Periode default response
     * @throws ApiError
     */
    hentSøknadPerioderMedSaksnummer(saksnummer: HentSøknadPerioderMedSaksnummerData['saksnummer']): CancelablePromise<HentSøknadPerioderMedSaksnummerResponse>;
}
export declare class SykdomService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Henter informasjon om sykdomsaksjonspunkt
     * Hent informasjon om sykdomsaksjonspunkt
     * @param behandlingUuid behandlingUUID
     * @returns SykdomAksjonspunktDto Informasjon om sykdomsaksjonspunkt
     * @throws ApiError
     */
    hentSykdomAksjonspunkt(behandlingUuid: HentSykdomAksjonspunktData['behandlingUuid']): CancelablePromise<HentSykdomAksjonspunktResponse>;
    /**
     * Oppdaterer metainformasjonen om et dokument.
     * Oppdaterer metainformasjonen om et dokument.
     * @param requestBody
     * @returns unknown Dokumentet har blitt opprettet.
     * @throws ApiError
     */
    oppdaterDokument(requestBody: OppdaterDokumentData['requestBody']): CancelablePromise<OppdaterDokumentResponse>;
    /**
     * Henter alle registrerte diagnosekoder på den pleietrengende..
     * Henter alle registrerte diagnosekoder på den pleietrengende.
     * @param behandlingUuid behandlingUUID
     * @returns SykdomDiagnosekoderDto
     * @throws ApiError
     */
    hentDiagnosekoder(behandlingUuid: HentDiagnosekoderData['behandlingUuid']): CancelablePromise<HentDiagnosekoderResponse>;
    /**
     * Oppdaterer diagnosekoder på den pleietrengende.
     * Oppdaterer diagnosekoder på den pleietrengende.
     * @param requestBody
     * @returns unknown Dokumentet har blitt opprettet.
     * @throws ApiError
     */
    oppdaterDiagnosekoder(requestBody: OppdaterDiagnosekoderData['requestBody']): CancelablePromise<OppdaterDiagnosekoderResponse>;
    /**
     * Henter en liste over dokumenter som kanskje skal brukes til å oppdatere tidligere vurderinger.
     * Henter en liste over dokumenter hvor saksbehandler ikke har tatt stilling til om de berører eksisterende vurderinger.
     * @param behandlingUuid behandlingUUID
     * @returns SykdomDokumentDto
     * @throws ApiError
     */
    hentSykdomsdokumenterSomIkkeHarOppdatertEksisterendeVurderinger(behandlingUuid: HentSykdomsdokumenterSomIkkeHarOppdatertEksisterendeVurderingerData['behandlingUuid']): CancelablePromise<HentSykdomsdokumenterSomIkkeHarOppdatertEksisterendeVurderingerResponse>;
    /**
     * Kvitter ut at saksbehandler har tatt stilling til om dokumenter påvirker eksisterende vurderinger.
     * Kvitter ut at saksbehandler har tatt stilling til om dokumenter påvirker eksisterende vurderinger.
     * @param requestBody
     * @returns unknown Dokumentene har blitt utkvittert.
     * @throws ApiError
     */
    sykdomDokumentUtkvitterEksisterendeVurderinger(requestBody: SykdomDokumentUtkvitterEksisterendeVurderingerData['requestBody']): CancelablePromise<SykdomDokumentUtkvitterEksisterendeVurderingerResponse>;
    /**
     * Henter alle perioder den pleietrengende er innlagt på sykehus og liknende.
     * Henter alle perioder den pleietrengende er innlagt på sykehus og liknende.
     * @param behandlingUuid behandlingUUID
     * @returns SykdomInnleggelseDto
     * @throws ApiError
     */
    hentSykdomInnleggelse(behandlingUuid: HentSykdomInnleggelseData['behandlingUuid']): CancelablePromise<HentSykdomInnleggelseResponse>;
    /**
     * Oppdaterer perioder den pleietrengende er innlagt på sykehus og liknende.
     * Oppdaterer perioder den pleietrengende er innlagt på sykehus og liknende.
     * @param requestBody
     * @returns unknown Dokumentet har blitt opprettet.
     * @throws ApiError
     */
    oppdaterSykdomInnleggelse(requestBody: OppdaterSykdomInnleggelseData['requestBody']): CancelablePromise<OppdaterSykdomInnleggelseResponse>;
    /**
     * Henter en liste over dokumenter som kan brukes i vurdering.
     * Henter en liste over dokumenter som kan brukes i vurdering.
     * @param behandlingUuid behandlingUUID
     * @returns SykdomDokumentDto
     * @throws ApiError
     */
    hentSykdomsdokumenter(behandlingUuid: HentSykdomsdokumenterData['behandlingUuid']): CancelablePromise<HentSykdomsdokumenterResponse>;
    /**
     * TEST TEST TEST Oppretter et dokument.
     * TEST TEST TEST Oppretter et dokument.
     * @param requestBody
     * @returns unknown Dokumentet har blitt opprettet.
     * @throws ApiError
     */
    leggTilNyttDokument(requestBody: LeggTilNyttDokumentData['requestBody']): CancelablePromise<LeggTilNyttDokumentResponse>;
    /**
     * En oversikt over alle dokumenter som er koblet på den pleietrengende behandlingen refererer til.
     * En oversikt over alle dokumenter som er koblet på den pleietrengende behandlingen refererer til.
     * @param behandlingUuid behandlingUUID
     * @returns SykdomDokumentOversikt
     * @throws ApiError
     */
    hentDokumentoversikt(behandlingUuid: HentDokumentoversiktData['behandlingUuid']): CancelablePromise<HentDokumentoversiktResponse>;
    /**
     * En gitt vurdering angitt med ID.
     * Henter informasjon om én gitt vurdering.
     * @param behandlingUuid behandlingUUID
     * @param sykdomVurderingId sykdomVurderingId
     * @returns SykdomVurderingDto
     * @throws ApiError
     */
    hentSykdomsInformasjonFor(behandlingUuid: HentSykdomsInformasjonForData['behandlingUuid'], sykdomVurderingId: HentSykdomsInformasjonForData['sykdomVurderingId']): CancelablePromise<HentSykdomsInformasjonForResponse>;
    /**
     * Oppretter en ny vurdering.
     * Oppretter en ny vurdering.
     * @param requestBody
     * @returns SykdomVurderingEndringResultatDto Et resultatobjekt som viser vurderinger som blir erstattet.
     * @throws ApiError
     */
    opprettSykdomsVurdering(requestBody: OpprettSykdomsVurderingData['requestBody']): CancelablePromise<OpprettSykdomsVurderingResponse>;
    /**
     * En oversikt over sykdomsvurderinger for i livets sluttfase
     * En oversikt over sykdomsvurderinger for i livets sluttfase
     * @param behandlingUuid behandlingUUID
     * @returns SykdomVurderingOversikt
     * @throws ApiError
     */
    hentSykdomsoversiktForIlivetsSluttase(behandlingUuid: HentSykdomsoversiktForIlivetsSluttaseData['behandlingUuid']): CancelablePromise<HentSykdomsoversiktForIlivetsSluttaseResponse>;
    /**
     * En oversikt over sykdomsvurderinger for kontinuerlig tilsyn og pleie
     * En oversikt over sykdomsvurderinger for kontinuerlig tilsyn og pleie
     * @param behandlingUuid behandlingUUID
     * @returns SykdomVurderingOversikt
     * @throws ApiError
     */
    hentSykdomsoversiktForKtp(behandlingUuid: HentSykdomsoversiktForKtpData['behandlingUuid']): CancelablePromise<HentSykdomsoversiktForKtpResponse>;
    /**
     * En oversikt over sykdomsvurderinger for langvarig sykdom
     * En oversikt over sykdomsvurderinger for langvarig sykdom
     * @param behandlingUuid behandlingUUID
     * @returns SykdomVurderingOversikt
     * @throws ApiError
     */
    hentSykdomsoversiktForLangvarigSykdom(behandlingUuid: HentSykdomsoversiktForLangvarigSykdomData['behandlingUuid']): CancelablePromise<HentSykdomsoversiktForLangvarigSykdomResponse>;
    /**
     * En oversikt over sykdomsvurderinger for to omsorgspersoner
     * En oversikt over sykdomsvurderinger for to omsorgspersoner
     * @param behandlingUuid behandlingUUID
     * @returns SykdomVurderingOversikt
     * @throws ApiError
     */
    hentSykdomsoversiktForToOmsorgspersoner(behandlingUuid: HentSykdomsoversiktForToOmsorgspersonerData['behandlingUuid']): CancelablePromise<HentSykdomsoversiktForToOmsorgspersonerResponse>;
    /**
     * Oppdaterer en vurdering.
     * Oppdaterer en vurdering.
     * @param requestBody
     * @returns SykdomVurderingEndringResultatDto Et resultatobjekt som viser vurderinger som blir erstattet.
     * @throws ApiError
     */
    oppdaterSykdomsVurdering(requestBody: OppdaterSykdomsVurderingData['requestBody']): CancelablePromise<OppdaterSykdomsVurderingResponse>;
}
export declare class DokumentService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Laster ned selve dokumentet (innholdet).
     * Laster ned selve dokumentet (innholdet).
     * @param behandlingUuid behandlingUUID
     * @param sykdomDokumentId sykdomDokumentId
     * @returns unknown default response
     * @throws ApiError
     */
    hentDokumentinnhold1(behandlingUuid: HentDokumentinnhold1Data['behandlingUuid'], sykdomDokumentId: HentDokumentinnhold1Data['sykdomDokumentId']): CancelablePromise<HentDokumentinnhold1Response>;
    /**
     * Retunerer dokument som er tilknyttet saksnummer, journalpostId og dokumentId.
     * Søk etter dokument på JOARK-identifikatorene journalpostId og dokumentId
     * @param saksnummer Saksnummer
     * @param journalpostId Unik identifikator av journalposten (forsendelsenivå)
     * @param dokumentId Unik identifikator av DokumentInfo/Dokumentbeskrivelse (dokumentnivå)
     * @returns unknown default response
     * @throws ApiError
     */
    hentDokument(saksnummer: HentDokumentData['saksnummer'], journalpostId: HentDokumentData['journalpostId'], dokumentId: HentDokumentData['dokumentId']): CancelablePromise<HentDokumentResponse>;
    /**
     * Oversikt over alle pdf dokumenter fra dokumentarkiv registrert for saksnummer.
     * Henter dokumentlisten knyttet til en sak
     * @param saksnummer Saksnummer
     * @returns DokumentDto default response
     * @throws ApiError
     */
    hentAlleDokumenterForSak(saksnummer: HentAlleDokumenterForSakData['saksnummer']): CancelablePromise<HentAlleDokumenterForSakResponse>;
}
export declare class SøknadsfristService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Returnerer status for søknadsfrist.
     * Hent status på søknadsfrist
     * @param behandlingUuid behandlingUUID
     * @returns SøknadsfristTilstandDto default response
     * @throws ApiError
     */
    utledStatus(behandlingUuid: UtledStatusData['behandlingUuid']): CancelablePromise<UtledStatusResponse>;
}
export declare class TilbakekrevingsvalgService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Hent tilbakekrevingsvalg for behandlingen
     * @param behandlingUuid behandlingUUID
     * @returns TilbakekrevingValgDto default response
     * @throws ApiError
     */
    hentTilbakekrevingValg(behandlingUuid: HentTilbakekrevingValgData['behandlingUuid']): CancelablePromise<HentTilbakekrevingValgResponse>;
    /**
     * Henter varseltekst for tilbakekreving
     * @param behandlingUuid behandlingUUID
     * @returns VarseltekstDto default response
     * @throws ApiError
     */
    hentVarseltekst(behandlingUuid: HentVarseltekstData['behandlingUuid']): CancelablePromise<HentVarseltekstResponse>;
}
export declare class TilsynService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Returnerer alle perioder med etablert tilsyn
     * Hent etablert tilsyn perioder
     * @param behandlingUuid behandlingUUID
     * @returns EtablertTilsynNattevåkOgBeredskapDto perioder med etablert tilsyn, nattevåk og beredskap
     * @throws ApiError
     */
    hentEtablertTilsyn(behandlingUuid: HentEtablertTilsynData['behandlingUuid']): CancelablePromise<HentEtablertTilsynResponse>;
}
export declare class TotrinnskontrollService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Hent aksjonspunkter som skal til totrinnskontroll.
     * @param behandlingUuid behandlingUUID
     * @returns TotrinnskontrollSkjermlenkeContextDto
     * @throws ApiError
     */
    hentTotrinnskontrollSkjermlenkeContext(behandlingUuid: HentTotrinnskontrollSkjermlenkeContextData['behandlingUuid']): CancelablePromise<HentTotrinnskontrollSkjermlenkeContextResponse>;
    /**
     * Hent aksjonspunkter som skal til totrinnskontroll.
     * @param behandlingUuid behandlingUUID
     * @returns TotrinnskontrollSkjermlenkeContextDto
     * @throws ApiError
     */
    hentTotrinnskontrollvurderingSkjermlenkeContext(behandlingUuid: HentTotrinnskontrollvurderingSkjermlenkeContextData['behandlingUuid']): CancelablePromise<HentTotrinnskontrollvurderingSkjermlenkeContextResponse>;
}
export declare class BehandlingUtvidetRettService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Hent rammevedtak
     * @param behandlingUuid behandlingUUID
     * @returns RammevedtakResponse Returnerer relevante rammevedtak for en behandling om utvidet rett
     * @throws ApiError
     */
    hentRammevedtak(behandlingUuid: HentRammevedtakData['behandlingUuid']): CancelablePromise<HentRammevedtakResponse>;
}
export declare class VedtakService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Hent liste over dokumenter flagget med at de inneholder informasjon som ikke er/kan bli punsjet
     * @param behandlingUuid behandlingUUID
     * @returns DokumentMedUstrukturerteDataDto
     * @throws ApiError
     */
    hentDokumenterMedUstrukturerteData(behandlingUuid: HentDokumenterMedUstrukturerteDataData['behandlingUuid']): CancelablePromise<HentDokumenterMedUstrukturerteDataResponse>;
    /**
     * @deprecated
     * Hent vedtak varsel gitt behandlingId
     * @param behandlingUuid behandlingUUID
     * @returns unknown default response
     * @throws ApiError
     */
    hentVedtakVarsel(behandlingUuid: HentVedtakVarselData['behandlingUuid']): CancelablePromise<HentVedtakVarselResponse>;
}
export declare class VilkårService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Hent informasjon om vilkår for en behandling
     * @param behandlingUuid behandlingUUID
     * @returns VilkårDto Returnerer vilkår på behandling, tom liste hvis ikke eksisterer (GUI støtter ikke NOT_FOUND p.t.)
     * @throws ApiError
     */
    getVilkårV3(behandlingUuid: GetVilkårV3Data['behandlingUuid']): CancelablePromise<GetVilkårV3Response>;
    /**
     * Returnerer info om vilkår, inkludert hvordan eventuelt kjørt (input og evaluering).
     * Forvaltning : Hent informasjon om vilkår for en behandling
     * @param behandlingUuid behandlingUUID
     * @returns VilkårMedPerioderDto Returnerer vilkår på behandling, tom liste hvis ikke eksisterer (GUI støtter ikke NOT_FOUND p.t.)
     * @throws ApiError
     */
    getVilkårFullV3(behandlingUuid: GetVilkårFullV3Data['behandlingUuid']): CancelablePromise<GetVilkårFullV3Response>;
    /**
     * Hent informasjon om vilkår samlet for en behandling
     * @param behandlingUuid behandlingUUID
     * @returns VilkårResultatContainer Returnerer vilkår på behandling, tom liste hvis ikke eksisterer (GUI støtter ikke NOT_FOUND p.t.)
     * @throws ApiError
     */
    getVilkårSamlet(behandlingUuid: GetVilkårSamletData['behandlingUuid']): CancelablePromise<GetVilkårSamletResponse>;
}
export declare class YtelserService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Hent andre overlappende K9-ytelser som påvirker denne behandlingen
     * Hent andre overlappende K9-ytelser som påvirker denne behandlingen
     * @param behandlingUuid behandlingUUID
     * @returns OverlappendeYtelseDto default response
     * @throws ApiError
     */
    hentOverlappendeYtelser(behandlingUuid: HentOverlappendeYtelserData['behandlingUuid']): CancelablePromise<HentOverlappendeYtelserResponse>;
}
export declare class BeregningService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Hent kalkulatorinput for behandling
     * @param behandlingId
     * @returns KalkulatorInputPrVilkårperiodeDto Returnerer kalkulatorinput på JSON format
     * @throws ApiError
     */
    getKalkulatorInput(behandlingId?: GetKalkulatorInputData['behandlingId']): CancelablePromise<GetKalkulatorInputResponse>;
    /**
     * Finner behandlinger og informasjon om perioder som er rammet av IM-feil
     * @returns unknown default response
     * @throws ApiError
     */
    finnBehandlingerMedFeilIm(): CancelablePromise<FinnBehandlingerMedFeilImResponse>;
    /**
     * Fjerner prosesstrigger for reberegning av grunnlag
     * Fjerner prosesstrigger for reberegning av grunnlag
     * @param requestBody Saksnummer og skjæringstidspunkt (YYYY-MM-DD) på csv-format
     * @returns unknown default response
     * @throws ApiError
     */
    fjernProsessTriggerForReberegning(requestBody?: FjernProsessTriggerForReberegningData['requestBody']): CancelablePromise<FjernProsessTriggerForReberegningResponse>;
    /**
     * Sorterte inntektsmeldinger per vilkårsperiode
     * @param behandlingId
     * @returns Inntektsmelding Returnerer kalkulatorinput på JSON format
     * @throws ApiError
     */
    inntektsmeldingSortering(behandlingId?: InntektsmeldingSorteringData['behandlingId']): CancelablePromise<InntektsmeldingSorteringResponse>;
    /**
     * Oppretter manuell revurdering grunnet nye opplysninger om beregning.
     * Oppretter manuell revurdering grunnet nye opplysninger om beregning.
     * @param requestBody Saksnummer og skjæringstidspunkt (YYYY-MM-DD) på csv-format
     * @returns unknown default response
     * @throws ApiError
     */
    revurderGrunnetEndretOpplysning(requestBody?: RevurderGrunnetEndretOpplysningData['requestBody']): CancelablePromise<RevurderGrunnetEndretOpplysningResponse>;
    /**
     * Oppretter manuell revurdering grunnet nye opplysninger om opptjening.
     * Oppretter manuell revurdering grunnet nye opplysninger om opptjening.
     * @param requestBody Saksnummer og skjæringstidspunkt (YYYY-MM-DD) på csv-format
     * @returns unknown default response
     * @throws ApiError
     */
    revurderGrunnetOpplysningOmOpptjening(requestBody?: RevurderGrunnetOpplysningOmOpptjeningData['requestBody']): CancelablePromise<RevurderGrunnetOpplysningOmOpptjeningResponse>;
    /**
     * Data til utledning av forlengelse av aktivitetstatus
     * @param formData
     * @returns unknown default response
     * @throws ApiError
     */
    finnAktivitetstatusForlengelseData(formData?: FinnAktivitetstatusForlengelseDataData['formData']): CancelablePromise<FinnAktivitetstatusForlengelseDataResponse>;
    /**
     * Oppretter manuell revurdering og bruker skatteoppgjør fra oppgitt behandling.
     * Oppretter manuell revurdering og bruker skatteoppgjør fra oppgitt behandling.
     * @param requestBody
     * @returns unknown default response
     * @throws ApiError
     */
    revurderOgBrukForrigeSkatteoppgjør(requestBody?: RevurderOgBrukForrigeSkatteoppgjørData['requestBody']): CancelablePromise<RevurderOgBrukForrigeSkatteoppgjørResponse>;
    /**
     * Oppretter manuell revurdering for reinnhenting av PGI.
     * Oppretter manuell revurdering for reinnhenting av PGI.
     * @param requestBody
     * @returns unknown default response
     * @throws ApiError
     */
    revurderOgInnhentPgi(requestBody?: RevurderOgInnhentPgiData['requestBody']): CancelablePromise<RevurderOgInnhentPgiResponse>;
}
export declare class BrevService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Bestiller generering og sending av brevet
     * @param requestBody Inneholder kode til brevmal og data som skal flettes inn i brevet
     * @returns void Bestilling ok
     * @throws ApiError
     */
    bestillDokument(requestBody?: BestillDokumentData['requestBody']): CancelablePromise<BestillDokumentResponse>;
    /**
     * Hent navnet til gitt organisasjonsnr for sending til tredjepart
     * @param requestBody
     * @returns unknown respons fra ereg, eller null viss organisasjon ikke blir funnet
     * @throws ApiError
     */
    getBrevMottakerinfoEreg(requestBody: GetBrevMottakerinfoEregData['requestBody']): CancelablePromise<GetBrevMottakerinfoEregResponse>;
}
export declare class BrukerdialogService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Returnerer nyeste gyldige vedtak for en gitt aktørId
     * Returnerer nyeste gyldige vedtak for en gitt aktørId
     * @param requestBody
     * @returns HarGyldigOmsorgsdagerVedtakDto default response
     * @throws ApiError
     */
    hentSisteGyldigeVedtakForAktorId(requestBody?: HentSisteGyldigeVedtakForAktorIdData['requestBody']): CancelablePromise<HentSisteGyldigeVedtakForAktorIdResponse>;
}
export declare class FagsakService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Hent fagsak for saksnummer
     * @param saksnummer
     * @returns FagsakDto Returnerer fagsak
     * @throws ApiError
     */
    hentFagsak(saksnummer: HentFagsakData['saksnummer']): CancelablePromise<HentFagsakResponse>;
    /**
     * Hent brukerdata for aktørId
     * @param saksnummer
     * @returns PersonDto Returnerer person
     * @throws ApiError
     */
    hentBrukerForFagsak(saksnummer: HentBrukerForFagsakData['saksnummer']): CancelablePromise<HentBrukerForFagsakResponse>;
    /**
     * Finner matchende fagsaker for angitt ytelse, bruker, etc..
     * Søk etter saker på ytelse, bruker, og evt. pleieptrengende/relatertPerson
     * @param requestBody Match kritierer for å lete opp fagsaker
     * @returns FagsakInfoDto default response
     * @throws ApiError
     */
    matchFagsaker(requestBody?: MatchFagsakerData['requestBody']): CancelablePromise<MatchFagsakerResponse>;
    /**
     * Hent liste over saket tilknyttet en pleietrengende
     * @param behandlingUuid behandlingUUID
     * @returns RelatertSakDto
     * @throws ApiError
     */
    hentRelaterteSaker(behandlingUuid: HentRelaterteSakerData['behandlingUuid']): CancelablePromise<HentRelaterteSakerResponse>;
    /**
     * Hent rettigheter for saksnummer
     * @param saksnummer
     * @returns SakRettigheterDto Returnerer rettigheter
     * @throws ApiError
     */
    hentRettigheter(saksnummer: HentRettigheterData['saksnummer']): CancelablePromise<HentRettigheterResponse>;
    /**
     * Spesifikke saker kan søkes via saksnummer. Oversikt over saker knyttet til en bruker kan søkes via fødselsnummer eller d-nummer.
     * Søk etter saker på saksnummer eller fødselsnummer
     * @param requestBody Søkestreng kan være saksnummer, fødselsnummer eller D-nummer.
     * @returns FagsakDto default response
     * @throws ApiError
     */
    søkFagsaker(requestBody?: SøkFagsakerData['requestBody']): CancelablePromise<SøkFagsakerResponse>;
    /**
     * Returnerer link til enten samme (hvis ikke ferdig) eller redirecter til /fagsak dersom asynkrone operasjoner er ferdig.
     * Url for å polle på fagsak mens behandlingprosessen pågår i bakgrunnen(asynkront)
     * @param saksnummer
     * @param gruppe
     * @returns AsyncPollingStatus Returnerer Status
     * @throws ApiError
     */
    hentFagsakMidlertidigStatus(saksnummer: HentFagsakMidlertidigStatusData['saksnummer'], gruppe?: HentFagsakMidlertidigStatusData['gruppe']): CancelablePromise<HentFagsakMidlertidigStatusResponse>;
}
export declare class FordelService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Mottak av dokument.
     * @param requestBody Hendelse innsendt.
     * @returns PåvirkedeSaker default response
     * @throws ApiError
     */
    innsending(requestBody?: InnsendingData['requestBody']): CancelablePromise<InnsendingResponse>;
    /**
     * Finn saker påvirket av hendelse
     * Finn saker påvirket av hendelse
     * @param requestBody Oppretter fagsak
     * @returns PåvirkedeSaker default response
     * @throws ApiError
     */
    finnPåvirkedeFagsaker(requestBody?: FinnPåvirkedeFagsakerData['requestBody']): CancelablePromise<FinnPåvirkedeFagsakerResponse>;
    /**
     * Finn siste fagsak som matcher søkekriteriene
     * Finn siste eksisterende fagsak.
     * @param requestBody Oppretter fagsak
     * @returns unknown default response
     * @throws ApiError
     */
    finnSisteFagsak(requestBody?: FinnSisteFagsakData['requestBody']): CancelablePromise<FinnSisteFagsakResponse>;
    /**
     * Finn eller opprett ny fagsak
     * Finn eller opprett ny sak.
     * @param requestBody Oppretter fagsak
     * @returns SaksnummerDto default response
     * @throws ApiError
     */
    opprettSak(requestBody?: OpprettSakData['requestBody']): CancelablePromise<OpprettSakResponse>;
    /**
     * @deprecated
     * Finn eller opprett ny fagsak basert på D-/fødselsnummer.
     * Finn eller opprett ny sak basert på D-/fødselsnummer.
     * @param requestBody Oppretter fagsak
     * @returns SaksnummerDto default response
     * @throws ApiError
     */
    opprettSakMedFnr(requestBody?: OpprettSakMedFnrData['requestBody']): CancelablePromise<OpprettSakMedFnrResponse>;
    /**
     * Finn eller opprett sak med gitt saksnummer og motta ny journalpost
     * Finn eller opprett sak med gitt saksnummer og motta ny journalpost
     * @param requestBody Krever saksnummer, journalpostId, aktørId, periode og ytelseType
     * @returns unknown default response
     * @throws ApiError
     */
    opprettSakOgMottaJournalpost(requestBody?: OpprettSakOgMottaJournalpostData['requestBody']): CancelablePromise<OpprettSakOgMottaJournalpostResponse>;
    /**
     * Finn eksisterende fagsak
     * Finn eksisterende sak.
     * @param requestBody Oppretter fagsak
     * @returns SaksnummerDto default response
     * @throws ApiError
     */
    finnEksisterendeFagsak(requestBody?: FinnEksisterendeFagsakData['requestBody']): CancelablePromise<FinnEksisterendeFagsakResponse>;
    /**
     * @deprecated
     * Mottak av dokument.
     * @param requestBody Søknad/dokument innsendt.
     * @returns InnsendingMottatt default response
     * @throws ApiError
     */
    innsending1(requestBody?: Innsending1Data['requestBody']): CancelablePromise<Innsending1Response>;
    /**
     * Varsel om en nye journalposter som skal behandles i systemet. Alle må tilhøre samme saksnummer, og være av samme type(brevkode, ytelsetype)
     * Ny journalpost skal behandles.
     * @param requestBody Krever saksnummer, journalpostId og behandlingstemaOffisiellKode
     * @returns unknown default response
     * @throws ApiError
     */
    mottaJournalposter(requestBody?: MottaJournalposterData['requestBody']): CancelablePromise<MottaJournalposterResponse>;
    /**
     * Legger til fødselsnumre som skal rutes til Infotrygd for PSB.
     * Legger til aktør-IDer som skal rutes til Infotrygd for PSB.
     * @param requestBody Liste med aktør-IDer
     * @returns unknown default response
     * @throws ApiError
     */
    leggTilPsbInfotrygdAktør(requestBody?: LeggTilPsbInfotrygdAktørData['requestBody']): CancelablePromise<LeggTilPsbInfotrygdAktørResponse>;
    /**
     * Sjekker om PSB-fordeling skal til Infotrygd for minst én av personene.
     * Sjekker om PSB-fordeling skal til Infotrygd for minst én av personene.
     * @param requestBody Sjekker om PSB-fordeling skal til Infotrygd for minst én av personen)
     * @returns boolean default response
     * @throws ApiError
     */
    sjekkPsbInfotrygdPerson(requestBody?: SjekkPsbInfotrygdPersonData['requestBody']): CancelablePromise<SjekkPsbInfotrygdPersonResponse>;
    /**
     * Legger til fødselsnumre som skal rutes til Infotrygd for PSB.
     * Legger til fødselsnumre som skal rutes til Infotrygd for PSB.
     * @param requestBody Fødselsnumre (skilt med mellomrom eller linjeskift
     * @returns unknown default response
     * @throws ApiError
     */
    leggTilPsbInfotrygdPerson(requestBody?: LeggTilPsbInfotrygdPersonData['requestBody']): CancelablePromise<LeggTilPsbInfotrygdPersonResponse>;
    /**
     * Sjekker om det finnes en eksisterende fagsak med søker, pleietrengende og/eller relatert part.
     * Sjekker om det finnes en eksisterende fagsak med søker, pleietrengende og/eller relatert part.
     * @param requestBody Søkeparametere
     * @returns boolean default response
     * @throws ApiError
     */
    finnesEksisterendeFagsakMedEnAvAktørene(requestBody?: FinnesEksisterendeFagsakMedEnAvAktøreneData['requestBody']): CancelablePromise<FinnesEksisterendeFagsakMedEnAvAktøreneResponse>;
    /**
     * Setter at angitt saksnumre skal behandles som PB (gammel ordning) for PSB-saker.
     * Setter at angitt saksnumre skal behandles som PB (gammel ordning) for PSB-saker.
     * @param saksnummer
     * @returns unknown default response
     * @throws ApiError
     */
    leggTilPbPerson(saksnummer: LeggTilPbPersonData['saksnummer']): CancelablePromise<LeggTilPbPersonResponse>;
}
export declare class FeriepengerService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Oppretter task som logger saker som vør vurderes for revurdering av feriepenger etter fiks av at kvote er pr år
     * @returns unknown default response
     * @throws ApiError
     */
    finnSakerSomSkalRevurderes(): CancelablePromise<FinnSakerSomSkalRevurderesResponse>;
}
export declare class DefaultService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Henter liste av saker med ubehandlede behandlinger hvor dødsfall er årsak. Resultat er tenkt brukt i enhetenes prioritering av behandlinger. Kan fjernes når ny los løser samme behov. Bruk antall til å justere hvis kallet timer ut.
     * @param antall
     * @returns unknown default response
     * @throws ApiError
     */
    finnUbehandledeDødsfallBehandlinger(antall: FinnUbehandledeDødsfallBehandlingerData['antall']): CancelablePromise<FinnUbehandledeDødsfallBehandlingerResponse>;
    /**
     * @param redirectTo
     * @param original
     * @returns unknown default response
     * @throws ApiError
     */
    login(redirectTo?: LoginData['redirectTo'], original?: LoginData['original']): CancelablePromise<LoginResponse>;
    /**
     * Henter liste av saker med ubehandlede unntaksbehandlinger
     * @returns unknown default response
     * @throws ApiError
     */
    finnUbehandledeUnntaksbehandlnger(): CancelablePromise<FinnUbehandledeUnntaksbehandlngerResponse>;
}
export declare class ForvaltningPersonService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Hent fnr for aktørid
     * @param requestBody AktørIder (skilt med mellomrom eller linjeskift)
     * @returns unknown Hent fnr for aktørid
     * @throws ApiError
     */
    getFnrForAktørId(requestBody?: GetFnrForAktørIdData['requestBody']): CancelablePromise<GetFnrForAktørIdResponse>;
}
export declare class HistorikkService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Henter alle historikkinnslag for en gitt sak.
     * @param saksnummer Saksnummer må være et eksisterende saksnummer
     * @returns unknown default response
     * @throws ApiError
     */
    hentAlleInnslag(saksnummer: HentAlleInnslagData['saksnummer']): CancelablePromise<HentAlleInnslagResponse>;
}
export declare class InfotrygdmigreringService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Deaktiverer migrert skjæringstidspunkt fra infotrygd for gitt sak
     * @param requestBody
     * @returns unknown default response
     * @throws ApiError
     */
    deaktiverSkjærinstidspunkt(requestBody?: DeaktiverSkjærinstidspunktData['requestBody']): CancelablePromise<DeaktiverSkjærinstidspunktResponse>;
    /**
     * Hent saker som har fått deaktivert migrering og har flere perioder
     * @returns SaksnummerDto Returnerer aker som har fått deaktivert migrering og har flere perioder
     * @throws ApiError
     */
    finnSakerMedDeaktivertMigrering(): CancelablePromise<FinnSakerMedDeaktivertMigreringResponse>;
    /**
     * Hent saker som feilaktig har blitt behandlet som ikke migrert fra infotrygd
     * @returns SaksnummerDto Returnerer saker som feilaktig har blitt behandlet som ikke migrert fra infotrygd
     * @throws ApiError
     */
    feilbehandledeMigreringer(): CancelablePromise<FeilbehandledeMigreringerResponse>;
    /**
     * Legger til migrert skjæringstidspunkt fra infotrygd for gitt sak
     * @param requestBody
     * @returns unknown default response
     * @throws ApiError
     */
    leggTilSkjærinstidspunkt(requestBody?: LeggTilSkjærinstidspunktData['requestBody']): CancelablePromise<LeggTilSkjærinstidspunktResponse>;
    /**
     * Hent skjæringstidspunkter for infotrygdmigrering for saker
     * @param saksnummer
     * @returns MigrertSkjæringstidspunktDto Returnerer alle skjæringstidspunkt som har blitt lagret på sak
     * @throws ApiError
     */
    getSkjæringstidspunkter(saksnummer?: GetSkjæringstidspunkterData['saksnummer']): CancelablePromise<GetSkjæringstidspunkterResponse>;
}
export declare class InitFetchService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Returnerer
     * @returns InitLinksDto default response
     * @throws ApiError
     */
    hentInitielleRessurser(): CancelablePromise<HentInitielleRessurserResponse>;
}
export declare class IntegrasjonService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Inneholder også detaljer og evt kjent tidspunkt for når systemet er oppe igjen.
     * Gir en oversikt over systemer som er nede
     * @returns SystemNedeDto default response
     * @throws ApiError
     */
    finnSystemerSomErNede(): CancelablePromise<FinnSystemerSomErNedeResponse>;
    /**
     * Returnerer en boolean som angir om detaljerte feilmeldinger skal vises av GUI
     * @returns boolean default response
     * @throws ApiError
     */
    skalViseDetaljerteFeilmeldinger(): CancelablePromise<SkalViseDetaljerteFeilmeldingerResponse>;
}
export declare class KodeverkService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Henter kodeliste
     * @returns unknown default response
     * @throws ApiError
     */
    hentGruppertKodeliste(): CancelablePromise<HentGruppertKodelisteResponse>;
    /**
     * Henter liste over behandlende enheter
     * @param ytelseType
     * @returns OrganisasjonsEnhet default response
     * @throws ApiError
     */
    hentBehandlendeEnheter(ytelseType?: HentBehandlendeEnheterData['ytelseType']): CancelablePromise<HentBehandlendeEnheterResponse>;
    /**
     * Ikkje reell implementasjon for bruk. Kun for openapi type generering av k9-formidling kodeverkstyper
     * @returns K9FormidlingKodeverkWeb default response
     * @throws ApiError
     */
    getK9FormidlingKodeverkTyper(): CancelablePromise<GetK9FormidlingKodeverkTyperResponse>;
    /**
     * Ikkje reell implementasjon for bruk. Kun for openapi type generering av k9-sak kodeverkstyper
     * @returns K9SakKodeverkWeb default response
     * @throws ApiError
     */
    getK9SakKodeverkTyper(): CancelablePromise<GetK9SakKodeverkTyperResponse>;
}
export declare class LosService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Returnerer behandlingen som er tilknyttet id.
     * Hent behandling gitt id
     * @param behandlingUuid behandlingUUID
     * @returns BehandlingMedFagsakDto Returnerer Behandling
     * @throws ApiError
     */
    hentBehandlingData2(behandlingUuid: HentBehandlingData2Data['behandlingUuid']): CancelablePromise<HentBehandlingData2Response>;
    /**
     * @param behandlingUuid behandlingUUID
     * @returns LosOpplysningerSomManglerIKlageDto Returnerer opplysninger los trenger for å fylle ut klageoppgaver
     * @throws ApiError
     */
    hentLosdataForKlage(behandlingUuid: HentLosdataForKlageData['behandlingUuid']): CancelablePromise<HentLosdataForKlageResponse>;
    /**
     * Henter merknad på oppgave i los
     * @param behandlingUuid behandlingUUID
     * @returns unknown default response
     * @throws ApiError
     */
    getMerknad(behandlingUuid: GetMerknadData['behandlingUuid']): CancelablePromise<GetMerknadResponse>;
    /**
     * Lagrer merknad på oppgave i los
     * @param requestBody behandlingUUID
     * @returns unknown default response
     * @throws ApiError
     */
    postMerknad(requestBody?: PostMerknadData['requestBody']): CancelablePromise<PostMerknadResponse>;
}
export declare class NavAnsattService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Ident hentes fra sikkerhetskonteksten som er tilgjengelig etter innlogging.
     * Returnerer fullt navn for ident
     * @returns InnloggetAnsattDto default response
     * @throws ApiError
     */
    innloggetBruker(): CancelablePromise<InnloggetBrukerResponse>;
    /**
     * Identer hentes fra historikkinnslag og sykdomsvurderinger.
     * Returnerer fullt navn for identer som har berørt en fagsak
     * @param behandlingUuid behandlingUUID
     * @returns SaksbehandlerDto default response
     * @throws ApiError
     */
    getSaksbehandlere(behandlingUuid: GetSaksbehandlereData['behandlingUuid']): CancelablePromise<GetSaksbehandlereResponse>;
}
export declare class NotatService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Henter alle notater for fagsak
     * @param saksnummer Saksnummer
     * @param notatId Notat uuid
     * @returns unknown default response
     * @throws ApiError
     */
    hent(saksnummer: HentData['saksnummer'], notatId?: HentData['notatId']): CancelablePromise<HentResponse>;
    /**
     * Lag nytt notat
     * @param requestBody Nytt notat
     * @returns unknown default response
     * @throws ApiError
     */
    opprett(requestBody: OpprettData['requestBody']): CancelablePromise<OpprettResponse>;
    /**
     * Endre eksistrende notat
     * @param requestBody Notat som skal endres
     * @returns unknown default response
     * @throws ApiError
     */
    endre(requestBody: EndreData['requestBody']): CancelablePromise<EndreResponse>;
    /**
     * Skjul notat
     * @param requestBody Notat som skal skjules
     * @returns unknown default response
     * @throws ApiError
     */
    skjul(requestBody: SkjulData['requestBody']): CancelablePromise<SkjulResponse>;
}
export declare class OppdragService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Henter data som k9-sak sender til k9-oppdrag ved iverksetting
     * Henter data som k9-sak sender til k9-oppdrag ved iverksetting
     * @param behandlingId
     * @returns TilkjentYtelseOppdrag Returnerer data som k9-sak sender tli k9-oppdrag ved iverksetting
     * @throws ApiError
     */
    hentIverksettingData(behandlingId: HentIverksettingDataData['behandlingId']): CancelablePromise<HentIverksettingDataResponse>;
}
export declare class OpplæringsinstitusjonService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Hent opplæringsinstitusjon med uuid
     * @param id
     * @returns GodkjentOpplæringsinstitusjonDto Returnerer opplæringsinstitusjon
     * @returns void Opplæringsinstitusjon ikke funnet
     * @throws ApiError
     */
    hentMedUuid(id: HentMedUuidData['id']): CancelablePromise<HentMedUuidResponse>;
    /**
     * Hent aktiv opplæringsinstitusjon med uuid for oppgitt periode
     * @param id
     * @param aktivPeriode Format: YYYY-MM-DD/YYYY-MM-DD
     * @returns GodkjentOpplæringsinstitusjonDto Returnerer aktiv opplæringsinstitusjon
     * @returns void Opplæringsinstitusjon ikke funnet
     * @throws ApiError
     */
    hentAktivMedUuid(id: HentAktivMedUuidData['id'], aktivPeriode: HentAktivMedUuidData['aktivPeriode']): CancelablePromise<HentAktivMedUuidResponse>;
    /**
     * Hent aktive opplæringsinstitusjoner for oppgitt periode
     * @param aktivPeriode Format: YYYY-MM-DD/YYYY-MM-DD
     * @returns GodkjentOpplæringsinstitusjonDto Returnerer aktive opplæringsinstitusjoner for oppgitt periode
     * @throws ApiError
     */
    hentAktive(aktivPeriode: HentAktiveData['aktivPeriode']): CancelablePromise<HentAktiveResponse>;
    /**
     * Hent opplæringsinstitusjoner
     * @returns GodkjentOpplæringsinstitusjonDto Returnerer opplæringsinstitusjoner
     * @throws ApiError
     */
    hentAlle(): CancelablePromise<HentAlleResponse>;
    /**
     * Sjekk om opplæringsinstitusjon er aktiv i oppgitt periode
     * @param id
     * @param aktivPeriode Format: YYYY-MM-DD/YYYY-MM-DD
     * @returns boolean Returnerer om opplæringsinstitusjon er aktiv i oppgitt periode
     * @throws ApiError
     */
    erAktiv(id: ErAktivData['id'], aktivPeriode: ErAktivData['aktivPeriode']): CancelablePromise<ErAktivResponse>;
}
export declare class PipService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Henter aktørId'er tilknyttet en fagsak
     * @param saksnummer
     * @returns string default response
     * @throws ApiError
     */
    hentAktørIdListeTilknyttetSak(saksnummer: HentAktørIdListeTilknyttetSakData['saksnummer']): CancelablePromise<HentAktørIdListeTilknyttetSakResponse>;
    /**
     * Henter aktørIder, fagsak- og behandlingstatus tilknyttet til en behandling
     * @param behandlingUuid
     * @returns PipDto default response
     * @throws ApiError
     */
    hentAktørIdListeTilknyttetBehandling(behandlingUuid: HentAktørIdListeTilknyttetBehandlingData['behandlingUuid']): CancelablePromise<HentAktørIdListeTilknyttetBehandlingResponse>;
}
export declare class ProsesstaskService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Oppretter en ny task klar for kjøring.
     * Oppretter en prosess task i henhold til request
     * @param requestBody Informasjon for restart en eksisterende prosesstask
     * @returns ProsessTaskDataDto Prosesstaskens oppdatert informasjon
     * @throws ApiError
     */
    createProsessTask(requestBody?: CreateProsessTaskData['requestBody']): CancelablePromise<CreateProsessTaskResponse>;
    /**
     * En allerede FERDIG prosesstask kan ikke restartes. En prosesstask har normalt et gitt antall forsøk den kan kjøres automatisk. Dette endepunktet vil tvinge tasken til å trigge uavhengig av maks antall forsøk
     * Restarter en eksisterende prosesstask.
     * @param requestBody Informasjon for restart en eksisterende prosesstask
     * @returns ProsessTaskRestartResultatDto Prosesstaskens oppdatert informasjon
     * @throws ApiError
     */
    restartProsessTask(requestBody?: RestartProsessTaskData['requestBody']): CancelablePromise<RestartProsessTaskResponse>;
    /**
     * Lister prosesstasker med angitt status.
     * @param requestBody Liste av statuser som skal hentes.
     * @returns ProsessTaskDataDto Liste over prosesstasker, eller tom liste når angitt/default søkefilter ikke finner noen prosesstasker
     * @throws ApiError
     */
    finnProsessTasks(requestBody?: FinnProsessTasksData['requestBody']): CancelablePromise<FinnProsessTasksResponse>;
    /**
     * Dette endepunktet vil tvinge feilede tasks til å trigge ett forsøk uavhengig av maks antall forsøk
     * Restarter alle prosesstask med status FEILET.
     * @returns ProsessTaskRetryAllResultatDto Response med liste av prosesstasks som restartes
     * @throws ApiError
     */
    retryAllProsessTask(): CancelablePromise<RetryAllProsessTaskResponse>;
    /**
     * Setter feilet prosesstask med angitt prosesstask-id til FERDIG (kjøres ikke)
     * @param requestBody Prosesstask-id for feilet prosesstask
     * @returns unknown Angitt prosesstask-id satt til status FERDIG
     * @throws ApiError
     */
    setFeiletProsessTaskFerdig(requestBody: SetFeiletProsessTaskFerdigData['requestBody']): CancelablePromise<SetFeiletProsessTaskFerdigResponse>;
}
export declare class JournalposterService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @deprecated
     * Henter uferdig journalposter fra punsj for en gitt behandlingUuid
     * @param behandlingUuid behandlingUUID
     * @returns JournalpostIderDto Returnerer en liste med uferdig journalpostIder som ligger i punsj på gitt behandlingUuid.
     * @throws ApiError
     */
    getUferdigJournalpostIderPrAktoer(behandlingUuid: GetUferdigJournalpostIderPrAktoerData['behandlingUuid']): CancelablePromise<GetUferdigJournalpostIderPrAktoerResponse>;
    /**
     * Henter uferdige journalposter fra punsj for søker og pleietrengende
     * @param saksnummer SAKSNUMMER
     * @returns JournalpostIderDto Returnerer en liste med uferdig journalpostIder som ligger i punsj på et gitt saksnummer.
     * @throws ApiError
     */
    getUferdigJournalpostIderPrAktoer1(saksnummer: GetUferdigJournalpostIderPrAktoer1Data['saksnummer']): CancelablePromise<GetUferdigJournalpostIderPrAktoer1Response>;
}
export declare class RapporteringService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Henter en dump av info for debugging og analyse av en sak
     * Dumper en rapport av data
     * @param formData
     * @returns unknown default response
     * @throws ApiError
     */
    genererRapportForYtelse(formData?: GenererRapportForYtelseData['formData']): CancelablePromise<GenererRapportForYtelseResponse>;
}
export declare class RegisterdataService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Callback når registerinnhenting av IAY har blitt fullført i Abakus
     * @param requestBody callbackDto
     * @returns unknown default response
     * @throws ApiError
     */
    callback(requestBody?: CallbackData['requestBody']): CancelablePromise<CallbackResponse>;
}
export declare class SaksnummerService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Henter reservert saksnummer med ytelse, bruker og pleietrengende
     * Hent reservert saksnummer.
     * @param saksnummer SaksnummerDto
     * @returns HentReservertSaksnummerDto default response
     * @throws ApiError
     */
    hentReservertSaksnummer(saksnummer: HentReservertSaksnummerData['saksnummer']): CancelablePromise<HentReservertSaksnummerResponse>;
    /**
     * Reserver saksnummer
     * Reserver saksnummer.
     * @param requestBody ReserverSaksnummerDto
     * @returns SaksnummerDto default response
     * @throws ApiError
     */
    reserverSaksnummer(requestBody: ReserverSaksnummerData['requestBody']): CancelablePromise<ReserverSaksnummerResponse>;
    /**
     * Henter reserverte saksnummer med ytelse, bruker og pleietrengende
     * Hent alle reserverte saksnummer på søker.
     * @param requestBody AktørIdDto
     * @returns HentReservertSaksnummerDto default response
     * @throws ApiError
     */
    hentReserverteSaksnummerPåSøker(requestBody: HentReserverteSaksnummerPåSøkerData['requestBody']): CancelablePromise<HentReserverteSaksnummerPåSøkerResponse>;
}
export declare class UttakService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Fjerner prosesstrigger for endring fra annen omsorgsperson
     * Fjerner prosesstrigger for endring fra annen omsorgsperson
     * @param requestBody Behandling-id
     * @returns unknown default response
     * @throws ApiError
     */
    fjernProsessTriggerForEndringFraAnnenOmsorgsperson(requestBody: FjernProsessTriggerForEndringFraAnnenOmsorgspersonData['requestBody']): CancelablePromise<FjernProsessTriggerForEndringFraAnnenOmsorgspersonResponse>;
    /**
     * Fjerner prosesstrigger for endring fra annen omsorgsperson
     * Fjerner prosesstrigger for endring fra annen omsorgsperson
     * @param formData
     * @returns unknown default response
     * @throws ApiError
     */
    fjernProsessTriggerForEndringFraAnnenOmsorgspersonMedGittPeriode(formData?: FjernProsessTriggerForEndringFraAnnenOmsorgspersonMedGittPeriodeData['formData']): CancelablePromise<FjernProsessTriggerForEndringFraAnnenOmsorgspersonMedGittPeriodeResponse>;
    /**
     * Henter tidslinje for revurdering av uttak
     * Henter tidslinje for revurdering av uttak
     * @param formData
     * @returns unknown default response
     * @throws ApiError
     */
    hentEndringsperioderTidslinje(formData?: HentEndringsperioderTidslinjeData['formData']): CancelablePromise<HentEndringsperioderTidslinjeResponse>;
    /**
     * Henter tidslinjer som fører til endring i sak
     * Henter tidslinjer der annen omsorgsperson påvirket sak for sak med behandlingsårsak RE_ANNEN_SAK
     * @param requestBody Behandling-id
     * @returns unknown default response
     * @throws ApiError
     */
    hentTidslinjerEndringFraAnnenOmsorgsperson(requestBody: HentTidslinjerEndringFraAnnenOmsorgspersonData['requestBody']): CancelablePromise<HentTidslinjerEndringFraAnnenOmsorgspersonResponse>;
}
//# sourceMappingURL=services.gen.d.ts.map