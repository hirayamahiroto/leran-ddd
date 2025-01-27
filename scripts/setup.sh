#!/bin/bash

# 色の定義
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 開発環境のセットアップを開始します...${NC}"

# Supabaseの起動
start_supabase() {
    echo -e "${BLUE}📦 Supabaseを起動します...${NC}"
    cd packages/shared/database
    npx supabase start
    cd ../../..
}

# Next.jsアプリケーションの起動
start_nextjs() {
    echo -e "${BLUE}🌐 Next.jsアプリケーションを起動します...${NC}"
    cd app
    npm run dev &
    cd ..
}

# メイン処理
main() {
    # パッケージのインストール
    echo -e "${BLUE}📦 依存パッケージをインストールしています...${NC}"
    npm install

    # Supabaseの起動
    start_supabase

    # Next.jsアプリケーションの起動
    start_nextjs

    echo -e "${GREEN}✨ セットアップが完了しました！${NC}"
    echo -e "${GREEN}📝 以下のURLでアクセスできます:${NC}"
    echo -e "Next.js: http://localhost:3000"
    echo -e "Supabase Studio: http://127.0.0.1:54447"
}

main 
