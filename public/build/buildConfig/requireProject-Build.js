({
    baseUrl: "./../../js/",
    include: [
      'widgets/body',
      'widgets/navigationArea',
      'widgets/home',
      'widgets/download',
      'widgets/documentation',
      'plugins/i18nPolymerWidget',
      'elaiJSApiMain'
    ],
    "paths": {
      "elaiJS": "empty:"
    },
    out: "../requireProject.min.js"
})