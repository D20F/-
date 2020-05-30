(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{357:function(t,a,e){"use strict";e.r(a);var s=e(43),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[t._v("#")]),t._v(" Mysql")]),t._v(" "),e("h2",{attrs:{id:"数据库基础操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库基础操作"}},[t._v("#")]),t._v(" 数据库基础操作")]),t._v(" "),e("h3",{attrs:{id:"登陆数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#登陆数据库"}},[t._v("#")]),t._v(" 登陆数据库")]),t._v(" "),e("p",[t._v("需要输密码\nmysql -u root -p")]),t._v(" "),e("h3",{attrs:{id:"退出数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#退出数据库"}},[t._v("#")]),t._v(" 退出数据库")]),t._v(" "),e("p",[t._v("exit")]),t._v(" "),e("h2",{attrs:{id:"数据库操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库操作"}},[t._v("#")]),t._v(" 数据库操作")]),t._v(" "),e("h3",{attrs:{id:"创建数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建数据库"}},[t._v("#")]),t._v(" 创建数据库")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("创建数据库 数据库名为D_data\ncreate database D_data;\n")])])]),e("h3",{attrs:{id:"删除数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除数据库"}},[t._v("#")]),t._v(" 删除数据库")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("删除数据库 数据库名为D_data\ndrop database D_data;\n")])])]),e("h3",{attrs:{id:"选择数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选择数据库"}},[t._v("#")]),t._v(" 选择数据库")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("选择数据库 数据库名为D_data\nuse D_data;\n")])])]),e("h2",{attrs:{id:"表操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表操作"}},[t._v("#")]),t._v(" 表操作")]),t._v(" "),e("h3",{attrs:{id:"创建表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建表"}},[t._v("#")]),t._v(" 创建表")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("CREATE TABLE D_tb(\n    D_id INT NOT NULL AUTO_INCREMENT,\n    D_name VARCHAR(100) NOT NULL,\n    D_title VARCHAR(100) NOT NULL,\n    D_author VARCHAR(40) NOT NULL,\n    D_date DATE,\n    PRIMARY KEY ( D_id, D_name),\n);\n创建表 表名为D_tb\n\nINT VARCHAR DATE 都是定义表内数据的类型\n\n字段使用NOT NULL属性，是因为我们不希望这个字段的值为NULL。\n\n字段的AUTO_INCREMENT属性告诉MySQL自动增加id字段下一个可用编号。\n\n关键字PRIMARY KEY用于定义此列作为主键。可以使用逗号分隔多个列来定义主键。\n")])])]),e("h3",{attrs:{id:"删除表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除表"}},[t._v("#")]),t._v(" 删除表")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("删除表 表名为D_tb\nDROP TABLE D_tb ;\n")])])]),e("h2",{attrs:{id:"数据操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据操作"}},[t._v("#")]),t._v(" 数据操作")]),t._v(" "),e("h3",{attrs:{id:"insert-插入数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#insert-插入数据"}},[t._v("#")]),t._v(" INSERT 插入数据")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("INSERT INTO D_tb (D_name, D_title, D_author, D_date) VALUES ( '名字嗷', '标题嗷', '内容嗷' , NOW());\n\n在表名为D_tb的表里 按照key对应value的方式插入数据\n")])])]),e("h3",{attrs:{id:"select-获取数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#select-获取数据"}},[t._v("#")]),t._v(" SELECT 获取数据")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("SELECT field1, field2,...fieldN table_name1, table_name2...\n[WHERE Clause]\n[OFFSET M ][LIMIT N]\n规则:\nfieled 字段key   table_name1 表名   \n\n可以使用分隔的一个或多个逗号从多个表，以及使用WHERE子句包括各种条件，但WHERE子句是SELECT命令的可选部分\n\n可以在一个SELECT命令指定读取一个或多个字段、可以指定星号(*)代替选择的字段。在这种情况下，将返回所有字段\n\n可以指定任意的条件在 WHERE 子句后面\n\n可以使用OFFSET指定一个偏移量，SELECT从那里开始返回记录。默认情况下 offset 的值是 0，可以使用LIMIT属性限制返回的数量\n\n在D_tb查询所有的字段  \n\nSELECT * from D_tb;\n")])])]),e("h3",{attrs:{id:"update-更新数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#update-更新数据"}},[t._v("#")]),t._v(" UPDATE 更新数据")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("UPDATE table_name SET field1=new-value1, field2=new-value2 [WHERE Clause]\n下面的例子将更新表名为D_tb， 字段D_id为3的纪录中的 D_title 字段。\nUPDATE D_tb SET D_title='嗷' WHERE D_id=3;\n")])])]),e("h3",{attrs:{id:"delete-删除数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delete-删除数据"}},[t._v("#")]),t._v(" DELETE 删除数据")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("DELETE FROM table_name [WHERE Clause]\n如果WHERE子句没有指定，则所有MySQL表中的记录将被删除。\n\n可以指定使用任何条件在WHERE子句中。\n\n下面的例子将删除 tutorial_tbl表中 tutorial_id为3的一条记录。\n\nDELETE FROM tutorials_tbl WHERE tutorial_id=3;\n")])])]),e("h3",{attrs:{id:"alter-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alter-命令"}},[t._v("#")]),t._v(" ALTER 命令")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("当想改变表名，MySQL的ALTER命令非常有用, 在添加或删除任何表字段到现有列在表中。\n重命名表名\ntestalter_tbl重命名为alter_tbl\nALTER TABLE testalter_tbl RENAME TO alter_tbl;\n\n从testalter_tbl表中删除 i 列\nALTER TABLE testalter_tbl DROP i;\n\n从testalter_tbl表中添加 l 列\nALTER TABLE testalter_tbl ADD l INT;\n\n用MODIFY 从testalter_tbl表中更改 c 的类型为CHAR(10)\nALTER TABLE testalter_tbl MODIFY c CHAR(10);\n\n用CHANGE 从testalter_tbl表中修改j 为 a 并将类型改为 INT\nALTER TABLE testalter_tbl CHANGE j a INT;\n")])])]),e("h3",{attrs:{id:"索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引"}},[t._v("#")]),t._v(" 索引")]),t._v(" "),e("h3",{attrs:{id:"where子句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#where子句"}},[t._v("#")]),t._v(" WHERE子句")]),t._v(" "),e("p",[t._v("WHERE可同时查找多个条件")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("操作符")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("描述\t                                                             示例")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("=")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("检查两个操作数的值是否相等，如果是，则条件变为真。")])]),t._v(" "),e("tr",[e("td",[t._v("!=")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("检查两个操作数的值是否相等，如果值不相等，则条件变为真。")])]),t._v(" "),e("tr",[e("td",[t._v(">")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("检查左操作数的值是否大于右操作数的值，如果是，则条件为真。")])]),t._v(" "),e("tr",[e("td",[t._v("<")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("检查左操作数的值是否小于右操作数的值，如果是，则条件为真。")])]),t._v(" "),e("tr",[e("td",[t._v(">=")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("检查左操作数的值是否大于或等于右操作数的值，如果是，则条件为真。")])]),t._v(" "),e("tr",[e("td",[t._v("<=")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("检查左操作数的值是否小于或等于右操作数的值，如果是，则条件变为真。")])])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("SELECT field1, field2,...fieldN table_name1, table_name2...\n[WHERE condition1 [AND [OR]] condition2.....\n\n在D_tb查询所有的字段 ，但是D_name的值需等于标题嗷 \n\nSELECT * from D_tb WHERE D_name='名字嗷';\n")])])]),e("h3",{attrs:{id:"like子句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#like子句"}},[t._v("#")]),t._v(" LIKE子句")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("SELECT field1, field2,...fieldN table_name1, table_name2...\nWHERE field1 LIKE condition1 [AND [OR]] filed2 = 'somevalue'\n\n可以指定使用任何条件在WHERE子句中，可以使用LIKE子句在WHERE子句中，可以使用LIKE子句代替等号(=)\n\n当LIKE连同%符号使用，那么它就会像一个元字符的搜索，可以指定一个以上的条件使用AND或OR运算符\n\nWHERE... LIKE子句可以使用SQL命令的DELETE 或 UPDATE ，也可以指定一个条件\n\n从 tutorials_tbl 表中所有字段搜索 tutorial_author字段以 aul 结尾的所有记录：\n\nSELECT * from tutorials_tbl WHERE tutorial_author LIKE '%aul';\n")])])]),e("h3",{attrs:{id:"order-by子句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#order-by子句"}},[t._v("#")]),t._v(" ORDER BY子句")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("SELECT field1, field2,...fieldN table_name1, table_name2...\nORDER BY field1, [field2...] [ASC [DESC]]\n\n可以排序返回所列出提供的任何字段的结果，可以在多个字段排序结果\n\n可以使用关键字ASC或DESC 决定执行升序或降序排序。\n\nASC升序 DESC降序 默认情况下，按升序排列  \n\n可以使用WHERE ... LIKE子句以通用的方式放置条件\n\n从 tutorials_tbl 表中搜索所有字段 以tutorial_author字段为标升序排列\n\nSELECT * from tutorials_tbl ORDER BY tutorial_author ASC;\n")])])]),e("h3",{attrs:{id:"join联接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#join联接"}},[t._v("#")]),t._v(" Join联接")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("似乎是把几个表连接在一起\n")])])]),e("h3",{attrs:{id:"null值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#null值"}},[t._v("#")]),t._v(" NULL值")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("涉及NULL的条件是特殊的。不能使用= NULL或！= NULL来匹配查找列的NULL值\nIS NOT NULL: 如果列的值不为NULL，运算结果返回 true\nIS NULL: 如果列的值为NULL，运算结果返回 true\n<=>: 运算符比较值，(不同于=运算符)即使两个空值它返回 true\n\n我们应当使用 IS NULL 来判断值是否为NULL\n\nSELECT * FROM tcount_tbl WHERE tutorial_count IS NULL;\n")])])]),e("h3",{attrs:{id:"正则表达式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式"}},[t._v("#")]),t._v(" 正则表达式")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("模式")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("什么样的模式匹配")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("^")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("开始的一个字符串")])]),t._v(" "),e("tr",[e("td",[t._v("$")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("结束的一个字符串")])]),t._v(" "),e("tr",[e("td",[t._v(".")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("任意单个字符")])]),t._v(" "),e("tr",[e("td",[t._v("[...]")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("方括号中列出的任何字符")])]),t._v(" "),e("tr",[e("td",[t._v("[^...]")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("任何字符方括号之间不会被列出")])]),t._v(" "),e("tr",[e("td",[t._v("p1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("p2")])]),t._v(" "),e("tr",[e("td",[t._v("*")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("前一个元素的零个或多个实例")])]),t._v(" "),e("tr",[e("td",[t._v("+")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("前面元素的一或多个实例")])]),t._v(" "),e("tr",[e("td",[t._v("{n}")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("前一个元素的n个实例")])]),t._v(" "),e("tr",[e("td",[t._v("{m,n}")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("前一个元素的 m 到 n 个实例")])])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("现在根据上面的表格，可以在不同的设备类型用SQL查询来满足要求。在这里，列出一些的理解。考虑有一个表称为 person_tbl，它是有一个 name 字段：\n\n查询查找所有以 “st” 开头的名字：\nmysql> SELECT name FROM person_tbl WHERE name REGEXP '^st';\n\n查询找到所有以 'ok' 结尾的名字\nmysql> SELECT name FROM person_tbl WHERE name REGEXP 'ok$';\n\n查询查找其中包含 'mar' 所有的名字\nmysql> SELECT name FROM person_tbl WHERE name REGEXP 'mar';\n\n查询查找以元音 'ok' 结尾的所有名称\nmysql> SELECT name FROM person_tbl WHERE name REGEXP '^[aeiou]|ok$';\n")])])]),e("h2",{attrs:{id:"数据库管理工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据库管理工具"}},[t._v("#")]),t._v(" 数据库管理工具")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" navcat\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);