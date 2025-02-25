import {TurboModule, TurboModuleRegistry} from "react-native";

enum ConsentDisclosureType {
    cookie = 0,
    web = 1,
    app = 2
}

enum FirstLayerMobileVariant {
    sheet = 0,
    full = 1,
    popupBottom = 2,
    popupCenter = 3
}

enum TCF2Scope {
    global = 0,
    service = 1
}

enum PublishedAppPlatform {
    android = 0,
    ios = 1
}

enum DpsDisplayFormat {
    all = 0,
    short = 1
}

enum USAFrameworks {
    cpra = 0,
    vcdpa = 1,
    cpa = 2,
    ctdpa = 3,
    ucpa = 4,
}

enum UsercentricsVariant {
    default = 0,
    ccpa = 1,
    tcf = 2
}

enum UsercentricsUserInteraction {
    acceptAll = 0,
    denyAll = 1,
    granular = 2,
    noInteraction = 3
}

enum UsercentricsConsentType {
    explicit = 0,
    implicit = 1
}

enum UsercentricsAnalyticsEventType {
    cmpShown = 0,
    acceptAllFirstLayer = 1,
    denyAllFirstLayer = 2,
    saveFirstLayer = 3,
    acceptAllSecondLayer = 4,
    denyAllSecondLayer = 5,
    saveSecondLayer = 6,
    imprintLink = 7,
    moreInformationLink = 8,
    privacyPolicyLink = 9,
    ccpaTogglesOn = 10,
    ccpaTogglesOff = 11,
}

enum TCFDecisionUILayer {
    firstLayer = 0,
    secondLayer = 1
}

enum RestrictionType {
    notAllowed = 0,
    requireConsent = 1,
    requireLi = 2,
}

enum NetworkMode {
    world = 0,
    eu = 1
}

enum ButtonType {
    acceptAll = "ACCEPT_ALL",
    denyAll = "DENY_ALL",
    more = "MORE",
    save = "SAVE"
}

enum SectionAlignment {
    left = "START",
    right = "END",
    center = "CENTER"
}

enum UsercentricsLayout {
    full = "FULL",
    sheet = "SHEET",
    popupCenter = "POPUP_CENTER",
    popupBottom = "POPUP_BOTTOM"
}

enum InternalButtonLayout {
    row = "ROW",
    grid = "GRID",
    column = "COLUMN"
}

enum UsercentricsLoggerLevel {
    none = 0,
    error = 1,
    warning = 2,
    debug = 3
}

enum LegalLinksSettings {
    firstLayerOnly = "FIRST_LAYER_ONLY",
    secondLayerOnly = "SECOND_LAYER_ONLY",
    both = "BOTH",
    hidden = "HIDDEN"
}

type BannerLogo = {

    logoName: string;
    logoPath: string;
    logoUrl?: string;
}

type BannerFont = {
    regularFont: string;
    boldFont: string;
    fontSize: number;
}

type ToggleStyleSettings = {
    activeBackgroundColorHex?: string;
    inactiveBackgroundColorHex?: string;
    disabledBackgroundColorHex?: string;
    activeThumbColorHex?: string;
    inactiveThumbColorHex?: string;
    disabledThumbColorHex?: string;
}

type GeneralStyleSettings = {
    font?: BannerFont;
    logo?: BannerLogo;
    links?: LegalLinksSettings;
    textColorHex?: string;
    layerBackgroundColorHex?: string;
    layerBackgroundSecondaryColorHex?: string;
    linkColorHex?: string;
    tabColorHex?: string;
    bordersColorHex?: string;
    toggleStyleSettings?: ToggleStyleSettings;
    disableSystemBackButton?: boolean;
}

type BannerSettings = {
    firstLayerStyleSettings?: FirstLayerStyleSettings;
    secondLayerStyleSettings?: SecondLayerStyleSettings;
    generalStyleSettings?: GeneralStyleSettings;
    variantName?: string
}

type AdTechProvider = {
    id: number
    name: string
    privacyPolicyUrl: string
    consent: boolean
}

type AdditionalConsentModeData = {
    acString: string
    adTechProviders: AdTechProvider[]
}

type CCPAData = {
    version: number
    optedOut?: boolean
    lspact?: boolean
    noticeGiven?: boolean
    uspString: string
}

