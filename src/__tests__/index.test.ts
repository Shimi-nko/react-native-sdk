import { NativeModules } from 'react-native'
import {
  BannerSettings,
  NetworkMode,
  TCFData,
  TCFDecisionUILayer,
  UsercentricsConsentType,
  UsercentricsConsentUserResponse,
  UsercentricsLayout,
  UsercentricsLoggerLevel,
  UsercentricsOptions,
  UsercentricsReadyStatus,
  UsercentricsUserInteraction,
} from '../models'
import { NativeUsercentrics } from '../NativeUsercentrics'
import {
  adTechProviderDecisionExample,
  ccpaDataExample,
  cmpDataExample,
  featuresExample,
  purposesExample,
  tcfUserDecisionOnPurposeExample,
  tcfUserDecisionOnSpecialFeatureExample,
  tcfUserDecisionOnVendorExample,
  usercentricsServiceConsent,
  userDecision,
} from './mocks'
import { UsercentricsAnalyticsEventType } from '../models/UsercentricsAnalyticsEventType'
import { AdditionalConsentModeData } from '../models/AdditionalConsentModeData'

const { RNUsercentricsModule } = NativeModules

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native')

  RN.NativeModules.RNUsercentricsModule = {
    configure: jest.fn(),
    isReady: jest.fn(),
    showCMP: jest.fn(),
    showFirstLayer: jest.fn(),
    restoreUserSession: jest.fn(),
    getControllerId: jest.fn(),
    getABTestingVariant: jest.fn(),
    getConsents: jest.fn(),
    getCMPData: jest.fn(),
    getUserSessionData: jest.fn(),
    getUSPData: jest.fn(),
    getTCFData: jest.fn(),
    getAdditionalConsentModeData: jest.fn(),
    changeLanguage: jest.fn(),
    acceptAll: jest.fn(),
    acceptAllForTCF: jest.fn(),
    denyAll: jest.fn(),
    denyAllForTCF: jest.fn(),
    saveOptOutForCCPA: jest.fn(),
    saveDecisionsForTCF: jest.fn(),
    saveDecisions: jest.fn(),
    track: jest.fn(),
    reset: jest.fn(),
    clearUserSession: jest.fn(),
  }

  return RN
})

