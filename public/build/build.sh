#!/bin/bash
node r.js -o buildConfig/requireProject-Build.js
cat ../js/lib/elaiJS.min.js > requireProjectAndElaiJS.min.js
cat requireProject.min.js >> requireProjectAndElaiJS.min.js
polybuild importer.html --maximum-crush

mv importer.build.html build.min.html
mv importer.build.js build.min.js

sed -i 's|<html><head>||g' build.min.html
sed -i 's|</head><body>||g' build.min.html
sed -i 's|</body></html>||g' build.min.html
sed -i 's|<script src="importer.build.js" defer=""></script>||g' build.min.html
sed -i 's|<meta charset="UTF-8">||g' build.min.html

cp index_template.html ../index.html
sed -i "s|{{version}}|$1|g" ../index.html

source buildConfig/buildConfig.sh
sed -i "s|{{title}}|$title|g" ../index.html
sed -i "s|{{appMain}}|$appMain|g" ../index.html

rm requireProjectAndElaiJS.min.js
rm requireProject.min.js