type UsercentricsOptions = {
    settingsId?: string;
    ruleSetId?: string;
    defaultLanguage?: string;
    loggerLevel?: UsercentricsLoggerLevel;
    timeoutMillis?: number;
    version?: string;
    networkMode?: NetworkMode;
    consentMediation?: boolean;
    initTimeoutMillis?: number;
}

type HeaderImageSettings = {
    isExtended: boolean;
    isHidden: boolean;
    image?: BannerLogo;
    height?: number;
    alignment?: SectionAlignment}

type FirstLayerStyleSettings = {
    layout?: UsercentricsLayout;
    headerImage?: HeaderImageSettings;
    title?: TitleSettings;
    message?: MessageSettings;
    buttonLayout?: ButtonLayout;
    backgroundColorHex?: string;
    cornerRadius?: number;
    overlayColorHex?: string;
}

type TitleSettings = {
    fontName?: string;
    textSize?: number;
    textColorHex?: string;
    textAlignment?: SectionAlignment;
}

type MessageSettings = {
    fontName?: string;
    textSize?: number;
    textColorHex?: string;
    textAlignment?: SectionAlignment;
    linkTextColorHex?: string;
    linkTextUnderline?: boolean;
}

type ButtonLayout = {
    buttons: ButtonSettings[][]
    layout: InternalButtonLayout
}

type ButtonSettings = {
    buttonType: ButtonType;
    fontName?: string;
    textSize?: number;
    textColorHex?: string;
    backgroundColorHex?: string;
    cornerRadius?: number;
    isAllCaps?: boolean
}

type SecondLayerStyleSettings = {
    buttonLayout?: ButtonLayout;
    showCloseButton?: boolean;
}

type TCFData = {
    features: TCFFeature[]
    purposes: TCFPurpose[]
    specialFeatures: TCFSpecialFeature[]
    specialPurposes: TCFSpecialPurpose[]
    stacks: TCFStack[]
    vendors: TCFVendor[]
    tcString: string
    thirdPartyCount: number
}

type TCFFeature = {
    purposeDescription: string
    illustrations: string[]
    id: number
    name: string
}

type TCFPurpose = {
    purposeDescription: string
    illustrations: string[]
    id: number
    name: string
    consent?: boolean
    isPartOfASelectedStack: boolean
    legitimateInterestConsent?: boolean
    showConsentToggle: boolean
    showLegitimateInterestToggle: boolean
    stackId?: number
    numberOfVendors?: number
}

type TCFSpecialFeature = {
    purposeDescription: string
    illustrations: string[]
    id: number
    name: string
    consent?: boolean
    isPartOfASelectedStack: boolean
    stackId?: number
    showConsentToggle: boolean
}

type TCFSpecialPurpose = {
    purposeDescription: string
    illustrations: string[]
    id: number
    name: string
}

type TCFStack = {
    description: string
    id: number
    name: string
    purposeIds: number[]
    specialFeatureIds: number[]
}

type TCFVendor = {
    consent?: boolean
    features: number[]
    flexiblePurposes: number[]
    id: number
    legitimateInterestConsent?: boolean
    legitimateInterestPurposes: number[]
    name: string
    policyUrl: string
    purposes: number[]
    specialFeatures: number[]
    specialPurposes: number[]
    showConsentToggle: boolean
    showLegitimateInterestToggle: boolean
    cookieMaxAgeSeconds: number
    usesNonCookieAccess: boolean
    deviceStorageDisclosureUrl?: string
    usesCookies: boolean
    cookieRefresh?: boolean
    dataSharedOutsideEU: boolean
    dataCategories: number[]
    vendorUrls: VendorUrl[]
    restrictions: TCFVendorRestriction[]
}

type VendorUrl = {
    langId?: string
    privacy?: string
    legIntClaim?: string
}

type TCFVendorRestriction = {
    purposeId: number
    restrictionType: RestrictionType
}

type TCFUserDecisions = {
    purposes: TCFUserDecisionOnPurpose[]
    specialFeatures: TCFUserDecisionOnSpecialFeature[]
    vendors: TCFUserDecisionOnVendor[]
    adTechProviders: AdTechProviderDecision[]}

type TCFUserDecisionOnPurpose = {
    id: number
    consent?: boolean
    legitimateInterestConsent?: boolean
}

type TCFUserDecisionOnSpecialFeature = {
    id: number
    consent?: boolean
}

