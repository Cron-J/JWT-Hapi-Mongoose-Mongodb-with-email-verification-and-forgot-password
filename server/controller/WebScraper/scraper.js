var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var phantom = require('phantom');
exports.getdata = {
    

    handler: function(req, reply) {        
        
        request({url:req.payload.dataurl,headers:{'User-Agent':'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.4 (KHTML, like Gecko) Chrome/5.0.375.125 Safari/533.4'}}, function (error, response, html) {
           
          if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html);

            // var title, release, rating;
            var json = [];
            json.rating=$('.bigStar').text();
            // console.log("=====$======",html);
            $('.gd-row').each(function(){
                var obj={};
                var mimg=$('.imgWrapper img',this).attr("src");
                var timg=$('table td img',this).attr("src");
                $('ul li').each(function(){
                    var limg=$('a img',this).attr('src');
                    var txt=$('#fk_pers_title',this).text();
                    var link=$('#fk_pers_title',this).attr("href");
                    var objk={};
                    // var price=$('.price final-price').text();
                    // var off=$('.fk-font-small fk-discount').text();
                    if(limg){
                        objk.img=limg;
                    }
                    if(txt){
                        objk.title=txt;                        
                    }
                    if(link){
                        objk.linkUrl=link;                        
                    }
                    if(objk && objk!={} && Object.keys(objk).length != 0){
                        json.push(objk);
                        // console.log("===result==",objk);
                    }
                });
                var linkUrl=$('table td a',this).attr("href");
                var title=$('table td a span',this).text();                
                if(mimg){
                    obj.img=mimg;
                }  
                else if(timg){
                    obj.img=timg;
                    obj.linkUrl=linkUrl;
                    obj.title=title;
                } 
                if(obj && obj!={} && Object.keys(obj).length != 0) json.push(obj);
                console.log("===result==",json);
                // reply(JSON.Stringfy(json));
            }); 
           
          }          
          
        })
        
    }
};