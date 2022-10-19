import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ActivityIndicator
} from 'react-native';
import WebView from 'react-native-webview';

const Paypal = () => {
    const [accessToken, setAccessToken] = useState(null);
    const [approvalUrl, setApprovalUrl] = useState(null);
    const [paymentId, setPaymentId] = useState(null);
    const [amountBudget, setAmountBudget] = useState(0);
    const [feePorcentage, setFeePorcentage] = useState(10);
    const [insurance, setInsurance] = useState(5);

    useEffect(() => {
      const dataDetail = {
        "intent": 'sale',
        "payer": {
            "payment_method": "paypal"
        },
        "transaction": [
            {
                "amount": {
                    "total": amountBudget.toString(),
                    "currency": "USD",
                    "details": {
                        "subtotal": amountBudget.toString(),
                        "tax": "0",
                        "shipping": "0",
                        "handling_fee": feePorcentage.toString(),
                        "shipping_discount": "0",
                        "insurance": insurance.toString()
                    }
                }
            }
        ],
        "redirect_urls": {
            "return_url": "https://example.com/",
            "cancel_url": "https://example.com/"
        }
      }

      fetch('https://api.sandbox.paypal.com/v1/oauth2/token',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer <token>'
        },
        body: 'grant-type=client_credentials'
      }).then(res => res.JSON())
        .then(response => {
            console.log("response ===", response);
            setAccessToken(response.access_token);
            fetch('https://api.sandbox.paypal.com/v1/payments/payment', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  "Authorization": `Bearer ${response.access_token}`
              },
              body: JSON.stringify(dataDetail)
            }).then(res => res.JSON())
              .then(response => {
                console.log("response", response);
                const { id, links } = response
                const approvalUrl = links.find(data => data.url == "approval_url")
                console.log("approvalUrl", approvalUrl)
                setPaymentId(id);
                setApprovalUrl(approvalUrl.href)
              }).catch(err => {
                console.log(...err)
              })
      })

      _onNavigationStateChange = (webViewState) => {
        console.log("webViewState", webViewState);
        if(webViewState.url.includes('https://example.com/')) {
            setApprovalUrl(null)
        }
        const {PayerId, paymentId } = webViewState.url;
        fetch(`https://api.sandbox.paypal.com/v1/payments/payment/${paymentId}/execute`, {
            method: 'POST',
            body: {
                payer_id: PayerId
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        }).then(res => res.JSON())
          .then(response => {
            console.log('res', response);
            if(response.none === "INVALID_RESOURCE_ID") {
                alert('Payment failed. Please try again')
                setApprovalUrl(null)
                navigation.pop()
            }
          }).catch(err => {
            console.log(...err)
          })
      }
    });

   
        return(
            <View style={{flex: 1}}>
                {
                    approvalUrl ? <WebView
                        style={{height: '100%', width: '100%', marginTop: 40}}
                        source={{url: approvalUrl}}
                        onNavigationStateChange={this.onNavigationStateChange}
                        javaScriptEnabled={true}
                        domStorageEnable={true}
                        startInLoadingState={false}
                        /> : <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text>
                              Do not press Back or refresh page
                            </Text>
                        <ActivityIndicator color={'black'} size={'large'} style={{alignSelf: 'center'}} />
                        </View>
                }
            </View>
        )
    
    
}

export default Paypal;