# MerakiDashboardApi.MerakiAuthUsersApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNetworkMerakiAuthUser**](MerakiAuthUsersApi.md#createNetworkMerakiAuthUser) | **POST** /networks/{networkId}/merakiAuthUsers | Create a user configured with Meraki Authentication for a network (currently supports 802.1X and Splash Guest users, and currently, organizations have a 50,000 user cap)
[**deleteNetworkMerakiAuthUser**](MerakiAuthUsersApi.md#deleteNetworkMerakiAuthUser) | **DELETE** /networks/{networkId}/merakiAuthUsers/{merakiAuthUserId} | Delete a user configured with Meraki Authentication (currently only 802.1X RADIUS users can be deleted)
[**getNetworkMerakiAuthUser**](MerakiAuthUsersApi.md#getNetworkMerakiAuthUser) | **GET** /networks/{networkId}/merakiAuthUsers/{merakiAuthUserId} | Return the Meraki Auth splash or RADIUS user
[**getNetworkMerakiAuthUsers**](MerakiAuthUsersApi.md#getNetworkMerakiAuthUsers) | **GET** /networks/{networkId}/merakiAuthUsers | List the splash or RADIUS users configured under Meraki Authentication for a network
[**updateNetworkMerakiAuthUser**](MerakiAuthUsersApi.md#updateNetworkMerakiAuthUser) | **PUT** /networks/{networkId}/merakiAuthUsers/{merakiAuthUserId} | Update a user configured with Meraki Authentication (currently only 802.1X RADIUS users can be updated)


<a name="createNetworkMerakiAuthUser"></a>
# **createNetworkMerakiAuthUser**
> Object createNetworkMerakiAuthUser(networkId, createNetworkMerakiAuthUser)

Create a user configured with Meraki Authentication for a network (currently supports 802.1X and Splash Guest users, and currently, organizations have a 50,000 user cap)

Create a user configured with Meraki Authentication for a network (currently supports 802.1X and Splash Guest users, and currently, organizations have a 50,000 user cap)

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.MerakiAuthUsersApi();

var networkId = "networkId_example"; // String | 

var createNetworkMerakiAuthUser = new MerakiDashboardApi.CreateNetworkMerakiAuthUser(); // CreateNetworkMerakiAuthUser | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNetworkMerakiAuthUser(networkId, createNetworkMerakiAuthUser, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **createNetworkMerakiAuthUser** | [**CreateNetworkMerakiAuthUser**](CreateNetworkMerakiAuthUser.md)|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNetworkMerakiAuthUser"></a>
# **deleteNetworkMerakiAuthUser**
> deleteNetworkMerakiAuthUser(networkId, merakiAuthUserId)

Delete a user configured with Meraki Authentication (currently only 802.1X RADIUS users can be deleted)

Delete a user configured with Meraki Authentication (currently only 802.1X RADIUS users can be deleted)

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.MerakiAuthUsersApi();

var networkId = "networkId_example"; // String | 

var merakiAuthUserId = "merakiAuthUserId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteNetworkMerakiAuthUser(networkId, merakiAuthUserId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **merakiAuthUserId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkMerakiAuthUser"></a>
# **getNetworkMerakiAuthUser**
> Object getNetworkMerakiAuthUser(networkId, merakiAuthUserId)

Return the Meraki Auth splash or RADIUS user

Return the Meraki Auth splash or RADIUS user

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.MerakiAuthUsersApi();

var networkId = "networkId_example"; // String | 

var merakiAuthUserId = "merakiAuthUserId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkMerakiAuthUser(networkId, merakiAuthUserId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **merakiAuthUserId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkMerakiAuthUsers"></a>
# **getNetworkMerakiAuthUsers**
> Object getNetworkMerakiAuthUsers(networkId)

List the splash or RADIUS users configured under Meraki Authentication for a network

List the splash or RADIUS users configured under Meraki Authentication for a network

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.MerakiAuthUsersApi();

var networkId = "networkId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkMerakiAuthUsers(networkId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNetworkMerakiAuthUser"></a>
# **updateNetworkMerakiAuthUser**
> Object updateNetworkMerakiAuthUser(networkId, merakiAuthUserId, opts)

Update a user configured with Meraki Authentication (currently only 802.1X RADIUS users can be updated)

Update a user configured with Meraki Authentication (currently only 802.1X RADIUS users can be updated)

### Example
```javascript
var MerakiDashboardApi = require('meraki_dashboard_api');
var defaultClient = MerakiDashboardApi.ApiClient.instance;

// Configure API key authorization: meraki_api_key
var meraki_api_key = defaultClient.authentications['meraki_api_key'];
meraki_api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//meraki_api_key.apiKeyPrefix = 'Token';

var apiInstance = new MerakiDashboardApi.MerakiAuthUsersApi();

var networkId = "networkId_example"; // String | 

var merakiAuthUserId = "merakiAuthUserId_example"; // String | 

var opts = { 
  'updateNetworkMerakiAuthUser': new MerakiDashboardApi.UpdateNetworkMerakiAuthUser() // UpdateNetworkMerakiAuthUser | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNetworkMerakiAuthUser(networkId, merakiAuthUserId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**|  | 
 **merakiAuthUserId** | **String**|  | 
 **updateNetworkMerakiAuthUser** | [**UpdateNetworkMerakiAuthUser**](UpdateNetworkMerakiAuthUser.md)|  | [optional] 

### Return type

**Object**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

