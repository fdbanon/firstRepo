const getDataKeyFromLS = Object.keys(localStorage).forEach( (entryKeys) => {
    let getLocalStorageValue = localStorage.getItem(entryKeys);
    
const parseDatafromJSON = JSON.parse(getLocalStorageValue);
    let {fio, tel, prech, mark, model, stoimZ, stoimR, itog } = parseDatafromJSON;
    
    class DataConstructor {
        constructor(fio, tel, prech, mark, model, stoimZ, stoimR, itog) {
            this.fio = fio
            this.tel = tel
            this.prech = prech
            this.mark = mark
            this.model = model
            this.stoimZ = stoimZ
            this.stoimR = stoimR
            this.itog = itog
        };
    };

    function goInt() {
        stoimZ = Number.parseInt(stoimZ);
        stoimR = Number.parseInt(stoimR);
    }
    goInt(stoimZ, stoimR);

    let tasks = new DataConstructor(fio, tel, prech, mark, model, stoimZ, stoimR, itog);

    const task = ` <content_Line class="content_Line_Task">
    <button class="delLineTAsk" id="delLineTask" style="width: 100%">Удалить</button>
                        
                        <content_line_Item_Data class="content_line_Items_Table_Data" id="${tasks.fio}">${fio}</content_line_Item_Data>
                        <content_line_Item_Data class="content_line_Items_Table_Data">${tel}</content_line_Item_Data>
                        <content_line_Item_Data class="content_line_Items_Table_Data">${prech}</content_line_Item_Data>
                        <content_line_Item_Data class="content_line_Items_Table_Data">${mark}</content_line_Item_Data>
                        <content_line_Item_Data class="content_line_Items_Table_Data">${model}</content_line_Item_Data>
                        <content_line_Item_Data class="content_line_Items_Table_Data">${stoimZ}</content_line_Item_Data>
                        <content_line_Item_Data class="content_line_Items_Table_Data">${stoimR}</content_line_Item_Data>
                        <content_line_Item_Data class="content_line_Items_Table_Data">${stoimZ + stoimR}</content_line_Item_Data>
                    </content_Line>`;

    const implement_Point = document.querySelector('#implement_Point');
            implement_Point.insertAdjacentHTML('afterbegin', task); 
});




