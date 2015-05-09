$(function(){


    $('#search-term').submit(function(event){
        event.preventDefault();
        var searchTerm=$('#query').val();
        console.log("test string :"+searchTerm);
        getRequest(searchTerm);
    })
        /* 
        //GET METHOD 2
        $.get('http://omdbapi.com/?s=sex&r=json',function(suData){
            sData=suData.Search;
            console.log(sData);
        },'json')
        */
});



//PRINT ALL ELEMENTS METHOD 2
function showresults (sData) {
    /*
    //PRINT ALL ELEMENTS METHOD 1
        for (var i=0;i<sData.length;i++)
        {
            console.log("DEBUG:"+sData[i].Title);
        };
    */
    $.each(sData,function(index,line)
            {
                
                //console.log("1st"+line);
                console.log("DB2:"+line.Title);
                $("#search-results").append("<p>"+line.Title+"</p>");
            });
};

function showresults2 (sData) {
    var items="";
    $.each(sData,function(index,line)
            {
                items+="<p>"+line.Title+"</p>"
                            
                //console.log("1st"+line);
                console.log("DB2:"+line.Title);

            });
    $("#search-results").html(items);   
};

function getRequest (searchTerm){
    var params = {
        s:searchTerm,
        r:'json'
    };
    console.log(params);
    url='http://www.omdbapi.com';
    $.getJSON(url,params,function(sData){
        showresults2(sData.Search);
    });
};