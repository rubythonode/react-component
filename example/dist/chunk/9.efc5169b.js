webpackJsonp([9],{39:function(e,a,n){var t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},r=React.createClass({displayName:"Example",getPageConfig:function(){return{pageSize:10,currentPage:1,totalNum:88}},onPageChange:function(e){RUI.DialogManager.alert("change:"+e,"提示")},render:function(){return React.createElement("div",{className:"example-pagination"},React.createElement("h2",{className:"title"},"分页",React.createElement("span",null,"Pagination")),React.createElement("h3",{className:"sub-title"},"演示"),React.createElement("div",{className:"example"},React.createElement(RUI.Pagination,t({},this.getPageConfig(),{onPage:this.onPageChange}))),React.createElement("h3",{className:"sub-title"},"源码"),React.createElement("div",{className:"source"},React.createElement("textarea",{defaultValue:n(89)})))}});e.exports=r},89:function(e,a){e.exports='var Example = React.createClass({\r\n    getPageConfig:function() {\r\n        return {\r\n            pageSize:10,\r\n            currentPage:1,\r\n            totalNum:88\r\n        };\r\n    },\r\n    onPageChange:function(currentPage) {\r\n        RUI.DialogManager.alert("change:" + currentPage, "提示");\r\n    },\r\n    render:function() {\r\n        return <div className="example-pagination">\r\n            <h2 className="title">分页<span>Pagination</span></h2>\r\n            <h3 className="sub-title">演示</h3>\r\n            <div className="example">\r\n                <RUI.Pagination {...this.getPageConfig()} onPage={this.onPageChange} />\r\n            </div>\r\n            <h3 className="sub-title">源码</h3>\r\n            <div className="source">\r\n                <textarea defaultValue={require(\'raw!./pagination.js\')} />\r\n            </div>\r\n        </div>;\r\n    }\r\n});\r\n\r\nmodule.exports = Example;'}});