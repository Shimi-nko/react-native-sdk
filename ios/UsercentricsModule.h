
#ifdef RCT_NEW_ARCH_ENABLED
#import <UsercentricsSpec/UsercentricsSpec.h>

NS_ASSUME_NONNULL_BEGIN

@interface Usercentrics : NSObject <NativeUsercentricsSpec>

NS_ASSUME_NONNULL_END

#else
#import <React/RCTBridgeModule.h>

@interface Usercentrics : NSObject <RCTBridgeModule>
#endif

@end
