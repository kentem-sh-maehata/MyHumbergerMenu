{
    var open_1 = document.getElementById('open');
    var close_1 = document.getElementById('close');
    var menuArea_1 = document.getElementById('menu-area');
    console.log(open_1);
    // open?.addEventListener('click',()=>{
    if (open_1) {
        open_1 === null || open_1 === void 0 ? void 0 : open_1.addEventListener('click', function () {
            console.log(menuArea_1);
            menuArea_1 === null || menuArea_1 === void 0 ? void 0 : menuArea_1.classList.add('show');
            close_1 === null || close_1 === void 0 ? void 0 : close_1.classList.remove('hidden');
            open_1 === null || open_1 === void 0 ? void 0 : open_1.classList.add('hidden');
        });
    }
    else {
        console.log('null!!!');
    }
    close_1 === null || close_1 === void 0 ? void 0 : close_1.addEventListener('click', function () {
        menuArea_1 === null || menuArea_1 === void 0 ? void 0 : menuArea_1.classList.remove('show');
        close_1 === null || close_1 === void 0 ? void 0 : close_1.classList.add('hidden');
        open_1 === null || open_1 === void 0 ? void 0 : open_1.classList.remove('hidden');
    });
}
