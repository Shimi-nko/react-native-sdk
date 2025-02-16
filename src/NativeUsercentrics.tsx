import {
    AdditionalConsentModeData,
    BannerSettings,
    CCPAData,
    TCFData,
    TCFDecisionUILayer,
    TCFUserDecisions,
    UsercentricsAnalyticsEventType,
    UsercentricsCMPData,
    UsercentricsConsentType,
    UsercentricsConsentUserResponse,
    UsercentricsOptions,
    UsercentricsReadyStatus,
    UsercentricsServiceConsent,
    UserDecision,
} from './models';
import {TurboModule, TurboModuleRegistry} from "react-native";


export interface NativeUsercentricsSpec extends TurboModule{

    configure(options: UsercentricsOptions):Promise<void>

    status(): Promise<UsercentricsReadyStatus>

    showFirstLayer(options?: BannerSettings): Promise<UsercentricsConsentUserResponse>

    showSecondLayer(options?: BannerSettings): Promise<UsercentricsConsentUserResponse>

    restoreUserSession(controllerId: string): Promise<UsercentricsReadyStatus>

    getControllerId(): Promise<string>

    getABTestingVariant(): Promise<string | null>

    getConsents(): Promise<[UsercentricsServiceConsent]>

    getCMPData(): Promise<UsercentricsCMPData>

    getUserSessionData(): Promise<string>

    getCCPAData(): Promise<CCPAData>

    getTCFData(): Promise<TCFData>

    getAdditionalConsentModeData(): Promise<AdditionalConsentModeData>

    changeLanguage(language: string): Promise<void>

    acceptAll(consentType: UsercentricsConsentType): Promise<[UsercentricsServiceConsent]>

    acceptAllForTCF(fromLayer: TCFDecisionUILayer, consentType: UsercentricsConsentType): Promise<[UsercentricsServiceConsent]>

    denyAll(consentType: UsercentricsConsentType): Promise<[UsercentricsServiceConsent]>

    denyAllForTCF(fromLayer: TCFDecisionUILayer, consentType: UsercentricsConsentType): Promise<[UsercentricsServiceConsent]>

    saveDecisions(decisions: UserDecision[], consentType: UsercentricsConsentType): Promise<[UsercentricsServiceConsent]>

    saveDecisionsForTCF(tcfDecisions: TCFUserDecisions, fromLayer: TCFDecisionUILayer, decisions: UserDecision[], consentType: UsercentricsConsentType): Promise<[UsercentricsServiceConsent]>

    saveOptOutForCCPA(isOptedOut: boolean, consentType: UsercentricsConsentType): Promise<[UsercentricsServiceConsent]>

    setCMPId(id: number):Promise<void>

    setABTestingVariant(variant: string):Promise<void>

    track(event: UsercentricsAnalyticsEventType):Promise<void>

    clearUserSession(): Promise<UsercentricsReadyStatus>
}

export default TurboModuleRegistry.get<NativeUsercentricsSpec>("Usercentrics") as NativeUsercentricsSpec | null;
