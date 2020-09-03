# MerakiDashboardApi.CreateOrganizationNetwork

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the new network | 
**productTypes** | **[String]** | The product type(s) of the new network. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway. If more than one type is included, the network will be a combined network. | 
**tags** | **[String]** | A list of tags to be applied to the network | [optional] 
**timeZone** | **String** | The timezone of the network. For a list of allowed timezones, please see the 'TZ' column in the table in <a target='_blank' href='https://en.wikipedia.org/wiki/List_of_tz_database_time_zones'>this article.</a> | [optional] 
**copyFromNetworkId** | **String** | The ID of the network to copy configuration from. Other provided parameters will override the copied configuration, except type which must match this network's type exactly. | [optional] 


<a name="[ProductTypesEnum]"></a>
## Enum: [ProductTypesEnum]


* `wireless` (value: `"wireless"`)

* `appliance` (value: `"appliance"`)

* `_switch` (value: `"switch"`)

* `systemsManager` (value: `"systemsManager"`)

* `camera` (value: `"camera"`)

* `cellularGateway` (value: `"cellularGateway"`)




