import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.__PROJECT_NAME__',
  appPath: 'app',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig;