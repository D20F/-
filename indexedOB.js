/**
 * 数据库操作 
 * @param {function} open_dataBase    打开数据库
 * @param {function} delete_dataBase  删除数据库
 * 
 * 表操作
 * @param {function} get_table        获取表对象
 * @param {function} created          创建表
 * @param {function} readAll          遍历表
 * @param {function} add              增加数据
 * @param {function} update           更新数据
 * @param {function} get              获取指定索引数据
 * @param {function} remove           删除指定索引
 * @param {function} addIndex         增加索引
**/

/**
 * 打开数据库  没有就创建     db数据库对象
 * @param {string} name 数据库名称
**/
function open_dataBase(name) {
  var request = window.indexedDB.open(name, 1);
  var db;
  request.onerror = function (event) { console.log('打开数据库报错',event); };
  request.onupgradeneeded = function (event) { console.log('打开数据库,数据库升级',event); }
  request.onsuccess = function (event) {
    // 数据库对象db的创建
    db = event.target.result;
    console.log('打开数据库成功',event);
  };
  db = request.result;
  return db
}
/**
 * 删除数据库 
 * @param {string} name 数据库名称
**/
function delete_dataBase(name) {
  var request = window.indexedDB.deleteDatabase(name);
  request.onerror = function (event) { console.log('删除数据库报错'); };
  request.onsuccess  = function (event) { console.log('删除数据库成功'); };
}

/**
 * 获取表对象
 * @param {object} database 数据库对象
 * @param {string} table_name 表名
**/
function get_table(database,table_name){
  return database.transaction([table_name], "readwrite").objectStore(table_name);
}
/**
 * 创建表
 * @param {object} database 数据库对象
 * @param {string} table_name 表名
 * @param {boolean} mode 是否使用表自带的自增数字主键  ture代表使用
 * @param {string} index 指定表的主键索引
**/
function created(database,table_name,mode,index){
  // 检测是否已经有这个表
  if (!database.objectStoreNames.contains(table_name)) {
    if(mode){
      // 使用数据库自带的自增数字主键
       database.createObjectStore(table_name, { autoIncrement: true });
    }else{
      // 使用自己数据的属性作为主键   主键必须为唯一值
      database.createObjectStore(table_name, { keyPath: index });
    }
  }else{
    console.log('已有此',table_name,'了')
  }
}

/**
 * 遍历表
 * @param {object} database 数据库对象
 * @param {string} table_name 表名
**/
function readAll() {
  database.transaction(table_name).objectStore(table_name).openCursor().onsuccess = function (event) {
    var cursor = event.target.result;
    if (cursor) {
      console.log('Id: ' + cursor.key);
      console.log('Name: ' + cursor.value.name);
      console.log('Age: ' + cursor.value.age);
      console.log('Email: ' + cursor.value.email);
      cursor.continue();
    } else {
      console.log('没有更多数据了！');
    }
  }
}

/**
 * 增加数据
 * @param {object} database 数据库对象
 * @param {string} table_name 表名  格式['dataone','datatwo'] --可以为多个表同时做操作
 * @param {object} data 增加的信息  
**/
function add(database,table_name,data) {
  database.transaction([table_name], "readwrite").objectStore(table_name).add(data)
}

/**
 * 更新数据
 * @param {object} database 数据库对象
 * @param {string} table_name 表名  格式['dataone','datatwo'] --可以为多个表同时做操作
 * @param {object} data 更新的信息 会更新主键id为1的数据  { id: 1, name: '李四', age: 35, email: 'lisi.com' }  
**/
function update(database,table_name,data) {
  database.transaction([table_name], "readwrite").objectStore(table_name).put(data)
}

/**
 * 获取指定索引数据
 * @param {object} database 数据库对象
 * @param {string} table_name 表名
 * @param {string} index 索引名称
**/
function get(database,table_name,index) {
  database.transaction([table_name]).objectStore(table_name).index(index);
}

/**
 * 删除指定索引
 * @param {object} database 数据库对象
 * @param {string} table_name 表名  格式['dataone','datatwo'] --可以为多个表同时做操作
 * @param {string} index 索引 可是主键也可以是索引  
**/
function remove(database,table_name,index) {
  database.transaction([table_name], "readwrite").objectStore(table_name).delete(index);
}

/**
 * 增加索引
 * @param {object} database 数据库对象
 * @param {string} table_name 表名  格式['dataone','datatwo'] --可以为多个表同时做操作
 * @param {string} index 索引名  
**/
function addIndex(database,table_name) {
  // unique 代表索引是否是唯一值 true真 false假
  database.transaction([table_name], 'readonly').objectStore(table_name).createIndex(index, index, { unique: true });
}







