#!/bin/bash
set -e

REPO_URL="git@github.com:AiBhrigu/origin-aeon.git"

echo "[1] Создание структуры..."
mkdir -p assets

cat << 'EOF' > index.html
<!DOCTYPE html>
<html>
<head>
<title>ORIGIN AEON</title>
<meta charset="UTF-8">
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="hero">
  <h1>ORIGIN AEON</h1>
  <p>Fractal Core Landing v1.0</p>
</div>
<script src="script.js"></script>
</body>
</html>
EOF

cat << 'EOF' > style.css
body { background:#0b0018; color:#fff; font-family:Arial; margin:0; }
.hero { text-align:center; margin-top:120px; }
EOF

echo 'console.log("Origin Aeon loaded.");' > script.js
echo '# Origin Aeon Landing v1.0' > README.md

echo "[2] Инициализация git..."
git init
git add .
git commit -m "Initial commit — Origin Aeon v1.0"
git branch -M main
git remote add origin "$REPO_URL"

echo "[3] Отправка в GitHub..."
git push -u origin main

echo "[4] Готово."
echo "Активируй GitHub Pages: Settings → Pages → Build from branch → main."
