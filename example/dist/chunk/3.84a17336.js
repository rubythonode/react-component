webpackJsonp([3],{45:function(e,t,n){var a=React.createClass({displayName:"CheckboxItemRender",getInitialState:function(){return{selected:this.props.selected||0}},componentWillReceiveProps:function(e){"undefined"!=typeof e.selected&&this.setState({selected:!!e.selected})},setData:function(e,t){this.setState(e)},changeHandler:function(){this.props.onClick&&this.props.onClick(this.state)},render:function(){return React.createElement(RUI.Checkbox,{selected:this.state.selected,onChange:this.changeHandler})}}),r=React.createClass({displayName:"OperationItemRender",setData:function(e){this.setState(e)},clickHandler:function(){this.props.onClick&&this.props.onClick(this.state)},render:function(){return React.createElement(RUI.Button,{onClick:this.clickHandler},this.props.children)}}),l=React.createClass({displayName:"SortTitleRender",setData:function(e){this.setState(e)},render:function(){return React.createElement("a",this.props,"排序")}}),i=React.createClass({displayName:"Example",getInitialState:function(){return{ajaxData:[],fullData:[{id:1,name:"张三",phone:"13312341234",prov:"北京",role:"管理员",desc:{tag:"影视 娱乐"}},{id:2,name:"李四",phone:"18912341234",prov:"四川",role:"超级管理员",desc:{tag:"IT 编程"}},{id:3,name:"王五",phone:"13512341234",prov:"杭州",role:"编辑",desc:{tag:"数码 科技"}},{id:4,name:"张三",phone:"13312341234",prov:"北京",role:"管理员",desc:{tag:"影视 娱乐"}},{id:5,name:"李四",phone:"18912341234",prov:"四川",role:"超级管理员",desc:{tag:"IT 编程"}},{id:6,name:"王五",phone:"13512341234",prov:"杭州",role:"编辑",desc:{tag:"数码 科技"}},{id:7,name:"张三",phone:"13312341234",prov:"北京",role:"管理员",desc:{tag:"影视 娱乐"}},{id:8,name:"李四",phone:"18912341234",prov:"四川",role:"超级管理员",desc:{tag:"IT 编程"}},{id:9,name:"王五",phone:"13512341234",prov:"杭州",role:"编辑",desc:{tag:"数码 科技"}},{id:10,name:"张三",phone:"13312341234",prov:"北京",role:"管理员",desc:{tag:"影视 娱乐"}},{id:11,name:"李四",phone:"18912341234",prov:"四川",role:"超级管理员",desc:{tag:"IT 编程"}},{id:12,name:"王五",phone:"13512341234",prov:"杭州",role:"编辑",desc:{tag:"数码 科技"}}],data:this.getData().map(function(e){return e.selected=!0,e})}},componentDidMount:function(){this.setState({ajaxData:this.state.data.concat({id:4,name:"张三44444",phone:"13312341234",prov:"北京",role:"管理员",desc:{tag:"影视 娱乐"}})}),setTimeout(function(){var e=this.state.ajaxData;e.splice(0,3),this.setState({ajaxData:e.concat({id:5,name:"张三5555",phone:"13312341234",prov:"北京",role:"管理员",desc:{tag:"影视 娱乐"}})})}.bind(this),2e3)},columnsFilter:function(e){var t=e.findIndex(function(e){return"selected"==e});return t>-1&&e.splice(t,1),e},getData:function(){return[{id:1,name:"张三",phone:"13312341234",prov:"北京",role:"管理员",desc:{tag:"影视 娱乐"}},{id:3,name:"李四",phone:"18912341234",prov:"四川",role:"超级管理员",desc:{tag:"IT 编程"}},{id:2,name:"王五",phone:"13512341234",prov:"杭州",role:"编辑",desc:{tag:"数码 科技"}}]},sortData:function(){var e=Array.prototype.slice.call(this.state.data);e.sort(function(e,t){return e.id-t.id}),this.setState({data:e})},tableDelete:function(e){RUI.DialogManager.alert(JSON.stringify(e))},fieldFormat:function(e,t){return(e+"").replace(/(\d{3})(\d{4})(\d{4})/g,function(e,t,n,a){return t+"-"+n+"-"+a})},allCheck:function(){var e=this.isAllCheck();this.setState({data:this.state.data.map(function(t){return t.selected=e?!1:!0,t})})},isAllCheck:function(){return!this.state.data.some(function(e){return!e.selected})},checkItem:function(e){this.setState({data:this.state.data.map(function(t){return t.id==e.id&&(t.selected=!t.selected),t})})},render:function(){var e=this.state.data;return React.createElement("div",{className:"example-input"},React.createElement("h2",{className:"title"},"表格",React.createElement("span",null,"Table")),React.createElement("h3",{className:"sub-title"},"演示"),React.createElement("div",{className:"example"},React.createElement("h4",{className:"final-title"},"默认表格"),React.createElement("div",null,React.createElement(RUI.Table,{dataSource:e})),React.createElement("h4",{className:"final-title"},"动态渲染-过滤列名"),React.createElement("div",null,React.createElement(RUI.Table,{dataSource:this.state.ajaxData,columnsFilter:this.columnsFilter})),React.createElement("h4",{className:"final-title"},"自定义标题格"),React.createElement("div",null,React.createElement(RUI.Table,{dataSource:e,itemHeight:72},React.createElement(RUI.Column,{dataField:"id",width:80},React.createElement(RUI.Table.TitleRender,null,React.createElement(l,{onClick:this.sortData}))),React.createElement(RUI.Column,{title:"头像"},React.createElement(RUI.Table.ItemRender,null,React.createElement("img",{src:"http://5doe.com/custom/demo/images/wave_photo_1.jpg",style:{height:80}}))),React.createElement(RUI.Column,{title:"用户名",dataField:"name"}),React.createElement(RUI.Column,{title:"手机号",dataField:"phone",fieldFunction:this.fieldFormat}),React.createElement(RUI.Column,{title:"描述标签",dataField:"desc.tag"}),React.createElement(RUI.Column,{title:"角色",dataField:"role"}))),React.createElement("h4",{className:"final-title"},"自定义单元格"),React.createElement("div",null,React.createElement(RUI.Table,{dataSource:e},React.createElement(RUI.Column,{width:75},React.createElement(RUI.Table.TitleRender,null,React.createElement(a,{onClick:this.allCheck,selected:this.isAllCheck()})),React.createElement(RUI.Table.ItemRender,null,React.createElement(a,{onClick:this.checkItem}))),React.createElement(RUI.Column,{title:"用户名",dataField:"name"}),React.createElement(RUI.Column,{title:"手机号",dataField:"phone"}),React.createElement(RUI.Column,{title:"省份",dataField:"prov",width:75}),React.createElement(RUI.Column,{title:"角色",dataField:"role",width:75}),React.createElement(RUI.Column,{title:"操作"},React.createElement(RUI.Table.ItemRender,null,React.createElement(r,{onClick:this.tableDelete},"删除"))))),React.createElement("h4",{className:"final-title"},"固定高度-滚动条"),React.createElement("div",null,React.createElement(RUI.Table,{height:200,dataSource:this.state.fullData}))),React.createElement("h3",{className:"sub-title"},"源码"),React.createElement("div",{className:"source"},React.createElement("textarea",{defaultValue:n(95)})))}});e.exports=i},95:function(e,t){e.exports='var CheckboxItemRender = React.createClass({\r\n    getInitialState:function() {\r\n        return {\r\n            selected:this.props.selected || 0\r\n        };\r\n    },\r\n    componentWillReceiveProps:function(nextProps) {\r\n        if(typeof nextProps.selected != \'undefined\') {\r\n            this.setState({\r\n                selected:!!nextProps.selected\r\n            });\r\n        }\r\n    },\r\n    setData:function(data, field) {\r\n        this.setState(data);\r\n    },\r\n    changeHandler:function() {\r\n        this.props.onClick && this.props.onClick(this.state);\r\n    },\r\n    render:function() {\r\n        return <RUI.Checkbox selected={this.state.selected} onChange={this.changeHandler} />\r\n    }\r\n});\r\n\r\nvar OperationItemRender = React.createClass({\r\n    setData:function(data) {\r\n        this.setState(data);\r\n    },\r\n    clickHandler:function() {\r\n        this.props.onClick && this.props.onClick(this.state);\r\n    },\r\n    render:function() {\r\n        return <RUI.Button onClick={this.clickHandler}>{this.props.children}</RUI.Button>;\r\n    }\r\n});\r\n\r\nvar SortTitleRender = React.createClass({\r\n    setData:function(data) {\r\n        this.setState(data);\r\n    },\r\n    render:function() {\r\n        return <a {...this.props}>排序</a>;\r\n    }\r\n});\r\n\r\nvar Example = React.createClass({\r\n    getInitialState:function() {\r\n        return {\r\n            ajaxData:[],\r\n            fullData:[\r\n                {id:1,name:"张三",phone:"13312341234", prov:"北京", role:"管理员", desc:{tag:\'影视 娱乐\'}},\r\n                {id:2,name:"李四",phone:"18912341234", prov:"四川", role:"超级管理员", desc:{tag:\'IT 编程\'}},\r\n                {id:3,name:"王五",phone:"13512341234", prov:"杭州", role:"编辑", desc:{tag:\'数码 科技\'}},\r\n                {id:4,name:"张三",phone:"13312341234", prov:"北京", role:"管理员", desc:{tag:\'影视 娱乐\'}},\r\n                {id:5,name:"李四",phone:"18912341234", prov:"四川", role:"超级管理员", desc:{tag:\'IT 编程\'}},\r\n                {id:6,name:"王五",phone:"13512341234", prov:"杭州", role:"编辑", desc:{tag:\'数码 科技\'}},\r\n                {id:7,name:"张三",phone:"13312341234", prov:"北京", role:"管理员", desc:{tag:\'影视 娱乐\'}},\r\n                {id:8,name:"李四",phone:"18912341234", prov:"四川", role:"超级管理员", desc:{tag:\'IT 编程\'}},\r\n                {id:9,name:"王五",phone:"13512341234", prov:"杭州", role:"编辑", desc:{tag:\'数码 科技\'}},\r\n                {id:10,name:"张三",phone:"13312341234", prov:"北京", role:"管理员", desc:{tag:\'影视 娱乐\'}},\r\n                {id:11,name:"李四",phone:"18912341234", prov:"四川", role:"超级管理员", desc:{tag:\'IT 编程\'}},\r\n                {id:12,name:"王五",phone:"13512341234", prov:"杭州", role:"编辑", desc:{tag:\'数码 科技\'}}\r\n            ],\r\n            data:this.getData().map(function(item) {\r\n                item.selected = true;\r\n                return item;\r\n            })\r\n        };\r\n    },\r\n    componentDidMount:function() {\r\n        // 你就假设这儿有一个ajax请求吧\r\n        this.setState({\r\n            ajaxData:this.state.data.concat({\r\n                id:4,name:"张三44444",phone:"13312341234", prov:"北京", role:"管理员", desc:{tag:\'影视 娱乐\'}\r\n            })\r\n        });\r\n\r\n        setTimeout(function() {\r\n            var list = this.state.ajaxData;\r\n            list.splice(0, 3);\r\n            this.setState({\r\n                ajaxData:list.concat({\r\n                    id:5,name:"张三5555",phone:"13312341234", prov:"北京", role:"管理员", desc:{tag:\'影视 娱乐\'}\r\n                })\r\n            });\r\n        }.bind(this), 2000);\r\n    },\r\n    columnsFilter:function(keys) {\r\n        var index = keys.findIndex(function(item) {\r\n            return item == \'selected\';\r\n        });\r\n        if(index > -1) {\r\n            keys.splice(index, 1);\r\n        }\r\n        return keys;\r\n    },\r\n    getData:function() {\r\n        return [\r\n            {id:1,name:"张三",phone:"13312341234", prov:"北京", role:"管理员", desc:{tag:\'影视 娱乐\'}},\r\n            {id:3,name:"李四",phone:"18912341234", prov:"四川", role:"超级管理员", desc:{tag:\'IT 编程\'}},\r\n            {id:2,name:"王五",phone:"13512341234", prov:"杭州", role:"编辑", desc:{tag:\'数码 科技\'}}\r\n        ];\r\n    },\r\n    sortData:function() {\r\n        var array = Array.prototype.slice.call(this.state.data);\r\n        array.sort(function(a, b) {\r\n            return a.id - b.id;\r\n        });\r\n        this.setState({\r\n            data:array\r\n        });\r\n    },\r\n    tableDelete:function(data) {\r\n        RUI.DialogManager.alert(JSON.stringify(data));\r\n    },\r\n    fieldFormat:function(data, source) {\r\n        return (data+"").replace(/(\\d{3})(\\d{4})(\\d{4})/g, function(match, a1, a2, a3) {\r\n            return a1 + \'-\' + a2 + \'-\' + a3;\r\n        });\r\n    },\r\n    allCheck:function() {\r\n        var isAllCheck = this.isAllCheck();\r\n        this.setState({\r\n            data:this.state.data.map(function(item) {\r\n                item.selected = isAllCheck ? false : true;\r\n                return item;\r\n            })\r\n        });\r\n    },\r\n    isAllCheck:function() {\r\n        return !this.state.data.some(function(item) {\r\n            return !item.selected;\r\n        });\r\n    },\r\n    checkItem:function(data) {\r\n        this.setState({\r\n            data:this.state.data.map(function(item) {\r\n                if(item.id == data.id) {\r\n                    item.selected = !item.selected;\r\n                }\r\n                return item;\r\n            })\r\n        });\r\n    },\r\n    render:function() {\r\n        var sourceData = this.state.data;\r\n\r\n        return <div className="example-input">\r\n            <h2 className="title">表格<span>Table</span></h2>\r\n            <h3 className="sub-title">演示</h3>\r\n            <div className="example">\r\n                <h4 className="final-title">默认表格</h4>\r\n                <div>\r\n                    <RUI.Table dataSource={sourceData}/>\r\n                </div>\r\n                <h4 className="final-title">动态渲染-过滤列名</h4>\r\n                <div>\r\n                    <RUI.Table dataSource={this.state.ajaxData} columnsFilter={this.columnsFilter} />\r\n                </div>\r\n                <h4 className="final-title">自定义标题格</h4>\r\n                <div>\r\n                    <RUI.Table dataSource={sourceData} itemHeight={72}>\r\n                        <RUI.Column dataField={"id"} width={80}>\r\n                            <RUI.Table.TitleRender>\r\n                                <SortTitleRender onClick={this.sortData} />\r\n                            </RUI.Table.TitleRender>\r\n                        </RUI.Column>\r\n                        <RUI.Column title={"头像"}>\r\n                            <RUI.Table.ItemRender>\r\n                                <img src="http://5doe.com/custom/demo/images/wave_photo_1.jpg" style={{height:80}} />\r\n                            </RUI.Table.ItemRender>\r\n                        </RUI.Column>\r\n                        <RUI.Column title={"用户名"} dataField={"name"} />\r\n                        <RUI.Column title={"手机号"} dataField={"phone"} fieldFunction={this.fieldFormat} />\r\n                        <RUI.Column title={"描述标签"} dataField={"desc.tag"} />\r\n                        <RUI.Column title={"角色"} dataField={"role"} />\r\n                    </RUI.Table>\r\n                </div>\r\n                <h4 className="final-title">自定义单元格</h4>\r\n                <div>\r\n                    <RUI.Table dataSource={sourceData}>\r\n                        <RUI.Column width={75}>\r\n                            <RUI.Table.TitleRender>\r\n                                <CheckboxItemRender onClick={this.allCheck} selected={this.isAllCheck()} />\r\n                            </RUI.Table.TitleRender>\r\n                            <RUI.Table.ItemRender>\r\n                                <CheckboxItemRender onClick={this.checkItem} />\r\n                            </RUI.Table.ItemRender>\r\n                        </RUI.Column>\r\n                        <RUI.Column title={"用户名"} dataField={"name"}/>\r\n                        <RUI.Column title={"手机号"} dataField={"phone"} />\r\n                        <RUI.Column title={"省份"} dataField={"prov"} width={75} />\r\n                        <RUI.Column title={"角色"} dataField={"role"} width={75} />\r\n                        <RUI.Column title={"操作"}>\r\n                            <RUI.Table.ItemRender>\r\n                                <OperationItemRender onClick={this.tableDelete}>删除</OperationItemRender>\r\n                            </RUI.Table.ItemRender>\r\n                        </RUI.Column>\r\n                    </RUI.Table>\r\n                </div>\r\n                <h4 className="final-title">固定高度-滚动条</h4>\r\n                <div>\r\n                    <RUI.Table height={200} dataSource={this.state.fullData}/>\r\n                </div>\r\n            </div>\r\n            <h3 className="sub-title">源码</h3>\r\n            <div className="source">\r\n                <textarea defaultValue={require(\'raw!./table.js\')} />\r\n            </div>\r\n        </div>;\r\n    }\r\n});\r\n\r\nmodule.exports = Example;'}});