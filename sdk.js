(() => {
  // Most of the library functions are fallbacked with default values as per documentation
  // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side

  if (typeof window.google === "undefined") {
    window.google = {};
  }

  function NOOP() {}

  // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima
  // Note: This object is incomplete
  window.google.ima = {
    settings: {
      setDisableCustomPlaybackForIOS10Plus: NOOP,
    },

    ViewMode: {
      NORMAL: "NORMAL",
    },

    // developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsManagerLoadedEvent
    AdsManagerLoadedEvent: {
      Type: {
        ADS_MANAGER_LOADED: "ADS_MANAGER_LOADED",
      },
    },

    AdErrorEvent: {
      Type: {
        AD_ERROR: "AD_ERROR",
      },
    },
  };

  // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdDisplayContainer
  window.google.ima.AdDisplayContainer = class AdDisplayContainer {
    constructor(containerElement, videoElement, clickTrackingElement) {
      //
    }

    initialize() {}

    destroy() {}
  };

  // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsLoader
  window.google.ima.AdsLoader = class AdsLoader {
    contentComplete() {}

    destroy() {}

    getSettings() {
      return {
        CompanionBackfillMode: "ALWAYS",
        VpaidMode: "DISABLED",
        getCompanionBackfill: NOOP,
        getDisableCustomPlaybackForIOS10Plus: NOOP,
        getFeatureFlags: NOOP,
        getLocale: NOOP,
        getNumRedirects: NOOP,
        getPlayerType: NOOP,
        getPlayerVersion: NOOP,
        getPpid: NOOP,
        isCookiesEnabled: NOOP,
        setAutoPlayAdBreaks: NOOP,
        setCompanionBackfill: NOOP,
        setCookiesEnabled: NOOP,
        setDisableCustomPlaybackForIOS10Plus: NOOP,
        setFeatureFlags: NOOP,
        setLocale: NOOP,
        setNumRedirects: NOOP,
        setPlayerType: NOOP,
        setPlayerVersion: NOOP,
        setPpid: NOOP,
        setSessionId: NOOP,
        setVpaidAllowed: NOOP,
        setVpaidMode: NOOP,
      };
    }

    getVersion() {
      return "0.0.0";
    }

    requestAds(adsRequest, userRequestContext) {}

    addEventListener() {}
  };

  // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsRequest
  window.google.ima.AdsRequest = class AdsRequest {
    // https://support.google.com/admanager/answer/10678356?visit_id=638448834875600008-3208457267&rd=2
    adTagUrl = "https://example.com";

    adsResponse = null;

    contentDuration = null;

    contentKeywords = null;

    contentTitle = null;

    forceNonLinearFullSlot = false;

    linearAdSlotHeight = 0;

    linearAdSlotWidth = 0;

    liveStreamPrefetchSeconds = 0;

    nonLinearAdSlotHeight = 0;

    nonLinearAdSlotWidth = 0;

    omidAccessModeRules = {
      // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsRequest#omidAccessModeRules
    };

    pageUrl = null;

    vastLoadTimeout = 0;

    setAdWillAutoPlay(autoPlay) {}

    setAdWillPlayMuted(muted) {}

    setContinuousPlayback(continuousPlayback) {}

    getSettings() {
      return {
        adTagUrl: this.adTagUrl,
      };
    }
  };

  // https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdsManager
  window.google.ima.AdsManager = class AdsRequest {
    collapse() {}

    configureAdsManager() {}

    destroy() {}

    discardAdBreak() {}

    expand() {}

    focus() {}

    getAdSkippableState() {
      return false;
    }

    getCuePoints() {
      return [];
    }

    getRemainingTime() {
      return -1;
    }

    getVolume() {
      return 0;
    }

    init(width, height, viewMode, videoElement) {}

    isCustomClickTrackingUsed() {
      return false;
    }

    isCustomPlaybackUsed() {
      return false;
    }

    pause() {}

    resize(width, height, viewMode) {}

    resume() {}

    setVolume(volume) {}

    skip() {}

    start() {}

    stop() {}

    updateAdsRenderingSettings(adsRenderingSettings) {}
  };
})();
