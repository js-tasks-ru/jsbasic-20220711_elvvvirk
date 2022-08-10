/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
            #rows;
            #elem;
 
            constructor(rows) {
                this.#rows = rows;
                this.#elem = document.createElement("table");
                this.html();
            }
            get elem() {
                return this.#elem;
            }
            html() {
                let content = `      
                <thead>
                <tr>
                    <th>Имя</th>
                    <th>Возраст</th>
                    <th>Зарплата</th>
                    <th>Город</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>` + this.#rows.map(item => `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td>${item.salary}</td>
                    <td>${item.city}</td>
                    <td><button> X </button></td>
                </tr>              
                        `).join("") + `</tbody>`;
                this.#elem.innerHTML = content;
                for (let item of this.#elem.querySelectorAll("button")) {    
                    item.addEventListener("click", this.deleteButton);
                }       
            }
 
            deleteButton = (event) => {
                let target = event.target
                const checkBox = target.closest('tr')
                checkBox.remove()
            }
}

