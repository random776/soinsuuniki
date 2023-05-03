import { useState } from "react";
import { MathComponent } from "mathjax-react";

function App() {
  const [visible, setVisible] = useState(false);
  const min = 100000;
  const max = 99999999999;
  const [number, setNumber] = useState(
    Math.floor(Math.random() * (max + 1 - min)) + min
  );
  let c = number;

  const a = Math.floor(Math.random() * (max + 1 - min)) + min;
  return (
    <>
      <h2>フラッシュ素因数分解ニキ</h2>
      <div>
        <p>次の数字を素因数分解しましょう。</p>
        <div className={"style"}>
          <MathComponent
            display={false}
            tex={String.raw`${number}`}
          ></MathComponent>
        </div>
        {visible === false && (
          <button
            type="button"
            key={"answer"}
            onClick={() => {
              setVisible(true);
            }}
          >
            答え合わせ
          </button>
        )}
        {visible === true && (
          <button
            type="button"
            key={"answer"}
            onClick={() => {
              setVisible(false);
            }}
          >
            答え合わせ
          </button>
        )}
        <div style={{ visibility: visible ? "visible" : "hidden" }}>
          <p>答え</p>
          <div className={"style"}>
            {(() => {
              const numberArray = [];
              while (c % 2 === 0) {
                numberArray.push(2);
                c = c / 2;
              }
              let f = 3;
              while (f * f <= c) {
                if (c % f == 0) {
                  numberArray.push(f);
                  c = c / f;
                } else {
                  f = f + 2;
                }
              }
              if (c !== 1) {
                numberArray.push(c);
              }
              if (numberArray.length !== 1) {
                const popedNumber = numberArray.pop();
                const formula = numberArray.map((value) => (
                  <MathComponent
                    display={false}
                    tex={String.raw`${value} \times`}
                  ></MathComponent>
                ));
                return (
                  <>
                    {formula}
                    <MathComponent
                      display={false}
                      tex={String.raw`${popedNumber}`}
                    ></MathComponent>
                  </>
                );
              } else {
                return <span>素数です。</span>;
              }
            })()}
          </div>
        </div>
        <button
          type="button"
          key={"button"}
          onClick={() => {
            setNumber(a);
            setVisible(false);
          }}
        >
          整数を切り替える
        </button>
      </div>
      <p style={{ margin: 10 }}>
        {" "}
        ＊ このサイトの制作者「かっちゃん」へのお問い合わせは
        <a
          href="https://random776.github.io/kacchan-uts2-22/contact.html"
          className="btn4"
        >
          こちら
        </a>
        から。
      </p>
    </>
  );
}

export default App;
