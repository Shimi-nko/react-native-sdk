#import "UsercentricsModule.h"

#if __has_include("react_native_usercentrics-Swift.h")
#import "react_native_usercentrics-Swift.h"
#else
#import "react_native_usercentrics/react_native_usercentrics-Swift.h"
#endif

@implementation Usercentrics {
    UsercentricsImpl *usercentricsImpl;
}

- (instancetype)init {
    self = [super init];
    if (self) {
        usercentricsImpl = [UsercentricsImpl new];
    }
    return self;
}

RCT_EXPORT_MODULE()

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

RCT_EXPORT_METHOD(configure:(NSDictionary *)options
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
    [usercentricsImpl configureWithOptions:options];
}

RCT_EXPORT_METHOD(showFirstLayer:(NSDictionary *)options
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
    [usercentricsImpl showFirstLayerWithDict:options resolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(showSecondLayer:(NSDictionary *)options
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
    [usercentricsImpl showSecondLayerWithDict:options resolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(restoreUserSession:(NSString *)controllerId
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
    [usercentricsImpl restoreUserSessionWithControllerId:controllerId resolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(isReady:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
    [usercentricsImpl isReadyWithResolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(getControllerId:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
    [usercentricsImpl getControllerIdWithResolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(getABTestingVariant:(RCTPromiseResolveBlock)resolve
                reject:(RCTPromiseRejectBlock)reject) {
    [usercentricsImpl getABTestingVariantWithResolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(getConsents:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
    [usercentricsImpl getConsentsWithResolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(getCMPData:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
    [usercentricsImpl getCMPDataWithResolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(getUserSessionData:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
    [usercentricsImpl getUserSessionDataWithResolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(getUSPData:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
    [usercentricsImpl getUSPDataWithResolve:resolve reject:reject];
}
RCT_EXPORT_METHOD(getTCFData:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
    [usercentricsImpl getTCFDataWithResolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(getAdditionalConsentModeData:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
    [usercentricsImpl getAdditionalConsentModeDataWithResolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(changeLanguage:(NSString *)language
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
    [usercentricsImpl changeLanguageWithLanguage:language resolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(acceptAllForTCF:(NSInteger)fromLayer
                  consentType:(NSInteger)consentType
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
    [usercentricsImpl acceptAllForTCFFromLayer:fromLayer consentType:consentType resolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(acceptAll:(NSInteger)consentType
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
    [usercentricsImpl acceptAllWithConsentType:consentType resolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(denyAllForTCF:(NSInteger)fromLayer
                  consentType:(NSInteger)consentType
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
    [usercentricsImpl denyAllForTCFFromLayer:fromLayer consentType:consentType resolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(denyAll:(NSInteger)consentType
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
    [usercentricsImpl denyAllWithConsentType:consentType resolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(saveDecisionsForTCF:(NSDictionary *)tcfDecisions
                  fromLayer:(NSInteger)fromLayer
                  serviceDecisions:(NSArray *)serviceDecisions
                  consentType:(NSInteger)consentType
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
    [usercentricsImpl saveDecisionsForTCFWithTcfDecisions:tcfDecisions fromLayer:fromLayer serviceDecisions: serviceDecisions consentType:consentType resolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(saveDecisions:(NSArray *)serviceDecisions
                  consentType:(NSInteger)consentType
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
    [usercentricsImpl saveDecisionsWithDecisions:serviceDecisions consentType:consentType resolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(saveOptOutForCCPA:(BOOL *)isOptedOut
                  consentType:(NSInteger)consentType
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
    [usercentricsImpl saveOptOutForCCPAWithIsOptedOut:isOptedOut consentType:consentType resolve:resolve reject:reject];
}

RCT_EXPORT_METHOD(setCMPId:(NSInteger)id) {
    [usercentricsImpl setCMPIdWithId:id];
}

RCT_EXPORT_METHOD(setABTestingVariant:(NSString *)variant) {
    [usercentricsImpl setABTestingVariantWithVariant:variant];
}

RCT_EXPORT_METHOD(track:(NSInteger)event) {
    [usercentricsImpl trackWithEvent:event];
}

RCT_EXPORT_METHOD(clearUserSession:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject) {
    [usercentricsImpl clearUserSessionWithResolve:resolve reject:reject];
}

#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeUsercentricsSpecJSI>(params);x
}
#endif

@end
