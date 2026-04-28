#!/bin/bash

TODAY=$(date +%Y-%m-%d)
FILE="lab1/notes/report-$TODAY.txt"

# إنشاء مجلد notes إذا مش موجود
mkdir -p lab1/notes

# إنشاء ملف التقرير
touch $FILE

# إضافة المعلومات المطلوبة
echo "User: $(whoami)" >> $FILE
echo "Current Path: $(pwd)" >> $FILE
echo "Files in ./data: $(ls lab1/data | wc -l)" >> $FILE

# رسالة نجاح
echo "Report created successfully!"

