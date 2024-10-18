const shops = [
    //Python
    { name: "#", name2: "#", category: "Python", link: "#" },
    //CMD
    { name: "ネット情報出力", name2: "ネットの接続状況", category: "CMD", link: "../HPList/CMD/Net-information-output.html" },
    //SQL
    { name: "#", name2: "#", category: "SQL", link: "#" },
    //HTML
    { name: "HTMLの初期入力", name2: "HTML初期宣言", category: "HTML", link: "../HPList/HTML/declaration.html" },
    { name: "コメント", name2: "メモ", category: "HTML", link: "../HPList/HTML/comment.html" },
    { name: "画像表示", name2: "#", category: "HTML", link: "../HPList/HTML/image.html" },
    { name: "JavaScript紐づけ", name2: "#", category: "HTML", link: "../HPList/HTML/javascript-binding.html" },
    { name: "CSS紐づけ", name2: "#", category: "HTML", link: "../HPList/HTML/css-binding.html" },
    { name: "Favicon", name2: "ファビコン", category: "HTML", link: "../HPList/HTML/favicon.html" },
    { name: "title", name2: "タイトル", category: "HTML", link: "../HPList/HTML/title.html" },
    { name: "文書型宣言", name2: "#", category: "HTML", link: "../HPList/HTML/document-type-declaration.html" },
    { name: "言語宣言", name2: "#", category: "HTML", link: "../HPList/HTML/language-declaration.html" },
    { name: "画面表示制御", name2: "#", category: "HTML", link: "../HPList/HTML/meta-tag.html" },
    { name: "エンコード", name2: "#", category: "HTML", link: "../HPList/HTML/encode-tag.html" },
    { name: "エスケープシーケンス", name2: "コード表示", category: "HTML", link: "../HPList/HTML/escape-sequence.html" },
    //CSS
    { name: "#", name2: "#", category: "CSS", link: "#" },
    //JavaScript
    { name: "IF文", name2: "条件分岐", category: "JavaScript", link: "../HPList/JavaScript/if.html" },
    { name: "文字変換", name2: "全角,半角、ひらがな,カタカナを変換", category: "JavaScript", link: "../HPList/JavaScript/full-width-half-width-correction.html" },
    //VBA
    { name: "線の追加", name2: "線を引く", category: "VBA", link: "../HPList/VBA/Add-line.html" },
    { name: "#", name2: "#", category: "#", link: "VBA" },
    //Excel
    { name: "SUM関数", name2: "足し算", category: "Excel", link: "../HPList/Excel/sum-function.html" },
    { name: "SUMIF関数", name2: "条件を指定した足し算", category: "Excel", link: "../HPList/Excel/sumif-function.html" },
    { name: "AVERAGE関数", name2: "平均", category: "Excel", link: "../HPList/Excel/average-function.html" },
    { name: "MAX関数", name2: "最大値", category: "Excel", link: "../HPList/Excel/max-function.html" },
    { name: "MIN関数", name2: "最小値", category: "Excel", link: "../HPList/Excel/min-function.html" },
    { name: "ROUND関数", name2: "四捨五入", category: "Excel", link: "../HPList/Excel/round-function.html" },
    { name: "DATE関数", name2: "日付", category: "Excel", link: "../HPList/Excel/date-function.html" },
    { name: "TEXT関数", name2: "数値,日付,曜日,表示形式", category: "Excel", link: "../HPList/Excel/text-function.html" },
    { name: "COVNT関数", name2: "セル個数カウント", category: "Excel", link: "../HPList/Excel/covnt-function.html" },
    { name: "COUNTIF関数", name2: "条件付きセル個数カウント", category: "Excel", link: "../HPList/Excel/countif-function.html" },
    { name: "IF関数", name2: "条件式", category: "Excel", link: "../HPList/Excel/if-function.html" },
    { name: "VLOOKUP関数", name2: "一致した値と同じ行にあるデータを返す", category: "Excel", link: "../HPList/Excel/vlookup-function.html" },
    { name: "IFERROR関数", name2: "エラー時に指定した文字を表示", category: "Excel", link: "../HPList/Excel/iferror-function.html" },
    { name: "書式設定方法", name2: "しょしきせってい", category: "Excel", link: "../HPList/Excel/formatting.html" },
    { name: "ROUNDDOWN関数", name2: "切り捨て", category: "Excel", link: "../HPList/Excel/rounddown-function.html" },
    { name: "ROUNDUP関数", name2: "切り上げ", category: "Excel", link: "../HPList/Excel/roundup-function.html" },
    //下記まだ追加していない
    { name: "TODAY関数", name2: "#", category: "Excel", link: "#" },
    { name: "NOW関数", name2: "#", category: "Excel", link: "#" },
    { name: "#", name2: "#", category: "Excel", link: "#" }
];

