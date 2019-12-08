/**
 * Created by lhr on 2017/7/29.
 * 扩展jquery.validate.js 方法
 */

jQuery.validator.addMethod('username', function(value, element) {
    var reg = /^[\da-zA-Z]{2,16}$/;
    return this.optional(element) || (reg.test(value));
}, "2-16位英文字母数字");
jQuery.validator.addMethod('pwd', function(value, element) {
    var reg = /^[\da-zA-Z.@#-]{8,20}$/;
    var reg1 = /\d/g;
    var reg2 = /[a-z]/gi;
    var reg3 = /[.@#-]/g;

    if((reg1.test(value) && reg2.test(value) && reg.test(value)) ||
        (reg1.test(value) && reg3.test(value) && reg.test(value)) ||
        (reg2.test(value) && reg3.test(value) && reg.test(value))){
            return this.optional(element) || true;
    }
    return this.optional(element) || false;
}, "密码格式为8～20位数字、英文字母（区分大小写）、特殊字符（.@#-）中至少两种以上的组合");
jQuery.validator.addMethod('telephone', function(value, element) {
    var reg = /^[1]([3]|[4]|[5]|[7]|[8]|[9])\d{9}$/;
    return this.optional(element) || (reg.test(value));
}, "请输入合法的手机号码");
jQuery.validator.addMethod('tel', function(value, element) {
    var reg = /(^[1]([3]|[4]|[5]|[7]|[8]|[9])\d{9}$)|^(\d{3,4}-\d{7,8}$)/;
    return this.optional(element) || (reg.test(value));
}, "请输入合法的电话号码");
jQuery.validator.addMethod('pkgName', function(value, element) {
    var reg = /^([\da-zA-Z]+\.)+[\da-zA-Z]+$/;
    return this.optional(element) || (reg.test(value));
}, "请输入合法的应用包名");
jQuery.validator.addMethod('fingerCert', function(value, element) {
    var reg = /^([\da-zA-Z]{2}:){19}[\da-zA-Z]{2}$/;
    return this.optional(element) || (reg.test(value));
}, "请输入合法的证书指纹SHA1");
jQuery.validator.addMethod('email', function(value, element) {
    var reg = /^.*?@.*?\.(com|cn)$/;
    return this.optional(element) || (reg.test(value));
}, "请输入合法的邮箱地址");
jQuery.validator.addMethod('notEmpty', function(value, element) {
    if(value.replace(/[\s\n\t\r]/g, "").length == 0){
        return this.optional(element) || false;
    }
    return this.optional(element) || true;
}, "请输入内容");
jQuery.validator.addMethod('notEmpty2', function(value, element) {
  if(value.replace(/[\s\n\t\r]/g, "").replace(/&nbsp;/g,"").length == 0){
    return this.optional(element) || false;
  }
  return this.optional(element) || true;
}, "请输入内容");
jQuery.validator.addMethod('identifier', function(value, element) {
    var reg = /^\d{17}[xX\d]$/;
    return this.optional(element) || (reg.test(value));
}, "请输入合法的身份证号");
jQuery.validator.addMethod('account', function(value, element) {
    var reg = /^[\da-zA-Z.@-_-]*$/;
    return this.optional(element) || (reg.test(value));
}, "请输入合法的账号");
// jQuery.validator.addMethod('password', function(value, element) {
//     var reg = /^[\da-zA-Z]{6,16}$/;
//     return this.optional(element) || (reg.test(value));
// }, "请输入合法的密码");
jQuery.validator.addMethod('ip', function(value, element) {
    var reg = /^(([0-9]|([1-9][0-9])|[1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])[.]){3}([0-9]|([1-9][0-9])|[1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])$/;
    return this.optional(element) || (reg.test(value));
}, "请输入合法的IP地址");
jQuery.validator.addMethod('ipOrIpRange', function(value, element) {
    var ipRangeReg = /^((([0-9]|([1-9][0-9])|[1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])[.]){3}([0-9]|([1-9][0-9])|[1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])[-])?(([0-9]|([1-9][0-9])|[1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])[.]){3}([0-9]|([1-9][0-9])|[1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])$/;

    if(!ipRangeReg.test(value)){
        return this.optional(element);
    }else{
        if(value.indexOf("-") >= 0){
            //是合法的ip端,需要判断大小
            var startIp = value.split("-")[0];
            var endIp = value.split("-")[1];
            var startIpFormat = "", endIpFormat = "";
            for(var i = 0 ; i < 4 ; i ++ ){
                for(var j = 0 ; j < (3-(startIp.split(".")[i] + "").length) ; j ++ ){
                    startIpFormat += "0";
                }
                startIpFormat += ""+startIp.split(".")[i];

                for(var k = 0 ; k < (3-(endIp.split(".")[i] + "").length) ; k ++ ){
                    endIpFormat += "0";
                }
                endIpFormat += ""+endIp.split(".")[i];
            }
            return (+startIpFormat)<(+endIpFormat) || this.optional(element);
        }else{
            //是ip
            return true;
        }


    }

}, "请输入合法的IP地址或者IP段");
jQuery.validator.addMethod('mask', function(value, element) {
  var reg = /^(255\.255\.255\.(255|254|252|248|240|224|192|128|0))|(255\.255\.(255|254|252|248|240|224|192|128|0)\.0)|(255\.(255|254|252|248|240|224|192|128|0)\.0\.0)|(255|254|252|248|240|224|192|128|0)\.0\.0\.0$/;
  return this.optional(element) || (reg.test(value));
}, "请输入合法的子网掩码");
jQuery.validator.addMethod('isExe', function(value, element) {
    var reg = /\.exe$/;
    return this.optional(element) || (reg.test(value));
}, "请输入正确的exe文件");
jQuery.validator.addMethod('synSign', function(value, element) {
  var reg = /^[a-zA-Z]{1,20}$/;
  return this.optional(element) || (reg.test(value));
}, "系统同步标识格式为1~20位英文字母");
//开始ip大于结束ip地址比较
jQuery.validator.methods.bigIP = function(value, element, param){
    var smallIPVal = $(param).val();
    var bigIPVal = value;
    var ipReg = /^(([0-9]|([1-9][0-9])|[1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])[.]){3}([0-9]|([1-9][0-9])|[1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])$/;
    if(!ipReg.test(smallIPVal)){
        return true;
    }
    if(!ipReg.test(bigIPVal)){
        return true;
    }

    //比较两个ip大小
    var startIp = smallIPVal;
    var endIp = bigIPVal;
    var startIpFormat = "", endIpFormat = "";
    for(var i = 0 ; i < 4 ; i ++ ){
        for(var j = 0 ; j < (3-(startIp.split(".")[i] + "").length) ; j ++ ){
            startIpFormat += "0";
        }
        startIpFormat += ""+startIp.split(".")[i];

        for(var k = 0 ; k < (3-(endIp.split(".")[i] + "").length) ; k ++ ){
            endIpFormat += "0";
        }
        endIpFormat += ""+endIp.split(".")[i];
    }
    return (+startIpFormat)<=(+endIpFormat);
};
//一个数字大于另外一个数字
jQuery.validator.methods.bigNum = function(value, element, param){
  var smallNum = $(param).val();
  var bigNum = value;
  if(+smallNum < +bigNum){
    return true;
  }
  return false;
};