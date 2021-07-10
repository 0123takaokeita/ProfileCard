// パーツ作成

// プロフィールのdiv作成
let profiles = document.getElementById('profiles')
profiles.classList.add('bg-secondary','vh-100','vw-100','d-flex','flex-colum','justify-content-center','align-items-center');

// カードの作成
let card = document.createElement('div');
card.classList.add('d-flex','bg-white','w-50','rounded','border','p-4');
profiles.append(card);

// カード左半分
let leftArea = document.createElement('div');
leftArea.classList.add('d-flex','h-100','w-50','justify-content-between','flex-column')
// leftArea.classList.add('bg-white');
card.append(leftArea);


// 名前の表示
let nameArea = document.createElement('h2');
// nameArea.classList.add();
nameArea.innerHTML = 'Keita Takao';
leftArea.append(nameArea);

//　仕事の表示
let jobArea = document.createElement('div');
jobArea.classList.add('mt-3');
jobArea.innerHTML = '<strong>Job:</strong><br> software engineer'
leftArea.append(jobArea);

// スキルの表示
let skillArea = document.createElement('div');
skillArea.classList.add('mt-3');
skillArea.innerHTML = '<strong>Skill:</strong><br> Ruby / PHP　/ JavaScript / Java / Python';
leftArea.append(skillArea);

let liveArea = document.createElement('div');
liveArea.classList.add('mt-3');
liveArea.innerHTML = '<strong>Country:</strong><br>Japan / Nara';
leftArea.append(liveArea);



// カード右半分
let rightArea = document.createElement('div');
rightArea.classList.add('margin-auto','d-flex','h-auto','w-50')
card.append(rightArea);

// 画像のエリア
let avatar = document.createElement('img');
avatar.classList.add('h-100','w-100');
avatar.src = '/takao.png'
rightArea.append(avatar);