type TCFUserDecisionOnVendor = {
    id: number
    consent?: boolean
    legitimateInterestConsent?: boolean
}

type AdTechProviderDecision = {
    id: number
    consent: boolean
}

type UsercentricsCMPData = {
    settings: UsercentricsSettings
    services: UsercentricsService[]
    categories: UsercentricsCategory[]
    activeVariant: UsercentricsVariant
    userLocation: UsercentricsLocation
    legalBasis: LegalBasisLocalization
}

type LegalBasisLocalization = {
    data: {key:string}[],
    labelsAria?: TranslationAriaLabels
}

type TranslationAriaLabels = {
    acceptAllButton?: string
    ccpaButton?: string
    ccpaMoreInformation?: string
    closeButton?: string
    collapse?: string
    cookiePolicyButton?: string
    copyControllerId?: string
    denyAllButton?: string
    expand?: string
    fullscreenButton?: string
    imprintButton?: string
    languageSelector?: string
    privacyButton?: string
    privacyPolicyButton?: string
    saveButton?: string
    serviceInCategoryDetails?: string
    servicesInCategory?: string
    tabButton?: string
    usercentricsCMPButtons?: string
    usercentricsCMPContent?: string
    usercentricsCMPHeader?: string
    usercentricsCMPUI?: string
    usercentricsCard?: string
    usercentricsList?: string
    vendorConsentToggle?: string
    vendorDetailedStorageInformation?: string
    vendorLegIntToggle?: string
}

type UsercentricsCategory = {
    categorySlug: string
    label: string
    description: string
    isEssential: boolean
}

type UsercentricsConsentUserResponse = {
    controllerId: string
    userInteraction: UsercentricsUserInteraction
    consents: UsercentricsServiceConsent[]
}

type UsercentricsLocation = {
    countryCode: string
    regionCode: string
    isInEU: boolean
    isInUS: boolean
    isInCalifornia: boolean
}

type UsercentricsReadyStatus = {
    shouldCollectConsent: boolean
    consents: UsercentricsServiceConsent[]
    geolocationRuleset?: GeolocationRuleset;
    location: UsercentricsLocation;
}

type GeolocationRuleset = {
    activeSettingsId: string;
    bannerRequiredAtLocation: boolean;
}

type UsercentricsServiceConsent = {
    templateId: string
    status: boolean
    dataProcessor: string
    version: string
    type: UsercentricsConsentType
    isEssential: boolean
    history: UsercentricsConsentHistoryEntry[]
}

type UsercentricsConsentHistoryEntry = {
    status: boolean
    type: UsercentricsConsentType
    timestampInMillis: number
}

type UserDecision = {
    serviceId: string
    consent: boolean
}

type  CCPASettings = {
    optOutNoticeLabel: string
    btnSave: string
    firstLayerTitle: string
    isActive: boolean
    showOnPageLoad: boolean
    reshowAfterDays: number
    iabAgreementExists: boolean
    appFirstLayerDescription: string
    firstLayerMobileDescriptionIsActive: boolean
    firstLayerMobileDescription: string
    secondLayerTitle: string
    secondLayerDescription: string
    secondLayerHideLanguageSwitch: boolean
    btnMoreInfo: string
}

type UsercentricsSettings = {
    labels: UsercentricsLabels
    version: string
    language: string
    imprintUrl: string
    privacyPolicyUrl: string
    cookiePolicyUrl: string
    firstLayerDescriptionHtml: string
    firstLayerMobileDescriptionHtml: string
    settingsId: string
    bannerMobileDescriptionIsActive: boolean
    enablePoweredBy: boolean
    displayOnlyForEU: boolean
    tcf2Enabled: boolean
    reshowBanner: number
    editableLanguages: string[]
    languagesAvailable: string[]
    showInitialViewForVersionChange: string[]
    ccpa?: CCPASettings
    tcf2?: TCF2Settings
    customization?: string
    firstLayer?: FirstLayer
    secondLayer?: SecondLayer
    variants?: VariantsSettings
    dpsDisplayFormat?: DpsDisplayFormat
    framework?: USAFrameworks
    publishedApps?: PublishedApp[]
    renewConsentsTimestamp?: number
}

type VariantsSettings = {
    enabled: boolean
    experimentsJson: string
    activateWith: string
}