// 全角、半角を自動修正
function normalize(str) {
    return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - (0x2121 - 0x21));
    }).replace(/[ぁ-んァ-ヶ]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - (s >= "ァ" ? 0x60 : 0)); // カタカナをひらがなに、ひらがなをカタカナに変換
    });
}

document.getElementById("searchButton").addEventListener("click", search);
document.getElementById("searchInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        search();
    }
});

function search() {
    const searchTerm = normalize(document.getElementById("searchInput").value).toLowerCase();

    // 検索語句が空の場合、検索を行わず終了
    if (!searchTerm.trim()) {
        document.getElementById("searchResults").innerHTML = "";
        document.getElementById("noResultsMessage").style.display = "block";
        return;
    }

    const searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = "";

    const PythonChecked = document.getElementById("PythonCheckbox").checked;
    const CMDChecked = document.getElementById("CMDCheckbox").checked;
    const SQLChecked = document.getElementById("SQLCheckbox").checked;
    const HTMLChecked = document.getElementById("HTMLCheckbox").checked;
    const CSSChecked = document.getElementById("CSSCheckbox").checked;
    const javascriptChecked = document.getElementById("javascriptCheckbox").checked;
    const VBAChecked = document.getElementById("VBACheckbox").checked;
    const ExcelChecked = document.getElementById("ExcelCheckbox").checked;

    const filteredShops = shops.filter(shop => {
        const normalizedName = normalize(shop.name).toLowerCase();
        const normalizedName2 = normalize(shop.name2 || "").toLowerCase();
        const matchesSearchTerm = normalizedName.includes(searchTerm) || normalizedName2.includes(searchTerm);
        const matchesCategory = (PythonChecked && shop.category === "Python") || 
                                (CMDChecked && shop.category === "CMD") ||
                                (SQLChecked && shop.category === "SQL") ||
                                (HTMLChecked && shop.category === "HTML") || 
                                (CSSChecked && shop.category === "CSS") || 
                                (javascriptChecked && shop.category === "JavaScript") || 
                                (VBAChecked && shop.category === "VBA") || 
                                (ExcelChecked && shop.category === "Excel");
        return matchesSearchTerm && matchesCategory;
    });

    if (filteredShops.length === 0) {
        document.getElementById("noResultsMessage").style.display = "block";
    } else {
        document.getElementById("noResultsMessage").style.display = "none";
        filteredShops.forEach(shop => {
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.textContent = `${shop.name}`; // 店舗名を表示
            link.href = shop.link;
            link.classList.add("searchResult");

            // カテゴリを表示する要素を追加
            const categorySpan = document.createElement("span");
            categorySpan.textContent = ` (${shop.category})`; // カテゴリを表示
            categorySpan.classList.add("category"); // スタイル用のクラスを追加

            listItem.appendChild(link);
            listItem.appendChild(categorySpan); // カテゴリをリストアイテムに追加
            searchResults.appendChild(listItem);
        });
    }
}

function copyCode() {
    // コードブロックの内容を取得
    const code = document.getElementById("code-block").innerText;

    // コードをクリップボードにコピー
    navigator.clipboard.writeText(code).then(() => {
        // コピー成功時のアラート
        alert("コードがコピーされました！");
    }).catch(err => {
        // エラー時の処理
        console.error("コピーに失敗しました", err);
    });
}



