webpackJsonp([11],{37:function(e,t,a){var n=React.createClass({displayName:"Example",getInitialState:function(){return{init:"init string"}},onInputChange:function(e){RUI.DialogManager.alert("change:"+e.target.value,"提示")},blurHandler:function(e){this.setState({init:Math.random()})},render:function(){return React.createElement("div",{className:"example-input"},React.createElement("h2",{className:"title"},"输入框",React.createElement("span",null,"Input")),React.createElement("h3",{className:"sub-title"},"演示"),React.createElement("div",{className:"example"},React.createElement("h4",{className:"final-title"},"输入框"),React.createElement("div",null,React.createElement(RUI.Input,{value:this.state.init,onChange:this.onInputChange}),React.createElement("br",null),React.createElement(RUI.Input,{className:"small",mode:"static",value:"不可修改"}),React.createElement("br",null),React.createElement(RUI.Input,{onBlur:this.blurHandler,className:"medium",placeholder:"保留正常结点属性"}),React.createElement("br",null),React.createElement(RUI.Input,{className:"large"}),React.createElement("br",null),React.createElement(RUI.Input,{className:"full"})),React.createElement("h4",{className:"final-title"},"文本域"),React.createElement("div",null,React.createElement(RUI.Textarea,{value:this.state.init}))),React.createElement("h3",{className:"sub-title"},"源码"),React.createElement("div",{className:"source"},React.createElement("textarea",{defaultValue:a(87)})))}});e.exports=n},87:function(e,t){e.exports='var Example = React.createClass({\r\n    getInitialState:function() {\r\n        return {\r\n            init:"init string"\r\n        }\r\n    },\r\n    onInputChange:function(e) {\r\n        RUI.DialogManager.alert("change:" + e.target.value, "提示");\r\n    },\r\n    blurHandler:function(e) {\r\n        this.setState({\r\n            init:Math.random()\r\n        });\r\n    },\r\n    render:function() {\r\n        return <div className="example-input">\r\n            <h2 className="title">输入框<span>Input</span></h2>\r\n            <h3 className="sub-title">演示</h3>\r\n            <div className="example">\r\n                <h4 className="final-title">输入框</h4>\r\n                <div>\r\n                    <RUI.Input value={this.state.init} onChange={this.onInputChange} /><br/>\r\n                    <RUI.Input className="small" mode="static" value={"不可修改"}/><br/>\r\n                    <RUI.Input onBlur={this.blurHandler} className="medium" placeholder="保留正常结点属性"/><br/>\r\n                    <RUI.Input className="large"/><br/>\r\n                    <RUI.Input className="full"/>\r\n                </div>\r\n                <h4 className="final-title">文本域</h4>\r\n                <div>\r\n                    <RUI.Textarea value={this.state.init} />\r\n                </div>\r\n            </div>\r\n            <h3 className="sub-title">源码</h3>\r\n            <div className="source">\r\n                <textarea defaultValue={require(\'raw!./input.js\')} />\r\n            </div>\r\n        </div>;\r\n    }\r\n});\r\n\r\nmodule.exports = Example;'}});