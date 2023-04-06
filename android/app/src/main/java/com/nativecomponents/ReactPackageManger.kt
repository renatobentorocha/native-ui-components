package com.nativecomponents

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import java.util.Collections

class ReactPackageManger : ReactPackage {
    override fun createNativeModules(p0: ReactApplicationContext): MutableList<NativeModule> = Collections.emptyList()

    override fun createViewManagers(context: ReactApplicationContext) = listOf(ReactImageManager(context))

}