# MerakiDashboardApi.Body69

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | One of \&quot;delete\&quot; or \&quot;restrict processing\&quot; | [optional] 
**datasets** | **[String]** | The datasets related to the provided key that should be deleted. Only applies to \&quot;delete\&quot; requests. The value \&quot;all\&quot; will be expanded to all datasets applicable to this type. The datasets by applicable to each type are: mac (usage, events, traffic), email (users, loginAttempts), username (users, loginAttempts), bluetoothMac (client, connectivity), smDeviceId (device), smUserId (user) | [optional] 
**username** | **String** | The username of a network log in. Only applies to \&quot;delete\&quot; requests. | [optional] 
**email** | **String** | The email of a network user account. Only applies to \&quot;delete\&quot; requests. | [optional] 
**mac** | **String** | The MAC of a network client device. Applies to both \&quot;restrict processing\&quot; and \&quot;delete\&quot; requests. | [optional] 
**smDeviceId** | **String** | The sm_device_id of a Systems Manager device. The only way to \&quot;restrict processing\&quot; or \&quot;delete\&quot; a Systems Manager device. Must include \&quot;device\&quot; in the dataset for a \&quot;delete\&quot; request to destroy the device. | [optional] 
**smUserId** | **String** | The sm_user_id of a Systems Manager user. The only way to \&quot;restrict processing\&quot; or \&quot;delete\&quot; a Systems Manager user. Must include \&quot;user\&quot; in the dataset for a \&quot;delete\&quot; request to destroy the user. | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `delete` (value: `"delete"`)
* `restrict processing` (value: `"restrict processing"`)
