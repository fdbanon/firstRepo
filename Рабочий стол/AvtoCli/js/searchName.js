
let header_Button_Search = document.querySelector('#header_Button_Search').addEventListener('click', () => {
    let header_Input_line_forSearch = document.querySelector('#header_Input_line').value;
    
        const getDataKeyFromLSforSearch = Object.keys(localStorage).forEach( (entryKeys) => {
            
                if (entryKeys === header_Input_line_forSearch) {
                    let search_Name_Key = localStorage.getItem(header_Input_line_forSearch);
                    
                    let dataParseFromLS = JSON.parse(search_Name_Key);

                    function goInt() {
                        dataParseFromLS.stoimZ = Number.parseInt(dataParseFromLS.stoimZ);
                        dataParseFromLS.stoimR = Number.parseInt(dataParseFromLS.stoimR);
                    }
                    goInt(dataParseFromLS.stoimZ, dataParseFromLS.stoimR);

                    function clearSearchInput() {
                        let header_Input_line_forSearch = document.querySelector('#header_Input_line').value = "";
                    };
                    const   afterSearchList = `<afterSearchList class="afterSearchList" id="afterSearchList">
                                <span class="AfterSearchListSpan" id="afterSearchListSpan">VIN №:${dataParseFromLS.itog}</span>
                                <span class="AfterSearchListSpan" id="afterSearchListSpan">Клиент: ${dataParseFromLS.fio}</span>
                                <span class="AfterSearchListSpan" id="afterSearchListSpan">Номер: ${dataParseFromLS.tel}</span>
                                <span class="AfterSearchListSpan" id="afterSearchListSpan">Причина обращения: ${dataParseFromLS.prech}</span>
                                <span class="AfterSearchListSpan" id="afterSearchListSpan">Марка: ${dataParseFromLS.mark}</span>
                                <span class="AfterSearchListSpan" id="afterSearchListSpan">Модель: ${dataParseFromLS.model}</span>
                                <span class="AfterSearchListSpan" id="afterSearchListSpan">Стоимость запчастей / расходников: ${dataParseFromLS.stoimZ}</span>
                                <span class="AfterSearchListSpan" id="afterSearchListSpan">Стоимость работ: ${dataParseFromLS.stoimR}</span>
                                <span class="AfterSearchListSpan" id="afterSearchListSpan">Итого: ${dataParseFromLS.stoimZ + dataParseFromLS.stoimR}</span>
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

