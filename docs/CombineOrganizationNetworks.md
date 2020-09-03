# MerakiDashboardApi.CombineOrganizationNetworks

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the combined network | 
**networkIds** | **[String]** | A list of the network IDs that will be combined. If an ID of a combined network is included in this list, the other networks in the list will be grouped into that network | 
**enrollmentString** | **String** | A unique identifier which can be used for device enrollment or easy access through the Meraki SM Registration page or the Self Service Portal. Please note that changing this field may cause existing bookmarks to break. All networks that are part of this combined network will have their enrollment string appended by '-network_type'. If left empty, all exisitng enrollment strings will be deleted. | [optional] 


