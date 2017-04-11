# console.xxx();
### Kyohei Morimoto

---

## 基本編

---

### console.xxxの基本4兄弟

---

### console.xxxの基本5兄弟
- console.log();
- console.warn();
- console.error();
- console.info();
- console.debug();

---

意識低い僕はconsole.log()しか使っていません。

---

```js
console.log("Hello World");
console.warn("Hello World");
console.error("Hello World");
console.info("Hello World");
console.debug("Hello World");

```

---

### それぞれの使い分け
- log();：とりあえず何か出したい
- warn();:使わなくなる関数の警告
- error();詳細が出るのでデバッグし易い
- info();ライブラリのユーザー向け
- debug();色が違うので、対象のログを絞りたいときとかに

---

### 重要なのはそれぞれでソートが出来ること

---

## 中級編

---


### console内は結構自由

---

### console内で使える引数
- &s
- %d
- %o
- %c


---

## 上級編


---

## consoleを見やすく
console.group();

---

## console内での判定
console.assert();

---

## console内で数える
console.count();

---

## パフォーマンス計測
console.time();

---

## さらに配列を見やすく
console.table();

---
