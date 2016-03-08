#!/bin/bash
cp template.html "doc_"$1"_fr.html"
cp template.html "doc_"$1"_en.html"

sed -i "s|{{name}}|$1|g" "doc_"$1"_fr.html"
sed -i "s|{{name}}|$1|g" "doc_"$1"_en.html"

sed -i "s|{{lang}}|fr|g" "doc_"$1"_fr.html"
sed -i "s|{{lang}}|en|g" "doc_"$1"_en.html"