import { useState } from "react";
import { MathComponent } from "mathjax-react";

function App() {
  const [visible, setVisible] = useState(false);
  const [power, setPower] = useState(2);
  const [button57, setButton57] = useState(1);
  const min = 2;
  const max = 10 ** power - 1;
  const [number, setNumber] = useState(57);
  let c = number;
  let d = button57;

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
              if (c === 57 && d === 1) {
                return <span>素数です。異論は認めません()。</span>;
              } else {
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
      <div style={{ margin: 10 }}>
        <p>
          ＊ 数字の桁数の上限は<span className={"power"}>{power}</span>
          桁です。1桁から13桁の間で調整できます。
        </p>
        <div style={{ margin: 15 }}>
          <span>桁数の上限を</span>
          {power >= 2 && (
            <button
              className={"powerButton"}
              type="button"
              key={"minpower"}
              onClick={() => {
                setPower(power - 1);
                console.log(power);
              }}
            >
              下げる
            </button>
          )}
          {power <= 12 && (
            <button
              className={"powerButton"}
              type="button"
              key={"pluspower"}
              onClick={() => {
                setPower(power + 1);
              }}
            >
              上げる
            </button>
          )}
        </div>
      </div>
      <div style={{ margin: 10 }}>
        ＊ 57は素数でないというバグを起こせる機能を追加しました。
        <div style={{ margin: 15 }}>
          バグを
          {button57 === 0 && (
            <button
              className={"powerButton"}
              type="button"
              key={"not57"}
              onClick={() => {
                setButton57(1);
                setVisible(false);
              }}
            >
              解除する
            </button>
          )}
          {button57 === 1 && (
            <button
              className={"powerButton"}
              type="button"
              key={"57"}
              onClick={() => {
                setButton57(0);
                setVisible(false);
              }}
            >
              起こす
            </button>
          )}
        </div>
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
      <p style={{ margin: 10 }}>
        {" "}
        ＊ これとは別に、調べたい数字を素因数分解できるツールが
        <a
          href="https://bunkaivol2.onrender.com"
          className="btn4"
        >
          こちら
        </a>
        にあるので併せてご利用ください。
      </p>
    </>
  );
}

export default App;
