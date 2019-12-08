//定义新增编辑进程规则 除名称外其余信息校验
  $("#progressForm").validate({
    onfocusout: function(element) { $(element).valid(); },
    rules: {
      address: {required: true, notEmpty: true, isExe: true},
      note: {maxlength: 128}
    },
    messages: {
      address: {
        required: "请输入进程名称",
        notEmpty: "请输入进程名称",
        isExe: "请输入正确的exe文件"
      },
      note: {
        maxlength: "备注信息不能超过128个字符"
      }
    },
    /*错误提示位置*/
    errorPlacement: function (error, element) {
      element.parent().addClass("error-item");
      element.parent().append(error);
    },
    success: function (tip) {
      $(tip).parent().removeClass("error-item");
      $(tip).remove();
    },
    submitHandler: function () {
      //校验成功执行
    }
  });