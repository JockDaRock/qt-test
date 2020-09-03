# MerakiDashboardApi.CreateNetworkPiiRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | One of \"delete\" or \"restrict processing\" | [optional] 
**datasets** | **[String]** | The datasets related to the provided key that should be deleted. Only applies to \"delete\" requests. The value \"all\" will be expanded to all datasets applicable to this type. The datasets by applicable to each type are: mac (usage, events, traffic), email (users, loginAttempts), username (users, loginAttempts), bluetoothMac (client, connectivity), smDeviceId (device), smUserId (user) | [optional] 
**username** | **String** | The username of a network log in. Only applies to \"delete\" requests. | [optional] 
**email** | **String** | The email of a network user account. Only applies to \"delete\" requests. | [optional] 
**mac** | **String** | The MAC of a network client device. Applies to both \"restrict processing\" and \"delete\" requests. | [optional] 
**smDeviceId** | **String** | The sm_device_id of a Systems Manager device. The only way to \"restrict processing\" or \"delete\" a Systems Manager device. Must include \"device\" in the dataset for a \"delete\" request to destroy the device. | [optional] 
**smUserId** | **String** | The sm_user_id of a Systems Manager user. The only way to \"restrict processing\" or \"delete\" a Systems Manager user. Must include \"user\" in the dataset for a \"delete\" request to destroy the user. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `_delete` (value: `"delete"`)

* `restrictProcessing` (value: `"restrict processing"`)