describe('Test Usercentrics Module', () => {
  test('testConfigureBridge', () => {
    const options = new UsercentricsOptions({
      settingsId: 'abc',
      ruleSetId: 'qwer',
      defaultLanguage: 'en',
      loggerLevel: UsercentricsLoggerLevel.debug,
      timeoutMillis: 123,
      version: '1.2.3',
      networkMode: NetworkMode.eu,
      initTimeoutMillis: 1000,
    })
    NativeUsercentrics.configure(options)
    const call = RNUsercentricsModule.configure.mock.calls[0][0]
    expect(call).toBe(options)
  })

  test('testStatus', async () => {
    const readyStatus = new UsercentricsReadyStatus(
      true,
      [
        {
          templateId: '123',
          status: false,
          dataProcessor: 'facebook',
          version: '123',
          type: 0,
          isEssential: false,
          history: [
            {
              status: false,
              timestampInMillis: 123.0,
              type: 0,
            },
          ],
        },
      ],
      {
        countryCode: 'PT',
        regionCode: 'PT11',
        isInEU: true,
        isInUS: false,
        isInCalifornia: false,
      },
      {
        activeSettingsId: '',
        bannerRequiredAtLocation: false,
      },
    )

    RNUsercentricsModule.isReady.mockImplementationOnce(
      (): Promise<any> => Promise.resolve(readyStatus),
    )

    const data = await NativeUsercentrics.status()
    expect(data).toBe(readyStatus)
  })

  test('testStatusWithError', async () => {
    RNUsercentricsModule.isReady.mockImplementationOnce(
      (): Promise<any> => Promise.reject('Failed'),
    )

    try {
      await NativeUsercentrics.status()
    } catch (e) {
      expect(e).toBe('Failed')
    }
  })

  test('testShowFirstLayer', async () => {
    const response = new UsercentricsConsentUserResponse(
      'abc',
      UsercentricsUserInteraction.acceptAll,
      [
        {
          templateId: '123',
          status: false,
          dataProcessor: 'facebook',
          version: '123',
          type: 0,
          isEssential: false,
          history: [
            {
              status: false,
              timestampInMillis: 123.0,
              type: 0,
            },
          ],
        },
      ],
    )

    RNUsercentricsModule.showFirstLayer.mockImplementationOnce(
      (): Promise<any> => Promise.resolve(response),
    )

    const bannerSettings: BannerSettings = {
      firstLayerStyleSettings: {
        layout: UsercentricsLayout.popupBottom,
      },
    }

    const data = await NativeUsercentrics.showFirstLayer(bannerSettings)
    expect(data).toBe(response)

    const call = RNUsercentricsModule.showFirstLayer.mock.calls[0][0]
    expect(call).toBe(bannerSettings)
  })

  test('testRestoreUserSession', async () => {
    const readyStatus = new UsercentricsReadyStatus(
      true,
      [
        {
          templateId: '123',
          status: false,
          dataProcessor: 'facebook',
          version: '123',
          type: 0,
          isEssential: false,
          history: [
            {
              status: false,
              timestampInMillis: 123.0,
              type: 0,
            },
          ],
        },
      ],
      {
        countryCode: 'PT',
        regionCode: 'PT11',
        isInEU: true,
        isInUS: false,
        isInCalifornia: false,
      },
      {
        activeSettingsId: '',
        bannerRequiredAtLocation: false,
      },
    )

    RNUsercentricsModule.restoreUserSession.mockImplementationOnce(
      (): Promise<any> => Promise.resolve(readyStatus),
    )

    const data = await NativeUsercentrics.restoreUserSession('abc')
    expect(data).toBe(readyStatus)

    const call = RNUsercentricsModule.restoreUserSession.mock.calls[0][0]
    expect(call).toBe('abc')
  })

  test('testRestoreUserSessionWithError', async () => {
    RNUsercentricsModule.restoreUserSession.mockImplementationOnce(
      (): Promise<any> => Promise.reject('Failed'),
    )

    try {
      await NativeUsercentrics.restoreUserSession('abc')
    } catch (e) {
      expect(e).toBe('Failed')
    }

    const call = RNUsercentricsModule.restoreUserSession.mock.calls[0][0]
    expect(call).toBe('abc')
  })

  test('testGetControllerId', async () => {
    RNUsercentricsModule.getControllerId.mockImplementationOnce(
      (): Promise<string> => Promise.resolve('abc'),
    )

    const data = await NativeUsercentrics.getControllerId()
    expect(data).toBe('abc')
  })

  test('testGetABTestingVariant', async () => {
    RNUsercentricsModule.getABTestingVariant.mockImplementationOnce(
      (): Promise<string> => Promise.resolve('variantA'),
    )

    const data = await NativeUsercentrics.getABTestingVariant()
    expect(data).toBe('variantA')
  })

  test('testGetABTestingVariant_WhenNull', async () => {
    RNUsercentricsModule.getABTestingVariant.mockImplementationOnce(
      (): Promise<string | null> => Promise.resolve(null),
    )

    const data = await NativeUsercentrics.getABTestingVariant()
    expect(data).toBe(null)
  })

  test('testChangeLanguage', async () => {
    RNUsercentricsModule.changeLanguage.mockImplementationOnce(
      (): Promise<any> => Promise.resolve(),
    )

    const data = await NativeUsercentrics.changeLanguage('pt')
    expect(data).toBe(undefined)
  })

  test('testGetConsents', async () => {
    RNUsercentricsModule.getConsents.mockImplementationOnce(
      (): Promise<any> => Promise.resolve([usercentricsServiceConsent]),
    )

    const data = await NativeUsercentrics.getConsents()
    expect(data).toStrictEqual([usercentricsServiceConsent])
  })

  test('testGetCMPData', async () => {
    RNUsercentricsModule.getCMPData.mockImplementationOnce(
      (): Promise<any> => Promise.resolve(cmpDataExample),
    )

    const data = await NativeUsercentrics.getCMPData()
    expect(data).toBe(cmpDataExample)
  })

  test('testGetUserSessionData', async () => {
    RNUsercentricsModule.getUserSessionData.mockImplementationOnce(
      (): Promise<any> => Promise.resolve('abc'),
    )

    const data = await NativeUsercentrics.getUserSessionData()
    expect(data).toBe('abc')
  })

  test('testGetCCPAData', async () => {
    RNUsercentricsModule.getUSPData.mockImplementationOnce(
      (): Promise<any> => Promise.resolve(ccpaDataExample),
    )

    const data = await NativeUsercentrics.getCCPAData()
    expect(data).toBe(ccpaDataExample)
  })

  test('testGetTCFData', async () => {
    const response: TCFData = {
      features: featuresExample,
      purposes: purposesExample,
      specialFeatures: [],
      specialPurposes: [],
      stacks: [],
      vendors: [],
      tcString: 'ABCD1234',
      thirdPartyCount: 13,
    }

    RNUsercentricsModule.getTCFData.mockImplementationOnce(
      (): Promise<any> => Promise.resolve(response),
    )

    const data = await NativeUsercentrics.getTCFData()
    expect(data).toStrictEqual(response)
  })

  test('testAcceptAllForTCF', async () => {
    RNUsercentricsModule.acceptAllForTCF.mockImplementationOnce(
      (): Promise<any> => Promise.resolve([usercentricsServiceConsent]),
    )

    const data = await NativeUsercentrics.acceptAllForTCF(
      TCFDecisionUILayer.firstLayer,
      UsercentricsConsentType.explicit,
    )
    expect(data).toStrictEqual([usercentricsServiceConsent])
  })

  test('testDenyAllForTCF', async () => {
    RNUsercentricsModule.denyAllForTCF.mockImplementationOnce(
      (): Promise<any> => Promise.resolve([usercentricsServiceConsent]),
    )

    const data = await NativeUsercentrics.denyAllForTCF(
      TCFDecisionUILayer.firstLayer,
      UsercentricsConsentType.explicit,
    )
    expect(data).toStrictEqual([usercentricsServiceConsent])
  })

  test('testAcceptAll', async () => {
    RNUsercentricsModule.acceptAll.mockImplementationOnce(
      (): Promise<any> => Promise.resolve([usercentricsServiceConsent]),
    )

    const data = await NativeUsercentrics.acceptAll(
      UsercentricsConsentType.explicit,
    )
    expect(data).toStrictEqual([usercentricsServiceConsent])
  })

  test('testDenyAll', async () => {
    RNUsercentricsModule.denyAll.mockImplementationOnce(
      (): Promise<any> => Promise.resolve([usercentricsServiceConsent]),
    )

    const data = await NativeUsercentrics.denyAll(
      UsercentricsConsentType.explicit,
    )
    expect(data).toStrictEqual([usercentricsServiceConsent])
  })

  test('testSaveOptOutForCCPA', async () => {
    RNUsercentricsModule.saveOptOutForCCPA.mockImplementationOnce(
      (): Promise<any> => Promise.resolve([usercentricsServiceConsent]),
    )

    const data = await NativeUsercentrics.saveOptOutForCCPA(
      false,
      UsercentricsConsentType.explicit,
    )
    expect(data).toStrictEqual([usercentricsServiceConsent])
  })

  test('testSaveDecisions', async () => {
    RNUsercentricsModule.saveDecisions.mockImplementationOnce(
      (): Promise<any> => Promise.resolve([usercentricsServiceConsent]),
    )

    const data = await NativeUsercentrics.saveDecisions(
      [userDecision],
      UsercentricsConsentType.explicit,
    )
    expect(data).toStrictEqual([usercentricsServiceConsent])
  })

  test('testSaveDecisionsForTCF', async () => {
    RNUsercentricsModule.saveDecisionsForTCF.mockImplementationOnce(
      (): Promise<any> => Promise.resolve([usercentricsServiceConsent]),
    )

    const data = await NativeUsercentrics.saveDecisionsForTCF(
      {
        purposes: tcfUserDecisionOnPurposeExample,
        specialFeatures: tcfUserDecisionOnSpecialFeatureExample,
        vendors: tcfUserDecisionOnVendorExample,
        adTechProviders: adTechProviderDecisionExample,
      },
      TCFDecisionUILayer.firstLayer,
      [userDecision],
      UsercentricsConsentType.explicit,
    )

    expect(data).toStrictEqual([usercentricsServiceConsent])
  })

  test('testTrack', async () => {
    await NativeUsercentrics.track(
      UsercentricsAnalyticsEventType.acceptAllFirstLayer,
    )
    let spy = jest.spyOn(RNUsercentricsModule, 'track')
    expect(spy).toHaveBeenCalledTimes(1)
  })

  test('testGetAdditionalConsentModeData', async () => {
    const response: AdditionalConsentModeData = {
      acString: '2~43.46.55~dv.',
      adTechProviders: [
        {
          id: 1,
          name: 'provider',
          consent: false,
          privacyPolicyUrl: 'https://',
        },
      ],
    }

    RNUsercentricsModule.getAdditionalConsentModeData.mockImplementationOnce(
      (): Promise<any> => Promise.resolve(response),
    )

    const data = await NativeUsercentrics.getAdditionalConsentModeData()
    expect(data).toStrictEqual(response)
  })

  test('testClearUserSession', async () => {
    const readyStatus = new UsercentricsReadyStatus(
      true,
      [
        {
          templateId: '123',
          status: false,
          dataProcessor: 'facebook',
          version: '123',
          type: 0,
          isEssential: false,
          history: [
            {
              status: false,
              timestampInMillis: 123.0,
              type: 0,
            },
          ],
        },
      ],
      {
        countryCode: 'PT',
        regionCode: 'PT11',
        isInEU: true,
        isInUS: false,
        isInCalifornia: false,
      },
      {
        activeSettingsId: '',
        bannerRequiredAtLocation: false,
      },
    )

    RNUsercentricsModule.clearUserSession.mockImplementationOnce(
      (): Promise<any> => Promise.resolve(readyStatus),
    )

    const data = await NativeUsercentrics.clearUserSession()
    expect(data).toBe(readyStatus)
  })

  test('testClearUserSessionWithError', async () => {
    RNUsercentricsModule.restoreUserSession.mockImplementationOnce(
      (): Promise<any> => Promise.reject('Failed'),
    )

    try {
      await NativeUsercentrics.clearUserSession()
    } catch (e) {
      expect(e).toBe('Failed')
    }
  })
})
