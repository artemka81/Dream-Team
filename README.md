   ## Запуск сборки проекта
В адресе вашего проекта на ПК не должно быть кириллицы. Идеально — создайте с корне диска С: или D: папку "projects" и разместите в нее папку вашего проекта. У вас может получится что то похожее на это: C:\projects\dream-team

1. Клонирование проекта к себе на ПК               
```sh
$ git clone https://github.com/artemka81/dream-team.git
```
2. Переходим в созданную папку
```sh
$ cd dream-team
```
3. Устанавливаем все зависимости
```sh 
$ npm install
```
### code guide
Соглашение по написанию кода. Общие правила которых будут придерживаться все члены команды:

* [SCSS] - CSS препроцессор
* [Flexbox] - Для построения структуры страниц спользуем флексы
* [Bootstrap grid 4] - В сборке уже есть сетка от bootstrap-4. Прошу любить и жаловать
* [Табы] - Проверьте, что бы настройки отступов в редакторе были сделаны табами (это важно для PUG файлов)
* [Bem] - При написании кода используем BEM naming (Блок, Элемент, Модификатор)