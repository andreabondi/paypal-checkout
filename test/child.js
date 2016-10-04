
import 'src/index';

window.console.karma = function() {
    var karma = window.karma || (window.top && window.top.karma) || (window.opener && window.opener.karma);
    if (karma) {
        karma.log('debug', arguments);
    }
    console.log.apply(console, arguments);
};

window.xchild.props.paymentToken().then(paymentToken => {

    let hash = window.location.hash ? `&hash=${window.location.hash.slice(1)}` : '';

    window.xchild.props.onPaymentAuthorize({
        paymentToken,
        cancelUrl: `#cancel?token=${paymentToken}`,
        returnUrl: `#return?token=${paymentToken}&PayerID=YYYYYYYYYYYYY${ hash }`
    });
});