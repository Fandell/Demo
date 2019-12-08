/**
 * Created by admin on 2019/8/6.
 */
layui.use(['form'], function () {
  var form = layui.form;
  form.render("");

  //定义分组新增/编辑校验规则
  $("#groupForm").validate({
    onfocusout: function (element) {
      $(element).valid();
    },
    //定义日期选择框、普通输入框
    rules: {
      name: {
        required: true,
        notEmpty: true
      },
      tel: {
        required: true,
        notEmpty: true,
        tel: true
      },
      mail: {
        required: true,
        email: true
      },
      note: {
        maxlength: 12
      },
    },
    messages: {
      name: {
        required: "请输入分组名称",
        notEmpty: "请输入分组名称"
      },
      tel: {
        required: "请输入电话",
        notEmpty: "请输入合法电话",
        tel: "请输入合法电话"
      },
      mail: {
        required: '请输入电子邮件',
        email: '请检查电子邮件的格式'
      },
      note: {
        maxlength: "备注信息不能超过128个字符"
      }
    },
    /*错误提示位置*/
    errorPlacement: function (error, element) {
      debugger
      element.parent().addClass("error-item");
      element.parent().append(error);
    },
    success: function (tip) {
      $(tip).parent().removeClass("error-item");
      $(tip).remove();
    },
    submitHandler: function () {
      debugger

    }
  });
});