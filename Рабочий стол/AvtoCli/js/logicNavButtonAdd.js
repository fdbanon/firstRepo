const addNewClient = document.querySelector('#addNewClient').addEventListener('click', () => {
    let form_New_CLient = ` <form action="#" class="form_Add_New_Client" id="form_New_CLient">
                                <input type="text" placeholder="Ф.И.О" class="form_Add_New_Client_Item_Fio inpItem" id="form_Add_New_Client_Item_Fio">
                                <input type="text" placeholder="Телефон  +7" class="form_Add_New_Client_Item_Tel inpItem" id="form_Add_New_Client_Item_Tel">
                                <input type="text" placeholder="VIN №" maxlength="17" class="form_Add_New_Client_Item_Coment inpItem" id="form_Add_New_Client_Item_Itog">
                                <input type="text" placeholder="Причина обращения" class="form_Add_New_Client_Item_Prech inpItem" id="form_Add_New_Client_Item_Prech">
                                <input type="text" placeholder="Марка" class="form_Add_New_Client_Item_Mark inpItem" id="form_Add_New_Client_Item_Mark">
                                <input type="text" placeholder="Модель" class="form_Add_New_Client_Item_Model inpItem" id="form_Add_New_Client_Item_Model">
                                <input type="text" placeholder="Стоимость запчастей" class="form_Add_New_Client_Item_StoimZ inpItem" id="form_Add_New_Client_Item_StoimZ">
                                <input type="text" placeholder="Стоимость работ" class="form_Add_New_Client_Item_StoimR inpItem" id="form_Add_New_Client_Item_StoimR">
                                <button type="button" class="form_Add_New_Client_Item_Button inpItemB" id="form_Add_New_Client_Item_Button">Отправить</button>
                                <button type="button" class="form_Add_New_Client_Item_Button inpItemB" id="form_Add_New_Client_Item_Button_Exit">Отмена</button>
                            </form>`;

    const insertForm = document.querySelector('#insertForm').insertAdjacentHTML('afterbegin', form_New_CLient); 

    const form_Add_New_Client_Item_Button = document.querySelector('#form_Add_New_Client_Item_Button');
    
        form_Add_New_Client_Item_Button.addEventListener('click', function() {
            const fio = document.querySelector('#form_Add_New_Client_Item_Fio').value;
            const tel = document.querySelector('#form_Add_New_Client_Item_Tel').value;
            const prech = document.querySelector('#form_Add_New_Client_Item_Prech').value;
            const mark = document.querySelector('#form_Add_New_Client_Item_Mark').value;
            const model = document.querySelector('#form_Add_New_Client_Item_Model').value;
            const stoimZ = document.querySelector('#form_Add_New_Client_Item_StoimZ').value;
            const stoimR = document.querySelector('#form_Add_New_Client_Item_StoimR').value;
            const itog = document.querySelector('#form_Add_New_Client_Item_Itog').value;

    function NewClient(fio, tel, prech, mark, model, stoimZ, stoimR, itog ) {
            this.fio = fio
            this.tel = tel
            this.prech = prech
            this.mark = mark
            this.model = model
            this.stoimZ = stoimZ
            this.stoimR = stoimR
            this.itog = itog
};
    function clearInput() {
            const fio = document.querySelector('#form_Add_New_Client_Item_Fio').value = "";
            const tel = document.querySelector('#form_Add_New_Client_Item_Tel').value = "";
            const prech = document.querySelector('#form_Add_New_Client_Item_Prech').value = "";
            const mark = document.querySelector('#form_Add_New_Client_Item_Mark').value = "";
            const model = document.querySelector('#form_Add_New_Client_Item_Model').value = "";
            const stoimZ = document.querySelector('#form_Add_New_Client_Item_StoimZ').value = "";
            const stoimR = document.querySelector('#form_Add_New_Client_Item_StoimR').value = "";
            const itog = document.querySelector('#form_Add_New_Client_Item_Itog').value = "";
}

    const inDataBase = () => { 
        let formatInJSON = JSON.stringify(client);
        localStorage.setItem(client.fio, formatInJSON)
        document.location.href ="index.html";
};

    let client = new NewClient(fio, tel, prech, mark, model, stoimZ, stoimR, itog);
            clearInput();
            inDataBase();
});

    const form_Add_New_Client_Item_Button_Exit = document.querySelector("#form_Add_New_Client_Item_Button_Exit").addEventListener('click', () => { 
        const insertForm = document.querySelector('#insertForm').remove(form_New_CLient);
            document.location.href ="index.html";
    }) ;
});
