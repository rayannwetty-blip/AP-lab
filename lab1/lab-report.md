# Lab 1 Report

## Commands Used
mkdir
touch
echo
ls
wc -l
chmod +x
git add .
git commit -m ""
git push
git log --oneline

## Script Execution / Git Log Screenshot
![script screenshot](screenshots/image.png)


1) ما الفرق بين < و << و >&؟
<: لإدخال بيانات من ملف.

<<: لإدخال نص مباشر داخل السكربت.

>&: لإعادة توجيه المخرجات أو الأخطاء.
2) متى نستخدم source بدل ./script.sh؟
نستخدم source لما بدنا السكربت يغيّر المتغيرات في نفس الجلسة.

أما ./script.sh يشغّل السكربت بجلسة جديدة وما يغيّر شيء.
3) ما الفرق بين && و ||؟
&&: ينفّذ الأمر الثاني إذا الأول نجح.

||: ينفّذ الأمر الثاني إذا الأول فشل.
4) لماذا نستخدم الفروع في Git؟
حتى نشتغل على تغييرات جديدة بدون ما نخرب الكود الأساسي.

ولتنظيم العمل بين أكثر من شخص.
5) ما وظيفة ssh-agent؟ 
يخزّن مفاتيح SSH حتى نقدر نعمل push و pull بدون كتابة كلمة السر كل مرة.
