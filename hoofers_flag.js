function loadFlag($){

	$.ajax({
        cache: true,
        dataType: 'jsonp',
        url: 'https://endpoints.wams.doit.wisc.edu/ehs.wisc.edu/LakeConditions/Api/',
        success: showData
    });

	function showData( data ){

		if( typeof data === 'undefined' ){
			return;
		}

		var flag = data.Flag.toLowerCase();
		if (!data.FoundFlag || flag == '') {
            flag = 'none';
        }

        $('.current-flag').addClass(flag);
        //$('.current-condition').text('The current flag is ' + flag + '.');
	}




};