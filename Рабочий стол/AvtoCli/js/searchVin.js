let header_Button_SearchVin = document.querySelector('#header_Button_Search').addEventListener('click', () => {
    let header_Input_line_forSearchVin = document.querySelector('#header_Input_line').value;

        const getDataKeyFromLSforSearch = Object.keys(localStorage).forEach( (entryKeys) => {
            let getLocalStorageValue = localStorage.getItem(entryKeys);
                const keyParse = JSON.parse(getLocalStorageValue);
                
                if (keyParse.itog === header_Input_line_forSearchVin) {
                    function goInt() {
                        keyParse.stoimZ = Number.parseInt(keyParse.stoimZ);
                        keyParse.stoimR = Number.parseInt(keyParse.stoimR);
                    }
                    goInt(keyParse.stoimZ, keyParse.stoimR);

                    function clearSearchInput() {
                        let header_Input_line_forSearchVin = document.querySelector('#header_Input_line').value = "";
                    };
                    const   afterSearchList = `<afterSearchList class="afterSearchList" id="afterSearchList">
                                <span class="AfterSearchListSpan" id="afterSearchListSpan">VIN №: ${keyParse.itog}</span>
                                <span class="AfterSearchListSpan" id="afterSearchListSpan">Клиент: ${keyParse.fio}</span>
                                <span class="AfterSearchListSpan" id="afterSearchListSpan">Номер: ${keyParse.tel}</span>
                                <span class="AfterSearchListSpan" id="afterSearchListSpan">Причина обращения: ${keyParse.prech}</span>
                                <span class="AfterSearchListSpan" id="afterSearchListSpan">Марка: ${keyParse.mark}</span>
                                <span class="AfterSearchListSpan" id="afterSearchListSpan">Модель: ${keyParse.model}</span>
                                <span class="AfterSearchListSpan" id="afterSearchListSpan">Стоимость запчастей / расходников: ${keyParse.stoimZ}</span>
                                <span class="AfterSearchListSpan" id="afterSearchListSpan">Стоимость работ: ${keyParse.stoimR}</span>
                                <span class="AfterSearchListSpan" id="afterSearchListSpan">Итого: ${keyParse.stoimZ + keyParse.stoimR}</span>
                                <button type="button" class="form_Add_New_Client_Item_Button inpItemB" id="after_Search_List_Exit">Закрыть</button>
                            </afterSearchList>`
    
        const insertForms = document.querySelector('#insertForm').insertAdjacentHTML('afterbegin', afterSearchList);
            clearSearchInput();
            const after_Search_List_Exit = document.querySelector('#after_Search_List_Exit').addEventListener('click', () => {
                const insertForms = document.querySelector('#insertForm').remove(afterSearchList);
                    document.location.href="index.html";
            });
        
        }
    });
});