type UsercentricsLabels = {
    btnAcceptAll: string
    btnDeny: string
    btnSave: string
    firstLayerTitle: string
    accepted: string
    denied: string
    date: string
    decision: string
    dataCollectedList: string
    dataCollectedInfo: string
    locationOfProcessing: string
    transferToThirdCountries: string
    transferToThirdCountriesInfo: string
    dataPurposes: string
    dataPurposesInfo: string
    dataRecipientsList: string
    descriptionOfService: string
    history: string
    historyDescription: string
    legalBasisList: string
    legalBasisInfo: string
    processingCompanyTitle: string
    retentionPeriod: string
    technologiesUsed: string
    technologiesUsedInfo: string
    cookiePolicyInfo: string
    optOut: string
    policyOf: string
    imprintLinkText: string
    privacyPolicyLinkText: string
    categories: string
    anyDomain: string
    day: string
    days: string
    domain: string
    duration: string
    informationLoadingNotPossible: string
    hour: string
    hours: string
    identifier: string
    maximumAgeCookieStorage: string
    minute: string
    minutes: string
    month: string
    months: string
    multipleDomains: string
    no: string
    nonCookieStorage: string
    seconds: string
    session: string
    loadingStorageInformation: string
    storageInformation: string
    detailedStorageInformation: string
    tryAgain: string
    type: string
    year: string
    years: string
    yes: string
    storageInformationDescription: string
    btnBannerReadMore: string
    readLess: string
    btnMore: string
    more: string
    linkToDpaInfo: string
    second: string
    consent: string
    headerModal: string
    secondLayerDescriptionHtml: string
    secondLayerTitle: string
    // Optional
    settings: string
    subConsents: string
    btnAccept: string
    poweredBy: string
    dataProtectionOfficer: string
    nameOfProcessingCompany: string
    btnBack: string
    copy: string
    copied: string
    basic: string
    advanced: string
    processingCompany: string
    name: string
    explicitLabel: string
    implicit: string
    btnMoreInfo: string
    furtherInformationOptOut: string
    cookiePolicyLinkText: string
    noImplicit: string
    yesImplicit: string
}

type  FirstLayer = {
    hideButtonDeny?: boolean
}

type PublishedApp = {
    bundleId: string
    platform: PublishedAppPlatform
}

type SecondLayer = {
    tabsCategoriesLabel: string
    tabsServicesLabel: string
    hideButtonDeny?: boolean
    hideLanguageSwitch?: boolean
    acceptButtonText?: string
    denyButtonText?: string
}

type TCF2Settings = {
    firstLayerTitle: string
    secondLayerTitle: string
    tabsPurposeLabel: string
    tabsVendorsLabel: string
    labelsFeatures: string
    labelsIabVendors: string
    labelsNonIabPurposes: string
    labelsNonIabVendors: string
    labelsPurposes: string
    vendorFeatures: string
    vendorLegitimateInterestPurposes: string
    vendorPurpose: string
    vendorSpecialFeatures: string
    vendorSpecialPurposes: string
    togglesConsentToggleLabel: string
    togglesLegIntToggleLabel: string
    buttonsAcceptAllLabel: string
    buttonsDenyAllLabel: string
    buttonsSaveLabel: string
    linksManageSettingsLabel: string
    linksVendorListLinkLabel: string
    cmpId: number
    cmpVersion: number
    firstLayerHideToggles: boolean
    secondLayerHideToggles: boolean
    hideLegitimateInterestToggles: boolean
    firstLayerHideButtonDeny?: boolean
    secondLayerHideButtonDeny: boolean
    publisherCountryCode: string
    purposeOneTreatment: boolean
    selectedVendorIds: number[]
    gdprApplies: boolean
    selectedStacks: number[]
    disabledSpecialFeatures: number[]
    firstLayerShowDescriptions: boolean
    hideNonIabOnFirstLayer: boolean
    resurfacePeriodEnded: boolean
    resurfacePurposeChanged: boolean
    resurfaceVendorAdded: boolean
    firstLayerDescription: string
    firstLayerAdditionalInfo: string
    secondLayerDescription: string
    togglesSpecialFeaturesToggleOn: string
    togglesSpecialFeaturesToggleOff: string
    appLayerNoteResurface: string
    firstLayerNoteResurface: string
    categoriesOfDataLabel: string
    dataRetentionPeriodLabel: string
    legitimateInterestLabel: string
    version: string
    examplesLabel: string
    firstLayerMobileVariant?: FirstLayerMobileVariant
    showDataSharedOutsideEUText: boolean
    dataSharedOutsideEUText?: string
    vendorIdsOutsideEUList: number[]
    scope: TCF2Scope
    changedPurposes: TCF2ChangedPurposes
    acmV2Enabled: boolean
    selectedATPIds: number[]
}

