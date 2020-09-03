# MerakiDashboardApi.NetworksnetworkIdappliancetrafficShapingrulesDefinitions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of definition. Can be one of 'application', 'applicationCategory', 'host', 'port', 'ipRange' or 'localNet'. | 
**value** | **String** |     If \"type\" is 'host', 'port', 'ipRange' or 'localNet', then \"value\" must be a string, matching either     a hostname (e.g. \"somesite.com\"), a port (e.g. 8080), or an IP range (\"192.1.0.0\",     \"192.1.0.0/16\", or \"10.1.0.0/16:80\"). 'localNet' also supports CIDR notation, excluding     custom ports.      If \"type\" is 'application' or 'applicationCategory', then \"value\" must be an object     with the structure { \"id\": \"meraki:layer7/...\" }, where \"id\" is the application category or     application ID (for a list of IDs for your network, use the trafficShaping/applicationCategories     endpoint).  | 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `application` (value: `"application"`)

* `applicationCategory` (value: `"applicationCategory"`)

* `host` (value: `"host"`)

* `port` (value: `"port"`)

* `ipRange` (value: `"ipRange"`)

* `localNet` (value: `"localNet"`)




