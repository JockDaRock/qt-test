# MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapingrulesDefinitions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of definition. Can be one of &#x27;application&#x27;, &#x27;applicationCategory&#x27;, &#x27;host&#x27;, &#x27;port&#x27;, &#x27;ipRange&#x27; or &#x27;localNet&#x27;. | 
**value** | **String** |     If \&quot;type\&quot; is &#x27;host&#x27;, &#x27;port&#x27;, &#x27;ipRange&#x27; or &#x27;localNet&#x27;, then \&quot;value\&quot; must be a string, matching either     a hostname (e.g. \&quot;somesite.com\&quot;), a port (e.g. 8080), or an IP range (\&quot;192.1.0.0\&quot;,     \&quot;192.1.0.0/16\&quot;, or \&quot;10.1.0.0/16:80\&quot;). &#x27;localNet&#x27; also supports CIDR notation, excluding     custom ports.      If \&quot;type\&quot; is &#x27;application&#x27; or &#x27;applicationCategory&#x27;, then \&quot;value\&quot; must be an object     with the structure { \&quot;id\&quot;: \&quot;meraki:layer7/...\&quot; }, where \&quot;id\&quot; is the application category or     application ID (for a list of IDs for your network, use the trafficShaping/applicationCategories     endpoint).  | 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `application` (value: `"application"`)
* `applicationCategory` (value: `"applicationCategory"`)
* `host` (value: `"host"`)
* `port` (value: `"port"`)
* `ipRange` (value: `"ipRange"`)
* `localNet` (value: `"localNet"`)

