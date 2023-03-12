function display_error(e){$("#loading_progress").html(e),$("#upload_btn").attr("disabled",!0)}function trim_it(){$("audio")[0].pause();var e=$("#track_url").val(),a=$("#track_name").val(),t=$("#track_ext").val(),o=$("#begin").val(),r=$("#end").val(),i=$("#folder").val(),n=$("#fadein").prop("checked"),s=$("#fadeout").prop("checked"),d=$("#mode").prop("checked"),l=$("#duration").val(),u=window.location.protocol+"//"+window.location.host;$("#trimming_progress").html('<img src="'+u+'/images/ajax-loader.gif"> Processing...'),$.ajax({url:"crop.php",type:"POST",data:{track_url:e,track_name:a,begin:o,end:r,track_ext:t,folder:i,fadein:n,fadeout:s,mode:d,duration:l},dataType:"json",success:function(e){e.message?$("#trimming_progress").html('<span class="alert alert-danger">'+e.message+"</span>"):($("#crop").hide(),$("#download").show(),$("#down-btn").attr("href","/download.php?date="+e.date+"&file="+e.file),$("html, body").animate({scrollTop:0},"slow"))},error:function(e){$("#crop").hide(),$("#download").show(),$("#info").html("There has been an error processing your request.")}})}$(document).ready(function(){var e,a;e=$("#bar1"),a=$("#percent1"),$("#upload-form").ajaxForm({url:"up-load.php",type:"POST",dataType:"json",beforeSend:function(){e.width("0%"),a.html("0%")},uploadProgress:function(t,o,r,i){var n=i+"%";e.width(n),a.html(n),100==i&&(window.location.protocol,window.location.host,$("#myprogress").hide(),$("#processing").show())},success:function(t){e.width("100%"),a.html("100%"),$("#ag1").attr("data-source",t.url),$("#track_url").val(t.url),$("#track_name").val(t.name),$("#track_ext").children("option:first").val(t.ext).text(t.ext),$("#track_ext").attr("disabled",!1),$("#folder").val(t.folder),$("#duration").val(parseFloat(t.duration).toFixed(2)),t.message&&($("#error").html(t.message),$("#error").show()),$("#upload").hide(),dzsap_init("#ag1",{design_skin:"skin-wave",autoplay:"on"}),$("#crop").show()}}),$("#mode").change(function(){$("#mode").prop("checked")?($(".scrub-prog").css("background","rgba(92, 184, 92, 0.24)"),$("#remove-this").hide(),$("#keep-this").show(),$("#fadein").attr("disabled",!1),$("#fadeout").attr("disabled",!1)):($(".scrub-prog").css("background","rgba(255, 75, 76, 0.24)"),$("#keep-this").hide(),$("#remove-this").show(),$("#fadein").attr("disabled",!0),$("#fadeout").attr("disabled",!0),$("#fadein").prop("checked",!1),$("#fadeout").attr("checked",!1))}),$("#input").change(function(){var e=$("input[type=file]")[0].files[0],a=e.type,t=e.name,o=(t.substring(t.lastIndexOf(".")),document.createElement("audio").canPlayType(a)),r=window.URL||window.webkitURL;if(-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome"))var i="safari";-1!=$.inArray(a,["video/3gpp","audio/amr"])&&(o="no");if("safari"==i&&-1!=$.inArray(a,["audio/x-m4a","audio/x-m4r"])&&(o="no"),this.files&&this.files[0].size>262144000)$("#loading_progress").html("Ooops! Files cannot be bigger than 250MB!"),$("#loading_progress").show(),$("#upload_btn").attr("disabled",!0),$("#myprogress").hide(),this.value="";else if(void 0!==r)switch(o){case"maybe":case"probably":case"yes":r=window.URL||window.webkitURL;var n=t.substr(0,t.lastIndexOf("."))||t,s=r.createObjectURL(e);$(".audio").remove(),$("#ag1").attr("data-source",s),$("#upload").hide(),$("#crop").show(),dzsap_init("#ag1",{design_skin:"skin-wave",autoplay:"on"}),$("#track_name").val(n),$("#crop-button").attr("disabled",!0),$("#playable").val("yes"),$("#myprogress2").show();var d=$("#bar2"),l=$("#percent2");$("#upload-form").ajaxSubmit({url:"up-load.php",type:"POST",dataType:"json",beforeSend:function(){d.width("0%"),l.html("0%")},uploadProgress:function(e,a,t,o){var r=o+"%";if(d.width(r),l.html(r),100==o){var i=window.location.protocol+"//"+window.location.host;$("#myprogress2").hide(),$("#trimming_progress").html('<img src="'+i+'/images/ajax-loader.gif"> Processing...')}else $("#trimming_progress").html("Uploading...")},success:function(e){d.width("100%"),l.html("100%"),$("#folder").val(e.folder),$("#crop-button").attr("disabled",!1),$("#trimming_progress").html(" "),$("#track_url").val(e.url),$("#track_ext").children("option:first").val(e.ext).text(e.ext),$("#track_ext").attr("disabled",!1),$("#duration").val(parseFloat(e.duration).toFixed(2)),e.message&&($("#error").html(e.message),$("#error").show(),$("#crop-button").attr("disabled",!0),$("#folder").val(""),$("#track_name").val(""),$("#duration").val(""))}});break;default:$("#loading_progress").hide(),$("#loading_progress").html(""),$("#upload_btn").attr("disabled",!1),$("#myprogress").show(),$(".audio").remove()}else $("#loading_progress").hide(),$("#loading_progress").html(""),$("#upload_btn").attr("disabled",!1),$("#myprogress").show(),$(".audio").remove()}),$("#back").click(function(){$("#download").hide(),$("#trimming_progress").html(""),$("#crop").show(),$(window).trigger("resize")});var t=$("#begin"),o=$("#end"),r=0,i=0,n=100,s=0;requestAnimationFrame(function e(a){requestAnimationFrame(e);if(a<s)return;s=a+n;if(0!==r){var d=parseFloat($("#begin").val());d+=r,t.val(d.toFixed(2))}if(0!==i){var l=parseFloat($("#end").val());l+=i,o.val(l.toFixed(2))}}),$(".str-but").on("mousedown touchstart",function(e){!function(e){e.preventDefault(),e.stopPropagation(),parseFloat($("#begin").val())<=0?"pl-start"==e.target.id&&(r+=.1):r="pl-start"==e.target.id?.1:-.1}(e)}),$(".str-but").on("mouseup touchend",function(e){!function(e){e.preventDefault(),e.stopPropagation(),parseFloat($("#begin").val())<0?($("#begin").val(parseFloat(0)),$("#myslider").slider("value",0)):$("#myslider").slider("value",$("#begin").val());$("audio")[0].currentTime=$("#begin").val(),r=0}(e)}),$(".str-but").mouseout(function(e){!function(e){e.preventDefault(),e.stopPropagation(),$("#myslider").slider("value",$("#begin").val()),r=0}(e)}),$(".end-but").on("mousedown touchstart",function(e){!function(e){e.preventDefault(),e.stopPropagation(),parseFloat($("#end").val())>=parseFloat($("#duration").val())?"mn-end"==e.target.id&&(i+=-.1):i="pl-end"==e.target.id?.1:-.1}(e)}),$(".end-but").on("mouseup touchend",function(e){!function(e){e.preventDefault(),e.stopPropagation(),parseFloat($("#end").val())>parseFloat($("#duration").val())?($("#end").val(parseFloat($("#duration").val())),$("#myslider2").slider("value",$("#duration").val())):$("#myslider2").slider("value",$("#end").val());$("audio")[0].currentTime=parseFloat($("#end").val())-parseFloat(1.5),i=0}(e)}),$(".end-but").mouseout(function(e){!function(e){e.preventDefault(),e.stopPropagation(),$("#myslider2").slider("value",$("#end").val()),i=0}(e)})});