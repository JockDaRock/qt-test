var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = "35ef10ca8b5e9de04013c5c54b1ba5304c87b95a"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix['X-Cisco-Meraki-API-Key'] = "Token"

var api = new MerakiDashboardApi.AccessControlListsApi()
var networkId = "L_566327653141850389"; // {String} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getNetworkSwitchAccessControlLists(networkId, callback);