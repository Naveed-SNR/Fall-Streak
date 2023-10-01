//This component maybe required in future after deployment to implment UPI payment (Google requires the website to be verified and you need to provide the url of your website for that. This is only possible after deployment)
import GooglePayButton from "@google-pay/button-react"

export default function GooglePay() {
  return (
    <>
        <GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'UPI',
        tokenizationSpecification: {
          type: 'DIRECT',
          parameters: {
            payeeAddress: 'your_upi_address@example.com', // Replace with your UPI address
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: 100,
      currencyCode: 'USD',
      countryCode: 'US',
    },
    emailRequired:true,
    buttonType:"book"
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
/>
    </>
    
  )
}