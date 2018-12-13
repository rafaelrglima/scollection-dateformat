//Those collections here are created only on the client side.
scollection.DateFormat.init = function(fieldName){
    var basePath = Meteor.absoluteUrl();
     $('select[name="'+ fieldName +'"]').select2({
        ajax: {
            url: `${basePath}scollection/dateformat/getbyname`,
            type: 'POST',
            dataType: 'json',
            delay: 1000,
            data: function (params) {
                return {
                    q: params.term
                };
            },
            processResults: function (result, params) {
                // parse the results into the format expected by Select2
                // since we are using custom formatting functions we do not need to
                // alter the remote JSON data, except to indicate that infinite
                // scrolling can be used
                params.page = params.page || 1;

                return {
                    results: result.data,
                    pagination: {
                        more: (params.page * 30) < result.total_count
                    }
                };
            },
            cache: false
        },
        multipleselect: false,
        multiple: false,
        //minimumInputLength: 2,
        escapeMarkup: function (markup) {
            return markup;
        },
        templateResult: function(repo){
            var markup = '<div class="clearfix">' +
            '<div class="col-sm-12">' + repo.text + '</div></div>';
            return markup;
        },
        templateSelection: function(repo){
            return repo.text;
        }
    });

    $('select[name="'+ fieldName +'"]').on('select2:select', function (e) {
        //console.log('bairro selected trigger');
    });
}
