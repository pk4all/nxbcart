import axios from 'axios'
const accessToken = "EAB8Ua78ecTYBOZBkT2MMoZCYv3ZA4DDCURFFVpymRXf4kppjzd2fy3Asfm2v02gQDZCqXYCVhk8JeqW8CDdlOj41KJ2uZBnYj4cQEHXvMY6O1EInGW27MSZAeaCgCuH803BgfmnjMlBk6NpPuIYUoM15CCjK15aw4d5imPydkMVUWbgZCc1V5HgHjEOFo5mPZAmXLQZDZD";
const apiEndpoint = 'https://graph.facebook.com/v20.0';
const whatsappPhoneNumberId = '418092468045472';

//export default class Whatsapp{

  export async function sendOtpMessage(to:number,otp:number){
        try {
            const recipientPhoneNumber='91'+to;
            const response =  await axios.post(`${apiEndpoint}/${whatsappPhoneNumberId}/messages`, {
                            messaging_product: 'whatsapp',
                            to: recipientPhoneNumber,
                            type: 'template',
                            template: {
                            name: 'send_otp',
                            language: {
                                code: 'en_US',
                            },
                            components: [
                                {
                                    type: 'body',
                                    parameters: [
                                        {
                                        type: 'text',
                                        text: otp.toString(),
                                        },
                                    ],
                                },
                                {
                                    type: 'button',
                                    sub_type: 'url',
                                    index: '0',
                                    parameters: [
                                      {
                                        type: 'text',
                                        text: 'copy',
                                      },
                                    ],
                                  },
                            ],
                            },
                        },{
                            headers: {
                                'Authorization': `Bearer ${accessToken}`,
                                'Content-Type': 'application/json'
                    }});
                    // .then(response => console.log(response.data))
                    // .catch(error => {
                    //     if (error.response) {
                    //       console.error('Error Status:', error.response.status);
                    //       console.error('Error Data:', error.response.data); // Check the error response from the server
                    //     } else {
                    //       console.error('Error Message:', error.message);
                    //     }
                    //   });
                    //.catch(error => console.error(error.message));
                return await response.data;
        } catch (error) {
            throw new Error(error);
        }
    }
//}


