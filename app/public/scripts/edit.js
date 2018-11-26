     $(document).ready(function () {
          $('.editbtn').click(function () {
              if ($(this).html() == 'Edit') {
                  $(this).parent().parent().children('li').last().prop('contenteditable', true);
              } else {
                  $(this).parent().parent().children('li').last().prop('contenteditable', false);
                  var commentText = $(this).parent().parent().children('li').last().val();
                  var idcomment = $(this).parent().parent().children('li').eq(4).val();
                  var idpost = $(this).parent().parent().children('li').eq(3).val();

                  console.log(idpost);

                  $.ajax({
                        type: 'POST',
                        url: '/comment/update',
                        data: { idcomment: idcomment , commentText: commentText, idpost: idpost},
                        dataType: 'json',
                        success: function(resultData) {
                           alert(resultData);
                        }
                      });
              }
    
              $(this).html($(this).html() == 'Edit' ? 'Save' : 'Edit')
    
          });
    
      });