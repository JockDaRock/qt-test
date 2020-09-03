# MerakiDashboardApi.Body144

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the new network | 
**productTypes** | **[String]** | The product type(s) of the new network. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway. If more than one type is included, the network will be a combined network. | 
**tags** | **[String]** | A list of tags to be applied to the network | [optional] 
**timeZone** | **String** | The timezone of the network. For a list of allowed timezones, please see the &#x27;TZ&#x27; column in the table in &lt;a target&#x3D;&#x27;_blank&#x27; href&#x3D;&#x27;https://en.wikipedia.org/wiki/List_of_tz_database_time_zones&#x27;&gt;this article.&lt;/a&gt; | [optional] 
**copyFromNetworkId** | **String** | The ID of the network to copy configuration from. Other provided parameters will override the copied configuration, except type which must match this network&#x27;s type exactly. | [optional] 

<a name="[ProductTypesEnum]"></a>
## Enum: [ProductTypesEnum]

* `wireless` (value: `"wireless"`)
* `appliance` (value: `"appliance"`)
* `switch` (value: `"switch"`)
* `systemsManager` (value: `"systemsManager"`)
* `camera` (value: `"camera"`)
* `cellularGateway` (value: `"cellularGateway"`)

