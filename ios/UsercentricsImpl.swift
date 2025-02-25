import Foundation
import Usercentrics
import UsercentricsUI
import UIKit

@objc public class UsercentricsImpl: NSObject {

    var usercentricsManager: UsercentricsManager = UsercentricsManagerImplementation()
    var queue: DispatchQueueManager = DispatchQueue.main

    @objc public func configure(options: NSDictionary) -> Void {
        queue.async { [weak self] in
            guard
                let self = self,
                let userOptions = UsercentricsOptions.initialize(from: options)
            else { return }

            self.usercentricsManager.configure(options: userOptions)
        }
    }

    @objc public func isReady(resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        queue.async { [weak self] in
            guard let self = self else { return }

            self.usercentricsManager.isReady { status in
                resolve(status.toDictionary())
            } onFailure: { error in
                reject("usercentrics_reactNative_isReady_error", error.localizedDescription, error)
            }
        }
    }

    @objc public func showFirstLayer(dict: NSDictionary, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        queue.async { [weak self] in
            guard
                let self = self
            else {
                reject("usercentrics_reactNative_showFirstLayer_error", RNUsercentricsModuleError.invalidData.localizedDescription, RNUsercentricsModuleError.invalidData)
                return
            }

            self.usercentricsManager.showFirstLayer(bannerSettings: BannerSettings(from: dict)) { response in
                resolve(response.toDictionary())
            }
        }
    }

    @objc public func showSecondLayer(dict: NSDictionary, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        queue.async { [weak self] in
            guard
                let self = self
            else {
                reject("usercentrics_reactNative_showFirstLayer_error", RNUsercentricsModuleError.invalidData.localizedDescription, RNUsercentricsModuleError.invalidData)
                return
            }

            self.usercentricsManager.showSecondLayer(bannerSettings: BannerSettings(from: dict)) { response in
                resolve(response.toDictionary())
            }
        }
    }

    @objc public func setCMPId(id: Int) -> Void {
        usercentricsManager.setCMPId(id: Int32(id))
    }

    @objc public func setABTestingVariant(variant: String) -> Void {
        usercentricsManager.setABTestingVariant(variant: variant)
    }

    @objc public func restoreUserSession(controllerId: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        usercentricsManager.restoreUserSession(controllerId: controllerId) { status in
            resolve(status.toDictionary())
        } onFailure: { error in
            reject("usercentrics_reactNative_restoreUserSession_error", error.localizedDescription, error)
        }
    }

    @objc public func getControllerId(resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        resolve(usercentricsManager.getControllerId())
    }

    @objc public func getConsents(resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        resolve(usercentricsManager.getConsents().toListOfDictionary())
    }

    @objc public func getCMPData(resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        resolve(usercentricsManager.getCMPData().toDictionary())
    }

    @objc public func getTCFData(resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        usercentricsManager.getTCFData { tcfData in
            resolve(tcfData.toDictionary())
        }
    }

    @objc public func getUserSessionData(resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        resolve(usercentricsManager.getUserSessionData())
    }

    @objc public func getUSPData(resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        resolve(usercentricsManager.getUSPData().toDictionary())
    }

    @objc public func getABTestingVariant(resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        resolve(usercentricsManager.getABTestingVariant())
    }

    @objc public func getAdditionalConsentModeData(resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        resolve(usercentricsManager.getAdditionalConsentModeData().toDictionary())
    }

    @objc public func changeLanguage(language: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        usercentricsManager.changeLanguage(language: language) {
            resolve(Void.self)
        } onFailure: { error in
            reject("usercentrics_reactNative_changeLanguage_error", error.localizedDescription, error)
        }
    }

    @objc public func acceptAllForTCF(fromLayer: Int,
                               consentType: Int,
                               resolve: @escaping RCTPromiseResolveBlock,
                               reject: @escaping RCTPromiseRejectBlock) -> Void {
        let services = usercentricsManager.acceptAllForTCF(fromLayer: TCFDecisionUILayer.initialize(from: fromLayer),
                                                           consentType: UsercentricsConsentType.initialize(from: consentType))
        resolve(services.toListOfDictionary())
    }

    @objc public func acceptAll(consentType: Int,
                         resolve: @escaping RCTPromiseResolveBlock,
                         reject: @escaping RCTPromiseRejectBlock) -> Void {
        let services = usercentricsManager.acceptAll(consentType: UsercentricsConsentType.initialize(from: consentType))
        resolve(services.toListOfDictionary())
    }

    @objc public func denyAllForTCF(fromLayer: Int,
                             consentType: Int,
                             resolve: @escaping RCTPromiseResolveBlock,
                             reject: @escaping RCTPromiseRejectBlock) -> Void {
        let services = usercentricsManager.denyAllForTCF(fromLayer: .initialize(from: fromLayer), consentType: .initialize(from: consentType))
        resolve(services.toListOfDictionary())
    }

    @objc public func denyAll(consentType: Int,
                       resolve: @escaping RCTPromiseResolveBlock,
                       reject: @escaping RCTPromiseRejectBlock) -> Void {
        let services = usercentricsManager.denyAll(consentType: .initialize(from: consentType))
        resolve(services.toListOfDictionary())
    }

    @objc public func saveDecisionsForTCF(tcfDecisions: NSDictionary,
                                   fromLayer: Int,
                                   serviceDecisions: [NSDictionary],
                                   consentType: Int,
                                   resolve: @escaping RCTPromiseResolveBlock,
                                   reject: @escaping RCTPromiseRejectBlock) -> Void {

        let services = usercentricsManager.saveDecisionsForTCF(
            tcfDecisions: TCFUserDecisions(from: tcfDecisions),
            fromLayer: .initialize(from: fromLayer),
            serviceDecisions: serviceDecisions.compactMap { UserDecision(from: $0) },
            consentType: .initialize(from: consentType))
        resolve(services.toListOfDictionary())

    }

    @objc public func saveDecisions(decisions: [NSDictionary],
                             consentType: Int,
                             resolve: @escaping RCTPromiseResolveBlock,
                             reject: @escaping RCTPromiseRejectBlock) -> Void {
        let services = usercentricsManager.saveDecisions(decisions: decisions.compactMap { UserDecision.init(from: $0) }, consentType: .initialize(from: consentType))
        resolve(services.toListOfDictionary())
    }

    @objc public func saveOptOutForCCPA(isOptedOut: Bool,
                                 consentType: Int,
                                 resolve: @escaping RCTPromiseResolveBlock,
                                 reject: @escaping RCTPromiseRejectBlock) -> Void {
        let services = usercentricsManager.saveOptOutForCCPA(isOptedOut: isOptedOut, consentType: .initialize(from: consentType))
        resolve(services.toListOfDictionary())
    }

    @objc public func track(event: Int) -> Void {
        guard let usercentricsAnalyticsEventType = UsercentricsAnalyticsEventType.initialize(from: event) else { return }
        usercentricsManager.track(event: usercentricsAnalyticsEventType)
    }

    @objc public func clearUserSession(resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        usercentricsManager.clearUserSession { status in
            resolve(status.toDictionary())
        } onError: { error in
            reject("usercentrics_reactNative_clearUserSession_error", error.localizedDescription, error)
        }
    }
}
