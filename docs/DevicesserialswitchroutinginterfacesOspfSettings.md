# MerakiDashboardApi.DevicesserialswitchroutinginterfacesOspfSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**area** | **String** | The OSPF area to which this interface should belong. Can be either &#x27;disabled&#x27; or the identifier of an existing OSPF area. Defaults to &#x27;disabled&#x27;. | [optional] 
**cost** | **Number** | The path cost for this interface. Defaults to 1, but can be increased up to 65535 to give lower priority. | [optional] 
**isPassiveEnabled** | **Boolean** | When enabled, OSPF will not run on the interface, but the subnet will still be advertised. | [optional] 