type TCF2ChangedPurposes = {
    purposes: number[]
    legIntPurposes: number[]
}

type UsercentricsService = {
    templateId: string
    version: string
    categorySlug: string
    isEssential: boolean
    type: string
    dataProcessor: string
    dataPurposes: string[]
    processingCompany: string
    nameOfProcessingCompany: string
    addressOfProcessingCompany: string
    descriptionOfService: string
    languagesAvailable: string[]
    dataCollectedList: string[]
    dataPurposesList: string[]
    dataRecipientsList: string[]
    legalBasisList: string[]
    retentionPeriodList: string[]
    subConsents: string[]
    language: string
    linkToDpa: string
    legalGround: string
    optOutUrl: string
    policyOfProcessorUrl: string
    retentionPeriodDescription: string
    dataProtectionOfficer: string
    privacyPolicyURL: string
    cookiePolicyURL: string
    locationOfProcessing: string
    dataCollectedDescription: string
    thirdCountryTransfer: string
    description: string
    cookieMaxAgeSeconds: number
    usesNonCookieAccess?: boolean
    deviceStorageDisclosureUrl: string
    technologyUsed: string[]
    isDeactivated?: boolean
    disableLegalBasis?: boolean
    deviceStorage?: ConsentDisclosureObject
    isHidden: boolean
}

type ConsentDisclosure = {
    identifier?: string
    type?: ConsentDisclosureType
    name?: string
    maxAgeSeconds?: number
    cookieRefresh: boolean
    purposes: number[]
    domain?: string
    description?: string
}

type ConsentDisclosureObject = {
    disclosures: ConsentDisclosure[]
}

export interface Spec extends TurboModule {

    configure: (options: UsercentricsOptions) => Promise<void>

    status: () => Promise<UsercentricsReadyStatus>

    showFirstLayer: (options?: BannerSettings) => Promise<UsercentricsConsentUserResponse>

    showSecondLayer: (options?: BannerSettings) => Promise<UsercentricsConsentUserResponse>

    restoreUserSession: (controllerId: string) => Promise<UsercentricsReadyStatus>

    getControllerId: () => Promise<string>

    getABTestingVariant: () => Promise<string | null>

    getConsents: () => Promise<UsercentricsServiceConsent[]>

    getCMPData: () => Promise<UsercentricsCMPData>

    getUserSessionData: () => Promise<string>

    getCCPAData: () => Promise<CCPAData>

    getTCFData: () => Promise<TCFData>

    getAdditionalConsentModeData: () => Promise<AdditionalConsentModeData>

    changeLanguage: (language: string) => Promise<void>

    acceptAll: (consentType: UsercentricsConsentType) => Promise<UsercentricsServiceConsent[]>

    acceptAllForTCF: (fromLayer: TCFDecisionUILayer, consentType: UsercentricsConsentType) => Promise<UsercentricsServiceConsent[]>

    denyAll: (consentType: UsercentricsConsentType) => Promise<UsercentricsServiceConsent[]>

    denyAllForTCF: (fromLayer: TCFDecisionUILayer, consentType: UsercentricsConsentType) => Promise<UsercentricsServiceConsent[]>

    saveDecisions: (decisions: UserDecision[], consentType: UsercentricsConsentType) => Promise<UsercentricsServiceConsent[]>

    saveDecisionsForTCF: (tcfDecisions: TCFUserDecisions, fromLayer: TCFDecisionUILayer, decisions: UserDecision[], consentType: UsercentricsConsentType) => Promise<UsercentricsServiceConsent[]>

    saveOptOutForCCPA: (isOptedOut: boolean, consentType: UsercentricsConsentType) => Promise<UsercentricsServiceConsent[]>

    setCMPId: (id: number) => Promise<void>

    setABTestingVariant: (variant: string) => Promise<void>

    track: (event: UsercentricsAnalyticsEventType) => Promise<void>

    clearUserSession: () =>Promise<UsercentricsReadyStatus>
}

export default TurboModuleRegistry.getEnforcing<Spec>("Usercentrics");
