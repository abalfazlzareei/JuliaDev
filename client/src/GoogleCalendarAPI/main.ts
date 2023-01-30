import { gapi, loadAuth2, loadAuth2WithProps, loadClientAuth2 } from 'gapi-script';

const CLIENT_ID =
  "950599255536-9l6d51r5pq4e8g9lb4ipu6e0i9np5buc.apps.googleusercontent.com";
const API_KEY = "AIzaSyCGhadIIMjCft3Ff9j0uWH-zFg0bJvRadc";



const SCOPES = "https://www.googleapis.com/auth/calendar";

export let auth2 = await loadAuth2(gapi, CLIENT_ID, SCOPES);

if (auth2) console.log({auth2});

      // let tokenClient;
      // let gapiInited = false;
      // let gisInited = false;

      //       function gapiLoaded() {
      //   gapi.load('client', initializeGapiClient);


      // async function initializeGapiClient() {
      //   await gapi.client.init({
      //     apiKey: API_KEY,
      //     // discoveryDocs: [DISCOVERY_DOC],
      //   });
      //   gapiInited = true;
      //   // maybeEnableButtons();
      // };

      //      function gisLoaded() {
      //   tokenClient = google.accounts.oauth2.initTokenClient({
      //     client_id: CLIENT_ID,
      //     scope: SCOPES,
      //     callback: '', // defined later
      //   });
      //   gisInited = true;
      //   // maybeEnableButtons();
      // };

      // //    function maybeEnableButtons() {
      // //   if (gapiInited && gisInited) {
      // //     document.getElementById('authorize_button').style.visibility = 'visible';
      // //   }
      // // };

      //       function handleAuthClick() {
      //   tokenClient.callback = async (resp) => {
      //     if (resp.error !== undefined) {
      //       throw (resp);
      //     }
      //     // await listUpcomingEvents();
      //   };

      //   if (gapi.client.getToken() === null) {
      //     // Prompt the user to select a Google Account and ask for consent to share their data
      //     // when establishing a new session.
      //     tokenClient.requestAccessToken({prompt: 'consent'});
      //   } else {
      //     // Skip display of account chooser and consent dialog for an existing session.
      //     tokenClient.requestAccessToken({prompt: ''});
      //   }
      // };

      //       function handleSignoutClick() {
      //   const token = gapi.client.getToken();
      //   if (token !== null) {
      //     google.accounts.oauth2.revoke(token.access_token);
      //     gapi.client.setToken('');
      //   }
      // };

