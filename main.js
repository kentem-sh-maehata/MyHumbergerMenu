{
    var open_1 = document.getElementById('open');
    var close_1 = document.getElementById('close');
    var menuArea_1 = document.getElementById('menu-area');
    open_1 === null || open_1 === void 0 ? void 0 : open_1.addEventListener('click', function () {
        menuArea_1 === null || menuArea_1 === void 0 ? void 0 : menuArea_1.classList.add('show');
        menuArea_1 === null || menuArea_1 === void 0 ? void 0 : menuArea_1.classList.remove('hidden');
        close_1 === null || close_1 === void 0 ? void 0 : close_1.classList.remove('hidden');
        open_1 === null || open_1 === void 0 ? void 0 : open_1.classList.add('hidden');
    });
    close_1 === null || close_1 === void 0 ? void 0 : close_1.addEventListener('click', function () {
        menuArea_1 === null || menuArea_1 === void 0 ? void 0 : menuArea_1.classList.remove('show');
        menuArea_1 === null || menuArea_1 === void 0 ? void 0 : menuArea_1.classList.add('hidden');
        close_1 === null || close_1 === void 0 ? void 0 : close_1.classList.add('hidden');
        open_1 === null || open_1 === void 0 ? void 0 : open_1.classList.remove('hidden');
    });
}
