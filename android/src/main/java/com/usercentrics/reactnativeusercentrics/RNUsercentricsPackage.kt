package com.usercentrics.reactnativeusercentrics

import com.facebook.react.BaseReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider


class RNUsercentricsPackage : BaseReactPackage() {

    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? =
        if (name == RNUsercentricsModule.NAME) {
            RNUsercentricsModule(reactContext)
        } else {
            null
        }

    override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {
        mapOf(
            RNUsercentricsModule.NAME to ReactModuleInfo(
                RNUsercentricsModule.NAME,
                RNUsercentricsModule.NAME,
                false, // canOverrideExistingModule
                false, // needsEagerInit
                false, // isCxxModule
                true // isTurboModule
            )
        )
    }
}

