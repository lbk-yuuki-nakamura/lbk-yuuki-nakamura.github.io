# ページ

https://lbk-yuuki-nakamura.github.io/


# ディレクトリ構成

/react-project/[プロジェクト名]  Reactのプロジェクトを複数分離して作成  
/[プロジェクト名]  Reactのプロジェクトをビルドした結果を格納（実際に開く際にはこのパスを開く）

# Reactプロジェクトの作成

下記を実行してプロジェクトを作成する  
※「`[プロジェクト名]`」はプロジェクト名を置き換える

```
cd /react-project
npx create-react-app [プロジェクト名] --template typescript
```

プロジェクト配下の「package.json」に下記を追加する

```
"homepage": ".",
```

# Reactプロジェクトのビルド

プロジェクトルートの「package.json」の「scripts」に下記を追加する  
※「`[プロジェクト名]`」はプロジェクト名を置き換える

```
"build:[プロジェクト名]": "rm -rf ./[プロジェクト名] && rm -rf ./react-project/[プロジェクト名]/build && npm run build --prefix react-project/[プロジェクト名] && mkdir [プロジェクト名] && mv react-project/[プロジェクト名]/build/* ./sample[プロジェクト名]"
```

プロジェクトルートで下記を実行することで、該当のプロジェクトのビルドが行える  
※「`[プロジェクト名]`」はプロジェクト名を置き換える

```
npm run build:[プロジェクト名]
```
