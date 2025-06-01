'use strict';

console.groupCollapsed('OK!');

// ３つのポイント

const buttons = document.querySelectorAll('.more-btn');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const detail = btn.closest('.point-detail').querySelector('.sub-txt');
    detail.classList.toggle('show');
    btn.textContent = detail.classList.contains('show')?'▲閉じる' : '▼詳しく';
  })
});

// よくあるご質問

const questions = document.querySelectorAll('.q');

questions.forEach((q) => {
  q.addEventListener('click', () => {
    const answer = q.nextElementSibling;
    const tri = q.querySelector('.tri')
    answer.classList.toggle('open');
    tri.textContent = answer.classList.contains('open')?'▲' : '▼';
  });
});
