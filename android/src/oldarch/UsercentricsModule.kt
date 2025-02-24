package com.usercentrics.reactnativeusercentrics

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.bridge.ReadableArray

abstract class UsercentricsModule internal constructor(context: ReactApplicationContext) :ReactContextBaseJavaModule(context) {
    abstract fun configure(options: ReadableMap)
    abstract fun isReady(promise: Promise)
    abstract fun showFirstLayer(options: ReadableMap?, promise: Promise)
    abstract fun showSecondLayer(options: ReadableMap?, promise: Promise)
    abstract fun restoreUserSession(controllerId: String, promise: Promise)
    abstract fun getControllerId(promise: Promise)
    abstract fun getABTestingVariant(promise: Promise)
    abstract fun getConsents(promise: Promise)
    abstract fun getCMPData(promise: Promise)
    abstract fun getAdditionalConsentModeData(promise: Promise)
    abstract fun setCMPId(id: Int)
    abstract fun setABTestingVariant(variant: String)
    abstract fun getTCFData(promise: Promise)
    abstract fun getUserSessionData(promise: Promise)
    abstract fun getUSPData(promise: Promise)
    abstract fun changeLanguage(language: String, promise: Promise)
    abstract fun acceptAllForTCF(fromLayer: Int, consentType: Int, promise: Promise)
    abstract fun acceptAll(consentType: Int, promise: Promise)
    abstract fun denyAllForTCF(fromLayer: Int, consentType: Int, promise: Promise)
    abstract fun denyAll(consentType: Int, promise: Promise)
    abstract fun saveDecisionsForTCF(tcfDecisions: ReadableMap, fromLayer: Int, saveDecisions: ReadableArray, consentType: Int, promise: Promise)
    abstract fun saveDecisions(decisions: ReadableArray, consentType: Int, promise: Promise)
    abstract fun saveOptOutForCCPA(isOptedOut: Boolean, consentType: Int, promise: Promise)
    abstract fun track(event: Int)
    abstract fun clearUserSession(promise: Promise)
}
