
$(document).ready(function(){
	
	document.addEventListener("deviceready",function(){
	//Device ready	
	StatusBar.show();
	var smsplugin = cordova.require("info.asankan.phonegap.smsplugin.smsplugin");	
		//$("#mailbtn").tap(openMailComposer);
		//$("#smsbtn").tap(smsAvailabilityChecker);
	});

//Loaded all the DOM elements
});

	/*function mailAvailabilityChecker(){		
		window.plugin.email.isAvailable(function(isAvailable){
			if (isAvailable) openMailComposer();
			else openMailComposer();
		});
	}

	function smsAvailabilityChecker(){
			smsplugin.isSupported(function(result){
			if (result) openSmsComposer();
			else toastAlert("SMS Feature not supported in your device"); 
		}); 
	}*/


	function openMailComposer(){
		window.plugin.email.open({
    to:          ['kumaresan@cgvakindia.com'], // email addresses for TO field
    cc:          ['govardanan@g2tsolutions.com'], // email addresses for CC field
    bcc:         ['dineshkumar.r@cgvakindia.com'],
    attachments: ['relative://drawable/icon.png'], //email addresses for BCC field    										 
    subject:    'Test Mail From Smails', // subject of the email
    body:      'Smails an Simple Phonegap app',//email body (could be HTML code, in this case set isHtml to true)     
    isHtml:    false// indicats if the body is HTML or plain text
    
});
	}

	function openSmsComposer(){
		//Display Custom SMS Composer
		$(":mobile-pagecontainer").pagecontainer("change","#sms-page");
		$("#sendbtn").tap(sendSms);
	}

	function sendSms(){
		//Sends SMS 
		var smsnum=$("#recieverbox").val();
		var smscon=$("#msgbox").val();		
		smsplugin.send(smsnum,smscon,smsSuccess,smsError);
		
	}

	function smsSuccess(result){
		//Called on Sending an SMS successfully
		 toastAlert("Your Message Sent Successfully");
	}

	function smsError(error){
		//On SMS failing
		 alert("Your SMS not sent "+error);
	}

	function toastAlert(msg){
		//Displays Toast alerts 
		window.plugins.toast.showLongCenter(msg);
	}