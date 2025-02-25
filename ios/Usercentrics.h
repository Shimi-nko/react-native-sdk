
#ifdef RCT_NEW_ARCH_ENABLED
#import "UsercentricsSpec.h"

@interface Usercentrics : NSObject <NativeUsercentricsSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Usercentrics : NSObject <RCTBridgeModule>
#endif

@end
