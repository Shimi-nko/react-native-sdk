package com.usercentrics.reactnativeusercentrics

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.UiThreadUtil.runOnUiThread
import com.usercentrics.reactnativeusercentrics.api.UsercentricsProxyImpl
import com.usercentrics.reactnativeusercentrics.extensions.*
import com.usercentrics.sdk.UsercentricsAnalyticsEventType
import com.usercentrics.sdk.models.settings.UsercentricsConsentType
import com.usercentrics.sdk.services.tcf.TCFDecisionUILayer

class RNUsercentricsModule(reactContext: ReactApplicationContext) : NativeUsercentricsSpec(reactContext) {

    private val usercentricsProxy = UsercentricsProxyImpl()

    private val context = reactApplicationContext;
    private val activity = currentActivity!!;

    override fun getName() = NAME

    override fun configure(options: ReadableMap, promise: Promise) {
        val usercentricsOptions = options.usercentricsOptionsFromMap()
        usercentricsProxy.initialize(context, usercentricsOptions)
    }

    override fun status(promise: Promise?) {
        usercentricsProxy.isReady({
            promise?.resolve(it.toWritableMap())
        }, {
            promise?.reject(it)
        })
    }

    fun isReady(promise: Promise){
        usercentricsProxy.isReady({
            promise.resolve(it.toWritableMap())
        }, {
            promise.reject(it)
        })
    }

    override fun showFirstLayer(options: ReadableMap?, promise: Promise) {
        runOnUiThread {
            try {
                val bannerSettings = options?.bannerSettingsFromMap(context)
                usercentricsProxy.showFirstLayer(activity, bannerSettings, promise)
            } catch (e: Exception) {
                promise.reject(e)
            }
        }
    }

    override fun showSecondLayer(options: ReadableMap?, promise: Promise?) {
        runOnUiThread {
            try {
                val bannerSettings = options?.bannerSettingsFromMap(context)
                usercentricsProxy.showSecondLayer(activity, bannerSettings, promise!!)
            } catch (e: Exception) {
                promise?.reject(e)
            }
        }
    }

    override fun restoreUserSession(controllerId: String?, promise: Promise?) {
        usercentricsProxy.instance.restoreUserSession(controllerId!!, {
            promise?.resolve(it.toWritableMap())
        }, {
            promise?.reject(it)
        })
    }

    override fun getControllerId(promise: Promise?) {
        promise?.resolve(usercentricsProxy.instance.getControllerId())
    }

    override fun getABTestingVariant(promise: Promise?) {
        promise?.resolve(usercentricsProxy.instance.getABTestingVariant())
    }

    override fun getConsents(promise: Promise?) {
        promise?.resolve(usercentricsProxy.instance.getConsents().toWritableArray())
    }

    override fun getCMPData(promise: Promise?) {
        promise?.resolve(usercentricsProxy.instance.getCMPData().serialize())
    }

    override fun getUserSessionData(promise: Promise?) {
        promise?.resolve(usercentricsProxy.instance.getUserSessionData())
    }

    override fun getCCPAData(promise: Promise?) {
        promise?.resolve(usercentricsProxy.instance.getCMPData().serialize())
    }

    override fun getTCFData(promise: Promise?) {
        usercentricsProxy.instance.getTCFData {
            promise?.resolve(it.serialize())
        }
    }

    override fun getAdditionalConsentModeData(promise: Promise?) {
        promise?.resolve(usercentricsProxy.instance.getAdditionalConsentModeData().serialize())
    }

    override fun changeLanguage(language: String?, promise: Promise?) {
        usercentricsProxy.instance.changeLanguage(language!!, {
            promise?.resolve(null)
        }, {
            promise?.reject(it)
        })
    }

    override fun acceptAll(consentType: Double, promise: Promise?) {
        promise?.resolve(
            usercentricsProxy.instance.acceptAll(
                UsercentricsConsentType.entries[consentType.toInt()]
            ).toWritableArray()
        )
    }

    override fun acceptAllForTCF(fromLayer: Double, consentType: Double, promise: Promise?) {
        promise?.resolve(
            usercentricsProxy.instance.acceptAllForTCF(
                TCFDecisionUILayer.entries[fromLayer.toInt()], UsercentricsConsentType.entries[consentType.toInt()]
            ).toWritableArray()
        )
    }

    override fun denyAll(consentType: Double, promise: Promise?) {
        promise?.resolve(
            usercentricsProxy.instance.denyAll(
                UsercentricsConsentType.entries[consentType.toInt()]
            ).toWritableArray()
        )
    }

    override fun denyAllForTCF(fromLayer: Double, consentType: Double, promise: Promise?) {
        promise?.resolve(
            usercentricsProxy.instance.denyAllForTCF(
                TCFDecisionUILayer.entries[fromLayer.toInt()], UsercentricsConsentType.entries[consentType.toInt()]
            ).toWritableArray()
        )
    }

    override fun saveDecisions(decisions: ReadableArray?, consentType: Double, promise: Promise?) {
        promise?.resolve(
            usercentricsProxy.instance.saveDecisions(
                decisions?.deserializeUserDecision()!!, UsercentricsConsentType.entries[consentType.toInt()]
            ).toWritableArray()
        )
    }

    override fun saveDecisionsForTCF(
        tcfDecisions: ReadableMap?,
        fromLayer: Double,
        decisions: ReadableArray?,
        consentType: Double,
        promise: Promise?
    ) {
        promise?.resolve(
            usercentricsProxy.instance.saveDecisionsForTCF(
                tcfDecisions?.deserializeTCFUserDecisions()!!,
                TCFDecisionUILayer.entries[fromLayer.toInt()],
                decisions?.deserializeUserDecision()!!,
                UsercentricsConsentType.entries[consentType.toInt()]
            ).toWritableArray()
        )
    }

    override fun saveOptOutForCCPA(isOptedOut: Boolean, consentType: Double, promise: Promise?) {
        promise?.resolve(
            usercentricsProxy.instance.saveOptOutForCCPA(
                isOptedOut, UsercentricsConsentType.entries[consentType.toInt()]
            ).toWritableArray()
        )
    }

    override fun setCMPId(id: Double, promise: Promise?) {
        usercentricsProxy.instance.setCMPId(id.toInt())
    }

    override fun setABTestingVariant(variant: String?, promise: Promise?) {
        usercentricsProxy.instance.setABTestingVariant(variant!!)
    }

    override fun track(event: Double, promise: Promise?) {
        usercentricsProxy.instance.track(UsercentricsAnalyticsEventType.entries[event.toInt()])
    }

    override fun clearUserSession(promise: Promise?) {
        usercentricsProxy.instance.clearUserSession({
            promise?.resolve(it.toWritableMap())
        }, {
            promise?.reject(it)
        })
    }


    companion object {
        const val NAME = "Usercentrics"
    }
}
