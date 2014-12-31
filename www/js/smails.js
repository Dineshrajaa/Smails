
$(document).ready(function(){
	
	document.addEventListener("deviceready",function(){
	//Device ready	
	var smsplugin = cordova.require("info.asankan.phonegap.smsplugin.smsplugin");	
		$("#mailbtn").tap(mailAvailabilityChecker);
		$("#smsbtn").tap(smsAvailabilityChecker);
	});

//Loaded all the DOM elements
});

	function mailAvailabilityChecker(){		
		window.plugin.email.isServiceAvailable(function(isAvailable){
			if (isAvailable) openMailComposer();
		});
	}

	function smsAvailabilityChecker(){
		alert("I am going to check SMS availability");
		smsplugin.isSupported(function(result){
			if (result) openSmsComposer();
			else toastAlert("SMS Feature not supported in your device"); 
		}); 
	}

	function openMailComposer(){
		window.plugin.email.open({
    to:          ['kumaresan@cgvakindia.com'], // email addresses for TO field
    cc:          ['felix@cgvakindia.com'], // email addresses for CC field
    bcc:         ['dineshkumar.r@cgvakindi.com'], // email addresses for BCC field    										 
    subject:    'Test Mail From Smails', // subject of the email
    body:      'Smails an Simple Phonegap app', // email body (could be HTML code, in this case set isHtml to true)
    isHtml:    false // indicats if the body is HTML or plain text
});
	}

	function openSmsComposer(){
		$(":mobile-pagecontainer").pagecontainer("change","#sms-page");
		$("#sendbtn").tap(sendSms);
	}

	function sendSms(){
		var smsnum=$("#recieverbox").val();
		var smscon=$("#msgbox").val();		
		smsplugin.send(smsnum,smscon,smsSuccess,smsError);
		
	}

	function smsSuccess(result){
		
		 toastAlert("Your Message Sent Successfully");
	}

	function smsError(error){
		 alert("Your SMS not sent "+error);
	}

	function toastAlert(msg){
		window.plugins.toast.showLongCenter(msg);
	}