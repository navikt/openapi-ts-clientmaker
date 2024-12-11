import { Interceptors } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';
import { AksjonspunktService } from './services.gen';
import { AktoerService } from './services.gen';
import { ArbeidsgiverService } from './services.gen';
import { BehandlingÅrskvantumUttakService } from './services.gen';
import { BehandlingÅrskvantumUttrekkService } from './services.gen';
import { BehandlingerService } from './services.gen';
import { BehandlingFosterbarnService } from './services.gen';
import { BehandlingPersonService } from './services.gen';
import { BehandlingPleiepengerUttakService } from './services.gen';
import { BehandlingUttakService } from './services.gen';
import { BehandlingUtvidetRettService } from './services.gen';
import { BeregningService } from './services.gen';
import { BeregningsgrunnlagService } from './services.gen';
import { BeregningsresultatService } from './services.gen';
import { BrevService } from './services.gen';
import { BrukerdialogService } from './services.gen';
import { DefaultService } from './services.gen';
import { DødService } from './services.gen';
import { DokumentService } from './services.gen';
import { FagsakService } from './services.gen';
import { FeriepengerService } from './services.gen';
import { FordelService } from './services.gen';
import { ForvaltningService } from './services.gen';
import { ForvaltningPersonService } from './services.gen';
import { HistorikkService } from './services.gen';
import { InfotrygdmigreringService } from './services.gen';
import { InitFetchService } from './services.gen';
import { InntektArbeidYtelseService } from './services.gen';
import { IntegrasjonService } from './services.gen';
import { JournalposterService } from './services.gen';
import { KodeverkService } from './services.gen';
import { KompletthetService } from './services.gen';
import { KontrollService } from './services.gen';
import { LosService } from './services.gen';
import { NavAnsattService } from './services.gen';
import { NotatService } from './services.gen';
import { OmsorgenForService } from './services.gen';
import { OppdragService } from './services.gen';
import { OppgittOpptjeningService } from './services.gen';
import { OpplæringsinstitusjonService } from './services.gen';
import { OpplæringspengerService } from './services.gen';
import { OpptjeningService } from './services.gen';
import { PerioderService } from './services.gen';
import { PipService } from './services.gen';
import { ProsesstaskService } from './services.gen';
import { RapporteringService } from './services.gen';
import { RedirectService } from './services.gen';
import { RegisterdataService } from './services.gen';
import { SaksnummerService } from './services.gen';
import { SøknadService } from './services.gen';
import { SøknadsfristService } from './services.gen';
import { SykdomService } from './services.gen';
import { TilbakekrevingsvalgService } from './services.gen';
import { TilsynService } from './services.gen';
import { TotrinnskontrollService } from './services.gen';
import { UttakService } from './services.gen';
import { VedtakService } from './services.gen';
import { VilkårService } from './services.gen';
import { YtelserService } from './services.gen';
export class Client {
    constructor(config, HttpRequest = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '/k9/sak',
            VERSION: config?.VERSION ?? '1.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
            interceptors: {
                request: config?.interceptors?.request ?? new Interceptors(),
                response: config?.interceptors?.response ?? new Interceptors(),
            },
        });
        this.aksjonspunkt = new AksjonspunktService(this.request);
        this.aktoer = new AktoerService(this.request);
        this.arbeidsgiver = new ArbeidsgiverService(this.request);
        this.behandlingÅrskvantumUttak = new BehandlingÅrskvantumUttakService(this.request);
        this.behandlingÅrskvantumUttrekk = new BehandlingÅrskvantumUttrekkService(this.request);
        this.behandlinger = new BehandlingerService(this.request);
        this.behandlingFosterbarn = new BehandlingFosterbarnService(this.request);
        this.behandlingPerson = new BehandlingPersonService(this.request);
        this.behandlingPleiepengerUttak = new BehandlingPleiepengerUttakService(this.request);
        this.behandlingUttak = new BehandlingUttakService(this.request);
        this.behandlingUtvidetRett = new BehandlingUtvidetRettService(this.request);
        this.beregning = new BeregningService(this.request);
        this.beregningsgrunnlag = new BeregningsgrunnlagService(this.request);
        this.beregningsresultat = new BeregningsresultatService(this.request);
        this.brev = new BrevService(this.request);
        this.brukerdialog = new BrukerdialogService(this.request);
        this.default = new DefaultService(this.request);
        this.død = new DødService(this.request);
        this.dokument = new DokumentService(this.request);
        this.fagsak = new FagsakService(this.request);
        this.feriepenger = new FeriepengerService(this.request);
        this.fordel = new FordelService(this.request);
        this.forvaltning = new ForvaltningService(this.request);
        this.forvaltningPerson = new ForvaltningPersonService(this.request);
        this.historikk = new HistorikkService(this.request);
        this.infotrygdmigrering = new InfotrygdmigreringService(this.request);
        this.initFetch = new InitFetchService(this.request);
        this.inntektArbeidYtelse = new InntektArbeidYtelseService(this.request);
        this.integrasjon = new IntegrasjonService(this.request);
        this.journalposter = new JournalposterService(this.request);
        this.kodeverk = new KodeverkService(this.request);
        this.kompletthet = new KompletthetService(this.request);
        this.kontroll = new KontrollService(this.request);
        this.los = new LosService(this.request);
        this.navAnsatt = new NavAnsattService(this.request);
        this.notat = new NotatService(this.request);
        this.omsorgenFor = new OmsorgenForService(this.request);
        this.oppdrag = new OppdragService(this.request);
        this.oppgittOpptjening = new OppgittOpptjeningService(this.request);
        this.opplæringsinstitusjon = new OpplæringsinstitusjonService(this.request);
        this.opplæringspenger = new OpplæringspengerService(this.request);
        this.opptjening = new OpptjeningService(this.request);
        this.perioder = new PerioderService(this.request);
        this.pip = new PipService(this.request);
        this.prosesstask = new ProsesstaskService(this.request);
        this.rapportering = new RapporteringService(this.request);
        this.redirect = new RedirectService(this.request);
        this.registerdata = new RegisterdataService(this.request);
        this.saksnummer = new SaksnummerService(this.request);
        this.søknad = new SøknadService(this.request);
        this.søknadsfrist = new SøknadsfristService(this.request);
        this.sykdom = new SykdomService(this.request);
        this.tilbakekrevingsvalg = new TilbakekrevingsvalgService(this.request);
        this.tilsyn = new TilsynService(this.request);
        this.totrinnskontroll = new TotrinnskontrollService(this.request);
        this.uttak = new UttakService(this.request);
        this.vedtak = new VedtakService(this.request);
        this.vilkår = new VilkårService(this.request);
        this.ytelser = new YtelserService(this.request);
    }
}
//# sourceMappingURL=Client.js.map