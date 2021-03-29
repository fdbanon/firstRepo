let form_Admin_Access = `   <form action="#" class="form_Access" id="form_Access">
                                <span class="spanInAdminForm" >Получить права Администратора?</span>
                                <input type="text" placeholder="Логин" class="form_login" id="form_Login">
                                <input type="text" placeholder="Пароль" class="form_Pass" id="form_Password">
                                <button type="button" class="form_Add_New_Client_Item_Button inpItemBad" id="form_Access_Button_get">Получить</button>
                                <button type="button" class="form_Add_New_Client_Item_Button inpItemBad" id="form_Access_Button_Exit">Отмена</button>
                            </form>`;

const adminOpen = document.querySelector('#admin').addEventListener('click', () => {
        const insertFormForAccess = document.querySelector('#insertForm');
            insertFormForAccess.insertAdjacentHTML('afterbegin', form_Admin_Access);

    const form_Access_Button_get = document.querySelector('#form_Access_Button_get').addEventListener('click', () => {
        const loginInput = document.querySelector('#form_Login').value;
        const passInput = document.querySelector('#form_Password').value;

            if ( loginInput === 'user@gmail.com' ) {
                window.open("admin.html","adm","location=0,width=0,height=700px").focus();
            }
        const insertFormForAccess = document.querySelector('#insertForm').remove(form_Admin_Access);
            document.location.href="index.html";
        });
        
    const form_Access_Button_Exit = document.querySelector('#form_Access_Button_Exit').addEventListener('click', () => {
        const insertFormForAccess = document.querySelector('#insertForm').remove(form_Admin_Access);
            document.location.href="index.html";
    });
        
});








