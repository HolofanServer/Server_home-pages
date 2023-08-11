function toggleMenu() {
    const menuModal = document.getElementById('menuModal');
    if(menuModal.style.right === '-400px' || menuModal.style.right === "") {
        menuModal.style.right = '0';
    } else {
        menuModal.style.right = '-400px';
    }
}