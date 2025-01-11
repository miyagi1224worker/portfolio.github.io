let clickCount = 0; // クリック回数を記録
let sideclickCount = 0; // クリック回数を記録
// document.addEventListener('DOMContentLoaded', () => {
    const projectsLink = document.getElementById('projects-link1');
    const projectsMenu = document.getElementById('projects-menu1');

    projectsLink.addEventListener('click', (event) => {
        event.preventDefault(); // デフォルトのリンク動作を無効化
        clickCount++;
        if (clickCount === 1) {
            // 初回クリック時はメニューの開閉
            const isVisible = projectsMenu.style.display === 'block';
            projectsMenu.style.display = isVisible ? 'none' : 'block';
            // 一定時間後にクリック回数をリセット
            setTimeout(() => {
                clickCount = 0; // リセット
            }, 500); // 500ms以内に連続クリックがない場合、リセット
        } else if (clickCount === 2) {
            // 2回目のクリックでリンクへ飛ぶ
            window.location.href = projectsLink.getAttribute('href');
            projectsMenu.style.display = 'none';
        }
    });
    // メニュー以外をクリックしたら閉じる
    document.addEventListener('click', (event) => {
        if (!projectsLink.contains(event.target) && !projectsMenu.contains(event.target)) {
            projectsMenu.style.display = 'none';
        }
    });
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});
// サイドバーの「作成プログラム紹介」をクリックしたときの処理
const sidebarprojectsLink = document.getElementById('sidebar-projects-link');
const sidebarprojectsMenu = document.getElementById('sidebar-projects-menu');

sidebarprojectsLink.addEventListener('click', function (event) {
    event.preventDefault(); // デフォルトのリンク動作を無効化
    sideclickCount++;
    if (sideclickCount === 1) {
        // 初回クリック時はメニューの開閉
        const sideisVisible = sidebarprojectsMenu.style.display === 'block';
        sidebarprojectsMenu.style.display = sideisVisible ? 'none' : 'block';
        // 一定時間後にクリック回数をリセット
        setTimeout(() => {
            sideclickCount = 0; // リセット
        }, 500); // 500ms以内に連続クリックがない場合、リセット
    } else if (sideclickCount === 2) {
        // 2回目のクリックでリンクへ飛ぶ
        window.location.href = sidebarprojectsLink.getAttribute('href');
        sidebarprojectsMenu.style.display = 'none';
    }
});
    // メニュー以外をクリックしたら閉じる
    document.addEventListener('click', (event) => {
        if (!sidebarProjectsLink.contains(event.target) && !sidebarProjectsMenu.contains(event.target)) {
            sidebarProjectsMenu.style.display = 'none';
        }
    });